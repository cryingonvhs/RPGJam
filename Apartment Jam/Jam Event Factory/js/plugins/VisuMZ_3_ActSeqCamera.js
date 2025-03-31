//=============================================================================
// VisuStella MZ - Action Sequence Camera
// VisuMZ_3_ActSeqCamera.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ActSeqCamera = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ActSeqCamera = VisuMZ.ActSeqCamera || {};
VisuMZ.ActSeqCamera.version = 1.13;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.13] [ActSeqCamera]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Action_Sequence_Camera_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds new Action Sequences functions to the VisuStella MZ
 * Battle Core plugin to give you, the game dev, control over the battle camera
 * and zoom functions.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Attach the camera to a specific point on the screen.
 * * Attach the camera to a specific target(s) on the screen.
 * * Pan the camera to be off center using the offset functions.
 * * Remove camera clamping to let the camera go out of bounds.
 * * Set the camera zoom level as you want.
 * * Tilt the camera by adjust the angle.
 * * New Options added to let the player turn on/off the battle camera.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * - VisuMZ_0_CoreEngine
 * - VisuMZ_1_BattleCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Spriteset Position Rewrite
 *
 * - The Spriteset_Battle function for updatePosition needed to be rewritten in
 * order to allow all the new features and functions added by the battle camera
 * and zoom.
 * 
 * - Camera tricks like zooming, panning, and tilting will be reset during the
 * input phase to ensure the player is able to see the whole battlefield.
 * 
 * - The player has the option to turn off the battle camera effects. If they
 * choose to turn it off, then all of this plugin's effects will be disabled
 * until they turn it back on. This is to give players control over how the
 * game visually appears in case they have motion sickness.
 *
 * ---
 *
 * ============================================================================
 * Action Sequence - Plugin Commands
 * ============================================================================
 *
 * The following are Action Sequence Plugin Commands that have been added with
 * this plugin. These are accessible from the Battle Core plugin (not this one)
 * in order to keep all the Action Sequences in place.
 * 
 * Once again, these plugin commands are only accessible through the Battle
 * Core plugin and not this one! Make sure you have the most update to date
 * version of the Battle Core for them.
 *
 * ---
 * 
 * === Action Sequences - Angle (Camera) ===
 * 
 * These action sequences allow you to have control over the camera angle.
 * 
 * ---
 *
 * ANGLE: Change Angle
 * - Changes the camera angle.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Angle:
 *   - Change the camera angle to this many degrees.
 *
 *   Duration:
 *   - Duration in frames to change camera angle.
 *
 *   Angle Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Angle?:
 *   - Wait for angle changes to complete before performing next command?
 *
 * ---
 *
 * ANGLE: Reset Angle
 * - Reset any angle settings.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Duration:
 *   - Duration in frames to reset camera angle.
 *
 *   Angle Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Angle?:
 *   - Wait for angle changes to complete before performing next command?
 *
 * ---
 *
 * ANGLE: Wait For Angle
 * - Waits for angle changes to complete before performing next command.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 * ---
 *
 * === Action Sequences - Camera Control ===
 *
 * These Action Sequences are battle camera-related.
 *
 * ---
 *
 * CAMERA: Clamp ON/OFF
 * - Turns battle camera clamping on/off.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Setting:
 *   - Turns camera clamping on/off.
 *
 * ---
 *
 * CAMERA: Focus Point
 * - Focus the battle camera on a certain point in the screen.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   X Coordinate:
 *   - Insert the point to focus the camera on.
 *   - You may use JavaScript code.
 *
 *   Y Coordinate:
 *   - Insert the point to focus the camera on.
 *   - You may use JavaScript code.
 *
 *   Duration:
 *   - Duration in frames for camera focus change.
 *
 *   Camera Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Camera?
 *   - Wait for camera changes to complete before performing next command?
 *
 * ---
 *
 * CAMERA: Focus Target(s)
 * - Focus the battle camera on certain battler target(s).
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Targets:
 *   - Select unit(s) to focus the battle camera on.
 *
 *   Duration:
 *   - Duration in frames for camera focus change.
 *
 *   Camera Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Camera?
 *   - Wait for camera changes to complete before performing next command?
 *
 * ---
 *
 * CAMERA: Offset
 * - Offset the battle camera from the focus target.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Offset X:
 *   - How much to offset the camera X by.
 *   - Negative: left. Positive: right.
 *
 *   Offset Y:
 *   - How much to offset the camera Y by.
 *   - Negative: up. Positive: down.
 *
 *   Duration:
 *   - Duration in frames for offset change.
 *
 *   Camera Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Camera?
 *   - Wait for camera changes to complete before performing next command?
 *
 * ---
 *
 * CAMERA: Reset
 * - Reset the battle camera settings.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Reset Focus?:
 *   - Reset the focus point?
 *
 *   Reset Offset?:
 *   - Reset the camera offset?
 *
 *   Duration:
 *   - Duration in frames for reset change.
 *
 *   Camera Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Camera?
 *   - Wait for camera changes to complete before performing next command?
 *
 * ---
 *
 * CAMERA: Wait For Camera
 * - Waits for camera changes to complete before performing next command.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 * ---
 * 
 * === Action Sequences - Skew (Camera) ===
 * 
 * These action sequences allow you to have control over the camera skew.
 * 
 * ---
 *
 * SKEW: Change Skew
 * - Changes the camera skew.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Skew X:
 *   - Change the camera skew X to this value.
 *
 *   Skew Y:
 *   - Change the camera skew Y to this value.
 *
 *   Duration:
 *   - Duration in frames to change camera skew.
 *
 *   Skew Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Skew?:
 *   - Wait for skew changes to complete before performing next command?
 *
 * ---
 *
 * SKEW: Reset Skew
 * - Reset any skew settings.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Duration:
 *   - Duration in frames to reset camera skew.
 *
 *   Skew Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Skew?:
 *   - Wait for skew changes to complete before performing next command?
 *
 * ---
 *
 * SKEW: Wait For Skew
 * - Waits for skew changes to complete before performing next command.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 * ---
 *
 * === Action Sequences - Zoom (Camera) ===
 *
 * These Action Sequences are zoom-related.
 *
 * ---
 *
 * ZOOM: Change Scale
 * - Changes the zoom scale.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Scale:
 *   - The zoom scale to change to.
 *
 *   Duration:
 *   - Duration in frames to reset battle zoom.
 *
 *   Zoom Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Zoom?
 *   - Wait for zoom changes to complete before performing next command?
 *
 * ---
 *
 * ZOOM: Reset Zoom
 * - Reset any zoom settings.
 * - Requires VisuMZ_3_ActSeqCamera!
 *
 *   Duration:
 *   - Duration in frames to reset battle zoom.
 *
 *   Zoom Easing:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine.
 *
 *   Wait For Zoom?
 *   - Wait for zoom changes to complete before performing next command?
 *
 * ---
 *
 * ZOOM: Wait For Zoom
 * - Waits for zoom changes to complete before performing next command.
 * Requires VisuMZ_3_ActSeqCamera!
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Options Menu Settings
 * ============================================================================
 *
 * These plugin parameters add a new options command in order to let the player
 * decide if they want the battle camera ON or OFF.
 * 
 * The player has the option to turn off the battle camera effects. If they
 * choose to turn it off, then all of this plugin's effects will be disabled
 * until they turn it back on. This is to give players control over how the
 * game visually appears in case they have motion sickness.
 *
 * ---
 *
 * Options
 * 
 *   Add Option?:
 *   - Add the Battle Camera options to the Options menu?
 * 
 *   Adjust Window Height:
 *   - Automatically adjust the options window height?
 * 
 *   Options Name:
 *   - Command name of the option.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Yanfly
 * * Arisu
 * * Olivia
 * * Irina
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.13: March 14, 2024
 * * Updated Features!
 * ** Anti-tint is no longer forced. Update made by Irina.
 * 
 * Version 1.12: August 17, 2023
 * * Compatibility Update!
 * ** Added better compatibility with Action Sequence Projectiles when using MV
 *    animations for projectiles. Update made by Arisu.
 * 
 * Version 1.11: February 16, 2023
 * * Feature Update!
 * ** Added VisuMZ Core Engine version requirements for this plugin. If you are
 *    using an outdated Core Engine by at least 50 versions, this plugin will
 *    not work. Update made by Irina.
 * 
 * Version 1.10: January 20, 2023
 * * Bug Fixes!
 * ** Corrected the battlefield offset when positioned in specific zoom
 *    levels that would otherwise offset the algorithm. Fix made by Olivia.
 * ** Corrected and updated Anti-Tint UI animation offsets for MV animations.
 *    Fix made by Irina.
 * * Feature Update!
 * ** Update made to be more compatibile with MZ v1.6.1's Effekseer version.
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.09: September 22, 2022
 * * Bug Fixes!
 * ** Camera shift fixed when moving from a different scene aside from the map
 *    to battle. Fix made by Olivia.
 * 
 * Version 1.08: May 19, 2022
 * * Compatibility Update
 * ** Camera has a different Y buffer when using VisuMZ Sideview Battle UI.
 *    Update made by Olivia.
 * * Feature Update!
 * ** Smoother clamped zooming from 1.0 to 1.999. Update made by Olivia.
 * 
 * Version 1.07: April 21, 2022
 * * Feature Update!
 * ** Rebuild the animation container for Battle Core's Anti-Tint UI so that it
 *    works properly with MV animations and zoom in sideview. Update by Irina.
 * 
 * Version 1.06: April 14, 2022
 * * Compatibility Update!
 * ** Compatibility update with Anti-Tint UI feature in combination with MV-
 *    MV-related animations for non-sideview actors. Update made by Irina.
 * 
 * Version 1.05: April 7, 2022
 * * Compatibility Update!
 * ** Compatibility update with Anti-Tint UI feature in combination with zoom
 *    for MV-related animations. Update made by Irina.
 * 
 * Version 1.04: March 31, 2022
 * * Compatibility Update!
 * ** Compatibility update with Battle Core's new Anti-Tint UI feature for
 *    MV-related animations. Update made by Irina.
 * 
 * Version 1.03: January 6, 2022
 * * Compatibility Update!
 * ** The newly added MV Animation-support should now work properly with the
 *    Action Sequence Camera plugin. Update made by Irina.
 * 
 * Version 1.02: December 4, 2020
 * * Bug Fixes!
 * ** Show Pictures should now appear in the right positions. Fix by Irina.
 * 
 * Version 1.01: October 4, 2020
 * * Bug Fixes!
 * ** Damage offsets are now corrected and in line with the latest Battle Core
 *    version.
 *
 * Version 1.00: September 23, 2020
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param ActSeqCamera
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Options:struct
 * @text Options Menu
 * @type struct<Options>
 * @desc Settings for the Options Menu
 * @default {"AddOption:eval":"true","AdjustRect:eval":"true","OptionsName:str":"Battle Camera"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * Options Menu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Options:
 *
 * @param AddOption:eval
 * @text Add Option?
 * @parent Options
 * @type boolean
 * @on Add
 * @off Don't Add
 * @desc Add the Battle Camera options to the Options menu?
 * @default true
 *
 * @param AdjustRect:eval
 * @text Adjust Window Height
 * @parent Options
 * @type boolean
 * @on Adjust
 * @off Don't
 * @desc Automatically adjust the options window height?
 * @default true
 *
 * @param OptionsName:str
 * @text Options Name
 * @parent Options
 * @desc Command name of the option.
 * @default Battle Camera
 *
 */
//=============================================================================

//=============================================================================
// Setup Plugin Parameters
//=============================================================================

var label = 'ActSeqCamera';
var tier = tier || 0;
var dependencies = ['VisuMZ_0_CoreEngine', 'VisuMZ_1_BattleCore'];
var pluginData = $plugins.filter(function(p) { return p.status && p.description.includes('['+label+']') })[0];
VisuMZ[label].Settings = VisuMZ[label].Settings || {};

VisuMZ.ConvertParams = function(obj, data) {
    for (const key in data) {
        if (key.match(/(.*):(.*)/i)) {
            // Key and Type
            const objKey = String(RegExp.$1);
            const objType = String(RegExp.$2).toUpperCase().trim();

            // Parse Data
            let value; let arr; let newData;
            switch (objType) {
                case 'NUM':
                    value = data[key] !== '' ? Number(data[key]) : 0;
                    break;
                case 'ARRAYNUM':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => Number(i));
                    break;
                case 'EVAL':
                    value = data[key] !== '' ? eval(data[key]) : null;
                    break;
                case 'ARRAYEVAL':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => eval(i));
                    break;
                case 'JSON':
                    value = data[key] !== '' ? JSON.parse(data[key]) : '';
                    break;
                case 'ARRAYJSON':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => JSON.parse(i));
                    break;
                case 'FUNC':
                    value = data[key] !== '' ? new Function(JSON.parse(data[key])) : new Function('return 0');
                    break;
                case 'ARRAYFUNC':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => new Function(JSON.parse(i)));
                    break;
                case 'STR':
                    value = data[key] !== '' ? String(data[key]) : '';
                    break;
                case 'ARRAYSTR':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => String(i));
                    break;
                case 'STRUCT':
                    newData = data[key] !== '' ? JSON.parse(data[key]) : {};
                    value = VisuMZ.ConvertParams({}, newData);
                    break;
                case 'ARRAYSTRUCT':
                    arr = data[key] !== '' ? JSON.parse(data[key]) : [];
                    value = arr.map(i => VisuMZ.ConvertParams({}, JSON.parse(i)));
                    break;
                default:
                    continue;
            }

            // Set Value
            obj[objKey] = value;
        }
    }
    return obj;
};

