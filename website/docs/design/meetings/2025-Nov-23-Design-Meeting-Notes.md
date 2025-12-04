# Design: Mob Archetype and Special Room Framework

> ### _November 23, 2025_
> - @danymaddox
> - @rachaelrose1212
> - @jyutta
> - @kinkymal
> - @moomarmouse
> - @ArtemisKhros
> - @warrengore
> - @wouts.
> - @andydirk88
> - @galactic_15
> - @wolfsweb

### [Visual Working Board PDF](/other-files/meeting-notes/2025-Nov-23-Design-Visual-Working-Board.pdf)

## Focus
- Review mob archetype list for gaps/redundancies, classify current submissions into archetypes
- Define special room framework with cost-benefit analysis
- Goal: Build systems, not approve final mobs or room designs

---
## Mob Archetypes Review
Current List (13 Total)
- Horde
- Ranged
- Assassin
- Ambusher
- Tank
- Buffer
- Healer
- Guardian
- Summoner
- Swarm
- Loot Goblin
- Artillery
- Terrain Manipulator

### Core Principle
Player Understanding:
- Players understand mob interactions by knowing types
- Avoid learning dozens of different mobs per theme
- Understand how assassins/tanks work generally in each Rift
- Archetype = behavior, status effects vary by theme

Concern: 13 archetypes may overwhelm players (more than 7 could be too many)

---
## Archetype Refinement Discussion
### Tags vs Archetypes
Tags (Not Separate Archetypes):
- Shiny mobs (better loot drop)
- Instability/timer-linked
- Mechanic-based (like "creaking" mob)
Any archetype can have tag applied

### Missing/New Archetypes Proposed
Hunter:
- High engagement range
- Physically pursues player outside combat encounter
- Teleports behind player if reaching render distance
- Can disengage and choose when to actively attack
- Difference from assassin/ambusher: Hunts vs waits/blends
- Should be annoying, persistent ("have to kill it, otherwise follows entire time")
- Alternative names: Persistent mob, distraction enemy

Resource Drainer/Attrition (Debuffer):
- Weakens players, uses up resources (mana, stamina)
- Examples: Mining fatigue, stat reduction
- Analogous to Elder Guardian
- Examples: Umbral Cast, Ray Cast (drain health/mana, lower stats)
Refinement Options:
- Cloud effect that doesn't directly damage
- Attack separate from debuffing
- No attack at all (forces choice: attack it or other mobs)
- Follows player, continually lowers stats/applies effects
Note: "Debuffer" too broad as name (more category than specific archetype)

Reflect/Counter:
- Doesn't directly hurt player
- Hurts player if player attacks it
- Forces restraint instead of AOE nuking
- Counters AOE spam builds
- Examples: Pufferfish (explodes when attacked), Mercury Crystal (punishes indiscriminate AOE)
- Could fall under tank archetype or separate
- Question: Own archetype or one-off?

Hazard Generator:
- Creates neutral damage (damages everything indiscriminately, including friendly mobs)
- Example: Cinder spirit
- Uncertain if warrants own archetype

---

## Condensing Archetypes
### Redundancies Identified
Tank & Guardian:
- Serve similar purposes
- Guardian definition leans toward area control (overlaps with Pathmaker/Barrier Maker)

Horde & Swarm:
- Could condense into single archetype with different expressions

### Approach to Reduction
Goal: Simplify learning (too many defeats purpose)

Options:
- Reduce to half dozen archetypes
- Allow mobs to have 1-2 archetypes max (maintain uniqueness)
- Lower-tier Rifts: Base archetypes to teach
- Higher-tier Rifts: Combined archetypes

Uniqueness Within Archetypes:
- Unique mechanics differentiate mobs
- Example: Tank casting force fields or debuffing with shield
- Like WoW classes: General archetype with variations
- Provide vague sense of core purpose

---
## Mob Classification Examples
Weeping Angel
- Assassin/Ambusher
- Bursts and attacks when not looking at it
- High damage, high threat, surprise attacker
- Counter: Gargoyle (exact opposite - attacks when looked at, frozen when not)

Shadow Nightcrawler
- Teleports to shadows
- Punishes poor lighting
- Assassin/Ambusher

Crystal Golem
- Support and area control
- Falls under tank if condensed

