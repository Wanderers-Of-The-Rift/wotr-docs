## Air Retainer

The air retainer processor will remove blocks if there used to be air in the original structure

### Format

* `processor_type`: "structure_toolkit:air_retainer"
* `to_replace`: A list of block IDs. If empty or missing, it will replace ALL blocks.
* `rarity`: The numerical chance between 0 and 1 for the block to be replaced. Defaults to 1.
* `Random Type`: [Random Type](/Random-Type). Defaults to BLOCK.
### Usage

The Air retainer is used when you want naturally generated caves to intercede your structure. Ideal for structures that need to open up into the caves. For example: cavelike structures.

Random Type BLOCK will allow you to make a crumbling wall. PIECE on the other hand will allow you to have only parts of the structure have holes.

### Example

```json
{
  "processor_type": "structure_toolkit:air_retainer",
  "to_replace": ["minecraft:stone"],
  "rarity": 0.9,
  "Random Type": "BLOCK"
}
```