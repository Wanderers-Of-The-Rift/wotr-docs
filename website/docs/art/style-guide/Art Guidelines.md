>___*NOTE:*___ This guideline will more than likely grow a lot as we make more progress. After an internal overview and discussions, we have gathered quite a few things to help us give everyone a bit more of some art direction and guidelines to help us move art a bit forward.

# Art Guidelines
- These guidelines apply to all our art-making
- These are our Minecraft-related technical guidelines
- General tips and tricks, sizes, ratios, how-tos etc.
- We are very much so trying to stick to a traditional "minecraft" style
- We want to promote creativity but do not go overboard on polys, voxels, rotations, number of cubes, etc.
- When making icons we also will be following the minecraft icon art style
- New block ideas also need to follow a minecraft-inspired artsyle


## Main Guidelines 
- 16 x 16 pixel ratio for all the artwork.
- Stay within the realm of Minecraft style.
- Icons/sprites have a darkened border around them.

We should try to always keep this style aspect because it's what makes items look like they are in a Minecraft style. The amount of how dark a border is can be subjective, but I would refrain from using pure black.
Many may not realize but even the darker border follows shading/lighting where the bottom sides are often darker to give a shadow effect.

![border](/img/style-guide/border.png)

### Shading
It can be subtle or even a bit more contrasting.

![border shading](/img/style-guide/border-shading.png)



### Slot
A Minecraft item slot in almost all GUI containers like the inventory are all 16x16
As much as humanly possible we should strive to always keep a 1px space between items and the border of the 16x16 box

![item slot](/img/style-guide/item-slot.png)

> **Margin:** sometimes this is not always possible, but we should try to keep it this way as much as we possibly can. 

![margin](/img/style-guide/margin.png)

Here is an example of how it sometimes does not:
- It's okay if small parts sometimes touch the edges, just try to refrain from having things touch edges as much as possible. (This only applies to items that will be in inventory - this does not apply to icons like abilities)

![margin exception](/img/style-guide/margin-exception.png)


### Simplify
Icons should be fairly simplified, but this does not mean that they should be flat or boring. This means that you should really try to simplify your drawing/idea as much as you can while still being able to convey what it is clearly to the audience.
If you make very over-complicated icons, the details can get lost or blend together when small - making it hard or impossible for viewers to understand what the item is.

![simplify](/img/style-guide/simplify.png)

### 3D Objects, Workbenches, Etc.
- Keep 3D builds as simple as possible and let the texture do most of the heavy lifting,
- Try to use 0.5 or less measurements MINIMALLY or as LEAST AS POSSIBLE, you can use 1px poly/voxels and up totally fine, we just request to use .5 and lower a minimal as possible (very very rarely and only if really needed).
- No trying to make crazy circles or cylinders,
- Try to use full boxshading UV when possible (where the full texture map is on one .png file),
- Your file sizes can be larger like 64x64 but keep 16 pixel "look"/ratio on all designs

![details](/img/style-guide/angles.png)

- Do not use too many shapes/voxels/polys for "details" when those details could be achieved with the texture
- Try to be sparring with your amount of polys/voxels,
- Most small objects like teeth and other details are usually flat and not full small voxels

![small details](/img/style-guide/small-details.png)

- 3D and block textures should also follow the 16x16 pixel ratio rule
- Always make sure that the tiling of a block makes sense and doesn't create weird shapes or has a disconnected tiling effect
- You typically want to be creating seamless tiles in most cases. Of course there are exceptions - and they are for a good reason.

![tiling](/img/style-guide/tiling.png)
![tiling exception](/img/style-guide/tiling-exception.png)

- 3D references and workstation examples

![3D-examples-chiselworkbenches](/img/style-guide/workbenches.png)
![3D-examples-cataclysm-workbenches](/img/style-guide/cataclysm-workbenches.png)
![3D-examples-cataclysm-bosses-1](/img/style-guide/cataclysm-bosses-1.png)
![3D-examples-cataclysm-bosses-3](/img/style-guide/cataclysm-bosses-3.png)
![3D-examples-create](/img/style-guide/create-thumbnail.png)

