# Runegems
## Runegem Data
Runegem Data files are used during the creation of runegems. They are used to define the properties of the runegem and the modifiers it will have when applied to an item.
#### Location
`data/wotr/wotr/runegem_data` Take note of the second wotr.
#### Format
* `modifier_options` : Contains the list of what modifier sets can be applied
  * `modifiers` : Set of possible modifiers for particular items/tags (`supported_items`)
    * `modifier` : Name of modifier as found in `data/wotr/wotr/modifier`
    * `tier` : Determines the possible range of values this modifier would choose from, 1 being the lowest and the max varying depending on the specific modifier
  * `supported_items` : Item(s) or tag(s) that can receive this modifier set
* `name` : Unique name that ties back to a description in the language files
* `shape` : The shape of the runegem. This is a string that represents the shape of the runegem. Taken from the possible shapes.
  * `circle` : Generally defensive, such as additional armor
  * `square` : Generally ability focused, such as increased mana regen
  * `triangle` : Generally utility/speed focused, such as movement speed
  * `diamond` : Most commonly a monster gem
  * `heart` : Generally health focused, such as additional health
  * `pentagon` : Generally offensive focused, such as additional damage
* `tier` : The gem tier for this modifier. For now, we do not use all values. The below are in ascending strength order
  * `raw`  
  * `cut`
  * `shaped`
  * `polished`
  * `framed`
  * `unique`: **NOT IMPLEMENTED**, unique tier, no random effects.
#### Implementation Guidelines
* A runegem should have a name that describes its intention. The complete name should be the format: `<rune>_<gem tier>`.
  * Rune is the descriptive name for the type of modifiers you would expect this runegem to give. Gem tier should be raw, cut, shaped, etc.
* The explanation of the modifiers can be found on [Modifiers](modifiers.md). The name of the `rune` portion of the runegem should ideally line up with the modifiers used. 
* The content of the tag can overlap with content from higher tiers. For example, a `cut` rune can have the stronger content from the `raw` rune, but it should also have its own content.

#### Example
* The following example shows a runegem of `rune` health, `tier` cut, and `shape` heart. 
* If applied to either off-hand or helmet gear there is one possible modifier each could end up with, but it has two modifiers to randomly pick from when applying to a chestplate. 
* Notice that the helmet `health_flat` is a higher tier than the chestplate `health_flat` - modifier tiers do not have to be the same on a runegem.
```json
{
  "modifier_options": [
    {
      "modifiers": [
        {
          "modifier": "wotr:health_percent",
          "tier": 2
        }
      ],
      "supported_items": "#wotr:socketable_off_hand_slot"
    },
    {
      "modifiers": [
        {
          "modifier": "wotr:health_flat",
          "tier": 3
        }
      ],
      "supported_items": "#wotr:socketable_helmet_slot"
    },
    {
      "modifiers": [
        {
          "modifier": "wotr:health_flat",
          "tier": 2
        },
        {
          "modifier": "wotr:health_percent",
          "tier": 2
        }
      ],
      "supported_items": "#wotr:socketable_chestplate_slot"
    }
  ],
  "name": {
    "translate": "runegem.wotr.health_cut"
  },
  "shape": "heart",
  "tier": "cut"
}
```