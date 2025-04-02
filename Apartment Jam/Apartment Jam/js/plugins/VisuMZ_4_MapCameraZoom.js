//=============================================================================
// VisuStella MZ - Map Camera Zoom
// VisuMZ_4_MapCameraZoom.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_MapCameraZoom = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MapCameraZoom = VisuMZ.MapCameraZoom || {};
VisuMZ.MapCameraZoom.version = 1.04;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.04] [MapCameraZoom]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Map_Camera_Zoom_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin enables the ability to zoom the in-game camera inward and make
 * the visible game area larger and more focused. The camera can also focus on
 * events or specific tiles other than just the player, making it helpful for
 * cutscenes. Easing accessibility also makes the zoom and camera shifts more
 * soft and less rough feeling.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Zoom ability allows the camera to zoom inward and enlarge the focal point.
 * * Auto-zoom notetag allows for the camera to automatically shift when
 *   entering specific maps.
 * * Camera focus function allows the game camera to instantly move over to the
 *   target event or target tile.
 * * Easing accessibility allow for smoothing zooming and camera focus changes
 *   alongside dedicated wait time control.
 * * Wait for Zoom and Wait for Camera Focus plugin commands are available for
 *   more on the go flexibility in eventing.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Tier 4 ------
 *
 * This plugin is a Tier 4 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Caution
 * ============================================================================
 * 
 * When using this plugin, there are things to be cautious about.
 * 
 * ---
 * 
 * Screen Tearing
 * 
 * When using non-whole odd numbers like 1.3, 1.5, and 1.7, the likelihood of
 * there being a "screen tearing" effect for the tilemap or for sprites is
 * greatly increased. This can be avoided by having sprites with a pixel-worth
 * of buffering space or by just simply avoiding to use non-whole odd numbers
 * altogether.
 * 
 * ---
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
 * Cannot Go Under 100%
 * 
 * You can zoom in (aka go above 100% zoom), but you cannot zoom out (aka go
 * under 100% zoom). The reasoning behind this is because of the limitation
 * between PixiJS and WebGL. Going under 100% zoom will break the tilemap and
 * cause large chunks of it to go missing.
 * 
 * This is true even without this plugin installed as you can try to use the
 * innate RPG Maker MZ zoom functions and try to set the zoom scale under 100%.
 * The tileset will immediately start to fall apart.
 *
 * ---
 * 
 * Sprites No Longer Smoothed
 * 
 * When using this plugin, certain resources like on-map character sprites and
 * some tile sprites will have bitmap smoothing removed. The reason for this is
 * due to PixiJS's texture bleeding problem when the sprites are zoomed in. If
 * left alone, this causes an ugly filmy border around the edges of the
 * sprite's dimensions that are otherwise an eye-sore to look at.
 * 
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_0_CoreEngine
 * 
 * Having the VisuMZ Core Engine installed will enable you to use easing when
 * it comes to zooming and camera panning.
 * 
 * ---
 * 
 * Picture Zooming
 * 
 * If you are NOT using the VisuMZ Core Engine, pictures will be bound to the
 * zoom scale. This is NOT a bug. If you are using pictures in a completely
 * vanilla RPG Maker MZ project without any plugins installed and enter a
 * battle, the battle zoom will also make the pictures zoom in as well.
 * 
 * ---
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === Map-Related Notetags ===
 * 
 * ---
 *
 * <Zoom: x%>
 * <AutoZoom: x%>
 * <Auto Zoom: x%>
 *
 * - Used for: Map Notetags
 * - Causes the game camera to automatically zoom to x% when entering a map
 *   with this notetag.
 *   - This does NOT reverse itself when exiting the map. The zoom settings
 *     will carry over to other maps unless those maps have their own auto-zoom
 *     notetag present.
 * - The notetag variants do the same thing. Which you choose to use is
 *   entirely up to personal preference.
 * - Replace 'x' with a percentage value above 100% to represent the zoom scale
 *   you wish to change to when entering this map.
 *   - 'x' cannot be under 100%! Read the "Cannot Go Under 100%" section for
 *     more information as to why.
 *
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Camera Plugin Commands ===
 * 
 * ---
 *
 * Camera: Focus Player
 * - Puts the camera focus on the player character.
 *
 *   Duration:
 *   - How many frames should it take to finish focus?
 *   - 60 frames = 1 second.
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Camera: Focus Target Event
 * - Puts the camera focus on target event.
 *
 *   Event ID:
 *   - Insert the ID of the event to focus on.
 *   - Use 0 for this event.
 *   - You may use JavaScript code.
 *
 *   Duration:
 *   - How many frames should it take to finish focus?
 *   - 60 frames = 1 second.
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Camera: Focus Target Tile
 * - Puts the camera focus on target map tile.
 *
 *   Map Tile X:
 *   - What is the X coordinate of the target map tile?
 *   - You may use JavaScript code.
 *
 *   Map Tile Y:
 *   - What is the Y coordinate of the target map tile?
 *   - You may use JavaScript code.
 *
 *   Duration:
 *   - How many frames should it take to finish focus?
 *   - 60 frames = 1 second.
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Camera: Wait for Focus
 * - Waits for camera focus to finish changing before continuing.
 *
 * ---
 * 
 * === Zoom Plugin Commands ===
 * 
 * ---
 *
 * Zoom: Change Zoom
 * - Change the current zoom amount.
 *
 *   Target Zoom Scale:
 *   - What is the target zoom scale?
 *   - 1.0 = 100%; 1.5 = 150%; 2.0 = 200%;
 *   - Cannot go under 1.0!
 *
 *   Duration:
 *   - How many frames should it take to finish zooming?
 *   - 60 frames = 1 second.
 *
 *   Easing Type:
 *   - Select which easing type you wish to apply.
 *   - Requires VisuMZ_0_CoreEngine!
 *
 * ---
 *
 * Zoom: Wait for Zoom
 * - Waits for zoom to finish changing before continuing.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * These are the general settings used for the Map Camera Zoom plugin.
 *
 * ---
 *
 * Settings
 * 
 *   Default Zoom:
 *   - What is the default zoom value?
 *   - 1.0 = 100%; 1.5 = 150%; 2.0 = 200%;
 *   - Cannot go under 1.0!
 * 
 *   Adapt Battle Encounter Ani:
 *   - Adapt the battle encounter zoom effect?
 *   - Occurs when entering battle from the map.
 * 
 *   Force Pixelated Map:
 *   - Force the map's tilesets to be rendered in pixelated form regardless of
 *     what other plugins may do.
 *   - This is primarily for pixel art games that would look better with more
 *     pixelated tiles when zoomed in.
 *
 * ---
 * 
 * Compatibility
 * 
 *   Map Lock Adjust:
 *   - Adjusts the Map Lock effect to the map's display position when exiting
 *     menus.
 *   - For VisuMZ_4_VisualParallaxes.
 *   - Best left false unless you know what you're doing.
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
 * * Arisu
 * * Irina
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.04: April 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Arisu:
 * *** Plugin Parameters > Compatibility > Map Lock Adjust
 * **** Adjusts the Map Lock effect to the map's display position when exiting
 *      menus.
 * **** For VisuMZ_4_VisualParallaxes.
 * **** Best left false unless you know what you're doing.
 * 
 * Version 1.03: March 14, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * ** Added a new section called "Caution":
 * *** When using non-whole odd numbers like 1.3, 1.5, and 1.7, the likelihood
 *     of there being a "screen tearing" effect for the tilemap or for sprites
 *     is greatly increased. This can be avoided by having sprites with a
 *     pixel-worth of buffering space or by just simply avoiding to use
 *     non-whole odd numbers altogether.
 * * New Features!
 * ** New Plugin Parameter added by Irina:
 * *** Plugin Parameters > Force Pixelated Map
 * **** Force the map's tilesets to be rendered in pixelated form regardless of
 *      what other plugins may do.
 * **** This is primarily for pixel art games that would look better with more
 *      pixelated tiles when zoomed in.
 * 
 * Version 1.02: July 13, 2023
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.01: March 16, 2023
 * * Compatibility Update
 * ** Better camera zoom with VisuStella MZ Movement Effect's Smooth Scrolling
 *    when this plugin's 'Adapt Battle Encounter Ani' setting is turned off.
 * 
 * Version 1.00 Official Release Date: November 2, 2022
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Begin
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CameraFocusPlayer
 * @text Camera: Focus Player
 * @desc Puts the camera focus on the player character.
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should it take to finish focus?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg EasingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * Requires VisuMZ_0_CoreEngine!
 * @default InOutSine
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CameraFocusTargetEvent
 * @text Camera: Focus Target Event
 * @desc Puts the camera focus on target event.
 *
 * @arg EventID:eval
 * @text Event ID
 * @desc Insert the ID of the event to focus on.
 * Use 0 for this event. You may use JavaScript code.
 * @default 0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should it take to finish focus?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg EasingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * Requires VisuMZ_0_CoreEngine!
 * @default InOutSine
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CameraFocusTargetTile
 * @text Camera: Focus Target Tile
 * @desc Puts the camera focus on target map tile.
 *
 * @arg MapX:eval
 * @text Map Tile X
 * @desc What is the X coordinate of the target map tile?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg MapY:eval
 * @text Map Tile Y
 * @desc What is the Y coordinate of the target map tile?
 * You may use JavaScript code.
 * @default 0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should it take to finish focus?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg EasingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * Requires VisuMZ_0_CoreEngine!
 * @default InOutSine
 *
 * @ --------------------------------------------------------------------------
 *
 * @command CameraFocusWait
 * @text Camera: Wait for Focus
 * @desc Waits for camera focus to finish changing before continuing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_Zoom
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ZoomChange
 * @text Zoom: Change Zoom
 * @desc Change the current zoom amount.
 *
 * @arg TargetScale:num
 * @text Target Zoom Scale
 * @desc What is the target zoom scale?
 * 1.0 = 100%; 1.5 = 150%; 2.0 = 200%; Cannot go under 1.0!
 * @default 1.0
 *
 * @arg Duration:num
 * @text Duration
 * @type number
 * @min 1
 * @desc How many frames should it take to finish zooming?
 * 60 frames = 1 second.
 * @default 60
 *
 * @arg EasingType:str
 * @text Easing Type
 * @type combo
 * @option Linear
 * @option InSine
 * @option OutSine
 * @option InOutSine
 * @option InQuad
 * @option OutQuad
 * @option InOutQuad
 * @option InCubic
 * @option OutCubic
 * @option InOutCubic
 * @option InQuart
 * @option OutQuart
 * @option InOutQuart
 * @option InQuint
 * @option OutQuint
 * @option InOutQuint
 * @option InExpo
 * @option OutExpo
 * @option InOutExpo
 * @option InCirc
 * @option OutCirc
 * @option InOutCirc
 * @option InBack
 * @option OutBack
 * @option InOutBack
 * @option InElastic
 * @option OutElastic
 * @option InOutElastic
 * @option InBounce
 * @option OutBounce
 * @option InOutBounce
 * @desc Select which easing type you wish to apply.
 * Requires VisuMZ_0_CoreEngine!
 * @default InOutSine
 *
 * @ --------------------------------------------------------------------------
 *
 * @command ZoomWait
 * @text Zoom: Wait for Zoom
 * @desc Waits for zoom to finish changing before continuing.
 *
 * @ --------------------------------------------------------------------------
 *
 * @command Separator_End
 * @text -
 * @desc -
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param MapCameraZoom
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param DefaultZoom:num
 * @text Default Zoom
 * @desc What is the default zoom value?
 * 1.0 = 100%; 1.5 = 150%; 2.0 = 200%; Cannot go under 1.0!
 * @default 1.0
 *
 * @param AdaptBattleEncZoom:eval
 * @text Adapt Battle Encounter Ani
 * @parent Animation
 * @type boolean
 * @on Adapt
 * @off Unchanged
 * @desc Adapt the battle encounter zoom effect?
 * Occurs when entering battle from the map.
 * @default true
 *
 * @param ForcePixelatedMap:eval
 * @text Force Pixelated Map
 * @parent Animation
 * @type boolean
 * @on Force
 * @off Don't Force
 * @desc Force the map's tilesets to be rendered in pixelated form
 * regardless of what other plugins may do.
 * @default false
 * 
 * @param Compatibility
 * @text Compatability Parameters
 *
 * @param VisualParallaxAdjust:eval
 * @text Map Lock Adjust
 * @parent Compatibility
 * @type boolean
 * @on Adjust
 * @off Don't Adjust
 * @desc Adjusts the Map Lock effect to the map's display position
 * when exiting menus. For VisuMZ_4_VisualParallaxes.
 * @default false
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
//=============================================================================

