import { fileHeaderComment, groupNameComment } from "./commentary";
import { categoryPrefixes, actionsNameDefinition } from "./payloads";
import { variableName } from "./names";
import { rgbToHsl } from "./values";
import { currentDate } from "./helpers";


// Functions registration.
// Pulsar.registerFunction('variableName', variableName);
// Pulsar.registerFunction('fileHeaderComment', fileHeaderComment);
// Pulsar.registerFunction('groupNameComment', groupNameComment);
// Pulsar.registerFunction('rgbToHsl', rgbToHsl);
Pulsar.registerFunction("currentDate", currentDate);

// Payloads registration
Pulsar.registerPayload('categoryPrefixes', categoryPrefixes);
Pulsar.registerPayload('actionsNameDefinition', actionsNameDefinition)
