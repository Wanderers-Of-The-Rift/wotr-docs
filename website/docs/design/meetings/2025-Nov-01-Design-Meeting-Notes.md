# Design: Vanilla Integration

> ### _November 1, 2025_
> - @mulliganaway
> - @moomarmouse
> - @kinkymal
> - @artemiskhros
> - @galactic_15
> - @your_minty_fox
> - @warrengore
> - @dividesbyzero
> - @rachaelrose1212
> - @revatile


## Focus
- Determine integration level between vanilla Minecraft mechanics and Wanderers of the Rift systems. 
- Establish consistent approach to avoid case-by-case decision-making for every mechanic.

---

## Questions
### Integration Philosophy
- Where does Vanilla fit into Wanderers of the Rift?
- Player progression requirements and Vanilla inclusion level
Examples: Are Rift tools made of iron? Do Rift workbenches require Overworld materials?

### Key Decision Points
- Should Rift mobs drop experience orbs?
- Must players progress through Vanilla to access Rift content?
- Can players complete entire mod without entering Overworld?
- Is Vanilla progression ever required for Rift progression?

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

## Progression & Early Game
### Current State
- Takes under 1 hour to enter Rift (with material knowledge)
- Currently locked behind finding/killing enderman

### New Player Experience Options
#### Hub World Start:
- Starting quest walks through key creation and Rift entry
- Rewards include portal creation blocks
- Everything needed to join Rift available in Hub
- Allows choice between Overworld/Hub/Rift as starting loop

#### Overworld Start:
- Classic Minecraft first 20 minutes as tutorial
- Optional skip for experienced players
- Wild Rifts for accidental discovery during exploration
- Dynamic spawning system (Rifts spawn within range every few minutes with movement)

#### Direct Rift Start:
- Tutorial Rift (Tier 0) with no negative consequences
- Balanced for players without armor
- Risk: Players might not realize Overworld exists

#### Hub World as Third Space
- Contains mechanical systems: guilds, traders, quests
- Grief-free environment
- Works across different game modes
- Could start small and grow over time
- Multiplayer consideration: Hub may already be large when new players join
- Lock NPC interactions until first Rift completion

---
## Resource Systems
### Resource Acquisition Philosophy
- Should players be forced to Overworld for resources or obtain in Rift?
- Current: Players bring blocks out for builds or next Rift (preparation/strategy element)
- Goal: Design systems supporting strategic preparation

### Essence & Rift Keys
Current System:
- Rift keys made from vanilla items with assigned essence values
- Essence directly tied to blocks

Proposed Changes:
- Add essences as raw loot within Rifts
- Eliminate need for vanilla items initially
- Vanilla items available through Rift POIs
- Exchange system: Normal iron for smaller percentage of Rift version (less efficient vanilla path)

#### Mining
Considerations:
- Finding irrelevant ores is annoying
- If vanilla resources become obsolete, no reason to mine
- Make mining beneficial even if not required
- Allow material acquisition in both Rifts and Overworld
- Exchange vanilla resources for Rift equivalents through NPC

Philosophy:

"Make it so you don't have to mine, but make it so that mining benefits you somehow"

---

## Armor & Gear Progression
### Current Issues
- Vanilla progression broken and unbalanced
- Leather armor with rune gems can exceed netherite armor (confusing)
- Damage and armor systems break at higher numbers
- More work to fix Mojang's progression than develop new system

### Proposed Solutions
New Progression System:
- Replace vanilla armor progression (e.g., "rift leather" to "rift iron")
- Visual progression important for player understanding
- Represent differently so players recognize it as distinct system
- Work with current Rune gem and socket system alongside vanilla gear (hybrid)

Tie to Vanilla vs Rift Materials:
- Hybrid: Tie to vanilla but obtain materials in Rift
- Question: Program with vanilla tiers then revamp later, or program Rift-specific from start?

### Numbers & Progression
- Numbers must show meaningful progress
- Respect player time by making each Rift feel rewarding
- Visual game progression (leather→iron→diamond) aids understanding

---

## Overworld Role & Integration
### Three-Space Design
- Hub World: Get quests, interact with guilds
- Rift: Action and combat
- Overworld: Live and build

### Overworld as Frontier
- Escape space using Minecraft as engine for Wanderers experience
- Sandbox for other mods as tools
- Possible to gate some mods behind Rift progression (require Rift-exclusive materials)

### Wild Rifts
- Integration with vanilla Minecraft space
- Scattered in Overworld for exploration
- Question: Leave to chance or make deliberate exploratory feature?
- Possibility: Wild Rifts + manual creation after certain progression tier

### Exploring
- Buildings and villager structures contain interesting items/eggs
- Hidden lore books as Easter eggs
- Repurpose unused guild designs as Overworld Easter eggs
- Explorer's Guild previously discussed

---

## Atmosphere & Themes
### Vanilla Elements to Preserve
- Health bar, eating food, farming, building mechanics
- Atmosphere and sense of wonder
- Mining, crafting, exploring aesthetically

### Rift Theming
- Incorporate Overworld themes into Rifts (cherry blossom biome, etc.)
- Rifts themed after Overworld biomes
- Use biome generation to create mini Overworlds
- Goal: Primary resource source in Rifts while maintaining Overworld atmosphere

---

## Mod Pack Considerations
### Current State (0.2.0)
- Test pack feels overwhelming due to lack of cohesion
- Plan for 0.2.1: Lighter pack
- Decide proper mod inclusion after core mod completion

### Mod Integration Philosophy
Rift Progression:
- No mod should gate Rift progression
- Storage mods shouldn't be gated
- Backpacks might be necessary (loot/non-stacking bottles) but could design around need

Mod Selection:
- Mods adding Overworld content: Fine
- Mods trivializing core mechanics: Poor fit (eg. ore duplication when ores aren't essential)
- Consider: Can team solve need better than existing mods?
- Cost analysis: Custom solutions vs existing mods
- Integration should feel natural (side quest with Rift resources)

---

## Key Philosophical Tensions
### Integration vs Independence
"Is Wanderers something you do in Minecraft or is Minecraft something you do in Wanderers?"
- Balance: Best possible mod with Minecraft around it vs building on Minecraft foundation
- Hybrid as "safe option" due to familiarity
- Some want Wanderers with Minecraft on side for burnout relief
- Don't force mining/vanilla activities if players don't want them

### Design Constraints
- Using vanilla systems: Helps design faster or anchors to vanilla pacing?
- If players grind vanilla progression outside Rifts, bypasses core loop
- Concern: Every hybrid suggestion receives pushback against vanilla elements
- Need dev input on change limits before mod compatibility issues arise

### Progression Balance
- Respect player time
- Make each Rift rewarding
- Visual progression clarity
- Numbers showing meaningful advancement

---

## Consensus Goals
### Establish Standard Approach
- Avoid revisiting fundamental decisions with each new mechanic
- Determine vanilla integration or independence for new systems
- Create consistent framework for implementation

### Player Agency
- Provide options without forcing specific activities
- Don't overwhelm with too many options
- Tutorials should be optional/skippable
- No forced quest lines including tutorials

### First Two Hours Experience
- What systems do players touch? (Vanilla vs Rift)
- Overworld start, Hub start, or direct Rift placement
- Level of vanilla integration guides experience decision