((pluginData) => {
    const name = pluginData.name;
    // Dependency Check
    for (const dependency of dependencies) {
        if (!Imported[dependency]) {
            alert('%1 is missing a required plugin.\nPlease install %2 into the Plugin Manager.'.format(name, dependency));
            SceneManager.exit();
            break;
        }
    }
    // Description Check
    const desc = pluginData.description;
    // Version Check
    if (desc.match(/\[Version[ ](.*?)\]/i)) {
        const descVersion = Number(RegExp.$1);
        if (descVersion !== VisuMZ[label].version) {
            alert('%1\'s version does not match plugin\'s. Please update it in the Plugin Manager.'.format(name, descVersion));
            SceneManager.exit();
        }
    }
    // Tier Order Check
    if (desc.match(/\[Tier[ ](\d+)\]/i)) {
        const descTier = Number(RegExp.$1);
        if (descTier < tier) {
            alert('%1 is incorrectly placed on the plugin list.\nIt is a Tier %2 plugin placed over other Tier %3 plugins.\nPlease reorder the plugin list from smallest to largest tier numbers.'.format(name, descTier, tier));
            SceneManager.exit();
        } else {
            tier = Math.max(descTier, tier);
        }
    }
    // Convert Plugin Parameters
    VisuMZ.ConvertParams(VisuMZ[label].Settings, pluginData.parameters);

})(pluginData);

