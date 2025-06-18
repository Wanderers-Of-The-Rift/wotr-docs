# Configurable HUD

Wanderers of the Rift has a system for defining HUD elements whose rendering location can be configured, including the possibility of rotating for
compatible elements.

## Principals

A HUD element is rendered relative to a `ScreenAnchor`. There are nine of these - one for each corner of the screen, one for the center of each
side of the screen, and one for the center of the screen. Being anchored means that regardless of the screen size the element should moved to maintain the
same offset from that anchor. For example, when you resize the screen the hotbar remains attached to the bottom-center of the screen.

To achieve this the size of the HUD element needs to be known - its width and height. This allows the correct top-left position to be determined.

For HUD elements that can grow or change sizes, this growth should ideally be "away" from the anchor. For example, when the player gains
additional hearts, they should appear in a new row above if anchored to the bottom of the screen, and a new row below if anchored to
the top of the screen.

## Configuration Info

Each HUD element has the following configuration:
- Whether the element is visible
- Where the element is anchored
- The x,y offset of the HUD element in pixels. This is applied relative to where the element is anchored.
- Optionally, the orientation of the element if rotation is supported.

## Usage

### Adapting an existing HUD element

For use with vanilla or HUD elements from other mods.

In ClientConfig, add a `HudElementConfig` for the HUD element - this will capture the player's configuration. Ensure the default values reflect
how the element is placed normally:

```java
public static final HudElementConfig EXPERIENCE_BAR;

static {
    // For example, minecraft experience bar is displayed relative to the bottom-center of the screen
    EXPERIENCE_BAR = new HudElementConfig.Builder("Vanilla Experience Bar", "xpBar")
            .anchor(ScreenAnchor.BOTTOM_CENTER)
            .offset(0, -24)
            // If not specified, the element cannot be rotated
            .rotates(UIOrientation.HORIZONTAL)
            .build(builder);
}
```

Next register a ConfigurableLayerAdapter for the element - this will intercept the rendering of element and reposition (and optionally rotate) it based
on the configuration. A basic fixed size adapter is provided to handle basic HUD elements - this requires knowing the maximum width and height of the element.
A separate DeferredRegister should be used for vanilla and each mod.

```java
public static final DeferredRegister<ConfigurableLayer> VANILLA_LAYERS = DeferredRegister
        .create(WotrClientRegistries.Keys.CONFIGURABLE_LAYERS, "minecraft");

public static final Supplier<ConfigurableLayerAdapter> VANILLA_XP_BAR = VANILLA_LAYERS.register(
            VanillaGuiLayers.EXPERIENCE_BAR.getPath(),
            () -> new FixedSizeLayerAdapter(Component.translatable("hud.minecraft.experience_bar"), ClientConfig.EXPERIENCE_BAR, 182, 5, List.of(VanillaGuiLayers.EXPERIENCE_BAR)));
```

For more advanced handling a custom adapter can be created by implementing `ConfigurableLayerAdapter`. This provides access to `preRender`, `render`, and `postRender` for the layer.
This can be used to manipulate the poseStack to reposition and rotate the existing layer when it is rendered. Do take care to undo any transformations made in `preRender`.

### Creating a native configurable HUD element

First, once more will need to add a `HudElementConfig` for the new HUD element:

```java
public static final HudElementConfig MANA_BAR;

static {
MANA_BAR = new HudElementConfig.Builder("Mana Bar", "manaBar").anchor(ScreenAnchor.TOP_LEFT)
                .offset(25, 0)
                // Optional, if rotates is not specified then the HUD element will not be rotatable
                .rotates(UIOrientation.VERTICAL)
                .build(builder);
}
```

The HUD element itself should implement `ConfigurableLayer` - this requires implementing four methods. These are used primarily
by the configuration UI.

```java
public class ManaBar implements ConfigurableLayer {
    /**
     * @return The name of the Layer (for display in tooltip)
     */
    public Component getName() {
        return Component.translatable("hud.mymod.manabar");
    }

    /**
     * @return The configuration that controls the layer's positioning
     */
    public HudElementConfig getConfig() {
        return ClientConfig.MANA_BAR;
    }

    /**
     * @return The width to display the element in the configuration screen. Ideally this is the display width of the
     *         element, but may be representative of its potential width instead. Should not be zero. Should account
     *         for rotation though.
     */
    public int getConfigWidth() {
        return getConfig().getOrientation() == UIOrientation.VERTICAL ? 10 : 100;
    }

    /**
     * @return The height to display the element in the configuration screen. Ideally this is the display height of the
     *         element, but may be representative of its potential width instead. Should not be zero. Should account
     *         for rotation though.
     */
    public int getConfigHeight() {
        return getConfig().getOrientation() == UIOrientation.VERTICAL ? 100 : 10;
    }
}
```

Beyond this, when rendering the element should use the config to determine where it should render:

```java
@Override
public void render(@NotNull GuiGraphics guiGraphics, @NotNull DeltaTracker deltaTracker) {
    // General check for whether to render the element, including a getConfig().isVisible check.
    Minecraft minecraft = Minecraft.getInstance();
    if (minecraft.options.hideGui || !getConfig().isVisible() || minecraft.gameMode == null
            || minecraft.gameMode.getPlayerMode() == GameType.SPECTATOR) {
        return;
    }
    
    // Determine the width and height of the element. This may need information about the player or state of the game
    int width = calcWidth();
    int height = calcHeight();
    
    // Top-left screen pos to render the element in
    Vector2i pos = getConfig().getPosition(width, height, guiGraphics.guiWidth(), guiGraphics.guiHeight());
    // Other config settings such as orientation can be used to determine how to render too.
    UIOrientation orientation = getConfig().getOrientation();
}
```

The HUD element should be registered as a configurable layer:

```java
public class ModConfigurableLayers {
    public static final DeferredRegister<ConfigurableLayer> LAYERS = DeferredRegister
            .create(WotrClientRegistries.Keys.CONFIGURABLE_LAYERS, Mod.MODID);

    public static final Supplier<ConfigurableLayer> MANA_BAR = LAYERS.register("mana_bar", ManaBar::new);
}
```

and should also be registered as a GuiLayer:

```java
@EventBusSubscriber(modid = Mod.MODID, bus = EventBusSubscriber.Bus.MOD, value = Dist.CLIENT)
public class ModGuiLayers {
    public static final ResourceLocation MANA_BAR = ResourceLocation.fromNamespaceAndPath(Mod.MODID, "mana_bar");
    
    @SubscribeEvent
    public static void registerGuiLayers(RegisterGuiLayersEvent event) {
        event.registerAbove(VanillaGuiLayers.HOTBAR, MANA_BAR, ModConfigurableLayers.MANA_BAR.get());
    }
}

```

