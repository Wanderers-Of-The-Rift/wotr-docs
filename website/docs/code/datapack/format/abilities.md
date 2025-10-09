# Abilities

Abilities are the powers that a player can use. Sometimes actively by placing them in the ability bar, other times 
passively as triggers on gear.

## Concepts

### Ability Types

Ability types determine the overall activation behavior of the ability.

### Requirements

Requirements both specify the conditions required to activate or maintain an ability, and any costs consumed.

### Effects

Abilities are composed of a tree of effects, with each effect performing an action. This can include playing a sound, 
or doing damage, or just gathering targets for child effects.

#### Attach Effect

The Attach effect is worth special mention - this effect attaches to an entity, and can apply modifiers and/or activate
child effects when conditions are met. This allows for having effects that continue to act over time.

#### Conditional Effects

Conditional effects allow abilities to have behavior that changes based on upgrades. When activated a conditional effect
will check to see if its condition is met, and apply different effects based on whether it is or is not.

### Targeting

All abilities start by targeting the caster, but as the tree of effects is processed new targets can be selected - both
entities and blocks. The TargetingEffect in particular allows for a range of different ways to selected, but many
effects may also select new targets for their child effects based on their actions. For example, child effects of the 
SummonEffect will target the summoned entities. 

## Ability Types

### Instant

Instant abilities charge their costs and apply their effects immediately, then go straight to cooldown.

#### Format

* `type`: Must be `wotr:instant`.
* `icon`: The 16x16 icon used to display the ability in the ability bar
* `small_icon`: Optional. A 16x16 icon, but intended to smaller to display on the ability holder when the ability is in an 
  inventory or dropped. If not specified `icon` will be used.
* `in_creative_menu`: Optional, defaults to `true`. Whether this ability will be available in the creative menu.
* `requirements`: Optional. An array of requirements that must be met for the ability to be usable.
* `effects`: Optional. An array of effects that are applied when the ability is activated.

#### Example

This example heals the user 2 for the cost of 10 mana, with a 200 tick (10 second) cooldown.

```json
{
  "type": "wotr:instant",
  "icon": "minecraft:textures/mob_effect/regeneration.png",
  "requirements": [
    {
      "type": "wotr:ability_resource",
      "resource_type": "wotr:mana",
      "amount": 10
    },
    {
      "type": "wotr:cooldown",
      "ticks": 200
    }
  ],
  "effects": [
    {
      "type": "wotr:heal",
      "amount": 2.0
    }
  ]
}
```

### Persistent

Persistent abilities run over a period of time - either a fixed duration, until ongoing requirements are no longer met
or the user deactivates them.

#### Format

* `type`: Must be `wotr:persistent`.
* `icon`: The 16x16 icon used to display the ability in the ability bar.
* `small_icon`: Optional. A 16x16 icon, but intended to smaller to display on the ability holder when the ability is in an
  inventory or dropped. If not specified `icon` will be used.
* `in_creative_menu`: Optional, defaults to `true`. Whether this ability will be available in the creative menu.
* `warmup_time`: Optional, defaults to `0`. How long after activating the ability before its activation effects are 
  executed.
* `can_deactive`: Optional, defaults to `true`. Can the user deactivate the ability manually.
* `channelled`: Optional, defaults to `false`. Is this ability interrupted by the use of an item, weapon, or another ability.
* `requirements`: Optional. An array of requirements that must be met for the ability to be usable.
* `ongoing_requirements`: Optional. An array of requirements that must be met for the ability to remain active.
* `on_deactivation_costs`: Optional. An array of requirements that are used to apply costs when the ability is deactivated. 
  (e.g. cooldowns)
* `activation_effects`: Optional. An array of effects that are applied when the ability is activated (after `warmup_time`).
* `on_deactivation_effects`: Optional. An array of effects that are applied when the ability becomes deactivated.

#### Example

This ability, for the cost of 10 mana and a 200 tick (10 second) cooldown, pushes away entities in a 10m cubic area around
the user for 3 times, at 0.5 second intervals.
 
