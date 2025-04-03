<!-- 
Created by: Wout
Date: 2025-04-03
-->

## Chapter 4: Making processors
To start with processor generation, download the following zip file:
`json_generator.zip` from [here](https://discord.com/channels/1328761294085554176/1335631637769097236/1357334905922523236). 
It uses [Python 3](https://www.python.org/downloads/).
It is also useful to open Jade plugin setting in-game (num 0 by default), scroll down to the very bottom and enable both "Registry Name" and "Block States".
This makes you able to see the names of the blocks you want to use, and their properties.  
In the sheets, only the **yellow** cells should be filled in, but not all yellow cells need to be completed.
### Custom processors
To create a custom processor for 1 processor block, use `processor_single_sheet.xlsx`. If you want to use a custom processor for multiple processor blocks, use
`processor_multiple_sheet.xlsx` instead. You only need to fill in the yellow cells of the blocks you've used, but make sure it is for the right number processor block.
State is the block the processor block turns into, for example `minecraft:stone`, and step is the portion that will get this state. It is not equal to percentage,
as it scales exponentially down. A step size of 25 for block A and 75 for block B will give a 50/50 distribution when generated. The random noise used is simplex, 
it will generate smooth, organic-looking patterns with continuous gradients, like layered spheres. The sum of the steps need to equal 1, anything higher will not get 
used, and lower means some of the processor blocks will not get transformed.
Checksum will turn green if the total is 1, as indicator.

A processor will generate a number between 0 and 1, and will look what block it wants to replace.
Then, it will stack the steps from left to right, adding the numbers, and look for the block that belongs to this number.
Let's say it wants to replace `processor_block_10`, and generates number `0.7`. Now if, for example, in the spreadsheet you
have `minecraft:stone   0.6` and `minecraft:dirt   0.4`, it will replace `processor_block_10` into `minecraft_dirt`. If, instead,
the number generated was `0.3`, the block turns into `minecraft_stone`. So, every block is like another layer in an onion, with the step sizes
being the thickness of the layer, and the left-most step being the outer layer.

When you're done filling in the rows of the blocks you have used, save the sheet as:
`processor_single_sheet.csv` or `processor_multiple_sheet.csv`, respectively. Place this file in the same folder as the belonging python script 
(`single_json_generator.py` or `multiple_json_generator.py`). Run this, and enter the type of structure you want this processor for, either Room or POI.
Do not change the output name, please.

The last thing to do, is filling in the name of your custom processor into the Builders sheet, and give the json file to a Build Coordinator.
When approved, they will put it into the mod, together with your structure.

### Making a theme
Before making a theme, please inform the Build Coordinator, to make sure it can get used and no double themes are made. To start making a theme, use the `processor_theme_sheet.xlsx` sheet.
Theme making is similar to custom processor making, but require a state for every processor block. This is because builders can use every fixed processor block, with the knowledge it
will be processed when generated. The checksum column should be fully green.
Save this as `processor_theme_sheet.csv`, and run the python script. Enter Room or POI (often you want both, so run twice), and pick the custom choices in the popup. For POIs this is
only a chest for now, so press "OK", and you're done. For rooms, more options are available. At the top, there are a few toggle options, for if you want mushrooms or not, 
for example. Below that, under the "Attachments" section, there are more customizable options. A list of example attachments is below in Appendix A. This can
generate lanterns on the ceiling, rails on the floor, or bee nests on the walls, for example, but more are possible. "Name" is the name of the block you want to attach, 
"Rarity" is how often it occurs (between 0 and 1), "Up" is if it requires to touch the ceiling, "Down" is for when it requires to touch a floor, "Sides" is for how many walls it has to 
be up against, "Property" is a block property you can give it, and "Value" is the value of that property. Try different rarities and properties to find whatever suits your theme.
Using Jade in-game with the advanced settings enabled, you can find the properties in the box. It is currently not possible to adjust the "facing" property to the wall it touches, so 
torches against the wall do not stick out of the wall, but are rotated.

## Chapter 5: Questions? Ask for help!
If there is anything that is not clear, or would like to know a bit more about, do not hesitate to ask questions in the [build chat](https://discord.com/channels/1328761294085554176/1335631637769097236)! 
There are enough members willing
to help you out. It is also very possible that more info needs to be given in this tutorial, so don't hold back.  
AND SAVE YOUR STRUCTURES!

## Appendix A
| Description            | Name                        | Rarity | Up | Down | Sides | Property 1         | Value 1  | Property 2  | Value 2 |
|------------------------|-----------------------------|--------|---|------|-------|--------------------|----------|-------------|---------|
| Lantern on ceiling     | minecraft:lantern           | 0.01   | V |      |      | hanging            | true     |        |      |
| Rails on the floor     | minecraft:rail              | 0.02   |   | V    |     |          |  |     |    |
| Bee nests on walls     | minecraft:bee_nest          | 0.01   |   |      | 1     | honey_level        | 5        |         |    |
| Stalactites            | minecraft:pointed_dripstone | 0.02   | V |      |       | vertical_direction | down     |         |    |
| Stalagmites            | minecraft:pointed_dripstone | 0.02   |   | V    |       | vertical_direction | up       |         |    |
| Cobweb in corners      | minecraft:cobweb            | 0.05   | V |      | 1     |                    |          |         |    |
| Glowberries on ceiling | minecraft:cave_vines        | 0.01   | V |      |      | berries            | true     |         |    |
| Waterlogged chain      | minecraft:chain             | 0.05   |  | V    |      | axis               | y        | waterlogged | true    |
| Random floating slime  | minecraft:slime_block       | 0.05   |   |      |      |                    |          |         |    |
