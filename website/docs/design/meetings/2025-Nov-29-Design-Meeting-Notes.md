# Design: Mob Archetype and Special Room Framework

> ### _November 29, 2025_
> - @rachaelrose1212 
> - @danymaddox 
> - @dividesbyzero 
> - @kinkymal 
> - @moomarmouse 
> - @ArtemisKhros 
> - @wouts. 
> - @rmzing 
> - @galactic_15 
> - @rizek_

### [Visual Working Board PDF](/other-files/meeting-notes/2025-Nov-29-Design-Visual-Working-Board.pdf)

## Focus
Open discussion covering Wild Rifts mechanics and implementation, rift tier progression, Hub world design, and player level systems.

---
## Wild Rift Mechanics
### Core Concept
- Rift portals found in Overworld (eliminate need to create portal)
- Theme "leaks out" showing blocks indicating interior
- Applying processors to Overworld POI same as other applications
- Seed not rolled until player enters
- Portal entrance holds key with configuration for rift created upon entry

### Entry Cost & Essence Economy
Problem: Essences found in Rifts as loot - how to get essences for initial entry?
Solutions:
- Wild Rifts offer different cost (time exploring vs spending essences)
- Level 0 Rifts might be free (makes Wild Rifts as level 0 less valuable)
- Act as checkpoint if players deplete essence source

### Spawn Mechanics
Proposed System:
- Tie to End portal locations
- Wild Rift spawns at first sky block directly above End portal
- Found via End portal finding mechanism OR spotting on surface
- Start with directly over End portal only, adjust if needed

Rationale:
- End portals generated ~1000 blocks from world center
- Three in first ring
- 10,000 block world border = ~19 wild portals (first three rings)
- Lore: Disturbance from End portals causes Wild Rifts

Pitch Focus: Start with Overworld only, then consider Nether/End

End: Tie to ender pearl gateways back to central island

Nether: Nether fortresses or ruined Nether portals

### Appearance & Discovery
Visual Indicators:
- Sound or light effect indicating presence
- One-chunk radius terraform biome around Rift
- Could hint toward structure inside or be completely wild
- Respawn in same area, tied to seed (similar to End portals)

- Ties back to Overworld vs Hub vs Rift start debate
- Wild Rifts give explorers something connecting to main game loop
- Starting in Rift might be too much too soon
- Hub could have public Rift portals

### Loot Considerations
- Keep iron in loot (needed for crafting)
- Add ender pearls and blaze rods
- Potentially up Nether difficulty if tier 5 Rifts there

### Easter Eggs
- COW level implementation (similar to Diablo)
- Accessed via Wart's leg in Nether

### Rift Tier Progression
Tier Count: 20

Rationale:
- Number from working on loot, armor, gems
- Old system: 7 tiers (based on room depth)
- Each tier should unlock something new: mechanic, mob, modifier

### Tier Distribution
Size Scaling:
- First 5 tiers: All small size
- Higher tiers: Larger sizes

Associations:
- Size
- Loot
- Mob difficulty

Vanilla Tie-In Possibility:
- Overworld = Tier 1
- Nether = Tier 5
- End = Tier 10
- Wild Rifts provide earlier access to some content

### Difficulty Communication
- Players need to know how deep they are in Rift
- Difficulty of area must be communicated (even in tier 1)
- Difficulty deepening could be environment traversal challenge
- Logic needed behind tier number choice (tie to loot progression/armor tiers)

### Rift Navigation & Structure
Verticality & Room Types Current State:
- Players can't reach top/bottom layers until tier 5
- Need chaos rooms to go up/down

Proposed Changes:
- Unstable rooms should also be chaos rooms
- Dedicated staircase rooms instead of relying on chaos rooms
- First portal room could have staircase up/down
- Chaos rooms more common further out
- Fairly linear stable room could exit at different level than start

