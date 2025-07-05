# Runegems
## Runegem Data
Runegem Data files are used during the creation of runegems. They are used to define the properties of the runegem and the modifiers it will have when applied to an item.
#### Location
`data/wotr/wotr/runegem_data` Take note of the second wotr.
#### Format
* `shape` : The shape of the runegem. This is a string that represents the shape of the runegem. Taken from the possible shapes.
  * `circle`
  * `square`
  * `triangle`
  * `diamond`
  * `heart`
  * `pentagon`
* `tag` : A tag of modifier effects that will be applied to the entity by this modifier.
* `tier` : The tier for this modifier. For now, we do not use all values.
  * `raw`: **USED**, lowest tier.
  * `shaped`
  * `cut`: **USED**, mid tier.
  * `polished`
  * `framed`: **USED**, highest tier.
  * `unique`: **USED**, unique tier, no random effects.
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