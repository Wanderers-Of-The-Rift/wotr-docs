# Abilities

Abilities are the powers that a player can use. Sometimes actively by placing them in the ability bar, other times 
passively as triggers on gear.

## Concepts

### Ability Types

Ability types determine the activation behavior of the ability. There are three types:

* `wotr:instant`: for abilities that activate immediately and then are over
* `wotr:persistent`: for abilities the activate over a period of time - either for a specific duration or toggled
* `wotr:chain`: for abilities composed of sub-abilities that become available in sequence

### Requirements

Requirements both specify the conditions required to activate or maintain an ability, and any costs consumed.

### Effects

Abilities are composed of a tree of effects, with each effect performing an action. This can include playing a sound, 
or doing damage, or just gathering targets for child effects.

#### Attach Effect

The Attach effect is worth special mention - this effect attaches to an entity, and can apply modifiers and/or activate
child effects when different conditions are met. This allows for having effects that continue to act over time.

#### Conditional Effects

Conditional effects allow abilities to have behavior that changes based on upgrades. When activated a conditional effect
will check to see if its condition is met, and apply different effects based on whether it is or is not.

### Targeting



### Triggers

### Upgrades


