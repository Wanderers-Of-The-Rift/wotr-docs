# Minimum Viable Product (MVP)
## What is an MVP?
An MVP is a product with just enough features to satisfy the early players, and to provide feedback for future mod development. It is a product that is developed with the least amount of effort and resources, but still has enough features to be usable and valuable.

In other words, it is the "simplest" form of the mod as the team envisions it.

## Why is an MVP important?
An MVP is important because it allows the team to get feedback from the players early on in the development process. We set up an MVP to get something available fast. Our hope is that by doing so, the  team could get to work early, without having to wait for a decision process.

We also firmly believe that seeing is understanding. Having the players actually test the features will help them better understand and allows them to give feedback based on actual experience.

## What about the polling process?
We split the tasks in the MVP into 3 categories, Spike, Proof of Concept (PoC) and Feature (see [Glossary](glossary.md)). While a feature is a certainty, the other two are not. The polling process ican still make these PoCs and Spikes into actual features, but they might also be getting scrapped completely. The developers should be aware that anything they make is not considered final until a poll is done.

## The 3 Levels of features
We identify 3 levels of features, with varying degrees of decidedness.
* **Feature**: Something that is already decided or we have to do this either way. *Example: Rift Generation, Structure Generation, Modifier System, Remove Durability*
* **Proof of Concept (PoC)**: One of the suggestions given by people. By creating a PoC, we will be able to test it out. If we only have 1 implemented PoC and we are all satisfied, then we might as well make it core. If we have a PoC and people have clear issues with the gameplay it brings, we must spend time on another PoC. *Example: Gear Sockets, Skill Crystals, Cost of dying, Abilities*
* **Spike**: A spike is something we know we need, but we have not yet discussed how to do it, or maybe we have discussed it, but no clear path to implementation. Spikes can be very exploratory, sometimes even involving a mini PoC. Spikes generally should not be too long, just enough time to prove it might work. *Example: Multiblock Altar, Wireframe Minimap*

## MVP Featurelist
The MVP contains following features:
* Basic Stat System - Should be easily accessible from other systems
    * *Spike*: Vanilla Attributes => Make a list of Vanilla attributes and missing attributes we need
    * *Feature*: Entity Modifiers, based on vanilla Enchantment code, but better, for **max Datapacking power** => Usable for Gear Sockets, Implicits, Skill Trees, Food, Collectable unlocks, Levelling system, Champion Mobs, ...
* Ability System
    * *PoC*: Abilities are datapackable and allow for a lot of variety. They have cooldowns and are each triggered by a configurable keybind.
    * *PoC*: Abilities are stored on an item that you equip in a set of special slots
    * *PoC*: Abilities have a randomized Skill Tree that gives minor boosts to the ability.
* Gear
    * *PoC*: Socket System
        * Runegems drop that can be applied to gear to give it a modifier
        * Runegems have different tiers of power
        * Gear can have up to 6 sockets
        * Each Socket can only take one shape of runegems
        * The Rune Anvil is used to apply runegems to gear
        * Vanilla gear can also have Gear Sockets.
    * *PoC*: Enchantments completely removed
* Rift
    * *Feature*: Player Accessing the Rift (Entering/Leaving) => Dimension Generation
    * *Feature*: Rift Generation => Basic Jigsaw Structure Generation
      * Rooms, with the smallest unit being 15x15x15 in size.
      * Passages, that connect various rooms
      * Points of Interest within a room
    * *PoC*: Rift Stability System
        * The further away from the rift portal you go, the messier and more difficult to travers the rift becomes.
        * The stable areas have easy to traverse terrain and always 4 central exits on the sides.
        * The unstable areas still have the 4 exits, but make it more difficult to reach them.
        * The chaos areas have different size rooms and corridors, and the placement and number of exits is more randomized. (Not part of MVP)
    * *Spike*: PoIs => Points of Interest
        * 3x3, 5x5, 7x7, 9x9
    * *PoC*: Processors are used to generate Themes
        * *PoC*: Simple Cave theme
        * *PoC*: Simple Forest theme
    * *PoC*: Rift Key Creation is done by distilling blocks into essences and these essences help dictate what kind of theme is generated.
    * *PoC*: Portal Block that can be used to make a freestanding portal or one against a wall.
    * *PoC*: RiftMapper, a system to display the rift in a 3D map.
* Rift Content
    * *Spike*: Spawner => Make vanilla mobs spawn in a configurable way using Processors
    * Only vanilla mobs will spawn
    * *PoC*: Chests and chestlooting
        * just 1 chest for MVP and no chest slicing for MVP.
    * *Spike*: Simplest objective (Kill X monsters)
* Other
    * *Spike*: Keep original Inventory system for rift
    * *Feature*: Removal of durability.