if (VisuMZ.CoreEngine.version < 1.73) {
    let text = '';
    text += 'VisuMZ_0_CoreEngine needs to be updated ';
    text += 'in order for VisuMZ_3_ActSeqCamera to work.';
    alert(text);
    SceneManager.exit();
}
if (VisuMZ.BattleCore.version < 1.81) {
    let text = '';
    text += 'VisuMZ_1_BattleCore needs to be updated ';
    text += 'in order for VisuMZ_3_ActSeqCamera to work.';
    alert(text);
    SceneManager.exit();
}

//-----------------------------------------------------------------------------
// ConfigManager
//
// The static class that manages the configuration data.

ConfigManager.battleCamera = true;

VisuMZ.ActSeqCamera.ConfigManager_makeData = ConfigManager.makeData;
ConfigManager.makeData = function() {
    const config = VisuMZ.ActSeqCamera.ConfigManager_makeData.call(this);
    config.battleCamera = this.battleCamera;
    return config;
};

VisuMZ.ActSeqCamera.ConfigManager_applyData = ConfigManager.applyData;
ConfigManager.applyData = function(config) {
    VisuMZ.ActSeqCamera.ConfigManager_applyData.call(this, config);
    if ('battleCamera' in config) {
        this.battleCamera = config['battleCamera'];
    } else {
        this.battleCamera = true;
    }
};

