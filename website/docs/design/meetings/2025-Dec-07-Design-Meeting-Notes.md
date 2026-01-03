# Mob Archetypes & I-Frames

> ### _December 07, 2025_

## Mob Archetypes Framework
Make game easier for players to learn through familiar classifications

Four Main Archetypes

### Aggressor:
- Target: Player HP
- Goal: Direct damage
- Directly tries to hurt player
- Includes: Horde mobs, war mobs, assassins, ranged mobs
- Actively attacking player

### Protector:
- Goal: Prevent attacks on allies
- Blocks player attacks, forces target prioritization
- Provides blocking and line of sight denial
- Uses body positioning (vs environment manipulation)

### Enabler/Support:
- Goal: Manipulate numbers
- Buffs allies, debuffs player
- Controls battlefield by "messing with the math"
- Players must focus or interrupt enabler
- Affects battlefield by reducing player stats or improving mob stats
- Alternative name suggested: "Support" 

### Controller/Manipulator:
- Goal: Move player in 3D space
- Tilts space, controls environment
- Forces positioning consideration
- Counters cheese tactics (pillaring, kiting)
- Manipulates environment rather than direct debuffs
- Example: Breeze throws wind charges (lifts players, engages redstone, disrupts melee)
- Example: Throwing lava behind player to prevent kiting
- Example: Removes blocks making navigation harder

### Design Concerns
Controller Limitations:
- Should not prevent fun or bully with hard CC (stuns)
- Focus on environment manipulation, not direct debuffs

Special Cases & Classifications
- Loot Goblin

Voted-in version specifically non-hostile
- Doesn't fit hostile mob framework

Elite Mobs
- Could pull from multiple families

Boss Mobs
- May not fit neatly into system
- Potentially utilize all four families during fight phases
- Separate difficulty tier, not archetype

### Archetype Benefits & Implementation
Player Experience
Learning & Expectations:
- Archetypes familiar to players (used everywhere)
- Gives implied sense of mob behavior
- Integral design language players pick up on
- Feel smart for figuring out patterns
- Avoid learning extensive bestiary per theme
- Example: Five support mobs = predictable expectations

Design Structure:
- Template for designing actual mobs
- Know mob role and feature set
- Prevents "bloat or runaway" where abilities touch everything
- Understand what's missing or needed
- Focus on target and goal, not just name

Subclasses:
- Can exist within broader categories (eg. "assassin" within Aggressor)


### Three vs Four Groups Discussion
Functional Differences:
- Different brains (Mojang Minecraft term)
- Different AI targets, goals, motivations
- Support brain different from controller brain

AI Complexity:
- Goals not super difficult
- Pull from existing Minecraft mobs
- Complicated brains might get more difficult
- Question: How complicated do mobs need to be? How much can we pull from existing?

Voting Options Proposed
- A: Vote for these four groups to move forward
- B: Like idea of groups but room for combining/adding
- C: Shouldn't have groups at all

### Next Steps:
- Create proof-of-concept placeholder enemies for each type
- Test how they play together
- different mob roles from same spawner


### Protector vs Controller Distinction
Key Differences

Protector:
- Uses body to protect allies
- Blocks with positioning
- Prevents player killing other mobs

Controller:
- Uses environment
- Prevents player killing other mobs via spatial control
- Anti-cheese mob type

Enabler:
- Specifically plays with numbers
- Different pressure type than Protector/Controller (except line of sight denial)

Example Pressure Types:
- Healer and tank protecting DPS
- None are neutral mobs
- Significantly different approaches


## I-Frames (Invulnerability Frames)
Vanilla Behavior
- Entity takes damage → 10-tick (half-second) invulnerability period
- Prevents additional damage during period

Current Problems

Multi-Hit Attacks Capped:
- Shotgun blasts
- Multi-projectile abilities
- Damage over time effects
- Mob swarms
- Increasing projectiles doesn't increase damage
- Low cooldown abilities = 50% damage reduction
- Sword attack + poison = only one damages
- Projectiles lack damage modifiers as upgrade options

Dev Experiments
- Removing invulnerability in some cases
- Keep for environmental sources (lava, cacti) to prevent instant death from constant damage

Core Question
- Is vanilla i-frames wrong for combat ARPG? What's ideal when multiple mobs hit player?

**Option A: Keep Vanilla**

Approach: I-frames based on damage, tweak timing (calculate damage every tick)

Pros:
- Builds on existing system
- Safer against damage spikes

Cons:
- Weak multi-hit
- Not fully Minecrafty or ARPG

**Option B: No Combat I-Frames**

Approach: Remove i-frames during combat, keep for environmental sources

Pros:
- Solves damage calculation problems
- More intuitive
- Aligns with ARPG industry standards
- Tried and true solution
- Speeds up TTK/TTD (time to kill/time to death)

Cons:
- Sudden damage bursts from mob swarms
- Potential one-shots
- Still has issues with simultaneous hits (shotgun blasts, ice blasts)

Rationale:
- Minecraft is survival game (slower combat, half-second i-frame feels okay)
- Combat ARPG focus needs smooth, quick, responsive combat
- Prioritizes player survivability options

Mitigation:
- Tried and true resolutions exist

Example: Player rule, taking 100% damage in one second reduces health to one instead of zero

Ensure players don't get wiped in first encounter in new Rift

**Option C: Reduced/Conditional I-Frames**

Approach: Middle ground with different damage calculation classifications

Pros:
- Preserves some features

Cons:
- Complex
- Harder to implement
- Potential spaghetti code

**Option D: Stacked/Diminishing Damages**

Approach: Multiple hits allowed, damage diminishes from same source 

Pros:
- Supports multi-hit
- Mitigates damage spikes

Cons:
- Complex implementation
- Difficult to communicate to players



---

## Additional Topics
Emerged organically through discussion

### One-Hit Protection Discussion
Implementation Considerations

Mechanic:

- Ability/mechanic around one-hit protection interesting
- Prefer integrated into game engine itself (not player choice)
- Diablo 3 example: One-hit protection passive became non-choice (essential for survival, especially hardcore)
- "If it's going to be useful to everybody, then just build it in"

Current Status:
- No combat i-frames already on branch
- One-shot protection could be implemented
- Allows survivability abilities focused on longer periods
- Prevent abuse via low health builds

Concerns

Player Expectations:
- Will players expect damage from every source? (that's how Minecraft works)
- May not be aware of damage calculation changes
- Tutorial needed: "This does sound like something we should put in the tutorial"
- Show scenario: Survive with 1 HP, explain why 

Alternative: Show multiple damage sources hitting simultaneously

One-Shot Definition:
- One instance of damage (eg. multiple skeleton archers hitting at once)
- Usually occurs with funky damage calculation
- Don't want to prevent players from tackling content that outscales them
- "Part of the answer is get good. If you are standing still long enough to allow five enemies to hit you, then that is... feels like the player's fault"

---

**Next Actions**

- Votes Needed
- Categories/families/groups of mob types for testing and development
- Guild Framework

### Future Discussion Topics
- Design space discussion
- Define guilds and set up structures
- Create template and define guild functions
- Move toward final implementation state
- Sort out framework details
- Further define number of guilds

---

