# Design: Core Loop Development Consensus & Next Steps

> ### _October 26, 2025_
> - @Galactic_15
> - @ImplementsLegend 
> - @Lins 
> - @maloki
> - @rachaelrose1212 
> - @Rev 
> - @Rora 
> - @Sp3cialK 
> - @WarrenGore 
> - @Wout 
> - @wwwwwwhale

## Focus
- Reach consensus on core game loop for GDD update
- Define downtime/cool-off phase role
- Plan 0.3.0 Rift expansion focus
- Establish next design meeting process

---

## Core Game Loop Structure
### Basic Rhythm Agreed Upon
- Beginning phase
- The Rift
- Reset/cleanup phase

### Simple Loop Draft (Consensus)
Prepare → Rift → Advance → `loop`
- Prepare: Equip Gear, Equip Abilities, Form Party, Select Contract, Food, Potions, Rift modification
- Rift: exploration, combat, loot, objective
- Advance: Delooting, upgrading (gear,abilities,guilds)
- `Loop`

### Implementation
- Put simple loop into GDD
- Expand with subcategories and sub-loops later if needed
- Balance between descriptive and concise language

---

## Downtime/Cool-Off Phase Discussion
### Arguments For Including Downtime
- Significant part of game (upgrading gear, leveling up)
- DBZ's three subcategories: advanced preparation, preparation, relax
- Important part of player experience

### Arguments Against Core Loop Inclusion
- Not required for progression
- More of side or alternative option
- Not done every time

### Proposed Solutions
- Rename: "After action" instead of "downtime" (better reflects building, Overworld exploration)
- Alternative: "Occasional activities"
- Could be part of core loop if cooldown on opening Rifts exists
- Making potions and expanding base can be part of preparation phase

### Clarification
- Core loop is what you describe when introducing mod
- Different loops exist: core loop, sub-loops, choices to go into other loops
- Core loop doesn't mean other elements don't exist
- One Rift isn't necessarily only one loop

---

## Loot and Cleanup Systems
### Cleanup Phase Discussion
- Modern games have better loot systems
- Question: Is cleanup as primary step necessary?
- Ideas: Minimize cleanup or cut entirely (special bags/pouches)

### Meaningful Loot Philosophy
- Everything in chest should be worthwhile
- Avoid "bunch of stuff just to sort through" (Vault Hunters trap)
- Balance between loot quantity and inventory management
- Meaningful loot may require fewer chests

### Current System Issues
- Many chests feels good initially
- Inventory fills quickly
- Necessitates inventory management mods (backpacks, sorting systems)
- Basic chests giving early game loot become bloat later

### Proposed Solutions
Packrat:
- Rift pack holds unlimited stacks of Rift items
- Lost upon death
- Incentivizes removing valuable items

Quality over Quantity:
- Less loot, more meaningful items
- Sell/buy system makes items more valuable
- Players weigh pros/cons of keeping items

Upgradeable Systems:
- Bag upgraded to only hold useless loot
- Keeps relevant loot in main inventory

Special Chest Design:
- 3x3 POIs: One chest with choice of one out of three good items
- Special rooms: Single chest with three good items, can only choose one
- 3x3 POIs as catch-all for special events (anomalies, choice chests)

### Quality of Life vs Friction
ARPG Examples:
- POE: Currency in inventory slots (feels more important)
- Last Epoch: Currency auto-stored (less friction)

Design Principles:
- Automatic loot can diminish reward feeling
- Good loot needs some friction
- Too much QoL makes game too easy
- Streamlining too much loses value
- Player choice important: limited inventory forces choices

### Inventory Management Question
- Should inventory cleanup be dedicated step or integrated into advancement after Rift?
- Suggestion: "Pack rat guild" introduces players to inventory management mechanics
- Consider beginning vs end game loop for inventory management

---
## Version 0.3.0 Planning: Rift Expansion
### Focus
Expand content of Rifts rather than sub-loop detail
Expansion Content: 
- New mobs
- Special rooms
- Points of interest
- Theme differences and uniqueness
- More objectives for variability
- Expanded anomalies
- Loot goblin/piñata entities (different focuses and decisions)

### Proposal Philosophy
- Make Rift more interesting
- Expand upon existing experiences within Rift
- Rift is core piece of mod's gameplay loop