//-----------------------------------------------------------------------------
// TextManager
//
// The static class that handles terms and messages.

TextManager.battleCameraOption = VisuMZ.ActSeqCamera.Settings.Options.OptionsName;

//-----------------------------------------------------------------------------
// BattleManager
//
// The static class that manages battle progress.

VisuMZ.ActSeqCamera.BattleManager_setup = BattleManager.setup;
BattleManager.setup = function(troopId, canEscape, canLose) {
    VisuMZ.ActSeqCamera.BattleManager_setup.call(this, troopId, canEscape, canLose);
    this.clearCameraFocusTargets();
};

BattleManager.clearCameraFocusTargets = function() {
    this._cameraFocusTargets = [];
};

BattleManager.cameraFocusTargets = function() {
    if (this._cameraFocusTargets === undefined) this.clearCameraFocusTargets();
    return this._cameraFocusTargets;
};

BattleManager.setCameraFocusTargets = function(group) {
    this._cameraFocusTargets = group.filter((x, i, self) => self.indexOf(x) === i);
};

BattleManager.cameraFocusTargetsX = function() {
    const targets = this.cameraFocusTargets();
    if (targets.length <= 0) return Math.round(Graphics.width / 2);

    let x = targets.reduce((r, target) => r += target.battler().x, 0) / targets.length;
    x += Math.round((Graphics.width - Graphics.boxWidth) / 2);

    return x;
};

BattleManager.cameraFocusTargetsY = function() {
    const targets = this.cameraFocusTargets();
    if (targets.length <= 0) return Math.round(Graphics.height / 2);

    let y = targets.reduce((r, target) => r += target.battler().y - Math.round(target.battler().height / 2), 0) / targets.length;
    y += Math.round((Graphics.height - Graphics.boxHeight) / 2);
    
    return y;
};

//-----------------------------------------------------------------------------
// Game_Screen
//
// The game object class for screen effect data, such as changes in color tone
// and flashes.

VisuMZ.ActSeqCamera.Game_Screen_clear = Game_Screen.prototype.clear;
Game_Screen.prototype.clear = function() {
    VisuMZ.ActSeqCamera.Game_Screen_clear.call(this);
    this.clearBattleCamera();
};

Game_Screen.prototype.clearBattleCamera = function() {
    this._battleCamera = this.initialBattleCameraSettings();
};

Game_Screen.prototype.initialBattleCameraSettings = function() {
    // Declare Constants
    const width = $dataSystem.advanced.screenWidth;
    const height = $dataSystem.advanced.screenHeight;

    return {
        angle: 0,
        angleTarget: 0,
        angleDuration: 0,
        angleWholeDuration: 0,
        angleEasing: 'InOutSine',

        cameraFocusTarget: false,

        cameraX: Math.round(width / 2),
        cameraY: Math.round(height / 2),
        cameraXTarget: Math.round(width / 2),
        cameraYTarget: Math.round(height / 2),
        cameraDuration: 0,
        cameraDurationWhole: 0,
        cameraEasing: 'InOutSine',
        cameraClamp: true,

        cameraOffsetX: 0,
        cameraOffsetY: 0,
        cameraOffsetXTarget: 0,
        cameraOffsetYTarget: 0,
        cameraOffsetDuration: 0,
        cameraOffsetDurationWhole: 0,
        cameraOffsetEasing: 'InOutSine',

        skewX: 0,
        skewTargetX: 0,
        skewY: 0,
        skewTargetY: 0,
        skewDuration: 0,
        skewWholeDuration: 0,
        skewEasing: 'InOutSine',

        zoomScale: 1,
        zoomScaleTarget: 1,
        zoomDuration: 0,
        zoomWholeDuration: 0,
        zoomEasing: 'InOutSine',
    }
};

Game_Screen.prototype.battleCameraData = function() {
    if (this._battleCamera === undefined) this.clearBattleCamera();
    if (!ConfigManager.battleCamera) return this.initialBattleCameraSettings();
    return this._battleCamera;
};