### Creating Minecraft MCmeta Animations
- Minecraft animation on most items and block textures are done using MCmeta files and the code that tells minecraft how to run the animation
- You have to create a single file that is a vertical animation strip
- Minecraft frames ALWAYS start with Zero 0 as the number for the first frame
- Animation files always have a corresponding .mcmeta text file with the animation code
- You can find out more about MCMeta files here: [Minecraft Wiki](https://minecraft.wiki/w/Resource_pack)


![animated-textures-5](/img/style-guide/animated-textures-5.png)

![animated-textures-3](/img/style-guide/animated-textures-3.png)

![animated textures 6](/img/style-guide/animated-textures-6.png)

### Following A Theme
We will be following a palette theme for a great majority of the work. There will also be some other theme sub-types that may be added later on, it's good to always to make sure your work stays on theme and follows the art directions,
there are examples of how other mods stay "on-theme".

- Cataclysm Theme Example

![cataclysm-title](/img/style-guide/cataclysm-bosses-2.png)
![cataclysm-themes](/img/style-guide/cataclysm-themes.png)
![3D-examples-cataclysm-bosses-3](/img/style-guide/cataclysm-bosses-3.png)

- Ars Nouveau Theme Example

![ars-nouveau-1](/img/style-guide/ars-nouveau-1.png)
![ars-nouveau-2](/img/style-guide/ars-nouveau-2.png)
![ars-nouveau-3](/img/style-guide/ars-nouveau-3.png)

- Enllightened Mod Theme Example

![enlightened-mod-color-schemes-1](/img/style-guide/enlightened-mod-color-schemes-1.png)
![enlightened-mod-color-schemes-2](/img/style-guide/enlightened-mod-color-schemes-2.png)
![enlightened-mod-color-schemes-3](/img/style-guide/enlightened-mod-color-schemes-3.png)

- Deeper and Darker Theme Example

![deeper-and-darker-2](/img/style-guide/deeper-and-darker-2.png)

### Naming Art Asset Files
- ___ALL___ art file names in Minecraft are ___ALWAYS___ all named in ___lowercase___
- Art asset file names should ___NEVER___ include spaces and should always use underscores ```_``` in place of spaces.
- If working on a group of items that are the same item type, but have a different variation always make sure to include the item type+variation in the naming. Example:
    - ability_fireball.png
    - ability_iceshard.png
    - ability_bolt.png
    - ability_dash.png

Also name your layers and groupings and such in blockbench with lowercase letters and underscores in place of spaces, this will be a great help to the devs, because if you don't do this then they have to spend extra time renaming all your assets/layers/etc.

![naming-rules](/img/style-guide/naming.png)

### Exporting Artboards
- Make sure you export the item inside and with the artboard size
- Item sprites need to be exported as a full 16px x 16px file

![export size](/img/style-guide/export-size.png)

- Item sprites should be exported with transparent backgrounds
- Opacity on items doesn't work the way you want it to
- Low-opacity spot tend render full opacity (unless dev coded for that effect)

![transparent background](/img/style-guide/transparent-bg.png)

- This low opacity rouge pixel would render full opacity in-game

![opacity](/img/style-guide/opacity.png)

#### Checking Items Against Minecraft Grey

- It's really important to check if your art assets work well against minecraft grey like in the inventory and hotbars
- It's best to work with that grey as your "paper color" or "background color" while working to help you see if your art has enough contrast against minecraft grey
- Minecraft grey hex code is around: ```#8b8b8b```

![minecraft-grey](/img/style-guide/minecraft-grey.png)

### GUI/Sprite Sheets

- When creating GUI sheets or sprite sheets it's best to make sure all your elements are not floating willy-nilly around in the artboard.
- You need to align the elements to the top-lefthand side of the document as much as you possibly can (within reason)
- It is okay for elements to be next to each other or touching. You want to cut down on as much space between elements as possible.
- If you have a sprite sheet with a bunch of icons (like abilities) on it, then make sure each icon is contained how you wish it to show up, and the sprites are inside a grid that is evenly spaced

![beacon-gui](/img/style-guide/beacon-gui.png)
![gui-icons](/img/style-guide/icons-gui.png)

### 9-Slicing

- 9 Slicing is when you have a design that is sectioned into 9 pieces/slices to be able to be used in a repetitive manner for adaptive designs.
- Below is an example of 9-Slicing this inventory GUI design to be able to be as big or small as needed
- Instead of creating all the pre-determined sizes, this gives us (basically) infinite possibilities.
- Some people do not like working with 9-slicing, nor is it something that should always be used (use when it makes sense to use it.)
- Each slice (usually) needs to be sliced into equally sized sections.

![slicing-img](/img/style-guide/slicing.png)

### Plants / Flowers / Saplings

- Some items/designs have exceptions to the rules. Example:
    - Plants and flowers for example do not typically follow the darker border rule
    - Plants and flowers also do not typically follow the 1 pixel padding rule within the 16x16 frame
    - Plants and flowers also typically make a X crisscross when placed down 3D
    - Or they can also have different 3D designs like the spore blossom for example





| | |
|---|---|
| ![flowers-4](/img/style-guide/flowers-4.png) | ![flowers-1](/img/style-guide/flowers-1.png) | 
|  ![flowers-3](/img/style-guide/flowers-3.png) |

### Complexity
- We don't want to go with anything to "over complex"
- Like said before we want to try to let texture do "most" of the heavy lifting whenever possible
- In terms of complexity, here are some prime examples of how complex (rather how non-complex) 3D things should be
- Use as many normal cubes as possible and try not to create complex-gons like octagons, hexagons, pentagons, etc. (very rarely use)
- Here are some examples to help get an idea of our level of 3D model complexity
- This doesnt apply the /exact/ same way to weapons/armor/mobs but should be also taken into consideration when making those

| | | |
|---|---|---|
| ![complexity-1](/img/style-guide/complexity-1.png) | ![complexity-2](/img/style-guide/complexity-2.png) | ![ars-nouveau-2](/img/style-guide/ars-nouveau-2.png) |
| ![complexity-3](/img/style-guide/complexity-3.png) | ![complexity-4](/img/style-guide/complexity-4.png) | ![complexity-5](/img/style-guide/complexity-5.png) |
| ![complexity-6](/img/style-guide/complexity-6.png) | ![complexity-7](/img/style-guide/complexity-7.png) | ![complexity-8](/img/style-guide/complexity-8.png) |

## Other examples

### Color Schemes

| | |
|---|---|
| ![palettes 1](/img/style-guide/palettes-1.png) | ![palettes 2](/img/style-guide/palettes-2.png) | 
| ![palettes 3](/img/style-guide/palettes-3.png) | ![palettes 4](/img/style-guide/palettes-4.png) |


### Design Inspo Based On Recipes
![cataclysm anvil 1](/img/style-guide/cataclysm-anvil-1.png)
![cataclysm anvil 2](/img/style-guide/cataclysm-anvil-2.png)