```json
{
  "type": "wotr:persistent",
  "icon": "minecraft:textures/item/fire_charge.png",
  "can_deactivate": false,
  "channelled": false,
  "requirements": [
    {
      "type": "wotr:ability_resource",
      "resource_type": "wotr:mana",
      "amount": 10
    }
  ],
  "on_deactivation_costs": [
    {
      "type" : "wotr:cooldown",
      "ticks": 200
    }
  ],
  "ongoing_requirements" : [
    {
      "type": "wotr:own_attached_effect",
      "id": "main"
    }
  ],
  "activation_effects": [
    {
      "type": "wotr:attach",
      "id": "main",
      "trigger": {
        "frequency": 10
      },
      "continue": {
        "max_trigger_count": 3
      },
      "effects": [
        {
          "type": "wotr:targeting",
          "targeting": {
            "type": "wotr:area",
            "shape": {
              "type": "wotr:cube",
              "range": 10
            },
            "entities": {
              "exclude_source": true
            }
          },
          "effects": [
            {
              "type": "wotr:movement",
              "velocity": [0, 0, 5],
              "relative_frame": "target_from_source"
            }
          ]
        }
      ]
    }
  ],
  "on_deactivation_effects": [
    {
      "type": "wotr:detach_own",
      "id": "main"
    }
  ]
}
```

### Chain

Chain abilities are composed of a number of other abilities, which they cycle through when used. After a time the
chain ability will reset back to the first ability if subsequent abilities are not used.

#### Format

* `type`: Must be `wotr:chain`.
* `in_creative_menu`: Optional, defaults to `true`. Whether this ability will be available in the creative menu.
* `abilities`: An array of one or more ability entries, specifying the abilities the chain ability will cycle through.
  * `ability`: The ability for this entry.
  * `ticks_to_reset`: Optional, default `100`. How long (in ticks) before the chain ability will reset if this ability
    is not used.
  * `auto_activate`: Optional, default `false`. When this entry is reached, will it be automatically activated.

#### Example

This ability applies the `wotr:strength` ability when used, and when that is deactivated switches automatically to a `wotr:weak_strength` ability.

```json
{
  "type": "wotr:chain",
  "icon": "minecraft:textures/mob_effect/strength.png",
  "abilities": [
    {
      "ability": "wotr:strength"
    },
    {
      "ability": "wotr:weak_strength",
      "auto_activate": true
    }
  ]
}
```

## Requirements

### Ability Resource

This requirement checks and optionally consumes an amount of an ability resources, such as mana.

#### Format

* `type`: Must be `wotr:ability_resource`.
* `resource_type`: The resource type required.
* `amount`: Optional, defaults to (near) `0`. The amount of the resource required.
* `consume`: Optional boolean, defaults to `true`. Is the resource consumed as part of the requirement.

### Cooldown

This requirement applies a cooldown on the ability.

#### Format

* `type`: Must be `wotr:cooldown`.
* `ticks`: Optional, defaults to `20` ticks (one second). Time (in ticks) the ability will be on cooldown.

### Food Level

This requirement requires the user to have sufficient food level, and optionally consumes the user's saturation (first) and food level (second).

#### Format

* `type`: Must be `wotr:food_level`.
* `amount`: Optional, defaults to `1`. The amount of food level required.
* `consume`: Optional, defaults to `true`. Whether the required food level is consumed.

### Life

This requirement requires the user to have an amount of life, and optionally consumes it.

#### Format

* `type`: Must be `wotr:life`.
* `amount`: The amount of life required.
* `consume`: Optional, defaults to `true`. Whether the required life is consumed.

### Own Attached Effect

Used for ongoing requirements, this requirement checks that the user has an ongoing attach effect from the ability. This
enables the ability to end when the attach effect ends.

#### Format

* `type`: Must be `wotr:own_attached_effect`.
* `id`: Optional. The id of the attach effect to check for the presence of. If not specified will check for the presence
  of any attach effect from the ability.

### No Move

This requirement requires the user to be below a specified speed. For use by abilities that require the user to remain 
stationary.

#### Format

* `type`: Must be `wotr:no_move`.
* `max_speed`: Optional, defaults to `0.01`. The maximum speed the user can have. 


## Related Datapack Formats

### Trigger Modifiers

Modifier can be created that, when active on living entity, will trigger an ability when a condition is met. 

### Upgrades

Ability upgrades can be applied to an ability to provide modifiers for when that ability is used. 