VisuMZ.ActSeqCamera.Game_Screen_update = Game_Screen.prototype.update;
Game_Screen.prototype.update = function() {
    VisuMZ.ActSeqCamera.Game_Screen_update.call(this);
    this.updateBattleAngle();
    this.updateBattleCamera();
    this.updateBattleCameraOffset();
    this.updateBattleSkew();
    this.updateBattleZoom();
};

Game_Screen.prototype.setBattleAngle = function(target, duration, easingType) {
    const data = this.battleCameraData();
    data.angleTarget = -target;
    data.angleDuration = duration;
    data.angleWholeDuration = duration;
    data.angleEasing = easingType;
};

Game_Screen.prototype.updateBattleAngle = function() {
    // Return Check
    if (!SceneManager.isSceneBattle()) return;

    // Declare Constants
    const data = this.battleCameraData();
    const d = data.angleDuration;
    const wd = data.angleWholeDuration;
    const et = data.angleEasing;

    // Duration Update
    if (d > 0) {
        data.angle = this.applyEasing(data.angle, data.angleTarget, d, wd, et);
        data.angleDuration--;
    } else {
        data.angle = data.angleTarget;
    }
};

Game_Screen.prototype.setBattleCameraPoint = function(targetX, targetY, duration, easingType) {
    const data = this.battleCameraData();
    data.cameraFocusTarget = false;
    data.cameraXTarget = Math.round(targetX);
    data.cameraYTarget = Math.round(targetY);
    data.cameraDuration = duration;
    data.cameraDurationWhole = duration;
    data.cameraEasing = easingType;
};

Game_Screen.prototype.setBattleCameraTargets = function(targets, duration, easingType) {
    if (targets.length <= 0) return;
    const data = this.battleCameraData();
    data.cameraFocusTarget = true;
    BattleManager.setCameraFocusTargets(targets);
    data.cameraDuration = duration;
    data.cameraDurationWhole = duration;
    data.cameraEasing = easingType;
};

Game_Screen.prototype.updateBattleCamera = function() {
    // Return Check
    if (!SceneManager.isSceneBattle()) return;

    // Declare Constants
    const data = this.battleCameraData();
    const d = data.cameraDuration;
    const wd = data.cameraDurationWhole;
    const et = data.cameraEasing;

    // Update Target X/Y
    if (data.cameraFocusTarget) {
        data.cameraXTarget = BattleManager.cameraFocusTargetsX();
        data.cameraYTarget = BattleManager.cameraFocusTargetsY();
    }

    // Duration Update
    if (d > 0) {
        data.cameraX = this.applyEasing(data.cameraX, data.cameraXTarget, d, wd, et);
        data.cameraY = this.applyEasing(data.cameraY, data.cameraYTarget, d, wd, et);
        data.cameraDuration--;
    } else {
        data.cameraX = data.cameraXTarget;
        data.cameraY = data.cameraYTarget;
    }
};

Game_Screen.prototype.setBattleCameraOffset = function(targetX, targetY, duration, easingType) {
    const data = this.battleCameraData();
    data.cameraOffsetXTarget = Math.round(targetX);
    data.cameraOffsetYTarget = Math.round(targetY);
    data.cameraOffsetDuration = duration;
    data.cameraOffsetDurationWhole = duration;
    data.cameraOffsetEasing = easingType;
};

Game_Screen.prototype.updateBattleCameraOffset = function() {
    // Return Check
    if (!SceneManager.isSceneBattle()) return;

    // Declare Constants
    const data = this.battleCameraData();
    const d = data.cameraOffsetDuration;
    const wd = data.cameraOffsetDurationWhole;
    const et = data.cameraOffsetEasing;

    // Duration Update
    if (d > 0) {
        data.cameraOffsetX = this.applyEasing(data.cameraOffsetX, data.cameraOffsetXTarget, d, wd, et);
        data.cameraOffsetY = this.applyEasing(data.cameraOffsetY, data.cameraOffsetYTarget, d, wd, et);
        data.cameraOffsetDuration--;
    } else {
        data.cameraOffsetX = data.cameraOffsetXTarget;
        data.cameraOffsetY = data.cameraOffsetYTarget;
    }
};

Game_Screen.prototype.setBattleSkew = function(targetX, targetY, duration, easingType) {
    const data = this.battleCameraData();
    data.skewTargetX = targetX;
    data.skewTargetY = targetY;
    data.skewDuration = duration;
    data.skewWholeDuration = duration;
    data.skewEasing = easingType;
};

Game_Screen.prototype.updateBattleSkew = function() {
    // Return Check
    if (!SceneManager.isSceneBattle()) return;

    // Declare Constants
    const data = this.battleCameraData();
    const d = data.skewDuration;
    const wd = data.skewWholeDuration;
    const et = data.skewEasing;

    // Duration Update
    if (d > 0) {
        data.skewX = this.applyEasing(data.skewX, data.skewTargetX, d, wd, et);
        data.skewY = this.applyEasing(data.skewY, data.skewTargetY, d, wd, et);
        data.skewDuration--;
    } else {
        data.skewX = data.skewTargetX;
        data.skewY = data.skewTargetY;
    }
};


