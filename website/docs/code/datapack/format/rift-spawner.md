# Rift Spawners
## Rift Spawner
Rift Spawners appear in normal POIs to generate mobs.
#### Location
`data/wotr/trial_spawner`.
* Default rift spawner will be rift.json if no other file, such as a theme specific one, is configured.
#### Format
* `items_to_drop_when_ominous` : Loot table to use when spawner is ominous.
  * Not applicable as we are not using ominous spawners, will not be used even if filled in.
* `loot_tables_to_eject` : Loot table to use when ejecting loot from completed spawner.
  * Defaults to Minecraft trial spawner loot tables so this should be filled in with something in wotr\loot_table\chests\rift_spawner
* `simultaneous_mobs` : Number of mobs that can be spawned at once if one player is nearby.
  * Defaults to 2.0
* `simultaneous_mobs_added_per_player` : Number added to `simultaneousMobs` for each additional player nearby.
  * Defaults to 1.0
* `spawn_potentials` : A list of mobs and their respective attributes that could spawn from this spawner.
  * Defaults to an empty list, so needs to be filled in order to spawn anything.
* `spawn_range`: An integer for the max distance a mob could spawn from the spawner.
  * Can be between 1 and 128. Defaults to 4
* `ticks_between_spawn` : Number of game ticks between each mob spawn.
  * Defaults to 40
* `total_mobs` : The total number of mobs that could spawn during activation if one player is nearby.
  * Defaults to 6.0
* `total_mobs_added_per_player` : Number added to `totalMobs` for each additional player nearby.
  * Defaults to 2.0
- See https://misode.github.io/trial-spawner/ for example JSON builder
- See https://minecraft.wiki/w/Trial_Spawner for trial spawner config (search for `normal_config`), including a wide range of options for `spawn_potentials`
#### Implementation Guidelines
* Rift Spawners are defined when processors run, and fall back to the default rift.JSON if no specific config is defined.
* Other loot tables can be defined, allowing varied loot tables by rift spawner definition.
* There is currently no built-in rift tier flexibility.
* Spawn potentials can handle any entity attributes that entity could take normally, such as IsBaby for Zombies.
#### Example
```json
{
  "loot_tables_to_eject": [
    {
      "data": "wotr:chests/rift_spawner/default",
      "weight": 10
    }
  ],
  "simultaneous_mobs": 3.0,
  "simultaneous_mobs_added_per_player": 0.5,
  "spawn_potentials": [
    {
      "data": {
        "entity": {
          "id": "minecraft:zombie",
          "IsBaby": 0,
          "HandItems": [
            {
              "id": "minecraft:iron_pickaxe",
              "count": 1
            },
            {
              "id": "minecraft:lantern",
              "count": 1
            }
          ]
        }
      },
      "weight": 5
    },
    {
      "data": {
        "entity": {
          "id": "minecraft:zombie",
          "IsBaby": 1
        }
      },
      "weight": 1
    }
  ],
  "spawn_range": 4,
  "ticks_between_spawn": 20,
  "total_mobs": 6.0,
  "total_mobs_added_per_player": 2.0
}
```