const _0x5ed848=_0x325a;(function(_0x5b8fb9,_0x2ee4b0){const _0x15c6f0=_0x325a,_0x58f250=_0x5b8fb9();while(!![]){try{const _0x25d618=-parseInt(_0x15c6f0(0x1a0))/0x1*(-parseInt(_0x15c6f0(0x197))/0x2)+parseInt(_0x15c6f0(0x1f6))/0x3*(-parseInt(_0x15c6f0(0x150))/0x4)+parseInt(_0x15c6f0(0x1e9))/0x5+-parseInt(_0x15c6f0(0x1a3))/0x6*(parseInt(_0x15c6f0(0x210))/0x7)+-parseInt(_0x15c6f0(0x181))/0x8+parseInt(_0x15c6f0(0x144))/0x9*(-parseInt(_0x15c6f0(0x18a))/0xa)+-parseInt(_0x15c6f0(0x1e8))/0xb*(-parseInt(_0x15c6f0(0x19d))/0xc);if(_0x25d618===_0x2ee4b0)break;else _0x58f250['push'](_0x58f250['shift']());}catch(_0x5157d5){_0x58f250['push'](_0x58f250['shift']());}}}(_0x2f11,0x66f4a));var label=_0x5ed848(0x1be),tier=tier||0x0,dependencies=[],pluginData=$plugins['filter'](function(_0x468a02){const _0x5120d7=_0x5ed848;return _0x468a02['status']&&_0x468a02[_0x5120d7(0x18c)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x5ed848(0x1f7)]=VisuMZ[label]['Settings']||{},VisuMZ['ConvertParams']=function(_0xa33b8d,_0x18b379){const _0xf2f617=_0x5ed848;for(const _0x1c6921 in _0x18b379){if(_0x1c6921['match'](/(.*):(.*)/i)){if(_0xf2f617(0x195)==='CBXnZ'){const _0x160025=String(RegExp['$1']),_0x5d9bce=String(RegExp['$2'])[_0xf2f617(0x190)]()[_0xf2f617(0x17a)]();let _0x5dc6cd,_0x3e9b26,_0x22d374;switch(_0x5d9bce){case _0xf2f617(0x207):_0x5dc6cd=_0x18b379[_0x1c6921]!==''?Number(_0x18b379[_0x1c6921]):0x0;break;case _0xf2f617(0x187):_0x3e9b26=_0x18b379[_0x1c6921]!==''?JSON[_0xf2f617(0x1fa)](_0x18b379[_0x1c6921]):[],_0x5dc6cd=_0x3e9b26[_0xf2f617(0x149)](_0x16d04a=>Number(_0x16d04a));break;case _0xf2f617(0x1ae):_0x5dc6cd=_0x18b379[_0x1c6921]!==''?eval(_0x18b379[_0x1c6921]):null;break;case _0xf2f617(0x18d):_0x3e9b26=_0x18b379[_0x1c6921]!==''?JSON[_0xf2f617(0x1fa)](_0x18b379[_0x1c6921]):[],_0x5dc6cd=_0x3e9b26[_0xf2f617(0x149)](_0x62b6c9=>eval(_0x62b6c9));break;case _0xf2f617(0x1f9):_0x5dc6cd=_0x18b379[_0x1c6921]!==''?JSON['parse'](_0x18b379[_0x1c6921]):'';break;case _0xf2f617(0x14c):_0x3e9b26=_0x18b379[_0x1c6921]!==''?JSON[_0xf2f617(0x1fa)](_0x18b379[_0x1c6921]):[],_0x5dc6cd=_0x3e9b26[_0xf2f617(0x149)](_0x5074e3=>JSON[_0xf2f617(0x1fa)](_0x5074e3));break;case _0xf2f617(0x1e4):_0x5dc6cd=_0x18b379[_0x1c6921]!==''?new Function(JSON[_0xf2f617(0x1fa)](_0x18b379[_0x1c6921])):new Function(_0xf2f617(0x16b));break;case _0xf2f617(0x199):_0x3e9b26=_0x18b379[_0x1c6921]!==''?JSON['parse'](_0x18b379[_0x1c6921]):[],_0x5dc6cd=_0x3e9b26[_0xf2f617(0x149)](_0x16ed73=>new Function(JSON[_0xf2f617(0x1fa)](_0x16ed73)));break;case _0xf2f617(0x1a9):_0x5dc6cd=_0x18b379[_0x1c6921]!==''?String(_0x18b379[_0x1c6921]):'';break;case _0xf2f617(0x1b9):_0x3e9b26=_0x18b379[_0x1c6921]!==''?JSON[_0xf2f617(0x1fa)](_0x18b379[_0x1c6921]):[],_0x5dc6cd=_0x3e9b26[_0xf2f617(0x149)](_0xa02b6c=>String(_0xa02b6c));break;case'STRUCT':_0x22d374=_0x18b379[_0x1c6921]!==''?JSON[_0xf2f617(0x1fa)](_0x18b379[_0x1c6921]):{},_0x5dc6cd=VisuMZ[_0xf2f617(0x1bc)]({},_0x22d374);break;case _0xf2f617(0x1d8):_0x3e9b26=_0x18b379[_0x1c6921]!==''?JSON[_0xf2f617(0x1fa)](_0x18b379[_0x1c6921]):[],_0x5dc6cd=_0x3e9b26[_0xf2f617(0x149)](_0x4339e2=>VisuMZ[_0xf2f617(0x1bc)]({},JSON[_0xf2f617(0x1fa)](_0x4339e2)));break;default:continue;}_0xa33b8d[_0x160025]=_0x5dc6cd;}else{let _0x57d898=_0x4f106d(_0x4a1cec['$1'])*0.01;_0x57d898<0x1&&_0x2fa26a[_0xf2f617(0x1ba)]()&&_0x16df91(_0xf2f617(0x1a1)),_0x57d898=_0x2a23ab[_0xf2f617(0x200)](_0x32ff72[_0xf2f617(0x142)],_0x57d898),_0x48673e[_0xf2f617(0x161)]()[_0xf2f617(0x148)]=_0x57d898,_0x54994c[_0xf2f617(0x161)]()[_0xf2f617(0x17c)]=_0x57d898,_0x2e1908[_0xf2f617(0x161)]()[_0xf2f617(0x198)]=0x0;}}}return _0xa33b8d;},(_0x2efc29=>{const _0x4c4bc0=_0x5ed848,_0x1ff01b=_0x2efc29[_0x4c4bc0(0x1ec)];for(const _0x11dc60 of dependencies){if(!Imported[_0x11dc60]){alert(_0x4c4bc0(0x21d)['format'](_0x1ff01b,_0x11dc60)),SceneManager[_0x4c4bc0(0x1d5)]();break;}}const _0x3deb3d=_0x2efc29[_0x4c4bc0(0x18c)];if(_0x3deb3d[_0x4c4bc0(0x143)](/\[Version[ ](.*?)\]/i)){const _0x5d4c7c=Number(RegExp['$1']);if(_0x5d4c7c!==VisuMZ[label][_0x4c4bc0(0x17b)]){if(_0x4c4bc0(0x1b8)===_0x4c4bc0(0x222)){const _0x322278=this[_0x4c4bc0(0x1ab)]()*_0x51a872[_0x4c4bc0(0x1d7)](),_0x4e45fd=this[_0x4c4bc0(0x221)]*_0x322278,_0x534428=_0x5ab16e[_0x4c4bc0(0x157)]((_0x4e45fd+_0x44e54d)/_0x322278);return this[_0x4c4bc0(0x1da)](_0x534428);}else alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'[_0x4c4bc0(0x1df)](_0x1ff01b,_0x5d4c7c)),SceneManager[_0x4c4bc0(0x1d5)]();}}if(_0x3deb3d[_0x4c4bc0(0x143)](/\[Tier[ ](\d+)\]/i)){const _0x128018=Number(RegExp['$1']);_0x128018<tier?_0x4c4bc0(0x154)!==_0x4c4bc0(0x176)?(alert(_0x4c4bc0(0x14d)['format'](_0x1ff01b,_0x128018,tier)),SceneManager['exit']()):(_0x180edc[_0x4c4bc0(0x1be)][_0x4c4bc0(0x1ce)][_0x4c4bc0(0x1b1)](this,_0x336664),this[_0x4c4bc0(0x1a8)](),this[_0x4c4bc0(0x152)]=0x0):tier=Math['max'](_0x128018,tier);}VisuMZ[_0x4c4bc0(0x1bc)](VisuMZ[label][_0x4c4bc0(0x1f7)],_0x2efc29[_0x4c4bc0(0x18f)]);})(pluginData),PluginManager[_0x5ed848(0x1e3)](pluginData[_0x5ed848(0x1ec)],_0x5ed848(0x220),_0xf11a1a=>{const _0x57e5be=_0x5ed848;if(!SceneManager[_0x57e5be(0x225)]())return;if($gamePlayer[_0x57e5be(0x1eb)]())return;VisuMZ[_0x57e5be(0x1bc)](_0xf11a1a,_0xf11a1a);const _0x1ad1ac=_0xf11a1a[_0x57e5be(0x1c9)]||0x1,_0x645804=_0xf11a1a['EasingType']||'Linear';$gameScreen['setMapCameraFocusToPlayer'](_0x1ad1ac,_0x645804);}),PluginManager['registerCommand'](pluginData[_0x5ed848(0x1ec)],_0x5ed848(0x1c2),_0x2e96a0=>{const _0x390bd5=_0x5ed848;if(!SceneManager[_0x390bd5(0x225)]())return;VisuMZ[_0x390bd5(0x1bc)](_0x2e96a0,_0x2e96a0);const _0x29a885=$gameTemp['getLastPluginCommandInterpreter'](),_0x5c0af5=_0x2e96a0['EventID']||_0x29a885[_0x390bd5(0x1e1)](),_0x1e2229=$gameMap[_0x390bd5(0x188)](_0x5c0af5),_0x303097=_0x2e96a0[_0x390bd5(0x1c9)]||0x1,_0xff5d7d=_0x2e96a0[_0x390bd5(0x15c)]||_0x390bd5(0x1c3);if(!_0x1e2229)return;$gameScreen[_0x390bd5(0x1d9)](_0x5c0af5,_0x303097,_0xff5d7d);}),PluginManager[_0x5ed848(0x1e3)](pluginData[_0x5ed848(0x1ec)],_0x5ed848(0x1ac),_0x3bea6b=>{const _0x331ece=_0x5ed848;if(!SceneManager['isSceneMap']())return;VisuMZ[_0x331ece(0x1bc)](_0x3bea6b,_0x3bea6b);const _0x54aa95=_0x3bea6b[_0x331ece(0x1bd)]['clamp'](0x0,$gameMap['width']()-0x1),_0x975ace=_0x3bea6b[_0x331ece(0x224)][_0x331ece(0x15f)](0x0,$gameMap[_0x331ece(0x20a)]()-0x1),_0x7e314=_0x3bea6b[_0x331ece(0x1c9)]||0x1,_0x35b7b4=_0x3bea6b['EasingType']||_0x331ece(0x1c3);$gameScreen[_0x331ece(0x1fd)](_0x54aa95,_0x975ace,_0x7e314,_0x35b7b4);}),PluginManager[_0x5ed848(0x1e3)](pluginData[_0x5ed848(0x1ec)],_0x5ed848(0x141),_0x13d335=>{const _0x4a7c92=_0x5ed848;if(!SceneManager['isSceneMap']())return;const _0x5721b4=$gameTemp[_0x4a7c92(0x20f)]();_0x5721b4[_0x4a7c92(0x160)](_0x4a7c92(0x1e5));}),PluginManager['registerCommand'](pluginData[_0x5ed848(0x1ec)],_0x5ed848(0x1ad),_0x17ab1e=>{const _0x54db7d=_0x5ed848;if(!SceneManager['isSceneMap']())return;VisuMZ[_0x54db7d(0x1bc)](_0x17ab1e,_0x17ab1e);let _0x4ffdbe=_0x17ab1e[_0x54db7d(0x193)];if(_0x4ffdbe<Game_Screen[_0x54db7d(0x142)]&&$gameTemp['isPlaytest']()){if(_0x54db7d(0x16c)!==_0x54db7d(0x16c))return!![];else alert('Zoom\x20cannot\x20go\x20under\x20100%.'),_0x4ffdbe=Game_Screen[_0x54db7d(0x142)];}const _0xcaae7a=_0x17ab1e[_0x54db7d(0x1c9)]||0x1,_0x27eef6=_0x17ab1e['EasingType']||_0x54db7d(0x1c3);$gameScreen[_0x54db7d(0x213)](_0x4ffdbe,_0xcaae7a,_0x27eef6);}),PluginManager['registerCommand'](pluginData[_0x5ed848(0x1ec)],'ZoomWait',_0x1961a5=>{const _0x566cdf=_0x5ed848;if(!SceneManager[_0x566cdf(0x225)]())return;const _0x51321b=$gameTemp[_0x566cdf(0x20f)]();_0x51321b[_0x566cdf(0x160)](_0x566cdf(0x1c0));}),VisuMZ[_0x5ed848(0x1be)][_0x5ed848(0x1d4)]={'AutoZoom':/<(?:ZOOM|AUTO ZOOM|AUTOZOOM):[ ](\d+)([%％])>/i},VisuMZ['MapCameraZoom'][_0x5ed848(0x1d6)]=ImageManager[_0x5ed848(0x211)],ImageManager[_0x5ed848(0x211)]=function(_0x1ffd21){const _0x459afd=_0x5ed848,_0x52ba05=VisuMZ[_0x459afd(0x1be)]['ImageManager_loadCharacter']['call'](this,_0x1ffd21);return _0x52ba05['smooth']=![],_0x52ba05;},VisuMZ[_0x5ed848(0x1be)]['ImageManager_loadSystem']=ImageManager[_0x5ed848(0x1c4)],ImageManager[_0x5ed848(0x1c4)]=function(_0x4d9bb4){const _0x15b822=_0x5ed848,_0x3209d1=VisuMZ[_0x15b822(0x1be)][_0x15b822(0x215)][_0x15b822(0x1b1)](this,_0x4d9bb4);if(_0x4d9bb4==='IconSet')_0x3209d1[_0x15b822(0x1ed)]=![];return _0x3209d1;},VisuMZ['MapCameraZoom'][_0x5ed848(0x158)]=ImageManager[_0x5ed848(0x216)],ImageManager[_0x5ed848(0x216)]=function(_0x4ce5aa){const _0x153909=_0x5ed848,_0x5ec01e=VisuMZ[_0x153909(0x1be)][_0x153909(0x158)][_0x153909(0x1b1)](this,_0x4ce5aa);return _0x5ec01e[_0x153909(0x1ed)]=![],_0x5ec01e;},SceneManager[_0x5ed848(0x225)]=function(){const _0x4c391f=_0x5ed848;return this['_scene']&&this[_0x4c391f(0x1b4)]['constructor']===Scene_Map;},Game_Temp[_0x5ed848(0x1cd)]['setLastPluginCommandInterpreter']=function(_0x56d038){const _0x2bb861=_0x5ed848;this[_0x2bb861(0x17f)]=_0x56d038;},Game_Temp[_0x5ed848(0x1cd)]['getLastPluginCommandInterpreter']=function(){const _0x235ea0=_0x5ed848;return this[_0x235ea0(0x17f)];},VisuMZ[_0x5ed848(0x1be)][_0x5ed848(0x1d1)]=Game_Interpreter['prototype']['command357'],Game_Interpreter['prototype'][_0x5ed848(0x20d)]=function(_0x2c130f){const _0x36d5b1=_0x5ed848;return $gameTemp[_0x36d5b1(0x14b)](this),VisuMZ[_0x36d5b1(0x1be)]['Game_Interpreter_PluginCommand'][_0x36d5b1(0x1b1)](this,_0x2c130f);},Game_Screen['MIN_ZOOM']=0x1,Game_Screen[_0x5ed848(0x226)]=Math['max'](Game_Screen[_0x5ed848(0x142)],VisuMZ['MapCameraZoom'][_0x5ed848(0x1f7)]['DefaultZoom']||0x1),VisuMZ[_0x5ed848(0x1be)][_0x5ed848(0x167)]=Game_Screen[_0x5ed848(0x1cd)][_0x5ed848(0x217)],Game_Screen[_0x5ed848(0x1cd)][_0x5ed848(0x217)]=function(){const _0xdfb217=_0x5ed848;VisuMZ['MapCameraZoom']['Game_Screen_initialize'][_0xdfb217(0x1b1)](this),this[_0xdfb217(0x1c1)]();},Game_Screen[_0x5ed848(0x1cd)][_0x5ed848(0x1c1)]=function(){const _0x570dec=_0x5ed848;this[_0x570dec(0x174)](),this[_0x570dec(0x1d2)]();},Game_Screen['prototype'][_0x5ed848(0x1f8)]=function(){const _0x36339f=_0x5ed848,_0x5a10dc=this['mapCameraFocusTarget']();$gameMap[_0x36339f(0x1f8)](_0x5a10dc[_0x36339f(0x1ff)],_0x5a10dc[_0x36339f(0x175)]);},VisuMZ[_0x5ed848(0x1be)][_0x5ed848(0x186)]=Game_Screen[_0x5ed848(0x1cd)][_0x5ed848(0x223)],Game_Screen['prototype'][_0x5ed848(0x223)]=function(){const _0x3c7357=_0x5ed848;VisuMZ[_0x3c7357(0x1be)][_0x3c7357(0x186)][_0x3c7357(0x1b1)](this),this['updateMapZoom'](),this[_0x3c7357(0x1fc)]();},Game_Screen['prototype'][_0x5ed848(0x174)]=function(){const _0x1df809=_0x5ed848;this['_mapZoomSettings']={'scale':Game_Screen[_0x1df809(0x226)],'targetScale':Game_Screen[_0x1df809(0x226)],'duration':0x0,'wholeDuration':0x0,'easingType':_0x1df809(0x1c3)},this[_0x1df809(0x1c7)]={'scale':0x1,'targetScale':0x1,'duration':0x0,'wholeDuration':0x0,'easingType':'Linear'};},Game_Screen['prototype'][_0x5ed848(0x161)]=function(){const _0x748a43=_0x5ed848;if(this[_0x748a43(0x212)]===undefined)this[_0x748a43(0x174)]();return this['_mapZoomSettings'];},Game_Screen['prototype']['mapZoomEnterBattleSettings']=function(){const _0x247da4=_0x5ed848;if(this[_0x247da4(0x1c7)]===undefined)this['setupMapZoomSettings']();return this[_0x247da4(0x1c7)];},Game_Screen[_0x5ed848(0x1cd)][_0x5ed848(0x213)]=function(_0x321a7e,_0x510cee,_0x36e8e5){const _0x4b1b81=_0x5ed848,_0x22ffb=this[_0x4b1b81(0x161)]();if(_0x22ffb['targetScale']===_0x321a7e)return;_0x22ffb['targetScale']=_0x321a7e,_0x22ffb[_0x4b1b81(0x198)]=_0x510cee||0x1,_0x22ffb[_0x4b1b81(0x1c6)]=_0x510cee||0x1,_0x22ffb[_0x4b1b81(0x179)]=_0x36e8e5;},VisuMZ['MapCameraZoom'][_0x5ed848(0x21b)]=Game_Screen[_0x5ed848(0x1cd)][_0x5ed848(0x1d7)],Game_Screen[_0x5ed848(0x1cd)]['zoomScale']=function(){const _0x23b6cf=_0x5ed848;let _0x5ba8ad=VisuMZ[_0x23b6cf(0x1be)][_0x23b6cf(0x21b)][_0x23b6cf(0x1b1)](this);if(!this['allowExtendMapZoom']())return _0x5ba8ad;return SceneManager[_0x23b6cf(0x225)]()&&(_0x5ba8ad*=Math[_0x23b6cf(0x200)](this['mapZoomSettings']()['scale'],Game_Screen[_0x23b6cf(0x142)]),_0x5ba8ad*=Math[_0x23b6cf(0x200)](this[_0x23b6cf(0x173)]()[_0x23b6cf(0x148)],Game_Screen[_0x23b6cf(0x142)])),_0x5ba8ad;},Game_Screen[_0x5ed848(0x1cd)]['allowExtendMapZoom']=function(){const _0x3c069c=_0x5ed848;if(!SceneManager[_0x3c069c(0x225)]())return![];if($gameTemp[_0x3c069c(0x1fe)])return![];if(Imported[_0x3c069c(0x145)]&&$gameMap[_0x3c069c(0x1e0)]())return![];return!![];},Game_Screen['prototype'][_0x5ed848(0x1e6)]=function(){const _0x3109f4=_0x5ed848,_0x3fbe30=this['mapZoomSettings']();if(_0x3fbe30['duration']<=0x0)return;const _0x4ec7da=_0x3fbe30['duration'],_0x10361d=_0x3fbe30[_0x3109f4(0x1c6)],_0x2c0833=_0x3fbe30[_0x3109f4(0x179)]||_0x3109f4(0x1c3),_0x35a310=_0x3fbe30['scale'],_0x47f4b9=_0x3fbe30[_0x3109f4(0x17c)];_0x3fbe30[_0x3109f4(0x148)]=VisuMZ[_0x3109f4(0x1be)][_0x3109f4(0x219)](_0x35a310,_0x47f4b9,_0x4ec7da,_0x10361d,_0x2c0833),this[_0x3109f4(0x1f8)](),_0x3fbe30[_0x3109f4(0x198)]--;if(_0x3fbe30[_0x3109f4(0x198)]<=0x0){if('CBcYa'==='WwDnl'){const _0x1785c6=_0x1cd37b['MapCameraZoom'][_0x3109f4(0x1d6)][_0x3109f4(0x1b1)](this,_0x245856);return _0x1785c6['smooth']=![],_0x1785c6;}else this[_0x3109f4(0x168)]();}},Game_Screen['prototype'][_0x5ed848(0x168)]=function(){const _0x4dbb8d=_0x5ed848,_0x3f5695=this[_0x4dbb8d(0x161)]();_0x3f5695[_0x4dbb8d(0x148)]=_0x3f5695['targetScale'];},VisuMZ[_0x5ed848(0x1be)][_0x5ed848(0x219)]=function(_0x5c57f7,_0x3ec27f,_0x34b424,_0x31af1e,_0x50600e){const _0x48f6a7=_0x5ed848,_0x92a407=VisuMZ[_0x48f6a7(0x1aa)]((_0x31af1e-_0x34b424)/_0x31af1e,_0x50600e||'Linear'),_0x4c58aa=VisuMZ['ApplyEasing']((_0x31af1e-_0x34b424+0x1)/_0x31af1e,_0x50600e||_0x48f6a7(0x1c3)),_0x4ff969=(_0x5c57f7-_0x3ec27f*_0x92a407)/(0x1-_0x92a407);return _0x4ff969+(_0x3ec27f-_0x4ff969)*_0x4c58aa;};!VisuMZ[_0x5ed848(0x1aa)]&&(VisuMZ['ApplyEasing']=function(_0x162ab7,_0x4719b5){return _0x162ab7;});function _0x325a(_0x5d18f1,_0x252ea5){const _0x2f11ed=_0x2f11();return _0x325a=function(_0x325aec,_0x449508){_0x325aec=_0x325aec-0x13f;let _0x4b7d87=_0x2f11ed[_0x325aec];return _0x4b7d87;},_0x325a(_0x5d18f1,_0x252ea5);};function _0x2f11(){const _0x197168=['_parallaxLoopX','updateMapCameraCenteredParallax','CameraFocusPlayer','_displayX','XgEum','updateZoom','MapY','isSceneMap','DEFAULT_MAP_ZOOM_SCALE','Scene_Map_updateEncounterEffect','_parallaxLoopY','yScrollLinkedOffset','CameraFocusWait','MIN_ZOOM','match','1233NMcBRK','VisuMZ_2_FurnitureSystem','update','MovementEffects','scale','map','updateScrollSmoothCamera','setLastPluginCommandInterpreter','ARRAYJSON','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','updateMapCameraFocusSmooth','updateEncounterEffect','2536VAdKFA','utOZc','_mapCameraParallaxUpdates','tileCoordinates','NZxVt','updateMapZoomPosition','_parallaxX','floor','ImageManager_loadTileset','Game_Map_parallaxOy','_waitMode','parallaxOy','EasingType','roundY','updateMapScrollLinkedCenteredParallax','clamp','setWaitMode','mapZoomSettings','screenTileX','Game_Map_updateParallax','_parallaxY','setMapCameraFocusToPlayer','VisuMZ_4_VisualParallaxes','Game_Screen_initialize','onUpdateMapZoomEnd','setZoom','isChangingMapCameraFocusTargets','return\x200','gUoef','AdaptBattleEncZoom','Sprite_AnimationMV_updatePosition','parallaxOx','Game_Map_parallaxOx','parent','Game_Event_update','mapZoomEnterBattleSettings','setupMapZoomSettings','_realY','AsynC','jSCSA','_parallaxSy','easingType','trim','version','targetScale','_mapCameraSettings','kaEsH','_lastPluginCommandInterpreter','Game_Player_updateScroll','2568296ghRnHe','position','ForcePixelatedMap','xScrollLinkedOffset','Game_Screen_setZoom','Game_Screen_updateZoom','ARRAYNUM','event','Layer','7130QrxQoS','mapCameraSettings','description','ARRAYEVAL','mod','parameters','toUpperCase','Game_Interpreter_updateWaitMode','wvHqE','TargetScale','_displayY','CBXnZ','centerX','10WtlTLs','duration','ARRAYFUNC','eventFocus','MAP_ZOOM_ENTER_BATTLE_ADAPT','Renderer','72492lIubmK','AutoZoom','canSmoothScroll','152601dbXyLh','Zoom\x20cannot\x20go\x20under\x20100%.','AIKwi','5059308TbGIrW','onUpdateMapCameraFocusEnd','scaleMode','isSmoothCameraEnabled','ITovS','setupMapCameraZoomNotetags','STR','ApplyEasing','tileWidth','CameraFocusTargetTile','ZoomChange','EVAL','furUd','_destroyInternalTextures','call','updateWaitMode','displayX','_scene','tileFocus','setCurrentCameraFocusTile','start','GgIPu','ARRAYSTR','isPlaytest','updatePosition','ConvertParams','MapX','MapCameraZoom','_parallaxZero','mapZoom','setupMapCameraZoom','CameraFocusTargetEvent','Linear','loadSystem','currentCamera','wholeDuration','_mapEnterBattleZoom','tXJAx','Duration','Game_Map_screenTileY','width','Scene_Map_start','prototype','Game_Map_setup','updateScroll','mZFkw','Game_Interpreter_PluginCommand','setupMapCameraSettings','isInAirship','RegExp','exit','ImageManager_loadCharacter','zoomScale','ARRAYSTRUCT','setMapCameraFocusToEvent','roundX','SCALE_MODES','mapCameraFocusTarget','qPZVJ','Game_Player_clearTransferInfo','format','isFurnitureSystemMode','eventId','_spriteset','registerCommand','FUNC','mapCameraFocus','updateMapZoom','aHsCG','913UIJBwP','3421230VVHpDt','VisuMZ_2_MovementEffects','isMapCameraFocusTarget','name','smooth','setBattleEncounterZoom','Game_Map_screenTileX','setDisplayPosMapCameraZoom','resize','_createInternalTextures','iNByH','scrolledX','Game_System_isSmoothCameraEnabled','1254JLrTjw','Settings','centerMapCameraZoom','JSON','parse','canvasToMapX','updateMapCameraFocus','setMapCameraFocusToTile','_doodadEditorMode','_realX','max','isNextScene','centerY','akZJt','setup','playerFocus','updateParallax','NUM','tileHeight','clearTransferInfo','height','eventTargetID','cJaOG','command357','screenTileY','getLastPluginCommandInterpreter','7ycvBwE','loadCharacter','_mapZoomSettings','startMapZoom','qgNsn','ImageManager_loadSystem','loadTileset','initialize','note','applyEasing','_mapZoomEnterBattle','Game_Screen_zoomScale','NEAREST','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'];_0x2f11=function(){return _0x197168;};return _0x2f11();}Game_Screen[_0x5ed848(0x1cd)][_0x5ed848(0x1d2)]=function(){const _0x1f263f=_0x5ed848;this[_0x1f263f(0x17d)]={'playerFocus':!![],'eventFocus':![],'eventTargetID':0x0,'tileFocus':![],'tileCoordinates':{'_realX':0x0,'_realY':0x0},'duration':0x0,'wholeDuration':0x0,'easingType':_0x1f263f(0x1c3),'currentCamera':{'_realX':0x0,'_realY':0x0}};},Game_Screen[_0x5ed848(0x1cd)][_0x5ed848(0x18b)]=function(){const _0x414c25=_0x5ed848;if(this[_0x414c25(0x17d)]===undefined)this[_0x414c25(0x1d2)]();return this[_0x414c25(0x17d)];},Game_Screen['prototype']['mapCameraFocusTarget']=function(_0x1e4c06){const _0x55777a=_0x5ed848,_0x5e584a=this[_0x55777a(0x18b)]();if(!_0x1e4c06&&_0x5e584a['duration']>0x0)return _0x5e584a['currentCamera'];else{if(_0x5e584a[_0x55777a(0x205)]){if(_0x55777a(0x20c)!==_0x55777a(0x1d0))return $gamePlayer;else _0x48aecf[_0x55777a(0x1be)][_0x55777a(0x16e)][_0x55777a(0x1b1)](this);}else{if(_0x5e584a[_0x55777a(0x19a)])return $gameMap[_0x55777a(0x188)](_0x5e584a[_0x55777a(0x20b)])||$gamePlayer;else{if(_0x5e584a[_0x55777a(0x1b5)])return _0x5e584a[_0x55777a(0x153)];}}}return $gamePlayer;},Game_Screen['prototype'][_0x5ed848(0x16a)]=function(){const _0x2babf1=_0x5ed848;return this[_0x2babf1(0x1dc)]()===this[_0x2babf1(0x18b)]()[_0x2babf1(0x1c5)];},Game_Screen[_0x5ed848(0x1cd)][_0x5ed848(0x1b6)]=function(_0xbfd3cc,_0x268d5b){const _0x51d2ff=_0x5ed848,_0x2b39ca=this[_0x51d2ff(0x18b)](),_0x51a4bc=this[_0x51d2ff(0x1dc)]();_0x2b39ca['currentCamera'][_0x51d2ff(0x1ff)]=_0x51a4bc[_0x51d2ff(0x1ff)],_0x2b39ca[_0x51d2ff(0x1c5)]['_realY']=_0x51a4bc[_0x51d2ff(0x175)],_0x2b39ca[_0x51d2ff(0x198)]=_0xbfd3cc||0x1,_0x2b39ca[_0x51d2ff(0x1c6)]=_0xbfd3cc||0x1,_0x2b39ca['easingType']=_0x268d5b||_0x51d2ff(0x1c3);},Game_Screen[_0x5ed848(0x1cd)][_0x5ed848(0x165)]=function(_0x4693fb,_0x46f8e2){const _0x5d2b92=_0x5ed848,_0x5bff30=this[_0x5d2b92(0x18b)]();if($gamePlayer['isMapCameraFocusTarget']())return;this[_0x5d2b92(0x1b6)](_0x4693fb,_0x46f8e2),_0x5bff30[_0x5d2b92(0x205)]=!![],_0x5bff30[_0x5d2b92(0x19a)]=![],_0x5bff30[_0x5d2b92(0x1b5)]=![];const _0x192165=_0x5bff30['tileCoordinates'];_0x192165[_0x5d2b92(0x1ff)]=-0x1,_0x192165[_0x5d2b92(0x175)]=-0x1;},Game_Screen[_0x5ed848(0x1cd)]['setMapCameraFocusToEvent']=function(_0xc826b3,_0x413120,_0x191f35){const _0x4053e8=_0x5ed848,_0xcdfcf3=$gameMap[_0x4053e8(0x188)](_0xc826b3);if(!_0xcdfcf3)return;const _0x35658b=this[_0x4053e8(0x18b)]();if(_0xcdfcf3['isMapCameraFocusTarget']())return;this[_0x4053e8(0x1b6)](_0x413120,_0x191f35),_0x35658b[_0x4053e8(0x205)]=![],_0x35658b[_0x4053e8(0x19a)]=!![],_0x35658b['tileFocus']=![],_0x35658b[_0x4053e8(0x20b)]=_0xc826b3;const _0x1871b8=_0x35658b[_0x4053e8(0x153)];_0x1871b8['_realX']=-0x1,_0x1871b8[_0x4053e8(0x175)]=-0x1;},Game_Screen[_0x5ed848(0x1cd)][_0x5ed848(0x1fd)]=function(_0x4f7198,_0x17d382,_0x2ce81a,_0xa8cbf0){const _0x426cc2=_0x5ed848,_0x3180c1=this[_0x426cc2(0x18b)](),_0x231d7a=_0x3180c1['tileCoordinates'];if(_0x231d7a['_realX']===_0x4f7198&&_0x231d7a['_realY']===_0x17d382)return;this['setCurrentCameraFocusTile'](_0x2ce81a,_0xa8cbf0),_0x3180c1[_0x426cc2(0x205)]=![],_0x3180c1[_0x426cc2(0x19a)]=![],_0x3180c1[_0x426cc2(0x1b5)]=!![],_0x3180c1['tileCoordinates'][_0x426cc2(0x1ff)]=_0x4f7198,_0x3180c1['tileCoordinates'][_0x426cc2(0x175)]=_0x17d382;},Game_Screen[_0x5ed848(0x1cd)][_0x5ed848(0x1fc)]=function(){const _0x1fd402=_0x5ed848,_0x458be1=this['mapCameraSettings']();if(_0x458be1[_0x1fd402(0x198)]<=0x0)return;const _0x580e8c=_0x458be1['duration'],_0x2bf4f5=_0x458be1[_0x1fd402(0x1c6)],_0x2bde00=_0x458be1[_0x1fd402(0x179)]||_0x1fd402(0x1c3),_0x28cd44=_0x458be1[_0x1fd402(0x1c5)],_0x529991=this[_0x1fd402(0x1dc)](!![]),_0x149467=$gameMap[_0x1fd402(0x221)],_0x5701dc=$gameMap[_0x1fd402(0x194)];_0x28cd44[_0x1fd402(0x1ff)]=VisuMZ['MapCameraZoom'][_0x1fd402(0x219)](_0x28cd44['_realX'],_0x529991[_0x1fd402(0x1ff)],_0x580e8c,_0x2bf4f5,_0x2bde00),_0x28cd44[_0x1fd402(0x175)]=VisuMZ[_0x1fd402(0x1be)][_0x1fd402(0x219)](_0x28cd44[_0x1fd402(0x175)],_0x529991[_0x1fd402(0x175)],_0x580e8c,_0x2bf4f5,_0x2bde00),this['centerMapCameraZoom']();if(this[_0x1fd402(0x14e)]()){const _0x5af581=$gameMap[_0x1fd402(0x221)],_0x18f79e=$gameMap[_0x1fd402(0x194)];$gameMap[_0x1fd402(0x221)]=VisuMZ[_0x1fd402(0x1be)][_0x1fd402(0x219)](_0x149467,_0x5af581,_0x580e8c,_0x2bf4f5,_0x2bde00),$gameMap[_0x1fd402(0x194)]=VisuMZ[_0x1fd402(0x1be)][_0x1fd402(0x219)](_0x5701dc,_0x18f79e,_0x580e8c,_0x2bf4f5,_0x2bde00);}_0x458be1['duration']--;if(_0x458be1[_0x1fd402(0x198)]<=0x0){if(_0x1fd402(0x192)===_0x1fd402(0x177)){const _0x198e12=this[_0x1fd402(0x18b)](),_0x1aa2fd=_0x198e12[_0x1fd402(0x153)];if(_0x1aa2fd[_0x1fd402(0x1ff)]===_0x4fe3f1&&_0x1aa2fd[_0x1fd402(0x175)]===_0x213d8b)return;this[_0x1fd402(0x1b6)](_0x27fe84,_0x1e234c),_0x198e12[_0x1fd402(0x205)]=![],_0x198e12[_0x1fd402(0x19a)]=![],_0x198e12['tileFocus']=!![],_0x198e12['tileCoordinates'][_0x1fd402(0x1ff)]=_0x4bcc4e,_0x198e12['tileCoordinates'][_0x1fd402(0x175)]=_0xa7434a;}else this['onUpdateMapCameraFocusEnd']();}},Game_Screen[_0x5ed848(0x1cd)][_0x5ed848(0x14e)]=function(){const _0x3d68bb=_0x5ed848;return![];if(!Imported[_0x3d68bb(0x1ea)])return![];if(!$gamePlayer[_0x3d68bb(0x19f)]())return![];const _0x29d69a=this['mapCameraSettings'](),_0xbc77bc=_0x29d69a[_0x3d68bb(0x198)],_0x473aea=_0x29d69a['wholeDuration'];return _0xbc77bc>_0x473aea;},Game_Screen[_0x5ed848(0x1cd)][_0x5ed848(0x1a4)]=function(){const _0x4db401=_0x5ed848,_0x4fc79f=this[_0x4db401(0x18b)](),_0x309ecd=_0x4fc79f[_0x4db401(0x1c5)],_0x2c9f0d=this[_0x4db401(0x1dc)](!![]);_0x309ecd[_0x4db401(0x1ff)]=_0x2c9f0d['_realX'],_0x309ecd['_realY']=_0x2c9f0d[_0x4db401(0x175)];},Game_Picture['prototype'][_0x5ed848(0x184)]=function(){const _0x98a06=_0x5ed848,_0x38ccfa=$gameMap[_0x98a06(0x1b3)]()*$gameMap[_0x98a06(0x1ab)]();return(this['_x']-_0x38ccfa)*$gameScreen[_0x98a06(0x1d7)]();},Game_Picture[_0x5ed848(0x1cd)][_0x5ed848(0x140)]=function(){const _0x15a84a=_0x5ed848,_0x481dfa=$gameMap['displayY']()*$gameMap[_0x15a84a(0x208)]();return(this['_y']-_0x481dfa)*$gameScreen[_0x15a84a(0x1d7)]();},VisuMZ[_0x5ed848(0x1be)][_0x5ed848(0x1ce)]=Game_Map[_0x5ed848(0x1cd)][_0x5ed848(0x204)],Game_Map['prototype'][_0x5ed848(0x204)]=function(_0x5b29c8){const _0x320c70=_0x5ed848;VisuMZ[_0x320c70(0x1be)][_0x320c70(0x1ce)][_0x320c70(0x1b1)](this,_0x5b29c8),this[_0x320c70(0x1a8)](),this['_mapCameraParallaxUpdates']=0x0;},Game_Map[_0x5ed848(0x1cd)]['setupMapCameraZoomNotetags']=function(){const _0x114b0e=_0x5ed848,_0x361afa=VisuMZ[_0x114b0e(0x1be)][_0x114b0e(0x1d4)],_0x480ab8=$dataMap?$dataMap[_0x114b0e(0x218)]||'':'';if(_0x480ab8['match'](_0x361afa[_0x114b0e(0x19e)])){let _0x2c3324=Number(RegExp['$1'])*0.01;_0x2c3324<0x1&&$gameTemp[_0x114b0e(0x1ba)]()&&alert(_0x114b0e(0x1a1)),_0x2c3324=Math[_0x114b0e(0x200)](Game_Screen['MIN_ZOOM'],_0x2c3324),$gameScreen[_0x114b0e(0x161)]()[_0x114b0e(0x148)]=_0x2c3324,$gameScreen[_0x114b0e(0x161)]()['targetScale']=_0x2c3324,$gameScreen[_0x114b0e(0x161)]()[_0x114b0e(0x198)]=0x0;}$gameScreen['centerMapCameraZoom']();},Game_Map[_0x5ed848(0x1cd)][_0x5ed848(0x1f8)]=function(_0xede9c4,_0x4a0545){const _0x1f1a34=_0x5ed848;_0xede9c4-=$gamePlayer[_0x1f1a34(0x196)](),_0x4a0545-=$gamePlayer[_0x1f1a34(0x202)](),this['setDisplayPosMapCameraZoom'](_0xede9c4,_0x4a0545),this[_0x1f1a34(0x21f)](_0xede9c4,_0x4a0545),this['updateMapScrollLinkedCenteredParallax'](_0xede9c4,_0x4a0545);},Game_Map['prototype'][_0x5ed848(0x1f0)]=function(_0x1d205d,_0x3c3532){const _0x49e13b=_0x5ed848;if(this['isLoopHorizontal']())this['_displayX']=_0x1d205d[_0x49e13b(0x18e)](this['width']()),this[_0x49e13b(0x156)]=_0x1d205d;else{if(_0x49e13b(0x1dd)!==_0x49e13b(0x1dd))_0x33f677[_0x49e13b(0x1cd)]['updateScrollSmoothCamera']['call'](this,_0xeef464,_0x4a4ca1);else{const _0x3261bd=this[_0x49e13b(0x1cb)]()-this[_0x49e13b(0x162)]();this['_displayX']=_0x3261bd<0x0?_0x3261bd/0x2:_0x1d205d[_0x49e13b(0x15f)](0x0,_0x3261bd),this[_0x49e13b(0x156)]=this[_0x49e13b(0x221)];}}if(this['isLoopVertical']())this['_displayY']=_0x3c3532['mod'](this[_0x49e13b(0x20a)]()),this[_0x49e13b(0x164)]=_0x3c3532;else{const _0x3887d1=this[_0x49e13b(0x20a)]()-this[_0x49e13b(0x20e)]();this[_0x49e13b(0x194)]=_0x3887d1<0x0?_0x3887d1/0x2:_0x3c3532['clamp'](0x0,_0x3887d1),this[_0x49e13b(0x164)]=this[_0x49e13b(0x194)];}},Game_Map['prototype'][_0x5ed848(0x21f)]=function(_0xed9b7e,_0x35b438){const _0x31e247=_0x5ed848,_0x11e21f=this['_mapCameraParallaxUpdates']||0x0;if(_0x11e21f<=0x0)return;this[_0x31e247(0x21e)]&&(this[_0x31e247(0x156)]+=this['_parallaxSx']/this[_0x31e247(0x1ab)]()/0x2*_0x11e21f),this[_0x31e247(0x13f)]&&(_0x31e247(0x1e7)!==_0x31e247(0x1a2)?this[_0x31e247(0x164)]+=this[_0x31e247(0x178)]/this[_0x31e247(0x208)]()/0x2*_0x11e21f:(_0x4a7734(_0x31e247(0x1a1)),_0x3e169f=_0x5247a5[_0x31e247(0x142)]));},Game_Map['prototype'][_0x5ed848(0x15e)]=function(_0x20a6ee,_0xdc52be){const _0x3c4a28=_0x5ed848,_0x3eac97=VisuMZ[_0x3c4a28(0x1be)][_0x3c4a28(0x1f7)];if(Imported[_0x3c4a28(0x166)]&&_0x3eac97['VisualParallaxAdjust']){if('furUd'!==_0x3c4a28(0x1af)){const _0x128c4b=this['tileHeight']()*_0xa38f84['zoomScale'](),_0x197f8f=this['_displayY']*_0x128c4b,_0x575d0d=_0x57da71[_0x3c4a28(0x157)]((_0x197f8f+_0x14d511)/_0x128c4b);return this[_0x3c4a28(0x15d)](_0x575d0d);}else{this['_visualParallaxSettings']=this['_visualParallaxSettings']||[];for(const _0x5433b0 of this['getVisualParallaxes']()){if(!_0x5433b0)continue;_0x5433b0[_0x3c4a28(0x1bf)]&&(_0x3c4a28(0x214)!==_0x3c4a28(0x1a7)?(_0x5433b0['_parallaxX']=this[_0x3c4a28(0x221)],_0x5433b0['_parallaxY']=this[_0x3c4a28(0x194)]):_0x50beb8['_mapZoomEnterBattle']?this[_0x3c4a28(0x1ee)](_0x1dddae):_0x15aedb[_0x3c4a28(0x1be)]['Game_Screen_setZoom'][_0x3c4a28(0x1b1)](this,_0x4d98eb,_0x4ef6aa,_0x1ff1aa));}}}},VisuMZ[_0x5ed848(0x1be)][_0x5ed848(0x163)]=Game_Map['prototype'][_0x5ed848(0x206)],Game_Map['prototype']['updateParallax']=function(){const _0x3a5d61=_0x5ed848;VisuMZ[_0x3a5d61(0x1be)][_0x3a5d61(0x163)]['call'](this),this[_0x3a5d61(0x152)]=this['_mapCameraParallaxUpdates']||0x0,this[_0x3a5d61(0x152)]++;},VisuMZ['MapCameraZoom']['Game_Map_parallaxOx']=Game_Map[_0x5ed848(0x1cd)][_0x5ed848(0x16f)],Game_Map[_0x5ed848(0x1cd)][_0x5ed848(0x16f)]=function(){const _0x331147=_0x5ed848;let _0xb9065a=VisuMZ[_0x331147(0x1be)][_0x331147(0x170)]['call'](this);if(this[_0x331147(0x1bf)])_0xb9065a=Math[_0x331147(0x157)](_0xb9065a);return _0xb9065a;},VisuMZ[_0x5ed848(0x1be)]['Game_Map_parallaxOy']=Game_Map[_0x5ed848(0x1cd)]['parallaxOy'],Game_Map['prototype'][_0x5ed848(0x15b)]=function(){const _0x3e2a89=_0x5ed848;let _0x56368d=VisuMZ[_0x3e2a89(0x1be)][_0x3e2a89(0x159)][_0x3e2a89(0x1b1)](this);if(this[_0x3e2a89(0x1bf)])_0x56368d=Math[_0x3e2a89(0x157)](_0x56368d);return _0x56368d;},Game_Map[_0x5ed848(0x1cd)][_0x5ed848(0x1fb)]=function(_0x4ff16f){const _0x22f78b=_0x5ed848,_0x160379=this[_0x22f78b(0x1ab)]()*$gameScreen['zoomScale'](),_0x4c3107=this[_0x22f78b(0x221)]*_0x160379,_0xe794d8=Math[_0x22f78b(0x157)]((_0x4c3107+_0x4ff16f)/_0x160379);return this['roundX'](_0xe794d8);},Game_Map[_0x5ed848(0x1cd)]['canvasToMapY']=function(_0xc57c11){const _0x9e145e=_0x5ed848,_0x125c44=this[_0x9e145e(0x208)]()*$gameScreen[_0x9e145e(0x1d7)](),_0x3c2373=this['_displayY']*_0x125c44,_0x85a0e=Math[_0x9e145e(0x157)]((_0x3c2373+_0xc57c11)/_0x125c44);return this['roundY'](_0x85a0e);},VisuMZ[_0x5ed848(0x1be)][_0x5ed848(0x1ef)]=Game_Map[_0x5ed848(0x1cd)][_0x5ed848(0x162)],Game_Map[_0x5ed848(0x1cd)][_0x5ed848(0x162)]=function(){const _0x1aa995=_0x5ed848,_0xffc188=VisuMZ['MapCameraZoom'][_0x1aa995(0x1ef)][_0x1aa995(0x1b1)](this);return _0xffc188/$gameScreen['zoomScale']();},VisuMZ[_0x5ed848(0x1be)][_0x5ed848(0x1ca)]=Game_Map[_0x5ed848(0x1cd)][_0x5ed848(0x20e)],Game_Map[_0x5ed848(0x1cd)][_0x5ed848(0x20e)]=function(){const _0x179db7=_0x5ed848,_0x58a800=VisuMZ[_0x179db7(0x1be)][_0x179db7(0x1ca)][_0x179db7(0x1b1)](this);return _0x58a800/$gameScreen[_0x179db7(0x1d7)]();},Game_CharacterBase[_0x5ed848(0x1cd)][_0x5ed848(0x1eb)]=function(){const _0x5ba40b=_0x5ed848;return $gameScreen[_0x5ba40b(0x1dc)]()===this;},VisuMZ[_0x5ed848(0x1be)][_0x5ed848(0x1de)]=Game_Player[_0x5ed848(0x1cd)][_0x5ed848(0x209)],Game_Player[_0x5ed848(0x1cd)]['clearTransferInfo']=function(){const _0x16c803=_0x5ed848;VisuMZ[_0x16c803(0x1be)]['Game_Player_clearTransferInfo'][_0x16c803(0x1b1)](this),$gameScreen['setMapCameraFocusToPlayer'](0x1,_0x16c803(0x1c3)),$gameScreen['centerMapCameraZoom']();},VisuMZ[_0x5ed848(0x1be)][_0x5ed848(0x180)]=Game_Player['prototype'][_0x5ed848(0x1cf)],Game_Player['prototype'][_0x5ed848(0x1cf)]=function(_0x178f3d,_0x45575b){const _0x3217f7=_0x5ed848;if(!this['isMapCameraFocusTarget']())return;VisuMZ[_0x3217f7(0x1be)][_0x3217f7(0x180)][_0x3217f7(0x1b1)](this,_0x178f3d,_0x45575b);},Game_Event[_0x5ed848(0x1cd)]['centerX']=function(){const _0x235c12=_0x5ed848;return Game_Player['prototype'][_0x235c12(0x196)]['call'](this);},Game_Event[_0x5ed848(0x1cd)][_0x5ed848(0x202)]=function(){const _0x4b014b=_0x5ed848;return Game_Player[_0x4b014b(0x1cd)][_0x4b014b(0x202)][_0x4b014b(0x1b1)](this);},VisuMZ['MapCameraZoom'][_0x5ed848(0x172)]=Game_Event[_0x5ed848(0x1cd)]['update'],Game_Event[_0x5ed848(0x1cd)][_0x5ed848(0x146)]=function(){const _0x11ce00=_0x5ed848,_0x5e8e48=this[_0x11ce00(0x1f4)](),_0x530994=this['scrolledY']();VisuMZ[_0x11ce00(0x1be)]['Game_Event_update'][_0x11ce00(0x1b1)](this);if(!this[_0x11ce00(0x1eb)]())return;this[_0x11ce00(0x1cf)](_0x5e8e48,_0x530994);},Game_Event[_0x5ed848(0x1cd)][_0x5ed848(0x1cf)]=function(_0x5b71fa,_0x6d4470){const _0x15665c=_0x5ed848;return Game_Player['prototype'][_0x15665c(0x1cf)]['call'](this,_0x5b71fa,_0x6d4470);},Game_Event[_0x5ed848(0x1cd)][_0x5ed848(0x19f)]=function(){const _0x339736=_0x5ed848;try{return Game_Player[_0x339736(0x1cd)][_0x339736(0x19f)]['call'](this);}catch(_0x460ce9){if('uMmWh'!==_0x339736(0x151))return![];else _0x5f1141=_0x532699[_0x339736(0x200)](_0xf5396d,_0xf195d);}},Game_Event[_0x5ed848(0x1cd)]['updateScrollSmoothCamera']=function(_0x1ef17c,_0x4ce570){const _0x4d89d5=_0x5ed848;try{Game_Player[_0x4d89d5(0x1cd)][_0x4d89d5(0x14a)][_0x4d89d5(0x1b1)](this,_0x1ef17c,_0x4ce570);}catch(_0x223ce5){VisuMZ[_0x4d89d5(0x147)][_0x4d89d5(0x180)][_0x4d89d5(0x1b1)](this,_0x1ef17c,_0x4ce570);}},Game_Event['prototype'][_0x5ed848(0x1d3)]=function(){return![];},VisuMZ[_0x5ed848(0x1be)][_0x5ed848(0x191)]=Game_Interpreter[_0x5ed848(0x1cd)]['updateWaitMode'],Game_Interpreter[_0x5ed848(0x1cd)][_0x5ed848(0x1b2)]=function(){const _0x51fd5d=_0x5ed848;if(this[_0x51fd5d(0x15a)]==='mapCameraFocus'){if($gameScreen[_0x51fd5d(0x18b)]()[_0x51fd5d(0x198)]>0x0){if(_0x51fd5d(0x203)===_0x51fd5d(0x17e))try{_0x39ee03[_0x51fd5d(0x1cd)]['updateScrollSmoothCamera']['call'](this,_0x2a57ab,_0x16e331);}catch(_0x5de5ed){_0x3d44cc['MovementEffects'][_0x51fd5d(0x180)][_0x51fd5d(0x1b1)](this,_0x3a6805,_0x22c368);}else return!![];}this[_0x51fd5d(0x15a)]='';}else{if(this[_0x51fd5d(0x15a)]===_0x51fd5d(0x1c0)){if($gameScreen[_0x51fd5d(0x161)]()[_0x51fd5d(0x198)]>0x0)return!![];this[_0x51fd5d(0x15a)]='';}}return VisuMZ['MapCameraZoom'][_0x51fd5d(0x191)][_0x51fd5d(0x1b1)](this);},Scene_Map[_0x5ed848(0x19b)]=VisuMZ[_0x5ed848(0x1be)][_0x5ed848(0x1f7)][_0x5ed848(0x16d)],VisuMZ[_0x5ed848(0x1be)]['Scene_Map_start']=Scene_Map[_0x5ed848(0x1cd)][_0x5ed848(0x1b7)],Scene_Map[_0x5ed848(0x1cd)]['start']=function(){const _0x1da52d=_0x5ed848;VisuMZ[_0x1da52d(0x1be)][_0x1da52d(0x1cc)]['call'](this);if(Scene_Map[_0x1da52d(0x19b)]){if(_0x1da52d(0x1c8)===_0x1da52d(0x1c8))$gameScreen[_0x1da52d(0x173)]()[_0x1da52d(0x148)]=0x1,$gameScreen[_0x1da52d(0x1f8)]();else{let _0x41e6f5=_0x4a0386[_0x1da52d(0x1be)][_0x1da52d(0x159)][_0x1da52d(0x1b1)](this);if(this['_parallaxZero'])_0x41e6f5=_0x235131[_0x1da52d(0x157)](_0x41e6f5);return _0x41e6f5;}}},VisuMZ[_0x5ed848(0x1be)]['Scene_Map_updateEncounterEffect']=Scene_Map[_0x5ed848(0x1cd)][_0x5ed848(0x14f)],Scene_Map[_0x5ed848(0x1cd)][_0x5ed848(0x14f)]=function(){const _0x1ee853=_0x5ed848;$gameTemp['_mapZoomEnterBattle']=Scene_Map[_0x1ee853(0x19b)],VisuMZ[_0x1ee853(0x1be)][_0x1ee853(0x227)][_0x1ee853(0x1b1)](this),$gameTemp[_0x1ee853(0x21a)]=undefined;},VisuMZ[_0x5ed848(0x1be)][_0x5ed848(0x185)]=Game_Screen[_0x5ed848(0x1cd)][_0x5ed848(0x169)],Game_Screen[_0x5ed848(0x1cd)][_0x5ed848(0x169)]=function(_0x147725,_0x5b91ba,_0x35b99d){const _0x146167=_0x5ed848;$gameTemp[_0x146167(0x21a)]?this[_0x146167(0x1ee)](_0x35b99d):VisuMZ[_0x146167(0x1be)][_0x146167(0x185)][_0x146167(0x1b1)](this,_0x147725,_0x5b91ba,_0x35b99d);},Game_Screen['prototype'][_0x5ed848(0x1ee)]=function(_0x57c758){const _0x2e60d3=_0x5ed848;this[_0x2e60d3(0x173)]()[_0x2e60d3(0x148)]=_0x57c758,this['centerMapCameraZoom']();},VisuMZ['MapCameraZoom'][_0x5ed848(0x1f5)]=Game_System[_0x5ed848(0x1cd)][_0x5ed848(0x1a6)],Game_System['prototype']['isSmoothCameraEnabled']=function(){const _0x4742d7=_0x5ed848;if(!Scene_Map[_0x4742d7(0x19b)]&&SceneManager[_0x4742d7(0x201)](Scene_Battle))return![];return VisuMZ[_0x4742d7(0x1be)]['Game_System_isSmoothCameraEnabled'][_0x4742d7(0x1b1)](this);},VisuMZ[_0x5ed848(0x1be)][_0x5ed848(0x16e)]=Sprite_AnimationMV[_0x5ed848(0x1cd)]['updatePosition'],Sprite_AnimationMV[_0x5ed848(0x1cd)][_0x5ed848(0x1bb)]=function(){const _0x2b357c=_0x5ed848;if(SceneManager['isSceneMap']()&&this['_animation'][_0x2b357c(0x182)]===0x3)this[_0x2b357c(0x155)]();else{if(_0x2b357c(0x1f3)===_0x2b357c(0x1f3))VisuMZ['MapCameraZoom'][_0x2b357c(0x16e)][_0x2b357c(0x1b1)](this);else{const _0x3fa627=_0x287f6d['displayY']()*_0x227581['tileHeight']();return(this['_y']-_0x3fa627)*_0xe44a34[_0x2b357c(0x1d7)]();}}},Sprite_AnimationMV[_0x5ed848(0x1cd)]['updateMapZoomPosition']=function(){const _0x3ed995=_0x5ed848,_0x1dc544=SceneManager[_0x3ed995(0x1b4)][_0x3ed995(0x1e2)],_0x39fa35=$gameScreen[_0x3ed995(0x1d7)](),_0x1c1e7b=0.5/_0x39fa35,_0x2cf552=-_0x1dc544['x']/_0x39fa35,_0x41f0f0=-_0x1dc544['y']/_0x39fa35;this['x']=this[_0x3ed995(0x171)]['width']*_0x1c1e7b+_0x2cf552,this['y']=this[_0x3ed995(0x171)][_0x3ed995(0x20a)]*_0x1c1e7b+_0x41f0f0;};(VisuMZ[_0x5ed848(0x1be)][_0x5ed848(0x1f7)][_0x5ed848(0x183)]??!![])&&(Tilemap[_0x5ed848(0x19c)][_0x5ed848(0x1cd)][_0x5ed848(0x1f2)]=function(){const _0x13cb9a=_0x5ed848;this[_0x13cb9a(0x1b0)]();for(let _0x4f6d6c=0x0;_0x4f6d6c<Tilemap[_0x13cb9a(0x189)]['MAX_GL_TEXTURES'];_0x4f6d6c++){const _0x3259dd=new PIXI['BaseRenderTexture']();_0x3259dd[_0x13cb9a(0x1f1)](0x800,0x800),_0x3259dd[_0x13cb9a(0x1a5)]=PIXI[_0x13cb9a(0x1db)][_0x13cb9a(0x21c)],this['_internalTextures']['push'](_0x3259dd);}});;