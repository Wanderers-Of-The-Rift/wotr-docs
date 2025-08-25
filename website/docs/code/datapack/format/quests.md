# Quest Data
Quests are tasks the player can take that have goals that must be met and rewards that they provide. A quest can be a specific set of goals and rewards, or can have randomisation in what is required or rewarded.

## Location
`data/wotr/wotr/quest` Take note of the second wotr.

## Format
* `goals`: A list of goals that the quest requires to be completed. 
* `rewards`: A list of rewards that the quest will provide when completed.

## Localisation
Each quest also has the following text that should be defined:
* `quest.<mod id>.<quest id>.title` - A title for the quest, shown in title blocks and on buttons.
* `quest.<mod id>.<quest id>.description` - A longer description for the quest, can be NPC speech or lore text.

## Goals
These are the current available goals.

### Give Item
Give Item goal requires the player to hand in a number of either a specific item or a type of item defined by an item tag.

* `type`: Must be `wotr:give_item`.
* `item`: The item(s). Can be either an item id, an item tag (prefixed with #) or an array of ids.
* `count`: A number provider as described [in the wiki](https://minecraft.wiki/w/Loot_table#Number_provider) to provide the range for the number of items to be handed in.

Example:
```json
{
  "type": "wotr:give_item",
  "item": "minecraft:gold_ingot",
  "count": {
    "type": "minecraft:uniform",
    "min": 5,
    "max": 8
  }
}
```

### Fixed Give Item
A variant of Give Item goal where the count is fixed.

* `type`: Must be `wotr:fixed_give_item`.
* `item`: The item(s). Can be either an item id, an item tag (prefixed with #) or an array of ids.
* `count`: Integer. The number of items that must be handed in.

Example:
```json
{
  "type": "wotr:give_item",
  "item": "minecraft:gold_ingot",
  "count": 4
}
```

### Complete Rift
The Complete Rift goal requires the player to undertake a rift. Requirements can be specified on the type of rift and the level of completion required.

* `type`: Must be `wotr:complete_rift`.
* `count`: A number provider as described [in the wiki](https://minecraft.wiki/w/Loot_table#Number_provider) to specify the range for the number of rifts that must be completed.
* `completion_level`: One of `attempt`, `survive`, `complete` - the degree of success required for the rift completion to count towards the quest.
* `tier`: Optional, Integer. The minimum tier the rift must be. If not specified there will be no tier requirement.
* `themes`: Optional. A list of theme ids of which one will be randomly selected to be required by the quest. If not specified, no theme will be required.
* `objectives`: Optional. A list of objective ids of which one will be randomly selected to be required by the quest. If not specified, no theme will be required. 

Example:
```json
{
  "type": "wotr:complete_rift",
  "count" : {
    "type": "minecraft:uniform",
    "min": 1,
    "max": 3
  },
  "tier" : {
    "type": "minecraft:uniform",
    "min": 1,
    "max": 3
  },
  "themes" : [
    "wotr:cave",
    "wotr:forest",
    "wotr:desert",
    "wotr:swamp"
  ]
}
```

### Fixed Complete Rift
A variant of the Complete Rift goal with no randomisation.

* `type`: Must be `wotr:fixed_complete_rift`.
* `count`: Number. How many rifts need to be completed.
* `completion_level`: One of `attempt`, `survive`, `complete` - the degree of success required for the rift completion to count towards the quest.
* `rift_type`: Optional. Specifies restrictions on rift type.
  * `tier`: Optional, Integer. Min tier required.
  * `theme`: Optional. Id of the theme required.
  * `objective`: Optional. Id of the objective required.

Example:
```json
{
  "type": "wotr:fixed_complete_rift",
  "count" : 2,
  "completion_level" : "complete",
  "rift_type" : {
    "tier": 5,
    "theme": "wotr:cave",
    "objective": "wotr:kill"
  }
}
```

### Fixed Kill Mob
The Fixed Kill Mob goal requires a number of mobs of a specific type or a range of types to be killed by the player.

* `type`: Must be `wotr:fixed_kill_mob`
* `mob`: The type of mobs required to be killed. Either an Entity Type id, an Entity Type tag, or a list of Entity Type ids. 
* `mob_label`: String. The language id for displaying the mob type.
* `count`: Integer. The number of 

### Pool
The Pool goal picks a random goal out of a list of goals.

* `type`: Must be `wotr:pool`
* `entries`: A list of goals

Example:
```json
{
  "type": "wotr:pool",
  "entries": [
    {
      "type" : "wotr:fixed_give_item",
      "item" : "wotr:skill_thread",
      "count" : 5
    },
    {
      "type" : "wotr:fixed_give_item",
      "item" : "minecraft:gold_ingot",
      "count" : 4
    }
  ]
}
```

## Rewards
These are the currently available rewards.

### Item Reward
A reward that provides a specific item.

* `type`: Must be `wotr:item`
* `item`: The item, in [item format](https://minecraft.wiki/w/Data_component_format). This includes id, count, and any components. 

Example:
```json
{
  "type": "wotr:item",
  "item": {
    "components": {
      "wotr:ability": "wotr:fireball"
    },
    "count": 1,
    "id": "wotr:ability_holder"
  }
}
```

### Loot Table Reward
A reward that generates its contents from a loot table. All generated items will be included in the reward, with stacks combined where possible.

* `type`: Must be `wotr:loot_table`
* `loot_table`: The id of the loot table to generate the reward from.

Example:
```json
{
  "type": "wotr:loot_table",
  "loot_table" : "wotr:chests/wooden"
}
```


## Overall Example
```json
{
  "goals": [
    {
      "type": "wotr:fixed_give_item",
      "item": "minecraft:gold_ingot",
      "count": 4
    },
    {
      "type": "wotr:pool",
      "entries": [
        {
          "type" : "wotr:give_item",
          "item" : "wotr:skill_thread",
          "count" : {
            "type": "minecraft:uniform",
            "min": 5,
            "max": 8
          }
        },
        {
          "type" : "wotr:give_item",
          "item" : "minecraft:gold_ingot",
          "count" : {
            "type": "minecraft:uniform",
            "min": 24,
            "max": 32
          }
        },
        {
          "type" : "wotr:give_item",
          "item" : "minecraft:iron_ingot",
          "count" : {
            "type": "minecraft:uniform",
            "min": 32,
            "max": 48
          }
        },
        {
          "type" : "wotr:give_item",
          "item" : "minecraft:copper_ingot",
          "count" : {
            "type": "minecraft:uniform",
            "min": 48,
            "max": 64
          }
        }
      ]
    }
  ],
  "rewards": [
    {
      "type": "wotr:item",
      "item": {
        "components": {
          "wotr:ability": "wotr:fireball"
        },
        "count": 1,
        "id": "wotr:ability_holder"
      }
    },
    {
      "type": "wotr:loot_table",
      "loot_table" : "wotr:chests/wooden"
    }
  ]
}
```