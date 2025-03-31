//=============================================================================
// VisuStella MZ - Visual Fogs
// VisuMZ_4_VisualFogs.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_VisualFogs = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualFogs = VisuMZ.VisualFogs || {};
VisuMZ.VisualFogs.version = 1.10;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.10] [VisualFogs]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_Fogs_VisuStella_MZ
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Fogs are a handy feature long removed from RPG Maker since RPG Maker XP.
 * This plugin reintroduces them back into RPG Maker MZ. Fogs function similar
 * to parallaxes, except rather than being under the tile map, fogs appear
 * above the tile map and the characters. This plugin gives you an unlimited
 * amount of fogs to apply to each map alongside many controls to make the fogs
 * appear more vivid.
 * 
 * A restricted fog area system is also added to this plugin to make fogs
 * appear only within certain regions and/or terrain tags. This way, you can
 * utilize parallaxes as masked layers for obscured sections of the map.
 * 
 * Sometimes, fogs may be too intrusive to the player's visibility. A vignette
 * feature has been added to make fogs appear only on the borders or certain
 * sides of the screen. This way, fogs can still add to the atmosphere without
 * obscuring too much of the visible screen.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Add, change, and/or remove fogs through map notetags.
 * * Lots of customization options for each of the fogs.
 * * Limit where fogs can be displayed on the map through regions and/or
 *   terrain tags to obscure parts of the map.
 * * Use vignettes to obscure sides of the screen without affecting the center.
 * * Use Plugin Commands midway through the game to add, change, fade, and/or
 *   remove fogs as needed.
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Fogs
 * 
 * Fogs are not an inherent feature for the map editor. They need to be added
 * through map notetags or Plugin Commands.
 * 
 * Each of the fogs added through this plugin's notetags and/or commands are
 * assigned an ID. Referring back to the ID later will allow you to update
 * and/or remove that fog when needed.
 * 
 * When fogs are created, they appear above the tile map and characters, but
 * below the weather. This means they are created between the two layers when
 * the map's sprites are generated.
 * 
 * Fogs will behave very similar to parallaxes in how they move about the
 * screen. This means that if a fog is set to looping, it will loop in
 * accordance to the screen's display coordinates. This is to maintain
 * consistency with how the RPG Maker MZ engine behaves.
 *
 * ---
 * 
 * Regions and Terrain Tags
 * 
 * If you don't want a fog to appear for the whole entire foreground and want
 * to confine them to certain areas of the map, you can assign regions or
 * terrain tags for them to appear in.
 * 
 * *NOTE*: This effect does not work on looping maps.
 * 
 * Only the parts of the map marked by the designated regions and/or terrain
 * tags will reveal the fog. Those parts will be little squares each,
 * equal to the size of a tile. They have soft borders due to blurring options.
 * The foggy tiles will be slightly larger than normal due to spill values.
 * 
 * You may notice that some tiles don't blur well when they are towards the
 * right and bottom sides of the screen when the blur values are higher than
 * normal. This is a known issue with Pixi JS's filters and there's not much
 * the VisuStella team can do about it. Instead, what we recommend is that you
 * use a fog vignette on an upper layer to mask the bleeding issue.
 * 
 * Each fog layer can have their own custom regions and/or terrain tags to
 * appear in. These can be adjusted through the notetag settings or through the
 * Plugin Commands provided by this plugin. Fog layers can be limited to
 * multiple regions and/or terrain tags at the same time.
 * 
 * WARNING: This will cause longer load times on larger maps and affect their
 * performance. We highly recommend that you don't use this feature on maps
 * larger than 120 tiles wide or tall. However, this value can vary from device
 * to device.
 * 
 * ---
 * 
 * Vignettes
 * 
 * If you don't want fogs to obscure the whole screen, use a vignette to make
 * them appear only at the sides of the screen. You can use custom vignette
 * masks or rendered ones provided by this plugin.
 * 
 * If you decide to make a custom vignette mask, create them similar to regular
 * image masks. This means that white areas of the masking image will be the
 * parts of the screen where the fog appears while the black areas of the image
 * will hide the fog. You can use gradients to make the vignette mask appear
 * more smooth.
 * 
 * Vignettes cannot be used with region and terrain tags. This is because the
 * region and terrain tag tiles move alongside the screen while vignettes are
 * always locked onto the borders of the screen. However, if you wish to use
 * both, just apply two different fog layers instead.
 * 
 * ---
 * 
 * Not For Battle
 * 
 * For clarification, the VisuStella MZ Visual Fogs plugin is NOT made for
 * battle. There's a separate plugin for that called Visual Battle Environment.
 * The reason why fogs aren't made for battle is because the way fogs are
 * handled in map vary from how they would be handled in battle. Using the
 * Visual Fogs Plugin Commands will only alter the fog appearances when the
 * player finishes battle.
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
 * === Fog-Related Notetags ===
 * 
 * ---
 *
 * <Fog id Settings>
 *  Name: filename
 *  optional property
 *  optional property
 *  optional property
 * </Fog id Settings>
 *
 * - Used for: Map Notetags
 * - Creates a regular fog layer for this map by default.
 * - Replace 'id' with a number value to assign to the fog.
 *   - Plugin Commands will refer to this ID for changes and removal.
 * - The 'Name' setting is required. Without it, no fog will be made.
 *   - Replace 'filename' with the filename of the image you want to use as
 *     a fog found in the game project's img/parallaxes/ folder.
 *   - Do not include the file extension.
 * - Insert as many of the optional properties as you want. You can find a list
 *   of them in the section below.
 *
 * ---
 * 
 * -=-=- Optional Properties -=-=-
 * 
 * Replace the 'optional property' segment of the notetags above with any of
 * the text below to acquire their effects. You can add/remove as many of the
 * optional properties as you need.
 * 
 * ---
 * 
 * Horz Scroll: x
 * Vert Scroll: y
 * 
 * - This enables horizontal or vertical scrolling for the fog.
 * - Replace 'x' or 'y' with a Number value to determine how fast they will
 *   scroll across the screen.
 * - Use a negative value to make them scroll the other way.
 * - These effects are mutually exclusive from the "Map Locked" property.
 * 
 * ---
 * 
 * Map Locked
 * 
 * - This will cause the fog to only scroll when the map scrolls.
 * - This has the same effect as naming a fog with "!" in front of
 *   its filename.
 * - If the filename used for this fog has "!" in front of it, the
 *   Map Locked effect will be automatically turned on.
 * - These effect is mutually exclusive from the "Horz Scroll" and
 *   "Vert Scroll" properties.
 * 
 * ---
 * 
 * Opacity: x
 * Opacity: x%
 * 
 * - Changes the opacity level of the fog.
 * - Replace 'x' with a number from 0 to 255 representing the opacity level.
 * - Replace 'x%' with a percentage from 0% to 100% representing the opacity.
 * 
 * ---
 * 
 * Blend Mode: Normal
 * Blend Mode: Additive
 * Blend Mode: Multiply
 * Blend Mode: Screen
 * 
 * - Sets the blend mode for the icon on the fog.
 * - Use only one of the above.
 * 
 * ---
 * 
 * Hue: x
 * Hue Shift: x
 * 
 * - Changes the hue of the fog to 'x' so that you don't need to create
 *   multiple copies of the files with different colors.
 * - Replace 'x' with a number value between 0 and 360.
 * - If the "Hue Shift" property is also used, then adjust the hue of the
 *   fog each frame by 'x' amount.
 *   - 'x' can be positive or negative.
 * 
 * ---
 * 
 * Color Tone: red, green, blue, gray
 * 
 * - Changes the color tone or tint of the fog.
 * - Replace 'red', 'green', 'blue' with a value between -255 and 255.
 * - Replace 'gray' with a value between 0 and 255.
 * 
 * ---
 * 
 * Region: id
 * Regions: id, id, id
 * 
 * - Forces the fog to only become visible on tiles marked regions with a
 *   matching ID (alongside valid terrain tags).
 * - If this isn't used, then the fog will be as large as the screen.
 * - Replace 'id' with a region ID between 1 and 255.
 *   - Region 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the fog can appear on.
 * - This feature cannot be used with Vignettes.
 * - This feature cannot be used with looping maps.
 * - WARNING: This WILL cause longer load times on larger maps.
 * 
 * ---
 * 
 * Terrain Tag: id
 * Terrain Tags: id, id, id
 * 
 * - Forces the fog to only become visible on tiles marked terrain tags
 *   with a matching ID (alongside valid regions).
 * - If this isn't used, then the fog will be as large as the screen.
 * - Replace 'id' with a terrain tag ID between 1 and 7.
 *   - Terrain tag 0 is ignored and will not work.
 * - Insert multiple ID's to mark more tiles the fog can appear on.
 * - This feature cannot be used with Vignettes.
 * - WARNING: This WILL cause longer load times on larger maps.
 * 
 * ---
 * 
 * Tile Blur: x
 * 
 * - Determines how soft the borders are around the revealed fog tiles.
 * - Use larger numbers to blur them more.
 * - Use a value of zero to remove any blur.
 * 
 * ---
 * 
 * Tile Spill: x
 * 
 * - Determines how much larger to make the revealed fog tiles.
 * - Use larger numbers to spill more and make the tiles larger.
 * - Use a value of zero to not spill at all and use the exact tile sizes.
 * 
 * ---
 * 
 * Vignette: type
 * 
 * - Makes the fog appear along the edge of the screen rather than the entire
 *   visible game screen.
 * - Replace 'type' with any of the following:
 *   - Border
 *   - Horizontal
 *   - Vertical
 *   - Upper
 *   - Lower
 *   - Left
 *   - Right
 * 
 * ---
 * 
 * Custom Vignette: filename
 * 
 * - Allows you to use a custom parallax image as a vignette.
 * - Replace 'filename' with the filename of the image you want to use as
 *   a vignette found in the game project's img/parallaxes/ folder.
 *   - Do not include the file extension.
 * - Custom vignettes are used as masks.
 *   - White areas on the image determine the visible parts of the fog.
 *   - Black areas on the image determine the invisible parts of the fog.
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
 * === Fog Plugin Commands ===
 * 
 * ---
 *
 * Fog: Add/Change Settings
 * - Add/Change settings for target fog.
 * - Does not alter the map editor's fog.
 *
 *   Required:
 *
 *     ID:
 *     - What is the ID of this fog to be added/changed?
 *
 *     Filename:
 *     - What is the filename of the fog?
 * 
 *   Optional Settings:
 * 
 *     Scrolling:
 * 
 *       Map Lock?:
 *       - Lock the fog to the map's scrolling?
 *       - Automatically enable if the filename starts with "!"
 *
 *       Loop Horizontally?:
 *       - Loop the fog horizontally?
 *       - Does not work with Map Lock enabled.
 *
 *         Scroll:
 *         - What is the horizontal scroll speed?
 *         - Use a negative value to invert the direction.
 *
 *       Loop Vertically?:
 *       - Loop the fog vertically?
 *       - Does not work with Map Lock enabled.
 *
 *         Scroll:
 *         - What is the vertical scroll speed?
 *         - Use a negative value to invert the direction.
 * 
 *     Appearance:
 *
 *       Opacity:
 *       - What is the opacity level for this fog?
 *       - You may use JavaScript code.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the fog?
 *       - You may use JavaScript code.
 *         - Normal
 *         - Additive
 *         - Multiply
 *         - Screen
 *
 *       Hue:
 *       - Do you wish to adjust this fog's hue?
 *       - You may use JavaScript code.
 *
 *       Hue Shift:
 *       - How much do you want the hue to shift each frame?
 *       - You may use JavaScript code.
 *
 *       Color Tone:
 *       - What tone do you want for the fog?
 *       - Format: [Red, Green, Blue, Gray]
 * 
 *     Location:
 *
 *       Regions:
 *       - Which regions will show this fog?
 *       - Does not work with 0. Leave empty to ignore.
 *
 *       Terrain Tags:
 *       - Which terrain tags will show this fog?
 *       - Does not work with 0. Leave empty to ignore.
 * 
 *       Tile Blur:
 *       - What's the blur level you wish to use for tiles?
 *       - You may use JavaScript code.
 * 
 *       Tile Spill:
 *       - What's the spill amount you wish to use for tiles?
 *       - You may use JavaScript code.
 * 
 *     Vignette:
 *
 *       Type:
 *       - What vignette do you want to use for this fog?
 *       - This will override location settings.
 * 
 *       Custom:
 *       - Do you wish to use a custom vignette instead?
 *       - Automatically changes the type to "Custom".
 *
 * ---
 * 
 * Fog: Fade Opacity
 * - Fades the target fog(s) opacity to a different value.
 * 
 *   ID(s):
 *   - Target which fog(s)?
 *   - Cannot target the map editor's fog.
 * 
 *   Target Opacity:
 *   - What opacity level to this value (0-255).
 *   - You may use JavaScript code to determine the value.
 * 
 *   Duration:
 *   - How many frames should this change take?
 *   - You may use JavaScript code to determine the value.
 * 
 * ---
 *
 * Fog: Remove
 * - Removes target fog(s).
 *
 *   ID(s):
 *   - Remove which fog(s)?
 *   - Cannot remove the map editor's fog.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Default Settings
 * ============================================================================
 *
 * The below are the default settings when it comes to creating fogs through
 * map notetags.
 *
 * ---
 *
 * Defaults
 * 
 *   Fog Opacity:
 *   - What is the default fog opacity level for map notetags?
 * 
 *   Blend Mode:
 *   - What is the default fog blend mode for map notetags?
 *     - Normal
 *     - Additive
 *     - Multiply
 *     - Screen
 * 
 *   Tile Blur:
 *   - What is the default fog tile blur intensity for map notetags?
 * 
 *   Tile Spill:
 *   - What is the default fog tile spill amount for map notetags?
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
 * Version 1.10: November 16, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.09: August 17, 2023
 * * Bug Fixes!
 * ** Fixed an error that would cause a crash upon using the "Return to Title
 *    Screen" event command with the "Event Title Screen" plugin installed. Fix
 *    made by Irina.
 * 
 * Version 1.08: June 15, 2023
 * * Bug Fixes!
 * ** Fixes a visual bug involving the borders with the zoom animation upon
 *    entering a random encounter. Fix made by Arisu.
 * 
 * Version 1.07: August 4, 2022
 * * Compatibility Update!
 * ** Vignettes now work better with zoom.
 * 
 * Version 1.06: July 7, 2022
 * * Feature Update!
 * ** Blend modes are now revamped for the fogs to behave more like they do for
 *    pictures for better accuracy. Update made by Irina.
 * 
 * Version 1.05: December 9, 2021
 * * Documentation Update!
 * ** Added section to "Major Changes" for clarification purposes:
 * *** Not For Battle
 * *** For clarification, the VisuStella MZ Visual Fogs plugin is NOT made for
 *     battle. There's a separate plugin for that called Visual Battle
 *     Environment. The reason why fogs aren't made for battle is because the
 *     way fogs are handled in map vary from how they would be handled in
 *     battle. Using the Visual Fogs Plugin Commands will only alter the fog
 *     appearances when the player finishes battle.
 * * Feature Update!
 * ** Added fail safes to prevent Plugin Command usage during battle to cause
 *    problems while inside battle test. Update made by Irina.
 * 
 * Version 1.04: June 25, 2021
 * * Compatibility Update
 * ** Added compatibility functionality for Event Title Scene.
 * 
 * Version 1.03: May 28, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.02: May 21, 2021
 * * Documentation Update!
 * ** Added a clause we forgot to mention that region-locked fog effects only
 *    work on maps with no looping. A note will be added to the "Regions and
 *    Terrain Tags" and notetag sections. We apologize for any inconveniences
 *    this may cause.
 * 
 * Version 1.01: May 7, 2021
 * * Bug Fixes!
 * ** Cached vignettes will no longer be cleared from memory. Fix by Irina.
 *
 * Version 1.00 Official Release Date: March 5, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FogAddChangeSettings
 * @text Fog: Add/Change Settings
 * @desc Add/Change settings for target fog.
 * Does not alter the map editor's fog.
 * 
 * @arg Required
 *
 * @arg id:num
 * @text ID
 * @parent Required
 * @type number
 * @min 1
 * @desc What is the ID of this fog to be added/changed?
 * @default 1
 *
 * @arg filename:str
 * @text Filename
 * @parent Required
 * @type file
 * @dir img/parallaxes/
 * @desc What is the filename of the fog?
 * @default >>>ATTENTION<<<
 *
 * @arg Optional:struct
 * @text Optional Settings
 * @type struct<Optional>
 * @desc Optional settings regarding Visual Fogs.
 * @default {"Scrolling":"","_fogZero:eval":"false","_fogLoopX:eval":"false","_fogSx:eval":"+0","_fogLoopY:eval":"false","_fogSy:eval":"+0","Appearance":"","opacity:eval":"200","blendMode:eval":"1","hue:eval":"0","hueShift:eval":"+0","colorTone:eval":"[0, 0, 0, 0]","Location":"","maskRegions:arraynum":"[]","maskTerrainTags:arraynum":"[]","maskBlur:eval":"10","maskSpill:eval":"10","Vignette":"","vignette:str":"None","vignetteFilename:str":""}
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FogFadeOpacity
 * @text Fog: Fade Opacity
 * @desc Fades the target fog(s) opacity to a different value.
 *
 * @arg list:arraynum
 * @text ID(s)
 * @type number[]
 * @min 1
 * @desc Target which fog(s)?
 * Cannot target the map editor's fog.
 * @default ["1"]
 *
 * @arg targetOpacity:eval
 * @text Target Opacity
 * @desc What opacity level to this value (0-255).
 * You may use JavaScript code to determine the value.
 * @default 255
 *
 * @arg opacityDuration:eval
 * @text Duration
 * @desc How many frames should this change take?
 * You may use JavaScript code to determine the value.
 * @default 60
 *
 * @ --------------------------------------------------------------------------
 *
 * @command FogRemove
 * @text Fog: Remove
 * @desc Removes target fog(s).
 *
 * @arg list:arraynum
 * @text ID(s)
 * @type number[]
 * @min 1
 * @desc Remove which fog(s)?
 * Cannot remove the map editor's fog.
 * @default ["1"]
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
 * @param VisualFogs
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Defaults
 *
 * @param FogOpacity:num
 * @text Fog Opacity
 * @parent Defaults
 * @type number
 * @max 255
 * @desc What is the default fog opacity level for map notetags?
 * @default 200
 *
 * @param BlendMode:num
 * @text Blend Mode
 * @parent Defaults
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What is the default fog blend mode for map notetags?
 * @default 1
 *
 * @param MaskBlur:num
 * @text Tile Blur
 * @parent Defaults
 * @type number
 * @desc What is the default fog tile blur intensity for map notetags?
 * @default 10
 *
 * @param MaskSpill:num
 * @text Tile Spill
 * @parent Defaults
 * @type number
 * @desc What is the default fog tile spill amount for map notetags?
 * @default 10
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
 * Optional Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Optional:
 * 
 * @param Scrolling
 * 
 * @param _fogZero:eval
 * @text Map Lock?
 * @parent Scrolling
 * @type boolean
 * @on Map Lock
 * @off No Map Lock
 * @desc Lock the fog to the map's scrolling?
 * Automatically enable if the filename starts with "!"
 * @default false
 * 
 * @param _fogLoopX:eval
 * @text Loop Horizontally?
 * @parent Scrolling
 * @type boolean
 * @on Loop
 * @off No Loop
 * @desc Loop the fog horizontally?
 * Does not work with Map Lock enabled.
 * @default false
 *
 * @param _fogSx:eval
 * @text Scroll:
 * @parent _fogLoopX:eval
 * @desc What is the horizontal scroll speed?
 * Use a negative value to invert the direction.
 * @default +0
 * 
 * @param _fogLoopY:eval
 * @text Loop Vertically?
 * @parent Scrolling
 * @type boolean
 * @on Loop
 * @off No Loop
 * @desc Loop the fog horizontally?
 * Does not work with Map Lock enabled.
 * @default false
 *
 * @param _fogSy:eval
 * @text Scroll:
 * @parent _fogLoopY:eval
 * @desc What is the vertical scroll speed?
 * Use a negative value to invert the direction.
 * @default +0
 * 
 * @param Appearance
 *
 * @param opacity:eval
 * @text Opacity
 * @parent Appearance
 * @desc What is the opacity level for this fog?
 * You may use JavaScript code.
 * @default 200
 *
 * @param blendMode:eval
 * @text Blend Mode
 * @parent Appearance
 * @type select
 * @option 0 - Normal
 * @value 0
 * @option 1 - Additive
 * @value 1
 * @option 2 - Multiply
 * @value 2
 * @option 3 - Screen
 * @value 3
 * @desc What kind of blend mode do you wish to apply to the fog?
 * You may use JavaScript code.
 * @default 1
 *
 * @param hue:eval
 * @text Hue
 * @parent Appearance
 * @desc Do you wish to adjust this fog's hue?
 * You may use JavaScript code.
 * @default 0
 *
 * @param hueShift:eval
 * @text Hue Shift
 * @parent hue:eval
 * @desc How much do you want the hue to shift each frame?
 * You may use JavaScript code.
 * @default +0
 *
 * @param colorTone:eval
 * @text Color Tone
 * @parent Appearance
 * @desc What tone do you want for the fog?
 * Format: [Red, Green, Blue, Gray]
 * @default [0, 0, 0, 0]
 * 
 * @param Location
 *
 * @param maskRegions:arraynum
 * @text Regions
 * @parent Location
 * @type number[]
 * @min 1
 * @max 255
 * @desc Which regions will show this fog?
 * Does not work with 0. Leave empty to ignore.
 * @default []
 *
 * @param maskTerrainTags:arraynum
 * @text Terrain Tags
 * @parent Location
 * @type number[]
 * @min 1
 * @max 7
 * @desc Which terrain tags will show this fog?
 * Does not work with 0. Leave empty to ignore.
 * @default []
 *
 * @param maskBlur:eval
 * @text Tile Blur
 * @parent Location
 * @desc What's the blur level you wish to use for tiles?
 * You may use JavaScript code.
 * @default 10
 *
 * @param maskSpill:eval
 * @text Tile Spill
 * @parent Location
 * @desc What's the spill amount you wish to use for tiles?
 * You may use JavaScript code.
 * @default 10
 * 
 * @param Vignette
 *
 * @param vignette:str
 * @text Type
 * @parent Vignette
 * @type select
 * @option None
 * @option Border
 * @option Horizontal
 * @option Vertical
 * @option Upper
 * @option Lower
 * @option Left
 * @option Right
 * @desc What vignette do you want to use for this fog?
 * This will override location settings.
 * @default None
 *
 * @param vignetteFilename:str
 * @text Custom
 * @parent Vignette
 * @type file
 * @dir img/parallaxes/
 * @desc Do you wish to use a custom vignette instead?
 * Automatically changes the type to "Custom".
 * @default 
 *
 */
