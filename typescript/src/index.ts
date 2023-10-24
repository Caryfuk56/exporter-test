import { fileHeaderComment, groupNameComment } from "./commentary";
import { categoryPrefixes, actionsNameDefinition } from "./payloads";
import { variableName } from "./names";
import { rgbToHsl } from "./values";


// Functions registration.
Pulsar.registerFunction('variableName', variableName);
Pulsar.registerFunction('fileHeaderComment', fileHeaderComment);
Pulsar.registerFunction('groupNameComment', groupNameComment);
Pulsar.registerFunction('rgbToHsl', rgbToHsl);

// Payloads registration
Pulsar.registerPayload('categoryPrefixes', categoryPrefixes);
Pulsar.registerPayload('actionsNameDefinition', actionsNameDefinition)