Game_Screen.prototype.setBattleZoom = function(target, duration, easingType) {
    const data = this.battleCameraData();
    data.zoomScaleTarget = target;
    data.zoomDuration = duration;
    data.zoomWholeDuration = duration;
    data.zoomEasing = easingType;
};

Game_Screen.prototype.updateBattleZoom = function() {
    // Return Check
    if (!SceneManager.isSceneBattle()) return;

    // Declare Constants
    const data = this.battleCameraData();
    const d = data.zoomDuration;
    const wd = data.zoomWholeDuration;
    const et = data.zoomEasing;

    // Duration Update
    if (d > 0) {
        data.zoomScale = this.applyEasing(data.zoomScale, data.zoomScaleTarget, d, wd, et);
        data.zoomDuration--;
    } else {
        data.zoomScale = data.zoomScaleTarget;
    }
};

Game_Screen.prototype.applyEasing = function(current, target, d, wd, et) {
    const lt = VisuMZ.ApplyEasing((wd - d) / wd, et || 'Linear');
    const t = VisuMZ.ApplyEasing((wd - d + 1) / wd, et || 'Linear');
    const start = (current - target * lt) / (1 - lt);
    return start + (target - start) * t;
};

//-----------------------------------------------------------------------------
// Scene_Options
//
// The scene class of the options screen.

VisuMZ.ActSeqCamera.Scene_Options_maxCommands = Scene_Options.prototype.maxCommands;
Scene_Options.prototype.maxCommands = function() {
    let value = VisuMZ.ActSeqCamera.Scene_Options_maxCommands.call(this);

    const settings = VisuMZ.ActSeqCamera.Settings;
    if (settings.Options.AddOption && settings.Options.AdjustRect) value++;

    return value;
};

//-----------------------------------------------------------------------------
// Sprite_Battler
//
// The superclass of Sprite_Actor and Sprite_Enemy.

VisuMZ.ActSeqCamera.Sprite_Battler_damageOffsetX = Sprite_Battler.prototype.damageOffsetX;
Sprite_Battler.prototype.damageOffsetX = function() {
    let value = VisuMZ.ActSeqCamera.Sprite_Battler_damageOffsetX.call(this);

    value += Math.round((Graphics.width - Graphics.boxWidth) / 2);

    return value;
};

VisuMZ.ActSeqCamera.Sprite_Battler_damageOffsetY = Sprite_Battler.prototype.damageOffsetY;
Sprite_Battler.prototype.damageOffsetY = function() {
    let value = VisuMZ.ActSeqCamera.Sprite_Battler_damageOffsetY.call(this);

    value += Math.round((Graphics.height - Graphics.boxHeight) / 2);

    return value;
};

//-----------------------------------------------------------------------------
// Sprite_Animation
//
// The sprite for displaying an animation.

// v1.07 added by Irina
VisuMZ.ActSeqCamera.Sprite_Animation_updateEffectGeometry = Sprite_Animation.prototype.updateEffectGeometry;
Sprite_Animation.prototype.updateEffectGeometry = function() {
    const originalScale = this._animation.scale;
    if (SceneManager._scene._spriteset) {
        const spriteset = SceneManager._scene._spriteset;
        this._animation.scale *= spriteset.scale.x;
    }
    VisuMZ.ActSeqCamera.Sprite_Animation_updateEffectGeometry.call(this);
    this._animation.scale = originalScale;
};

//-----------------------------------------------------------------------------
// Sprite_AnimationMV
//
// The sprite for displaying an old format animation.

// v1.03 added by Irina
// v1.07 disabled by Irina
/*
VisuMZ.ActSeqCamera.Sprite_AnimationMV_updatePosition = Sprite_AnimationMV.prototype.updatePosition;
Sprite_AnimationMV.prototype.updatePosition = function() {
    VisuMZ.ActSeqCamera.Sprite_AnimationMV_updatePosition.call(this);

    // v1.06 updated by Irina
    if (!this.isCenteredAnimation() && this.hasTargets() && this.forSideviewTargets()) {
        if (Spriteset_Battle.ANTI_TINT_UI) {
            const spriteset = SceneManager._scene._spriteset;
            
            // this.x -= spriteset.x;
            // this.y -= spriteset.y;

            // v1.05 updated by Irina
            this.x -= spriteset.x * spriteset.scale.x;
            this.y -= spriteset.y * spriteset.scale.y;
        }
    // v1.04 added by Irina
    } else if (this.isCenteredAnimation()) {
        if (Spriteset_Battle.ANTI_TINT_UI) {
            const spriteset = SceneManager._scene._spriteset;
            this.x -= spriteset.x;
            this.y -= spriteset.y;
        }
    }
};
*/

// v1.13 disabled by Irina
// Spriteset_Battle.ANTI_TINT_UI = true;

