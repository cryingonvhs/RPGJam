//=============================================================================
// VisuStella MZ - Action Sequence Projectiles
// VisuMZ_3_ActSeqProjectiles.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_ActSeqProjectiles = true;

var VisuMZ = VisuMZ || {};
VisuMZ.ActSeqProjectiles = VisuMZ.ActSeqProjectiles || {};
VisuMZ.ActSeqProjectiles.version = 1.08;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.08] [ActSeqProjectiles]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Action_Sequence_Projectiles_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin adds projectile control the Battle Core's Action Sequences,
 * allowing you, the game dev, to create entities that fire from one screen
 * location to another screen location. These locations can be either battler
 * targets or exact points on the screen. Projectiles can come in the form of
 * pictures, icons, and animations. Make them spin, make them arc, make them
 * travel at differing speeds across the battlefield!
 *
 * Features include all (but not limited to) the following:
 * 
 * * Create projectiles that can be fired across the battlefield.
 * * Projectiles can be pictures, icons, and/or animations.
 * * Action Sequences give you control over where they come from and where
 *   they go: targets and/or points.
 * * Extra settings that give you extra control over projectiles such as
 *   automatic angles, angle offsets, blend modes, trajectory easy, hues,
 *   scaling, and spin speed.
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
 * * VisuMZ_0_CoreEngine
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
 * Projectile Types
 * ============================================================================
 *
 * Projectiles come in three types: pictures, icons, and animations. Each have
 * their own properties, but ultimately, work very similar.
 *
 * ---
 *
 * Picture Projectiles
 * 
 * These projectiles use images found in the img/pictures/ folder of your game
 * project. Used as static images, they allow you to create projectiles of any
 * size and dimension to your liking. These offer the most flexibility when it
 * comes to options and extra settings.
 *
 * ---
 * 
 * Icon Projectiles
 * 
 * For those who want to save up on resources and utilize the already loaded
 * icon sheet, you can simply select an icon index to pick an icon as the
 * projectile's image. Like pictures, these offer the most flexibility when it
 * comes to options and extra settings.
 * 
 * ---
 * 
 * Animation Projectiles
 * 
 * Those who want a bit more spice in their projectiles and want something that
 * animates can picture animation projectiles. The animation will play through
 * its frames until it hits its end, after which, the animation restarts.
 * However, because animations are much more complicated than just a static
 * image, some options and extra settings are not available for animations.
 * 
 * ---
 *
 * ============================================================================
 * Action Sequence Plugin Commands
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
 * === Action Sequences - Projectiles ===
 * 
 * Create projectiles on the screen and fire them off at a target.
 * Requires VisuMZ_3_ActSeqProjectiles!
 * 
 * ---
 *
 * PROJECTILE: Animation
 * - Create an animation projectile and fire it at a target.
 * - Requires VisuMZ_3_ActSeqProjectiles!
 *
 *   Coordinates:
 *
 *     Start Location:
 *     - Settings to determine where the projectile(s) start from.
 *
 *       Type:
 *       - Select where the projectile should start from.
 *         - Target - Start from battler target(s)
 *         - Point - Start from a point on the screen
 *
 *         Target(s):
 *         - Select which unit(s) to start the projectile from.
 *
 *           Centralize:
 *           - Create one projectile at the center of the targets?
 *           - Or create a projectile for each target?
 * 
 *           Target Location:
 *           - Select which part of the target to send the projectile from.
 *           - front head
 *           - front center
 *           - front base
 *           - middle head
 *           - middle center
 *           - middle base
 *           - back head
 *           - back center
 *           - back base
 *
 *         Point X:
 *         Point Y:
 *         - Insert the X/Y coordinate to start the projectile at.
 *         - You may use JavaScript code.
 *
 *       Offset X:
 *       Offset Y:
 *       - Insert how many pixels to offset the X/Y coordinate by.
 *       - You may use JavaScript code.
 *
 *     Goal Location:
 *     - Settings to determine where the projectile(s) start from.
 *
 *       Type:
 *       - Select where the projectile should go to.
 *         - Target - Goal is battler target(s)
 *         - Point - Goal is a point on the screen
 *
 *         Target(s):
 *         - Select which unit(s) for projectile to go to.
 *
 *           Centralize:
 *           - Create one projectile at the center of the targets?
 *           - Or create a projectile for each target?
 * 
 *           Target Location:
 *           - Select which part of the target to send the projectile to.
 *           - front head
 *           - front center
 *           - front base
 *           - middle head
 *           - middle center
 *           - middle base
 *           - back head
 *           - back center
 *           - back base
 *
 *         Point X:
 *         Point Y:
 *         - Insert the X/Y coordinate to send the projectile to.
 *         - You may use JavaScript code.
 *
 *       Offset X:
 *       Offset Y:
 *       - Insert how many pixels to offset the X/Y coordinate by.
 *       - You may use JavaScript code.
 *
 *   Settings:
 *
 *     Animation ID:
 *     - Determine which animation to use as a projectile.
 *
 *     Duration:
 *     - Duration for the projectile(s) to travel.
 *
 *     Wait For Projectile?:
 *     - Wait for projectile(s) to reach their destination before going onto
 *       the next command?
 * 
 *     Wait For Animation?:
 *     - Wait for animation to finish before going to the next command?
 *
 *     Extra Settings:
 *     - Add extra settings to the projectile?
 *
 *       Auto Angle?:
 *       - Automatically angle the projectile to tilt the direction
 *         it's moving?
 *
 *       Angle Offset:
 *       - Alter the projectile's tilt by this many degrees.
 *
 *       Arc Peak:
 *       - This is the height of the project's trajectory arc in pixels.
 *
 *       Easing:
 *       - Select which easing type to apply to the projectile's trajectory.
 *
 *       Spin Speed:
 *       - Determine how much angle the projectile spins per frame.
 *       - Does not work well with "Auto Angle".
 * 
 *     Effect Emulation:
 * 
 *       Action Effect?:
 *       - Emulate current Action Effect when projectile reaches target?
 *       - Only works with start and goal targets.
 * 
 *       Item Effect ID?:
 *       - Emulate an Item Effect when projectile reaches target?
 *       - Use 0 to not use.
 *       - Only works with start and goal targets.
 * 
 *       Skill Effect ID?:
 *       - Emulate a Skill Effect when projectile reaches target?
 *       - Use 0 to not use.
 *       - Only works with start and goal targets.
 * 
 *       Common Event ID:
 *       - Plays a Once Parallel Common Event upon reaching target.
 *       - Use 0 to not use.
 *       - Works regardless of start/goal targets.
 *
 * ---
 *
 * PROJECTILE: Icon
 * - Create an icon projectile and fire it at a target.
 * - Requires VisuMZ_3_ActSeqProjectiles!
 *
 *   Coordinates:
 *
 *     Start Location:
 *     - Settings to determine where the projectile(s) start from.
 *
 *       Type:
 *       - Select where the projectile should start from.
 *         - Target - Start from battler target(s)
 *         - Point - Start from a point on the screen
 *
 *         Target(s):
 *         - Select which unit(s) to start the projectile from.
 *
 *           Centralize:
 *           - Create one projectile at the center of the targets?
 *           - Or create a projectile for each target?
 * 
 *           Target Location:
 *           - Select which part of the target to send the projectile from.
 *           - front head
 *           - front center
 *           - front base
 *           - middle head
 *           - middle center
 *           - middle base
 *           - back head
 *           - back center
 *           - back base
 *
 *         Point X:
 *         Point Y:
 *         - Insert the X/Y coordinate to start the projectile at.
 *         - You may use JavaScript code.
 *
 *       Offset X:
 *       Offset Y:
 *       - Insert how many pixels to offset the X/Y coordinate by.
 *       - You may use JavaScript code.
 *
 *     Goal Location:
 *     - Settings to determine where the projectile(s) start from.
 *
 *       Type:
 *       - Select where the projectile should go to.
 *         - Target - Goal is battler target(s)
 *         - Point - Goal is a point on the screen
 *
 *         Target(s):
 *         - Select which unit(s) for projectile to go to.
 *
 *           Centralize:
 *           - Create one projectile at the center of the targets?
 *           - Or create a projectile for each target?
 * 
 *           Target Location:
 *           - Select which part of the target to send the projectile to.
 *           - front head
 *           - front center
 *           - front base
 *           - middle head
 *           - middle center
 *           - middle base
 *           - back head
 *           - back center
 *           - back base
 *
 *         Point X:
 *         Point Y:
 *         - Insert the X/Y coordinate to send the projectile to.
 *         - You may use JavaScript code.
 *
 *       Offset X:
 *       Offset Y:
 *       - Insert how many pixels to offset the X/Y coordinate by.
 *       - You may use JavaScript code.
 *
 *   Settings:
 *
 *     Icon:
 *     - Determine which icon to use as a projectile.
 *
 *     Duration:
 *     - Duration for the projectile(s) to travel.
 *
 *     Wait For Projectile?:
 *     - Wait for projectile(s) to reach their destination before going onto
 *       the next command?
 *
 *     Extra Settings:
 *     - Add extra settings to the projectile?
 *
 *       Auto Angle?:
 *       - Automatically angle the projectile to tilt the direction
 *         it's moving?
 *
 *       Angle Offset:
 *       - Alter the projectile's tilt by this many degrees.
 *
 *       Arc Peak:
 *       - This is the height of the project's trajectory arc in pixels.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the projectile?
 *         - Normal
 *         - Additive
 *         - Multiply
 *         - Screen
 *
 *       Easing:
 *       - Select which easing type to apply to the projectile's trajectory.
 *
 *       Hue:
 *       - Adjust the hue of the projectile.
 *       - Insert a number between 0 and 360.
 *
 *       Scale:
 *       - Adjust the size scaling of the projectile.
 *       - Use decimals for exact control.
 *
 *       Spin Speed:
 *       - Determine how much angle the projectile spins per frame.
 *       - Does not work well with "Auto Angle".
 * 
 *     Effect Emulation:
 * 
 *       Action Effect?:
 *       - Emulate current Action Effect when projectile reaches target?
 *       - Only works with start and goal targets.
 * 
 *       Item Effect ID?:
 *       - Emulate an Item Effect when projectile reaches target?
 *       - Use 0 to not use.
 *       - Only works with start and goal targets.
 * 
 *       Skill Effect ID?:
 *       - Emulate a Skill Effect when projectile reaches target?
 *       - Use 0 to not use.
 *       - Only works with start and goal targets.
 * 
 *       Common Event ID:
 *       - Plays a Once Parallel Common Event upon reaching target.
 *       - Use 0 to not use.
 *       - Works regardless of start/goal targets.
 *
 * ---
 *
 * PROJECTILE: Picture
 * - Create a picture projectile and fire it at a target.
 * - Requires VisuMZ_3_ActSeqProjectiles!
 *
 *   Coordinates:
 *
 *     Start Location:
 *     - Settings to determine where the projectile(s) start from.
 *
 *       Type:
 *       - Select where the projectile should start from.
 *         - Target - Start from battler target(s)
 *         - Point - Start from a point on the screen
 *
 *         Target(s):
 *         - Select which unit(s) to start the projectile from.
 *
 *           Centralize:
 *           - Create one projectile at the center of the targets?
 *           - Or create a projectile for each target?
 * 
 *           Target Location:
 *           - Select which part of the target to send the projectile from.
 *           - front head
 *           - front center
 *           - front base
 *           - middle head
 *           - middle center
 *           - middle base
 *           - back head
 *           - back center
 *           - back base
 *
 *         Point X:
 *         Point Y:
 *         - Insert the X/Y coordinate to start the projectile at.
 *         - You may use JavaScript code.
 *
 *       Offset X:
 *       Offset Y:
 *       - Insert how many pixels to offset the X/Y coordinate by.
 *       - You may use JavaScript code.
 *
 *     Goal Location:
 *     - Settings to determine where the projectile(s) start from.
 *
 *       Type:
 *       - Select where the projectile should go to.
 *         - Target - Goal is battler target(s)
 *         - Point - Goal is a point on the screen
 *
 *         Target(s):
 *         - Select which unit(s) for projectile to go to.
 *
 *           Centralize:
 *           - Create one projectile at the center of the targets?
 *           - Or create a projectile for each target?
 * 
 *           Target Location:
 *           - Select which part of the target to send the projectile to.
 *           - front head
 *           - front center
 *           - front base
 *           - middle head
 *           - middle center
 *           - middle base
 *           - back head
 *           - back center
 *           - back base
 *
 *         Point X:
 *         Point Y:
 *         - Insert the X/Y coordinate to send the projectile to.
 *         - You may use JavaScript code.
 *
 *       Offset X:
 *       Offset Y:
 *       - Insert how many pixels to offset the X/Y coordinate by.
 *       - You may use JavaScript code.
 *
 *   Settings:
 *
 *     Picture Filename:
 *     - Determine which picture to use as a projectile.
 *
 *     Duration:
 *     - Duration for the projectile(s) to travel.
 *
 *     Wait For Projectile?:
 *     - Wait for projectile(s) to reach their destination before going onto
 *       the next command?
 *
 *     Extra Settings:
 *     - Add extra settings to the projectile?
 *
 *       Auto Angle?:
 *       - Automatically angle the projectile to tilt the direction
 *         it's moving?
 *
 *       Angle Offset:
 *       - Alter the projectile's tilt by this many degrees.
 *
 *       Arc Peak:
 *       - This is the height of the project's trajectory arc in pixels.
 *
 *       Blend Mode:
 *       - What kind of blend mode do you wish to apply to the projectile?
 *         - Normal
 *         - Additive
 *         - Multiply
 *         - Screen
 *
 *       Easing:
 *       - Select which easing type to apply to the projectile's trajectory.
 *
 *       Hue:
 *       - Adjust the hue of the projectile.
 *       - Insert a number between 0 and 360.
 *
 *       Scale:
 *       - Adjust the size scaling of the projectile.
 *       - Use decimals for exact control.
 *
 *       Spin Speed:
 *       - Determine how much angle the projectile spins per frame.
 *       - Does not work well with "Auto Angle".
 * 
 *     Effect Emulation:
 * 
 *       Action Effect?:
 *       - Emulate current Action Effect when projectile reaches target?
 *       - Only works with start and goal targets.
 * 
 *       Item Effect ID?:
 *       - Emulate an Item Effect when projectile reaches target?
 *       - Use 0 to not use.
 *       - Only works with start and goal targets.
 * 
 *       Skill Effect ID?:
 *       - Emulate a Skill Effect when projectile reaches target?
 *       - Use 0 to not use.
 *       - Only works with start and goal targets.
 * 
 *       Common Event ID:
 *       - Plays a Once Parallel Common Event upon reaching target.
 *       - Use 0 to not use.
 *       - Works regardless of start/goal targets.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Angle Adjustment Settings
 * ============================================================================
 *
 * These settings are primarily used to automatically adjust the angle of any
 * pictures, icon, and/or animation so that they work with the automatic
 * angling of the projectiles as to always appear aimed at the goal point.
 *
 * ---
 *
 * Angle Adjustments
 * 
 *   Animation Angle:
 *   - Adjust projectile angle for animations by this many degrees.
 * 
 *   Icon Angle:
 *   - Adjust projectile angle for icons by this many degrees.
 * 
 *   Picture Angle:
 *   - Adjust projectile angle for pictures by this many degrees.
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
 * Version 1.08: January 18, 2024
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Parameters added for Action Sequences by Olivia:
 * ** Extra Effects > Effect Emulation
 * *** Extra Effects > Effect Emulation > Action Effect
 * *** Extra Effects > Effect Emulation > Item Effect ID
 * *** Extra Effects > Effect Emulation > Skill Effect ID
 * **** Emulate current Action Effect, a specific Item Effect, or a specific
 *      Skill Effect when projectile reaches target?
 * **** Only works with start and goal targets.
 * *** Extra Effects > Effect Emulation > Common Event ID
 * **** Plays a Once Parallel Common Event upon reaching target.
 * **** Works regardless of start and goal targets.
 * 
 * Version 1.07: August 17, 2023
 * * Compatibility Update!
 * ** Added better compatibility with Action Sequence Camera when using MV
 *    animations for projectiles. Update made by Arisu.
 * 
 * Version 1.06: July 13, 2023
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: December 30, 2021
 * * Documentation Update!
 * ** Help file updated for updated features.
 * * Updated Feature!
 * ** Updated Plugin Command "PROJECTILE: Animation" by Arisu!
 * *** New Parameter: Wait For Animation?
 * **** Wait for animation to finish before going to the next command?
 * 
 * Version 1.04: April 30, 2021
 * * Bug Fixes!
 * ** Added fail safe for older versions of the projectile plugin commands that
 *    have not been updated. Fix made by Yanfly.
 * 
 * Version 1.03: April 23, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** "Start Location" and "Goal Location" now have "Target Location" parameter
 *    to determine which part of the target's body to send the projectile from
 *    or towards. Added by Olivia.
 * ** Requires VisuMZ_1_BattleCore version 1.34 to have affect.
 * 
 * Version 1.02: January 22, 2021
 * * Bug Fixes!
 * ** Projectile start locations and end locations now factor in a target's
 *    additional Y position from jumping and/or floating. Fix made by Irina.
 * 
 * Version 1.01: December 25, 2020
 * * Bug Fixes!
 * ** Settings are no longer cached and are now independent for one another.
 *    Fix made by Yanfly.
 *
 * Version 1.00: January 13, 2021
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
 * @param ActSeqProjectiles
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param AngleAdjustments
 * @text Angle Adjustments
 *
 * @param AnimationAngleAdjust:num
 * @text Animation Angle
 * @parent AngleAdjustments
 * @desc Adjust projectile angle for animations by this many degrees.
 * @default 225
 *
 * @param IconAngleAdjust:num
 * @text Icon Angle
 * @parent AngleAdjustments
 * @desc Adjust projectile angle for icons by this many degrees.
 * @default 135
 *
 * @param PictureAngleAdjust:num
 * @text Picture Angle
 * @parent AngleAdjustments
 * @desc Adjust projectile angle for pictures by this many degrees.
 * @default 135
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

