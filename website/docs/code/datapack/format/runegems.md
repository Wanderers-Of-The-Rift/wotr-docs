# Runegems
## Runegem Data
Runegem Data files are used during the creation of runegems. They are used to define the properties of the runegem and the modifiers it will have when applied to an item.
#### Location
`data\wotr\wotr\runegem_data` Take note of the second wotr.
#### Format
* `modifier_options` : Contains the list of what modifiers can be applied
  * `modifiers` : List of possible modifiers for particular items/tags
    * `modifier` : Name of modifier as found in `data\wotr\wotr\modifier`
    * `tier` : Determines the possible range of values this modifier would choose from, 1 being the lowest and the max varying depending on the specific modifier
  * `supported_items` :
* `name` : Unique name that ties back to a description in the language files
* `shape` : The shape of the runegem. This is a string that represents the shape of the runegem. Taken from the possible shapes.
  * `circle` - Generally defensive, such as additional armor
  * `square` - Generally ability focused, such as increased mana regen
  * `triangle` - Generally utility focused, such as movement speed
  * `diamond` - Monster gem
  * `heart` - Generally health focused, such as additional health
  * `pentagon` - Generally offensive focused, such as additional damage
* `tier` : The tier for this modifier. For now, we do not use all values. The below are in ascending rarity order
  * `raw`  
  * `cut`
  * `shaped`
  * `polished`
  * `framed`
  * `unique`: **NOT IMPLEMENTED**, unique tier, no random effects.
#### Implementation Guidelines
* A runegem should have a name that describes its intention. The complete name should be the format: `<tier>_<name>_rune`.
* The explanation of the tag can be found on [Modifiers](code/datapack/format/modifiers.md). The name of the tag should ideally be identical to the runegem name. 
* The content of the tag can overlap with content from higher tiers. For example, a `cut` rune can have the stronger content from the `raw` rune, but it should also have its own content.

#### Example

```json
{
    "shape": "circle",
    "tag": "wotr:modifiers/cut_health_rune",
    "tier": "cut"
}
```