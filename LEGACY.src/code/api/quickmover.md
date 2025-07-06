# QuickMover

QuickMover is a helper for defining the quickMove (shift-click) behavior in menus. It allows declaring the desired
movement of items between slots, with standard player inventory behavior built in. The implementation is designed
to work with both standard container slots and NeoForge's ItemHandler slots.

## Usage

Within a Menu, instantiate a QuickMover using its builder (via `QuickMover::create`). Using the builder the behavior
of individual slots, ranges of slots and the player inventory slots can be defined by providing the movements that should
be attempted when shift-clicking on those slots. The player slots should be defined first if present - this just needs
to provide the index of the first player slot. Doing so will add the default behavior of switching items between the
player's inventory and their hotbar if there are no other possible moves.

The implementation of `AbstractContainerMenu::quickMoveStack` should delegate to the `QuickMover::quickMove`. 

```java
private final QuickMover mover;

public MyMenu(int containerId/*, ... */) {
    //...
    mover = QuickMover.create(this)
            // Specify there are player slots and the slot they begin from.
            .forPlayerSlots(INPUT_SLOT_COUNT + OUTPUT_SLOT_COUNT)
            .tryMoveTo(0, INPUT_SLOT_COUNT)
            // Specify slot 0 will first try to move to slot 1, then to the player's inventory (including hot bar)
            .forSlot(0)
            .tryMoveTo(1)
            .tryMoveToPlayer()
            // Specify slot 1 will first try to move to slot 1, then to the player's inventory
            .forSlot(1)
            .tryMoveTo(0)
            .tryMoveToPlayer()
            // Specify that slot 2, through to 2 + OUTPUT_SLOT_COUNT exclusive, will just try to move to player's inventory
            .forSlots(2, OUTPUT_SLOT_COUNT)
            .tryMoveToPlayer()
            .build();            
}

@Override
public @NotNull ItemStack quickMoveStack(@NotNull Player player, int index) {
    return mover.quickMove(player, index);
}
```

