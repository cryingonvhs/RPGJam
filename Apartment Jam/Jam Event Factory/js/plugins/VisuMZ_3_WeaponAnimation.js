//=============================================================================
// VisuStella MZ - Weapon Animation
// VisuMZ_3_WeaponAnimation.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_WeaponAnimation = true;

var VisuMZ = VisuMZ || {};
VisuMZ.WeaponAnimation = VisuMZ.WeaponAnimation || {};
VisuMZ.WeaponAnimation.version = 1.12;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.12] [WeaponAnimation]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Weapon_Animation_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * Ever wanted to give your swords different images despite being the same
 * sword type? Or how about your axes? Or any weapon? Now you can! On top of
 * that, you can even use custom images to accomplish this.
 * 
 * This plugin allows you to go past the standard weapon images and even using
 * custom images.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Select different weapon animation from the weapon sprite sheets.
 * * Use custom images for weapon animations.
 * * Allow weapons to have their own unique weapon animation sprites.
 * * Customize hues and motions for the weapon animations.
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
 * * VisuMZ_1_BattleCore
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
 * Sprite_Weapon loadBitmap function Change
 * 
 * Due to how this plugin works, loading bitmaps for the Sprite_Weapon
 * prototype class is now different. Depending if there is any data found for a
 * custom weapon animation, the bitmap data will be loaded differently to
 * accommodate the differences in file structure.
 *
 * ---
 * 
 * Sprite_Weapon updateFrame function Change
 * 
 * Due to how this plugin works, updating frames for the Sprite_Weapon
 * prototype class is now different. Depending if there is any data found for a
 * custom weapon animation, the frame data will be setup differently to
 * accommodate the differences in file structure.
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
 * === Weapon Image-Related Notetags ===
 * 
 * ---
 *
 * <Weapon Image: x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes the weapon image used for the affected battler to a numeric type.
 * - Replace 'x' with a number representing the weapon image's ID.
 * - You'll get an image from "img/system/" folder's weapon sheets.
 * - Each sheet contains 12 weapon images. If you wish to load a weapon from
 *   the first sheet, it'll be within 1-12.
 * - If you wish to load a weapon from the second sheet, it'll be within 13-24,
 *   and so on.
 * - The weapon sheets increase in increments of 12, which means that if you
 *   wish to load a weapon from weapon sheet 50, x will be between 589 to 600.
 *
 *   By default, these are the number values associated with each:
 * 
 *   1 - Dagger   7 - Long Bow  13 - Mace       19 - Slingshot  25 - Book
 *   2 - Sword    8 - Crossbow  14 - Rod        20 - Shotgun    26 - Custom
 *   3 - Flail    9 - Gun       15 - Club       21 - Rifle      27 - Custom
 *   4 - Axe     10 - Claw      16 - Chain      22 - Chainsaw   28 - Custom
 *   5 - Whip    11 - Glove     17 - Sword#2    23 - Railgun    29 - Custom
 *   6 - Staff   12 - Spear     18 - Iron Pipe  24 - Stun Rod   30 - Custom
 *
 * ---
 *
 * <Weapon Image: filename>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Changes the weapon image used for the affected battler to a unique file.
 * - Replace 'filename' with the name of the file found in the "img/weapons/"
 *   folder (or whichever folder you've set it to in the plugin parameters).
 * - This is case sensitive.
 * - Do not include the file extension.
 * 
 *   Example:
 * 
 *   <Weapon Image: Beam Sword>
 *
 * ---
 *
 * <Weapon Motion: thrust>
 * <Weapon Motion: swing>
 * <Weapon Motion: missile>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - This notetag requires a <Weapon Image: x> or <Weapon Image: filename>
 *   notetag on the same trait object.
 * - Forces the weapon to play a specific motion when attacking.
 * - If this is not defined, the played motion will be the custom motion
 *   declared in the plugin parameters.
 * - You can also replace the motion type with the following:
 * 
 *   walk     wait     chant     guard     damage     evade
 *   thrust   swing    missile   skill     spell      item
 *   escape   victory  dying     abnormal  sleep      dead
 *
 * ---
 *
 * <Weapon Hue: x>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - This notetag requires a <Weapon Image: x> or <Weapon Image: filename>
 *   notetag on the same trait object.
 * - Changes the hue of the custom weapon image.
 * - Replace 'x' with a hue number between 0 and 255.
 *
 * ---
 * 
 * === State Attack Animation-Related Notetags ===
 * 
 * ---
 * 
 * <Attack Animation: x>
 * <Weapon Animation: x>
 * 
 * - Used for: State Notetags
 * - When the battler attacks while having a state with this notetag, the
 *   battler's attack animation will be changed to 'x'.
 * - This can be used for things like a "Burning Weapon" state that turns the
 *   attack animation into a flame attack instead of the normal attack.
 * - This only applies when a skill/item's animation is set to "Normal Attack".
 * - Replace 'x' with a number representing the animation's ID.
 * - If a battler is affected by multiple states with these notetags, then the
 *   state with the highest priority number will have its effect take place.
 * - There are no differences between the notetags. They both achieve the same
 *   functionality. <Weapon Animation: x> happens to be a legacy notetag
 *   carried from YEP's library.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * There's a couple of plugin parameters that can be adjusted for this plugin.
 *
 * ---
 *
 * General
 * 
 *   Image Filepath:
 *   - The filepath used for custom weapon images folder.
 *   - This defaults to "img/weapons/"
 * 
 *   Default Motion:
 *   - Default motion used for custom weapon images.
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
 * Version 1.12: December 14, 2023
 * * Bug Fixes!
 * ** Fixed a bug where attack motions made through Action Sequences while
 *    having weapons that have a <Weapon Image: x> notetag will override the
 *    attack motion. Fix made by Olivia.
 * 
 * Version 1.11: August 18, 2022
 * * Bug Fixes!
 * ** Fixed a problem that made weapons appear even when Action Sequences would
 *    tell it to hide the weapon otherwise. Fix made by Irina.
 * 
 * Version 1.10: July 21, 2022
 * * Feature Update!
 * ** For those who did not set up their weapon attack motions, this plugin
 *    will now default the weapon attack type to "Thrust" and weapon attack
 *    image to "Dagger". Update made by Irina.
 * 
 * Version 1.09: April 7, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New state-only notetags added by Arisu:
 * *** <Attack Animation: x>
 * *** <Weapon Animation: x>
 * **** Both notetags do the same thing, just that one is a legacy notetag from
 *      the past YEP library.
 * **** When the battler attacks while having a state with this notetag, the
 *      battler's attack animation will be changed to 'x'.
 * **** This can be used for things like a "Burning Weapon" state that turns
 *      the attack animation into a flame attack instead of the normal attack.
 * **** This only applies when a skill/item's animation is set to
 *      "Normal Attack".
 * 
 * Version 1.08: February 17, 2022
 * * Bug Fixes!
 * ** Added a fail safe to prevent freeze motion frames on items trying to use
 *    custom weapon sprites, but do not actually have them in the game project.
 *    Fix made by Olivia.
 * 
 * Version 1.07: January 27, 2022
 * * Bug Fixes!
 * ** Freeze motion frames for weapon attacks will default to the enforced
 *    weapon graphic if there is no custom weapon sprite on the weapon, but on
 *    a piece of armor instead. Update made by Olivia.
 * 
 * Version 1.06: June 11, 2021
 * * Bug Fixes!
 * ** Freeze motion frames for weapon attacks will no longer cause crashes if
 *    the user does not have a weapon equipped. Fix made by Olivia.
 * 
 * Version 1.05: April 9, 2021
 * * Bug Fixes!
 * ** Freeze Motions should now hide weapons instead of always displaying them
 *    when the hide option is enabled. Fix made by Olivia.
 * 
 * Version 1.04: February 12, 2021
 * * Bug Fixes!
 * ** Freeze frame now supports enemy custom weapon images. Fix made by Irina.
 * 
 * Version 1.03: January 29, 2021
 * * Bug Fixes!
 * ** Basic weapon animations should now show the proper weapon image.
 *    Fix made by Olivia.
 * ** Freeze frame now supports custom non-attack animations. Fix by Olivia.
 * 
 * Version 1.02: January 22, 2021
 * * Compatibility Update
 * ** Plugin is now compatible with Battle Core's Freeze Motion.
 * 
 * Version 1.01: November 22, 2020
 * * Bug Fixes!
 * ** If battlers with custom weapon animations perform an Action Sequence with
 *    "Show Weapon" set to false, they will no longer force the attack motion.
 *    Fix made by Yanfly.
 *
 * Version 1.00: November 25, 2020
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
 * @param WeaponAnimation
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param filepath:str
 * @text Image Filepath
 * @desc The filepath used for custom weapon images folder.
 * @default img/weapons/
 *
 * @param motion:str
 * @text Default Motion
 * @type combo
 * @option swing
 * @option thrust
 * @option missile
 * @option walk
 * @option wait
 * @option chant
 * @option guard
 * @option damage
 * @option evade
 * @option skill
 * @option spell
 * @option item
 * @option escape
 * @option victory
 * @option dying
 * @option abnormal
 * @option sleep
 * @option dead
 * @desc Default motion used for custom weapon images.
 * @default swing
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

function _0x88d0(_0x47e079,_0xa832f6){const _0x1a414a=_0x1a41();return _0x88d0=function(_0x88d07f,_0x352151){_0x88d07f=_0x88d07f-0x1d0;let _0x421514=_0x1a414a[_0x88d07f];return _0x421514;},_0x88d0(_0x47e079,_0xa832f6);}const _0x100e97=_0x88d0;(function(_0x358939,_0x5eaa31){const _0x553781=_0x88d0,_0x2d3cb0=_0x358939();while(!![]){try{const _0x59b0fd=parseInt(_0x553781(0x1e5))/0x1+parseInt(_0x553781(0x1f3))/0x2+-parseInt(_0x553781(0x223))/0x3+-parseInt(_0x553781(0x243))/0x4+parseInt(_0x553781(0x1df))/0x5+parseInt(_0x553781(0x1d8))/0x6*(parseInt(_0x553781(0x246))/0x7)+-parseInt(_0x553781(0x1e3))/0x8;if(_0x59b0fd===_0x5eaa31)break;else _0x2d3cb0['push'](_0x2d3cb0['shift']());}catch(_0x25aead){_0x2d3cb0['push'](_0x2d3cb0['shift']());}}}(_0x1a41,0xcaad8));var label=_0x100e97(0x23e),tier=tier||0x0,dependencies=[_0x100e97(0x247)],pluginData=$plugins[_0x100e97(0x1ef)](function(_0x59d6af){const _0x97a597=_0x100e97;return _0x59d6af['status']&&_0x59d6af['description'][_0x97a597(0x219)]('['+label+']');})[0x0];VisuMZ[label]['Settings']=VisuMZ[label][_0x100e97(0x250)]||{},VisuMZ[_0x100e97(0x23f)]=function(_0x34f9cd,_0x2a019f){const _0x46ec7e=_0x100e97;for(const _0x1b4ae4 in _0x2a019f){if(_0x1b4ae4['match'](/(.*):(.*)/i)){const _0x22daa2=String(RegExp['$1']),_0x11872e=String(RegExp['$2'])[_0x46ec7e(0x24c)]()[_0x46ec7e(0x1d1)]();let _0x3c7a24,_0x46c091,_0x4d3b38;switch(_0x11872e){case _0x46ec7e(0x1e7):_0x3c7a24=_0x2a019f[_0x1b4ae4]!==''?Number(_0x2a019f[_0x1b4ae4]):0x0;break;case _0x46ec7e(0x215):_0x46c091=_0x2a019f[_0x1b4ae4]!==''?JSON[_0x46ec7e(0x1d3)](_0x2a019f[_0x1b4ae4]):[],_0x3c7a24=_0x46c091[_0x46ec7e(0x238)](_0x3cdf7f=>Number(_0x3cdf7f));break;case _0x46ec7e(0x1eb):_0x3c7a24=_0x2a019f[_0x1b4ae4]!==''?eval(_0x2a019f[_0x1b4ae4]):null;break;case'ARRAYEVAL':_0x46c091=_0x2a019f[_0x1b4ae4]!==''?JSON[_0x46ec7e(0x1d3)](_0x2a019f[_0x1b4ae4]):[],_0x3c7a24=_0x46c091[_0x46ec7e(0x238)](_0xdb937c=>eval(_0xdb937c));break;case'JSON':_0x3c7a24=_0x2a019f[_0x1b4ae4]!==''?JSON[_0x46ec7e(0x1d3)](_0x2a019f[_0x1b4ae4]):'';break;case _0x46ec7e(0x1dc):_0x46c091=_0x2a019f[_0x1b4ae4]!==''?JSON[_0x46ec7e(0x1d3)](_0x2a019f[_0x1b4ae4]):[],_0x3c7a24=_0x46c091['map'](_0x475642=>JSON['parse'](_0x475642));break;case _0x46ec7e(0x1f4):_0x3c7a24=_0x2a019f[_0x1b4ae4]!==''?new Function(JSON['parse'](_0x2a019f[_0x1b4ae4])):new Function(_0x46ec7e(0x22b));break;case'ARRAYFUNC':_0x46c091=_0x2a019f[_0x1b4ae4]!==''?JSON[_0x46ec7e(0x1d3)](_0x2a019f[_0x1b4ae4]):[],_0x3c7a24=_0x46c091['map'](_0x52ecf5=>new Function(JSON[_0x46ec7e(0x1d3)](_0x52ecf5)));break;case _0x46ec7e(0x200):_0x3c7a24=_0x2a019f[_0x1b4ae4]!==''?String(_0x2a019f[_0x1b4ae4]):'';break;case _0x46ec7e(0x248):_0x46c091=_0x2a019f[_0x1b4ae4]!==''?JSON[_0x46ec7e(0x1d3)](_0x2a019f[_0x1b4ae4]):[],_0x3c7a24=_0x46c091[_0x46ec7e(0x238)](_0x1885fd=>String(_0x1885fd));break;case'STRUCT':_0x4d3b38=_0x2a019f[_0x1b4ae4]!==''?JSON[_0x46ec7e(0x1d3)](_0x2a019f[_0x1b4ae4]):{},_0x3c7a24=VisuMZ[_0x46ec7e(0x23f)]({},_0x4d3b38);break;case'ARRAYSTRUCT':_0x46c091=_0x2a019f[_0x1b4ae4]!==''?JSON[_0x46ec7e(0x1d3)](_0x2a019f[_0x1b4ae4]):[],_0x3c7a24=_0x46c091[_0x46ec7e(0x238)](_0x174763=>VisuMZ['ConvertParams']({},JSON[_0x46ec7e(0x1d3)](_0x174763)));break;default:continue;}_0x34f9cd[_0x22daa2]=_0x3c7a24;}}return _0x34f9cd;},(_0x5f2759=>{const _0x4edd3a=_0x100e97,_0x5ef86d=_0x5f2759[_0x4edd3a(0x1fe)];for(const _0x570f07 of dependencies){if(!Imported[_0x570f07]){alert(_0x4edd3a(0x206)[_0x4edd3a(0x232)](_0x5ef86d,_0x570f07)),SceneManager[_0x4edd3a(0x1f5)]();break;}}const _0x111c6b=_0x5f2759[_0x4edd3a(0x242)];if(_0x111c6b[_0x4edd3a(0x214)](/\[Version[ ](.*?)\]/i)){if(_0x4edd3a(0x212)===_0x4edd3a(0x1e6))return this[_0x4edd3a(0x204)]=this[_0x4edd3a(0x204)]||{},this['_cache'][_0x998c77]!==_0x24f76f;else{const _0x5c2f81=Number(RegExp['$1']);_0x5c2f81!==VisuMZ[label][_0x4edd3a(0x207)]&&(alert(_0x4edd3a(0x1fa)['format'](_0x5ef86d,_0x5c2f81)),SceneManager[_0x4edd3a(0x1f5)]());}}if(_0x111c6b[_0x4edd3a(0x214)](/\[Tier[ ](\d+)\]/i)){const _0x4a3177=Number(RegExp['$1']);_0x4a3177<tier?_0x4edd3a(0x209)!=='nNDeJ'?this[_0x4edd3a(0x1e8)]=_0x416d1d[_0x4edd3a(0x203)](''):(alert(_0x4edd3a(0x1d4)[_0x4edd3a(0x232)](_0x5ef86d,_0x4a3177,tier)),SceneManager[_0x4edd3a(0x1f5)]()):tier=Math[_0x4edd3a(0x240)](_0x4a3177,tier);}VisuMZ[_0x4edd3a(0x23f)](VisuMZ[label][_0x4edd3a(0x250)],_0x5f2759['parameters']);})(pluginData),VisuMZ[_0x100e97(0x23e)][_0x100e97(0x1f8)]={'ImageNum':/<WEAPON IMAGE:[ ](\d+)>/i,'ImageStr':/<WEAPON IMAGE:[ ](.*)>/i,'Hue':/<WEAPON HUE:[ ](\d+)>/i,'Motion':/<WEAPON MOTION:[ ](.*)>/i,'AttackAni':/<(?:WEAPON|ATTACK) ANIMATION:[ ](\d+)>/i},VisuMZ[_0x100e97(0x23e)][_0x100e97(0x233)]=Scene_Boot[_0x100e97(0x230)][_0x100e97(0x216)],Scene_Boot['prototype'][_0x100e97(0x216)]=function(){const _0x4acfdd=_0x100e97,_0x120181=$dataSystem[_0x4acfdd(0x1ed)][_0x4acfdd(0x1da)];for(let _0x1b19d3=0x0;_0x1b19d3<_0x120181;_0x1b19d3++){if(_0x4acfdd(0x22d)==='WeSSH'){const _0x2984b4=$dataSystem[_0x4acfdd(0x23d)][_0x1b19d3];if(_0x2984b4)continue;$dataSystem[_0x4acfdd(0x23d)][_0x1b19d3]={'type':0x1,'weaponImageId':0x1};}else return this[_0x4acfdd(0x21f)]()||_0x1ac67d[_0x4acfdd(0x23e)]['Game_Enemy_attackAnimationId2'][_0x4acfdd(0x24a)](this);}VisuMZ['WeaponAnimation'][_0x4acfdd(0x233)]['call'](this);if(VisuMZ[_0x4acfdd(0x1ec)][_0x4acfdd(0x207)]<1.79){if(_0x4acfdd(0x228)!==_0x4acfdd(0x228)){const _0x2504d9=_0xbea542['floor'](this[_0x4acfdd(0x1e8)][_0x4acfdd(0x225)]/0x3),_0x5c6d52=this[_0x4acfdd(0x1e8)][_0x4acfdd(0x229)],_0x20d8ba=this['_pattern']*_0x2504d9,_0x1b6efc=0x0;this[_0x4acfdd(0x20a)](_0x20d8ba,_0x1b6efc,_0x2504d9,_0x5c6d52);}else{let _0x595b7c='';_0x595b7c+=_0x4acfdd(0x205),_0x595b7c+=_0x4acfdd(0x256),alert(_0x595b7c),SceneManager[_0x4acfdd(0x1f5)]();}}},ImageManager['loadWeapon']=function(_0x17209b){const _0x433f98=_0x100e97,_0x8be54c=VisuMZ[_0x433f98(0x23e)][_0x433f98(0x250)]['filepath'];return this['loadBitmap'](_0x8be54c,_0x17209b);},VisuMZ[_0x100e97(0x23e)][_0x100e97(0x211)]=BattleManager[_0x100e97(0x202)],BattleManager['startAction']=function(){const _0x45af6a=_0x100e97;VisuMZ[_0x45af6a(0x23e)][_0x45af6a(0x211)][_0x45af6a(0x24a)](this),this[_0x45af6a(0x20c)]&&this[_0x45af6a(0x20c)]['preloadCustomWeaponImage']();},VisuMZ[_0x100e97(0x23e)][_0x100e97(0x1ee)]=Game_BattlerBase[_0x100e97(0x230)]['initMembers'],Game_BattlerBase[_0x100e97(0x230)]['initMembers']=function(){const _0x5070dd=_0x100e97;this[_0x5070dd(0x204)]={},VisuMZ['WeaponAnimation'][_0x5070dd(0x1ee)][_0x5070dd(0x24a)](this);},VisuMZ[_0x100e97(0x23e)][_0x100e97(0x1db)]=Game_BattlerBase[_0x100e97(0x230)][_0x100e97(0x220)],Game_BattlerBase[_0x100e97(0x230)][_0x100e97(0x220)]=function(){const _0x1c1485=_0x100e97;this[_0x1c1485(0x204)]={},VisuMZ[_0x1c1485(0x23e)][_0x1c1485(0x1db)]['call'](this);},Game_BattlerBase['prototype'][_0x100e97(0x213)]=function(_0x41e62b){const _0x382c0e=_0x100e97;return this[_0x382c0e(0x204)]=this['_cache']||{},this[_0x382c0e(0x204)][_0x41e62b]!==undefined;},Game_BattlerBase['prototype'][_0x100e97(0x1f9)]=function(){const _0x4ec17a=_0x100e97;let _0xe8fa72='customWeaponGraphic';if(this['checkCacheKey'](_0xe8fa72))return this[_0x4ec17a(0x204)][_0xe8fa72];return this['_cache'][_0xe8fa72]=this['createCustomWeaponGraphic'](),this[_0x4ec17a(0x204)][_0xe8fa72];},Game_BattlerBase['prototype']['createCustomWeaponGraphic']=function(){const _0x4f9be7=_0x100e97;for(const _0x7c1b90 of this[_0x4f9be7(0x1fb)]()){if(!_0x7c1b90)continue;const _0x23508b=this[_0x4f9be7(0x239)](_0x7c1b90);if(_0x23508b[_0x4f9be7(0x1fe)]!==0x0){if('sNPhS'!==_0x4f9be7(0x21a))return{'name':_0x23508b[_0x4f9be7(0x1fe)],'hue':_0x23508b[_0x4f9be7(0x234)],'motion':_0x23508b[_0x4f9be7(0x1f1)]};else{const _0x4a28f1=_0x1d3a16(_0x176d9b['$1']);_0x4a28f1<_0x1749ae?(_0x15e12f(_0x4f9be7(0x1d4)['format'](_0x473651,_0x4a28f1,_0x5b5e2a)),_0x528539['exit']()):_0x1da1f0=_0x4323f3[_0x4f9be7(0x240)](_0x4a28f1,_0x8d58ff);}}}return 0x0;},Game_BattlerBase[_0x100e97(0x230)][_0x100e97(0x239)]=function(_0x4fd0ca){const _0x56a5f8=_0x100e97,_0x475687=VisuMZ[_0x56a5f8(0x23e)][_0x56a5f8(0x1f8)];let _0x19db07=0x0,_0xe291af=0x0,_0x3eca33=VisuMZ[_0x56a5f8(0x23e)]['Settings'][_0x56a5f8(0x1f1)];const _0x12b5fe=_0x4fd0ca?_0x4fd0ca[_0x56a5f8(0x253)]:'';if(_0x12b5fe[_0x56a5f8(0x214)](_0x475687[_0x56a5f8(0x20b)]))_0x19db07=Number(RegExp['$1'])||0x1;else _0x12b5fe[_0x56a5f8(0x214)](_0x475687[_0x56a5f8(0x23c)])&&(_0x19db07=String(RegExp['$1']));return _0x12b5fe[_0x56a5f8(0x214)](_0x475687[_0x56a5f8(0x23a)])&&(_0xe291af=Number(RegExp['$1'])[_0x56a5f8(0x21b)](0x0,0xff)),_0x12b5fe['match'](_0x475687['Motion'])&&(_0x3eca33=String(RegExp['$1'])[_0x56a5f8(0x245)]()[_0x56a5f8(0x1d1)]()),{'name':_0x19db07,'hue':_0xe291af,'motion':_0x3eca33};},VisuMZ[_0x100e97(0x23e)][_0x100e97(0x1d9)]=Game_Battler['prototype'][_0x100e97(0x1de)],Game_Battler[_0x100e97(0x230)][_0x100e97(0x1de)]=function(_0xa1771d){const _0x170158=_0x100e97;if(this[_0x170158(0x254)])return;let _0x41773b=![];if(this[_0x170158(0x1f9)]()&&_0xa1771d>0x0){if('JfgdC'===_0x170158(0x1e4))_0xa1771d=this[_0x170158(0x1f9)](),_0x41773b=!![];else{if(!this[_0x170158(0x255)])return;if(typeof this[_0x170158(0x255)][_0x170158(0x1fe)]===_0x170158(0x208)){const _0x4bbbd0=(this[_0x170158(0x255)][_0x170158(0x1fe)]-0x1)%0xc,_0x45dfdb=0x60,_0x1bf777=0x40,_0xa9d03b=(_0x36b7f0[_0x170158(0x1dd)](_0x4bbbd0/0x6)*0x3+this[_0x170158(0x1d7)])*_0x45dfdb,_0x31703c=_0x3b5a67[_0x170158(0x1dd)](_0x4bbbd0%0x6)*_0x1bf777;this['setFrame'](_0xa9d03b,_0x31703c,_0x45dfdb,_0x1bf777);}else{const _0x46e739=_0x16d274[_0x170158(0x1dd)](this[_0x170158(0x1e8)][_0x170158(0x225)]/0x3),_0x44d79c=this[_0x170158(0x1e8)][_0x170158(0x229)],_0x186a2a=this[_0x170158(0x1d7)]*_0x46e739,_0x10ea5e=0x0;this[_0x170158(0x20a)](_0x186a2a,_0x10ea5e,_0x46e739,_0x44d79c);}}}VisuMZ[_0x170158(0x23e)][_0x170158(0x1d9)][_0x170158(0x24a)](this,_0xa1771d);if(!_0x41773b)return;if(_0xa1771d===0x0)return;this[_0x170158(0x254)]=!![],this[_0x170158(0x241)](_0xa1771d['motion']||_0x170158(0x24e)),this[_0x170158(0x254)]=![];},VisuMZ[_0x100e97(0x23e)][_0x100e97(0x235)]=Game_Actor[_0x100e97(0x230)][_0x100e97(0x24d)],Game_Actor['prototype'][_0x100e97(0x24d)]=function(){if(this['_showWeapon']===![])return;VisuMZ['WeaponAnimation']['Game_Actor_performWeaponAnimation']['call'](this);},Game_Battler[_0x100e97(0x230)][_0x100e97(0x1d0)]=function(){const _0x30471a=_0x100e97;if(!this['customWeaponGraphic']())return;const _0x2c2782=this[_0x30471a(0x1f9)]();if(typeof _0x2c2782['name']===_0x30471a(0x208)){const _0x15df70=Math[_0x30471a(0x1dd)]((_0x2c2782['name']-0x1)/0xc)+0x1;ImageManager[_0x30471a(0x203)](_0x30471a(0x24b)+_0x15df70);}else _0x30471a(0x224)===_0x30471a(0x224)?ImageManager['loadWeapon'](_0x2c2782[_0x30471a(0x1fe)]):_0x4e5b0f=_0x5de13c(_0x4183d0['$1'])['clamp'](0x0,0xff);},VisuMZ['WeaponAnimation'][_0x100e97(0x1fc)]=Game_Battler[_0x100e97(0x230)][_0x100e97(0x252)],Game_Battler[_0x100e97(0x230)]['freezeMotion']=function(_0xfdb4b6,_0x1d3381,_0x59708b){const _0x9dc291=_0x100e97;VisuMZ[_0x9dc291(0x23e)][_0x9dc291(0x1fc)][_0x9dc291(0x24a)](this,_0xfdb4b6,_0x1d3381,_0x59708b);if(!_0x1d3381)return;let _0x22180a=0x0;_0xfdb4b6[_0x9dc291(0x214)](/ATTACK[ ](\d+)/i)&&(_0x22180a=Number(RegExp['$1']),_0x22180a--);if(this['isActor']()){if('CXXXg'===_0x9dc291(0x1e9)){const _0x41b911=this[_0x9dc291(0x1ff)](),_0x3e76aa=_0x41b911[_0x22180a]||null,_0x3dbacb=this[_0x9dc291(0x239)](_0x3e76aa);if(_0x3dbacb[_0x9dc291(0x1fe)]!==0x0)_0xfdb4b6[_0x9dc291(0x214)](/ATTACK/i)&&(this['_freezeMotionData']['motionType']=_0x3dbacb[_0x9dc291(0x1f1)]),this[_0x9dc291(0x231)][_0x9dc291(0x251)]=_0x3dbacb['name'];else{if(_0x9dc291(0x20f)!==_0x9dc291(0x20f))this[_0x9dc291(0x1f7)]()?this[_0x9dc291(0x22e)]():(this[_0x9dc291(0x218)]=![],_0x2248f6[_0x9dc291(0x23e)][_0x9dc291(0x249)][_0x9dc291(0x24a)](this),this[_0x9dc291(0x237)](0x0));else{const _0xe058ba=this[_0x9dc291(0x1f9)]();if(_0xe058ba[_0x9dc291(0x1fe)]!==0x0){if(_0x9dc291(0x24f)==='jgMYu')return this[_0x9dc291(0x1ea)]()?this[_0x9dc291(0x21f)]()||_0x165254[_0x9dc291(0x23e)][_0x9dc291(0x244)][_0x9dc291(0x24a)](this):_0x1f63d2[_0x9dc291(0x23e)][_0x9dc291(0x244)][_0x9dc291(0x24a)](this);else _0xfdb4b6[_0x9dc291(0x214)](/ATTACK/i)&&(_0x9dc291(0x217)!=='waGJn'?this[_0x9dc291(0x231)][_0x9dc291(0x1d2)]=_0xe058ba['motion']:(_0x21a653[_0x9dc291(0x214)](/ATTACK/i)&&(this['_freezeMotionData'][_0x9dc291(0x1d2)]=_0x1c7174[_0x9dc291(0x1f1)]),this['_freezeMotionData'][_0x9dc291(0x251)]=_0x5eed6d[_0x9dc291(0x1fe)])),this[_0x9dc291(0x231)]['weaponImageId']=_0xe058ba[_0x9dc291(0x1fe)];}}}}else _0x35bf80[_0x9dc291(0x1e1)](_0xae3151['name']);}else{if(this[_0x9dc291(0x1f6)]()){const _0x4020ac=this[_0x9dc291(0x239)](this[_0x9dc291(0x222)]());_0x4020ac[_0x9dc291(0x1fe)]!==0x0&&(_0xfdb4b6[_0x9dc291(0x214)](/ATTACK/i)&&(this[_0x9dc291(0x231)]['motionType']=_0x4020ac[_0x9dc291(0x1f1)]),this['_freezeMotionData'][_0x9dc291(0x251)]=_0x4020ac[_0x9dc291(0x1fe)]);}}},Game_Battler[_0x100e97(0x230)][_0x100e97(0x21f)]=function(){const _0x1ab369=_0x100e97,_0x2fd6e6=VisuMZ[_0x1ab369(0x23e)][_0x1ab369(0x1f8)],_0x3d6ac5=_0x2fd6e6[_0x1ab369(0x1d6)];for(const _0x4df4fb of this[_0x1ab369(0x21e)]()){if(_0x1ab369(0x22f)===_0x1ab369(0x22f)){if(!_0x4df4fb)continue;if(_0x4df4fb[_0x1ab369(0x253)][_0x1ab369(0x214)](_0x3d6ac5)){const _0x1cd0be=Number(RegExp['$1'])||0x0;if(_0x1cd0be>0x0)return _0x1cd0be;}}else{let _0x5d1b29=_0x1ab369(0x1f9);if(this[_0x1ab369(0x213)](_0x5d1b29))return this[_0x1ab369(0x204)][_0x5d1b29];return this['_cache'][_0x5d1b29]=this[_0x1ab369(0x221)](),this[_0x1ab369(0x204)][_0x5d1b29];}}return 0x0;},Game_Battler[_0x100e97(0x230)][_0x100e97(0x1ea)]=function(){const _0x3a7913=_0x100e97,_0x298159=VisuMZ[_0x3a7913(0x23e)][_0x3a7913(0x1f8)],_0x4e4ac1=_0x298159[_0x3a7913(0x1d6)];return this['states']()[_0x3a7913(0x21d)](_0x18d080=>_0x18d080&&_0x18d080[_0x3a7913(0x253)][_0x3a7913(0x214)](_0x4e4ac1));},VisuMZ[_0x100e97(0x23e)][_0x100e97(0x22a)]=Game_Actor[_0x100e97(0x230)][_0x100e97(0x201)],Game_Actor[_0x100e97(0x230)]['attackAnimationId1']=function(){const _0x37b1a7=_0x100e97;if(this[_0x37b1a7(0x1ea)]()){if('ffxRg'!==_0x37b1a7(0x21c)){this[_0x37b1a7(0x218)]=!![];const _0x1f5ca5=this[_0x37b1a7(0x255)][_0x37b1a7(0x1fe)]?this[_0x37b1a7(0x255)][_0x37b1a7(0x1fe)]:this[_0x37b1a7(0x255)];this['bitmap']=_0x1d3e1d[_0x37b1a7(0x1e1)](_0x1f5ca5||'');}else return this[_0x37b1a7(0x21f)]()||VisuMZ[_0x37b1a7(0x23e)][_0x37b1a7(0x22a)][_0x37b1a7(0x24a)](this);}else{if(_0x37b1a7(0x1fd)==='jgOhw')this[_0x37b1a7(0x231)][_0x37b1a7(0x1d2)]=_0x3695d6[_0x37b1a7(0x1f1)];else return VisuMZ['WeaponAnimation']['Game_Actor_attackAnimationId1']['call'](this);}},VisuMZ[_0x100e97(0x23e)]['Game_Actor_attackAnimationId2']=Game_Actor[_0x100e97(0x230)][_0x100e97(0x236)],Game_Actor['prototype']['attackAnimationId2']=function(){const _0x4077f0=_0x100e97;if(this['hasStateAttackAnimation']()&&!!this[_0x4077f0(0x1ff)]()[0x1]){if(_0x4077f0(0x22c)!==_0x4077f0(0x22c))return;else return this['getStateAttackAnimation']()||VisuMZ['WeaponAnimation'][_0x4077f0(0x1d5)]['call'](this);}else return VisuMZ['WeaponAnimation'][_0x4077f0(0x1d5)][_0x4077f0(0x24a)](this);},VisuMZ[_0x100e97(0x23e)][_0x100e97(0x1f0)]=Game_Enemy[_0x100e97(0x230)][_0x100e97(0x201)],Game_Enemy[_0x100e97(0x230)][_0x100e97(0x201)]=function(){const _0x47f07f=_0x100e97;return this[_0x47f07f(0x1ea)]()?this[_0x47f07f(0x21f)]()||VisuMZ[_0x47f07f(0x23e)][_0x47f07f(0x1f0)][_0x47f07f(0x24a)](this):VisuMZ[_0x47f07f(0x23e)][_0x47f07f(0x1f0)]['call'](this);},VisuMZ['WeaponAnimation'][_0x100e97(0x244)]=Game_Enemy['prototype'][_0x100e97(0x236)],Game_Enemy[_0x100e97(0x230)][_0x100e97(0x236)]=function(){const _0x441ba2=_0x100e97;if(this['hasStateAttackAnimation']()){if(_0x441ba2(0x23b)!==_0x441ba2(0x226))return this['getStateAttackAnimation']()||VisuMZ[_0x441ba2(0x23e)][_0x441ba2(0x244)][_0x441ba2(0x24a)](this);else{const _0x22e9cd=this[_0x441ba2(0x1f9)]();_0x22e9cd[_0x441ba2(0x1fe)]!==0x0&&(_0x1eba4e[_0x441ba2(0x214)](/ATTACK/i)&&(this[_0x441ba2(0x231)][_0x441ba2(0x1d2)]=_0x22e9cd['motion']),this[_0x441ba2(0x231)][_0x441ba2(0x251)]=_0x22e9cd[_0x441ba2(0x1fe)]);}}else{if(_0x441ba2(0x20d)!==_0x441ba2(0x1f2))return VisuMZ[_0x441ba2(0x23e)][_0x441ba2(0x244)][_0x441ba2(0x24a)](this);else _0x3422fb=_0x5c3db7(_0x672a39['$1']);}},Sprite_Weapon[_0x100e97(0x230)][_0x100e97(0x1f7)]=function(){return typeof this['_weaponImageId']!=='number';},VisuMZ[_0x100e97(0x23e)][_0x100e97(0x249)]=Sprite_Weapon[_0x100e97(0x230)][_0x100e97(0x1e2)],Sprite_Weapon['prototype'][_0x100e97(0x1e2)]=function(){const _0xa69c6f=_0x100e97;this[_0xa69c6f(0x1f7)]()?this['loadBitmapCustomWeapon']():(this[_0xa69c6f(0x218)]=![],VisuMZ['WeaponAnimation'][_0xa69c6f(0x249)][_0xa69c6f(0x24a)](this),this[_0xa69c6f(0x237)](0x0));},Sprite_Weapon[_0x100e97(0x230)][_0x100e97(0x22e)]=function(){const _0x57dadd=_0x100e97;if(!this[_0x57dadd(0x255)])return;if(typeof this[_0x57dadd(0x255)]['name']===_0x57dadd(0x208)){const _0x8121a9=Math[_0x57dadd(0x1dd)]((this['_weaponImageId'][_0x57dadd(0x1fe)]-0x1)/0xc)+0x1;_0x8121a9>=0x1?_0x57dadd(0x20e)!==_0x57dadd(0x1e0)?this[_0x57dadd(0x1e8)]=ImageManager[_0x57dadd(0x203)](_0x57dadd(0x24b)+_0x8121a9):(this[_0x57dadd(0x204)]={},_0x4278c5[_0x57dadd(0x23e)][_0x57dadd(0x1db)][_0x57dadd(0x24a)](this)):this[_0x57dadd(0x1e8)]=ImageManager[_0x57dadd(0x203)]('');}else{this[_0x57dadd(0x218)]=!![];const _0x44930b=this['_weaponImageId'][_0x57dadd(0x1fe)]?this[_0x57dadd(0x255)]['name']:this[_0x57dadd(0x255)];this[_0x57dadd(0x1e8)]=ImageManager[_0x57dadd(0x1e1)](_0x44930b||'');}this['setHue'](this[_0x57dadd(0x255)][_0x57dadd(0x234)]||0x0);},VisuMZ[_0x100e97(0x23e)][_0x100e97(0x210)]=Sprite_Weapon['prototype'][_0x100e97(0x227)],Sprite_Weapon[_0x100e97(0x230)]['updateFrame']=function(){const _0x1855de=_0x100e97;this['isCustomWeaponGraphic']()?'RWWMe'==='RWWMe'?this['updateFrameCustomWeaponGraphic']():this[_0x1855de(0x257)]():VisuMZ[_0x1855de(0x23e)][_0x1855de(0x210)][_0x1855de(0x24a)](this);},Sprite_Weapon[_0x100e97(0x230)][_0x100e97(0x257)]=function(){const _0x56080c=_0x100e97;if(!this[_0x56080c(0x255)])return;if(typeof this[_0x56080c(0x255)]['name']===_0x56080c(0x208)){const _0x4cc9eb=(this[_0x56080c(0x255)]['name']-0x1)%0xc,_0x421882=0x60,_0x3fae81=0x40,_0x12970a=(Math[_0x56080c(0x1dd)](_0x4cc9eb/0x6)*0x3+this[_0x56080c(0x1d7)])*_0x421882,_0x5d8339=Math['floor'](_0x4cc9eb%0x6)*_0x3fae81;this[_0x56080c(0x20a)](_0x12970a,_0x5d8339,_0x421882,_0x3fae81);}else{const _0x3fe6a2=Math['floor'](this[_0x56080c(0x1e8)][_0x56080c(0x225)]/0x3),_0x33364f=this['bitmap']['height'],_0x352a51=this[_0x56080c(0x1d7)]*_0x3fe6a2,_0x146c73=0x0;this[_0x56080c(0x20a)](_0x352a51,_0x146c73,_0x3fe6a2,_0x33364f);}};function _0x1a41(){const _0xc8dddb=['getStateAttackAnimation','refresh','createCustomWeaponGraphic','enemy','4037754LUHbIL','ARxvR','width','QTdkv','updateFrame','tBLqL','height','Game_Actor_attackAnimationId1','return\x200','kPCCC','WeSSH','loadBitmapCustomWeapon','qZoQO','prototype','_freezeMotionData','format','Scene_Boot_process_VisuMZ_BattleCore_Failsafes','hue','Game_Actor_performWeaponAnimation','attackAnimationId2','setHue','map','createCustomWeaponGraphicFromObj','Hue','uEWrq','ImageStr','attackMotions','WeaponAnimation','ConvertParams','max','requestMotion','description','1546640cXNUSR','Game_Enemy_attackAnimationId2','toLowerCase','14IJitoM','VisuMZ_1_BattleCore','ARRAYSTR','Sprite_Weapon_loadBitmap','call','Weapons','toUpperCase','performWeaponAnimation','swing','tQtzy','Settings','weaponImageId','freezeMotion','note','_uniqueStartWeaponAnimation','_weaponImageId','in\x20order\x20for\x20VisuMZ_3_WeaponAnimation\x20to\x20work.','updateFrameCustomWeaponGraphic','preloadCustomWeaponImage','trim','motionType','parse','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','Game_Actor_attackAnimationId2','AttackAni','_pattern','633270whKpjP','Game_Battler_startWeaponAnimation','length','Game_BattlerBase_refresh','ARRAYJSON','floor','startWeaponAnimation','7802975sdNoWK','lSjUe','loadWeapon','loadBitmap','10420464iWWUne','JfgdC','1293066WrBbnk','pgvpU','NUM','bitmap','CXXXg','hasStateAttackAnimation','EVAL','BattleCore','weaponTypes','Game_BattlerBase_initMembers','filter','Game_Enemy_attackAnimationId1','motion','sbKqr','1601106OIeAbf','FUNC','exit','isEnemy','isCustomWeaponGraphic','RegExp','customWeaponGraphic','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','traitObjects','Game_Battler_freezeMotion','jBmGt','name','weapons','STR','attackAnimationId1','startAction','loadSystem','_cache','VisuMZ_1_BattleCore\x20needs\x20to\x20be\x20updated\x20','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','version','number','nNDeJ','setFrame','ImageNum','_subject','ENmum','HzswH','VvHZh','Sprite_Weapon_updateFrame','BattleManager_startAction','eygJA','checkCacheKey','match','ARRAYNUM','process_VisuMZ_BattleCore_Failsafes','CJoao','_customFrames','includes','qsbsg','clamp','ffxRg','some','states'];_0x1a41=function(){return _0xc8dddb;};return _0x1a41();}