//=============================================================================

const _0xb2a519=_0x3f3c;(function(_0x878d65,_0x1994ec){const _0x15a495=_0x3f3c,_0x437eac=_0x878d65();while(!![]){try{const _0x5ed2a7=-parseInt(_0x15a495(0x201))/0x1+parseInt(_0x15a495(0x1ef))/0x2*(parseInt(_0x15a495(0x213))/0x3)+parseInt(_0x15a495(0x2a9))/0x4*(parseInt(_0x15a495(0x285))/0x5)+-parseInt(_0x15a495(0x23d))/0x6+-parseInt(_0x15a495(0x253))/0x7*(parseInt(_0x15a495(0x29a))/0x8)+parseInt(_0x15a495(0x2a5))/0x9*(parseInt(_0x15a495(0x2af))/0xa)+parseInt(_0x15a495(0x229))/0xb;if(_0x5ed2a7===_0x1994ec)break;else _0x437eac['push'](_0x437eac['shift']());}catch(_0x3b253c){_0x437eac['push'](_0x437eac['shift']());}}}(_0x2f90,0xd529b));var label=_0xb2a519(0x212),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0xb2a519(0x23e)](function(_0x39b1b6){const _0xfedd95=_0xb2a519;return _0x39b1b6['status']&&_0x39b1b6[_0xfedd95(0x296)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0xb2a519(0x1de)]=VisuMZ[label]['Settings']||{},VisuMZ[_0xb2a519(0x235)]=function(_0x3d5ebf,_0x1b6817){const _0x5e8dcc=_0xb2a519;for(const _0x17dd01 in _0x1b6817){if(_0x17dd01[_0x5e8dcc(0x292)](/(.*):(.*)/i)){if(_0x5e8dcc(0x1b6)===_0x5e8dcc(0x243))this[_0x5e8dcc(0x1cd)]=0x0,this[_0x5e8dcc(0x21e)]=[0x0,0x0,0x0,0x0],this['_colorFilter']=new _0x1d9d70(),!this['filters']&&(this[_0x5e8dcc(0x20f)]=[]),this['filters'][_0x5e8dcc(0x226)](this[_0x5e8dcc(0x24a)]);else{const _0x2e4900=String(RegExp['$1']),_0x8bb224=String(RegExp['$2'])[_0x5e8dcc(0x284)]()['trim']();let _0x4570a3,_0x1f44b7,_0x5a45bd;switch(_0x8bb224){case _0x5e8dcc(0x255):_0x4570a3=_0x1b6817[_0x17dd01]!==''?Number(_0x1b6817[_0x17dd01]):0x0;break;case _0x5e8dcc(0x2c7):_0x1f44b7=_0x1b6817[_0x17dd01]!==''?JSON[_0x5e8dcc(0x27e)](_0x1b6817[_0x17dd01]):[],_0x4570a3=_0x1f44b7[_0x5e8dcc(0x257)](_0x9a0c4f=>Number(_0x9a0c4f));break;case'EVAL':_0x4570a3=_0x1b6817[_0x17dd01]!==''?eval(_0x1b6817[_0x17dd01]):null;break;case _0x5e8dcc(0x2b5):_0x1f44b7=_0x1b6817[_0x17dd01]!==''?JSON[_0x5e8dcc(0x27e)](_0x1b6817[_0x17dd01]):[],_0x4570a3=_0x1f44b7[_0x5e8dcc(0x257)](_0x1ff2a6=>eval(_0x1ff2a6));break;case _0x5e8dcc(0x286):_0x4570a3=_0x1b6817[_0x17dd01]!==''?JSON['parse'](_0x1b6817[_0x17dd01]):'';break;case'ARRAYJSON':_0x1f44b7=_0x1b6817[_0x17dd01]!==''?JSON[_0x5e8dcc(0x27e)](_0x1b6817[_0x17dd01]):[],_0x4570a3=_0x1f44b7[_0x5e8dcc(0x257)](_0x2011d1=>JSON[_0x5e8dcc(0x27e)](_0x2011d1));break;case _0x5e8dcc(0x248):_0x4570a3=_0x1b6817[_0x17dd01]!==''?new Function(JSON[_0x5e8dcc(0x27e)](_0x1b6817[_0x17dd01])):new Function(_0x5e8dcc(0x21f));break;case'ARRAYFUNC':_0x1f44b7=_0x1b6817[_0x17dd01]!==''?JSON['parse'](_0x1b6817[_0x17dd01]):[],_0x4570a3=_0x1f44b7[_0x5e8dcc(0x257)](_0x261e7e=>new Function(JSON[_0x5e8dcc(0x27e)](_0x261e7e)));break;case _0x5e8dcc(0x276):_0x4570a3=_0x1b6817[_0x17dd01]!==''?String(_0x1b6817[_0x17dd01]):'';break;case _0x5e8dcc(0x241):_0x1f44b7=_0x1b6817[_0x17dd01]!==''?JSON[_0x5e8dcc(0x27e)](_0x1b6817[_0x17dd01]):[],_0x4570a3=_0x1f44b7['map'](_0x1d8f1c=>String(_0x1d8f1c));break;case _0x5e8dcc(0x1d8):_0x5a45bd=_0x1b6817[_0x17dd01]!==''?JSON[_0x5e8dcc(0x27e)](_0x1b6817[_0x17dd01]):{},_0x4570a3=VisuMZ['ConvertParams']({},_0x5a45bd);break;case _0x5e8dcc(0x2ab):_0x1f44b7=_0x1b6817[_0x17dd01]!==''?JSON[_0x5e8dcc(0x27e)](_0x1b6817[_0x17dd01]):[],_0x4570a3=_0x1f44b7[_0x5e8dcc(0x257)](_0x15b27d=>VisuMZ[_0x5e8dcc(0x235)]({},JSON[_0x5e8dcc(0x27e)](_0x15b27d)));break;default:continue;}_0x3d5ebf[_0x2e4900]=_0x4570a3;}}}return _0x3d5ebf;},(_0x12f6b1=>{const _0x327fd5=_0xb2a519,_0x15506b=_0x12f6b1[_0x327fd5(0x205)];for(const _0x49ceee of dependencies){if(!Imported[_0x49ceee]){alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x327fd5(0x24c)](_0x15506b,_0x49ceee)),SceneManager[_0x327fd5(0x1f0)]();break;}}const _0x3dacb3=_0x12f6b1['description'];if(_0x3dacb3[_0x327fd5(0x292)](/\[Version[ ](.*?)\]/i)){const _0x25d164=Number(RegExp['$1']);_0x25d164!==VisuMZ[label][_0x327fd5(0x27d)]&&(alert(_0x327fd5(0x1ec)[_0x327fd5(0x24c)](_0x15506b,_0x25d164)),SceneManager['exit']());}if(_0x3dacb3[_0x327fd5(0x292)](/\[Tier[ ](\d+)\]/i)){const _0x43d588=Number(RegExp['$1']);_0x43d588<tier?(alert(_0x327fd5(0x28b)[_0x327fd5(0x24c)](_0x15506b,_0x43d588,tier)),SceneManager[_0x327fd5(0x1f0)]()):tier=Math[_0x327fd5(0x224)](_0x43d588,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x327fd5(0x1de)],_0x12f6b1[_0x327fd5(0x240)]);})(pluginData),VisuMZ[_0xb2a519(0x212)][_0xb2a519(0x1bf)]=function(){const _0x4ac7a0=_0xb2a519;return{'id':0x0,'filename':'','_fogZero':![],'_fogLoopX':![],'_fogLoopY':![],'_fogSx':0x0,'_fogSy':0x0,'_fogX':0x0,'_fogY':0x0,'opacity':Game_Map[_0x4ac7a0(0x1b7)],'targetOpacity':Game_Map['DEFAULT_FOG_OPACITY'],'opacityDuration':0x0,'blendMode':Game_Map[_0x4ac7a0(0x246)],'hue':0x0,'hueShift':0x0,'colorTone':[0x0,0x0,0x0,0x0],'maskRegions':[],'maskTerrainTags':[],'maskBlur':Game_Map[_0x4ac7a0(0x281)],'maskSpill':Game_Map[_0x4ac7a0(0x279)],'vignette':_0x4ac7a0(0x1e0),'vignetteFilename':''};},PluginManager[_0xb2a519(0x25e)](pluginData[_0xb2a519(0x205)],_0xb2a519(0x2bc),_0xa43c55=>{const _0x5b3bcc=_0xb2a519;VisuMZ[_0x5b3bcc(0x235)](_0xa43c55,_0xa43c55);if(_0xa43c55['id']<=0x0)return;if(_0xa43c55[_0x5b3bcc(0x267)]===''||_0xa43c55[_0x5b3bcc(0x267)]===_0x5b3bcc(0x265))return;let _0x95503a=JsonEx[_0x5b3bcc(0x2a1)](_0xa43c55[_0x5b3bcc(0x245)]);if(!_0x95503a[_0x5b3bcc(0x22e)](_0x5b3bcc(0x1bd)))_0x95503a=VisuMZ[_0x5b3bcc(0x212)][_0x5b3bcc(0x1bf)]();_0x95503a['filename']=_0xa43c55[_0x5b3bcc(0x267)],_0x95503a['id']=_0xa43c55['id'];while(_0x95503a[_0x5b3bcc(0x1e7)][_0x5b3bcc(0x24e)]<0x4){_0x95503a[_0x5b3bcc(0x1e7)][_0x5b3bcc(0x226)](0x0);}_0x95503a[_0x5b3bcc(0x1b2)]=0x0,_0x95503a[_0x5b3bcc(0x1e4)]=0x0,_0x95503a[_0x5b3bcc(0x230)]=_0xa43c55['opacity'],_0x95503a[_0x5b3bcc(0x1b3)]=0x0,_0x95503a[_0x5b3bcc(0x263)]=_0x95503a[_0x5b3bcc(0x263)]||_0x5b3bcc(0x1e0),_0x95503a[_0x5b3bcc(0x263)]=_0x95503a[_0x5b3bcc(0x263)]['toLowerCase']()[_0x5b3bcc(0x27b)](),_0x95503a[_0x5b3bcc(0x1d6)]!==''&&(_0x5b3bcc(0x272)!=='edBPw'?_0x29bf32['_fogLoopX']&&(_0x2efac4[_0x5b3bcc(0x1b2)]+=_0x1f325b):_0x95503a[_0x5b3bcc(0x263)]=_0x5b3bcc(0x2bf)),$gameMap['addChangeVisualFog'](_0x95503a);}),PluginManager[_0xb2a519(0x25e)](pluginData[_0xb2a519(0x205)],_0xb2a519(0x1ab),_0x3863f2=>{const _0x116103=_0xb2a519;if(!SceneManager[_0x116103(0x2a4)]())return;VisuMZ[_0x116103(0x235)](_0x3863f2,_0x3863f2);const _0xf5dc4=_0x3863f2[_0x116103(0x25f)];for(const _0x5c2f7f of _0xf5dc4){const _0x1af022=$gameMap['getVisualFogSettings'](_0x5c2f7f);if(!_0x1af022)continue;_0x1af022[_0x116103(0x230)]=_0x3863f2['targetOpacity']||0x0,_0x1af022[_0x116103(0x1b3)]=_0x3863f2[_0x116103(0x1b3)]||0x0;if(_0x1af022[_0x116103(0x1b3)]<=0x0){if(_0x116103(0x1bb)!==_0x116103(0x1cb))_0x1af022['opacity']=_0x1af022[_0x116103(0x230)];else{const _0x342c6e=_0x4969f4[_0x116103(0x1b3)];_0x4ca0c3[_0x116103(0x273)]=(_0x3aa694[_0x116103(0x273)]*(_0x342c6e-0x1)+_0x4718b8['targetOpacity'])/_0x342c6e,_0x38edb5['opacityDuration']--;}}}}),PluginManager[_0xb2a519(0x25e)](pluginData[_0xb2a519(0x205)],'FogRemove',_0x1ea7c3=>{const _0x3d1c5a=_0xb2a519;if(!SceneManager[_0x3d1c5a(0x2a4)]())return;VisuMZ[_0x3d1c5a(0x235)](_0x1ea7c3,_0x1ea7c3);const _0x4a378a=_0x1ea7c3[_0x3d1c5a(0x25f)];for(const _0x3225e2 of _0x4a378a){'UrBPN'===_0x3d1c5a(0x1ae)?$gameMap[_0x3d1c5a(0x27c)](_0x3225e2):this[_0x3d1c5a(0x211)](this['settings']()[_0x3d1c5a(0x1e7)]);}}),VisuMZ['VisualFogs'][_0xb2a519(0x239)]={'Start':/<(?:FOG)[ ](\d+)[ ](?:SETTING|SETTINGS)>/i,'End':/<\/(?:FOG)[ ](\d+)[ ](?:SETTING|SETTINGS)>/i,'Filename':/(?:FILENAME|NAME):[ ](.*)/i,'HorzLoop':/(?:HORZ|HORIZONTAL) (?:LOOP|SCROLL):[ ](.*)/i,'VertLoop':/(?:VERT|VERTICAL) (?:LOOP|SCROLL):[ ](.*)/i,'ScrollLock':/<(?:MAP|SCROLL)[ ](?:LOCK|LOCKED)>/i,'OpacityRate':/(?:OPACITY):[ ](\d+)([%％])/i,'OpacityFlat':/(?:OPACITY):[ ](\d+)/i,'BlendMode':/BLEND MODE:[ ](.*)/i,'Hue':/HUE:[ ](\d+)/i,'HueShift':/HUE (?:SHIFT|SPEED):[ ](.*)/i,'Tone':/(?:COLOR TONE|TONE|TINT):[ ](.*)/i,'MaskRegions':/(?:REGION|REGIONS):[ ](.*)/i,'MaskTerrainTags':/TERRAIN (?:TAG|TAGS):[ ](.*)/i,'MaskBlur':/(?:TILE BLUR|BLUR):[ ](.*)/i,'MaskSpill':/(?:TILE SPILL|SPILL):[ ](.*)/i,'CustomVignette':/CUSTOM (?:VIGNETTE|OVERLAY):[ ](.*)/i,'PremadeVignette':/(?:VIGNETTE|OVERLAY):[ ](.*)/i},ImageManager[_0xb2a519(0x2ac)]=function(_0x5b4f5c){const _0x5c8e39=_0xb2a519;if(!_0x5b4f5c)return this[_0x5c8e39(0x1b5)]();this['_fogVignettes']=this[_0x5c8e39(0x25b)]||{},_0x5b4f5c=_0x5b4f5c['toLowerCase']()[_0x5c8e39(0x27b)]();const _0x1c2556=_0x5c8e39(0x2c4)[_0x5c8e39(0x24c)](_0x5b4f5c);if(this[_0x5c8e39(0x25b)][_0x5b4f5c])return this[_0x5c8e39(0x25b)][_0x5b4f5c];else{if(this[_0x1c2556]){if(_0x5c8e39(0x1b0)===_0x5c8e39(0x1fa)){if(this[_0x5c8e39(0x25b)][_0x5c8e39(0x2bd)])return this[_0x5c8e39(0x25b)][_0x5c8e39(0x2bd)];const _0x50c05e=new _0x316083(_0x7e016b[_0x5c8e39(0x25d)],_0x522731['height']);return _0x50c05e['fillRect'](0x0,0x0,_0x50c05e[_0x5c8e39(0x25d)],_0x50c05e[_0x5c8e39(0x1c9)],_0x5c8e39(0x1fb)),_0x50c05e[_0x5c8e39(0x238)]=![],this['_fogVignettes']=this[_0x5c8e39(0x25b)]||{},this[_0x5c8e39(0x25b)][_0x5c8e39(0x2bd)]=_0x50c05e,_0x50c05e;}else return this[_0x1c2556]();}else return this['getFogVignette_empty']();}},ImageManager[_0xb2a519(0x1b5)]=function(){const _0x5a077b=_0xb2a519;if(this[_0x5a077b(0x25b)][_0x5a077b(0x2bd)])return this[_0x5a077b(0x25b)][_0x5a077b(0x2bd)];const _0x569015=new Bitmap(Graphics[_0x5a077b(0x25d)],Graphics[_0x5a077b(0x1c9)]);return _0x569015[_0x5a077b(0x209)](0x0,0x0,_0x569015[_0x5a077b(0x25d)],_0x569015[_0x5a077b(0x1c9)],_0x5a077b(0x1fb)),_0x569015[_0x5a077b(0x238)]=![],this[_0x5a077b(0x25b)]=this[_0x5a077b(0x25b)]||{},this[_0x5a077b(0x25b)][_0x5a077b(0x2bd)]=_0x569015,_0x569015;},ImageManager[_0xb2a519(0x275)]=function(){const _0x3fb5fc=_0xb2a519,_0x3ad952=new Bitmap(Graphics[_0x3fb5fc(0x25d)],Graphics[_0x3fb5fc(0x1c9)]),_0x53f396='rgba(0,\x200,\x200,\x200)',_0x230a3a=_0x3fb5fc(0x1fb);return _0x3ad952[_0x3fb5fc(0x256)](0x0,0x0,Graphics[_0x3fb5fc(0x25d)],Math['ceil'](Graphics[_0x3fb5fc(0x1c9)]/0x3),_0x230a3a,_0x53f396,!![]),_0x3ad952[_0x3fb5fc(0x238)]=![],this['_fogVignettes']=this[_0x3fb5fc(0x25b)]||{},this[_0x3fb5fc(0x25b)]['upper']=_0x3ad952,_0x3ad952;},ImageManager[_0xb2a519(0x2c3)]=function(){const _0x40721c=_0xb2a519,_0x42f5fa=new Bitmap(Graphics[_0x40721c(0x25d)],Graphics[_0x40721c(0x1c9)]),_0x17b818=_0x40721c(0x1e9),_0x406505=_0x40721c(0x1fb);return _0x42f5fa[_0x40721c(0x256)](0x0,Math[_0x40721c(0x223)](Graphics[_0x40721c(0x1c9)]*0x2/0x3),Graphics[_0x40721c(0x25d)],Math[_0x40721c(0x223)](Graphics[_0x40721c(0x1c9)]/0x3),_0x17b818,_0x406505,!![]),_0x42f5fa[_0x40721c(0x238)]=![],this[_0x40721c(0x25b)]=this[_0x40721c(0x25b)]||{},this[_0x40721c(0x25b)][_0x40721c(0x262)]=_0x42f5fa,_0x42f5fa;},ImageManager[_0xb2a519(0x210)]=function(){const _0xf9368f=_0xb2a519,_0x12d12f=new Bitmap(Graphics['width'],Graphics[_0xf9368f(0x1c9)]),_0x5bf2e0='rgba(0,\x200,\x200,\x200)',_0x466710='#ffffff';return _0x12d12f['gradientFillRect'](0x0,0x0,Graphics[_0xf9368f(0x25d)],Math[_0xf9368f(0x223)](Graphics['height']/0x3),_0x466710,_0x5bf2e0,!![]),_0x12d12f[_0xf9368f(0x256)](0x0,Math[_0xf9368f(0x223)](Graphics['height']*0x2/0x3),Graphics['width'],Math['ceil'](Graphics[_0xf9368f(0x1c9)]/0x3),_0x5bf2e0,_0x466710,!![]),_0x12d12f[_0xf9368f(0x238)]=![],this[_0xf9368f(0x25b)]=this[_0xf9368f(0x25b)]||{},this['_fogVignettes']['horizontal']=_0x12d12f,_0x12d12f;},ImageManager[_0xb2a519(0x1ed)]=function(){const _0x46794f=_0xb2a519,_0x2bc20e=new Bitmap(Graphics[_0x46794f(0x25d)],Graphics['height']),_0x767acd=_0x46794f(0x1e9),_0x1bcce2='#ffffff';return _0x2bc20e['gradientFillRect'](0x0,0x0,Math[_0x46794f(0x223)](Graphics[_0x46794f(0x25d)]/0x3),Graphics[_0x46794f(0x1c9)],_0x1bcce2,_0x767acd,![]),_0x2bc20e[_0x46794f(0x238)]=![],this[_0x46794f(0x25b)]=this[_0x46794f(0x25b)]||{},this[_0x46794f(0x25b)][_0x46794f(0x274)]=_0x2bc20e,_0x2bc20e;},ImageManager[_0xb2a519(0x1dc)]=function(){const _0x138fc5=_0xb2a519,_0x2daca7=new Bitmap(Graphics[_0x138fc5(0x25d)],Graphics[_0x138fc5(0x1c9)]),_0x303814=_0x138fc5(0x1e9),_0x25423d=_0x138fc5(0x1fb);return _0x2daca7[_0x138fc5(0x256)](Math['ceil'](Graphics[_0x138fc5(0x25d)]*0x2/0x3),0x0,Math['ceil'](Graphics[_0x138fc5(0x25d)]/0x3),Graphics[_0x138fc5(0x1c9)],_0x303814,_0x25423d,![]),_0x2daca7[_0x138fc5(0x238)]=![],this[_0x138fc5(0x25b)]=this[_0x138fc5(0x25b)]||{},this[_0x138fc5(0x25b)][_0x138fc5(0x231)]=_0x2daca7,_0x2daca7;},ImageManager[_0xb2a519(0x1c0)]=function(){const _0x35df31=_0xb2a519,_0x5dbae2=new Bitmap(Graphics['width'],Graphics[_0x35df31(0x1c9)]),_0x593148='rgba(0,\x200,\x200,\x200)',_0xba4ddb=_0x35df31(0x1fb);return _0x5dbae2[_0x35df31(0x256)](0x0,0x0,Math['ceil'](Graphics[_0x35df31(0x25d)]/0x3),Graphics[_0x35df31(0x1c9)],_0xba4ddb,_0x593148,![]),_0x5dbae2['gradientFillRect'](Math['ceil'](Graphics['width']*0x2/0x3),0x0,Math[_0x35df31(0x223)](Graphics[_0x35df31(0x25d)]/0x3),Graphics['height'],_0x593148,_0xba4ddb,![]),_0x5dbae2[_0x35df31(0x238)]=![],this[_0x35df31(0x25b)]=this['_fogVignettes']||{},this['_fogVignettes'][_0x35df31(0x269)]=_0x5dbae2,_0x5dbae2;},ImageManager['getFogVignette_border']=function(){const _0x54410f=_0xb2a519,_0x382c02=new Bitmap(Graphics[_0x54410f(0x25d)],Graphics[_0x54410f(0x1c9)]),_0xa58a9e=_0x54410f(0x1e9),_0x306309='#ffffff';return _0x382c02[_0x54410f(0x256)](0x0,0x0,Graphics[_0x54410f(0x25d)],Math[_0x54410f(0x223)](Graphics[_0x54410f(0x1c9)]/0x3),_0x306309,_0xa58a9e,!![]),_0x382c02[_0x54410f(0x256)](0x0,Math[_0x54410f(0x223)](Graphics[_0x54410f(0x1c9)]*0x2/0x3),Graphics['width'],Math[_0x54410f(0x223)](Graphics[_0x54410f(0x1c9)]/0x3),_0xa58a9e,_0x306309,!![]),_0x382c02[_0x54410f(0x256)](0x0,0x0,Math['ceil'](Graphics['width']/0x3),Graphics['height'],_0x306309,_0xa58a9e,![]),_0x382c02[_0x54410f(0x256)](Math[_0x54410f(0x223)](Graphics[_0x54410f(0x25d)]*0x2/0x3),0x0,Math['ceil'](Graphics[_0x54410f(0x25d)]/0x3),Graphics[_0x54410f(0x1c9)],_0xa58a9e,_0x306309,![]),_0x382c02[_0x54410f(0x238)]=![],this[_0x54410f(0x25b)]=this[_0x54410f(0x25b)]||{},this[_0x54410f(0x25b)][_0x54410f(0x2c6)]=_0x382c02,_0x382c02;},SceneManager[_0xb2a519(0x2a0)]=function(){const _0x2fb938=_0xb2a519;return this['_scene']&&this[_0x2fb938(0x1ba)][_0x2fb938(0x283)]===Scene_Map;},SceneManager[_0xb2a519(0x2a4)]=function(){const _0x33e8bb=_0xb2a519;return this[_0x33e8bb(0x1ba)]&&this[_0x33e8bb(0x1ba)]instanceof Scene_Map;},VisuMZ[_0xb2a519(0x212)]['Game_Map_setup']=Game_Map[_0xb2a519(0x206)]['setup'],Game_Map[_0xb2a519(0x206)][_0xb2a519(0x1ee)]=function(_0x5a344e){const _0x2d99ba=_0xb2a519;VisuMZ[_0x2d99ba(0x212)][_0x2d99ba(0x1db)][_0x2d99ba(0x26b)](this,_0x5a344e),this[_0x2d99ba(0x203)]();},Game_Map[_0xb2a519(0x1b7)]=VisuMZ[_0xb2a519(0x212)][_0xb2a519(0x1de)][_0xb2a519(0x1af)],Game_Map[_0xb2a519(0x246)]=VisuMZ[_0xb2a519(0x212)][_0xb2a519(0x1de)][_0xb2a519(0x2a8)],Game_Map[_0xb2a519(0x281)]=VisuMZ[_0xb2a519(0x212)][_0xb2a519(0x1de)][_0xb2a519(0x2b8)],Game_Map[_0xb2a519(0x279)]=VisuMZ['VisualFogs'][_0xb2a519(0x1de)][_0xb2a519(0x28f)],Game_Map['prototype'][_0xb2a519(0x203)]=function(){const _0x225c10=_0xb2a519;this[_0x225c10(0x208)]=[null];if(!$dataMap)return;const _0x655d99=VisuMZ['VisualFogs'][_0x225c10(0x23b)]();for(const _0x4babf5 of _0x655d99){if(!_0x4babf5)continue;this[_0x225c10(0x208)][_0x4babf5['id']]=_0x4babf5;}},VisuMZ[_0xb2a519(0x212)][_0xb2a519(0x23b)]=function(){const _0x496f5e=_0xb2a519;if(!$dataMap)return[];const _0x33e265=[],_0x241c8c=VisuMZ[_0x496f5e(0x212)][_0x496f5e(0x1bf)]();if(!$dataMap[_0x496f5e(0x1ad)])return[];const _0xea2eb=VisuMZ[_0x496f5e(0x212)]['RegExp'],_0x3f1474=$dataMap[_0x496f5e(0x1ad)]['split'](/[\r\n]+/);let _0x291ddf=JsonEx[_0x496f5e(0x2a1)](_0x241c8c);for(const _0x505dac of _0x3f1474){if(_0x496f5e(0x1f9)==='RAQus'){if(_0x505dac[_0x496f5e(0x292)](_0xea2eb[_0x496f5e(0x1fe)]))_0x291ddf['id']=Number(RegExp['$1']);else{if(_0x505dac[_0x496f5e(0x292)](_0xea2eb[_0x496f5e(0x214)])){if(_0x496f5e(0x252)===_0x496f5e(0x252)){const _0x2f9380=Number(RegExp['$1']);if(_0x2f9380>0x0&&_0x2f9380===_0x291ddf['id']&&_0x291ddf[_0x496f5e(0x267)]!=='')_0x33e265['push'](_0x291ddf);_0x291ddf=JsonEx[_0x496f5e(0x2a1)](_0x241c8c);}else this[_0x496f5e(0x27a)][_0x496f5e(0x290)]=this[_0x496f5e(0x2b2)]()[_0x496f5e(0x290)];}else{if(_0x291ddf['id']<=0x0)continue;}}if(_0x505dac['match'](_0xea2eb['Filename'])){_0x291ddf[_0x496f5e(0x267)]=String(RegExp['$1'])[_0x496f5e(0x27b)]();if(_0x291ddf[_0x496f5e(0x267)]['charAt'](0x0)==='!'){if(_0x496f5e(0x20a)!=='XRKwz'){this[_0x496f5e(0x21a)]['x']=0x0,this[_0x496f5e(0x21a)]['y']=0x0;if(!_0xd1ec62['VisuMZ_4_MapCameraZoom'])return;this[_0x496f5e(0x21a)][_0x496f5e(0x242)]['x']=0x1/_0x296a3e[_0x496f5e(0x236)](),this[_0x496f5e(0x21a)][_0x496f5e(0x242)]['y']=0x1/_0x184586[_0x496f5e(0x236)]();}else _0x291ddf[_0x496f5e(0x2a7)]=!![];}}else{if(_0x505dac[_0x496f5e(0x292)](_0xea2eb['HorzLoop']))_0x496f5e(0x1c2)!==_0x496f5e(0x1c2)?_0x8f3c6c['_fogX']+=this[_0x496f5e(0x22c)]-_0x42457:(_0x291ddf[_0x496f5e(0x1ce)]=!![],_0x291ddf['_fogSx']=Number(RegExp['$1'])||0x0);else{if(_0x505dac['match'](_0xea2eb[_0x496f5e(0x20d)]))_0x291ddf[_0x496f5e(0x1e3)]=!![],_0x291ddf[_0x496f5e(0x22d)]=Number(RegExp['$1'])||0x0;else{if(_0x505dac[_0x496f5e(0x292)](_0xea2eb[_0x496f5e(0x1cc)]))_0x291ddf[_0x496f5e(0x2a7)]=!![];else{if(_0x505dac[_0x496f5e(0x292)](_0xea2eb[_0x496f5e(0x251)])){const _0x2914b2=Number(RegExp['$1'])*0.01;_0x291ddf[_0x496f5e(0x273)]=Math['round'](_0x2914b2*0xff)[_0x496f5e(0x28c)](0x0,0xff);}else{if(_0x505dac[_0x496f5e(0x292)](_0xea2eb[_0x496f5e(0x2b7)]))_0x291ddf[_0x496f5e(0x273)]=Number(RegExp['$1'])[_0x496f5e(0x28c)](0x0,0xff);else{if(_0x505dac[_0x496f5e(0x292)](_0xea2eb['BlendMode'])){const _0x46237f=String(RegExp['$1'])[_0x496f5e(0x284)]()[_0x496f5e(0x27b)](),_0x2fd78f=[_0x496f5e(0x2b1),_0x496f5e(0x25a),_0x496f5e(0x2b6),'SCREEN'];_0x291ddf[_0x496f5e(0x290)]=_0x2fd78f[_0x496f5e(0x2ba)](_0x46237f)['clamp'](0x0,0x3);}else{if(_0x505dac[_0x496f5e(0x292)](_0xea2eb[_0x496f5e(0x1f5)]))_0x291ddf[_0x496f5e(0x221)]=Number(RegExp['$1'])[_0x496f5e(0x28c)](0x0,0x168);else{if(_0x505dac[_0x496f5e(0x292)](_0xea2eb[_0x496f5e(0x1c7)]))_0x291ddf[_0x496f5e(0x1d7)]=Number(RegExp['$1'])||0x0;else{if(_0x505dac[_0x496f5e(0x292)](_0xea2eb['Tone'])){if(_0x496f5e(0x1c8)===_0x496f5e(0x24d)){const _0x55cc70=new _0x738f29(_0x581f22['width'],_0x460d54[_0x496f5e(0x1c9)]),_0x1ea3d4=_0x496f5e(0x1e9),_0x22caa8=_0x496f5e(0x1fb);return _0x55cc70['gradientFillRect'](0x0,0x0,_0x15d89a[_0x496f5e(0x223)](_0x1cba7b[_0x496f5e(0x25d)]/0x3),_0x40f135['height'],_0x22caa8,_0x1ea3d4,![]),_0x55cc70[_0x496f5e(0x256)](_0x44e15a[_0x496f5e(0x223)](_0x38b104[_0x496f5e(0x25d)]*0x2/0x3),0x0,_0x32027f['ceil'](_0x3ca43a[_0x496f5e(0x25d)]/0x3),_0x2a0ba2[_0x496f5e(0x1c9)],_0x1ea3d4,_0x22caa8,![]),_0x55cc70['_customModified']=![],this[_0x496f5e(0x25b)]=this[_0x496f5e(0x25b)]||{},this[_0x496f5e(0x25b)][_0x496f5e(0x269)]=_0x55cc70,_0x55cc70;}else{const _0x1ab40f=String(RegExp['$1'])['split'](',')['map'](_0x35252a=>Number(_0x35252a)||0x0);while(_0x1ab40f[_0x496f5e(0x24e)]<0x4)_0x1ab40f[_0x496f5e(0x226)](0x0);_0x291ddf['colorTone']=_0x1ab40f;}}else{if(_0x505dac[_0x496f5e(0x292)](_0xea2eb['MaskRegions'])){if(_0x496f5e(0x2b4)!==_0x496f5e(0x2b4))this[_0x496f5e(0x264)](_0x5618b4[_0x496f5e(0x297)](_0x1fff48)),this[_0x496f5e(0x27f)]();else{const _0x3047a4=String(RegExp['$1'])[_0x496f5e(0x2a6)](',')[_0x496f5e(0x257)](_0x46c348=>Number(_0x46c348)||0x1);_0x291ddf[_0x496f5e(0x1bd)]=_0x3047a4;}}else{if(_0x505dac['match'](_0xea2eb[_0x496f5e(0x2bb)])){const _0x195b8b=String(RegExp['$1'])[_0x496f5e(0x2a6)](',')[_0x496f5e(0x257)](_0x57fdfc=>Number(_0x57fdfc)||0x1);_0x291ddf[_0x496f5e(0x1f2)]=_0x195b8b;}else{if(_0x505dac[_0x496f5e(0x292)](_0xea2eb[_0x496f5e(0x2b8)]))_0x291ddf[_0x496f5e(0x249)]=Math['max'](Number(RegExp['$1'])||0x0,0x0);else{if(_0x505dac[_0x496f5e(0x292)](_0xea2eb['MaskSpill']))_0x291ddf['maskSpill']=Math[_0x496f5e(0x224)](Number(RegExp['$1'])||0x0,0x0);else{if(_0x505dac[_0x496f5e(0x292)](_0xea2eb[_0x496f5e(0x1cf)]))_0x496f5e(0x1d2)!==_0x496f5e(0x1b4)?(_0x291ddf[_0x496f5e(0x1d6)]=(String(RegExp['$1'])||'')['trim'](),_0x291ddf[_0x496f5e(0x263)]=_0x496f5e(0x2bf)):(this[_0x496f5e(0x1cd)]=_0xae55d4(_0x58c66c),this[_0x496f5e(0x259)]());else _0x505dac['match'](_0xea2eb['PremadeVignette'])&&(_0x291ddf[_0x496f5e(0x263)]=(String(RegExp['$1'])||'')[_0x496f5e(0x24f)]());}}}}}}}}}}}}}}}else _0x29eafc[_0x496f5e(0x1e4)]+=this['_displayY']-_0x77c34c;}return _0x33e265;},Game_Map[_0xb2a519(0x206)]['getVisualFogs']=function(){const _0x25a8f3=_0xb2a519;return this[_0x25a8f3(0x208)]===undefined&&this[_0x25a8f3(0x203)](),this[_0x25a8f3(0x208)]['filter'](_0x481581=>!!_0x481581);},Game_Map[_0xb2a519(0x206)][_0xb2a519(0x297)]=function(_0x3411ed){const _0x5798b7=_0xb2a519;return this[_0x5798b7(0x208)]=this[_0x5798b7(0x208)]||[],this[_0x5798b7(0x208)][_0x3411ed]||null;},Game_Map[_0xb2a519(0x206)][_0xb2a519(0x258)]=function(_0x1544dd){const _0x327939=_0xb2a519,_0x2f4c52=this[_0x327939(0x297)](_0x1544dd);if(_0x2f4c52[_0x327939(0x2a7)])return _0x2f4c52[_0x327939(0x1b2)]*this['tileWidth']();else{if(_0x2f4c52['_fogLoopX']){if(_0x327939(0x295)!=='hbcsB')this[_0x327939(0x20f)]=[];else return _0x2f4c52[_0x327939(0x1b2)]*this[_0x327939(0x288)]()/0x2;}else{if(_0x327939(0x1f4)!==_0x327939(0x1f4)){const _0x779d89=this[_0x327939(0x2b2)]()['maskBlur'];this['_blurFilter'][_0x327939(0x2a3)]=_0x779d89||0.01;}else return 0x0;}}},Game_Map[_0xb2a519(0x206)][_0xb2a519(0x2aa)]=function(_0x19e98c){const _0xd64d57=_0xb2a519,_0x3dbe2b=this[_0xd64d57(0x297)](_0x19e98c);if(_0x3dbe2b['_fogZero']){if(_0xd64d57(0x282)!=='erKRN')return _0x3dbe2b['_fogY']*this[_0xd64d57(0x28a)]();else _0x39d1f5[_0xd64d57(0x1b2)]=_0x51faca;}else{if(_0x3dbe2b['_fogLoopY']){if(_0xd64d57(0x2c8)==='qdITe')return _0x3dbe2b[_0xd64d57(0x1e4)]*this[_0xd64d57(0x28a)]()/0x2;else{const _0x252a19=new _0x5f4f82(_0x1e2837[_0xd64d57(0x25d)],_0x4da27b[_0xd64d57(0x1c9)]),_0x45fcf6=_0xd64d57(0x1e9),_0x3b6997=_0xd64d57(0x1fb);return _0x252a19[_0xd64d57(0x256)](0x0,0x0,_0x40bb65[_0xd64d57(0x25d)],_0x1af6ec['ceil'](_0x38a4e3[_0xd64d57(0x1c9)]/0x3),_0x3b6997,_0x45fcf6,!![]),_0x252a19[_0xd64d57(0x238)]=![],this[_0xd64d57(0x25b)]=this[_0xd64d57(0x25b)]||{},this[_0xd64d57(0x25b)][_0xd64d57(0x268)]=_0x252a19,_0x252a19;}}else{if(_0xd64d57(0x1d3)!==_0xd64d57(0x1d3))_0x54a019=!![];else return 0x0;}}},Game_Map['prototype'][_0xb2a519(0x27c)]=function(_0x1cd998){const _0x572f67=_0xb2a519;this[_0x572f67(0x208)]=this[_0x572f67(0x208)]||[];if(!this[_0x572f67(0x208)][_0x1cd998])return;this[_0x572f67(0x208)][_0x1cd998]=null;const _0x250f96=SceneManager[_0x572f67(0x1ba)][_0x572f67(0x1d9)];_0x250f96&&_0x250f96[_0x572f67(0x1be)](_0x1cd998);},Game_Map[_0xb2a519(0x206)][_0xb2a519(0x1e2)]=function(_0x2c278a){const _0x42a6bb=_0xb2a519,_0x54eb5d=_0x2c278a['id'];let _0x46a15e=![];this[_0x42a6bb(0x208)]=this[_0x42a6bb(0x208)]||[];if(this['_visualFogSettings'][_0x54eb5d]){if('yacMa'!=='nHZEu'){const _0x2a4242=this[_0x42a6bb(0x208)][_0x54eb5d];if(!_0x2a4242[_0x42a6bb(0x1bd)][_0x42a6bb(0x1f7)](_0x2c278a[_0x42a6bb(0x1bd)]))_0x46a15e=!![];else{if(!_0x2a4242['maskTerrainTags'][_0x42a6bb(0x1f7)](_0x2c278a[_0x42a6bb(0x1f2)]))_0x46a15e=!![];else _0x2a4242['vignette']!=='none'&&(_0x46a15e=!![]);}}else{const _0x26b93d=_0x4b1098(_0x5c6543['$1'])[_0x42a6bb(0x284)]()[_0x42a6bb(0x27b)](),_0x3e78e3=['NORMAL',_0x42a6bb(0x25a),_0x42a6bb(0x2b6),_0x42a6bb(0x29e)];_0x5bfaf9[_0x42a6bb(0x290)]=_0x3e78e3[_0x42a6bb(0x2ba)](_0x26b93d)[_0x42a6bb(0x28c)](0x0,0x3);}}this[_0x42a6bb(0x208)][_0x54eb5d]=_0x2c278a;if(!SceneManager[_0x42a6bb(0x2a0)]())return;const _0x5d52c4=SceneManager[_0x42a6bb(0x1ba)][_0x42a6bb(0x1d9)];_0x5d52c4&&(_0x42a6bb(0x28d)!=='QwSjs'?_0x5d52c4['updateVisualFogLayer'](_0x54eb5d,_0x46a15e):_0x362a95['id']=_0x2e2029(_0x3e9ede['$1']));},VisuMZ[_0xb2a519(0x212)][_0xb2a519(0x233)]=Game_Map[_0xb2a519(0x206)][_0xb2a519(0x1fd)],Game_Map['prototype'][_0xb2a519(0x1fd)]=function(_0xbcf9b1,_0x2ebb27){const _0x578b38=_0xb2a519;VisuMZ['VisualFogs'][_0x578b38(0x233)][_0x578b38(0x26b)](this,_0xbcf9b1,_0x2ebb27);for(const _0x2d2e55 of this[_0x578b38(0x1e8)]()){if(_0x578b38(0x26a)!==_0x578b38(0x26a)){const _0x500015=new _0x12410b(_0x3afdd4[_0x578b38(0x25d)],_0x6c74a7[_0x578b38(0x1c9)]),_0x3560da='rgba(0,\x200,\x200,\x200)',_0x12d9ef=_0x578b38(0x1fb);return _0x500015[_0x578b38(0x256)](0x0,0x0,_0x1f144c[_0x578b38(0x25d)],_0x19b82f[_0x578b38(0x223)](_0x36db21[_0x578b38(0x1c9)]/0x3),_0x12d9ef,_0x3560da,!![]),_0x500015[_0x578b38(0x256)](0x0,_0x55d0aa[_0x578b38(0x223)](_0x5d77d0[_0x578b38(0x1c9)]*0x2/0x3),_0x33109a['width'],_0x15e375[_0x578b38(0x223)](_0x43b95b[_0x578b38(0x1c9)]/0x3),_0x3560da,_0x12d9ef,!![]),_0x500015['gradientFillRect'](0x0,0x0,_0x1edac8[_0x578b38(0x223)](_0x750727[_0x578b38(0x25d)]/0x3),_0x18f5ca[_0x578b38(0x1c9)],_0x12d9ef,_0x3560da,![]),_0x500015['gradientFillRect'](_0x45f237[_0x578b38(0x223)](_0x52ba1f[_0x578b38(0x25d)]*0x2/0x3),0x0,_0x44d103[_0x578b38(0x223)](_0x52adb3[_0x578b38(0x25d)]/0x3),_0x6659c1['height'],_0x3560da,_0x12d9ef,![]),_0x500015[_0x578b38(0x238)]=![],this[_0x578b38(0x25b)]=this[_0x578b38(0x25b)]||{},this[_0x578b38(0x25b)][_0x578b38(0x2c6)]=_0x500015,_0x500015;}else{if(!_0x2d2e55)continue;this['isLoopHorizontal']()?_0x2d2e55[_0x578b38(0x1b2)]=_0xbcf9b1:_0x578b38(0x1d0)!==_0x578b38(0x289)?_0x2d2e55[_0x578b38(0x1b2)]=this[_0x578b38(0x22c)]:(_0x111f89(_0x578b38(0x1ec)[_0x578b38(0x24c)](_0x1281fc,_0x239e68)),_0x2bcfea['exit']());if(this[_0x578b38(0x24b)]())_0x578b38(0x270)!==_0x578b38(0x244)?_0x2d2e55[_0x578b38(0x1e4)]=_0x2ebb27:(this[_0x578b38(0x2c2)]['x']=_0x2ac9a8['getVisualFogOx'](this[_0x578b38(0x247)]),this[_0x578b38(0x2c2)]['y']=_0xc1fbaf['getVisualFogOy'](this[_0x578b38(0x247)]));else{if('rhHbp'!==_0x578b38(0x2b9)){if(!_0x2df5c6)return this[_0x578b38(0x1b5)]();this['_fogVignettes']=this[_0x578b38(0x25b)]||{},_0x1aa50a=_0x29c600[_0x578b38(0x24f)]()[_0x578b38(0x27b)]();const _0x388301=_0x578b38(0x2c4)[_0x578b38(0x24c)](_0x54309a);if(this[_0x578b38(0x25b)][_0x5dc232])return this[_0x578b38(0x25b)][_0x1947c4];else return this[_0x388301]?this[_0x388301]():this[_0x578b38(0x1b5)]();}else _0x2d2e55[_0x578b38(0x1e4)]=this['_displayY'];}}}},VisuMZ['VisualFogs']['Game_Map_scrollLeft']=Game_Map[_0xb2a519(0x206)]['scrollLeft'],Game_Map['prototype'][_0xb2a519(0x1f8)]=function(_0x98a3d6){const _0x474dc1=_0xb2a519,_0x416802=this['_displayX'];VisuMZ[_0x474dc1(0x212)][_0x474dc1(0x20e)]['call'](this,_0x98a3d6);for(const _0x44281c of this['getVisualFogs']()){if(!_0x44281c)continue;if(this[_0x474dc1(0x299)]())_0x44281c[_0x474dc1(0x1ce)]&&(_0x44281c[_0x474dc1(0x1b2)]-=_0x98a3d6);else this[_0x474dc1(0x25d)]()>=this[_0x474dc1(0x260)]()&&(_0x474dc1(0x1d1)===_0x474dc1(0x1d1)?_0x44281c[_0x474dc1(0x1b2)]+=this[_0x474dc1(0x22c)]-_0x416802:_0x15801c['_fogY']=_0x23aaad);}},VisuMZ[_0xb2a519(0x212)][_0xb2a519(0x2b0)]=Game_Map[_0xb2a519(0x206)]['scrollRight'],Game_Map[_0xb2a519(0x206)][_0xb2a519(0x22f)]=function(_0x14bd50){const _0x1dc901=_0xb2a519,_0x162d1f=this['_displayX'];VisuMZ[_0x1dc901(0x212)]['Game_Map_scrollRight'][_0x1dc901(0x26b)](this,_0x14bd50);for(const _0x3d7fe0 of this[_0x1dc901(0x1e8)]()){if(!_0x3d7fe0)continue;if(this['isLoopHorizontal']()){if('sYkvY'==='sYkvY')_0x3d7fe0[_0x1dc901(0x1ce)]&&(_0x1dc901(0x1bc)!=='aVoSQ'?_0x3d7fe0[_0x1dc901(0x1b2)]+=_0x14bd50:(this[_0x1dc901(0x21b)]=new _0x284fb5(),this['_baseSprite'][_0x1dc901(0x28e)](this[_0x1dc901(0x21b)]),this[_0x1dc901(0x1eb)]=[null]));else return{'id':0x0,'filename':'','_fogZero':![],'_fogLoopX':![],'_fogLoopY':![],'_fogSx':0x0,'_fogSy':0x0,'_fogX':0x0,'_fogY':0x0,'opacity':_0x297bb5[_0x1dc901(0x1b7)],'targetOpacity':_0x46d891[_0x1dc901(0x1b7)],'opacityDuration':0x0,'blendMode':_0x2cc8d9[_0x1dc901(0x246)],'hue':0x0,'hueShift':0x0,'colorTone':[0x0,0x0,0x0,0x0],'maskRegions':[],'maskTerrainTags':[],'maskBlur':_0x1e7495['DEFAULT_FOG_TILE_BLUR'],'maskSpill':_0x15d16a[_0x1dc901(0x279)],'vignette':'none','vignetteFilename':''};}else this[_0x1dc901(0x25d)]()>=this[_0x1dc901(0x260)]()&&(_0x3d7fe0[_0x1dc901(0x1b2)]+=this[_0x1dc901(0x22c)]-_0x162d1f);}},VisuMZ[_0xb2a519(0x212)]['Game_Map_scrollDown']=Game_Map[_0xb2a519(0x206)][_0xb2a519(0x1f3)],Game_Map['prototype'][_0xb2a519(0x1f3)]=function(_0x234be0){const _0x26f681=_0xb2a519,_0x2d1f24=this[_0x26f681(0x29d)];VisuMZ[_0x26f681(0x212)][_0x26f681(0x280)][_0x26f681(0x26b)](this,_0x234be0);for(const _0x1298cf of this['getVisualFogs']()){if(_0x26f681(0x2c1)!=='Pkzpa'){if(!(_0x23de04 instanceof _0x5f2013))throw new _0x2ea8e7(_0x26f681(0x2c0));!this['_colorTone'][_0x26f681(0x1f7)](_0x2b3396)&&(this[_0x26f681(0x21e)]=_0x586107['clone'](),this['_updateColorFilter']());}else{if(!_0x1298cf)continue;if(this['isLoopVertical']()){if(_0x26f681(0x21c)!==_0x26f681(0x2ad)){if(_0x1298cf[_0x26f681(0x1e3)]){if(_0x26f681(0x1c1)!==_0x26f681(0x23c))_0x1298cf['_fogY']+=_0x234be0;else return this['_scene']&&this['_scene']instanceof _0x40974c;}}else _0x5d06e8[_0x26f681(0x1e7)]['push'](0x0);}else this['height']()>=this[_0x26f681(0x217)]()&&(_0x1298cf[_0x26f681(0x1e4)]+=this['_displayY']-_0x2d1f24);}}},VisuMZ[_0xb2a519(0x212)][_0xb2a519(0x266)]=Game_Map[_0xb2a519(0x206)][_0xb2a519(0x1ea)],Game_Map[_0xb2a519(0x206)][_0xb2a519(0x1ea)]=function(_0x362e88){const _0xdb7e70=_0xb2a519,_0x262ce0=this[_0xdb7e70(0x29d)];VisuMZ['VisualFogs'][_0xdb7e70(0x266)][_0xdb7e70(0x26b)](this,_0x362e88);for(const _0x3a1cc2 of this[_0xdb7e70(0x1e8)]()){if(_0xdb7e70(0x20b)===_0xdb7e70(0x20b)){if(!_0x3a1cc2)continue;if(this['isLoopVertical']())_0x3a1cc2[_0xdb7e70(0x1e3)]&&('IjctR'!==_0xdb7e70(0x26f)?(this[_0xdb7e70(0x21a)]=new _0x3c7bfc(),this[_0xdb7e70(0x215)]()):_0x3a1cc2[_0xdb7e70(0x1e4)]-=_0x362e88);else this[_0xdb7e70(0x1c9)]()>=this[_0xdb7e70(0x217)]()&&(_0x3a1cc2['_fogY']+=this[_0xdb7e70(0x29d)]-_0x262ce0);}else{const _0x1102c8=this[_0xdb7e70(0x1d4)](_0xc995cf);!_0x1102c8?(this['createNewFogLayer'](_0x16ea4d[_0xdb7e70(0x297)](_0x555a41)),this[_0xdb7e70(0x27f)]()):(_0x1102c8[_0xdb7e70(0x1c3)](),_0x5557a4&&_0x1102c8[_0xdb7e70(0x1b8)][_0xdb7e70(0x1da)](_0x1102c8['createMaskBitmap'][_0xdb7e70(0x271)](_0x1102c8)));}}},VisuMZ[_0xb2a519(0x212)][_0xb2a519(0x234)]=Game_Map[_0xb2a519(0x206)]['updateParallax'],Game_Map[_0xb2a519(0x206)][_0xb2a519(0x237)]=function(){const _0x40fdc2=_0xb2a519;VisuMZ[_0x40fdc2(0x212)][_0x40fdc2(0x234)][_0x40fdc2(0x26b)](this);for(const _0x441675 of this[_0x40fdc2(0x1e8)]()){if(_0x40fdc2(0x1c5)!=='bgOfn')this[_0x40fdc2(0x21b)][_0x40fdc2(0x2b3)]['sort']((_0x107ad9,_0x301c81)=>_0x107ad9[_0x40fdc2(0x247)]-_0x301c81[_0x40fdc2(0x247)]);else{if(!_0x441675)continue;this[_0x40fdc2(0x26e)](_0x441675);}}},Game_Map[_0xb2a519(0x206)][_0xb2a519(0x26e)]=function(_0x2c5c2a){const _0x2a3645=_0xb2a519;if(_0x2c5c2a['_fogLoopX']){if(_0x2a3645(0x2c5)!=='gtcmw')_0x2c5c2a[_0x2a3645(0x1b2)]+=_0x2c5c2a[_0x2a3645(0x1ca)]/this[_0x2a3645(0x288)]()/0x2;else{const _0xf20d77=this[_0x2a3645(0x208)][_0x421401];if(!_0xf20d77['maskRegions'][_0x2a3645(0x1f7)](_0x420c01[_0x2a3645(0x1bd)]))_0xe775ce=!![];else{if(!_0xf20d77['maskTerrainTags'][_0x2a3645(0x1f7)](_0x1de5c0[_0x2a3645(0x1f2)]))_0x2057be=!![];else _0xf20d77['vignette']!==_0x2a3645(0x1e0)&&(_0x34f11c=!![]);}}}_0x2c5c2a[_0x2a3645(0x1e3)]&&(_0x2c5c2a[_0x2a3645(0x1e4)]+=_0x2c5c2a['_fogSy']/this[_0x2a3645(0x28a)]()/0x2);_0x2c5c2a[_0x2a3645(0x221)]+=_0x2c5c2a[_0x2a3645(0x1d7)];if(_0x2c5c2a[_0x2a3645(0x1b3)]>0x0){const _0x1d9aad=_0x2c5c2a[_0x2a3645(0x1b3)];_0x2c5c2a['opacity']=(_0x2c5c2a[_0x2a3645(0x273)]*(_0x1d9aad-0x1)+_0x2c5c2a['targetOpacity'])/_0x1d9aad,_0x2c5c2a[_0x2a3645(0x1b3)]--;}};function _0x2f90(){const _0x16ada0=['loadTemplateVignette','setupVisualFogs','createMaskSprite','name','prototype','loadParallax','_visualFogSettings','fillRect','XRKwz','UUEzR','_createColorFilter','VertLoop','Game_Map_scrollLeft','filters','getFogVignette_horizontal','setColorTone','VisualFogs','254373NlHggb','End','createMaskBitmap','xlWOY','screenTileY','PSACl','_blurFilter','_maskSprite','_fogContainer','oNkXB','createMaskTileBitmap','_colorTone','return\x200','bPucg','hue','updateHue','ceil','max','VisuMZ_2_TileGrafterSystem','push','UxNVV','create','34060004rntmrA','VisuMZ_4_MapCameraZoom','setHue','_displayX','_fogSy','hasOwnProperty','scrollRight','targetOpacity','right','ISwRj','Game_Map_setDisplayPos','Game_Map_updateParallax','ConvertParams','zoomScale','updateParallax','_customModified','RegExp','JGPRu','CreateLayerData','jjDky','9323586AsIPUr','filter','BlurFilter','parameters','ARRAYSTR','scale','fkwaQ','MUnAQ','Optional','DEFAULT_FOG_BLEND_MODE','_id','FUNC','maskBlur','_colorFilter','isLoopVertical','format','PLnbC','length','toLowerCase','includes','OpacityRate','IlwDg','349461NEaank','loadCustomVignette','NUM','gradientFillRect','map','getVisualFogOx','_updateColorFilter','ADDITIVE','_fogVignettes','update','width','registerCommand','list','screenTileX','_grafterRefreshRegions','lower','vignette','createNewFogLayer','>>>ATTENTION<<<','Game_Map_scrollUp','filename','upper','vertical','IHlnX','call','XltaL','Spriteset_Map_createWeather','updateVisualFogSettings','IjctR','TIEUz','bind','edBPw','opacity','left','getFogVignette_upper','STR','SpriteMaskFilter','drawMaskTile','DEFAULT_FOG_TILE_SPILL','_maskFilter','trim','removeVisualFog','version','parse','sortVisualFogs','Game_Map_scrollDown','DEFAULT_FOG_TILE_BLUR','JxcRw','constructor','toUpperCase','69915BgNTTf','JSON','updateVisualFogLayer','tileWidth','rqzMP','tileHeight','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','clamp','esTZA','addChild','MaskSpill','blendMode','createFogLayers','match','bNddT','UaSgi','hbcsB','description','getVisualFogSettings','move','isLoopHorizontal','256xACJRO','updateMask','find','_displayY','SCREEN','BHFFK','isSceneMap','makeDeepCopy','floor','blur','isInstanceOfSceneMap','81CRUzje','split','_fogZero','BlendMode','256NYSkBW','getVisualFogOy','ARRAYSTRUCT','getFogVignette','rUCFo','xItcj','60600jLqXoo','Game_Map_scrollRight','NORMAL','settings','children','VVnXn','ARRAYEVAL','MULTIPLY','OpacityFlat','MaskBlur','rhHbp','indexOf','MaskTerrainTags','FogAddChangeSettings','empty','initialize','custom','Argument\x20must\x20be\x20an\x20array','Pkzpa','origin','getFogVignette_lower','getFogVignette_%1','fSSjI','border','ARRAYNUM','qdITe','FogFadeOpacity','updateBlendMode','note','UrBPN','FogOpacity','zRjzl','terrainTag','_fogX','opacityDuration','sZvQC','getFogVignette_empty','rfYJy','DEFAULT_FOG_OPACITY','bitmap','updateOrigin','_scene','hZzEl','fFTju','maskRegions','removeVisualFogLayer','TemplateSettings','getFogVignette_vertical','rozaq','ilRhs','loadBitmap','removeChild','bgOfn','ASioA','HueShift','XLxuR','height','_fogSx','BBWoQ','ScrollLock','_hue','_fogLoopX','CustomVignette','SKMfm','fHhcY','PnDPn','AABrM','findTargetVisualFog','sort','vignetteFilename','hueShift','STRUCT','_spriteset','addLoadListener','Game_Map_setup','getFogVignette_right','updateOpacity','Settings','updateTone','none','sVtcP','addChangeVisualFog','_fogLoopY','_fogY','createFogContainer','oNEUE','colorTone','getVisualFogs','rgba(0,\x200,\x200,\x200)','scrollUp','_fogDataRef','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','getFogVignette_left','setup','34KgZvJD','exit','_fogName','maskTerrainTags','scrollDown','VLZNV','Hue','_baseSprite','equals','scrollLeft','RAQus','UZGFi','#ffffff','displayX','setDisplayPos','Start','displayY','hjTeD','1462681EwRtIp'];_0x2f90=function(){return _0x16ada0;};return _0x2f90();}function _0x3f3c(_0x342a67,_0x4f1dcc){const _0x2f90b8=_0x2f90();return _0x3f3c=function(_0x3f3c6f,_0x4b0480){_0x3f3c6f=_0x3f3c6f-0x1ab;let _0x412fec=_0x2f90b8[_0x3f3c6f];return _0x412fec;},_0x3f3c(_0x342a67,_0x4f1dcc);}function Sprite_VisualFog(){const _0x2ab58a=_0xb2a519;this[_0x2ab58a(0x2be)](...arguments);}Sprite_VisualFog[_0xb2a519(0x206)]=Object[_0xb2a519(0x228)](TilingSprite[_0xb2a519(0x206)]),Sprite_VisualFog[_0xb2a519(0x206)][_0xb2a519(0x283)]=Sprite_VisualFog,Sprite_VisualFog['prototype'][_0xb2a519(0x2be)]=function(_0x336e70){const _0x3e9a2d=_0xb2a519;this[_0x3e9a2d(0x247)]=_0x336e70,TilingSprite[_0x3e9a2d(0x206)]['initialize']['call'](this),this['_createColorFilter'](),this[_0x3e9a2d(0x1c3)](),this[_0x3e9a2d(0x1b8)][_0x3e9a2d(0x1da)](this[_0x3e9a2d(0x204)][_0x3e9a2d(0x271)](this));},Sprite_VisualFog[_0xb2a519(0x206)][_0xb2a519(0x2b2)]=function(){const _0x59689c=_0xb2a519;return $gameMap['getVisualFogSettings'](this[_0x59689c(0x247)]);},Sprite_VisualFog[_0xb2a519(0x206)][_0xb2a519(0x20c)]=function(){const _0x4e76b2=_0xb2a519;this[_0x4e76b2(0x1cd)]=0x0,this[_0x4e76b2(0x21e)]=[0x0,0x0,0x0,0x0],this[_0x4e76b2(0x24a)]=new ColorFilter(),!this[_0x4e76b2(0x20f)]&&(this[_0x4e76b2(0x20f)]=[]),this[_0x4e76b2(0x20f)]['push'](this['_colorFilter']);},Sprite_VisualFog[_0xb2a519(0x206)]['_updateColorFilter']=function(){const _0x2ae078=_0xb2a519;!this[_0x2ae078(0x24a)]&&this[_0x2ae078(0x20c)](),this[_0x2ae078(0x24a)][_0x2ae078(0x22b)](this[_0x2ae078(0x1cd)]),this[_0x2ae078(0x24a)][_0x2ae078(0x211)](this['_colorTone']);},Sprite_VisualFog[_0xb2a519(0x206)][_0xb2a519(0x1c3)]=function(){const _0x519eb4=_0xb2a519;this['_fogName']=this[_0x519eb4(0x2b2)]()['filename'],this[_0x519eb4(0x1b8)]=ImageManager[_0x519eb4(0x207)](this[_0x519eb4(0x1f1)]);},Sprite_VisualFog[_0xb2a519(0x206)][_0xb2a519(0x204)]=function(){const _0xeaa93b=_0xb2a519;this['_maskSprite']=new Sprite(),this[_0xeaa93b(0x215)]();},Sprite_VisualFog['prototype'][_0xb2a519(0x215)]=function(){const _0x5b9c84=_0xb2a519;this['_maskSprite'][_0x5b9c84(0x1b8)]&&this[_0x5b9c84(0x1c4)](this[_0x5b9c84(0x21a)]);const _0x21f63e=this[_0x5b9c84(0x2b2)]()[_0x5b9c84(0x1bd)],_0x3eb63c=this[_0x5b9c84(0x2b2)]()[_0x5b9c84(0x1f2)];if(this[_0x5b9c84(0x2b2)]()[_0x5b9c84(0x263)]===_0x5b9c84(0x2bf))this['loadCustomVignette']();else{if(this[_0x5b9c84(0x2b2)]()[_0x5b9c84(0x263)]!=='none')this[_0x5b9c84(0x202)]();else{if(_0x21f63e['length']>0x0||_0x3eb63c['length']>0x0){if(_0x5b9c84(0x29f)!==_0x5b9c84(0x29f)){const _0x180899=new _0x5dbcdf(_0x5236ee[_0x5b9c84(0x25d)],_0x28bc03[_0x5b9c84(0x1c9)]),_0x3e1732=_0x5b9c84(0x1e9),_0x527f9d=_0x5b9c84(0x1fb);return _0x180899[_0x5b9c84(0x256)](0x0,0x0,_0x643674[_0x5b9c84(0x223)](_0x5a0a86[_0x5b9c84(0x25d)]/0x3),_0x3be518[_0x5b9c84(0x1c9)],_0x527f9d,_0x3e1732,![]),_0x180899[_0x5b9c84(0x238)]=![],this['_fogVignettes']=this[_0x5b9c84(0x25b)]||{},this['_fogVignettes'][_0x5b9c84(0x274)]=_0x180899,_0x180899;}else this[_0x5b9c84(0x21d)]();}else this[_0x5b9c84(0x2b2)]()[_0x5b9c84(0x263)]===_0x5b9c84(0x1e0)&&(_0x5b9c84(0x1e6)!==_0x5b9c84(0x218)?this[_0x5b9c84(0x202)]():(this[_0x5b9c84(0x21a)][_0x5b9c84(0x1b8)][_0x5b9c84(0x209)](_0x3440c5*_0x59e201-_0x28dc80,_0xc74073*_0x36780f-_0x436ec7,_0x67df1f,_0x2f36f2,_0x5b9c84(0x1fb)),_0xa0fd9[_0x5b9c84(0x225)]&&_0x4b38ab[_0x5b9c84(0x250)](_0x21ae26)&&_0x53126c['_scene'][_0x5b9c84(0x261)][_0x5b9c84(0x226)](_0x46d3d7)));}}this['addChild'](this['_maskSprite']),this[_0x5b9c84(0x27a)]=new PIXI[(_0x5b9c84(0x277))](this[_0x5b9c84(0x21a)]),this['filters']['push'](this['_maskFilter']);if(this[_0x5b9c84(0x219)])this[_0x5b9c84(0x20f)]['push'](this[_0x5b9c84(0x219)]);},Sprite_VisualFog['prototype'][_0xb2a519(0x254)]=function(){const _0x41d28f=_0xb2a519,_0x21ae83=this['settings']()[_0x41d28f(0x1d6)];this[_0x41d28f(0x21a)][_0x41d28f(0x1b8)]=ImageManager[_0x41d28f(0x207)](_0x21ae83),this[_0x41d28f(0x21a)][_0x41d28f(0x1b8)][_0x41d28f(0x238)]=![];},Sprite_VisualFog[_0xb2a519(0x206)][_0xb2a519(0x202)]=function(){const _0x2f637c=_0xb2a519,_0x35505d=this['settings']()[_0x2f637c(0x263)];this[_0x2f637c(0x21a)][_0x2f637c(0x1b8)]=ImageManager[_0x2f637c(0x2ac)](_0x35505d);},Sprite_VisualFog[_0xb2a519(0x206)][_0xb2a519(0x21d)]=function(){const _0x7700e=_0xb2a519,_0x3ee9c7=this[_0x7700e(0x2b2)]()['maskRegions'],_0x345ec8=this[_0x7700e(0x2b2)]()['maskTerrainTags'];if(_0x3ee9c7[_0x7700e(0x24e)]<=0x0&&_0x345ec8['length']<=0x0)return;if($gameMap[_0x7700e(0x299)]()||$gameMap[_0x7700e(0x24b)]())return;const _0x374266=$gameMap['width'](),_0x371306=$gameMap[_0x7700e(0x1c9)](),_0x2ddbdc=$gameMap[_0x7700e(0x288)](),_0x199fe9=$gameMap[_0x7700e(0x28a)](),_0x4a2ace=this[_0x7700e(0x2b2)]()['maskSpill'],_0x326f06=_0x2ddbdc+_0x4a2ace*0x2,_0x3fc483=_0x199fe9+_0x4a2ace*0x2;this[_0x7700e(0x21a)][_0x7700e(0x1b8)]=new Bitmap(_0x374266*_0x2ddbdc,_0x371306*_0x199fe9);for(let _0x41ca53=0x0;_0x41ca53<_0x374266;_0x41ca53++){for(let _0x5072db=0x0;_0x5072db<_0x371306;_0x5072db++){if(_0x7700e(0x216)!==_0x7700e(0x294)){const _0x220a56=$gameMap['regionId'](_0x41ca53,_0x5072db);(_0x3ee9c7[_0x7700e(0x250)](_0x220a56)||_0x345ec8['includes']($gameMap[_0x7700e(0x1b1)](_0x41ca53,_0x5072db)))&&('OXIEy'!==_0x7700e(0x200)?(this[_0x7700e(0x21a)][_0x7700e(0x1b8)][_0x7700e(0x209)](_0x41ca53*_0x2ddbdc-_0x4a2ace,_0x5072db*_0x199fe9-_0x4a2ace,_0x326f06,_0x3fc483,_0x7700e(0x1fb)),Imported[_0x7700e(0x225)]&&_0x3ee9c7[_0x7700e(0x250)](_0x220a56)&&SceneManager[_0x7700e(0x1ba)]['_grafterRefreshRegions'][_0x7700e(0x226)](_0x220a56)):_0x16e4b6[_0x7700e(0x2a7)]=!![]);}else this[_0x7700e(0x254)]();}}this[_0x7700e(0x20f)]=[];if(!!PIXI[_0x7700e(0x20f)][_0x7700e(0x23f)]&&!this['_blurFilter']){if('ISwRj'!==_0x7700e(0x232)){const _0x5328bf=this[_0x7700e(0x297)](_0x1dc659);if(_0x5328bf['_fogZero'])return _0x5328bf[_0x7700e(0x1b2)]*this[_0x7700e(0x288)]();else return _0x5328bf[_0x7700e(0x1ce)]?_0x5328bf[_0x7700e(0x1b2)]*this[_0x7700e(0x288)]()/0x2:0x0;}else this[_0x7700e(0x219)]=new PIXI['filters'][(_0x7700e(0x23f))](clamp=!![]);}if(this[_0x7700e(0x219)]){const _0x297f58=this[_0x7700e(0x2b2)]()[_0x7700e(0x249)];this[_0x7700e(0x219)][_0x7700e(0x2a3)]=_0x297f58||0.01;}},Sprite_VisualFog[_0xb2a519(0x206)][_0xb2a519(0x278)]=function(_0x153b0c,_0x1b50b4){},Sprite_VisualFog[_0xb2a519(0x206)]['update']=function(){const _0x47308c=_0xb2a519;TilingSprite[_0x47308c(0x206)][_0x47308c(0x25c)]['call'](this);if(!this[_0x47308c(0x1b8)])return;if(!this[_0x47308c(0x2b2)]())return;this[_0x47308c(0x1dd)](),this[_0x47308c(0x1b9)](),this[_0x47308c(0x1ac)](),this[_0x47308c(0x222)](),this['updateTone'](),this[_0x47308c(0x29b)]();},Sprite_VisualFog[_0xb2a519(0x206)][_0xb2a519(0x1dd)]=function(){const _0x3904c7=_0xb2a519;this[_0x3904c7(0x273)]=this['settings']()['opacity'];},Sprite_VisualFog['prototype'][_0xb2a519(0x1b9)]=function(){const _0x1bb34a=_0xb2a519;this[_0x1bb34a(0x2c2)]['x']=$gameMap['getVisualFogOx'](this[_0x1bb34a(0x247)]),this['origin']['y']=$gameMap[_0x1bb34a(0x2aa)](this[_0x1bb34a(0x247)]);},Sprite_VisualFog[_0xb2a519(0x206)][_0xb2a519(0x1ac)]=function(){const _0x4af2d6=_0xb2a519;this[_0x4af2d6(0x27a)]&&(_0x4af2d6(0x227)===_0x4af2d6(0x227)?this[_0x4af2d6(0x27a)][_0x4af2d6(0x290)]=this[_0x4af2d6(0x2b2)]()[_0x4af2d6(0x290)]:_0x1c01f4['_fogX']+=_0x3f99e5);},Sprite_VisualFog[_0xb2a519(0x206)][_0xb2a519(0x222)]=function(){this['setHue'](this['settings']()['hue']);},Sprite_VisualFog['prototype'][_0xb2a519(0x22b)]=function(_0x5c97b0){const _0x2c0518=_0xb2a519;this[_0x2c0518(0x1cd)]!==Number(_0x5c97b0)&&(this[_0x2c0518(0x1cd)]=Number(_0x5c97b0),this[_0x2c0518(0x259)]());},Sprite_VisualFog['prototype'][_0xb2a519(0x1df)]=function(){this['setColorTone'](this['settings']()['colorTone']);},Sprite_VisualFog[_0xb2a519(0x206)]['setColorTone']=function(_0x11450b){const _0x30da2a=_0xb2a519;if(!(_0x11450b instanceof Array))throw new Error('Argument\x20must\x20be\x20an\x20array');!this[_0x30da2a(0x21e)]['equals'](_0x11450b)&&(this[_0x30da2a(0x21e)]=_0x11450b['clone'](),this[_0x30da2a(0x259)]());},Sprite_VisualFog[_0xb2a519(0x206)][_0xb2a519(0x29b)]=function(){const _0x49a924=_0xb2a519;if(!this[_0x49a924(0x21a)])return;const _0xee70a=this[_0x49a924(0x2b2)]()[_0x49a924(0x1bd)],_0x5249cd=this[_0x49a924(0x2b2)]()[_0x49a924(0x1f2)];if(this[_0x49a924(0x2b2)]()[_0x49a924(0x263)]!==_0x49a924(0x1e0)){if(_0x49a924(0x220)==='bPucg'){this['_maskSprite']['x']=0x0,this[_0x49a924(0x21a)]['y']=0x0;if(!Imported[_0x49a924(0x22a)])return;this[_0x49a924(0x21a)][_0x49a924(0x242)]['x']=0x1/$gameScreen['zoomScale'](),this[_0x49a924(0x21a)][_0x49a924(0x242)]['y']=0x1/$gameScreen[_0x49a924(0x236)]();}else{const _0x1b3ff3=new _0x5d51b7(_0x521351[_0x49a924(0x25d)],_0x365c2a['height']),_0x40af4e='rgba(0,\x200,\x200,\x200)',_0x124dfc=_0x49a924(0x1fb);return _0x1b3ff3['gradientFillRect'](0x0,_0x53a798[_0x49a924(0x223)](_0x3ba39a[_0x49a924(0x1c9)]*0x2/0x3),_0x2e3e94[_0x49a924(0x25d)],_0x1fbb14['ceil'](_0x3303cf['height']/0x3),_0x40af4e,_0x124dfc,!![]),_0x1b3ff3[_0x49a924(0x238)]=![],this[_0x49a924(0x25b)]=this[_0x49a924(0x25b)]||{},this[_0x49a924(0x25b)][_0x49a924(0x262)]=_0x1b3ff3,_0x1b3ff3;}}else{if(_0xee70a['length']>0x0||_0x5249cd[_0x49a924(0x24e)]>0x0)_0x49a924(0x2ae)===_0x49a924(0x1c6)?this[_0x49a924(0x22b)](this['settings']()['hue']):(this[_0x49a924(0x21a)]['x']=Math['floor'](-$gameMap[_0x49a924(0x1fc)]()*$gameMap[_0x49a924(0x288)]()),this[_0x49a924(0x21a)]['y']=Math[_0x49a924(0x2a2)](-$gameMap[_0x49a924(0x1ff)]()*$gameMap[_0x49a924(0x28a)]()),this[_0x49a924(0x21a)][_0x49a924(0x242)]['x']=0x1,this[_0x49a924(0x21a)][_0x49a924(0x242)]['y']=0x1);else this[_0x49a924(0x2b2)]()[_0x49a924(0x263)]===_0x49a924(0x1e0)&&(this[_0x49a924(0x21a)]['x']=0x0,this[_0x49a924(0x21a)]['y']=0x0,this[_0x49a924(0x21a)]['scale']['x']=0x1,this[_0x49a924(0x21a)][_0x49a924(0x242)]['y']=0x1);}},VisuMZ['VisualFogs'][_0xb2a519(0x26d)]=Spriteset_Map[_0xb2a519(0x206)]['createWeather'],Spriteset_Map[_0xb2a519(0x206)]['createWeather']=function(){const _0x548c90=_0xb2a519;this[_0x548c90(0x1e5)](),this['createFogLayers'](),this[_0x548c90(0x27f)](),VisuMZ[_0x548c90(0x212)][_0x548c90(0x26d)][_0x548c90(0x26b)](this);},Spriteset_Map[_0xb2a519(0x206)][_0xb2a519(0x1e5)]=function(){const _0x2fe516=_0xb2a519;this[_0x2fe516(0x21b)]=new Sprite(),this[_0x2fe516(0x1f6)][_0x2fe516(0x28e)](this[_0x2fe516(0x21b)]),this[_0x2fe516(0x1eb)]=[null];},Spriteset_Map[_0xb2a519(0x206)][_0xb2a519(0x291)]=function(){const _0x45503e=_0xb2a519,_0x327819=$gameMap['getVisualFogs']();for(const _0x2e056e of _0x327819){if(_0x45503e(0x293)===_0x45503e(0x26c))return _0x2d019c['_fogY']*this['tileHeight']();else{if(!_0x2e056e)continue;this[_0x45503e(0x264)](_0x2e056e);}}},Spriteset_Map['prototype'][_0xb2a519(0x264)]=function(_0x1e74cb){const _0x3f6ff5=_0xb2a519;if(!_0x1e74cb)return;const _0xe0f83b=new Sprite_VisualFog(_0x1e74cb['id']);_0xe0f83b[_0x3f6ff5(0x298)](0x0,0x0,Graphics[_0x3f6ff5(0x25d)],Graphics[_0x3f6ff5(0x1c9)]),this[_0x3f6ff5(0x21b)][_0x3f6ff5(0x28e)](_0xe0f83b);},Spriteset_Map[_0xb2a519(0x206)][_0xb2a519(0x27f)]=function(){const _0x33301c=_0xb2a519;this[_0x33301c(0x21b)][_0x33301c(0x2b3)][_0x33301c(0x1d5)]((_0x516899,_0x3659f8)=>_0x516899['_id']-_0x3659f8['_id']);},Spriteset_Map[_0xb2a519(0x206)]['findTargetVisualFog']=function(_0x4bc25a){const _0xfdd654=_0xb2a519;return this[_0xfdd654(0x21b)]['children'][_0xfdd654(0x29c)](_0x5debe2=>_0x5debe2[_0xfdd654(0x247)]===_0x4bc25a);},Spriteset_Map[_0xb2a519(0x206)][_0xb2a519(0x1be)]=function(_0x2aed63){const _0x16ec3d=_0xb2a519,_0x4b6fef=this['findTargetVisualFog'](_0x2aed63);_0x4b6fef&&this['_fogContainer'][_0x16ec3d(0x1c4)](_0x4b6fef);},Spriteset_Map[_0xb2a519(0x206)][_0xb2a519(0x287)]=function(_0x239a93,_0x385909){const _0x4d0dd1=_0xb2a519,_0x2daf27=this[_0x4d0dd1(0x1d4)](_0x239a93);!_0x2daf27?(this[_0x4d0dd1(0x264)]($gameMap[_0x4d0dd1(0x297)](_0x239a93)),this[_0x4d0dd1(0x27f)]()):_0x4d0dd1(0x1e1)!==_0x4d0dd1(0x23a)?(_0x2daf27[_0x4d0dd1(0x1c3)](),_0x385909&&_0x2daf27[_0x4d0dd1(0x1b8)][_0x4d0dd1(0x1da)](_0x2daf27[_0x4d0dd1(0x215)][_0x4d0dd1(0x271)](_0x2daf27))):_0x28f551=_0x1f096e[_0x4d0dd1(0x224)](_0x3c0c83,_0x4c99ef);};