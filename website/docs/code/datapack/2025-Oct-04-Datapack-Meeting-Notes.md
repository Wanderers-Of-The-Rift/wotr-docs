# Datapack: Quest/Task Demo

> ### _October 04, 2025_

### Focus
> - Quest Hub system demonstration and functionality
> - Data pack and resource pack creation process
> - Step-by-step quest creation walkthrough
> - Accessibility for non-technical contributors


## Quest Hub Overview
### Current Status
- Not in official 0.1.4 release
- Available in unofficial release for build server
- Shows set of five quests (four if one completed)
- Completing all five gives new set
- Exiting rift resets quests

### Implementation Options
- Intended as NPC or entity
- Could include notice board
- Placeholder sufficient for now, reassess later

### Guild Integration Question
- Are quests only given by guild members?
- Will quests be guild-specific?


## Quest System Structure
### Two-Part System
Data Pack (functional information):
- Goal information (event, delivery items)
- Reward information (item, loot table)
- Task specifications (mob label, quantities)
- Rift tier requirements (min/max)
- Theme specifications

### Resource Pack (display text):Quest title
- Quest description (flavor text)
- Only two lines of code per quest
- Editable directly through Notepad


## Current Quest Capabilities
### Quest Types
- Kill specific mob
- Complete rift
- Turn in item

### Quest Parameters
- Mob type and quantity
- Rift tier range (min/max)
- Specific themes
- Reward items or loot tables

## Creation Process Walkthrough
### Example Quest Created
DemoQuest:
- Turn in: 1 gravel block
- Reward: 1 dirt block
- Title: "This is a demo"
- Description: "Yay, dirt"

Step-by-Step Process
1. Data Pack Creation:

Create new file (e.g., "DemoQuest")
Copy template from existing quest (e.g., Skillthread)
Modify reward item
Modify turn-in item
Set quantities

2. Resource Pack Update:

Add quest title
Add quest description
Match quest name to data pack name

3. Loading Changes:

Data pack: Loads automatically when launching world (if in correct location)

Resource pack: Must be manually reloaded through options menu
Quit to title screen for reliable data pack reloading


## Accessibility for Non-Technical Contributors
### Simplified Process
- No fancy editors needed, Notepad works fine
- Copy-paste friendly, Two lines per quest in resource pack
- Template-based, Use existing quests as starting point
- Conversion support available, Contributors will convert text to JSON format

### ??? Tool
- Write JSON by filling in elements
- Drop-down menus for types and items
- "If you give me those six pieces of information, I can turn it into this easy enough"

### Non-Coder Approach
Write out quest concept in text:
- Quest goal/task
- Items required
- Quantities
- Rewards
- Title
- Description

Someone else converts to data pack/resource pack format.

## Technical Details
### File Locations
- Resource Packs:

Highest level in Minecraft folder
Alongside "mods" and "config" folders

- Data Packs:

Within world save folder
Under "datapacks" folder

## Quest Variants
### Mob Kill Quest:
- No rift requirement
- Tracks specific entity defeats

### Rift Completion Quest:

- Requires quest takes place in rift
- Can specify tier range and themes

### Item Delivery Quest:

- Acquire and turn in items
- Can use single item or loot table rewards

### Overriding Quests

- Name new quest same as existing quest
- Replaces original quest definition

---

## Ability Data Packing
### Current Status
- Documentation planned after 0.2.0 changes
- Complexity depends on NBT data requirements
- More information per line than quests

### Template Usage
- Existing abilities (e.g., Icicles) serve as templates
- Adjust settings: velocity, damage, mana cost
- Novel abilities more challenging until documentation complete

### Limitations
- Depends on existence of modules defining desired functionality
- If modules unavailable, data packing may not be possible
- Upcoming release determines which functionalities can be data packed
- Dev team will assess what's needed for new specifiable abilities

--- 

## Data Packs vs Mod Integration
### Current Approach
- Use data packs for testing new quests and functionalities
- Eventually merge into mod itself
- Process applies to all data pack content, not just quests

### When to Use Data Packs
- Testing new content
- Content intended for other mods (e.g., sophisticated backpack quest reward)
- Flexible experimentation without mod version updates
- "I didn't need to update my mod version. I didn't need to go through GitHub to set it up. I could just change that text file directly myself."

## Key Takeaways
### Process Summary

- Data pack contains functional quest information
- Resource pack contains player-facing text
- Data pack auto-loads from correct location
- Resource pack requires manual reload
- No GitHub or mod updates needed for testing

### Accessibility

- Technical barriers minimized through templates and support
- Contributors can focus on quest design
- Technical implementation handled by others if needed