---
## Archetype Design Philosophy
Classification Considerations
- How mob acts vs how challenging it is
- Normal/elite/boss = difficulty and rewards distinction
- Archetypes based on mob's specialization, not just capabilities
- Main goal of mob vs player
- Example: Tank's main goal = absorb hits

Multiple Archetypes Per Mob
- Players need to understand both archetypes
- Maintains uniqueness without overwhelming

---

## Special Room Types
### Core Categories
Puzzle:
- Non-combative
- Logic, memory, or spatial problem
- No real risk to player (time cost only)

Challenge:
- Timed, movement, or combat-based
- Harder than normal engagements
- Under pressure, limited tries, risk of hurt/dying

Boss:
- Custom unique area for boss encounter

Reward/Legendary:
- Low to no danger
- High loot reward moment
- Rewards exploration

Guild/Rest/Shop:
- Safe place to cool down after engagements
- Trade or clear inventory
- Buy buffs specific to Rift instance
- Could pause timer (no rest if timer ticking)
- Could be condensed into one room type

### Guild Rooms Considerations
Guild Rooms vs Guild POIs:
- Might be more interesting as rooms than POIs
- Rooms not originally built for swapping POIs
- 9x9 POI size limits implementation
- Could unlock Hub world content
- Rooms provide safe space for NPC interaction

Size:
- Could match Hub world guild interiors to solidify identity
- Player automatically associates when encountering in Rift

Technical:
- Mobs shouldn't walk into rooms
- Stipulations on safe rooms to prevent exploitation
- Mobs likely won't target NPCs (unkillable or tag-based)

---
## Room Examples & Analysis
### Challenge Rooms
Wraith Light:
- Red light/green light game
- Move on green, punished (spawn mobs) on red if moving
- Player choice: Participate or brute force if powerful
- Dev complexity: Medium
- Benefit: Different gameplay sense, high tension, choice

Ascending Gauntlet:
- Vertical tower parkour course
- Fall damage challenge
- Dev complexity: Low (knowledge check if reached top)
- Higher complexity: Disable elytra/flight, disable block placement (prevent cheese/pillaring)
- Focus: Movement mastery
- Partial reward even without completing

### Puzzle Rooms
Simon Says:
- Dev complexity: Medium

Reflected Path:
- Higher dev complexity
- NPC mirrors player movements
- Both travel through maze series
- Expensive cost-benefit

Maze:
- Puzzle or challenge depending on traps
- Without traps: Time sink (cost = navigation time)
- With traps: Challenge room

### Reward Rooms
Rift Reliquary:
- One of every loot type
- Guarantees something player was targeting

Arsenal:
- All gear loot
- Specific to gear improvement

### Guild Rooms
Thread Work Annex (Ability Guild):
- Swap ability mid-Rift (normally unavailable)
- Limited use
- Gain guild reputation
- Dev complexity: Low (reverse rule in room)
- Good player benefit

### Dig Site (Gem/Rune Gem Guild):
- Donation logic: Give up gems in Rift for direct reputation
- Dev complexity: Low (need donation logic development)

### Reward Room Concerns
- Some feel too powerful
- Doesn't fit Rift exploration gameplay
- Possible solution: Gate with special keys (targeted loot keys for chests)

---

## Room Implementation Strategy
Pitching Process
- Four or five room categories
- Code implementation needs to support categories
- Split into five different room types
- Separate yes/no votes for each type
- Navigators/leadership formulate votes based on pitch prep engagement
- Rooms with components beyond just POIs

Priority Question
If only one special room type could be implemented early, which provides most value for development cost?

---
## Additional Topics
Emerged organically through discussion

### Loot Table Integration
Stability Mechanic Issues
- Will be addressed by loot table changes
- Make going further more beneficial (harder content)
- Risk: Creates obvious exploitation patterns

Three-Tier System:
Split loot table into three base items
- Item 1: More frequent in stable areas
- Item 2: More frequent in chaos areas
- Item 3: More frequent in unsafe/stable areas

Goal: Encourage visiting specific rooms for needed items, not just stability tiers generally

Implementation Note:
- Some base resources only spawn closer to portal (only in standard room types)
- Less available further out

---

**Next Actions**
- Pitch Votes on Loot
- Draft mob archetype pitch

---

**Timeline**
- Pitch on mobs
- Pitch-prep on Rooms
- Theme Significance brainstorming
