# Modifiers
Modifiers are the backbone of every effect that adjusts the characters stats and abilities.

## AbstractModifier
The base class for all modifiers.

Its primary feature is to provide codec
### Direct Codec
The codec that dispatches to the actual codec based on the type of the modifier. This is done by loading the type from the Modifier Type Registry.

### Codec
The codec that is used to serialize and deserialize a reference to a predefined modifier from a datapack.

## Modifier Instance
Contains a reference to a modifier and a roll that determines the actual value of the modifier.

## Modifier Types
### AttributeModifier
Applies a modification to an attribute. Has a minroll and a maxroll, that clamps the value of the roll applied to this modifier.

The actual roll calculation is: `(roll * (maxroll - minroll)) + minroll`.