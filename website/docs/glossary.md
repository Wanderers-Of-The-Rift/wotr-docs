# Glossary

## Mod
* **Dimension Delvers**: Old project name.
* **Wanderers of the Rift**: Current project working name.
* **Rift**: Current working name for the randomly generated dungeons that the player will enter.
* **Rift Key**: Current working name for the item that can open a portal to a rift.
* **Theme**: The visuals and general content that is applied to a rift. Utilizes processors.

## Features
* **Gear Sockets *(PoC)***: The current working system to manage the modifiers on our weapons and armor.
* **Modifier *(Feature)***: Any powerup applied to a player or to something else, will be implemented using the modifier system. This system is comparable to enchantments, but much more advanced and under our control.
* **RiftMapper *(PoC)***: An attempt to create a map of the Rift. Will allow us to remove the minimap while in a rift. 
* **Runegem *(PoC)***: The current working system for crafting your items into better items. Specifically, when applied to a gear socket, it applies a modifier to the related item.
* **Transmogs *(Spike)***: A planned system that allows a player to change their looks towards any other collected gear piece.
 
## Project Management
* **Contributor**: Any person who requested the role in the discord. These people are the amazing group that intend to bring you this mod.
* **Coordinator**: Per subteam, two coordinators are assigned by popular vote. These coordinators have additional responsibilities within the project. They are responsible for ensuring all topics in their area are summarized and followed up on. You can contact your coordinator for any questions and challenges you face. Their role is purely assistance, they do not have any decisive power.
* **PM Group**: The small group of Project Managers. Their role is to ensure the project moves forward. They break ties and they ensure the team remains on focus.

## Dev Technical
### General terms
* **Java**: The programming language used by the team and by Mojang, to make Minecraft and our mods.
* **JSON**: The language used by datapacks to load data into Minecraft.
* **Mojank**: A word used by modding people when they refer to a piece of code written by mojang, that causes us to question their and sometimes our own sanity.
* **Project Board**: An overview of all open tasks for the Mod, you can asses it [HERE](https://github.com/orgs/Dimension-Delvers/projects/1).
### Project Board Tasks
* **Feature**: Something that is already decided or we have to do this either way. *Example: Rift Generation, Structure Generation, Modifier System (our better version of enchantments)*
* **Proof of Concept (PoC)**: One of the suggestions given by people. By creating a PoC, we will be able to test it out. To be considered a PoC, the concept needs to be well defined already. If we have a PoC and people have clear issues with the gameplay it brings, we must shift to on another PoC. *Example: Gear Sockets, Skill Crystals, Cost of dying*
* **Spike**: A spike is a concept that still requires discussion and investigation. Some preliminary work can be done, to see if the idea is feasible. A Spike can not be considered a PoC if aspects of it are still a Spike. Once a spike has been fleshed out enough on core concepts this should be converted to PoC as soon as possible to further expand and see how it tests *Example: Multiblock Altar, Wireframe Minimap, Abilities*
* **Datapack**: A task to add a set of jsons as per [the datapack formats](code/datapack/datapack-formats.md). This task usually follows up on a relevant code ticket. This can be picked up by people with no skills in java.

## Build Technical
* **JigSaw**: The technical vanilla minecraft system that is used to place a structure into the world.
* **Processors**: The technical vanilla minecraft system that allows a Structure Piece in a JigSaw to be modified and drastically change its looks.
* **Structure Piece**: A single piece of a JigSaw structure, in our case, one room.
* **Gridsize (lenght)**: The lenght of a single dimension of the smallest possible room. All other size rooms are multiplications of this (1x, 2x or 3x). The grid value we are working with is: 15.
* **roomsize**: The size of the rooms, often noted as XxYxZ, and mostly multiples of the gridsize is used, ie: 3x3x3. Note that the Y value denotes height.
* **Standard room**: Rooms made out of processor blocks, that after being processed, makes the rooms the game is played in. Standard come in varying room sizes. 
* **Processor blocks**:	A few groups of blocks that the processor replaces with themed blocks. Those blocks are used in standard rooms, to be themed with a processor every time they are generated in game.
* **Theme**: A set of blocks linked to each used processor block, all with a weight (probability). The processor uses this to determine which block needs to be used to replace every processor block in the standard room.
* **Point of Interest (PoI)**:	A small structure that is generated inside the room, containing mob spawners and loot. They can be either: standing isolated on ground, partly inside the wall, in a corner, or hanging from the ceiling. All can have varying sizes.
* **Doorway**: A 3x5 hole in the wall, through which a player gets in or out of a room. They are on set locations, often (but not exlusively) 1 on each vertical face, so 4 per room. Rooms are generated from doorway to doorway, with a ring in between.
* **Ring**: A 3x5x1 ring of blocks, between 2 doorways. They are used to connect rooms, and to generate the next room.
* **Stable room**: A strictly 3x3x3 room, with a door in the middle of each verical face. All 4 doors are easely reachable from one another, without having to dig or travel large parts of the room. Stable rooms are the first rooms in the rift, and they are straightforward and coherent.
* **Unstable room**: A 3xYx3 room, with doors in the center only. The doors are not necessarily easily reachable, and a player might require to first travel to a corner, before having access to the door. Mostly used as a room between Stable and Chaos.
* **Chaos room**: All other rooms that are not Stable or Unstable. Doors are on set places, but not all door are open, and not every face has exactly 1 door. Those rooms are confusing and complex, and are placed on the outside of the rift.
