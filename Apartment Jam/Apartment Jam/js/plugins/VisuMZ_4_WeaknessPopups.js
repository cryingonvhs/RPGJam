//=============================================================================
// VisuStella MZ - Weakness Popups
// VisuMZ_4_WeaknessPopups.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_WeaknessPopups = true;

var VisuMZ = VisuMZ || {};
VisuMZ.WeaknessPopups = VisuMZ.WeaknessPopups || {};
VisuMZ.WeaknessPopups.version = 1.07;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.07] [WeaknessPopups]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Weakness_Popups_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * When striking enemies with elemental attacks, it's difficult for the player
 * to know at first glance if he or she has hit a weakness or resistance,
 * especially if they are unfamiliar with how much damage the enemy should take
 * normally. This plugin creates popups that appear upon being hit at various
 * elemental rates, from 200% to 101% for Weaknesses, 99% to 1% for resistance,
 * 0% for immunity, and under that for absorption.
 * 
 * Critical hits also gain an extra popup effect to indicate landing a critical
 * hit in case they've missed the extra flash that comes with one by default.
 * This plugin helps relay information to the player in a more visible form.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Create popups that appear in battle whenever battlers take elemental
 *   damage that results in weaknesses, resistances, immunities, or absorption.
 * * Critical hits will also generate popups.
 * * Popups can use images or generate bitmap text on the spot.
 * * Move the popups through various means like scaling and acceleration.
 * * Elemental rates can generate different popups depending on the rate.
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
 * Extra Features
 * ============================================================================
 *
 * There are some extra features found if other VisuStella MZ plugins are found
 * present in the Plugin Manager list.
 *
 * ---
 *
 * VisuMZ_1_BattleCore
 *
 * If you decide to use front view with the VisuStella MZ Battle Core, Weakness
 * Popups will show up for actors above the Battle Status Window. Normally,
 * they would not appear in front view without the Battle Core because normal
 * damage popups don't appear there either.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Popup Settings
 * ============================================================================
 *
 * Popups are created from a similar template. These are used for Critical Hits
 * and Elemental Rates. The Critical Hit popups will only appear once critical
 * hits are applied in battle. Elemental Rate popups will only appear once
 * certain damage thresholds are met through the element rate calculations.
 *
 * ---
 *
 * General
 * 
 *   Enabled:
 *   - Is this popup enabled?
 *
 * ---
 *
 * Custom Image
 * 
 *   Filename:
 *   - Select an image from img/system/ to use as a custom image popup.
 *   - If you use this, ignore the Render settings.
 *
 * ---
 *
 * Render
 * 
 *   Text:
 *   - Type in the text you want displayed for the popup.
 * 
 *   Bitmap Width:
 *   Bitmap Height:
 *   - What is the maximum width/height of this popup?
 * 
 *   Font Name:
 *   - What font do you wish to use for this popup?
 * 
 *   Font Size:
 *   - What's the font size to use for the popup text?
 * 
 *   Bold?:
 *   Italic?
 *   - Do you wish to make the text bold/italic?
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Outline Size:
 *   - What size do you want to use for the outline?
 * 
 *   Outline Color:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 *
 * ---
 *
 * Offset
 * 
 *   Offset: X:
 *   Offset: Y:
 *   - How much do you wish to offset the X/Y position by?
 * 
 *   Variance:
 *   - How much variance should be given to offset X?
 *
 * ---
 *
 * Scale
 * 
 *   Duration:
 *   - How many frames should it take the scaling to reach the target scale?
 * 
 *   Starting Scale: X:
 *   Starting Scale: Y:
 *   - What scale X/Y value should the popup start at?
 * 
 *   Target Scale: X:
 *   Target Scale: Y:
 *   - What scale X/Y value should the popup end at?
 *
 * ---
 *
 * Acceleration
 * 
 *   Starting Speed: X:
 *   Starting Speed: Y:
 *   - How much should the starting X/Y speed of the popup be?
 * 
 *   Delta Speed: X:
 *   Delta Speed: Y:
 *   - How much should the growing X/Y speed of the popup be?
 *
 * ---
 *
 * Fading
 * 
 *   Opaque Duration:
 *   - How many frames should the popup stay opaque?
 * 
 *   Fade Duration:
 *   - After the opaque duration wears off, how many frames will it take for
 *     the popup to vanish?
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
 * Version 1.07: August 17, 2023
 * * Bug Fixes!
 * ** Fixed a problem with certain elemental rates displaying the wrong popup.
 *    Fix made by Irina.
 * 
 * Version 1.06: October 27, 2022
 * * Bug Fixes!
 * ** Fixed a bug where "HP Drain" damage type would not proc weakness popups.
 *    Fix made by Olivia.
 * 
 * Version 1.05: December 30, 2021
 * * Bug Fixes!
 * ** Corrected a bug that caused 0 damage/healing when this plugin is on.
 *    Fix made by Olivia.
 * 
 * Version 1.04: December 23, 2021
 * * Compatibility Update!
 * ** Weakness Popups now ignore the notetags involving caster element damage
 *    when calculating the type of popup to display. Update made by Olivia.
 * 
 * Version 1.03: June 4, 2021
 * * Compatibility Update!
 * ** Added automatic offset for those using UI Areas and Widths with different
 *    values from their screen resolutions once the Action Sequence Camera
 *    plugin is enabled. Update made by Irina.
 * 
 * Version 1.02: March 5, 2021
 * * Bug Fixes!
 * ** Weakness Popups for front view actors will no longer appear at the top
 *    of the screen. Fix made by Irina.
 * ** Weakness Popups will no longer shift positions prior to an actor's status
 *    window positioning anchor. Fix made by Irina.
 * * Documentation Update!
 * ** Added "Extra Features" section for more clarity on what having the Battle
 *    Core enables for Front View games.
 * 
 * Version 1.01: January 1, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** Plugin Parameters for the Popup Settings now have a Variance factor for
 *    Offset X and Offset Y. Added by Yanfly.
 *
 * Version 1.00: November 27, 2020
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
 * @param WeaknessPopups
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param Critical
 *
 * @param Critical:struct
 * @text Critical Popup Settings
 * @parent Critical
 * @type struct<Popup>
 * @desc Settings for the Critical Popup!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"CRITICAL!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"48","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#ec008c","outlineSize:num":"5","outlineColor:str":"rgba(255, 255, 255, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"-25","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.10","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 * 
 * @param Element
 * @text Element Rates
 *
 * @param Element200:struct
 * @text Rate >= 200%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at least 200%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"WEAKNESS!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"48","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#ed1c24","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element175:struct
 * @text Rate >= 175%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at least 150%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"WEAKNESS!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"46","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#ed1c24","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element150:struct
 * @text Rate >= 150%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at least 150%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"WEAKNESS!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"44","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#ed1c24","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element125:struct
 * @text Rate >= 125%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at least 125%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"WEAKNESS!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"42","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#ed1c24","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element110:struct
 * @text Rate >= 110%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at least 110%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"WEAKNESS!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"40","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#ed1c24","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element105:struct
 * @text Rate >= 105%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at least 105%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"WEAKNESS!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"38","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#ed1c24","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element101:struct
 * @text Rate >= 101%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at least 105%!
 * @default {"General":"","enabled:eval":"false","Image":"","filename:str":"","Render":"","text:str":"DISABLED","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"48","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"2","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.10","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element99:struct
 * @text Rate <= 99%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at most 95%!
 * @default {"General":"","enabled:eval":"false","Image":"","filename:str":"","Render":"","text:str":"DISABLED","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"48","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"2","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.10","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element95:struct
 * @text Rate <= 95%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at most 95%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"RESIST!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"38","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#82ca9c","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element90:struct
 * @text Rate <= 90%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at most 90%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"RESIST!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"40","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#82ca9c","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element75:struct
 * @text Rate <= 75%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at most 75%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"RESIST!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"42","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#82ca9c","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element50:struct
 * @text Rate <= 50%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at most 50%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"RESIST!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"44","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#82ca9c","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element25:struct
 * @text Rate <= 25%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is at most 25%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"RESIST!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"46","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#82ca9c","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param Element0:struct
 * @text Rate = 0%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is exactly 0%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"IMMUNE!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"48","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#6dcff6","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
 *
 * @param ElementNegative:struct
 * @text Rate < 0%
 * @parent Element
 * @type struct<Popup>
 * @desc Settings for the Popup when Element Rate is under 0%!
 * @default {"General":"","enabled:eval":"true","Image":"","filename:str":"","Render":"","text:str":"ABSORB!","bitmapWidth:num":"600","bitmapHeight:num":"200","fontFace:str":"Impact","fontSize:num":"48","fontBold:eval":"true","fontItalic:eval":"false","textColor:str":"#bd8cbf","outlineSize:num":"5","outlineColor:str":"rgba(0, 0, 0, 1.0)","Offset":"","offsetX:num":"0","offsetY:num":"0","Scale":"","scaleDuration:num":"20","startScaleX:num":"2.0","startScaleY:num":"2.0","targetScaleX:num":"1.0","targetScaleY:num":"1.0","Acceleration":"","startSpeedX:num":"0","startSpeedY:num":"0","deltaSpeedX:num":"-0.05","deltaSpeedY:num":"0","Fading":"","opaqueDuration:num":"40","fadeDuration:num":"20"}
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
 * Popup Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Popup:
 *
 * @param General
 *
 * @param enabled:eval
 * @text Enabled
 * @parent General
 * @type boolean
 * @on Enabled
 * @off Disabled
 * @desc Is this popup enabled?
 * @default true
 *
 * @param Image
 * @text Custom Image
 *
 * @param filename:str
 * @text Filename
 * @parent Image
 * @type file
 * @dir img/system/
 * @require 1
 * @desc Select an image from img/system/ to use as a custom image
 * popup. If you use this, ignore the Render settings.
 * @default 
 *
 * @param Render
 *
 * @param text:str
 * @text Text
 * @parent Render
 * @desc Type in the text you want displayed for the popup.
 * @default Text!
 *
 * @param bitmapWidth:num
 * @text Bitmap Width
 * @parent Render
 * @type number
 * @min 1
 * @desc What is the maximum width of this popup?
 * @default 600
 *
 * @param bitmapHeight:num
 * @text Bitmap Height
 * @parent Render
 * @type number
 * @min 1
 * @desc What is the maximum height of this popup?
 * @default 200
 *
 * @param fontFace:str
 * @text Font Name
 * @parent Render
 * @desc What font do you wish to use for this popup?
 * @default Impact
 *
 * @param fontSize:num
 * @text Font Size
 * @parent fontFace:str
 * @type number
 * @min 1
 * @desc What's the font size to use for the popup text?
 * @default 48
 *
 * @param fontBold:eval
 * @text Bold?
 * @parent fontFace:str
 * @type boolean
 * @on Bold
 * @off Normal
 * @desc Do you wish to make the text bold?
 * @default true
 *
 * @param fontItalic:eval
 * @text Italic?
 * @parent fontFace:str
 * @type boolean
 * @on Italic
 * @off Normal
 * @desc Do you wish to make the text italic?
 * @default false
 *
 * @param textColor:str
 * @text Text Color
 * @parent Render
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 2
 *
 * @param outlineSize:num
 * @text Outline Size
 * @parent Render
 * @type number
 * @min 0
 * @desc What size do you want to use for the outline?
 * @default 5
 *
 * @param outlineColor:str
 * @text Outline Color
 * @parent outlineSize:num
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1)
 *
 * @param Offset
 *
 * @param offsetX:num
 * @text Offset: X
 * @parent Offset
 * @desc How much do you wish to offset the X position by?
 * @default 0
 *
 * @param offsetXvariance:num
 * @text Variance
 * @type number
 * @parent offsetX:num
 * @desc How much variance should be given to offset X?
 * @default 0
 *
 * @param offsetY:num
 * @text Offset: Y
 * @parent Offset
 * @desc How much do you wish to offset the Y position by?
 * @default 0
 *
 * @param offsetYvariance:num
 * @text Variance
 * @type number
 * @parent offsetY:num
 * @desc How much variance should be given to offset Y?
 * @default 0
 *
 * @param Scale
 *
 * @param scaleDuration:num
 * @text Duration
 * @parent Scale
 * @type number
 * @min 1
 * @desc How many frames should it take the scaling to reach the target scale?
 * @default 20
 *
 * @param startScaleX:num
 * @text Starting Scale: X
 * @parent Scale
 * @desc What scale X value should the popup start at?
 * @default 2.0
 *
 * @param startScaleY:num
 * @text Starting Scale: Y
 * @parent Scale
 * @desc What scale Y value should the popup start at?
 * @default 2.0
 *
 * @param targetScaleX:num
 * @text Target Scale: X
 * @parent Scale
 * @desc What scale X value should the popup end at?
 * @default 1.0
 *
 * @param targetScaleY:num
 * @text Target Scale: Y
 * @parent Scale
 * @desc What scale Y value should the popup end at?
 * @default 1.0
 *
 * @param Acceleration
 *
 * @param startSpeedX:num
 * @text Starting Speed: X
 * @parent Acceleration
 * @desc How much should the starting X speed of the popup be?
 * Negative: Left, Positive: Right
 * @default 0
 *
 * @param startSpeedY:num
 * @text Starting Speed: Y
 * @parent Acceleration
 * @desc How much should the starting Y speed of the popup be?
 * Negative: Up, Positive: Down
 * @default 0
 *
 * @param deltaSpeedX:num
 * @text Delta Speed: X
 * @parent Acceleration
 * @desc How much should the growing X speed of the popup be?
 * Negative: Left, Positive: Right
 * @default -0.10
 *
 * @param deltaSpeedY:num
 * @text Delta Speed: Y
 * @parent Acceleration
 * @desc How much should the growing Y speed of the popup be?
 * Negative: Up, Positive: Down
 * @default 0
 *
 * @param Fading
 *
 * @param opaqueDuration:num
 * @text Opaque Duration
 * @parent Fading
 * @type number
 * @min 1
 * @desc How many frames should the popup stay opaque?
 * @default 40
 *
 * @param fadeDuration:num
 * @text Fade Duration
 * @parent Fading
 * @type number
 * @min 1
 * @desc After the opaque duration wears off, how many frames will
 * it take for the popup to vanish?
 * @default 20
 *
 */
//=============================================================================

function _0x1ad5(_0x31ffec,_0x4c6abb){const _0x5ec30b=_0x5ec3();return _0x1ad5=function(_0x1ad5f7,_0x28e450){_0x1ad5f7=_0x1ad5f7-0x115;let _0x3288c9=_0x5ec30b[_0x1ad5f7];return _0x3288c9;},_0x1ad5(_0x31ffec,_0x4c6abb);}function _0x5ec3(){const _0xec2444=['nastI','ceil','Element50','isDrain','offsetXvariance','format','STRUCT','_speedX','ConvertParams','createWeaknessPopupsForElementRate','loadSystem','Element110','initPosition','enabled','findTargetSprite','Element0','TVxTP','Element25','_baseX','centerFrontViewSprite','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','_spriteset','createBitmapImage','calcElementRate','_battleField','calcUserElementDamageRate','bitmap','targetScaleY','DefaultPopupSettings','status','Spriteset_Battle_createBattleField','TEXT','isActor','_damageContainer','NUM','parameters','_speedY','Critical','outlineColor','bypassUserElementBonus','bitmapHeight','createWeaknessPopupsForCritical','result','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','ARRAYFUNC','drawText','trim','_createDamageContainer','map','anchor','_fadeDuration','20195130IMNPCd','Game_Action_calcUserElementDamageFlat','center','executeDamage','Game_Action_calcUserElementDamageRate','fontFace','offsetX','constructor','_data','version','Game_Action_calcUserElementDamagePlus','WeaknessPopups','textColor','opaqueDuration','12092ltWhKI','getWeaknessPopupData','ARRAYSTRUCT','944032NknCyv','height','initialize','createWeaknessPopupType','2338108BMLPsJ','initMembers','create','fonkT','updateOpacity','ZAxQc','_weaknessPopupsContainer','createWeaknessPopup','getColor','ENWVc','_scaleDuration','Element150','Game_Action_executeDamage','filter','randomInt','loadWeaknessPopupBitmap','createWeaknessPopupsContainer','lHcgy','createWeaknessPopups','bKxwR','273JqmssA','1520396IIgsmv','calcUserElementDamageFlat','createBitmap','JSON','updateScaling','index','_targetScaleX','adjustFlippedBattlefield','xpyBE','TfKwb','XiuQp','ARRAYSTR','prototype','300474mvhkJA','ARRAYJSON','outlineSize','Window_BattleStatus_createDamageContainer','updatePosition','fadeDuration','63AiWSrm','extraPositionX','calcUserElementDamagePlus','AKLmv','VisuMZ_3_ActSeqCamera','startSpeedY','isFlipped','createBattleField','KPHhc','Element75','_targetScaleY','_createWeaknessPopupContainer','name','fontSize','JRLQX','pdpsO','avxbV','Element105','Element95','Spriteset_Battle_adjustFlippedBattlefield','opacity','call','Element90','rgba(1,\x201,\x201,\x201)','kMwPH','addChild','Element125','width','Spriteset_Battle_update','_baseY','#%1','deltaSpeedY','match','filename','_battler','removeChild','isSceneBattle','text','_weaknessPopupContainer','scale','VisuMZ_1_BattleCore','extraPositionY','startScaleX','update','exit','updateWeaknessPopupsContainer','includes','description','135esVebZ','STR','_scene','UrxoV','uIofb','EVAL','toUpperCase','offsetY','parent','parse','9194661XSGNJO','_opaqueDuration','Element175','isSideView','fontItalic','targetScaleX','Settings','ElementNegative','FUNC','boxWidth','oopsy','getWeaknessPopupContainer','VgdTO','critical'];_0x5ec3=function(){return _0xec2444;};return _0x5ec3();}const _0x2ec98c=_0x1ad5;(function(_0x282994,_0x1410d2){const _0x496160=_0x1ad5,_0x5ade7d=_0x282994();while(!![]){try{const _0x43ede7=parseInt(_0x496160(0x13a))/0x1+-parseInt(_0x496160(0x125))/0x2+parseInt(_0x496160(0x139))/0x3*(parseInt(_0x496160(0x11e))/0x4)+parseInt(_0x496160(0x17d))/0x5*(-parseInt(_0x496160(0x147))/0x6)+-parseInt(_0x496160(0x187))/0x7+parseInt(_0x496160(0x121))/0x8*(parseInt(_0x496160(0x14d))/0x9)+parseInt(_0x496160(0x1c8))/0xa;if(_0x43ede7===_0x1410d2)break;else _0x5ade7d['push'](_0x5ade7d['shift']());}catch(_0x1c5fd6){_0x5ade7d['push'](_0x5ade7d['shift']());}}}(_0x5ec3,0xc4db0));var label='WeaknessPopups',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x2ec98c(0x132)](function(_0x506692){const _0x5919e2=_0x2ec98c;return _0x506692[_0x5919e2(0x1b2)]&&_0x506692[_0x5919e2(0x17c)][_0x5919e2(0x17b)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x2ec98c(0x18d)]||{},VisuMZ['ConvertParams']=function(_0x462445,_0x114605){const _0x5bea6a=_0x2ec98c;for(const _0x5c4a56 in _0x114605){if(_0x5c4a56['match'](/(.*):(.*)/i)){if('lmphN'===_0x5bea6a(0x1a5)){const _0x4add0e=_0x590b59[_0x5bea6a(0x11b)][_0x5bea6a(0x18d)];if(!_0x4add0e)return null;return _0x4add0e[_0x49437c];}else{const _0x2de90a=String(RegExp['$1']),_0xfabc56=String(RegExp['$2'])[_0x5bea6a(0x183)]()[_0x5bea6a(0x1c3)]();let _0xa29817,_0x36f9b9,_0x5f3534;switch(_0xfabc56){case _0x5bea6a(0x1b7):_0xa29817=_0x114605[_0x5c4a56]!==''?Number(_0x114605[_0x5c4a56]):0x0;break;case'ARRAYNUM':_0x36f9b9=_0x114605[_0x5c4a56]!==''?JSON[_0x5bea6a(0x186)](_0x114605[_0x5c4a56]):[],_0xa29817=_0x36f9b9['map'](_0x1d2fe0=>Number(_0x1d2fe0));break;case _0x5bea6a(0x182):_0xa29817=_0x114605[_0x5c4a56]!==''?eval(_0x114605[_0x5c4a56]):null;break;case'ARRAYEVAL':_0x36f9b9=_0x114605[_0x5c4a56]!==''?JSON[_0x5bea6a(0x186)](_0x114605[_0x5c4a56]):[],_0xa29817=_0x36f9b9[_0x5bea6a(0x1c5)](_0x59385c=>eval(_0x59385c));break;case _0x5bea6a(0x13d):_0xa29817=_0x114605[_0x5c4a56]!==''?JSON[_0x5bea6a(0x186)](_0x114605[_0x5c4a56]):'';break;case _0x5bea6a(0x148):_0x36f9b9=_0x114605[_0x5c4a56]!==''?JSON[_0x5bea6a(0x186)](_0x114605[_0x5c4a56]):[],_0xa29817=_0x36f9b9[_0x5bea6a(0x1c5)](_0x58d382=>JSON[_0x5bea6a(0x186)](_0x58d382));break;case _0x5bea6a(0x18f):_0xa29817=_0x114605[_0x5c4a56]!==''?new Function(JSON['parse'](_0x114605[_0x5c4a56])):new Function('return\x200');break;case _0x5bea6a(0x1c1):_0x36f9b9=_0x114605[_0x5c4a56]!==''?JSON['parse'](_0x114605[_0x5c4a56]):[],_0xa29817=_0x36f9b9[_0x5bea6a(0x1c5)](_0x5dbb6a=>new Function(JSON[_0x5bea6a(0x186)](_0x5dbb6a)));break;case _0x5bea6a(0x17e):_0xa29817=_0x114605[_0x5c4a56]!==''?String(_0x114605[_0x5c4a56]):'';break;case _0x5bea6a(0x145):_0x36f9b9=_0x114605[_0x5c4a56]!==''?JSON[_0x5bea6a(0x186)](_0x114605[_0x5c4a56]):[],_0xa29817=_0x36f9b9[_0x5bea6a(0x1c5)](_0x179b85=>String(_0x179b85));break;case _0x5bea6a(0x19b):_0x5f3534=_0x114605[_0x5c4a56]!==''?JSON[_0x5bea6a(0x186)](_0x114605[_0x5c4a56]):{},_0xa29817=VisuMZ[_0x5bea6a(0x19d)]({},_0x5f3534);break;case _0x5bea6a(0x120):_0x36f9b9=_0x114605[_0x5c4a56]!==''?JSON[_0x5bea6a(0x186)](_0x114605[_0x5c4a56]):[],_0xa29817=_0x36f9b9['map'](_0x4b6aa8=>VisuMZ[_0x5bea6a(0x19d)]({},JSON['parse'](_0x4b6aa8)));break;default:continue;}_0x462445[_0x2de90a]=_0xa29817;}}}return _0x462445;},(_0x2a71cc=>{const _0x41a6c6=_0x2ec98c,_0x4c21d4=_0x2a71cc[_0x41a6c6(0x159)];for(const _0x28fd62 of dependencies){if(_0x41a6c6(0x12a)===_0x41a6c6(0x12a)){if(!Imported[_0x28fd62]){if(_0x41a6c6(0x191)==='VASKK')_0xe1dd6e['WeaknessPopups'][_0x41a6c6(0x169)]['call'](this),this[_0x41a6c6(0x17a)]();else{alert('%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.'[_0x41a6c6(0x19a)](_0x4c21d4,_0x28fd62)),SceneManager[_0x41a6c6(0x179)]();break;}}}else _0x4d386c[_0x41a6c6(0x146)][_0x41a6c6(0x178)][_0x41a6c6(0x162)](this),this[_0x41a6c6(0x14b)](),this[_0x41a6c6(0x13e)](),this[_0x41a6c6(0x129)]();}const _0x1c7640=_0x2a71cc[_0x41a6c6(0x17c)];if(_0x1c7640[_0x41a6c6(0x16d)](/\[Version[ ](.*?)\]/i)){if(_0x41a6c6(0x165)!==_0x41a6c6(0x142)){const _0x2dd0ad=Number(RegExp['$1']);_0x2dd0ad!==VisuMZ[label][_0x41a6c6(0x119)]&&(alert('%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.'['format'](_0x4c21d4,_0x2dd0ad)),SceneManager[_0x41a6c6(0x179)]());}else _0x6d5849=_0x41a6c6(0x1a4);}if(_0x1c7640[_0x41a6c6(0x16d)](/\[Tier[ ](\d+)\]/i)){const _0x2905df=Number(RegExp['$1']);_0x2905df<tier?(alert(_0x41a6c6(0x1a9)[_0x41a6c6(0x19a)](_0x4c21d4,_0x2905df,tier)),SceneManager[_0x41a6c6(0x179)]()):tier=Math['max'](_0x2905df,tier);}VisuMZ['ConvertParams'](VisuMZ[label][_0x41a6c6(0x18d)],_0x2a71cc[_0x41a6c6(0x1b8)]);})(pluginData),ColorManager[_0x2ec98c(0x12d)]=function(_0x4e5458){const _0x4f61c2=_0x2ec98c;return _0x4e5458=String(_0x4e5458),_0x4e5458[_0x4f61c2(0x16d)](/#(.*)/i)?_0x4f61c2(0x16b)[_0x4f61c2(0x19a)](String(RegExp['$1'])):this[_0x4f61c2(0x11c)](Number(_0x4e5458));},SceneManager[_0x2ec98c(0x171)]=function(){const _0x15690b=_0x2ec98c;return this[_0x15690b(0x17f)]&&this['_scene'][_0x15690b(0x117)]===Scene_Battle;},VisuMZ[_0x2ec98c(0x11b)][_0x2ec98c(0x131)]=Game_Action[_0x2ec98c(0x146)][_0x2ec98c(0x1cb)],Game_Action[_0x2ec98c(0x146)][_0x2ec98c(0x1cb)]=function(_0x171591,_0x444254){const _0x23f149=_0x2ec98c;VisuMZ[_0x23f149(0x11b)][_0x23f149(0x131)][_0x23f149(0x162)](this,_0x171591,_0x444254),this['createWeaknessPopups'](_0x171591,_0x444254);},Game_Action[_0x2ec98c(0x146)][_0x2ec98c(0x137)]=function(_0x35c123,_0x155697){const _0x5765c2=_0x2ec98c;if(!SceneManager[_0x5765c2(0x171)]())return;if(!this['isDamage']()&&!this[_0x5765c2(0x198)]())return;this['createWeaknessPopupsForCritical'](_0x35c123,_0x155697),this[_0x5765c2(0x19e)](_0x35c123,_0x155697);},Game_Action[_0x2ec98c(0x146)][_0x2ec98c(0x1be)]=function(_0xdfefaa,_0x436b59){const _0xd7a58a=_0x2ec98c,_0x26a40a=_0xdfefaa[_0xd7a58a(0x1bf)]();if(!_0x26a40a[_0xd7a58a(0x194)])return;const _0x3f25b1=SceneManager['_scene'][_0xd7a58a(0x1aa)];if(!_0x3f25b1)return;_0x3f25b1['createWeaknessPopupType'](_0xdfefaa,_0xd7a58a(0x1ba));},Game_Action[_0x2ec98c(0x146)][_0x2ec98c(0x19e)]=function(_0x440c46,_0x3aad3f){const _0x3b2c92=_0x2ec98c,_0x577119=SceneManager[_0x3b2c92(0x17f)][_0x3b2c92(0x1aa)];if(!_0x577119)return;$gameTemp[_0x3b2c92(0x1bc)]=!![];const _0x3f6ac9=this[_0x3b2c92(0x1ac)](_0x440c46);$gameTemp[_0x3b2c92(0x1bc)]=![];let _0x51cfb9='none';if(_0x3f6ac9===0x0)_0x51cfb9=_0x3b2c92(0x1a4);else{if(_0x3f6ac9<0x0)_0x51cfb9=_0x3b2c92(0x18e);else{if(_0x3f6ac9>=0x2)_0x51cfb9='Element200';else{if(_0x3f6ac9>=1.75)_0x51cfb9=_0x3b2c92(0x189);else{if(_0x3f6ac9>=1.5)_0x3b2c92(0x144)!=='XiuQp'?_0x54b4f1=_0x3b2c92(0x1a6):_0x51cfb9=_0x3b2c92(0x130);else{if(_0x3f6ac9>=1.25)_0x51cfb9=_0x3b2c92(0x167);else{if(_0x3f6ac9>=1.1)_0x51cfb9=_0x3b2c92(0x1a0);else{if(_0x3f6ac9>=1.05)_0x3b2c92(0x136)===_0x3b2c92(0x138)?(this[_0x3b2c92(0x16f)]=_0x9d1a24,this[_0x3b2c92(0x118)]=_0xe1a705,this[_0x3b2c92(0x126)](),_0x458a6a[_0x3b2c92(0x146)][_0x3b2c92(0x123)][_0x3b2c92(0x162)](this),this['createBitmap'](),this[_0x3b2c92(0x1a1)]()):_0x51cfb9=_0x3b2c92(0x15e);else{if(_0x3f6ac9>=1.01)_0x51cfb9='Element101';else{if(_0x3f6ac9<=0.25){if(_0x3b2c92(0x128)!=='fonkT'){_0x56c598['WeaknessPopups']['Spriteset_Battle_adjustFlippedBattlefield']['call'](this);!this['_weaknessPopupsContainer']&&this['createWeaknessPopupsContainer']();if(!this[_0x3b2c92(0x153)]())return;this['_weaknessPopupsContainer'][_0x3b2c92(0x174)]['x']=-0x1,this['_weaknessPopupsContainer']['x']=this['_battleField']['x']+this[_0x3b2c92(0x1ad)]['width'];}else _0x51cfb9=_0x3b2c92(0x1a6);}else{if(_0x3f6ac9<=0.5)_0x51cfb9=_0x3b2c92(0x197);else{if(_0x3f6ac9<=0.75)_0x3b2c92(0x12e)!==_0x3b2c92(0x180)?_0x51cfb9=_0x3b2c92(0x156):(this[_0x3b2c92(0x174)]['x']=0x1,this[_0x3b2c92(0x174)]['y']=0x1);else{if(_0x3f6ac9<=0.9)_0x51cfb9=_0x3b2c92(0x163);else{if(_0x3f6ac9<=0.95)_0x3b2c92(0x15b)===_0x3b2c92(0x15b)?_0x51cfb9=_0x3b2c92(0x15f):_0x399851=_0x3b2c92(0x15f);else _0x3f6ac9<=0.99&&(_0x3b2c92(0x150)!==_0x3b2c92(0x150)?(_0x4c52cc(_0x3b2c92(0x1c0)[_0x3b2c92(0x19a)](_0x3fe092,_0x4a410e)),_0xd1faa5[_0x3b2c92(0x179)]()):_0x51cfb9='Element99');}}}}}}}}}}}}}_0x577119[_0x3b2c92(0x124)](_0x440c46,_0x51cfb9);},VisuMZ[_0x2ec98c(0x11b)][_0x2ec98c(0x11a)]=Game_Action[_0x2ec98c(0x146)][_0x2ec98c(0x14f)],Game_Action['prototype'][_0x2ec98c(0x14f)]=function(_0x2f15fd,_0xcea2d6){const _0x11c89e=_0x2ec98c;if($gameTemp[_0x11c89e(0x1bc)])return 0x0;return VisuMZ['WeaknessPopups']['Game_Action_calcUserElementDamagePlus']['call'](this,_0x2f15fd,_0xcea2d6);},VisuMZ[_0x2ec98c(0x11b)][_0x2ec98c(0x1cc)]=Game_Action['prototype'][_0x2ec98c(0x1ae)],Game_Action[_0x2ec98c(0x146)][_0x2ec98c(0x1ae)]=function(_0x27d590,_0x596f42){const _0x26fc15=_0x2ec98c;if($gameTemp[_0x26fc15(0x1bc)])return 0x1;return VisuMZ[_0x26fc15(0x11b)][_0x26fc15(0x1cc)][_0x26fc15(0x162)](this,_0x27d590,_0x596f42);},VisuMZ['WeaknessPopups']['Game_Action_calcUserElementDamageFlat']=Game_Action[_0x2ec98c(0x146)][_0x2ec98c(0x13b)],Game_Action[_0x2ec98c(0x146)]['calcUserElementDamageFlat']=function(_0x1ba073,_0x188628){const _0x19609f=_0x2ec98c;if($gameTemp[_0x19609f(0x1bc)])return 0x0;return VisuMZ[_0x19609f(0x11b)][_0x19609f(0x1c9)][_0x19609f(0x162)](this,_0x1ba073,_0x188628);};function Sprite_WeaknessPopup(){const _0x46fdbc=_0x2ec98c;this[_0x46fdbc(0x123)](...arguments);}Sprite_WeaknessPopup[_0x2ec98c(0x146)]=Object[_0x2ec98c(0x127)](Sprite[_0x2ec98c(0x146)]),Sprite_WeaknessPopup[_0x2ec98c(0x146)][_0x2ec98c(0x117)]=Sprite_WeaknessPopup,Sprite_WeaknessPopup[_0x2ec98c(0x146)]['initialize']=function(_0x44a844,_0x4b2c48){const _0x3dbaa6=_0x2ec98c;this[_0x3dbaa6(0x16f)]=_0x44a844,this[_0x3dbaa6(0x118)]=_0x4b2c48,this[_0x3dbaa6(0x126)](),Sprite[_0x3dbaa6(0x146)][_0x3dbaa6(0x123)][_0x3dbaa6(0x162)](this),this['createBitmap'](),this[_0x3dbaa6(0x1a1)]();},Sprite_WeaknessPopup[_0x2ec98c(0x146)][_0x2ec98c(0x13c)]=function(){const _0x568973=_0x2ec98c;if(this[_0x568973(0x118)][_0x568973(0x16e)]){if(_0x568973(0x181)!==_0x568973(0x15d))this[_0x568973(0x134)]();else{if(_0x73560d['bypassUserElementBonus'])return 0x0;return _0x173bb2[_0x568973(0x11b)]['Game_Action_calcUserElementDamageFlat']['call'](this,_0x2b63ff,_0x3afbe8);}}else this[_0x568973(0x1ab)]();},Sprite_WeaknessPopup[_0x2ec98c(0x146)][_0x2ec98c(0x134)]=function(){const _0x5c7730=_0x2ec98c;this[_0x5c7730(0x1af)]=ImageManager[_0x5c7730(0x19f)](this[_0x5c7730(0x118)][_0x5c7730(0x16e)]);},Sprite_WeaknessPopup[_0x2ec98c(0x146)][_0x2ec98c(0x1ab)]=function(){const _0x5718fd=_0x2ec98c;this[_0x5718fd(0x1af)]=new Bitmap(this['_data']['bitmapWidth'],this['_data'][_0x5718fd(0x1bd)]),this['bitmap'][_0x5718fd(0x115)]=this[_0x5718fd(0x118)][_0x5718fd(0x115)],this['bitmap']['fontSize']=this['_data'][_0x5718fd(0x15a)],this[_0x5718fd(0x1af)]['fontBold']=this[_0x5718fd(0x118)]['fontBold'],this[_0x5718fd(0x1af)][_0x5718fd(0x18b)]=this[_0x5718fd(0x118)]['fontItalic'],this[_0x5718fd(0x1af)]['textColor']=ColorManager['getColor'](this[_0x5718fd(0x118)][_0x5718fd(0x11c)]),this['bitmap'][_0x5718fd(0x149)]=this[_0x5718fd(0x118)]['outlineSize'],this[_0x5718fd(0x1af)][_0x5718fd(0x1bb)]=this[_0x5718fd(0x118)][_0x5718fd(0x1bb)],this['bitmap'][_0x5718fd(0x1c2)](this[_0x5718fd(0x118)][_0x5718fd(0x172)],0x0,0x0,this[_0x5718fd(0x1af)]['width'],this[_0x5718fd(0x1af)][_0x5718fd(0x122)],_0x5718fd(0x1ca));},Sprite_WeaknessPopup[_0x2ec98c(0x146)]['initMembers']=function(){const _0x3af880=_0x2ec98c;this['_speedX']=this[_0x3af880(0x118)]['startSpeedX'],this[_0x3af880(0x1b9)]=this[_0x3af880(0x118)][_0x3af880(0x152)],this['_opaqueDuration']=this[_0x3af880(0x118)][_0x3af880(0x11d)],this[_0x3af880(0x1c7)]=this[_0x3af880(0x118)][_0x3af880(0x14c)],this[_0x3af880(0x12f)]=this[_0x3af880(0x118)]['scaleDuration'];},Sprite_WeaknessPopup[_0x2ec98c(0x146)][_0x2ec98c(0x1a1)]=function(){const _0x16bf8e=_0x2ec98c,_0x2a545d=SceneManager[_0x16bf8e(0x17f)]['_statusWindow'];if(!$gameSystem[_0x16bf8e(0x18a)]()&&this['_battler']['_battler']['isActor']()){if(Imported[_0x16bf8e(0x175)]){if(_0x16bf8e(0x143)===_0x16bf8e(0x143))_0x2a545d[_0x16bf8e(0x1a8)](this[_0x16bf8e(0x16f)]['_battler'][_0x16bf8e(0x13f)]());else return _0x435a15=_0x3ba54f(_0x740911),_0x4ac524['match'](/#(.*)/i)?_0x16bf8e(0x16b)[_0x16bf8e(0x19a)](_0x4299ad(_0x14ae7d['$1'])):this[_0x16bf8e(0x11c)](_0x4ff82e(_0x248e73));}}this['x']=this[_0x16bf8e(0x16f)][_0x16bf8e(0x1a7)]??this[_0x16bf8e(0x16f)]['x'],this['x']+=this['_data'][_0x16bf8e(0x116)],this['y']=this[_0x16bf8e(0x16f)][_0x16bf8e(0x16a)]??this[_0x16bf8e(0x16f)]['y'],this['y']-=this['_battler']['height']*this[_0x16bf8e(0x16f)][_0x16bf8e(0x174)]['y'],this['y']+=this['_data'][_0x16bf8e(0x184)];if(Imported[_0x16bf8e(0x175)]&&VisuMZ['BattleCore']['version']>=1.38){if(_0x16bf8e(0x15c)===_0x16bf8e(0x15c)){this['x']+=this[_0x16bf8e(0x16f)][_0x16bf8e(0x14e)]();const _0x4d682c=this[_0x16bf8e(0x16f)]['_distortionSprite'][_0x16bf8e(0x174)]['y'];this['y']+=this[_0x16bf8e(0x16f)][_0x16bf8e(0x176)]();}else this['createWeaknessPopupsContainer']();}const _0x185fc8=this[_0x16bf8e(0x118)][_0x16bf8e(0x199)]||0x0,_0x5dbe25=this['_data']['offsetYvariance']||0x0;this['x']+=Math[_0x16bf8e(0x133)](_0x185fc8*0x2)-_0x185fc8,this['y']+=Math['randomInt'](_0x5dbe25*0x2)-_0x5dbe25,this[_0x16bf8e(0x1c6)]['x']=0.5,this[_0x16bf8e(0x1c6)]['y']=0.5,this['scale']['x']=this[_0x16bf8e(0x118)][_0x16bf8e(0x177)],this[_0x16bf8e(0x174)]['y']=this[_0x16bf8e(0x118)]['startScaleY'],this[_0x16bf8e(0x140)]=this[_0x16bf8e(0x118)][_0x16bf8e(0x18c)],this[_0x16bf8e(0x157)]=this[_0x16bf8e(0x118)][_0x16bf8e(0x1b0)];},Sprite_WeaknessPopup['prototype']['update']=function(){const _0x2a45de=_0x2ec98c;Sprite['prototype']['update'][_0x2a45de(0x162)](this),this['updatePosition'](),this[_0x2a45de(0x13e)](),this['updateOpacity']();},Sprite_WeaknessPopup[_0x2ec98c(0x146)][_0x2ec98c(0x14b)]=function(){const _0x54be73=_0x2ec98c;this['x']+=this[_0x54be73(0x19c)],this['y']+=this[_0x54be73(0x1b9)],this[_0x54be73(0x19c)]+=this['_data']['deltaSpeedX'],this[_0x54be73(0x1b9)]+=this[_0x54be73(0x118)][_0x54be73(0x16c)];},Sprite_WeaknessPopup[_0x2ec98c(0x146)][_0x2ec98c(0x13e)]=function(){const _0x23ef2b=_0x2ec98c;if(this[_0x23ef2b(0x12f)]>0x0){if(_0x23ef2b(0x155)==='KPHhc'){const _0x5f209b=this[_0x23ef2b(0x12f)];this['scale']['x']=(this['scale']['x']*(_0x5f209b-0x1)+this[_0x23ef2b(0x140)])/_0x5f209b,this[_0x23ef2b(0x174)]['y']=(this[_0x23ef2b(0x174)]['y']*(_0x5f209b-0x1)+this[_0x23ef2b(0x157)])/_0x5f209b,this[_0x23ef2b(0x12f)]--;}else{if(_0x1a1d49[_0x23ef2b(0x1bc)])return 0x1;return _0xab4d4d[_0x23ef2b(0x11b)][_0x23ef2b(0x1cc)][_0x23ef2b(0x162)](this,_0x376ab6,_0x4617e1);}}else this[_0x23ef2b(0x174)]['x']=0x1,this[_0x23ef2b(0x174)]['y']=0x1;},Sprite_WeaknessPopup['prototype'][_0x2ec98c(0x129)]=function(){const _0xf76ce9=_0x2ec98c;if(this[_0xf76ce9(0x188)]-->0x0)return;if(this[_0xf76ce9(0x1c7)]>0x0){const _0x9999ab=this[_0xf76ce9(0x1c7)];this[_0xf76ce9(0x161)]=(this[_0xf76ce9(0x161)]*(_0x9999ab-0x1)+0x0)/_0x9999ab,this[_0xf76ce9(0x1c7)]--;}else{const _0x40648c=this[_0xf76ce9(0x185)];_0x40648c&&(_0xf76ce9(0x195)===_0xf76ce9(0x193)?(_0x90c9a0[_0xf76ce9(0x11b)][_0xf76ce9(0x131)][_0xf76ce9(0x162)](this,_0xa1528e,_0x550c09),this[_0xf76ce9(0x137)](_0x1684c3,_0x2fe2ef)):(_0x40648c[_0xf76ce9(0x170)](this),this['destroy']()));}},VisuMZ['WeaknessPopups']['Spriteset_Battle_createBattleField']=Spriteset_Battle[_0x2ec98c(0x146)][_0x2ec98c(0x154)],Spriteset_Battle[_0x2ec98c(0x146)][_0x2ec98c(0x154)]=function(){const _0xc7b098=_0x2ec98c;VisuMZ[_0xc7b098(0x11b)][_0xc7b098(0x1b3)]['call'](this),this[_0xc7b098(0x135)]();},Spriteset_Battle['prototype'][_0x2ec98c(0x135)]=function(){const _0x361f75=_0x2ec98c;if(this['_weaknessPopupsContainer'])return;this[_0x361f75(0x12b)]=new Sprite(),this['_weaknessPopupsContainer']['x']=this[_0x361f75(0x1ad)]['x'],this[_0x361f75(0x12b)]['y']=this[_0x361f75(0x1ad)]['y'];const _0x7733aa=Math[_0x361f75(0x196)]((Graphics[_0x361f75(0x168)]-Graphics[_0x361f75(0x190)])/0x2),_0x322a1f=Math[_0x361f75(0x196)]((Graphics[_0x361f75(0x122)]-Graphics['boxHeight'])/0x2);this[_0x361f75(0x12b)]['x']+=_0x7733aa,this['_weaknessPopupsContainer']['y']+=_0x322a1f,this[_0x361f75(0x166)](this[_0x361f75(0x12b)]);},VisuMZ[_0x2ec98c(0x11b)][_0x2ec98c(0x160)]=Spriteset_Battle['prototype'][_0x2ec98c(0x141)],Spriteset_Battle[_0x2ec98c(0x146)]['adjustFlippedBattlefield']=function(){const _0x2f657c=_0x2ec98c;VisuMZ[_0x2f657c(0x11b)][_0x2f657c(0x160)][_0x2f657c(0x162)](this);!this[_0x2f657c(0x12b)]&&this['createWeaknessPopupsContainer']();if(!this[_0x2f657c(0x153)]())return;this[_0x2f657c(0x12b)]['scale']['x']=-0x1,this[_0x2f657c(0x12b)]['x']=this[_0x2f657c(0x1ad)]['x']+this[_0x2f657c(0x1ad)][_0x2f657c(0x168)];},VisuMZ['WeaknessPopups']['Spriteset_Battle_update']=Spriteset_Battle[_0x2ec98c(0x146)]['update'],Spriteset_Battle[_0x2ec98c(0x146)][_0x2ec98c(0x178)]=function(){const _0x902322=_0x2ec98c;VisuMZ[_0x902322(0x11b)][_0x902322(0x169)]['call'](this),this['updateWeaknessPopupsContainer']();},Spriteset_Battle['prototype'][_0x2ec98c(0x17a)]=function(){const _0x2a773b=_0x2ec98c;if(!this['_weaknessPopupsContainer'])return;if(!this['_damageContainer'])return;this[_0x2a773b(0x12b)]['x']=this[_0x2a773b(0x1b6)]['x'],this[_0x2a773b(0x12b)]['y']=this[_0x2a773b(0x1b6)]['y'];if(!Imported[_0x2a773b(0x151)])return;const _0x2cf14e=Math[_0x2a773b(0x196)]((Graphics['width']-Graphics[_0x2a773b(0x190)])/0x2),_0x3bf96b=Math[_0x2a773b(0x196)]((Graphics[_0x2a773b(0x122)]-Graphics['boxHeight'])/0x2);this[_0x2a773b(0x12b)]['x']+=_0x2cf14e,this['_weaknessPopupsContainer']['y']+=_0x3bf96b;},Spriteset_Battle[_0x2ec98c(0x146)]['createWeaknessPopupType']=function(_0x40acc0,_0x390123){const _0x5171e3=_0x2ec98c;if(!_0x40acc0)return;if(!this[_0x5171e3(0x12b)])return;const _0x2711c2=this[_0x5171e3(0x11f)](_0x390123);if(!_0x2711c2)return;if(!_0x2711c2[_0x5171e3(0x1a2)])return;this[_0x5171e3(0x12c)](_0x40acc0,_0x2711c2);},VisuMZ['WeaknessPopups'][_0x2ec98c(0x1b1)]=function(){const _0x1741e9=_0x2ec98c;return{'enabled':!![],'filename':'','text':_0x1741e9(0x1b4),'bitmapWidth':0x258,'bitmapHeight':0xc8,'fontFace':'Impact','fontSize':0x24,'fontBold':![],'fontItalic':![],'textColor':'#ffffff','outlineSize':0x5,'outlineColor':_0x1741e9(0x164),'offsetX':0x0,'offsetY':0x0,'scaleDuration':0x14,'startScaleX':0x2,'startScaleY':0x2,'targetScaleX':0x1,'targetScaleY':0x1,'startSpeedX':0x0,'startSpeedY':0x0,'deltaSpeedX':0x0,'deltaSpeedY':0x0,'opaqueDuration':0x28,'fadeDuration':0x14};},Spriteset_Battle['prototype']['getWeaknessPopupData']=function(_0x1ad2ab){const _0x9df93a=_0x2ec98c,_0x31f1e1=VisuMZ['WeaknessPopups'][_0x9df93a(0x18d)];if(!_0x31f1e1)return null;return _0x31f1e1[_0x1ad2ab];},Spriteset_Battle[_0x2ec98c(0x146)][_0x2ec98c(0x12c)]=function(_0x195021,_0x54dbb1){const _0x280e2f=_0x2ec98c;if(!_0x195021)return;if(!_0x54dbb1)return;if(!_0x54dbb1['enabled'])return;if(!this[_0x280e2f(0x12b)])return;if(!Imported[_0x280e2f(0x175)]&&_0x195021[_0x280e2f(0x1b5)]()&&!$gameSystem[_0x280e2f(0x18a)]())return;const _0x1b0452=this[_0x280e2f(0x1a3)](_0x195021);if(!_0x1b0452)return;const _0x27dd12=new Sprite_WeaknessPopup(_0x1b0452,_0x54dbb1),_0x2a4653=this['getWeaknessPopupContainer'](_0x1b0452);_0x2a4653[_0x280e2f(0x166)](_0x27dd12);},Spriteset_Battle[_0x2ec98c(0x146)][_0x2ec98c(0x192)]=function(_0x385482){const _0x38845e=_0x2ec98c;return!$gameSystem[_0x38845e(0x18a)]()&&_0x385482['_battler'][_0x38845e(0x1b5)]()?SceneManager[_0x38845e(0x17f)]['_statusWindow']['_weaknessPopupContainer']:this[_0x38845e(0x12b)];},VisuMZ[_0x2ec98c(0x11b)][_0x2ec98c(0x14a)]=Window_BattleStatus['prototype'][_0x2ec98c(0x1c4)],Window_BattleStatus[_0x2ec98c(0x146)][_0x2ec98c(0x1c4)]=function(){const _0x5525f3=_0x2ec98c;this[_0x5525f3(0x158)](),VisuMZ[_0x5525f3(0x11b)][_0x5525f3(0x14a)]['call'](this);},Window_BattleStatus[_0x2ec98c(0x146)][_0x2ec98c(0x158)]=function(){const _0x40fde5=_0x2ec98c;this[_0x40fde5(0x173)]=new Sprite(),this[_0x40fde5(0x166)](this[_0x40fde5(0x173)]);};