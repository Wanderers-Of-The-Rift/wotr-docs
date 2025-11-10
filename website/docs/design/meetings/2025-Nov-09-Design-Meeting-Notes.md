# Design: Loot Categories

> ### _November 9, 2025_
> - jyu
> - mal
> - moomar
> - rev
> - rora
> - special
> - warren
> - whale
> - wout
> - dany
> - rachael
> - galactic


## Focus
Define loot/reward system for 0.3.0 (Rift Expansion)
- categories
- sources/earning methods
- integration with core loop (Prepare, Rift, Advance)

---

## Loot Purpose & Pillars Alignment
### Core Questions
- What rewards motivate re-entering Rifts?
- What do players prioritize when opening chests?
- Does loot align with pillars?

### Pillar Framework
- Meaningful Progression: Does loot make players stronger or open new build options?
- Shape Your Own Path: Does loot allow customization or different playstyles?
- Curiosity and Awe: Is loot exciting and cool to find?

### Player Responses
- Satisfying and useful loot (crafting resources, weapon fragments)
- Currently: Geodes for gear upgrades
- Gear-related rewards priority
- Gear improvements expected every 3-4 runs
- Abilities and environmental looting for streamlined crafting
- Short-term goals keep engagement

---

## Integration Approaches
### Hybrid Approach
- Mix Vanilla and Rift aspects
- Keep Vanilla for sandbox farming and familiarity
- Build into Rift system without removing Vanilla unless necessary
- Maintain Minecraft vernacular for newer players (eg. "Rift biomes" vs "Rift themes")

### Rift-Focused Approach
- Design systems within Wanderers of the Rift framework
- Overworld still exists but not required for progression
- Players can complete mod entirely without Overworld interaction
- Use Minecraft as game engine rather than framework (total conversion approach)

---

## Loot Categories
### Category List
#### Gear & Weapons
- Gear bases and/or components for crafting
- Keep as single category until further clarification

#### Gear Upgrade/modification Related
- Runegems+

#### Ability Related
- Skill thread
- Abilities

#### Rift Related
- Essence
- Modifiers

#### Transmog & Vanity
- Skins, paints
- Not one-time collectibles (find multiple times for new gear pieces)

#### Collectibles
- Lore bits, hints
- Maps or clues for exploration

#### Consumables
- Looted items used from inventory (food, potions)
- Provide bonus stats
- Option if player didn't prepare well

