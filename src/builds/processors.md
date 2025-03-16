## Processor workings
The processors inputs a theme and a room, and turns the processor blocks in that room into the according blocks that the theme provides.  
The room is made from different processor blocks, that dictate the layout.  
The theme is a sort of dictionary, translating every processor block into several themed blocks, with a given weighting.  
For example: for cave theme, `processor_block_1` turns into 80% stone, 20% andesite. For wood theme, `processor_block_1` turns into 60% oak planks, 20% birch planks, 20% dark oak planks.

Themes are WIP


## Fixed and Extra Processor blocks
Processor blocks 1 through 7 are fixed, every theme can replace them.  
Processor blocks 8 through 14 are extra, not fixed, and a seperate processor has to be provided, specific to that room. That processor runs along additionally to the standard processor, so both pools can be used.  
Additional processors can be re-used, so multiple rooms can use the same additional processor. This means that multiple rooms can have a demand for themed glass, for example, even though themed glass is not a fixed processor. The required additional processor has to be indicated in the "Extra processor blocks used" forum.

Correct notation is WIP


## More Processor capabilities
There are processors that can place flowers and mushrooms on the floor, cobweb and vines against the wall, and fill flower pots with a long list of flowers, and alike. They can run over a room on request, or be theme dependent. This means that they dont have to be placed by the builder.  
Sometimes, it may be useful to pick an extra processor block dedicated to eg. leaves, to be sure leaves are placed in a tree-top shape.  