// v1.10 added by Irina
VisuMZ.ActSeqCamera.Sprite_AnimationMV_updatePosition = Sprite_AnimationMV.prototype.updatePosition;
Sprite_AnimationMV.prototype.updatePosition = function() {
    VisuMZ.ActSeqCamera.Sprite_AnimationMV_updatePosition.call(this);
    if (!SceneManager.isSceneBattle()) return;

    // v1.12 added by Arisu
    if (this._isProjectile) return;
    
    if (Spriteset_Battle.ANTI_TINT_UI) {
        this.x -= $spriteset.width / 2;
        this.y -= $spriteset.height / 2;
    } else {
        this.x += $spriteset.width / 2;
        this.y += $spriteset.height / 2;
    }
};

// v1.06 added by Irina
Sprite_AnimationMV.prototype.isCenteredAnimation = function() {
    return this._animation.position === 3;
};

// v1.06 added by Irina
Sprite_AnimationMV.prototype.hasTargets = function() {
    return this._targets.length > 0;
};

// v1.06 added by Irina
Sprite_AnimationMV.prototype.forSideviewTargets = function() {
    if (!$gameSystem.isSideView()) {
        const sprite = this._targets[0];
        if (sprite.constructor === Sprite_Actor) return false;
    }
    return true;
};

//-----------------------------------------------------------------------------
// Spriteset_Battle
//
// The set of sprites on the battle screen.

// v1.10 forced by Irina
//Spriteset_Battle.ANTI_TINT_UI = true;

VisuMZ.ActSeqCamera.Spriteset_Battle_initialize = Spriteset_Battle.prototype.initialize;
Spriteset_Battle.prototype.initialize = function() {
    VisuMZ.ActSeqCamera.Spriteset_Battle_initialize.call(this);
    this._cacheScaleX = undefined;
    this._cacheScaleY = undefined;
};

VisuMZ.ActSeqCamera.Spriteset_Battle_createLowerLayer = Spriteset_Battle.prototype.createLowerLayer;
Spriteset_Battle.prototype.createLowerLayer = function() {
    VisuMZ.ActSeqCamera.Spriteset_Battle_createLowerLayer.call(this);
    this.applyAnchorsForTiltEffect();
};

Spriteset_Battle.prototype.applyAnchorsForTiltEffect = function() {
    if (Spriteset_Battle._oldCamera) return;
    // Declare Constants
    const halfX = -Math.ceil(Graphics.width / 2);
    const halfY = -Math.ceil(Graphics.height / 2)

    // Set Anchors
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;

    // Apply Half Coordinates
    // Compatibility Target
    const group = [this._baseSprite, this._damageContainer];
    group.push(this._animationContainer); // v1.07 added by Irina
    for (const container of group) {
        if (!container) continue;
        container.x = halfX;
        container.y = halfY;
    }
};

Spriteset_Battle.prototype.updatePosition = function() {
    this.updatePositionAngle();
    this.updatePositionSkew();
    this.updatePositionZoom();
    this.updatePositionCamera();
    this.updatePositionShake();
};

Spriteset_Battle.prototype.updatePositionAngle = function() {
    const angle = this.getBattleAngle();
    this.angle = angle;
};

Spriteset_Battle.prototype.getBattleAngle = function() {
    if (!ConfigManager.battleCamera) return 0;
    if (BattleManager.isInputting()) return 0;
    return $gameScreen.battleCameraData().angle;
};

Spriteset_Battle.prototype.updatePositionSkew = function() {
    if (BattleManager.isInputting() || !ConfigManager.battleCamera) {
        this.skew.x = 0;
        this.skew.y = 0;
    } else {
        const data = $gameScreen.battleCameraData();
        this.skew.x = data.skewX;
        this.skew.y = data.skewY;
    }
};

Spriteset_Battle.prototype.updatePositionZoom = function() {
    const zoom = this.getBattleZoom();
    this.scale.x = this.scale.y = zoom;
};

Spriteset_Battle.prototype.getBattleZoom = function() {
    if (!ConfigManager.battleCamera) return 1;
    if (BattleManager.isInputting()) return 1;
    return $gameScreen.battleCameraData().zoomScale;
};

Spriteset_Battle.prototype.updatePositionCamera = function() {
    if (BattleManager.isInputting() || !ConfigManager.battleCamera) {
        this.updatePositionCameraNeutral();
    } else {
        if (Spriteset_Battle._oldCamera) {
            this.updatePositionCameraRoamOld();
        } else {
            this.updatePositionCameraRoamNew();
        }
    }
};

// v1.10 added by Olivia
Spriteset_Battle.prototype.battleFieldCameraY = function() {
    if (this._battleFieldCameraY !== undefined) return this._battleFieldCameraY;

    this._battleFieldCameraY = (Graphics.height - Graphics.boxHeight) / 2 - this.battleFieldOffsetY();
    return this._battleFieldCameraY;
};

Spriteset_Battle.prototype.updatePositionCameraNeutral = function() {
    if (Spriteset_Battle._oldCamera) return;

    // v1.09 added by Olivia
    // v1.10 updated by Olivia
    this._battleField.y = this.battleFieldCameraY();

    this.x = Math.round(Graphics.width / 2);
    this.y = Math.round(Graphics.height / 2);
};