#### Instant Loot
- Immediate effect upon pickup (doesn't enter inventory)
- Examples: Dropped hearts for instant healing, directional maps
- Combat-related drops from spawners or mobs
- Buffs: Increased loot chance on next chest after clearing mobs

#### Quest/Objective Loot
- Items requested by guilds
- Rift-specific objectives
- Example: Scavenger items (Vault Hunters reference)

#### Resources/Materials
- Building blocks
- Crafting recipe components
- Mod components linking Rifts to Overworld
- Support builders and extra mod users

#### Sellables/Junk/Filler
- No real purpose but take inventory space
- Minor resource gain when sold to traders
- Example: Soul Harvester extractor (Vault Hunters)

### Categories Removed/Reconsidered
- Currency: Technically loot but not physical item (less focus)
- Thematic loot: Problematic as category (some vanity items already thematic)
- Guild-specific loot: Difficult to conceptualize beyond existing mechanics

---
## Loot Sources by Category
### Gear & Weapons
Sources:
- Mob drops (zombies/skeletons for components)
- Chests (components or upgrades)
- Weapon and armor stands
- Bosses or elite mobs
- Quest completions
- Rift completion rewards
- Theme-specific mobs

Design Note: Jyu prefers gear as basic loot, not locked behind defeating enemies

### Rune Gems
Primary Sources:
- Geode POIs (break open for colorful crystals)
- Mining tasks: Ores or clusters
- Ore: Singular item, one drop when mined
- Amethyst-style: Six sides, six different drops

Secondary Sources:
- Quests and Rift completions
- Trade (stop-gap when can't find in Rifts)
- Dust from recycling
- Geode pieces milled down to make runes/gems
- Special rune gem from completing mob spawner
- Anomalies
- Pre-rolled jewels in jewelry chests/bags

Current State:
- Health, offense, ability-related rune gems exist
- Offense has ability-related modifiers
- Two implemented monster rune gems copy Pentagon versions
- MVP 2.0 source: Monster spawner and loot chests

Implementation Ideas:
- Cave themes with cave-generating rooms spawn geodes in walls
- Geode item becomes rune gem, rolls shape and modifiers
- Players seeking POI mining action

### Essences
Purpose: Rift crafting related

Distribution Philosophy:
- Available everywhere in Rift
- Sprinkled in any loot container, mining POI, or activity
- Completing Rift objective = net positive essence gain

Sources:
- Fountain anomaly that spews essence
- Mobs that turn into dust when defeated
- Dead players become pile of essence (their Rift loot converts to equivalent essence)


### Abilities (Skill/Ability Related Items)
Acquisition:
- Keep in quests, completion chests, and trading
- NOT in random loot containers (avoid RNG acquisition)

Upgrade Path:
- Abilities upgradeable within Rifts
- Craftable abilities: Basic start, upgrade to certain point
- Lootable abilities: Consumable scrolls (stack to 64)
- Experience abilities via scrolls before investing in crafting

Progression Gates:
- Not all abilities craftable immediately
- Lock behind rare crafting resources or guild progression
- Guild levels gate top-tier permanent ability purchases

### Mod Components/Resources
Purpose: Link Rifts to Overworld/mods

Use Cases:
- Support builders
- Players using extra mods/tools
- Harder-to-find or non-renewable Overworld resources

Sources:
- Resource chests (general resources)
- Specialized shipping crate anomaly
- Guild shipment-related anomalies

### Transmog & Vanity
Case-by-case basis for sources

### Collectibles
Sources:
- Special rooms
- Personalized POIs
- Each collectible with own POI (player knows what they're hunting)

Benefit: Know what to search for or when set is complete

### Consumables
Considerations:
- Mixed in generic loot pool or own container?
- From mobs or Rift spawners?

---

## Theme-Dependent Loot
### Benefits
- Adds value to themes
- Allows targeted looting
- Remixes loot ratios (increase chances of specific items in certain locations)

Examples
- Chase resources specific to themes (snow biome, forest)
- Nether-themed focus on gear
- Cave-theme focus on helmets

---
## Additional Topics
Emerged organically through discussion

### Inventory Management
- Current Vanilla Constraints - 36 total slots
- 27 slots remaining for loot
- Non-stackable gear problematic
- High loot volume requires larger capacity
- Item design impacts space (geodes dropping many gems/dust types)
- Loot every piece for resources (dislike leaving items)
- Quick runs, fill backpacks, sort later
- Pre-programmed slots for stackable Rift items
- Example: Silk thread always goes to specific slot
- Mod-specific solution to avoid taking numerous slots
- Built-in slots instead of 26 inventory slots
- Reduce needed quantity to match inventory constraints

ARPG Comparison:
- Limited inventory space standard
- Players leave items behind

Lean Loot vs Volume:
- Determine expected loot amount and needed space
- Goal: Understand loot design, not eliminate backpacks
- Purposeful loot preferred over massive inventory bloat
- Weight systems often ignored; slot-based easier to manage

Tension & Gameplay:
- Lean loot minimizes Rift downtime
- Removed timer reduced tension
- Limited inventory creates hard choices (reintroduce tension)
- Disagreement: Some find leaving loot disheartening

Chest Design
- One chest per POI
- Better chests in bigger POIs
- Open chests to see contents (not mine them)
- Sell unwanted gear to traders

### New Rift Objective: Swarm Hot & Cold
- Enter Rift with safe room
- Get swarmed by mobs continuously
- After killing certain number: Audio/visual "hot and cold" indications
- Directions lead to treasure room
- All loot in end room

Environment:
- No chests or spawners
- Possibly derelict POIs with cosmetics
- Mobs provide direction hints to reward room
- Stressful continuous spawning
- Similar to mob nest protecting treasure hoard

Completion:
- Reward room has loot and portal for objective completion
- Could spawn as random POI becoming the objective

---

**Next Actions**
#### Forum Discussion
- Continue Loot discussion, branch out into inventory management and expected loot quantities

#### Pitch Prep
- Start drafting pitches based on discussion of loot.

#### Next major topic
- Mobs

---

**Timeline**
- Pitch Votes on Loot after next meeting
- Start drafting mob pitches around same time