### Scope Management
- Focus on ideas fitting core game loop (avoid scope creep)
- Focus on elements like loot and food buffs
- Take ideas from submission and analyze through GDD lens

### Caveats
- Much still goes through pitch to feature
- Don't treat as definitive list
- These are goals to work towards
- Don't all necessarily have to happen

---
## Design Process Moving Forward
### Phase Status
- Confident with first three phases of GDD
- Moving to more directed design analysis and discussions

### Question: Sub-Loops vs 0.3.0 Content
- Should design continue nailing down sub-loops (Phase 2) or support project by working on content directly impacting 0.3.0?
- Decision: Start helping rest of project with next update content
- Next Meeting Topic Selection
### Process Options Discussed:
- Democratic: Everybody votes on next design meeting topic
- Structured: Leadership selects

### Voting Considerations:
- How long to leave vote open?
- 24-hour voting window suggested
- Set deadline (e.g., end of Sunday/Monday)
- Quick vote for meeting subject different than feature vote
- Consider if people need to write things before meeting
- Barrier concern: people feel they must contribute something

### Decision:
- Put quick vote together for design team
- Vote on which ideas from backlog to discuss at next meeting
- Also: Contributor-wide vote for GDD draft

### Design Team Actions
- Start looking at stuff in idea backlog
- Help pitch to feature process for 0.3.0 items
- With GDD work: should be able to answer questions that come up for 0.3.0 features
- At least bare minimum of what features can be

---
## Additional Topics
Emerged organically through discussion

### Gathering and Essence Mechanics
#### Current State
- Requires processing materials into essence (diminished step)

#### Discussion Points
- Should gathering be more important, requiring resource collection to enter next Rift?
- Plan to include essences as loot in chests (self-replication through Rifts)
- Suggestion: Allow essence to be turned into materials (interesting for Skyblock version)

#### Integration Proposals
- Tie essence more to Rift-only loot (incentivize Rift exploration)
- Offer Overworld side quests that reward essence (give players options)
- Use Overworld as boost instead of wall
- Example: If short on currency for merchant item, quick Overworld side quest provides needed amount

### Overworld and Vanilla Integration
#### Current Philosophy
- Mod is Rift-centric, separating Rift and Overworld activities
- Focus primarily on Rift stuff
- Overworld currently defined by Mojang
- Not vanilla plus pack, ARPG with progression based around player

#### Integration Questions
- How much should mod interact with vanilla Minecraft?
- How much to integrate vanilla dimensions and existing elements?
- Avoid alienating players by removing too much Overworld

#### Overworld as Frontier Dimension
- Re-flavor Overworld as frontier dimension with homesteading quests
- Could be secret sandbox portion where players use unlocked skills/abilities
- Challenge: Integrating Overworld into rigid progression and balancing system is near impossible
- Core player experience has little explicitly calling out Overworld

#### Vanilla Elements Discussion
- Vault Hunters comparison: VH3 removed Overworld (considered useless)
- Terraria comparison: Different because Terraria's world scales with player and is main part of game
- Could retool Minecraft and make each dimension unique with add-ons
- Option: Remove elements from vanilla and put inside Rifts

#### Development Considerations
- Removing dimensions like Nether: worth dev time if players might want to sandbox?
- Could be less about modded Minecraft, more about using Minecraft as engine
- Everything retooled into pack
- Focus on Rifts and their content

### Rift Creation and Progression
#### Creating the Rift
- Question: Dedicated beat or part of preparation?
- Depends on how involved Rift opener creation is
- If requires extensive farming: could become annoying
- Philosophy: Reward players for doing it instead of punishing for not doing it

#### Game Loop and Player Progression
- Exploring Rifts always core element
- How it's done changes with progression
- Progression affects loop execution

### Important Core Topics to Address
Before Feature Pitching should answer these before feature adding phases:
- Overworld vanilla importance
- Loot density and importance
- Minecraft hunger and health system
- How loot works
- Most important parts of game

Rationale: Ideas closer to core are more important than others at the moment

---

**Next Actions**
#### Forum Discussion
- Minecraft hunger/health

#### GDD Draft Vote
- In the upcoming week, 1 week long, vote of confidence

#### Idea Submission
- Overworld/Vanilla importance/integration

---

**Timeline**
- One week for GDD draft vote
- Select topic for next week's Design Meeting though poll