// Defunct Version
// Imported from YEP
Spriteset_Battle.prototype.updatePositionCameraRoamOld = function() {
    // Declare Constants
    const data = $gameScreen.battleCameraData();
    const clamp = this.getBattleCameraClamp();
    const zoom = this.getBattleZoom();
    let screenX = -(data.cameraX + data.cameraOffsetX) * zoom + (Graphics.width / 2);
    let screenY = -(data.cameraY + data.cameraOffsetY) * zoom + (Graphics.height / 2);

    // Set Camera Positions
    if (clamp && zoom >= 1) {
        const clampX = -Graphics.width * zoom + Graphics.width/2;
        const clampY = -Graphics.height * zoom + Graphics.height/2;
        this.x = Math.round(screenX.clamp(clampX, 0));
        this.y = Math.round(screenY.clamp(clampY, 0));
        //console.log(this.x, this.y)
    } else if (clamp && zoom < 1) {
        this.x = Math.round((Graphics.width - (Graphics.width * zoom)) / 2);
        this.y = Math.round((Graphics.height - (Graphics.height * zoom)) / 2);
    } else {
        this.x = Math.round(screenX);
        this.y = Math.round(screenY);
    }
};

// For Testing Purposes
Spriteset_Battle._oldCamera = false;

// v1.08 added by Olivia
Spriteset_Battle.prototype.battleFieldOffsetY = function() {
    if (Imported.VisuMZ_3_SideviewBattleUI && BattleManager.isUsingSideviewUiLayout()) {
        return 0;
    } else {
        return 24;
    }
};

// New Version
Spriteset_Battle.prototype.updatePositionCameraRoamNew = function() {
    // Declare Variables
    let clamp = this.getBattleCameraClamp();
    let zoom = this.getBattleZoom();
    const halfWidth = Graphics.width/2; // v1.10 added by Olivia
    const halfHeight = Graphics.height/2; // v1.10 added by Olivia

    // v1.10 added by Olivia
    if (clamp && zoom <= 1) {
        this.x = Math.round(halfWidth);
        this.y = Math.round(halfHeight);
        return;
    }

    // Declare More Variables
    const data = $gameScreen.battleCameraData();
    
    let screenX = -(data.cameraX + data.cameraOffsetX) + Graphics.width;
    screenX -= (1 - zoom) * (halfWidth - data.cameraX - data.cameraOffsetX);
    let screenY = -(data.cameraY + data.cameraOffsetY) + Graphics.height;

    // v1.08 added by Olivia
    // v1.10 updated by Olivia
    this._battleField.y = this.battleFieldCameraY();
    const bufferY = (this._battleField.y * 2) - Math.round((Graphics.height - Graphics.boxHeight) / 2);
    screenY += (bufferY) * (1 - zoom);

    // v1.08 updated by Olivia
    // Was previously disabled
    screenY -= (1 - zoom) * (halfHeight - data.cameraY - data.cameraOffsetY);
    const sideviewBattleUI = (Imported.VisuMZ_3_SideviewBattleUI && BattleManager.isUsingSideviewUiLayout());
    if (!sideviewBattleUI) {
        const windowHeight = SceneManager._scene.windowAreaHeight();
        screenY -= (windowHeight / 2) * Math.min(1, Math.sqrt(zoom - 1));
    }

    // Set Camera Positions
    if (clamp) {
        // Larger Zoom
        if (zoom > 1) {
            const minX = Graphics.width - (halfWidth * zoom);
            const maxX = halfWidth * zoom;
            screenX = screenX.clamp(minX, maxX);
            const minY = Graphics.height - (halfHeight * zoom);
            const maxY = halfHeight * zoom;
            screenY = screenY.clamp(minY, maxY);
        // Smaller Zoom
        } else if (zoom <= 1) {
            screenX = halfWidth;
            screenY = halfHeight;
        }
    }

    this.x = Math.round(screenX);
    this.y = Math.round(screenY);
};

Spriteset_Battle.prototype.getBattleCameraClamp = function() {
    if (!ConfigManager.battleCamera) return true;
    if (BattleManager.isInputting()) return true;
    return $gameScreen.battleCameraData().cameraClamp;
};

Spriteset_Battle.prototype.updatePositionShake = function() {
    this.x += Math.round($gameScreen.shake());

    // Core Engine Aries Screen Shake Compatibility
    if (Imported.VisuMZ_0_CoreEngine && this.updatePositionCoreEngine) {
        this.updatePositionCoreEngine();
    }
};

//-----------------------------------------------------------------------------
// Window_Options
//
// The window for changing various settings on the options screen.

VisuMZ.ActSeqCamera.Window_Options_addGeneralOptions = Window_Options.prototype.addGeneralOptions;
Window_Options.prototype.addGeneralOptions = function() {
    VisuMZ.ActSeqCamera.Window_Options_addGeneralOptions.call(this);
    this.addBattleCameraCommands();
};

Window_Options.prototype.addBattleCameraCommands = function() {
    if (VisuMZ.ActSeqCamera.Settings.Options.AddOption) {
        this.addBattleCameraCommand();
    }
};

Window_Options.prototype.addBattleCameraCommand = function() {
    const text = TextManager.battleCameraOption;
    const symbol = 'battleCamera';
    this.addCommand(text, symbol);
};

//=============================================================================
// End of File
//=============================================================================