### Teleportation Mechanic
- Some 3x3 POIs spawn as portal in Rift
- Hit portal = teleport anywhere in Rift
- Could teleport close to spawn or further away
- Players should return through same Rift to same place

### Mapping
- Important for navigation inside Rifts
- Need depth/difficulty indicators

--- 
## Hub World Design

MVP (Minimum Viable Product):
- Slab of bedrock (or white/black concrete) in private dimension
- Contains: NPCs, quest block, Rift block
- Separate dimension
- Void world (as easy to generate as superflat)
- Leave fake buildings without interiors for content insertion

Expansion Strategy:
- Only realistic infinite expansion: Ocean islands OR floating islands
- If expandable by others via data pack important: Floating islands only way
- Group could build islands quickly, potentially connecting in Hub
- No current vote on Hub shape (left to build discretion)

### Technical Aspects
Functionality:
- Void dimension with initial location and data-driven attachments
- MVP doesn't need data-driven components initially
- Adventure mode to prevent block breaking/placing
- System revent griefing
- Entire Hub dimension 'adventure mode' with specific settings

Data Packs:
- Allow people to data pack new areas that automatically connect
- Initial discussion around sufficient number of additions

### Purpose
- Meeting place
- Safe zone
- Place to start adventures
- NOT for living or messing around

### Player Housing
Proposed Systems
Inn with Rented Rooms:
- Pocket dimension rooms players can rent

Apartment System:
- Upgradeable player housing (similar to Stardew Valley)
- Own dedicated space without Overworld building

--- 

## Player Level Systems
Philosophy: Against Traditional Player Levels

Reasoning:
- Allow players to reset and play with newcomers easily
- Tie better gear to completing certain number of Rifts instead

Alternative Approaches:
- "Forgetful potion" to reset abilities/gear usage
- Player level as requirement for equipment use

### Incremental Progression (If Implemented)
Benefits:
- Respect player's time
- 20-minute Rift with no new gear still increases XP
- Small gains (0.1% damage per level) make runs feel worthwhile

Vault Hunters Comparison:
- VH expensive to reset anything, even builds
- Player level should be incremental increase

### XP Sources
Options:
- Mob kills (could be exploited)
- Completing objectives (fair amount of XP)
- Mob drops give purpose beyond defending loot
- Allows passive builds to be viable

### Reset Types
Respec:
- Redistribute points while keeping progression

Prestige:
- Start over after max level with reward

Complete Reset:
- Wipe data to play with friends at same level
- Shouldn't be easily accessible
- Command 

Implementation Concerns:
- Command for server admins useful
- Risk of accidental resets needing admin assistance
- Current POC: Players receive loot box when leveling up
- Need to implement system and identify flaws before rollback/revert system

---
## Additional Topics
Emerged organically through discussion

### Loot Goblin:
- Made it through pitch, approved
- Warren/Andy picking up next week or tomorrow

Stories opening:
- Art: Sketches or Blockbench models
- Dev: Program behaviors for enemy class

### Rift Timer (Soft Timer):
- Approved
- Needs stories
- Warren spinning up Dev implementation (part of 0.3.0)

### Other 0.3.0 Content
- Only two feature-related items in 0.3
- Bug fixes: Add essences as items, fix collect item objective
- Data packs in progress for abilities
- Merchant/quest data pack issues could tag to 0.3.0

### In Progress
Anomaly Model Fix (Dany):
- Fixed, needs review
- Adds model for creative menu icon/hover display

### Discussion Focus Priorities
Next Update Focus: Rifts

- Rift-centric topics: Mob types, loot types
- Room design discussions needed
- Mob classifications needed
- Framework for mob interaction in Rifts
- Establish what can be worked on for 0.3.0

---

**Next Actions**
- Get more into pitch prep and pitch voting
- Come to conclusions and implement
- Room design and mob classification frameworks still needed

---

**Timeline**
- Meeting notes in next day or two
- Continue pitch prep submissions
- Focus discussions on Rift-centric content
- Establish mob interaction framework
