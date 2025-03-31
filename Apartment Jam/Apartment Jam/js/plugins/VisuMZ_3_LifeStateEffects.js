//=============================================================================
// VisuStella MZ - Life State Effects
// VisuMZ_3_LifeStateEffects.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_LifeStateEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.LifeStateEffects = VisuMZ.LifeStateEffects || {};
VisuMZ.LifeStateEffects.version = 1.06;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.06] [LifeStateEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Life_State_Effects_VisuStella_MZ
 * @base VisuMZ_1_BattleCore
 * @base VisuMZ_1_SkillsStatesCore
 * @orderAfter VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_SkillsStatesCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Life State Effects plugin allow for trait objects and/or states to
 * create specific, though, commonly used effects found in many traditional
 * JRPG's, such as Auto Life, Doom, and Guts. These mechanical effects add a
 * whole new layer of strategy when it comes to status effects.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Auto Life effect, which is a state effect that recovers a percentage of
 *   the user's HP and disappears upon triggering.
 * * Curse effect, which prevents HP, MP, and/or TP recovery.
 * * Doom effect, which is a state effect that will kill the affected battler
 *   once the state's timer wears off and expires.
 * * Fragile effect, which causes any time a user receives HP damage from a
 *   direct action, that user will instantly lose all HP.
 * * Guts, which prevents HP from dropping below 1, unless the battler's HP is
 *   at 1, itself.
 * * Undead, which causes normal HP healing to inflict damage instead, instant
 *   death effects to fully restore HP, and Drain effects to be inverted.
 * * Death Transformations, for specificly notetag-marked enemies, will cause
 *   them to undergo a transformation once they die in battle and be reborn
 *   anew with full HP/MP as something else.
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
 * - VisuMZ_1_BattleCore
 * - VisuMZ_1_SkillsStatesCore
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
 * Notetags
 * ============================================================================
 *
 * The following are notetags that have been added through this plugin. These
 * notetags will not work with your game if this plugin is OFF or not present.
 *
 * ---
 * 
 * === State-Only Effects ===
 * 
 * ---
 *
 * <Auto Life: x%>
 *
 * - Used for: State Notetags
 * - When the affected battler dies with this state present, this state will
 *   automatically remove itself (and any other states with <Auto Life: x%>) to
 *   restore that much HP% for the battler.
 * - Replace 'x' with a number representing that percentage of HP to heal the
 *   battler upon dying.
 *
 * ---
 *
 * <Doom>
 *
 * - Used for: State Notetags
 * - When this state expires naturally (without direct removal), kill the
 *   affected battler.
 *
 * ---
 * 
 * === Trait-Object Effects ===
 * 
 * ---
 *
 * <Curse HP>
 * <Curse MP>
 * <Curse TP>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - Prevents the affected battler from being able to recover HP, MP, and/or TP
 *   depending on which notetag is being used.
 *
 * ---
 *
 * <Fragile>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - If a battler affected by <Fragile> receives a direct attack and takes any
 *   HP damage (as opposed to event command damage or regeneration damage),
 *   then instantly kill the affected battler.
 *
 * ---
 *
 * <Guts>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - This will prevent the battler from taking any fatal damage and leaves them
 *   with only 1 HP. However, if the battler has 1 HP and receives damage, then
 *   the battler will actually die.
 *
 * ---
 *
 * <Undead>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - If the battler receives HP Healing, it receives damage instead.
 * - If the battler is a target of an instant death skill or item, then the
 *   battler will recover full HP.
 * - If the battler is the target of an HP Drain action, then the battler will
 *   drain HP from the attacker instead.
 * - If the battler is the target of an elemental attack and the battler would
 *   absorb that element, the target will bypass the undead effect and recovers
 *   HP instead. Now your zombies can absorb "Darkness" elements.
 *
 * ---
 *
 * <Allow Undead Regen>
 *
 * - Used for: Actor, Class, Skill, Weapon, Armor, Enemy, State Notetags
 * - If an undead battler gets affected by a trait object (such as a state)
 *   with this notetag, then HP Regeneration will no longer damage the undead
 *   enemy but instead, heal it.
 *
 * ---
 * 
 * === Enemy-Only Effects ===
 * 
 * ---
 * 
 * <Death Transform>
 *  name: weight
 *  name: weight
 *  name: weight
 * </Death Transform>
 * 
 * - Used for: Enemy Notetags
 * - Upon death, the enemy will transform into another enemy with full HP/MP.
 * - Replace 'name' with the name of the enemy to transform into.
 * - Replace 'weight' with a number value representing how often the 'name'
 *   would come up. The higher the weight, the more often. You may omit this
 *   and the colon(: ) and just type in the 'name' instead.
 * 
 * Examples:
 * 
 * <Death Transform>
 *  Slime
 * </Death Transform>
 * 
 * <Death Transform>
 *  Slime: 75
 *  Goblin: 25
 * </Death Transform>
 * 
 * <Death Transform>
 *  Slime: 10
 *  Goblin
 * </Death Transform>
 * 
 * <Death Transform>
 *  Slime
 *  Goblin
 * </Death Transform>
 * 
 * ---
 * 
 * <Transform Animation: x>
 * 
 * - Used for: Enemy Notetags
 * - Requires VisuMZ_0_CoreEngine!
 * - Plays an animation on the transforming enemy upon a successful transform.
 * - This goes on the TARGET enemy that will be transformed into.
 * - This does NOT go on the enemy that is being transformed from.
 * - Replace 'x' with a number representing the ID of the animation you wish to
 *   play on the transforming enemy.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Effect Settings
 * ============================================================================
 * 
 * Auto-Life Settings
 * Curse Settings
 * Doom Settings
 * Fragile Settings
 * Guts Settings
 * Undead Settings
 * Transform Settings
 *
 * When certain effects trigger, you can have an animation play (if the
 * VisuStella MZ Core Engine is also installed) and/or a popup appear, too.
 * Each of the six effects provided by this plugin have animation and popup
 * effects that can be adjusted.
 *
 * ---
 *
 * Animation
 * 
 *   Animation ID:
 *   - Play this animation when the effect activates.
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Mirror Animation:
 *   - Mirror the effect animation?
 *   - Requires VisuMZ_0_CoreEngine.
 * 
 *   Mute Animation:
 *   - Mute the effect animation?
 *   - Requires VisuMZ_0_CoreEngine.
 *
 * ---
 *
 * Popups
 * 
 *   Text:
 *   - Text displayed upon the effect activating.
 * 
 *   Text Color:
 *   - Use #rrggbb for custom colors or regular numbers for text colors from
 *     the Window Skin.
 * 
 *   Flash Color:
 *   - Adjust the popup's flash color.
 *   - Format: [red, green, blue, alpha]
 * 
 *   Flash Duration:
 *   - What is the frame duration of the flash effect?
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
 * Version 1.06: December 14, 2023
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetag added by Arisu:
 * *** <Allow Undead Regen>
 * **** If an undead battler gets affected by a trait object (such as a state)
 *      with this notetag, then HP Regeneration will no longer damage the
 *      undead enemy but instead, heal it.
 * 
 * Version 1.05: October 12, 2023
 * * Bug Fixes!
 * ** Fixed a bug where if an undead target absorbs elemental damage, they
 *    would take damage instead of recovering it. This is now reversed and
 *    undead targets can now absorb the dark elemental energy you throw at it.
 *    Fix made by Irina.
 * * Documentation Update!
 * ** Help file updated for <Undead> notetag.
 * *** If the battler is the target of an elemental attack and the battler
 *     would absorb that element, the target will bypass the undead effect and
 *     recovers HP instead. Now your zombies can absorb "Darkness" elements.
 * 
 * Version 1.04: March 10, 2022
 * * Documentation Update!
 * ** Added new bullet point to feature list.
 * ** Help file updated for new features.
 * * New Features!
 * ** New Notetags & Plugin Parameters added by Olivia and sponsored by AndyL:
 * *** Death Transformation
 * **** When an enemy dies (and only works for enemies), transform them into
 *      another enemy with full HP/MP. This can be from a random pool of
 *      enemies, a weighted pool of enemies, a mix, or a single specific enemy.
 * **** Animations and popups will play upon a death transformation. Unique
 *      animations can also be set for specific target transformations.
 * 
 * Version 1.03: June 24, 2021
 * * Bug Fixes!
 * ** Doom expiration should no longer affect temporary actors during
 *    calculations and causing crashes. Fix made by Olivia.
 * 
 * Version 1.02: March 12, 2021
 * * Bug Fixes!
 * ** When Doom is applied but the battler later gains state resistance to
 *    Doom, Doom will no longer instantly kill the battler. Fix made by Irina.
 * 
 * Version 1.01: February 12, 2021
 * * Bug Fixes!
 * ** Added a check to prevent an infinite loop with Doom. Fix made by Olivia.
 *
 * Version 1.00: October 7, 2020
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
 * @param LifeStateEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param AutoLife:struct
 * @text Auto Life Settings
 * @type struct<Effect>
 * @desc Notification settings pertaining to the Auto Life effect.
 * @default {"Animation":"","AnimationID:num":"50","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"AUTOLIFE","TextColor:str":"0","FlashColor:eval":"[0, 255, 128, 160]","FlashDuration:num":"60"}
 *
 * @param Curse:struct
 * @text Curse Settings
 * @type struct<Effect>
 * @desc Notification settings pertaining to the Curse effect.
 * @default {"Animation":"","AnimationID:num":"54","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"CURSE","TextColor:str":"0","FlashColor:eval":"[0, 0, 128, 160]","FlashDuration:num":"60"}
 *
 * @param Doom:struct
 * @text Doom Settings
 * @type struct<Effect>
 * @desc Notification settings pertaining to the Doom effect.
 * @default {"Animation":"","AnimationID:num":"65","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"DOOM","TextColor:str":"0","FlashColor:eval":"[128, 0, 0, 160]","FlashDuration:num":"60"}
 *
 * @param Fragile:struct
 * @text Fragile Settings
 * @type struct<Effect>
 * @desc Notification settings pertaining to the Fragile effect.
 * @default {"Animation":"","AnimationID:num":"60","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"FRAGILE","TextColor:str":"0","FlashColor:eval":"[255, 0, 0, 160]","FlashDuration:num":"60"}
 *
 * @param Guts:struct
 * @text Guts Settings
 * @type struct<Effect>
 * @desc Notification settings pertaining to the Guts effect.
 * @default {"Animation":"","AnimationID:num":"51","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"GUTS","TextColor:str":"0","FlashColor:eval":"[255, 255, 255, 160]","FlashDuration:num":"60"}
 *
 * @param Undead:struct
 * @text Undead Settings
 * @type struct<Effect>
 * @desc Notification settings pertaining to the Undead effect.
 * @default {"Animation":"","AnimationID:num":"58","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"UNDEAD","TextColor:str":"0","FlashColor:eval":"[128, 128, 128, 160]","FlashDuration:num":"60"}
 *
 * @param Transform:struct
 * @text Transform Settings
 * @type struct<Effect>
 * @desc Notification settings pertaining to the Transform effect.
 * This also affects event commands for transformation.
 * @default {"Animation":"","AnimationID:num":"49","Mirror:eval":"false","Mute:eval":"false","Popups":"","PopupText:str":"TRANSFORM","TextColor:str":"0","FlashColor:eval":"[255, 255, 0, 160]","FlashDuration:num":"60"}
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
 * Effect Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Effect:
 *
 * @param Animation
 *
 * @param AnimationID:num
 * @text Animation ID
 * @parent Animation
 * @type animation
 * @desc Play this animation when the effect activates.
 * Requires VisuMZ_0_CoreEngine.
 * @default 0
 *
 * @param Mirror:eval
 * @text Mirror Animation
 * @parent Animation
 * @type boolean
 * @on Mirror
 * @off Normal
 * @desc Mirror the effect animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param Mute:eval
 * @text Mute Animation
 * @parent Animation
 * @type boolean
 * @on Mute
 * @off Normal
 * @desc Mute the effect animation?
 * Requires VisuMZ_0_CoreEngine.
 * @default false
 *
 * @param Popups
 *
 * @param PopupText:str
 * @text Text
 * @parent Popups
 * @desc Text displayed upon the effect activating.
 * @default TEXT
 *
 * @param TextColor:str
 * @text Text Color
 * @parent Popups
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param FlashColor:eval
 * @text Flash Color
 * @parent Popups
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 255, 255, 160]
 * 
 * @param FlashDuration:num
 * @text Flash Duration
 * @parent Popups
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 */
//=============================================================================

const _0x5dcf4d=_0xce13;function _0xce13(_0x23b7fe,_0x2266f5){const _0x2f4441=_0x2f44();return _0xce13=function(_0xce1329,_0x22d8bc){_0xce1329=_0xce1329-0x111;let _0x21b709=_0x2f4441[_0xce1329];return _0x21b709;},_0xce13(_0x23b7fe,_0x2266f5);}(function(_0x52d27e,_0x2b2db4){const _0x3bd47c=_0xce13,_0x4a92ae=_0x52d27e();while(!![]){try{const _0x56be5c=-parseInt(_0x3bd47c(0x128))/0x1*(parseInt(_0x3bd47c(0x122))/0x2)+parseInt(_0x3bd47c(0x19b))/0x3*(-parseInt(_0x3bd47c(0x1c3))/0x4)+-parseInt(_0x3bd47c(0x193))/0x5+-parseInt(_0x3bd47c(0x149))/0x6*(-parseInt(_0x3bd47c(0x13d))/0x7)+-parseInt(_0x3bd47c(0x116))/0x8*(parseInt(_0x3bd47c(0x171))/0x9)+parseInt(_0x3bd47c(0x180))/0xa+parseInt(_0x3bd47c(0x14a))/0xb;if(_0x56be5c===_0x2b2db4)break;else _0x4a92ae['push'](_0x4a92ae['shift']());}catch(_0x3c4ba7){_0x4a92ae['push'](_0x4a92ae['shift']());}}}(_0x2f44,0xaed60));var label='LifeStateEffects',tier=tier||0x0,dependencies=[_0x5dcf4d(0x12b),_0x5dcf4d(0x165)],pluginData=$plugins[_0x5dcf4d(0x197)](function(_0x5cf254){const _0x2cd8a1=_0x5dcf4d;return _0x5cf254['status']&&_0x5cf254[_0x2cd8a1(0x134)]['includes']('['+label+']');})[0x0];VisuMZ[label][_0x5dcf4d(0x170)]=VisuMZ[label][_0x5dcf4d(0x170)]||{},VisuMZ[_0x5dcf4d(0x11b)]=function(_0x5b9581,_0x48ad07){const _0x308bc2=_0x5dcf4d;for(const _0x5ab1a0 in _0x48ad07){if(_0x5ab1a0['match'](/(.*):(.*)/i)){const _0x1c44c5=String(RegExp['$1']),_0x194785=String(RegExp['$2'])[_0x308bc2(0x1a3)]()[_0x308bc2(0x156)]();let _0x464108,_0x5216ae,_0x37ba18;switch(_0x194785){case _0x308bc2(0x137):_0x464108=_0x48ad07[_0x5ab1a0]!==''?Number(_0x48ad07[_0x5ab1a0]):0x0;break;case _0x308bc2(0x113):_0x5216ae=_0x48ad07[_0x5ab1a0]!==''?JSON[_0x308bc2(0x179)](_0x48ad07[_0x5ab1a0]):[],_0x464108=_0x5216ae[_0x308bc2(0x12c)](_0x386638=>Number(_0x386638));break;case _0x308bc2(0x1a2):_0x464108=_0x48ad07[_0x5ab1a0]!==''?eval(_0x48ad07[_0x5ab1a0]):null;break;case _0x308bc2(0x153):_0x5216ae=_0x48ad07[_0x5ab1a0]!==''?JSON[_0x308bc2(0x179)](_0x48ad07[_0x5ab1a0]):[],_0x464108=_0x5216ae[_0x308bc2(0x12c)](_0x1a7e55=>eval(_0x1a7e55));break;case _0x308bc2(0x15c):_0x464108=_0x48ad07[_0x5ab1a0]!==''?JSON['parse'](_0x48ad07[_0x5ab1a0]):'';break;case _0x308bc2(0x1af):_0x5216ae=_0x48ad07[_0x5ab1a0]!==''?JSON[_0x308bc2(0x179)](_0x48ad07[_0x5ab1a0]):[],_0x464108=_0x5216ae[_0x308bc2(0x12c)](_0x39a600=>JSON[_0x308bc2(0x179)](_0x39a600));break;case _0x308bc2(0x1aa):_0x464108=_0x48ad07[_0x5ab1a0]!==''?new Function(JSON[_0x308bc2(0x179)](_0x48ad07[_0x5ab1a0])):new Function(_0x308bc2(0x1b5));break;case _0x308bc2(0x1ab):_0x5216ae=_0x48ad07[_0x5ab1a0]!==''?JSON[_0x308bc2(0x179)](_0x48ad07[_0x5ab1a0]):[],_0x464108=_0x5216ae[_0x308bc2(0x12c)](_0x1f95d7=>new Function(JSON['parse'](_0x1f95d7)));break;case'STR':_0x464108=_0x48ad07[_0x5ab1a0]!==''?String(_0x48ad07[_0x5ab1a0]):'';break;case _0x308bc2(0x19c):_0x5216ae=_0x48ad07[_0x5ab1a0]!==''?JSON[_0x308bc2(0x179)](_0x48ad07[_0x5ab1a0]):[],_0x464108=_0x5216ae[_0x308bc2(0x12c)](_0xceadeb=>String(_0xceadeb));break;case'STRUCT':_0x37ba18=_0x48ad07[_0x5ab1a0]!==''?JSON[_0x308bc2(0x179)](_0x48ad07[_0x5ab1a0]):{},_0x464108=VisuMZ['ConvertParams']({},_0x37ba18);break;case _0x308bc2(0x1bc):_0x5216ae=_0x48ad07[_0x5ab1a0]!==''?JSON['parse'](_0x48ad07[_0x5ab1a0]):[],_0x464108=_0x5216ae[_0x308bc2(0x12c)](_0x313ec8=>VisuMZ[_0x308bc2(0x11b)]({},JSON[_0x308bc2(0x179)](_0x313ec8)));break;default:continue;}_0x5b9581[_0x1c44c5]=_0x464108;}}return _0x5b9581;},(_0x335107=>{const _0x382859=_0x5dcf4d,_0x46a9c7=_0x335107[_0x382859(0x121)];for(const _0x47b3d0 of dependencies){if(_0x382859(0x18e)!==_0x382859(0x11f)){if(!Imported[_0x47b3d0]){alert(_0x382859(0x1b7)[_0x382859(0x1b3)](_0x46a9c7,_0x47b3d0)),SceneManager[_0x382859(0x12d)]();break;}}else this[_0x382859(0x1b2)]=!![],_0x2a8050[_0x382859(0x114)][_0x382859(0x166)]['call'](this,_0x3077e4),this[_0x382859(0x1b2)]=_0x477bf1;}const _0x3b397b=_0x335107[_0x382859(0x134)];if(_0x3b397b[_0x382859(0x1a6)](/\[Version[ ](.*?)\]/i)){const _0x14bab0=Number(RegExp['$1']);_0x14bab0!==VisuMZ[label]['version']&&(alert(_0x382859(0x1b4)[_0x382859(0x1b3)](_0x46a9c7,_0x14bab0)),SceneManager[_0x382859(0x12d)]());}if(_0x3b397b[_0x382859(0x1a6)](/\[Tier[ ](\d+)\]/i)){const _0x416ebb=Number(RegExp['$1']);if(_0x416ebb<tier)alert('%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.'[_0x382859(0x1b3)](_0x46a9c7,_0x416ebb,tier)),SceneManager['exit']();else{if('MMGzW'==='dJGEo'){if(this['_processingVisuMzDoomEffect'])return;if(this['_tempBattler'])return;this[_0x382859(0x185)]=!![],this[_0x382859(0x1b1)](0x0),this[_0x382859(0x1ad)](),this[_0x382859(0x185)]=_0x308fff;if(!this[_0x382859(0x144)]())return;this[_0x382859(0x1b6)](_0x382859(0x155)),this['performCollapse'](),this[_0x382859(0x16c)]('dead');const _0x572e3d=this[_0x382859(0x150)]();_0x572e3d&&(_0x572e3d[_0x382859(0x1a4)]=_0x382859(0x16f));}else tier=Math[_0x382859(0x160)](_0x416ebb,tier);}}VisuMZ['ConvertParams'](VisuMZ[label][_0x382859(0x170)],_0x335107[_0x382859(0x182)]);})(pluginData),VisuMZ[_0x5dcf4d(0x114)][_0x5dcf4d(0x118)]={'guts':/<(?:GUTS)>/i,'undead':/<(?:UNDEAD|ZOMBIE|DAMAGE FROM HEALING)>/i,'allowUndeadRegen':/<ALLOW (?:UNDEAD|ZOMBIE|DAMAGE FROM HEALING) REGEN(?:|ERATE)>/i,'fragile':/<(?:FRAGILE|ONE HIT KILL|DEATH ON HP DAMAGE)>/i,'noHealHp':/<(?:CANNOT HEAL HP|CANNOT RECOVER HP|CURSE HP)>/i,'noHealMp':/<(?:CANNOT HEAL MP|CANNOT RECOVER MP|CURSE MP)>/i,'noHealTp':/<(?:CANNOT HEAL TP|CANNOT RECOVER TP|CURSE TP)>/i,'autoLife':/<(?:AUTOLIFE|AUTO LIFE):[ ](\d+)([%％])>/i,'doom':/<(?:DOOM|DEATH SENTENCE)>/i,'deathTransform':/<DEATH (?:TRANSFORM|TRANSFORMATION)>\s*([\s\S]*)\s*<\/DEATH (?:TRANSFORM|TRANSFORMATION)>/i,'transformAni':/<(?:TRANSFORM|TRANSFORMATION) ANIMATION:[ ](\d+)>/i},DataManager[_0x5dcf4d(0x152)]=function(_0x5c3066){const _0x3f09dd=_0x5dcf4d;_0x5c3066=_0x5c3066[_0x3f09dd(0x1a3)]()[_0x3f09dd(0x156)](),this['_enemyIDs']=this[_0x3f09dd(0x146)]||{};if(this[_0x3f09dd(0x146)][_0x5c3066])return this[_0x3f09dd(0x146)][_0x5c3066];for(const _0x220f3b of $dataEnemies){if(!_0x220f3b)continue;this[_0x3f09dd(0x146)][_0x220f3b[_0x3f09dd(0x121)][_0x3f09dd(0x1a3)]()[_0x3f09dd(0x156)]()]=_0x220f3b['id'];}return this[_0x3f09dd(0x146)][_0x5c3066]||0x0;},Game_Battler[_0x5dcf4d(0x181)][_0x5dcf4d(0x1b6)]=function(_0x3cb748){const _0x5c93a4=_0x5dcf4d;if(!SceneManager[_0x5c93a4(0x17f)]())return![];const _0x2740aa=VisuMZ[_0x5c93a4(0x114)][_0x5c93a4(0x170)][_0x3cb748];if(!_0x2740aa)return;if(_0x3cb748===_0x5c93a4(0x188)&&this['postTransformationAnimation']()>0x0){}else{if(Imported['VisuMZ_0_CoreEngine']&&_0x2740aa['AnimationID']>0x0){const _0x1efb55=[this],_0x584374=_0x2740aa[_0x5c93a4(0x129)],_0x4f3bd9=_0x2740aa[_0x5c93a4(0x1a0)],_0x245462=_0x2740aa[_0x5c93a4(0x151)];$gameTemp[_0x5c93a4(0x1b9)](_0x1efb55,_0x584374,_0x4f3bd9,_0x245462);}}if(_0x2740aa['PopupText']!==''){if(_0x5c93a4(0x187)===_0x5c93a4(0x136)){const _0x194586=_0x5c93a4(0x13c);if(this['checkCacheKey'](_0x194586))return this[_0x5c93a4(0x11c)][_0x194586];const _0x22889b=this[_0x5c93a4(0x173)]()[_0x5c93a4(0x1c1)](this[_0x5c93a4(0x15a)]());return this['_cache'][_0x194586]=_0x22889b['some'](_0x4e95c6=>_0x4e95c6&&_0x4e95c6[_0x5c93a4(0x19e)]['match'](_0x4c83f3[_0x5c93a4(0x114)][_0x5c93a4(0x118)][_0x5c93a4(0x119)])),this[_0x5c93a4(0x11c)][_0x194586];}else{const _0x1c063a={'textColor':_0x2740aa[_0x5c93a4(0x17e)],'flashColor':_0x2740aa[_0x5c93a4(0x1c4)],'flashDuration':_0x2740aa[_0x5c93a4(0x18a)]};this[_0x5c93a4(0x157)](_0x2740aa[_0x5c93a4(0x148)],_0x1c063a);}}},VisuMZ['LifeStateEffects']['Game_BattlerBase_addNewState']=Game_BattlerBase[_0x5dcf4d(0x181)]['addNewState'],Game_BattlerBase['prototype'][_0x5dcf4d(0x1c0)]=function(_0x4f586d){const _0x45394c=_0x5dcf4d;if(_0x4f586d===this[_0x45394c(0x177)]()){if(_0x45394c(0x125)==='ujBYe'){if(this[_0x45394c(0x12f)]()){if(_0x45394c(0x13b)!==_0x45394c(0x169))return this[_0x45394c(0x172)]();else _0x574ed3[_0x45394c(0x1bb)]=!![],_0x1ca489[_0x45394c(0x17d)](_0x5aac0c['mhp']),_0x382cab[_0x45394c(0x1bb)]=_0xc6ae7f,_0x4a27a3[_0x45394c(0x1b6)](_0x45394c(0x11e));}if(this[_0x45394c(0x140)]()&&this[_0x45394c(0x139)]())return this[_0x45394c(0x163)]();}else _0xc356c1[_0x45394c(0x1bb)]=!![];}VisuMZ['LifeStateEffects'][_0x45394c(0x1a7)][_0x45394c(0x1b8)](this,_0x4f586d);},Game_BattlerBase[_0x5dcf4d(0x181)][_0x5dcf4d(0x12f)]=function(){const _0x40d5ce=_0x5dcf4d;if(!SceneManager[_0x40d5ce(0x17f)]())return![];const _0xf8f17c=_0x40d5ce(0x194);if(this['checkCacheKey'](_0xf8f17c))return this[_0x40d5ce(0x11c)][_0xf8f17c];const _0x6599f=this[_0x40d5ce(0x173)]()[_0x40d5ce(0x1c1)](this['skills']());return this[_0x40d5ce(0x11c)][_0xf8f17c]=_0x6599f[_0x40d5ce(0x168)](_0x5081e=>_0x5081e&&_0x5081e['note'][_0x40d5ce(0x1a6)](VisuMZ[_0x40d5ce(0x114)][_0x40d5ce(0x118)][_0x40d5ce(0x14e)])),this[_0x40d5ce(0x11c)][_0xf8f17c];},Game_Battler[_0x5dcf4d(0x181)][_0x5dcf4d(0x172)]=function(){const _0x2c249b=_0x5dcf4d,_0x230357=JsonEx['makeDeepCopy'](this['_result']),_0x4c4a5a=VisuMZ[_0x2c249b(0x114)][_0x2c249b(0x118)][_0x2c249b(0x14e)];let _0x62b797=this[_0x2c249b(0x183)]()[_0x2c249b(0x12c)](_0x173df3=>_0x173df3&&_0x173df3[_0x2c249b(0x19e)][_0x2c249b(0x1a6)](_0x4c4a5a)?Number(RegExp['$1'])*0.01:0x0);const _0x4e873c=_0x62b797[_0x2c249b(0x1ba)]((_0x4f3f82,_0xc1ee43)=>_0x4f3f82+_0xc1ee43,0x0);let _0x1c7fb2=Math[_0x2c249b(0x1ae)](_0x4e873c*this[_0x2c249b(0x131)]);_0x1c7fb2=_0x1c7fb2[_0x2c249b(0x14f)](0x0,this['mhp']);if(_0x1c7fb2<=0x0)return;this[_0x2c249b(0x1b1)](_0x1c7fb2),this['clearResult'](),this[_0x2c249b(0x176)][_0x2c249b(0x123)]=-_0x1c7fb2,this['_result']['hpAffected']=!![],this['startDamagePopup']();for(const _0x177b1b of this[_0x2c249b(0x183)]()){if(_0x2c249b(0x12a)!==_0x2c249b(0x12a))this[_0x2c249b(0x1b6)](_0x2c249b(0x17a)),_0x2f8629=0x1;else{if(!_0x177b1b)continue;_0x177b1b[_0x2c249b(0x19e)][_0x2c249b(0x1a6)](_0x4c4a5a)&&this['removeState'](_0x177b1b['id']);}}this[_0x2c249b(0x1b6)](_0x2c249b(0x14c)),this['_result']=_0x230357;},VisuMZ[_0x5dcf4d(0x114)]['Game_Battler_removeStatesAuto']=Game_Battler[_0x5dcf4d(0x181)]['removeStatesAuto'],Game_Battler['prototype']['removeStatesAuto']=function(_0x5b6018){const _0x3c5488=_0x5dcf4d;this[_0x3c5488(0x1b2)]=!![],VisuMZ[_0x3c5488(0x114)][_0x3c5488(0x166)][_0x3c5488(0x1b8)](this,_0x5b6018),this[_0x3c5488(0x1b2)]=undefined;},VisuMZ[_0x5dcf4d(0x114)]['Game_BattlerBase_eraseState']=Game_BattlerBase[_0x5dcf4d(0x181)][_0x5dcf4d(0x18b)],Game_BattlerBase[_0x5dcf4d(0x181)][_0x5dcf4d(0x18b)]=function(_0x583df6){const _0x14e096=_0x5dcf4d,_0x5f0f80=this[_0x14e096(0x13e)](_0x583df6);VisuMZ[_0x14e096(0x114)][_0x14e096(0x17b)]['call'](this,_0x583df6);const _0x36a7d9=$dataStates[_0x583df6];this[_0x14e096(0x1b2)]&&_0x36a7d9&&_0x36a7d9[_0x14e096(0x19e)][_0x14e096(0x1a6)](VisuMZ[_0x14e096(0x114)][_0x14e096(0x118)][_0x14e096(0x1be)])&&_0x5f0f80&&(_0x14e096(0x15e)!==_0x14e096(0x167)?this[_0x14e096(0x189)]():_0x58e885[_0x14e096(0x1a4)]='dead');},Game_Battler[_0x5dcf4d(0x181)][_0x5dcf4d(0x189)]=function(){const _0x195d8a=_0x5dcf4d;if(this['_processingVisuMzDoomEffect'])return;if(this['_tempBattler'])return;this[_0x195d8a(0x185)]=!![],this[_0x195d8a(0x1b1)](0x0),this[_0x195d8a(0x1ad)](),this[_0x195d8a(0x185)]=undefined;if(!this[_0x195d8a(0x144)]())return;this[_0x195d8a(0x1b6)](_0x195d8a(0x155)),this[_0x195d8a(0x18d)](),this[_0x195d8a(0x16c)](_0x195d8a(0x16f));const _0x3bd756=this['battler']();_0x3bd756&&(_0x195d8a(0x15b)!==_0x195d8a(0x112)?_0x3bd756[_0x195d8a(0x1a4)]=_0x195d8a(0x16f):this[_0x195d8a(0x189)]());},Game_BattlerBase['prototype'][_0x5dcf4d(0x1bd)]=function(){const _0x1c2569=_0x5dcf4d;if(!SceneManager['isSceneBattle']())return![];const _0x433c66=_0x1c2569(0x138);if(this['checkCacheKey'](_0x433c66))return this['_cache'][_0x433c66];const _0x5a2dca=this[_0x1c2569(0x173)]()[_0x1c2569(0x1c1)](this[_0x1c2569(0x15a)]());return this['_cache'][_0x433c66]=_0x5a2dca[_0x1c2569(0x168)](_0x3a6789=>_0x3a6789&&_0x3a6789['note'][_0x1c2569(0x1a6)](VisuMZ['LifeStateEffects'][_0x1c2569(0x118)][_0x1c2569(0x115)])),this[_0x1c2569(0x11c)][_0x433c66];},VisuMZ[_0x5dcf4d(0x114)][_0x5dcf4d(0x178)]=Game_Action['prototype'][_0x5dcf4d(0x1a8)],Game_Action['prototype']['executeHpDamage']=function(_0x433f59,_0x3b25bb){const _0x4b9b01=_0x5dcf4d;VisuMZ[_0x4b9b01(0x114)][_0x4b9b01(0x178)][_0x4b9b01(0x1b8)](this,_0x433f59,_0x3b25bb),_0x3b25bb>0x0&&_0x433f59[_0x4b9b01(0x1bd)]()&&(_0x433f59[_0x4b9b01(0x1b1)](0x0),_0x433f59[_0x4b9b01(0x1b6)](_0x4b9b01(0x1ac)));},Game_BattlerBase[_0x5dcf4d(0x181)][_0x5dcf4d(0x126)]=function(){const _0x43677f=_0x5dcf4d;if(!SceneManager[_0x43677f(0x17f)]())return![];if(this['hp']<=0x1)return![];const _0xc4d68c=_0x43677f(0x135);if(this[_0x43677f(0x11d)](_0xc4d68c))return this[_0x43677f(0x11c)][_0xc4d68c];const _0x1e6847=this[_0x43677f(0x173)]()[_0x43677f(0x1c1)](this[_0x43677f(0x15a)]());return this[_0x43677f(0x11c)][_0xc4d68c]=_0x1e6847[_0x43677f(0x168)](_0x263af5=>_0x263af5&&_0x263af5[_0x43677f(0x19e)][_0x43677f(0x1a6)](VisuMZ[_0x43677f(0x114)]['RegExp']['guts'])),this['_cache'][_0xc4d68c];},VisuMZ['LifeStateEffects'][_0x5dcf4d(0x19d)]=Game_BattlerBase[_0x5dcf4d(0x181)][_0x5dcf4d(0x1b1)],Game_BattlerBase[_0x5dcf4d(0x181)][_0x5dcf4d(0x1b1)]=function(_0x10c6be){const _0x50f3f8=_0x5dcf4d;this['hasLifeStateGutsEffect']()&&_0x10c6be<=0x0&&(_0x50f3f8(0x16e)!==_0x50f3f8(0x195)?(this[_0x50f3f8(0x1b6)](_0x50f3f8(0x17a)),_0x10c6be=0x1):this['subject']()[_0x50f3f8(0x1bb)]=!![]),VisuMZ[_0x50f3f8(0x114)]['Game_BattlerBase_setHp'][_0x50f3f8(0x1b8)](this,_0x10c6be);},Game_BattlerBase['prototype'][_0x5dcf4d(0x164)]=function(){const _0x123cb1=_0x5dcf4d;if(this[_0x123cb1(0x1bb)])return![];const _0x28bc65=_0x123cb1(0x142);if(this[_0x123cb1(0x11d)](_0x28bc65))return this[_0x123cb1(0x11c)][_0x28bc65];const _0x5be5f1=this['traitObjects']()[_0x123cb1(0x1c1)](this['skills']());return this[_0x123cb1(0x11c)][_0x28bc65]=_0x5be5f1[_0x123cb1(0x168)](_0x544eec=>_0x544eec&&_0x544eec[_0x123cb1(0x19e)][_0x123cb1(0x1a6)](VisuMZ[_0x123cb1(0x114)][_0x123cb1(0x118)]['undead'])),this['_cache'][_0x28bc65];},VisuMZ[_0x5dcf4d(0x114)]['Game_Battler_gainHp']=Game_Battler[_0x5dcf4d(0x181)][_0x5dcf4d(0x17d)],Game_Battler[_0x5dcf4d(0x181)]['gainHp']=function(_0x588bfe){const _0x46d6d6=_0x5dcf4d;this[_0x46d6d6(0x164)]()&&_0x588bfe>0x0&&(_0x588bfe*=-0x1,this['onLifeStateEffect']('Undead')),VisuMZ['LifeStateEffects'][_0x46d6d6(0x159)][_0x46d6d6(0x1b8)](this,_0x588bfe);},VisuMZ[_0x5dcf4d(0x114)][_0x5dcf4d(0x15f)]=Game_Action[_0x5dcf4d(0x181)]['executeDamage'],Game_Action[_0x5dcf4d(0x181)]['executeDamage']=function(_0x2e2e3f,_0x26df10){const _0x1de00f=_0x5dcf4d;if(this[_0x1de00f(0x16d)]()&&this[_0x1de00f(0x158)]()&&_0x26df10>0x0){if('QtoOE'!==_0x1de00f(0x154)){const _0x489be1=[this],_0x306d83=_0x118772['AnimationID'],_0x16b31b=_0xec9fff[_0x1de00f(0x1a0)],_0x10b59c=_0xde70a5['Mute'];_0x133aee[_0x1de00f(0x1b9)](_0x489be1,_0x306d83,_0x16b31b,_0x10b59c);}else this[_0x1de00f(0x186)]()[_0x1de00f(0x164)]()&&(this[_0x1de00f(0x186)]()['_allowUndeadHpHeal']=!![]),_0x2e2e3f['hasLifeStateUndeadEffect']()&&(_0x26df10*=-0x1,_0x2e2e3f[_0x1de00f(0x1bb)]=!![],_0x2e2e3f['onLifeStateEffect'](_0x1de00f(0x11e)));}if(Imported['VisuMZ_1_ElementStatusCore']&&_0x26df10<0x0&&_0x2e2e3f[_0x1de00f(0x164)]()){if('beTSm'===_0x1de00f(0x1a5)){if(!_0x16326e['isSceneBattle']())return![];const _0x74485e=_0x30042a['LifeStateEffects']['Settings'][_0x3f4a6e];if(!_0x74485e)return;if(_0xa93832===_0x1de00f(0x188)&&this[_0x1de00f(0x1b0)]()>0x0){}else{if(_0x35f513[_0x1de00f(0x199)]&&_0x74485e[_0x1de00f(0x129)]>0x0){const _0x3088ce=[this],_0x1661c7=_0x74485e[_0x1de00f(0x129)],_0x15fabc=_0x74485e[_0x1de00f(0x1a0)],_0x9e863a=_0x74485e[_0x1de00f(0x151)];_0x31b5bc['requestFauxAnimation'](_0x3088ce,_0x1661c7,_0x15fabc,_0x9e863a);}}if(_0x74485e['PopupText']!==''){const _0x241447={'textColor':_0x74485e[_0x1de00f(0x17e)],'flashColor':_0x74485e[_0x1de00f(0x1c4)],'flashDuration':_0x74485e[_0x1de00f(0x18a)]};this[_0x1de00f(0x157)](_0x74485e[_0x1de00f(0x148)],_0x241447);}}else{const _0x4ee238=this[_0x1de00f(0x18c)](_0x2e2e3f);if(_0x4ee238<0x0)_0x2e2e3f[_0x1de00f(0x1bb)]=!![];}}VisuMZ[_0x1de00f(0x114)][_0x1de00f(0x15f)][_0x1de00f(0x1b8)](this,_0x2e2e3f,_0x26df10),_0x2e2e3f[_0x1de00f(0x1bb)]=undefined,this[_0x1de00f(0x186)]()['_allowUndeadHpHeal']=undefined;},VisuMZ['LifeStateEffects'][_0x5dcf4d(0x162)]=Game_Action[_0x5dcf4d(0x181)]['itemEffectAddAttackState'],Game_Action['prototype'][_0x5dcf4d(0x133)]=function(_0x1c8a94,_0x324876){const _0x3930df=_0x5dcf4d;_0x1c8a94['hasLifeStateUndeadEffect']()&&(_0x3930df(0x14b)!==_0x3930df(0x14b)?(this[_0x3930df(0x164)]()&&_0x3f9372>0x0&&(_0x15bbe7*=-0x1,this[_0x3930df(0x1b6)](_0x3930df(0x11e))),_0x3260e9[_0x3930df(0x114)][_0x3930df(0x159)][_0x3930df(0x1b8)](this,_0x48e6e9)):_0x1c8a94[_0x3930df(0x1bb)]=!![]),VisuMZ[_0x3930df(0x114)][_0x3930df(0x162)][_0x3930df(0x1b8)](this,_0x1c8a94,_0x324876),_0x1c8a94['_allowUndeadHpHeal']=undefined;},VisuMZ[_0x5dcf4d(0x114)][_0x5dcf4d(0x147)]=Game_Battler[_0x5dcf4d(0x181)][_0x5dcf4d(0x1a9)],Game_Battler[_0x5dcf4d(0x181)][_0x5dcf4d(0x1a9)]=function(_0x33ce02){const _0x2d24ac=_0x5dcf4d;if(_0x33ce02===this[_0x2d24ac(0x177)]()&&this[_0x2d24ac(0x1bb)])this[_0x2d24ac(0x17d)](this['mhp']),this[_0x2d24ac(0x1b6)](_0x2d24ac(0x11e));else{if(_0x2d24ac(0x12e)==='RIvri'){const _0x166c33=_0x3b13b1[_0x2d24ac(0x114)][_0x2d24ac(0x118)],_0x4bc485=this[_0x2d24ac(0x13a)]()[_0x2d24ac(0x19e)]||'';return _0x4bc485[_0x2d24ac(0x1a6)](_0x166c33['transformAni'])?_0x19a4a7(_0x58a10a['$1']):0x0;}else VisuMZ[_0x2d24ac(0x114)][_0x2d24ac(0x147)][_0x2d24ac(0x1b8)](this,_0x33ce02);}},VisuMZ[_0x5dcf4d(0x114)][_0x5dcf4d(0x18f)]=Game_Action['prototype'][_0x5dcf4d(0x117)],Game_Action['prototype'][_0x5dcf4d(0x117)]=function(_0x42d969,_0x4a6e5c){const _0x450644=_0x5dcf4d;_0x4a6e5c[_0x450644(0x14d)]===_0x42d969[_0x450644(0x177)]()&&_0x42d969['hasLifeStateUndeadEffect']()?(_0x42d969['_allowUndeadHpHeal']=!![],_0x42d969['gainHp'](_0x42d969[_0x450644(0x131)]),_0x42d969['_allowUndeadHpHeal']=undefined,_0x42d969['onLifeStateEffect'](_0x450644(0x11e))):VisuMZ[_0x450644(0x114)][_0x450644(0x18f)][_0x450644(0x1b8)](this,_0x42d969,_0x4a6e5c);},Game_BattlerBase['prototype']['hasLifeStateAllowUndeadRegenEffect']=function(){const _0x2d6c33=_0x5dcf4d,_0x2fbe2f=_0x2d6c33(0x1a1);if(this[_0x2d6c33(0x11d)](_0x2fbe2f))return this[_0x2d6c33(0x11c)][_0x2fbe2f];const _0x1abf12=this[_0x2d6c33(0x173)]()[_0x2d6c33(0x1c1)](this['skills']());return this[_0x2d6c33(0x11c)][_0x2fbe2f]=_0x1abf12[_0x2d6c33(0x168)](_0x5882da=>_0x5882da&&_0x5882da[_0x2d6c33(0x19e)]['match'](VisuMZ[_0x2d6c33(0x114)][_0x2d6c33(0x118)][_0x2d6c33(0x19f)])),this[_0x2d6c33(0x11c)][_0x2fbe2f];},VisuMZ['LifeStateEffects'][_0x5dcf4d(0x1c2)]=Game_Battler[_0x5dcf4d(0x181)][_0x5dcf4d(0x16b)],Game_Battler['prototype'][_0x5dcf4d(0x16b)]=function(){const _0x3f84f3=_0x5dcf4d;if(this[_0x3f84f3(0x164)]()&&this[_0x3f84f3(0x130)]()){if(_0x3f84f3(0x15d)==='OhfPq'){const _0x259968=this[_0x3f84f3(0x16a)]();if(_0x259968>0x0)this[_0x3f84f3(0x120)](_0x259968);else{const _0x4d535b=this[_0x3f84f3(0x177)]();_0x338182['LifeStateEffects'][_0x3f84f3(0x1a7)][_0x3f84f3(0x1b8)](this,_0x4d535b);}}else this[_0x3f84f3(0x1bb)]=!![];}VisuMZ['LifeStateEffects'][_0x3f84f3(0x1c2)][_0x3f84f3(0x1b8)](this),this[_0x3f84f3(0x1bb)]=undefined;},Game_BattlerBase[_0x5dcf4d(0x181)][_0x5dcf4d(0x190)]=function(){const _0x4a428c=_0x5dcf4d,_0x1120e8=_0x4a428c(0x198);if(this[_0x4a428c(0x11d)](_0x1120e8))return this[_0x4a428c(0x11c)][_0x1120e8];const _0x2359a2=this[_0x4a428c(0x173)]()[_0x4a428c(0x1c1)](this['skills']());return this[_0x4a428c(0x11c)][_0x1120e8]=_0x2359a2[_0x4a428c(0x168)](_0x57be7f=>_0x57be7f&&_0x57be7f[_0x4a428c(0x19e)]['match'](VisuMZ[_0x4a428c(0x114)][_0x4a428c(0x118)][_0x4a428c(0x175)])),this[_0x4a428c(0x11c)][_0x1120e8];},Game_BattlerBase[_0x5dcf4d(0x181)][_0x5dcf4d(0x141)]=function(){const _0x527488=_0x5dcf4d,_0x20acd9=_0x527488(0x13c);if(this[_0x527488(0x11d)](_0x20acd9))return this['_cache'][_0x20acd9];const _0xf64fbd=this['traitObjects']()[_0x527488(0x1c1)](this[_0x527488(0x15a)]());return this[_0x527488(0x11c)][_0x20acd9]=_0xf64fbd[_0x527488(0x168)](_0x5a1b53=>_0x5a1b53&&_0x5a1b53['note'][_0x527488(0x1a6)](VisuMZ[_0x527488(0x114)][_0x527488(0x118)]['noHealMp'])),this[_0x527488(0x11c)][_0x20acd9];},Game_BattlerBase[_0x5dcf4d(0x181)]['hasLifeStateCurseTpEffect']=function(){const _0x3e5f28=_0x5dcf4d,_0x31cbe6=_0x3e5f28(0x127);if(this[_0x3e5f28(0x11d)](_0x31cbe6))return this[_0x3e5f28(0x11c)][_0x31cbe6];const _0x3b1ee3=this['traitObjects']()['concat'](this['skills']());return this[_0x3e5f28(0x11c)][_0x31cbe6]=_0x3b1ee3['some'](_0x154c44=>_0x154c44&&_0x154c44[_0x3e5f28(0x19e)]['match'](VisuMZ[_0x3e5f28(0x114)][_0x3e5f28(0x118)][_0x3e5f28(0x184)])),this[_0x3e5f28(0x11c)][_0x31cbe6];},VisuMZ[_0x5dcf4d(0x114)]['Game_Battler_gainHpCurse']=Game_Battler[_0x5dcf4d(0x181)][_0x5dcf4d(0x17d)],Game_Battler['prototype'][_0x5dcf4d(0x17d)]=function(_0x139011){const _0x295a07=_0x5dcf4d;_0x139011>0x0&&this['hasLifeStateCurseHpEffect']()&&(_0x139011=0x0,this[_0x295a07(0x1b6)]('Curse')),VisuMZ[_0x295a07(0x114)][_0x295a07(0x191)][_0x295a07(0x1b8)](this,_0x139011);},VisuMZ[_0x5dcf4d(0x114)]['Game_Battler_gainMpCurse']=Game_Battler[_0x5dcf4d(0x181)]['gainMp'],Game_Battler[_0x5dcf4d(0x181)][_0x5dcf4d(0x132)]=function(_0x5e27b8){const _0x85c67f=_0x5dcf4d;_0x5e27b8>0x0&&this[_0x85c67f(0x141)]()&&(_0x5e27b8=0x0,this[_0x85c67f(0x1b6)](_0x85c67f(0x111))),VisuMZ[_0x85c67f(0x114)][_0x85c67f(0x192)][_0x85c67f(0x1b8)](this,_0x5e27b8);},VisuMZ[_0x5dcf4d(0x114)][_0x5dcf4d(0x19a)]=Game_Battler[_0x5dcf4d(0x181)]['gainTp'],Game_Battler[_0x5dcf4d(0x181)]['gainTp']=function(_0x16f66d){const _0x1a899e=_0x5dcf4d;_0x16f66d>0x0&&this[_0x1a899e(0x196)]()&&(_0x16f66d=0x0,this['onLifeStateEffect']('Curse')),VisuMZ[_0x1a899e(0x114)][_0x1a899e(0x19a)][_0x1a899e(0x1b8)](this,_0x16f66d);},Game_BattlerBase[_0x5dcf4d(0x181)]['hasDeathTransform']=function(){return![];},Game_Enemy[_0x5dcf4d(0x181)][_0x5dcf4d(0x139)]=function(){const _0xc6d8f3=_0x5dcf4d;return this[_0xc6d8f3(0x13a)]()[_0xc6d8f3(0x19e)]['match'](VisuMZ[_0xc6d8f3(0x114)]['RegExp'][_0xc6d8f3(0x13f)]);},Game_Enemy[_0x5dcf4d(0x181)][_0x5dcf4d(0x163)]=function(){const _0x3b3f26=_0x5dcf4d,_0x1b9b63=this[_0x3b3f26(0x16a)]();if(_0x1b9b63>0x0)this[_0x3b3f26(0x120)](_0x1b9b63);else{const _0x4917b7=this['deathStateId']();VisuMZ[_0x3b3f26(0x114)][_0x3b3f26(0x1a7)][_0x3b3f26(0x1b8)](this,_0x4917b7);}},Game_Enemy['prototype'][_0x5dcf4d(0x16a)]=function(){const _0x3af91c=_0x5dcf4d,_0x4127a6=VisuMZ[_0x3af91c(0x114)][_0x3af91c(0x118)],_0x1e6bfc=this[_0x3af91c(0x13a)]()['note']||'';if(_0x1e6bfc['match'](_0x4127a6[_0x3af91c(0x13f)])){const _0x441254=String(RegExp['$1'])['split'](/[\r\n]+/)[_0x3af91c(0x1bf)](''),_0x262cc8=DataManager[_0x3af91c(0x17c)](_0x441254);if(_0x262cc8['match'](/ENEMY[ ](\d+)/i))return Number(RegExp['$1']);else{if(_0x3af91c(0x124)!=='jglzD'){if(!_0x3b2081[_0x3af91c(0x17f)]())return![];const _0x12a245=_0x3af91c(0x194);if(this[_0x3af91c(0x11d)](_0x12a245))return this[_0x3af91c(0x11c)][_0x12a245];const _0xeef36b=this[_0x3af91c(0x173)]()[_0x3af91c(0x1c1)](this[_0x3af91c(0x15a)]());return this['_cache'][_0x12a245]=_0xeef36b[_0x3af91c(0x168)](_0x42773d=>_0x42773d&&_0x42773d[_0x3af91c(0x19e)][_0x3af91c(0x1a6)](_0x5bbc9d['LifeStateEffects'][_0x3af91c(0x118)]['autoLife'])),this['_cache'][_0x12a245];}else return DataManager[_0x3af91c(0x152)](_0x262cc8);}}return 0x0;},Game_Enemy[_0x5dcf4d(0x181)][_0x5dcf4d(0x120)]=function(_0xf3274b){const _0xccb79e=_0x5dcf4d;this['transform'](Number(_0xf3274b)),this[_0xccb79e(0x11c)]={},this[_0xccb79e(0x1b1)](this[_0xccb79e(0x131)]),this[_0xccb79e(0x174)](this[_0xccb79e(0x143)]);},VisuMZ[_0x5dcf4d(0x114)][_0x5dcf4d(0x11a)]=Game_Enemy[_0x5dcf4d(0x181)]['transform'],Game_Enemy[_0x5dcf4d(0x181)][_0x5dcf4d(0x145)]=function(_0x4a4989){const _0x42e6c0=_0x5dcf4d;VisuMZ['LifeStateEffects'][_0x42e6c0(0x11a)][_0x42e6c0(0x1b8)](this,_0x4a4989),this[_0x42e6c0(0x1b6)](_0x42e6c0(0x188)),this[_0x42e6c0(0x161)]();},Game_Enemy[_0x5dcf4d(0x181)]['playPostTransformationAnimation']=function(){const _0x5501d6=_0x5dcf4d;if(!Imported[_0x5501d6(0x199)])return;const _0x1ac5c2=this['postTransformationAnimation']();if(_0x1ac5c2>0x0){const _0x343d50=VisuMZ[_0x5501d6(0x114)][_0x5501d6(0x170)][_0x5501d6(0x188)],_0x30a81f=[this],_0x3fd2a1=_0x343d50[_0x5501d6(0x1a0)]||![],_0x4a8ba4=_0x343d50[_0x5501d6(0x151)]||![];$gameTemp['requestFauxAnimation'](_0x30a81f,_0x1ac5c2,_0x3fd2a1,_0x4a8ba4);}},Game_BattlerBase[_0x5dcf4d(0x181)][_0x5dcf4d(0x1b0)]=function(){return 0x0;},Game_Enemy['prototype'][_0x5dcf4d(0x1b0)]=function(){const _0x5bb437=_0x5dcf4d,_0x5be6b7=VisuMZ[_0x5bb437(0x114)][_0x5bb437(0x118)],_0x51efff=this[_0x5bb437(0x13a)]()[_0x5bb437(0x19e)]||'';return _0x51efff[_0x5bb437(0x1a6)](_0x5be6b7['transformAni'])?Number(RegExp['$1']):0x0;};function _0x2f44(){const _0x3ee914=['EVAL','toUpperCase','_motion','bRooV','match','Game_BattlerBase_addNewState','executeHpDamage','addState','FUNC','ARRAYFUNC','Fragile','refresh','ceil','ARRAYJSON','postTransformationAnimation','setHp','_removeStatesAutoInEffect','format','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','return\x200','onLifeStateEffect','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','call','requestFauxAnimation','reduce','_allowUndeadHpHeal','ARRAYSTRUCT','hasLifeStateFragileEffect','doom','remove','addNewState','concat','Game_Battler_regenerateHp','8072reiXQp','FlashColor','Curse','aGVHK','ARRAYNUM','LifeStateEffects','fragile','5048pjaAIV','itemEffectAddNormalState','RegExp','noHealMp','Game_Enemy_transform','ConvertParams','_cache','checkCacheKey','Undead','lEamM','applyDeathTransform','name','1717330DnJhSW','hpDamage','jglzD','ujBYe','hasLifeStateGutsEffect','LifeStateEffects_CurseTp','1eOfFae','AnimationID','akjAs','VisuMZ_1_BattleCore','map','exit','uwxJr','hasLifeStateAutoLifeEffect','hasLifeStateAllowUndeadRegenEffect','mhp','gainMp','itemEffectAddAttackState','description','LifeStateEffects_Guts','rexXJ','NUM','LifeStateEffects_Fragile','hasDeathTransform','enemy','HQPBx','LifeStateEffects_CurseMp','228158RacyRd','isStateAffected','deathTransform','isEnemy','hasLifeStateCurseMpEffect','LifeStateEffects_Undead','mmp','isDead','transform','_enemyIDs','Game_Battler_addState','PopupText','144ACbmNI','17891852aiZyvw','wiiKX','AutoLife','dataId','autoLife','clamp','battler','Mute','getEnemyIdWithName','ARRAYEVAL','QtoOE','Doom','trim','setupTextPopup','isHpEffect','Game_Battler_gainHp','skills','QBsFV','JSON','BiUYW','JrpZR','Game_Action_executeDamage','max','playPostTransformationAnimation','Game_Action_itemEffectAddAttackState','performDeathTransform','hasLifeStateUndeadEffect','VisuMZ_1_SkillsStatesCore','Game_Battler_removeStatesAuto','WKHHu','some','EaQZe','getDeathTransformEnemyID','regenerateHp','requestMotion','isDrain','ZrBNv','dead','Settings','2817QwFjbK','onLifeStateAutoLifeEffect','traitObjects','setMp','noHealHp','_result','deathStateId','Game_Action_executeHpDamage','parse','Guts','Game_BattlerBase_eraseState','processRandomizedData','gainHp','TextColor','isSceneBattle','4530740QzUVTa','prototype','parameters','states','noHealTp','_processingVisuMzDoomEffect','subject','CyszI','Transform','onLifeStateDoomEffect','FlashDuration','eraseState','calcElementRate','performCollapse','FIcrz','Game_Action_itemEffectAddNormalState','hasLifeStateCurseHpEffect','Game_Battler_gainHpCurse','Game_Battler_gainMpCurse','3782980UApxbX','LifeStateEffects_AutoLife','jHlZq','hasLifeStateCurseTpEffect','filter','LifeStateEffects_CurseHp','VisuMZ_0_CoreEngine','Game_Battler_gainTp','495sheoPM','ARRAYSTR','Game_BattlerBase_setHp','note','allowUndeadRegen','Mirror','LifeStateEffects_AllowUndeadRegen'];_0x2f44=function(){return _0x3ee914;};return _0x2f44();}