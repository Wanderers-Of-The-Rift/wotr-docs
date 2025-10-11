# Abilities

Abilities are the powers that a player can use. Sometimes actively by placing them in the ability bar, other times
passively as triggers on gear.

<!-- TOC -->

* [Abilities](#abilities)
    * [Concepts](#concepts)
        * [Ability Types](#ability-types)
        * [Requirements](#requirements)
        * [Effects](#effects)
            * [Attach Effect](#attach-effect)
            * [Conditional Effects](#conditional-effects)
        * [Targeting](#targeting)
    * [Ability Types](#ability-types-1)
        * [Instant](#instant)
        * [Persistent](#persistent)
        * [Chain](#chain)
    * [Requirements](#requirements-1)
        * [Ability Resource](#ability-resource)
        * [Cooldown](#cooldown)
        * [Food Level](#food-level)
        * [Life](#life)
        * [Own Attached Effect](#own-attached-effect)
        * [No Move](#no-move)
    * [Effects](#effects-1)
        * [Attach](#attach)
        * [Break](#break)
        * [Conditional](#conditional)
        * [Damage](#damage)
        * [Detach Own](#detach-own)
        * [Heal](#heal)
        * [Movement](#movement)
        * [No Op](#no-op)
        * [Particle](#particle)
        * [Projectile](#projectile)
        * [Set Block](#set-block)
        * [Simple Projectile](#simple-projectile)
        * [Sound](#sound)
        * [Status](#status)
        * [Summon](#summon)
        * [Targeting](#targeting-1)
        * [Teleport](#teleport)
    * [Targeting Types](#targeting-types)
        * [Area](#area)
        * [Caster](#caster)
        * [Connected Block](#connected-block)
        * [Random Subset](#random-subset)
        * [Random Chance](#random-chance)
        * [Raycast](#raycast)
        * [Self](#self)
        * [Source](#source)
        * [Trigger Target](#trigger-target)
    * [Target Entity Predicate](#target-entity-predicate)
    * [Target Block Predicate](#target-block-predicate)
        * [Additional Block Predicates](#additional-block-predicates)
            * [Surface](#surface)
    * [Related Datapack Formats](#related-datapack-formats)
        * [Effect Marker](#effect-marker)
        * [Trigger Modifiers](#trigger-modifiers)
        * [Upgrades](#upgrades)

<!-- TOC -->

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
entities and blocks. The TargetingEffect in particular allows for a range of different ways to select new targets, but
many
effects may also select new targets for their child effects based on their actions. For example, child effects of the
SummonEffect will target the summoned entities.

## Ability Types

### Instant

Instant abilities charge their costs and apply their effects immediately, then go straight to cooldown.

#### Format

* `type`: Must be `wotr:instant`.
* `icon`: The 16x16 icon used to display the ability in the ability bar
* `small_icon`: Optional. A 16x16 icon, but intended to smaller to display on the ability holder when the ability is in
  an
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
* `small_icon`: Optional. A 16x16 icon, but intended to smaller to display on the ability holder when the ability is in
  an
  inventory or dropped. If not specified `icon` will be used.
* `in_creative_menu`: Optional, defaults to `true`. Whether this ability will be available in the creative menu.
* `warmup_time`: Optional, defaults to `0`. How long after activating the ability before its activation effects are
  executed.
* `can_deactive`: Optional, defaults to `true`. Can the user deactivate the ability manually.
* `channelled`: Optional, defaults to `false`. Is this ability interrupted by the use of an item, weapon, or another
  ability.
* `requirements`: Optional. An array of requirements that must be met for the ability to be usable.
* `ongoing_requirements`: Optional. An array of requirements that must be met for the ability to remain active.
* `on_deactivation_costs`: Optional. An array of requirements that are used to apply costs when the ability is
  deactivated.
  (e.g. cooldowns)
* `activation_effects`: Optional. An array of effects that are applied when the ability is activated (after
  `warmup_time`).
* `on_deactivation_effects`: Optional. An array of effects that are applied when the ability becomes deactivated.

#### Example

This ability, for the cost of 10 mana and a 200 tick (10 second) cooldown, pushes away entities in a 10m cubic area
around
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
      "type": "wotr:cooldown",
      "ticks": 200
    }
  ],
  "ongoing_requirements": [
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
              "velocity": [
                0,
                0,
                5
              ],
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

This ability applies the `wotr:strength` ability when used, and when that is deactivated switches automatically to a
`wotr:weak_strength` ability.

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

This requirement requires the user to have sufficient food level, and optionally consumes the user's saturation (first)
and food level (second).

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

## Effects

### Attach

__Applies to__: Entities

This effect attaches to entities and persists, applying modifiers and/or triggering further effects when a condition
is met.

#### Format

* `type`: `wotr:attach`
* `id`: Optional. An identifier for this attach effect, as a resource location.
* `effects`: Optional. A list of further effects that will be applied to the target whenever `trigger` is met.
* `trigger`: Optional. A predicate checked each tick to determine whether to apply `effects`. If not specified then it
  is always true. All conditions must be met to trigger.
    * `target`: Optional. A standard minecraft entity predicate as described
      in [Template: Nbt inherit/conditions/entity/template](https://minecraft.wiki/w/Template:Nbt_inherit/conditions/entity/template)
      that will check the state of the target.
    * `caster`: Optional. A standard minecraft entity predicate as described
      in [Template: Nbt inherit/conditions/entity/template](https://minecraft.wiki/w/Template:Nbt_inherit/conditions/entity/template)
      that will check the state of the caster.
    * `frequency`: Optional, defaults to `1`. The frequency in ticks in which the predicate can be `true`. `1` means
      every tick, `2` means every second tick, etc.
    * `initial_delay`: Optional, defaults to `0`. How many ticks after the effect is attached before it can first
      trigger, in ticks.
* `continue`: Optional. A predicate checked each tick to determine whether the attach effect should continue. Defaults
  to always continue.
    * `target`: Optional. A standard minecraft entity predicate as described
      in [Template: Nbt inherit/conditions/entity/template](https://minecraft.wiki/w/Template:Nbt_inherit/conditions/entity/template)
      that will check the state of the target.
    * `caster`: Optional. A standard minecraft entity predicate as described
      in [Template: Nbt inherit/conditions/entity/template](https://minecraft.wiki/w/Template:Nbt_inherit/conditions/entity/template)
      that will check the state of the caster.
    * `duration`: Optional, defaults to `-1` (no duration). The maximum number of ticks the effect will remain attached.
    * `max_trigger_count`: Optional, defaults to `-1` (no maximum). The maximum number of times the effect can trigger
      before it is removed.
* `display`: Optional. Defines an display that will appear in the hud for players affected by this effect.
* `modifiers`: Optional. A list of modifiers to apply to the entity this effect is attached to, for the duration of the
  attachment.

### Break

__Applies to__: Blocks

This effect destroys block, replacing them with air and optionally dropping them.

#### Format

* `type`: `wotr:break`
* `drops`: Optional, defaults to `collate`. Can be one of:
    * `normal`: Each block drops itself.
    * `collate`: The drops of each block are combined whenever possible and dropped at the source.
    * `none`: Nothing will drop.
* `as_tool`: Optional, defaults to `none`. Can be either `none`, `ability_item` (in which case the item that has the
  ability is used as the tool), or an item stack object. The block will be broken as if by the specified tool, for the
  purpose of fortune, silk touch and similar.
* `reward_mine_state`: Optional, defaults to `false`. Should blocks broken with this effect count for the blocks mined
  stats.

### Conditional

__Applies to__: All

This effect applies different effects, depending on a condition. Conditions are Resource Locations that are applied by
`ProviderAbilityConditionModifierEffect`s. All targets are passed on to the applied effects

#### Format

* `type`: `wotr:conditional`
* `always`: Optional. A list of effects that are always applied. These are applied first.
* `present`: Optional. A list of effects that are applied if the condition is present/met.
* `missing`: Optional. A list of effects that are applied if the condition is missing/unmet.
* `condition_name`: The condition to check.

### Damage

__Applies to__: Living Entities

This effect applies damage to living entities.

#### Format

* `type`: `wotr:damage`
* `amount`: How much damage to apply. Boosted by the `wotr:ability_raw_damage` attribute.
* `damage_type`: The damage type of the damage being applied.

### Detach Own

__Applies to__: Entities

This effect removes Attach Effects applied by this ability instance from the target entities.

#### Format

* `type`: `wotr:detach_own`
* `id`: Optional. The id of the attach effect to remove. If not specified all attach effects from this ability instance
  are removed.

### Heal

__Applies to__: Living Entities

This effect heals living entities.

#### Format

* `type`: `wotr:heal`
* `amount`: The amount of health to heal. Boosted by the `wotr:ability_heal_power` attribute.

### Movement

__Applies to__: Entities

This effect applies velocity to entities.

#### Format

* `type`: `wotr:movement`
* `velocity`: a vector (array of three numbers specifying the x (lateral), y (vertical) and z (forwards) velocities in
  meters per second).
* `relative_frame`: Optional, defaults to `target_facing`. Specifies the frame in which the velocity is applied. By
  default this is relative to the direction the target is facing, so a forwards velocity moves the target in the
  direction they are facing. Options are:
    * `absolute`: velocity is in world coords
    * `source_from_target`: velocity is relative to the direction of the source (previous target) from the target.
    * `target_from_source`: velocity is relative to the direction of the target from the source (previous target).
    * `source_facing`: velocity is relative to the direction the source (previous target) is facing.
    * `target_facing`: velocity is relative to the direction the target is facing.
    * `source_y_facing`: velocity is relative to the direction the source is facing, ignoring pitch.
    * `target_y_facing`: velocity is relative to the direction the target is facing, ignoring pitch.

### No Op

__Applies to__: Nothing

This effect does nothing.

#### Format

* `type`: `wotr:noop`

### Particle

__Applies to__: All

This effect spawns a minecraft particle effect at the location of the target.

#### Format

* `type`: `wotr:particle`
* `particle`: Resource Location of the particle effect to spawn.

### Projectile

__Applies to__: Entities

This effect spawns a projectile entity and fires it from in the facing direction of the target. Effects can be
applied to the projectile, but unlike the Simple Projectile effect it doesn't have effects applied on hit. The
projectile is owned by the target, so any damage will be considered to be theirs.

#### Format

* `type`: `wotr:projectile`
* `effects`: Optional. A list of effects applied to the spawned projectiles.
* `projectile_type`: The entity type of the projectile. Must be a subtype of Projectile.
* `velocity`: The velocity at which the projectile is fired, relative to the facing of the target.

### Set Block

__Applies to__: Blocks

This effect replaces the target blocks with a new block.

#### Format

* `type`: `wotr:set_block`
* `block`: The block state to set targets to.

### Simple Projectile

__Applies to__: Entities

This effect spawns one or more configurable projectiles and fires them in a spread in the direction the target is
facing. Many attributes of the projectiles depend on attributes:

* `wotr:projectile_count` determines the number of projectiles
* `wotr:projectile_spread` determines the angle of spread of the projectiles
* `wotr:projectile_speed` determines the speed of the projectiles
* `wotr:projectile_pierce` determines the number of targets the projectiles move through

#### Format

* `type`: `wotr:simple_projectile`
* `effects`: Optional. A list of effects that will be applied to what the projectile(s) hit.
* `config`: Configuration of the projectile.
    * `projectiles`: Optional, defaults to `1`. How many projectiles will be produced. Affected by the
      `wotr:projectile_count` attribute. If there are more than one projectile additional projectiles will be fired in a
      spread with the angle between them determined by the `wotr:projectile_spread` attribute.
    * `pierce`: Optional, defaults to `0`. How many targets each projectile can pass through (hitting) before it comes
      to rest. Affected by the `wotr:projectile_pierce` attribute.
    * `pierce_blocks`: Optional, defaults to `false`. Whether blocks can also be pierced through, or just entities.
    * `velocity`: The velocity of the projectiles, relative to the direction they are being fired. The magnitude is
      affected by the `wotr:projectile_speed` attribute.
    * `gravity_affected`: Optional, defaults to `true`. Whether the projectiles are affected by gravity.
    * `gravity`: Optional, defaults to `0.05`. The strength of gravity affected the projectiles.
    * `persist_ticks`: Optional, defaults to `1200` (1 minute). How long in ticks the projectiles will persist in
      motion.
    * `ground_persist_ticks`: Optional, defaults to `0`. How long in ticks the projectiles will persist after hitting
      their final target.
    * `render`: Configuration for how the projectile is displayed.
        * `model`: ResourceLocation of the model used to render the projectile.
        * `texture`: ResourceLocation of the texture used to render the projectile.
        * `animations`: ResourceLocation of the animation used to render the projectile.
    * `sound`: Optional, configuration of the sound of the projectile. Defaults to arrow sound on collision.
        * `collision`: Optional, defaults to none. The sound made when the projectile collides.
        * `fire`: Optional, defaults to none. The sound made when the projectile is fired.
        * `travel`: Optional, defaults to none. The sound made when the projectile is travelling.

### Sound

__Applies to__: All

This effect plays a sound originating from the target's location.

#### Format

* `type`: `wotr:sound`
* `sound`: Resource location of the sound event to play.

### Status

__Applies to__: Living entities

This effect applies a MobEffect to the target.

#### Format

* `type`: `wotr:status`
* `status_effect`: Details of the mob effect to apply (this is a minecraft MobEffectInstance definition)
    * `id`
    * `amplifier`
    * `duration`
    * `ambient`
    * `show_particles`
    * `show_icon`
    * `hidden_effect`

### Summon

__Applies to__: All

This effect summon an entity at the target locations.

#### Format

* `type`: `wot:summon`
* `effects`: Optional. A list of effects to apply to the summoned entities.
* `entity_type`: The type of entity to summon.

### Targeting

### Teleport

## Targeting Types

Targeting types, used by the Targeting Effect, select new entity and/or block targets around each previous target. The
same entity or block may be targeted multiple times if they are targeted off of multiple previous targets.

### Area

This targeting type selects all entities and/or blocks within an area, determines by a "shape". Both entities and
blocks can be filtered through predicates to better control what may be targeted.

#### Format

* `type`: Must be `wotr:area`.
* `shape`: The shape of the area, options listed below.
* `entities`: Optional, defaults to `all`. Can be `all`, `none` or a Target Entity Predicate as described below.
  Determines what entities in the area will be targeted.
* `blocks`: Optional, defaults to `none`. Can be `all`, `none` or a Target Block Predicate as described below.
  Determines what blocks in the area will be targeted.

There are currently two possible shapes, with the following fields:

##### Cube

This shape is an axis-aligned cube.

* `type`: `wotr:cube`
* `range`: the distance, in meters/blocks, that the cube extends from the center. A cube with range `3` is a 6x6x6 cube.
* `align_to_block`: Optional, defaults to `false`. If true, the center of the cube will be aligned to the center of a
  block. This ensures a consistent shape to blocks that are targeted.

##### Sphere

This shape is a sphere. Entities and blocks are included if their center falls within the sphere.

* `type`: `wotr:sphere`
* `range`: the distance, in meters/blocks, that the sphere extends from the center.
* `align_to_block`: Optional, defaults to `false`. If true, the center of the sphere will be aligned to the center of a
  block. This ensures a consistent shape to blocks that are targeted.

### Caster

This targeting type selects the caster (off of each current target).

#### Format

* `type`: Must be `wotr:caster`.

### Connected Block

This targeting type targets valid connected blocks following block adjacency from each target block. This is done in a
breadth-first fashion, so all blocks adjacent to the initial block will be targeted (if valid) before proceeding to more
distant blocks.

#### Format

* `type`: Must be `wotr:connected_block`.
* `blocks`: Optional, defaulting to `all`. May be `all`, `none` or a Target Block Predicate as described below.
  Determines what blocks are valid for targeting.
* `count`: Integer, minimum of `1`. The maximum number of blocks that will be targeted. Less will be targeted if there
  are not enough valid connected blocks.

### Random Subset

This targeting type selects a random subset of available targets.

#### Format

* `type`: Must be `wotr:random_subset`.
* `count`: Positive integer. The size of the subset to select. If there are less targets than `count` then all targets
  will be selected.

### Random Chance

This targeting type will filter the existing targets against a probability of being selected.

#### Format

* `type`: Must be `wotr:random_chance`
* `chance`: A number between 0 and 1 inclusive. The chance of each target being kept.

### Raycast

Selects up to a single target by raycasting from existing targets. For entity targets this is in the direction the
entity is looking. For block targets this is in the direction the block was hit in.

#### Format

* `type`: `wotr:raycast`
* `entities`: Optional, defaults to `all`. May be `all`, `none` or a Target Entity Predicate. Determines what entities
  may be targeted by the ray.
* `blocks`: Optional, defaults to `all`. May be `all`, `none` or a Target Block Predicate. Determines what blocks may be
  targeted by the ray.
* `range`: Max range of the ray.

### Self

This targeting type merely filters the existing set of targets.

#### Format

* `type`: `wotr:self`
* `entities`: Optional, defaults to `all`. May be `all`, `none` or a Target Entity Predicate. Determines what entity
  targets to retain.
* `blocks`: Optional, defaults to `none`. May be `all`, `none` or a Target Block Predicate. Determines what block
  targets to retain.

### Source

This targeting type retargets the source (the preceding target) from each target. For example, if all entities in a 20m
sphere were targeted from the caster, this will target the caster from each entity targeted by the sphere.

#### Format

* `type`: `wotr:source`

### Trigger Target

This targeting type will select the entity or block that triggered the ability, for abilities triggered by a trigger
modifier. For example, if an ability is triggered by taking damage, this will be the entity that caused the damage.

#### Format

* `type`: `wotr:trigger_target`

## Target Entity Predicate

This predicate is used to filter entities involved in abilities.

### Format

* `filter`: Optional. A standard minecraft entity predicate, as described
  in [Template: Nbt inherit/conditions/entity/template](https://minecraft.wiki/w/Template:Nbt_inherit/conditions/entity/template)
* `sentiment`: Optional, defaults to `ANY`. The sentiment between the caster and the target. One of
    * `ANY`
    * `FRIEND`
    * `NOT_FRIEND`
    * `NEUTRAL`
    * `NOT_FOE`
    * `FOE`
* `exclude_caster`: Optional, defaults to `false`. Should the caster be excluded from targeting.
* `exclude_source`: Optional, defaults to `false`. Should the source (preceding target) be excluded from targeting.

## Target Block Predicate

This predicate is used to filter blocks involved in abilities.

### Format

* `filter`: Optional. A standard minecraft block predicate, as described
  in [Block Predicate](https://minecraft.wiki/w/Block_predicate).
* `match_source`: Optional, defaults to `false`. Whether the targets must match the source (preceding target) block.

### Additional Block Predicates

#### Surface

For finding spawnable blocks with sufficient space above them

* `type`: `wotr:surface`
* `space`: Optional, default `2`. How many blocks of air must be able the surface block.

## Related Datapack Formats

### Effect Marker

Defines a display icon for an attached effect.

### Trigger Modifiers

Modifier can be created that, when active on living entity, will trigger an ability when a condition is met.

### Upgrades

Ability upgrades can be applied to an ability to provide modifiers for when that ability is used. 


