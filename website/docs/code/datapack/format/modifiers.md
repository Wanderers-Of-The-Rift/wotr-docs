# Modifiers
## Modifier
Modifiers are the core of the WotR upgrade system.
#### Location
`data/wotr/wotr/modifier` Take note of the second wotr. 
#### Format
* `tier`: A number representing the tier of the effect.
* `modifiers` : A list of modifier effects that will be applied to the entity by this modifier.
#### Implementation Guidelines
* A modifier should have a name that describes its intention. The explanation of the modifier can be found in the modifier effects. The name of the modifier should ideally follow the format: `<name>_t<tier>`.
* Ideally there is a modifier defined for every tier.
* You select one or more from the modifier effects described below and add it in the `modifiers` list.
#### Example
```json
{
  "tier": 1,
  "modifiers": [
    {
      "type": "wotr:attribute_modifier",
      "id": "minecraft:flat_attack_damage",
      "attribute": "minecraft:attack_damage",
      "min_roll": 1,
      "max_roll": 3,
      "operation": "add_value"
    }
  ]
}
```
#### Note on rolls
A `roll` is used to calculate the correct value of a modifier effect. This roll is a number between 0 and 1. It uses the `roll` value determined by the modifierInstane owner of the modifier.

The final calculation is usually something like: `min_roll + ((max_roll - min_roll) * roll)`

## AttributeModifierEffect
#### Format
* `type`: `"wotr:attribute"`
* `id`: The id is used to uniquely identify this attribute modifier efect in the list of modifier effects for this modifier. This is necessary to identify the correct attributes to remove when the item is removed.
* `attribute`: The attribute adjusted by this effect.
* `min_roll`: The minimum value that can be rolled for this effect. 
* `max_roll`: The maximum value that can be rolled for this effect.
* `operation`: The operation to perform on the attribute. Can be `add_value`, `add_multiplied_base`, `add_multiplied_total`. See vanilla AttributeModifier for more information.
#### Usage
Each effect will add a random value between `min_roll` and `max_roll` to the `attribute` of the entity. The `operation` will determine how the value is added.
#### Example
```json
{
  "type": "wotr:attribute_modifier",
  "id": "minecraft:flat_attack_damage",
  "attribute": "minecraft:attack_damage",
  "min_roll": 1,
  "max_roll": 3,
  "operation": "add_value"
}
```

## Tags
The vanilla tag system is used to maintain the tags. Modifier tags will be used to select a modifier from a list of modifiers.
#### Location
`data/wotr/tags/wotr/modifier`
#### Format
* `values` : A list of modifier ResourceLocations.
* `replace` : If true, the tag will replace the previous version of the tag. If false, it will add to the previous tag. Should not be used
#### Example
```json
{
  "values": [
    "wotr:modifiers/flat_attack_damage"
  ]
}
```