function _0x2832(){const _0x5658b9=['OnceParallel','version','filter','cXVBg','makeDeepCopy','_moveTargetX','PointY','_scene','Spriteset_Battle_createBattleFieldContainer','_moveDuration','loadSystem','restartActSeqProjectilesAnimation','return\x200','EmulateSkillEffect','_settings','CreateCoordinates','Sprite_AnimationMV_update','animationShouldMirror','ARRAYSTR','addChild','updateEffectGeometry','BlendMode','emulateActionEffect','_adjustedProjectileRadians','floor','MahLR','iconHeight','BIYSi','mute','4913004HyufSl','LINEAR','FUNC','zkCwG','18bMBuDw','name','_moveTotalDuration','bitmap','startAnimation','setupCoordinates','EenJs','isWaitUntilAnimationFinished','EasingType','shift','ActSeqCamera','createActSeqProjectilesAnimation','PVVmi','_endReady','2210124sGZCvm','push','removeAllActSeqProjectilesAnimations','rotation','angle','initMembers','1481767aBPXYC','toUpperCase','10146568LlGxqO','EVAL','AnimationID','EmulateItemEffect','applyProjectileAngle','Extra','applyAngle','performOnceParallelFinish','battler','168486GxWQxC','sLjtG','WaitForAnimation','Spin','150rXxgmN','performEmulateActionEffects','ConvertParams','ActSeqProjectiles','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','_target','_spriteset','isAnyProjectilePresent','startProjectile','parse','OAPVf','Scale','call','setProjectile','setupAnimation','Hue','_handle','item','isMVAnimation','animationNextDelay','updateActSeqProjectilesAnimations','6736982ZVYxXs','NUM','_baseY','hfgUI','setupIconFrame','description','Arc','PictureAngleAdjust','status','height','_animation','AngleOffset','setupEmulationTarget','includes','setMute','_logWindow','ARRAYJSON','uzUSs','Sprite_Animation_updateEffectGeometry','updateSpin','Spriteset_Battle_adjustFlippedBattlefield','removeActSeqProjectilesAnimation','NlbIN','1277330GYVdxa','prototype','_battleField','Spriteset_Base_initialize','setHue','RajcJ','_moveTime','Spriteset_Base_destroy','Settings','AutoAngle','_moveBaseX','isPlaying','exit','match','JnzoI','iconWidth','VisuMZ_3_ActSeqCamera\x20needs\x20to\x20be\x20updated\x20','CreateTargetCoordinates','front','_baseX','EmulateActionEffect','volume','onDatabaseLoaded','ARRAYSTRUCT','_action','ApplyEasing','createBitmap','max','isActSeqProjectilesAnimationPlaying','_ActSeqProjectilesAnimationQueue','Start','STRUCT','_moveCalcX','requestActSeqProjectilesAnimation','createActionSequenceProjectile','round','mirror','_radianAdjustment','Duration','target','getPeak','ujORE','head','updateMove','isSideView','NHzwT','ioKin','middle\x20center','bind','AnimationAngleAdjust','Spriteset_Base_update','ARRAYFUNC','trim','map','back','_effectsContainer','Icon','_animationSprite','FIoMD','ARRAYNUM','Targets','update','_muteSound','removeChild','OffsetY','setFrame','VisuMZ_1_BattleCore\x20needs\x20to\x20be\x20updated\x20','_moveBaseY','CreateActionSequenceTargets','STR','VisuMZ_3_ActSeqCamera','adjustFlippedBattlefield','gwPdg','createActSeqProjectilesAnimationSprite','playOnceParallelInterpreter','_battlerContainer','endAnimation','_startReady','Type','format','_ActSeqProjectilesAnimationSprites','Game_Temp_initialize','_subject','Sprite_Animation_processSoundTimings','_easing','_moveCalcY','loadPicture','isActor','TargetLocation','anchor','_moveTargetY','_isProjectile','endProjectile','targetObjects','Goal','_emulateEffects','updateActionSequenceProjectileItemThrow','Scene_Boot_onDatabaseLoaded','create','IconAngleAdjust','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','toLowerCase','remove','_projectilesContainer','setRotation','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','pow','IconSet','blendMode','Sprite_AnimationMV_processTimingData','CoreEngine','length','TargetCenter','parent','PointX','extraPositionY','EXxHz','destroy','in\x20order\x20for\x20VisuMZ_3_ActSeqProjectiles\x20to\x20work.','OffsetX','point','width','setupPictureFrame','initialize','bqvqZ','scale','lwKyJ','RWNZf','createBattleFieldContainer'];_0x2832=function(){return _0x5658b9;};return _0x2832();}const _0x33c25a=_0xe03c;(function(_0xca7bcf,_0x253322){const _0x335a03=_0xe03c,_0x2d64be=_0xca7bcf();while(!![]){try{const _0x3601c8=-parseInt(_0x335a03(0x165))/0x1+-parseInt(_0x335a03(0x1a0))/0x2+-parseInt(_0x335a03(0x15f))/0x3+parseInt(_0x335a03(0x14d))/0x4+-parseInt(_0x335a03(0x174))/0x5*(-parseInt(_0x335a03(0x170))/0x6)+-parseInt(_0x335a03(0x189))/0x7+parseInt(_0x335a03(0x167))/0x8*(parseInt(_0x335a03(0x151))/0x9);if(_0x3601c8===_0x253322)break;else _0x2d64be['push'](_0x2d64be['shift']());}catch(_0x11fe4a){_0x2d64be['push'](_0x2d64be['shift']());}}}(_0x2832,0xc052d));var label='ActSeqProjectiles',tier=tier||0x0,dependencies=[],pluginData=$plugins[_0x33c25a(0x132)](function(_0x39404d){const _0x3cb0f7=_0x33c25a;return _0x39404d[_0x3cb0f7(0x191)]&&_0x39404d[_0x3cb0f7(0x18e)][_0x3cb0f7(0x196)]('['+label+']');})[0x0];function _0xe03c(_0x207f24,_0x3a390a){const _0x2832ad=_0x2832();return _0xe03c=function(_0xe03c74,_0x2b3a37){_0xe03c74=_0xe03c74-0x11d;let _0x32c345=_0x2832ad[_0xe03c74];return _0x32c345;},_0xe03c(_0x207f24,_0x3a390a);}VisuMZ[label][_0x33c25a(0x1a8)]=VisuMZ[label][_0x33c25a(0x1a8)]||{},VisuMZ[_0x33c25a(0x176)]=function(_0x9c09ca,_0x67c506){const _0x10ccf5=_0x33c25a;for(const _0x329ef8 in _0x67c506){if(_0x329ef8[_0x10ccf5(0x1ad)](/(.*):(.*)/i)){const _0x5ececc=String(RegExp['$1']),_0xdde035=String(RegExp['$2'])[_0x10ccf5(0x166)]()[_0x10ccf5(0x1d4)]();let _0x45d1d1,_0x39762e,_0x5d315a;switch(_0xdde035){case _0x10ccf5(0x18a):_0x45d1d1=_0x67c506[_0x329ef8]!==''?Number(_0x67c506[_0x329ef8]):0x0;break;case _0x10ccf5(0x1db):_0x39762e=_0x67c506[_0x329ef8]!==''?JSON['parse'](_0x67c506[_0x329ef8]):[],_0x45d1d1=_0x39762e['map'](_0x3542f3=>Number(_0x3542f3));break;case _0x10ccf5(0x168):_0x45d1d1=_0x67c506[_0x329ef8]!==''?eval(_0x67c506[_0x329ef8]):null;break;case'ARRAYEVAL':_0x39762e=_0x67c506[_0x329ef8]!==''?JSON[_0x10ccf5(0x17d)](_0x67c506[_0x329ef8]):[],_0x45d1d1=_0x39762e[_0x10ccf5(0x1d5)](_0x522f4a=>eval(_0x522f4a));break;case'JSON':_0x45d1d1=_0x67c506[_0x329ef8]!==''?JSON[_0x10ccf5(0x17d)](_0x67c506[_0x329ef8]):'';break;case _0x10ccf5(0x199):_0x39762e=_0x67c506[_0x329ef8]!==''?JSON[_0x10ccf5(0x17d)](_0x67c506[_0x329ef8]):[],_0x45d1d1=_0x39762e[_0x10ccf5(0x1d5)](_0x279ea2=>JSON[_0x10ccf5(0x17d)](_0x279ea2));break;case _0x10ccf5(0x14f):_0x45d1d1=_0x67c506[_0x329ef8]!==''?new Function(JSON['parse'](_0x67c506[_0x329ef8])):new Function(_0x10ccf5(0x13c));break;case _0x10ccf5(0x1d3):_0x39762e=_0x67c506[_0x329ef8]!==''?JSON[_0x10ccf5(0x17d)](_0x67c506[_0x329ef8]):[],_0x45d1d1=_0x39762e[_0x10ccf5(0x1d5)](_0x465b8b=>new Function(JSON['parse'](_0x465b8b)));break;case _0x10ccf5(0x1e5):_0x45d1d1=_0x67c506[_0x329ef8]!==''?String(_0x67c506[_0x329ef8]):'';break;case _0x10ccf5(0x142):_0x39762e=_0x67c506[_0x329ef8]!==''?JSON['parse'](_0x67c506[_0x329ef8]):[],_0x45d1d1=_0x39762e[_0x10ccf5(0x1d5)](_0x295307=>String(_0x295307));break;case _0x10ccf5(0x1bf):_0x5d315a=_0x67c506[_0x329ef8]!==''?JSON[_0x10ccf5(0x17d)](_0x67c506[_0x329ef8]):{},_0x45d1d1=VisuMZ[_0x10ccf5(0x176)]({},_0x5d315a);break;case _0x10ccf5(0x1b7):_0x39762e=_0x67c506[_0x329ef8]!==''?JSON['parse'](_0x67c506[_0x329ef8]):[],_0x45d1d1=_0x39762e[_0x10ccf5(0x1d5)](_0x5cdab3=>VisuMZ[_0x10ccf5(0x176)]({},JSON[_0x10ccf5(0x17d)](_0x5cdab3)));break;default:continue;}_0x9c09ca[_0x5ececc]=_0x45d1d1;}}return _0x9c09ca;},(_0x44566c=>{const _0x1eb2f3=_0x33c25a,_0x254a38=_0x44566c[_0x1eb2f3(0x152)];for(const _0x31846c of dependencies){if(!Imported[_0x31846c]){alert(_0x1eb2f3(0x178)[_0x1eb2f3(0x1ef)](_0x254a38,_0x31846c)),SceneManager[_0x1eb2f3(0x1ac)]();break;}}const _0x521cfc=_0x44566c[_0x1eb2f3(0x18e)];if(_0x521cfc['match'](/\[Version[ ](.*?)\]/i)){if(_0x1eb2f3(0x19a)===_0x1eb2f3(0x19a)){const _0x6a3f27=Number(RegExp['$1']);_0x6a3f27!==VisuMZ[label][_0x1eb2f3(0x131)]&&(alert(_0x1eb2f3(0x204)[_0x1eb2f3(0x1ef)](_0x254a38,_0x6a3f27)),SceneManager[_0x1eb2f3(0x1ac)]());}else this[_0x1eb2f3(0x20c)]=_0x4d69a1[_0x1eb2f3(0x145)]||0x0,this[_0x1eb2f3(0x1a4)](_0x2d8b8c[_0x1eb2f3(0x183)]||0x0),this[_0x1eb2f3(0x12c)]['x']=this['scale']['y']=_0xa194a0[_0x1eb2f3(0x1bb)](0.001,_0x1e69e3[_0x1eb2f3(0x17f)]||0.001);}if(_0x521cfc[_0x1eb2f3(0x1ad)](/\[Tier[ ](\d+)\]/i)){if('AVdSz'==='cilbC')return this[_0x1eb2f3(0x13e)][_0x1eb2f3(0x172)]&&this[_0x1eb2f3(0x1d9)]&&this[_0x1eb2f3(0x1d9)][_0x1eb2f3(0x1ab)]();else{const _0x4b5ad5=Number(RegExp['$1']);_0x4b5ad5<tier?(alert(_0x1eb2f3(0x209)[_0x1eb2f3(0x1ef)](_0x254a38,_0x4b5ad5,tier)),SceneManager[_0x1eb2f3(0x1ac)]()):tier=Math[_0x1eb2f3(0x1bb)](_0x4b5ad5,tier);}}VisuMZ[_0x1eb2f3(0x176)](VisuMZ[label][_0x1eb2f3(0x1a8)],_0x44566c['parameters']);})(pluginData),VisuMZ[_0x33c25a(0x177)][_0x33c25a(0x201)]=Scene_Boot['prototype']['onDatabaseLoaded'],Scene_Boot[_0x33c25a(0x1a1)][_0x33c25a(0x1b6)]=function(){const _0x5294e4=_0x33c25a;VisuMZ[_0x5294e4(0x177)]['Scene_Boot_onDatabaseLoaded']['call'](this),VisuMZ[_0x5294e4(0x177)]['CheckCompatibility']();},VisuMZ[_0x33c25a(0x177)]['CheckCompatibility']=function(){const _0x28bd09=_0x33c25a;if(VisuMZ[_0x28bd09(0x11d)]['version']<1.8){let _0x4d3caa='';_0x4d3caa+=_0x28bd09(0x1e2),_0x4d3caa+=_0x28bd09(0x125),alert(_0x4d3caa),SceneManager[_0x28bd09(0x1ac)]();}if(Imported[_0x28bd09(0x1e6)]&&VisuMZ[_0x28bd09(0x15b)][_0x28bd09(0x131)]<1.12){let _0x6491e7='';_0x6491e7+=_0x28bd09(0x1b0),_0x6491e7+='in\x20order\x20for\x20VisuMZ_3_ActSeqProjectiles\x20to\x20work.',alert(_0x6491e7),SceneManager['exit']();}},VisuMZ[_0x33c25a(0x177)]['Game_Temp_initialize']=Game_Temp['prototype'][_0x33c25a(0x12a)],Game_Temp['prototype'][_0x33c25a(0x12a)]=function(){const _0x4afaec=_0x33c25a;VisuMZ[_0x4afaec(0x177)][_0x4afaec(0x1f1)][_0x4afaec(0x180)](this),this['createActSeqProjectilesAnimationQueue']();},Game_Temp[_0x33c25a(0x1a1)]['createActSeqProjectilesAnimationQueue']=function(){const _0x4fd655=_0x33c25a;this[_0x4fd655(0x1bd)]=[];},Game_Temp[_0x33c25a(0x1a1)][_0x33c25a(0x1c1)]=function(_0x3ecd44,_0x565d5f,_0x4b33c3,_0x55b729){const _0x3623d1=_0x33c25a;_0x4b33c3=_0x4b33c3||![],_0x55b729=_0x55b729||![];if($dataAnimations[_0x565d5f]){if(_0x3623d1(0x1da)===_0x3623d1(0x1da)){const _0x224655={'targets':_0x3ecd44,'animationId':_0x565d5f,'mirror':_0x4b33c3,'mute':_0x55b729};this[_0x3623d1(0x1bd)][_0x3623d1(0x160)](_0x224655);for(const _0x5e1aee of _0x3ecd44){_0x5e1aee[_0x3623d1(0x155)]&&_0x5e1aee[_0x3623d1(0x155)]();}}else _0x57c12e['ActSeqProjectiles'][_0x3623d1(0x19b)][_0x3623d1(0x180)](this),this[_0x3623d1(0x147)]!==_0x1ddbfd&&this[_0x3623d1(0x16b)](this[_0x3623d1(0x147)]);}},Game_Temp['prototype']['retrieveActSeqProjectilesAnimation']=function(){const _0x532790=_0x33c25a;return this[_0x532790(0x1bd)][_0x532790(0x15a)]();},Sprite_Animation[_0x33c25a(0x1a1)][_0x33c25a(0x197)]=function(_0x5d0cce){const _0x4a2589=_0x33c25a;this[_0x4a2589(0x1de)]=_0x5d0cce;},Sprite_Animation[_0x33c25a(0x1a1)][_0x33c25a(0x181)]=function(_0x2c7b08){const _0x119978=_0x33c25a;this[_0x119978(0x1fb)]=_0x2c7b08;},VisuMZ[_0x33c25a(0x177)][_0x33c25a(0x1f3)]=Sprite_Animation['prototype']['processSoundTimings'],Sprite_Animation[_0x33c25a(0x1a1)]['processSoundTimings']=function(){const _0x183a2d=_0x33c25a;if(this[_0x183a2d(0x1de)])return;VisuMZ[_0x183a2d(0x177)][_0x183a2d(0x1f3)]['call'](this);},VisuMZ[_0x33c25a(0x177)][_0x33c25a(0x19b)]=Sprite_Animation[_0x33c25a(0x1a1)]['updateEffectGeometry'],Sprite_Animation[_0x33c25a(0x1a1)][_0x33c25a(0x144)]=function(){const _0x12e768=_0x33c25a;VisuMZ[_0x12e768(0x177)][_0x12e768(0x19b)][_0x12e768(0x180)](this),this['_adjustedProjectileRadians']!==undefined&&('bqvqZ'===_0x12e768(0x12b)?this[_0x12e768(0x16b)](this['_adjustedProjectileRadians']):_0x14f0fa[_0x12e768(0x1d9)]=_0x1a3530);},Sprite_Animation[_0x33c25a(0x1a1)][_0x33c25a(0x16b)]=function(_0x5963d2){const _0x8a1e9c=_0x33c25a,_0x5967a0=this[_0x8a1e9c(0x193)]['scale']/0x64,_0x5ecae9=Math['PI']/0xb4,_0xa8954=this[_0x8a1e9c(0x193)][_0x8a1e9c(0x162)]['x']*_0x5ecae9,_0x19d74f=this[_0x8a1e9c(0x193)][_0x8a1e9c(0x162)]['y']*_0x5ecae9,_0x3b5971=this[_0x8a1e9c(0x193)][_0x8a1e9c(0x162)]['z']*_0x5ecae9-_0x5963d2;this[_0x8a1e9c(0x184)]&&('AUzZD'===_0x8a1e9c(0x17e)?(this[_0x8a1e9c(0x1aa)]=_0x1d6e81['x'],this[_0x8a1e9c(0x1e3)]=_0x21837a['y'],this['_moveCalcX']=_0x1dcc50['x'],this[_0x8a1e9c(0x1f5)]=_0x3f6fcf['y'],this[_0x8a1e9c(0x135)]=_0x18007c['x'],this['_moveTargetY']=_0x3da4c6['y']):this[_0x8a1e9c(0x184)][_0x8a1e9c(0x208)](_0xa8954,_0x19d74f,_0x3b5971));},Sprite_AnimationMV[_0x33c25a(0x1a1)][_0x33c25a(0x197)]=function(_0x21e9e4){const _0x245454=_0x33c25a;this[_0x245454(0x1de)]=_0x21e9e4;},Sprite_AnimationMV[_0x33c25a(0x1a1)][_0x33c25a(0x181)]=function(_0x121a41){const _0x57662d=_0x33c25a;this[_0x57662d(0x1fb)]=_0x121a41;},VisuMZ[_0x33c25a(0x177)][_0x33c25a(0x20d)]=Sprite_AnimationMV[_0x33c25a(0x1a1)]['processTimingData'],Sprite_AnimationMV[_0x33c25a(0x1a1)]['processTimingData']=function(_0xa610a){const _0x19aff0=_0x33c25a;this[_0x19aff0(0x1de)]&&(_0xa610a=JsonEx[_0x19aff0(0x134)](_0xa610a),_0xa610a['se']&&(_0xa610a['se'][_0x19aff0(0x1b5)]=0x0)),VisuMZ['ActSeqProjectiles']['Sprite_AnimationMV_processTimingData'][_0x19aff0(0x180)](this,_0xa610a);},VisuMZ[_0x33c25a(0x177)][_0x33c25a(0x140)]=Sprite_AnimationMV['prototype']['update'],Sprite_AnimationMV[_0x33c25a(0x1a1)]['update']=function(){const _0x42c671=_0x33c25a;VisuMZ[_0x42c671(0x177)][_0x42c671(0x140)]['call'](this);if(this['_adjustedProjectileRadians']!==undefined){if('rcErD'==='rcErD')this[_0x42c671(0x162)]=this[_0x42c671(0x147)];else{const _0x578856=_0x32bc68[this[_0x42c671(0x13e)]['Extra'][_0x42c671(0x13d)]];_0x6c268d[_0x42c671(0x160)](_0x42c671(0x146),_0x543c3f,_0x39dd7e,_0x578856);}}},VisuMZ[_0x33c25a(0x177)]['Spriteset_Base_initialize']=Spriteset_Base['prototype'][_0x33c25a(0x12a)],Spriteset_Base['prototype'][_0x33c25a(0x12a)]=function(){const _0x29c6c9=_0x33c25a;VisuMZ[_0x29c6c9(0x177)][_0x29c6c9(0x1a3)][_0x29c6c9(0x180)](this),this[_0x29c6c9(0x1f0)]=[];},VisuMZ['ActSeqProjectiles'][_0x33c25a(0x1a7)]=Spriteset_Base[_0x33c25a(0x1a1)][_0x33c25a(0x124)],Spriteset_Base[_0x33c25a(0x1a1)]['destroy']=function(_0x4dc651){const _0x5b3537=_0x33c25a;this[_0x5b3537(0x161)](),VisuMZ[_0x5b3537(0x177)][_0x5b3537(0x1a7)]['call'](this,_0x4dc651);},VisuMZ[_0x33c25a(0x177)][_0x33c25a(0x1d2)]=Spriteset_Base[_0x33c25a(0x1a1)][_0x33c25a(0x1dd)],Spriteset_Base[_0x33c25a(0x1a1)][_0x33c25a(0x1dd)]=function(){const _0x4bd12e=_0x33c25a;VisuMZ['ActSeqProjectiles'][_0x4bd12e(0x1d2)][_0x4bd12e(0x180)](this),this['updateActSeqProjectilesAnimations']();},Spriteset_Base[_0x33c25a(0x1a1)][_0x33c25a(0x188)]=function(){const _0x48a8eb=_0x33c25a;for(const _0x5d568d of this[_0x48a8eb(0x1f0)]){if(_0x5d568d[_0x48a8eb(0x15e)])continue;!_0x5d568d['isPlaying']()&&('JnzoI'===_0x48a8eb(0x1ae)?this['restartActSeqProjectilesAnimation'](_0x5d568d):this[_0x48a8eb(0x184)][_0x48a8eb(0x208)](_0x28aea5,_0x2acade,_0x2a44af));}this['processActSeqProjectilesAnimationRequests']();},Spriteset_Base[_0x33c25a(0x1a1)]['processActSeqProjectilesAnimationRequests']=function(){const _0x3839fa=_0x33c25a;for(;;){const _0xc80bdd=$gameTemp['retrieveActSeqProjectilesAnimation']();if(_0xc80bdd)this[_0x3839fa(0x15c)](_0xc80bdd);else break;}},Spriteset_Base[_0x33c25a(0x1a1)][_0x33c25a(0x15c)]=function(_0x2d82f3){const _0x41305e=_0x33c25a,_0x3aecb0=$dataAnimations[_0x2d82f3['animationId']],_0x476609=_0x2d82f3['targets'],_0x2224da=_0x2d82f3[_0x41305e(0x1c4)],_0x529aa5=_0x2d82f3[_0x41305e(0x14c)];let _0x9a278d=this['animationBaseDelay']();const _0x54c2a7=this[_0x41305e(0x187)]();if(this['isAnimationForEach'](_0x3aecb0))for(const _0xb829 of _0x476609){this[_0x41305e(0x1e9)]([_0xb829],_0x3aecb0,_0x2224da,_0x9a278d,_0x529aa5),_0x9a278d+=_0x54c2a7;}else this[_0x41305e(0x1e9)](_0x476609,_0x3aecb0,_0x2224da,_0x9a278d);},Spriteset_Base[_0x33c25a(0x1a1)][_0x33c25a(0x1e9)]=function(_0x1e4739,_0x26c382,_0x2cf85b,_0x16f2b4,_0x372773){const _0x546cab=_0x33c25a,_0x5704fa=this[_0x546cab(0x186)](_0x26c382),_0x1e10e3=new(_0x5704fa?Sprite_AnimationMV:Sprite_Animation)();_0x1e10e3['setProjectile'](!![]);const _0x4ed048=_0x1e4739;return this[_0x546cab(0x141)](_0x1e4739[0x0])&&(_0x546cab(0x1ce)===_0x546cab(0x12e)?_0x4a77b3-=_0x58a7ac[_0x546cab(0x16f)]()[_0x546cab(0x192)]:_0x2cf85b=!_0x2cf85b),_0x1e10e3['targetObjects']=_0x1e4739,_0x1e10e3['setup'](_0x4ed048,_0x26c382,_0x2cf85b,_0x16f2b4),_0x1e10e3[_0x546cab(0x197)](_0x372773),this[_0x546cab(0x1d7)][_0x546cab(0x143)](_0x1e10e3),this['_ActSeqProjectilesAnimationSprites']['push'](_0x1e10e3),_0x1e10e3;},Spriteset_Base[_0x33c25a(0x1a1)][_0x33c25a(0x13b)]=function(_0x45a545){const _0x455a66=_0x33c25a;if(!_0x45a545)return;const _0x40fab0=_0x45a545['_targets'],_0x55bdce=_0x45a545['_animation'],_0x2b4932=_0x45a545['_mirror'],_0x28e0a4=0x0,_0x5e2cf0=_0x45a545[_0x455a66(0x1de)];this['removeActSeqProjectilesAnimation'](_0x45a545);const _0x48f062=this['createActSeqProjectilesAnimationSprite'](_0x40fab0,_0x55bdce,_0x2b4932,_0x28e0a4,_0x5e2cf0);for(const _0x45d21c of _0x40fab0){_0x45d21c&&('zkCwG'===_0x455a66(0x150)?_0x45d21c[_0x455a66(0x1d9)]=_0x48f062:(_0x53de77['ActSeqProjectiles'][_0x455a66(0x1d2)][_0x455a66(0x180)](this),this[_0x455a66(0x188)]()));}},Spriteset_Base['prototype'][_0x33c25a(0x19e)]=function(_0x2c5f85){const _0x8844ba=_0x33c25a;this['_ActSeqProjectilesAnimationSprites'][_0x8844ba(0x206)](_0x2c5f85),this[_0x8844ba(0x1d7)]['removeChild'](_0x2c5f85);for(const _0x10059c of _0x2c5f85[_0x8844ba(0x1fd)]){_0x10059c['endAnimation']&&_0x10059c['endAnimation']();}_0x2c5f85['destroy']();},Spriteset_Base[_0x33c25a(0x1a1)][_0x33c25a(0x161)]=function(){const _0x46a2e5=_0x33c25a;for(const _0x5367a5 of this[_0x46a2e5(0x1f0)]){this[_0x46a2e5(0x19e)](_0x5367a5);}},Spriteset_Base[_0x33c25a(0x1a1)][_0x33c25a(0x1bc)]=function(){const _0x528d8c=_0x33c25a;return this[_0x528d8c(0x1f0)][_0x528d8c(0x11e)]>0x0;},VisuMZ[_0x33c25a(0x177)][_0x33c25a(0x138)]=Spriteset_Battle[_0x33c25a(0x1a1)][_0x33c25a(0x12f)],Spriteset_Battle['prototype'][_0x33c25a(0x12f)]=function(){const _0x7269ed=_0x33c25a;VisuMZ[_0x7269ed(0x177)][_0x7269ed(0x138)][_0x7269ed(0x180)](this),this['_projectilesContainer']=new Sprite(),this[_0x7269ed(0x1a2)][_0x7269ed(0x143)](this['_projectilesContainer']);},VisuMZ['ActSeqProjectiles'][_0x33c25a(0x19d)]=Spriteset_Battle[_0x33c25a(0x1a1)][_0x33c25a(0x1e7)],Spriteset_Battle[_0x33c25a(0x1a1)][_0x33c25a(0x1e7)]=function(){const _0x206a84=_0x33c25a;VisuMZ[_0x206a84(0x177)]['Spriteset_Battle_adjustFlippedBattlefield'][_0x206a84(0x180)](this),this['_projectilesContainer']&&this[_0x206a84(0x1eb)]&&(this['_projectilesContainer'][_0x206a84(0x12c)]['x']=this['_battlerContainer'][_0x206a84(0x12c)]['x'],this[_0x206a84(0x207)]['scale']['y']=this[_0x206a84(0x1eb)]['scale']['y'],this[_0x206a84(0x207)]['x']=this[_0x206a84(0x1eb)]['x'],this['_projectilesContainer']['y']=this[_0x206a84(0x1eb)]['y']);},Spriteset_Battle[_0x33c25a(0x1a1)][_0x33c25a(0x1c2)]=function(_0x2eefca){const _0x29114a=_0x33c25a;if(!_0x2eefca)return;_0x2eefca=JsonEx[_0x29114a(0x134)](_0x2eefca);if(Imported['VisuMZ_3_ItemThrowSkills']){if(_0x29114a(0x14b)===_0x29114a(0x1a5)){const _0x5a42c0=_0x38db7c[_0x29114a(0x11e)]||0x1;let _0x2f16d8=0x0,_0x7c4365=0x0;for(const _0x56c351 of _0x57d631){_0x2f16d8+=_0x56c351[0x0],_0x7c4365+=_0x56c351[0x1];}_0x2f16d8/=_0x5a42c0,_0x7c4365/=_0x5a42c0,_0x4e8365['push'](new _0x559946(_0x1819b0[_0x29114a(0x1c3)](_0x2f16d8+_0x7745cf),_0x171fee[_0x29114a(0x1c3)](_0x7c4365+_0x19d703)));}else this[_0x29114a(0x200)](_0x2eefca);}const _0x129f35=[],_0x31f312=[];VisuMZ['ActSeqProjectiles'][_0x29114a(0x13f)](_0x129f35,_0x2eefca['Start']),VisuMZ[_0x29114a(0x177)][_0x29114a(0x13f)](_0x31f312,_0x2eefca['Goal']);const _0x2996d5=VisuMZ[_0x29114a(0x1e4)](_0x2eefca[_0x29114a(0x1be)]['Type']===_0x29114a(0x1c7)?_0x2eefca[_0x29114a(0x1be)][_0x29114a(0x1dc)]:[]),_0x9764b1=VisuMZ[_0x29114a(0x1e4)](_0x2eefca['Goal'][_0x29114a(0x1ee)]===_0x29114a(0x1c7)?_0x2eefca[_0x29114a(0x1fe)][_0x29114a(0x1dc)]:[]),_0x5e6c3e=this['_projectilesContainer'];let _0x4eb1b8=0x0;for(const _0x2358c7 of _0x129f35){let _0x4900d8=0x0;for(const _0x4d0440 of _0x31f312){const _0x3f63eb=new Sprite_Projectile(_0x2eefca,_0x2358c7,_0x4d0440);_0x3f63eb[_0x29114a(0x195)](_0x2996d5[_0x4eb1b8],_0x9764b1[_0x4900d8]),_0x5e6c3e[_0x29114a(0x143)](_0x3f63eb),_0x4900d8++;}_0x4eb1b8++;}},VisuMZ[_0x33c25a(0x177)]['CreateCoordinates']=function(_0x3e5fc2,_0x408e83){const _0x1bf30a=_0x33c25a,_0x4f3d6c=_0x408e83[_0x1bf30a(0x1ee)],_0x1a14ff=_0x408e83[_0x1bf30a(0x126)],_0x2eee5c=_0x408e83[_0x1bf30a(0x1e0)];_0x4f3d6c===_0x1bf30a(0x127)&&(_0x1bf30a(0x1cd)===_0x1bf30a(0x1cd)?_0x3e5fc2['push'](new Point(_0x408e83[_0x1bf30a(0x121)]+_0x1a14ff,_0x408e83[_0x1bf30a(0x136)]+_0x2eee5c)):_0x4a1b83+=(_0x19e117[_0x1bf30a(0x1f7)]()?0x1:-0x1)*_0x4e6740[_0x1bf30a(0x16f)]()[_0x1bf30a(0x128)]/0x2);if(_0x4f3d6c===_0x1bf30a(0x1c7)){const _0x1fa9e9=VisuMZ[_0x1bf30a(0x1e4)](_0x408e83[_0x1bf30a(0x1dc)]),_0x48325e=_0x1fa9e9[_0x1bf30a(0x132)](_0x442af9=>_0x442af9&&_0x442af9[_0x1bf30a(0x16f)]())[_0x1bf30a(0x1d5)](_0x543179=>VisuMZ['ActSeqProjectiles'][_0x1bf30a(0x1b1)](_0x543179,_0x408e83));if(!_0x48325e)return;if(_0x408e83[_0x1bf30a(0x11f)]){if(_0x1bf30a(0x15d)===_0x1bf30a(0x1e8))for(const _0x3bc857 of _0x516bb9){this[_0x1bf30a(0x1e9)]([_0x3bc857],_0x237cf6,_0x58a57d,_0x212c1c,_0x1305a5),_0xdd9cf6+=_0x4d7fd3;}else{const _0x1b3436=_0x48325e[_0x1bf30a(0x11e)]||0x1;let _0x10b9b7=0x0,_0x471f4f=0x0;for(const _0x50543c of _0x48325e){_0x10b9b7+=_0x50543c[0x0],_0x471f4f+=_0x50543c[0x1];}_0x10b9b7/=_0x1b3436,_0x471f4f/=_0x1b3436,_0x3e5fc2[_0x1bf30a(0x160)](new Point(Math['round'](_0x10b9b7+_0x1a14ff),Math[_0x1bf30a(0x1c3)](_0x471f4f+_0x2eee5c)));}}else for(const _0xca2cf4 of _0x48325e){_0x3e5fc2[_0x1bf30a(0x160)](new Point(Math[_0x1bf30a(0x1c3)](_0xca2cf4[0x0]+_0x1a14ff),Math[_0x1bf30a(0x1c3)](_0xca2cf4[0x1]+_0x2eee5c)));}}},VisuMZ[_0x33c25a(0x177)][_0x33c25a(0x1b1)]=function(_0xe26428,_0x48c865){const _0x408e2=_0x33c25a;let _0x596342=_0x408e2(0x1cf);if(_0x48c865){if(_0x408e2(0x123)===_0x408e2(0x123))_0x48c865['TargetLocation']=_0x48c865['TargetLocation']||'middle\x20center',_0x596342=_0x48c865[_0x408e2(0x1f8)][_0x408e2(0x205)]();else{if(!this['_settings'][_0x408e2(0x16c)])return;const _0x3cba71=this[_0x408e2(0x13e)]['Extra'][_0x408e2(0x130)]||0x0;if(_0x3cba71<=0x0)return;_0x3c0dbc[_0x408e2(0x137)][_0x408e2(0x1ea)](_0x3cba71);}}let _0x426ded=_0xe26428['battler']()[_0x408e2(0x1b3)];if(_0x596342['includes'](_0x408e2(0x1b2)))_0x426ded+=(_0xe26428['isActor']()?-0x1:0x1)*_0xe26428[_0x408e2(0x16f)]()[_0x408e2(0x128)]/0x2;else _0x596342[_0x408e2(0x196)](_0x408e2(0x1d6))&&('YVIIx'!==_0x408e2(0x149)?_0x426ded+=(_0xe26428[_0x408e2(0x1f7)]()?0x1:-0x1)*_0xe26428[_0x408e2(0x16f)]()[_0x408e2(0x128)]/0x2:_0x1731cc[_0x408e2(0x1ec)]());let _0x2a48aa=_0xe26428['battler']()[_0x408e2(0x18b)];_0x2a48aa+=_0xe26428[_0x408e2(0x16f)]()[_0x408e2(0x122)]();if(_0x596342[_0x408e2(0x196)]('center'))'yfQUY'!==_0x408e2(0x19f)?_0x2a48aa-=_0xe26428[_0x408e2(0x16f)]()[_0x408e2(0x192)]/0x2:this[_0x408e2(0x15c)](_0x4dd1ea);else _0x596342[_0x408e2(0x196)](_0x408e2(0x1ca))&&(_0x2a48aa-=_0xe26428[_0x408e2(0x16f)]()[_0x408e2(0x192)]);if(!$gameSystem[_0x408e2(0x1cc)]()&&_0xe26428[_0x408e2(0x1f7)]()){if(_0x408e2(0x157)===_0x408e2(0x157)){const _0x15746c=SceneManager[_0x408e2(0x137)]['_statusWindow'],_0x697deb=SceneManager[_0x408e2(0x137)]['_windowLayer'];_0x426ded+=_0x697deb['x']+_0x15746c['x'],_0x2a48aa+=_0x697deb['y']+_0x15746c['y'];}else{const _0x2e1446=_0x14d6e5[this[_0x408e2(0x13e)][_0x408e2(0x16c)]['EmulateItemEffect']];_0x571c44[_0x408e2(0x160)]('emulateActionEffect',_0x6bd2e6,_0x286921,_0x2e1446);}}return[_0x426ded,_0x2a48aa];},Spriteset_Battle['prototype'][_0x33c25a(0x17b)]=function(){if(!this['_projectilesContainer'])return!![];return this['_projectilesContainer']['children']['length']>0x0;};function Sprite_Projectile(){const _0x2daa61=_0x33c25a;this[_0x2daa61(0x12a)](...arguments);}Sprite_Projectile[_0x33c25a(0x1a1)]=Object[_0x33c25a(0x202)](Sprite['prototype']),Sprite_Projectile[_0x33c25a(0x1a1)]['constructor']=Sprite_Projectile,Sprite_Projectile[_0x33c25a(0x1a1)]['initialize']=function(_0x5a60cf,_0x1a1623,_0x500b48){const _0x17f24a=_0x33c25a;this[_0x17f24a(0x13e)]=_0x5a60cf,this[_0x17f24a(0x156)](_0x1a1623,_0x500b48),Sprite[_0x17f24a(0x1a1)][_0x17f24a(0x12a)][_0x17f24a(0x180)](this),this[_0x17f24a(0x164)](),this[_0x17f24a(0x1ba)]();},Sprite_Projectile[_0x33c25a(0x1a1)][_0x33c25a(0x195)]=function(_0x1f5770,_0x4ea4e7){const _0x34fe2a=_0x33c25a;this['_subject']=_0x1f5770||null,this[_0x34fe2a(0x179)]=_0x4ea4e7||null;},Sprite_Projectile[_0x33c25a(0x1a1)][_0x33c25a(0x156)]=function(_0x1a7b20,_0xd8437c){const _0x4ee53a=_0x33c25a;this[_0x4ee53a(0x1aa)]=_0x1a7b20['x'],this[_0x4ee53a(0x1e3)]=_0x1a7b20['y'],this[_0x4ee53a(0x1c0)]=_0x1a7b20['x'],this[_0x4ee53a(0x1f5)]=_0x1a7b20['y'],this['_moveTargetX']=_0xd8437c['x'],this['_moveTargetY']=_0xd8437c['y'];},Sprite_Projectile[_0x33c25a(0x1a1)]['initMembers']=function(){const _0x412723=_0x33c25a;this[_0x412723(0x1f9)]['x']=0.5,this[_0x412723(0x1f9)]['y']=0.5,this['x']=Graphics[_0x412723(0x128)]*-0xa,this['y']=Graphics[_0x412723(0x192)]*-0xa,this[_0x412723(0x1a6)]=0x0,this[_0x412723(0x139)]=this['_settings'][_0x412723(0x1c6)]||0x0,this[_0x412723(0x153)]=this[_0x412723(0x139)],this[_0x412723(0x1f4)]=_0x412723(0x14e),this[_0x412723(0x1c5)]=0x0,this[_0x412723(0x1ed)]=![],this[_0x412723(0x15e)]=![];const _0x4141b7=this[_0x412723(0x13e)]['Extra'];if(!_0x4141b7)return;this[_0x412723(0x163)]=_0x4141b7[_0x412723(0x194)]||0x0,this[_0x412723(0x1f4)]=_0x4141b7[_0x412723(0x159)],!this[_0x412723(0x13e)][_0x412723(0x169)]&&(this[_0x412723(0x20c)]=_0x4141b7['BlendMode']||0x0,this[_0x412723(0x1a4)](_0x4141b7[_0x412723(0x183)]||0x0),this['scale']['x']=this['scale']['y']=Math[_0x412723(0x1bb)](0.001,_0x4141b7[_0x412723(0x17f)]||0.001));},Sprite_Projectile[_0x33c25a(0x1a1)][_0x33c25a(0x1ba)]=function(){const _0x2045df=_0x33c25a;if(this[_0x2045df(0x13e)]['AnimationID'])_0x2045df(0x171)!==_0x2045df(0x171)?(this[_0x2045df(0x154)]=new _0x135105(0x1,0x1),this['setupAnimation'](),this['startProjectile']()):(this[_0x2045df(0x154)]=new Bitmap(0x1,0x1),this['setupAnimation'](),this['startProjectile']());else{if(this[_0x2045df(0x13e)][_0x2045df(0x1d8)])this['bitmap']=ImageManager[_0x2045df(0x13a)](_0x2045df(0x20b)),this[_0x2045df(0x154)]['addLoadListener'](this['setupIconFrame']['bind'](this));else{if(this[_0x2045df(0x13e)]['Picture'])this[_0x2045df(0x154)]=ImageManager[_0x2045df(0x1f6)](this[_0x2045df(0x13e)]['Picture']),this['bitmap']['addLoadListener'](this[_0x2045df(0x129)][_0x2045df(0x1d0)](this));else{if(_0x2045df(0x1c9)!==_0x2045df(0x1c9)){if(!this[_0x2045df(0x13e)][_0x2045df(0x16c)])return;if(!this[_0x2045df(0x1f2)])return;if(!this[_0x2045df(0x179)])return;const _0x1d0139=_0x1ae266[_0x2045df(0x198)],_0x5644da=_0x1b25b0[_0x2045df(0x1b8)],_0x290728=this[_0x2045df(0x1f2)],_0x1462d9=this[_0x2045df(0x179)];if(this[_0x2045df(0x13e)][_0x2045df(0x16c)][_0x2045df(0x1b4)]){const _0x1d125a=_0x5644da?_0x5644da[_0x2045df(0x185)]():null;_0x1d0139[_0x2045df(0x160)]('emulateActionEffect',_0x290728,_0x1462d9,_0x1d125a);}if(this[_0x2045df(0x13e)][_0x2045df(0x16c)]['EmulateItemEffect']){const _0x3636fc=_0x5c92c2[this[_0x2045df(0x13e)][_0x2045df(0x16c)][_0x2045df(0x16a)]];_0x1d0139[_0x2045df(0x160)](_0x2045df(0x146),_0x290728,_0x1462d9,_0x3636fc);}if(this[_0x2045df(0x13e)][_0x2045df(0x16c)][_0x2045df(0x13d)]){const _0x1db298=_0x12e822[this[_0x2045df(0x13e)][_0x2045df(0x16c)][_0x2045df(0x13d)]];_0x1d0139[_0x2045df(0x160)](_0x2045df(0x146),_0x290728,_0x1462d9,_0x1db298);}}else this[_0x2045df(0x154)]=new Bitmap(0x1,0x1),this[_0x2045df(0x17c)]();}}}},Sprite_Projectile[_0x33c25a(0x1a1)][_0x33c25a(0x182)]=function(){const _0x3cf3ba=_0x33c25a,_0x4327ce=VisuMZ[_0x3cf3ba(0x177)]['Settings'][_0x3cf3ba(0x1d1)];this[_0x3cf3ba(0x1c5)]=_0x4327ce*(Math['PI']/0xb4);const _0x1f635e=BattleManager[_0x3cf3ba(0x17a)];if(!_0x1f635e)return this[_0x3cf3ba(0x1fc)]();const _0x4b7b7d=this[_0x3cf3ba(0x13e)][_0x3cf3ba(0x169)],_0x447e2b=$dataAnimations[_0x4b7b7d];if(!_0x447e2b)return this[_0x3cf3ba(0x1fc)]();const _0x397cae=![],_0x73f241=0x0,_0x2446d2=!![];this[_0x3cf3ba(0x1d9)]=_0x1f635e[_0x3cf3ba(0x1e9)]([this],_0x447e2b,_0x397cae,_0x73f241,_0x2446d2),this['startProjectile']();},Sprite_Projectile[_0x33c25a(0x1a1)][_0x33c25a(0x18d)]=function(){const _0x2b0685=_0x33c25a,_0x40c79a=VisuMZ[_0x2b0685(0x177)][_0x2b0685(0x1a8)][_0x2b0685(0x203)];this[_0x2b0685(0x1c5)]=_0x40c79a*(Math['PI']/0xb4);const _0xcbbb6a=this['_settings'][_0x2b0685(0x1d8)],_0x34280a=ImageManager[_0x2b0685(0x1af)],_0x366d18=ImageManager[_0x2b0685(0x14a)],_0x1b78c1=_0xcbbb6a%0x10*_0x34280a,_0x316a8d=Math[_0x2b0685(0x148)](_0xcbbb6a/0x10)*_0x366d18;this[_0x2b0685(0x1e1)](_0x1b78c1,_0x316a8d,_0x34280a,_0x366d18),this[_0x2b0685(0x17c)]();},Sprite_Projectile['prototype'][_0x33c25a(0x129)]=function(){const _0x245346=_0x33c25a,_0x2aacd9=VisuMZ[_0x245346(0x177)][_0x245346(0x1a8)][_0x245346(0x190)];this[_0x245346(0x1c5)]=_0x2aacd9*(Math['PI']/0xb4),this[_0x245346(0x17c)]();},Sprite_Projectile[_0x33c25a(0x1a1)][_0x33c25a(0x17c)]=function(){const _0x1275ab=_0x33c25a;this[_0x1275ab(0x1ed)]=!![];},Sprite_Projectile[_0x33c25a(0x1a1)][_0x33c25a(0x1dd)]=function(){const _0x7d8fe7=_0x33c25a;Sprite['prototype'][_0x7d8fe7(0x1dd)][_0x7d8fe7(0x180)](this);if(!this['_startReady'])return;this[_0x7d8fe7(0x15e)]?this[_0x7d8fe7(0x1fc)]():(this[_0x7d8fe7(0x1cb)](),this['updateSpin']());},Sprite_Projectile[_0x33c25a(0x1a1)][_0x33c25a(0x158)]=function(){const _0x505186=_0x33c25a;return this[_0x505186(0x13e)][_0x505186(0x172)]&&this[_0x505186(0x1d9)]&&this[_0x505186(0x1d9)][_0x505186(0x1ab)]();},Sprite_Projectile[_0x33c25a(0x1a1)][_0x33c25a(0x1fc)]=function(){const _0x20549d=_0x33c25a;if(!this[_0x20549d(0x120)])return;!this[_0x20549d(0x1ff)]&&(this['performEmulateActionEffects'](),this[_0x20549d(0x16e)](),this[_0x20549d(0x1ff)]=!![]);if(this[_0x20549d(0x158)]()){this['updateSpin']();return;}this[_0x20549d(0x120)][_0x20549d(0x1df)](this);if(this[_0x20549d(0x1d9)]){const _0x48027e=BattleManager[_0x20549d(0x17a)];_0x48027e&&(_0x48027e[_0x20549d(0x19e)](this['_animationSprite']),delete this[_0x20549d(0x1d9)]);}},Sprite_Projectile[_0x33c25a(0x1a1)]['updateMove']=function(){const _0x52940a=_0x33c25a;if(this['_moveDuration']<0x0)return;this[_0x52940a(0x1a6)]++;var _0x49f506=this['_moveTime'],_0x23d372=this['_moveTotalDuration'],_0x49df06=this[_0x52940a(0x1aa)],_0x504bc7=this[_0x52940a(0x1e3)],_0x1d835b=this[_0x52940a(0x135)],_0x3385a3=this[_0x52940a(0x1fa)];_0x49f506/=_0x23d372,_0x49f506=VisuMZ[_0x52940a(0x1b9)](_0x49f506,this[_0x52940a(0x1f4)][_0x52940a(0x166)]()[_0x52940a(0x1d4)]());var _0x28450a=this[_0x52940a(0x1c0)],_0x3c680a=this['_moveCalcY'];this[_0x52940a(0x1c0)]=_0x49df06+_0x49f506*(_0x1d835b-_0x49df06),this['_moveCalcY']=_0x504bc7+_0x49f506*(_0x3385a3-_0x504bc7)-this[_0x52940a(0x1c8)]();var _0xde2970=this[_0x52940a(0x1c0)],_0x57a375=this[_0x52940a(0x1f5)];this[_0x52940a(0x16d)](_0x28450a,_0xde2970,_0x3c680a,_0x57a375),this['x']=Math[_0x52940a(0x1c3)](this['_moveCalcX']),this['y']=Math['round'](this[_0x52940a(0x1f5)]),this[_0x52940a(0x139)]--;if(this[_0x52940a(0x139)]<0x0){this['x']=this[_0x52940a(0x135)],this['y']=this[_0x52940a(0x1fa)],this[_0x52940a(0x15e)]=!![];if(this['_animationSprite'])this[_0x52940a(0x1d9)][_0x52940a(0x15e)]=!![];}},Sprite_Projectile['prototype']['applyAngle']=function(_0xfb1538,_0x5903ef,_0x12a662,_0x1fea80){const _0xbb123e=_0x33c25a;if(this[_0xbb123e(0x13e)]['Extra']&&this[_0xbb123e(0x13e)][_0xbb123e(0x16c)][_0xbb123e(0x1a9)]){if(_0xbb123e(0x12d)!==_0xbb123e(0x12d)){if(!this['_settings'][_0xbb123e(0x16c)])return;this['angle']+=this[_0xbb123e(0x13e)]['Extra'][_0xbb123e(0x173)]||0x0;}else{var _0xd21fdb=_0x5903ef-_0xfb1538,_0x1f0f10=_0x1fea80-_0x12a662,_0x32dc7b=Math['atan2'](_0x1f0f10,_0xd21fdb);_0x32dc7b+=this[_0xbb123e(0x13e)][_0xbb123e(0x16c)][_0xbb123e(0x194)]*(Math['PI']/0xb4),this['rotation']=_0x32dc7b+this['_radianAdjustment'],this[_0xbb123e(0x1d9)]&&(this[_0xbb123e(0x1d9)][_0xbb123e(0x147)]=this[_0xbb123e(0x162)]);}}},Sprite_Projectile[_0x33c25a(0x1a1)]['getPeak']=function(){const _0x4a84ac=_0x33c25a;if(!this['_settings'][_0x4a84ac(0x16c)])return 0x0;if(this['_settings'][_0x4a84ac(0x16c)][_0x4a84ac(0x18f)]===0x0)return 0x0;var _0x2333cf=this['_moveTotalDuration']-this['_moveDuration'],_0x1dfc43=this[_0x4a84ac(0x153)]/0x2,_0x5224fb=this[_0x4a84ac(0x13e)][_0x4a84ac(0x16c)]?this[_0x4a84ac(0x13e)][_0x4a84ac(0x16c)][_0x4a84ac(0x18f)]||0x0:0x0,_0x46d258=-_0x5224fb/Math[_0x4a84ac(0x20a)](_0x1dfc43,0x2),_0x5319dd=_0x46d258*Math[_0x4a84ac(0x20a)](_0x2333cf-_0x1dfc43,0x2)+_0x5224fb;return _0x5319dd;},Sprite_Projectile[_0x33c25a(0x1a1)]['updateSpin']=function(){const _0x151751=_0x33c25a;if(!this['_settings'][_0x151751(0x16c)])return;this[_0x151751(0x163)]+=this[_0x151751(0x13e)][_0x151751(0x16c)][_0x151751(0x173)]||0x0;},Sprite_Projectile[_0x33c25a(0x1a1)][_0x33c25a(0x175)]=function(){const _0x33b6c3=_0x33c25a;if(!this[_0x33b6c3(0x13e)][_0x33b6c3(0x16c)])return;if(!this['_subject'])return;if(!this[_0x33b6c3(0x179)])return;const _0x5a9e81=BattleManager[_0x33b6c3(0x198)],_0x78d4e2=BattleManager[_0x33b6c3(0x1b8)],_0x4a209e=this[_0x33b6c3(0x1f2)],_0x475312=this[_0x33b6c3(0x179)];if(this[_0x33b6c3(0x13e)][_0x33b6c3(0x16c)][_0x33b6c3(0x1b4)]){if(_0x33b6c3(0x18c)!==_0x33b6c3(0x133)){const _0x35789b=_0x78d4e2?_0x78d4e2['item']():null;_0x5a9e81[_0x33b6c3(0x160)]('emulateActionEffect',_0x4a209e,_0x475312,_0x35789b);}else this[_0x33b6c3(0x16b)](this[_0x33b6c3(0x147)]);}if(this[_0x33b6c3(0x13e)][_0x33b6c3(0x16c)]['EmulateItemEffect']){const _0x434a7b=$dataItems[this[_0x33b6c3(0x13e)][_0x33b6c3(0x16c)]['EmulateItemEffect']];_0x5a9e81['push'](_0x33b6c3(0x146),_0x4a209e,_0x475312,_0x434a7b);}if(this['_settings']['Extra'][_0x33b6c3(0x13d)]){if('RoYDy'==='CAqxJ'){_0x3d9f32[_0x33b6c3(0x1a1)][_0x33b6c3(0x1dd)]['call'](this);if(!this[_0x33b6c3(0x1ed)])return;this[_0x33b6c3(0x15e)]?this[_0x33b6c3(0x1fc)]():(this[_0x33b6c3(0x1cb)](),this[_0x33b6c3(0x19c)]());}else{const _0x27a2cb=$dataSkills[this['_settings'][_0x33b6c3(0x16c)][_0x33b6c3(0x13d)]];_0x5a9e81['push'](_0x33b6c3(0x146),_0x4a209e,_0x475312,_0x27a2cb);}}},Sprite_Projectile[_0x33c25a(0x1a1)][_0x33c25a(0x16e)]=function(){const _0x534fc9=_0x33c25a;if(!this[_0x534fc9(0x13e)][_0x534fc9(0x16c)])return;const _0x41bf0d=this[_0x534fc9(0x13e)]['Extra'][_0x534fc9(0x130)]||0x0;if(_0x41bf0d<=0x0)return;SceneManager[_0x534fc9(0x137)][_0x534fc9(0x1ea)](_0x41bf0d);};