//=============================================================================
// VisuStella MZ - Visual State Effects
// VisuMZ_3_VisualStateEffect.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_VisualStateEffects = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualStateEffects = VisuMZ.VisualStateEffects || {};
VisuMZ.VisualStateEffects.version = 1.19;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.19] [VisualStateEffects]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_State_Effects_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
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
 * States, buffs, and debuffs are amongst one of the most important aspects of
 * the battle system. Therefore, relaying proper information to the player is
 * extremely important. RPG Maker MZ does relay information to the player about
 * the various states and effects, but it is far from perfect. This plugin
 * allows you to add more detail and visual effects regarding states to relay
 * proper data.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Choose to display State Overlays and State Icons over actors and enemies.
 * * Create text popups for Buffs, Debuffs, and States along with full control
 *   over their color, flash, and flash duration.
 * * Play animations upon receiving or removing Buffs, Debuffs, and States.
 * * States can have repeating animations.
 * * States can change the tone of a sprite.
 * * States can freeze a sprite in place.
 * * States can adjust the opacity of a battler to make them semi-transparent.
 * * Hovering effects that can be visibly applied to trait objects.
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * State Motion Index and State Overlay Index
 * 
 * - The original RPG Maker MZ functions have been overwritten because they
 * only display the motions and overlays of the highest priority state even if
 * it does not have any motions while lower priority states with motions and
 * overlays will be hidden.
 * 
 * - The changed code will now take the highest priority state motion index (or
 * a custom one defined by a notetag) and the highest priority state overlay
 * index to show those instead.
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
 * === State-Related Notetags ===
 * 
 * The following notetags are made for states.
 * 
 * ---
 * 
 * <Hide State Popup>
 *
 * - Used for: State Notetags
 * - Don't display any of the popups for this state.
 * 
 * ---
 * 
 * <State Popup>
 *  text color: c
 *  flash color: r, g, b, a
 *  flash duration: d
 * </State Popup>
 *
 * - Used for: State Notetags
 * - Changes the settings of the state popup from the defaults declared by the
 *   Plugin Parameters. Each of the settings are optional. If the lines do not
 *   appear in the notetag, then the default values from the Plugin Parameters
 *   will be used instead.
 * - Replace 'c' #rrggbb for custom colors or insert a regular number for text
 *   colors from the Window Skin.
 * - Replace 'r', 'g', 'b', 'a' with number values ranging from 0 to 255 for
 *   'red', 'green', 'blue', and 'alpha' to determine the flash color.
 * - Replace 'd' with a number representing the amount of frames you want the
 *   flash duration to last for.
 * 
 * Examples:
 * 
 * <State Popup>
 *  text color: 3
 * </State Popup>
 * 
 * <State Popup>
 *  text color: #abcdef
 *  flash color: 255, 255, 0, 160
 * </State Popup>
 * 
 * <State Popup>
 *  flash color: 0, 255, 255, 160
 *  flash duration: 90
 * </State Popup>
 * 
 * <State Popup>
 *  flash duration: 777
 * </State Popup>
 * 
 * ---
 * 
 * <Add Animation: x>
 *
 * - Used for: State Notetags
 * - Determines the battle animation to play when the state is applied.
 * - Replace 'x' with a number representing the ID of the animation you wish
 *   to play when the state is added.
 * - This does not work for states without icons nor the death state.
 * 
 * ---
 * 
 * <Erase Animation: x>
 *
 * - Used for: State Notetags
 * - Determines the battle animation to play when the state is removed.
 * - Replace 'x' with a number representing the ID of the animation you wish
 *   to play when the state is removed.
 * - This does not work for states without icons nor the death state.
 * 
 * ---
 * 
 * <Repeat Animation: x>
 *
 * - Used for: State Notetags
 * - Determines the battle animation to play in intervals when the battler is
 *   affected by it.
 * - Replace 'x' with a number representing the ID of the animation you wish
 *   to play on repeat while the battler is affected by the state.
 * - The battler will cycle through the various repeating state animations
 *   available through states.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * - WARNING: Abusing Repeat Animations can jeopardize game performance.
 * 
 * ---
 * 
 * <Repeat Animation Cycle: x>
 *
 * - Used for: State Notetags
 * - Determines the cycle/duration of this specific state's repeating animation
 *   if you do not wish to use the plugin parameter's default setting.
 * - Replace 'x' with the number of frames you wish to play this animation for
 *   before moving onto the next animation.
 * - WARNING: Lower numbers can jeopardize game performance.
 * 
 * ---
 * 
 * <Custom Overlay: filename>
 * 
 * - Used for: State Notetags
 * - For those who don't want to use the img/system/ folder's "States" image
 *   file and want something custom, this notetag will do exactly that.
 * - Custom state overlays will follow similar dimensions to the original
 *   States image:
 *   - Pixel Width: 768
 *   - Pixel Height: 96
 *   - Total Frames: 8
 *   - If you want to use different sizes, we recommend you look into Effekseer
 *     custom animations with the <Repeat Animation: x> notetag instead.
 * - Replace 'filename' with the filename of the image you want to use as
 *   a state overlay found in the game project's img/system/ folder.
 *   - Do not include the file extension.
 * 
 * ---
 * 
 * <State Motion: Walk>
 * <State Motion: Wait>
 * <State Motion: Chant>
 * <State Motion: Guard>
 * <State Motion: Damage>
 * <State Motion: Evade>
 * <State Motion: Thrust>
 * <State Motion: Swing>
 * <State Motion: Missile>
 * <State Motion: Skill>
 * <State Motion: Spell>
 * <State Motion: Item>
 * <State Motion: Escape>
 * <State Motion: Victory>
 * <State Motion: Dying>
 * <State Motion: Abnormal>
 * <State Motion: Sleep>
 * <State Motion: Dead>
 *
 * - Used for: State Notetags
 * - Lets you determine what kind of state motion to play when the battler is
 *   affected by the state.
 * - The battler will only play the highest priority state motion.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * ---
 * 
 * <State Motion Lock>
 * 
 * - Used for: State Notetags
 * - If an actor or animated sideview enemy is affected by a state that has
 *   this notetag, their animation will be locked in place while this state
 *   is in effect.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * ---
 * 
 * <State Tone: red, green, blue, gray>
 *
 * - Used for: State Notetags
 * - Tints the battler with a tone determined by the state.
 * - Replace 'red', 'green', 'blue' with a value between -255 and 255.
 * - Replace 'gray' with a value between 0 and 255.
 * - If a battler has multiple states with tones, then the state with the
 *   highest priority value is applied to the battler.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * ---
 * 
 * <Visual Opacity: x>
 * <Visual Opacity: x%>
 * 
 * - Used for: State Notetags
 * - When a battler is affected by this state, change the opacity of their main
 *   battler sprite to 'x' or 'x%'.
 * - Replace 'x' with a number from 0 to 255 representing the opacity level.
 * - Replace 'x%' with a percentage from 0% to 100% representing the opacity.
 * - This does NOT affect UI elements like the HP Gauges, State Icons, or their
 *   positioning markers such as the battler's shadow as this is only to used
 *   to represent a change in their opacity through a state.
 * - To change the whole battler's opacity including everything from the UI
 *   elements, State Icons, etc., use the Action Sequence Plugin Command to
 *   visually alter the whole opacity level instead.
 * - The Visual Opacity level will compound with the opacity level adjusted by
 *   the Action Sequence Plugin Command. Keep this in mind when using both of
 *   them together.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * ---
 * 
 * <Visual Rainbow: +x>
 * <Visual Rainbow: -x>
 * 
 * - Used for: State Notetags
 * - When a battler is affected by this state, the battler has a colorful
 *   rainbow shifting effect.
 * - Replace 'x' with a number representing how fast the colors shift for the
 *   battler. Higher numbers are faster. Lower numbers are slower.
 * - This does NOT affect UI elements like the HP Gauges, State Icons, or their
 *   positioning markers such as the battler's shadow as this is only to used
 *   to represent a change in their opacity through a state.
 * - The Visual Rainbow shift will be stacked on top of any battlers/enemies
 *   that already have a hue change.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * ---
 *
 * === Hover-Related Notetags ===
 * 
 * ---
 * 
 * <Visual Hover Effect>
 *  Base: x
 *  Speed: y
 *  Rate: z
 *  Death: case
 * </Visual Hover Effect>
 *
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Creates a hover effect when tied to a trait object.
 * - The 'base' value determines the minimum height above the ground for the
 *   hover effect. Replace 'x' with a number representing the pixel height.
 * - The 'speed' value determines the flat adjustment towards the wobbling
 *   change. Replace 'y' with a number representing the speed. Lower values
 *   move faster while higher values move slower.
 * - The 'rate' determines the fluctuation rate when the hover effect bobbles
 *   up and down. Replace 'z' with a number representing the fluctuation rate.
 * - The 'death' scenario lets you decide if you want the hovering battler to
 *   remain hovering if they're dead or fall down to the floor. Replace 'case'
 *   with 'Hover' or 'Floor'.
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * Example:
 * 
 * <Visual Hover Effect>
 *  Base: 100
 *  Speed: 20
 *  Rate: 5.0
 *  Death: floor
 * </Visual Hover Effect>
 * 
 * ---
 *
 * === Breathing-Related Notetags ===
 * 
 * The following notetags are purely EXPERIMENTAL. There is a high likelihood
 * of unintended graphical glitches when using them. Use them at your own risk.
 * 
 * ---
 * 
 * <Visual Breathing Effect>
 *  Speed: x
 *  Speed X: x
 *  Speed Y: x
 *  
 *  Rate: x.y
 *  Rate X: x.y
 *  Rate Y: x.y
 * 
 *  HP Link: On
 *  HP Link: Off
 * </Visual Breathing Effect>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Creates a hover effect when tied to a trait object.
 * - The 'speed' value determines how long each cycle is.
 *   - When using 'Speed', this will apply to both 'Speed X' and 'Speed Y'
 *   - 'Speed X' refers to the horizontal breathing cycle
 *   - 'Speed Y' refers to the vertical breathing cycle
 *   - If not declared, both will default to a value of '10'
 * - The 'rate' value determines how exaggerated the breathing distortion looks
 *   for the affected target.
 *   - When using 'Rate', this will apply to both 'Rate X' and 'Rate Y
 *   - 'Rate X' refers to horizontal breathing distortion effect
 *   - 'Rate Y' refers to vertical breathing distortion effect
 *   - If not declared, 'Rate X' will default to 0.000 and 'Rate Y' to 0.020.
 * - HP Link refers to the breathing speed relative to the target's HP rate
 *   where the lower the rate, the slower the speed becomes.
 *   - 'On' means it's enabled.
 *   - 'Off' means it's disabled.
 *   - If not declared, this will default to 'OFF'
 * - NOTE: Using this with Passive State Conditions will make this effect
 *   update at the next battler refresh cycle. This is due to the effect
 *   being cached in order to prevent lag and overloading the engine.
 * 
 * Examples:
 * 
 * <Visual Breathing Effect>
 *  Speed: 10
 *  Rate Y: 0.050
 *  HP Link: On
 * </Visual Breathing Effect>
 * 
 * <Visual Breathing Effect>
 *  Speed X: 15
 *  Speed Y: 10
 *  Rate X: 0.01
 *  Rate Y: 0.050
 * </Visual Breathing Effect>
 * 
 * ---
 * 
 * <No Breathing>
 * 
 * - Used for: Actor, Class, Weapon, Armor, Enemy, State Notetags
 * - Removes any breathing effects for the affected target.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General settings for Visual State Effects.
 *
 * ---
 *
 * Actors
 * 
 *   Show State Overlay?:
 *   - Show state overlays over an actor's head?
 * 
 *   Show State Icons?:
 *   - Show state icons over an actor's head?
 *
 * ---
 *
 * Enemies
 * 
 *   Show State Overlay?:
 *   - Show state overlays over an enemy's head?
 * 
 *   Show State Icons?:
 *   - Show state icons over an enemy's head?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Buff/Debuff Settings Settings
 * ============================================================================
 *
 * Buff/Debuff settings for Visual State Effects.
 *
 * ---
 *
 * Popups
 * 
 *   Show Popups?:
 *   - Show Buff/Debuff Popups when applied?
 * 
 *     Buff Format:
 *     - How do you want the buff text to appear?
 *     - %1 - Parameter Name
 * 
 *       Text Color:
 *       - Use #rrggbb for custom colors or regular numbers for text colors
 *         from the Window Skin.
 * 
 *       Flash Color:
 *       - Adjust the popup's flash color.
 *       - Format: [red, green, blue, alpha]
 * 
 *       Flash Duration:
 *       - What is the frame duration of the flash effect?
 * 
 *     Debuff Format:
 *     - How do you want the debuff text to appear?
 *     - %1 - Parameter Name
 * 
 *       Text Color:
 *       - Use #rrggbb for custom colors or regular numbers for text colors
 *         from the Window Skin.
 * 
 *       Flash Color:
 *       - Adjust the popup's flash color.
 *       - Format: [red, green, blue, alpha]
 * 
 *       Flash Duration:
 *       - What is the frame duration of the flash effect?
 * 
 * ---
 * 
 * Animations
 * 
 *   Show Animations?:
 *   - Show Buff/Debuff Animations when applied?
 * 
 *     Mirror Animations?:
 *     - Mirror animations for buffs/debuffs?
 * 
 *     Mute Animations?:
 *     - Mute animations for buffs/debuffs?
 * 
 * ---
 * 
 * Buff Animations
 * 
 *   MaxHP Buff:
 *   MaxMP Buff:
 *   ATK Buff:
 *   DEF Buff:
 *   MAT Buff:
 *   MDF Buff:
 *   AGI Buff:
 *   LUK Buff:
 *   - Animation played when applying specific Buffs.
 * 
 * Debuff Animations
 * 
 *   MaxHP Debuff:
 *   MaxMP Debuff:
 *   ATK Debuff:
 *   DEF Debuff:
 *   MAT Debuff:
 *   MDF Debuff:
 *   AGI Debuff:
 *   LUK Debuff:
 *   - Animation played when applying specific Debuff.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: State Settings
 * ============================================================================
 *
 * Default State settings for Visual State Effects.
 *
 * ---
 *
 * Popups
 * 
 *   Show Popups?:
 *   - Show States Popups when applied and removed?
 * 
 *     Add State Format:
 *     - How do you want added states to appear?
 *     - %1 - State Name
 * 
 *     Erase State Format:
 *     - How do you want erased states to appear?
 *     - %1 - State Name
 * 
 *     Default Text Color:
 *     - Use #rrggbb for custom colors or regular numbers for text colors from
 *       the Window Skin.
 * 
 *       Match Turn Count?:
 *       - Match turn count color by default?
 * 
 *     Flash Color:
 *     - Adjust the popup's default flash color.
 *     - Format: [red, green, blue, alpha]
 * 
 *       Flash Duration:
 *       - What is the frame duration of the default flash effect?
 *
 * ---
 *
 * State Animations
 * 
 *   Add/Erase Animations
 * 
 *     Mirror Animations?:
 *     - Mirror animations for states?
 * 
 *     Mute Animations?:
 *     - Mute animations for states?
 * 
 *   Repeating Animations
 * 
 *     Cycle Time:
 *     - The amount of frames to wait before each animation cycle.
 *     - WARNING: Lower numbers can jeopardize game performance.
 * 
 *     Mirror Animations?:
 *     - Mirror repeating animations for states by default?
 * 
 *     Mute Animations?:
 *     - Mute repeating animations for states by default?
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
 * Version 1.19: March 16, 2023
 * * Compatibility Update!
 * ** Plugin is now updated for the recent changes made with the
 *    VisuMZ_2_DragonbonesUnion plugin.
 * 
 * Version 1.18: October 13, 2022
 * * Compatibility Update!
 * ** Plugin should be more compatible with VisuMZ_2_DragonbonesUnion.
 * 
 * Version 1.17: September 29, 2022
 * * Bug Fixes!
 * ** Filename has been shortened from VisuMZ_3_VisualStateEffects.js to
 *    VisuMZ_3_VisualStateEffect.js due to deployment reasons. For some mobile
 *    devices, keeping the name as long as VisuMZ_3_VisualStateEffects.js
 *    causes problems, but VisuMZ_3_VisualStateEffect.js is fine. Take note of
 *    this while you are updating.
 * 
 * Version 1.16: June 30, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New state notetag added by Irina: <Custom Overlay: filename>
 * *** For those who don't want to use the img/system/ folder's "States" image
 *     file and want something custom, this notetag will do exactly that.
 * *** Custom state overlays will follow similar dimensions to the original
 *     States image: Pixel Width of 768, Pixel Height of 96, Total Frames of 8.
 * *** If you want to use different sizes, we recommend you look into Effekseer
 *     custom animations with the <Repeat Animation: x> notetag instead.
 * 
 * Version 1.15: February 17, 2022
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.14: July 2, 2021
 * * Feature Updates!
 * ** When a battler's sprite opacity is zero, repeating animations are hidden
 *    along with them. Update made by Arisu.
 * 
 * Version 1.13: June 18, 2021
 * * Bug Fixes!
 * ** Repeating animations no longer play on invisible enemies or dead enemies
 *    through passive state effects. Fix made by Arisu.
 * 
 * Version 1.12: June 11, 2021
 * * Documentation Update!
 * ** Added warnings for the following notetags by Irina:
 * *** <Repeat Animation: x>
 * *** <State Motion: x>
 * *** <State Motion Lock>
 * *** <Visual Opacity: x>
 * *** <Visual Rainbow: +/-x>
 * *** <Visual Hover Effect>
 * *** <Visual Breathing Effect>
 * **** NOTE: Using this with Passive State Conditions will make this effect
 *      update at the next battler refresh cycle. This is due to the effect
 *      being cached in order to prevent lag and overloading the engine.
 * 
 * Version 1.11: May 21, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Irina:
 * *** <Visual Breathing Effect>
 * *** <No Breathing>
 * **** Enables/disables breathing effects for your actors and/or enemies.
 *      Refer to the documentation for more details on how to set it up.
 * **** These are EXPERIMENTAL notetags. This means that these effects have the
 *      possibility of creating graphical glitches when used. Use at your own
 *      risk as these are not perfected features.
 * 
 * Version 1.10: January 1, 2021
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Yanfly.
 * *** <Visual Rainbow: +x> and <Visual Rainbow: -x>
 * 
 * Version 1.09: December 25, 2020
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New notetags added by Yanfly.
 * *** <Visual Opacity: x> and <Visual Opacity: x%>
 * 
 * Version 1.08: December 18, 2020
 * * Bug Fixes!
 * ** RPG Maker MV animations will no longer crash for unplayable sound
 *    effects. Requires updated Core Engine. Fix made by Yanfly.
 * 
 * Version 1.07: November 22, 2020
 * * Bug Fixes!
 * ** <State Motion: x> now works for sideview enemies. Keep in mind the state
 *    motion does not apply to the active battler during the Input phase. Fix
 *    made by Yanfly.
 * 
 * Version 1.06: November 8, 2020
 * * Bug Fixes!
 * ** <Add Animation: x> and <Erase Animation: x> notetags now work properly.
 *    Fix by Arisu.
 * 
 * Version 1.05: November 1, 2020
 * * Feature Update!
 * ** Upon dying, state removal popups are no longer shown to prevent massive
 *    clutter of the screen. Update by Irina.
 * 
 * Version 1.04: October 25, 2020
 * * Bug Fixes!
 * ** Zooming in should no longer display faint outlines around state sprites.
 *    Fix made by Arisu.
 * * Compatibility Update
 * ** Added compatibility with the Battle Core's new <Battler Sprite Grounded>
 *    notetag. Added by Irina.
 * 
 * Version 1.03: October 11, 2020
 * * Bug Fixes!
 * ** Motion Locked Battlers at the start of battle no longer show their entire
 *    sprite sheet. Fix made by Arisu.
 * 
 * Version 1.02: September 13, 2020
 * * Compatibility Update
 * ** Added compatibility with Battle Core's newest update for the new
 *    distortion effects.
 * 
 * Version 1.01: September 6, 2020
 * * Compatibility Update
 * ** Added compatibility with Battle Core's newest update for the
 *    <Battle UI Offset: +x, +y> notetags. Update made by Yanfly.
 *
 * Version 1.00: September 2, 2020
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
 * @param VisualStateEffects
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General settings for Visual State Effects.
 * @default {"Actors":"","ActorOverlay:eval":"true","ActorStateIcon:eval":"true","Enemies":"","EnemyOverlay:eval":"true","EnemyStateIcon:eval":"true"}
 *
 * @param BuffDebuff:struct
 * @text Buff/Debuff Settings
 * @type struct<BuffDebuff>
 * @desc Buff/Debuff settings for Visual State Effects.
 * @default {"ShowPopups:eval":"true","BuffPopupFmt:str":"%1▲","BuffTextColor:str":"24","BuffFlashColor:eval":"[0, 255, 0, 160]","BuffFlashDuration:num":"60","DebuffPopupFmt:str":"%1▼","DebuffTextColor:str":"27","DebuffFlashColor:eval":"[255, 0, 0, 160]","DebuffFlashDuration:num":"60","ShowAnimations:eval":"true","AnimationMirror:eval":"false","AnimationMute:eval":"false","BuffAnimations":"","Buff0Animation:num":"52","Buff1Animation:num":"53","Buff2Animation:num":"52","Buff3Animation:num":"52","Buff4Animation:num":"53","Buff5Animation:num":"53","Buff6Animation:num":"51","Buff7Animation:num":"51","DebuffAnimations":"","Debuff0Animation:num":"55","Debuff1Animation:num":"56","Debuff2Animation:num":"55","Debuff3Animation:num":"55","Debuff4Animation:num":"56","Debuff5Animation:num":"56","Debuff6Animation:num":"54","Debuff7Animation:num":"54"}
 *
 * @param State:struct
 * @text State Defaults
 * @type struct<State>
 * @desc Default State settings for Visual State Effects.
 * @default {"ShowPopups:eval":"true","AddPopupFmt:str":"+%1","ErasePopupFmt:str":"-%1","TextColor:str":"0","MatchTurnCountColor:eval":"true","FlashColor:eval":"[0, 0, 0, 0]","FlashDuration:num":"60","StateAnimations":"","AddEraseAnimations":"","AnimationMirror:eval":"false","AnimationMute:eval":"false","RepeatingAnimations":"","CycleTime:num":"300","RepeatMirror:eval":"false","RepeatMute:eval":"true"}
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
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param Actors
 *
 * @param ActorOverlay:eval
 * @text Show State Overlay?
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show state overlays over an actor's head?
 * @default true
 *
 * @param ActorStateIcon:eval
 * @text Show State Icons?
 * @parent Actors
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show state icons over an actor's head?
 * @default true
 *
 * @param Enemies
 *
 * @param EnemyOverlay:eval
 * @text Show State Overlay?
 * @parent Enemies
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show state overlays over an enemy's head?
 * @default true
 *
 * @param EnemyStateIcon:eval
 * @text Show State Icons?
 * @parent Enemies
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show state icons over an enemy's head?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Buff/Debuff Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BuffDebuff:
 *
 * @param ShowPopups:eval
 * @text Show Popups?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show Buff/Debuff Popups when applied?
 * @default true
 *
 * @param BuffPopupFmt:str
 * @text Buff Format
 * @parent ShowPopups:eval
 * @desc How do you want the buff text to appear?
 * %1 - Parameter Name
 * @default %1▲
 *
 * @param BuffTextColor:str
 * @text Text Color
 * @parent BuffPopupFmt:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 24
 *
 * @param BuffFlashColor:eval
 * @text Flash Color
 * @parent BuffPopupFmt:str
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [0, 255, 0, 160]
 * 
 * @param BuffFlashDuration:num
 * @text Flash Duration
 * @parent BuffPopupFmt:str
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @param DebuffPopupFmt:str
 * @text Debuff Format
 * @parent ShowPopups:eval
 * @desc How do you want the debuff text to appear?
 * %1 - Parameter Name
 * @default %1▼
 *
 * @param DebuffTextColor:str
 * @text Text Color
 * @parent DebuffPopupFmt:str
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 27
 *
 * @param DebuffFlashColor:eval
 * @text Flash Color
 * @parent DebuffPopupFmt:str
 * @desc Adjust the popup's flash color.
 * Format: [red, green, blue, alpha]
 * @default [255, 0, 0, 160]
 * 
 * @param DebuffFlashDuration:num
 * @text Flash Duration
 * @parent DebuffPopupFmt:str
 * @type number
 * @desc What is the frame duration of the flash effect?
 * @default 60
 *
 * @param ShowAnimations:eval
 * @text Show Animations?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show Buff/Debuff Animations when applied?
 * @default true
 *
 * @param AnimationMirror:eval
 * @text Mirror Animations?
 * @parent ShowAnimations:eval
 * @type boolean
 * @on Mirror
 * @off Don't
 * @desc Mirror animations for buffs/debuffs?
 * @default false
 *
 * @param AnimationMute:eval
 * @text Mute Animations?
 * @parent ShowAnimations:eval
 * @type boolean
 * @on Mute
 * @off Don't
 * @desc Mute animations for buffs/debuffs?
 * @default false
 * 
 * @param BuffAnimations
 * @text Buff Animations
 * @parent ShowAnimations:eval
 *
 * @param Buff0Animation:num
 * @text MaxHP Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying MaxHP Buffs.
 * @default 52
 *
 * @param Buff1Animation:num
 * @text MaxMP Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying MaxMP Buffs.
 * @default 53
 *
 * @param Buff2Animation:num
 * @text ATK Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying ATK Buffs.
 * @default 52
 *
 * @param Buff3Animation:num
 * @text DEF Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying DEF Buffs.
 * @default 52
 *
 * @param Buff4Animation:num
 * @text MAT Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying MAT Buffs.
 * @default 53
 *
 * @param Buff5Animation:num
 * @text MDF Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying MDF Buffs.
 * @default 53
 *
 * @param Buff6Animation:num
 * @text AGI Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying AGI Buffs.
 * @default 51
 *
 * @param Buff7Animation:num
 * @text LUK Buff
 * @parent BuffAnimations
 * @type animation
 * @desc Animation played when applying LUK Buffs.
 * @default 51
 * 
 * @param DebuffAnimations
 * @text Debuff Animations
 * @parent ShowAnimations:eval
 *
 * @param Debuff0Animation:num
 * @text MaxHP Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying MaxHP Debuffs.
 * @default 55
 *
 * @param Debuff1Animation:num
 * @text MaxMP Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying MaxMP Debuffs.
 * @default 56
 *
 * @param Debuff2Animation:num
 * @text ATK Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying ATK Debuffs.
 * @default 55
 *
 * @param Debuff3Animation:num
 * @text DEF Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying DEF Debuffs.
 * @default 55
 *
 * @param Debuff4Animation:num
 * @text MAT Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying MAT Debuffs.
 * @default 56
 *
 * @param Debuff5Animation:num
 * @text MDF Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying MDF Debuffs.
 * @default 56
 *
 * @param Debuff6Animation:num
 * @text AGI Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying AGI Debuffs.
 * @default 54
 *
 * @param Debuff7Animation:num
 * @text LUK Debuff
 * @parent DebuffAnimations
 * @type animation
 * @desc Animation played when applying LUK Debuffs.
 * @default 54
 *
 */
/* ----------------------------------------------------------------------------
 * State Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~State:
 *
 * @param ShowPopups:eval
 * @text Show Popups?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show States Popups when applied and removed?
 * @default true
 *
 * @param AddPopupFmt:str
 * @text Add State Format
 * @parent ShowPopups:eval
 * @desc How do you want added states to appear?
 * %1 - State Name
 * @default +%1
 *
 * @param ErasePopupFmt:str
 * @text Erase State Format
 * @parent ShowPopups:eval
 * @desc How do you want erased states to appear?
 * %1 - State Name
 * @default -%1
 *
 * @param TextColor:str
 * @text Default Text Color
 * @parent ShowPopups:eval
 * @desc Use #rrggbb for custom colors or regular numbers
 * for text colors from the Window Skin.
 * @default 0
 *
 * @param MatchTurnCountColor:eval
 * @text Match Turn Count?
 * @parent TextColor:str
 * @type boolean
 * @on Match
 * @off Don't
 * @desc Match turn count color by default?
 * @default true
 *
 * @param FlashColor:eval
 * @text Flash Color
 * @parent ShowPopups:eval
 * @desc Adjust the popup's default flash color.
 * Format: [red, green, blue, alpha]
 * @default [0, 0, 0, 0]
 * 
 * @param FlashDuration:num
 * @text Flash Duration
 * @parent FlashColor:eval
 * @type number
 * @desc What is the frame duration of the default flash effect?
 * @default 60
 * 
 * @param StateAnimations
 * @text State Animations
 * 
 * @param AddEraseAnimations
 * @text Add/Erase Animations
 * @parent StateAnimations
 *
 * @param AnimationMirror:eval
 * @text Mirror Animations?
 * @parent AddEraseAnimations
 * @type boolean
 * @on Mirror
 * @off Don't
 * @desc Mirror animations for states?
 * @default false
 *
 * @param AnimationMute:eval
 * @text Mute Animations?
 * @parent AddEraseAnimations
 * @type boolean
 * @on Mute
 * @off Don't
 * @desc Mute animations for states?
 * @default false
 * 
 * @param RepeatingAnimations
 * @text Repeating Animations
 * @parent StateAnimations
 *
 * @param CycleTime:num
 * @text Cycle Time
 * @parent RepeatingAnimations
 * @type number
 * @min 1
 * @desc The amount of frames to wait before each animation cycle.
 * WARNING: Lower numbers can jeopardize game performance.
 * @default 300
 *
 * @param RepeatMirror:eval
 * @text Mirror Animations?
 * @parent RepeatingAnimations
 * @type boolean
 * @on Mirror
 * @off Don't
 * @desc Mirror repeating animations for states by default?
 * @default false
 *
 * @param RepeatMute:eval
 * @text Mute Animations?
 * @parent RepeatingAnimations
 * @type boolean
 * @on Mute
 * @off Don't
 * @desc Mute repeating animations for states by default?
 * @default true
 *
 */
//=============================================================================

function _0x2e6d(_0x3bdcc7,_0x19a7bf){const _0x48527c=_0x4852();return _0x2e6d=function(_0x2e6d77,_0x15a396){_0x2e6d77=_0x2e6d77-0x13b;let _0x3b73f6=_0x48527c[_0x2e6d77];return _0x3b73f6;},_0x2e6d(_0x3bdcc7,_0x19a7bf);}const _0x465090=_0x2e6d;(function(_0x2b610c,_0x1c0ce2){const _0x5765f0=_0x2e6d,_0x4a0b65=_0x2b610c();while(!![]){try{const _0x4bf01d=-parseInt(_0x5765f0(0x1ff))/0x1+-parseInt(_0x5765f0(0x21c))/0x2+parseInt(_0x5765f0(0x173))/0x3*(-parseInt(_0x5765f0(0x21a))/0x4)+-parseInt(_0x5765f0(0x1ec))/0x5+-parseInt(_0x5765f0(0x1fc))/0x6*(parseInt(_0x5765f0(0x1d9))/0x7)+parseInt(_0x5765f0(0x17e))/0x8+parseInt(_0x5765f0(0x216))/0x9*(parseInt(_0x5765f0(0x200))/0xa);if(_0x4bf01d===_0x1c0ce2)break;else _0x4a0b65['push'](_0x4a0b65['shift']());}catch(_0x52ac2a){_0x4a0b65['push'](_0x4a0b65['shift']());}}}(_0x4852,0xdfa53));var label=_0x465090(0x180),tier=tier||0x0,dependencies=[_0x465090(0x1b8),_0x465090(0x1fa),_0x465090(0x225)],pluginData=$plugins['filter'](function(_0x59362f){const _0xa1d017=_0x465090;return _0x59362f[_0xa1d017(0x1d0)]&&_0x59362f[_0xa1d017(0x191)][_0xa1d017(0x151)]('['+label+']');})[0x0];function _0x4852(){const _0x11b439=['length','_stateSprite','_actor','_overlayIndex','_hoverMinimum','createVisualBattlerOpacity','prototype','updateVisualStateEffects','onAddState','visualStateRainbow','STR','ICON_BUFF_START','applyBreathingScaleY','round','VisuMZ_2_DragonbonesUnion','createVisualRepeatingStateAnimation','Sprite_Battler_updateOpacity','cos','speedY','version','36pGPYpj','ARRAYSTRUCT','Game_BattlerBase_decreaseBuff','Debuff','1751668BaJkBf','battler','2234736PKhacJ','Sprite_Enemy_createStateIconSprite','stateMotionIndex','createVisualRepeatingStateAnimationCycle','Sprite_Actor_createStateSprite','map','EnemyStateIcon','States','updateOpacity','VisuMZ_1_SkillsStatesCore','updateVisualStateEffectsOverlay','extraPositionY','refresh','max','idle','onRemoveState','frameCount','updateVisualStateRainbow','NUM','visualRepeatingStateAniCycle','%1FlashColor','visualStateTone','randomInt','Sprite_Battler_initMembers','AnimationMute','name','scale','speed','Sprite_Battler_mainSpriteScaleY','_cache','loadSystem','motion','updateDragonbonesTimeScale','%1%2Animation','setBattler','isDead','trim','clamp','General','Sprite_Battler_extraPositionY','parameters','getVisualStateTone','height','BuffDebuff','setFrame','match','includes','Sprite_Battler_updateDragonbonesTimeScale','hoverData','AnimationMirror','updateRepeatingVisualStateAnimation','addChild','exit','hoverHeight','some','setupVisualStateEffectsPopup','stateMotionLock','setupVisualStateEffect','Game_BattlerBase_initMembers','mainSpriteScaleY','isRepeatingVisualStateAnimationShown','ARRAYFUNC','addLoadListener','_dragonbonesSpriteContainer','updateVisualStateTone','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','split','ConvertParams','Game_Battler_onAddState','bind','Add','visualBattlerOpacity','isActor','Settings','_svBattlerSprite','rateY','param','createVisualHoveringData','applyBreathingCalculations','updateFrame','9Mezvqo','Game_BattlerBase_die','note','bitmap','_hoverRand','overlay','_stateIconSprite','checkCacheKey','floor','Erase','createStateSprite','1623224RZfCPo','%1TextColor','VisualStateEffects','isActing','Sprite_Enemy_setBattler','hover','FlashDuration','return\x200','_stateMotionLocked','createVisualStateTone','stateColor','setupStateAnimation','ARRAYSTR','parse','Sprite_Battler_playDragonbonesMotion','isAlive','_customStateMotion','State','getStateOverlayIndex','description','loadBitmap','updateCustomOverlayFrame','flashColor','onLoadDefaultOverlayBitmap','%1FlashDuration','Game_BattlerBase_increaseBuff','requestFauxAnimation','visualStateToneTargetSprite','_bitmapName','playDragonbonesMotion','stateOverlayIndex','format','_die_bypass_visualStateEffects','min','Sprite_Battler_mainSpriteScaleX','setupVisualBuffDebuffEffect','isSceneBattle','rateX','hasSvBattler','ARRAYNUM','battleUIOffsetX','increaseBuff','_visualStateAnimationIndex','ARRAYEVAL','isEnemy','CycleTime','Game_BattlerBase_refresh','hpLinked','isBattlerGrounded','refreshMotion','EnemyOverlay','visible','createVisualStateRainbow','textColor','isInputting','IconSet','_battler','createVisualBreathingData','VisuMZ_0_CoreEngine','Sprite_SvEnemy','Sprite_Actor_update','updateDistortionOpacity','ICON_DEBUFF_START','_hue','noBreathing','_mainSprite','deathHover','Sprite_Actor_updateFrame','Sprite_StateOverlay_updateFrame','update','flashDuration','decreaseBuff','isStateAffected','battleUIOffsetY','setup','getStateMotionIndex','%1PopupFmt','createStateIconSprite','_breathingRand','constructor','RepeatMute','ARRAYJSON','status','traitObjects','setHue','getStateMotionLock','RepeatMirror','_visualStateAnimationRepeatDuration','Sprite_SvEnemy_refreshMotion','initMembers','getVisualRepeatingStateAnimationCycle','7eEIMaN','initVisualStateEffects','Sprite_Enemy_update','states','_loadingCustomOverlay','breathing','Game_Battler_onRemoveState','isAppeared','customizeStatePopup','_dragonbones','_pattern','onLoadCustomOverlayBitmap','applyBreathingScaleX','rate','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','MatchTurnCountColor','speedX','call','EVAL','3363390DEfWFV','setColorTone','push','ShowPopups','startMotion','Sprite_Actor_setBattler','_distortionSprite','hasDragonbonesBattler','deathStateId','hpRate','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','breathingData','opacity','STRUCT','VisuMZ_1_BattleCore','smooth','1103592nmyKio','getVisualRepeatingStateAnimation','Sprite_StateOverlay_loadBitmap','788195lHNqmc','11972680geQklw','Sprite_Actor_refreshMotion'];_0x4852=function(){return _0x11b439;};return _0x4852();}VisuMZ[label][_0x465090(0x16c)]=VisuMZ[label][_0x465090(0x16c)]||{},VisuMZ['ConvertParams']=function(_0x504e7b,_0x225882){const _0x100d3c=_0x465090;for(const _0x8bd6d4 in _0x225882){if(_0x8bd6d4[_0x100d3c(0x150)](/(.*):(.*)/i)){const _0x5e50b4=String(RegExp['$1']),_0x22d9da=String(RegExp['$2'])['toUpperCase']()['trim']();let _0x5de959,_0xa16a4c,_0x422b3c;switch(_0x22d9da){case _0x100d3c(0x22e):_0x5de959=_0x225882[_0x8bd6d4]!==''?Number(_0x225882[_0x8bd6d4]):0x0;break;case _0x100d3c(0x1a5):_0xa16a4c=_0x225882[_0x8bd6d4]!==''?JSON[_0x100d3c(0x18b)](_0x225882[_0x8bd6d4]):[],_0x5de959=_0xa16a4c[_0x100d3c(0x221)](_0x5626eb=>Number(_0x5626eb));break;case _0x100d3c(0x1eb):_0x5de959=_0x225882[_0x8bd6d4]!==''?eval(_0x225882[_0x8bd6d4]):null;break;case _0x100d3c(0x1a9):_0xa16a4c=_0x225882[_0x8bd6d4]!==''?JSON[_0x100d3c(0x18b)](_0x225882[_0x8bd6d4]):[],_0x5de959=_0xa16a4c[_0x100d3c(0x221)](_0x2982c4=>eval(_0x2982c4));break;case'JSON':_0x5de959=_0x225882[_0x8bd6d4]!==''?JSON[_0x100d3c(0x18b)](_0x225882[_0x8bd6d4]):'';break;case _0x100d3c(0x1cf):_0xa16a4c=_0x225882[_0x8bd6d4]!==''?JSON[_0x100d3c(0x18b)](_0x225882[_0x8bd6d4]):[],_0x5de959=_0xa16a4c[_0x100d3c(0x221)](_0x3cd1e6=>JSON['parse'](_0x3cd1e6));break;case'FUNC':_0x5de959=_0x225882[_0x8bd6d4]!==''?new Function(JSON[_0x100d3c(0x18b)](_0x225882[_0x8bd6d4])):new Function(_0x100d3c(0x185));break;case _0x100d3c(0x160):_0xa16a4c=_0x225882[_0x8bd6d4]!==''?JSON[_0x100d3c(0x18b)](_0x225882[_0x8bd6d4]):[],_0x5de959=_0xa16a4c[_0x100d3c(0x221)](_0x516b6d=>new Function(JSON[_0x100d3c(0x18b)](_0x516b6d)));break;case _0x100d3c(0x20c):_0x5de959=_0x225882[_0x8bd6d4]!==''?String(_0x225882[_0x8bd6d4]):'';break;case _0x100d3c(0x18a):_0xa16a4c=_0x225882[_0x8bd6d4]!==''?JSON['parse'](_0x225882[_0x8bd6d4]):[],_0x5de959=_0xa16a4c[_0x100d3c(0x221)](_0x96467b=>String(_0x96467b));break;case _0x100d3c(0x1f9):_0x422b3c=_0x225882[_0x8bd6d4]!==''?JSON[_0x100d3c(0x18b)](_0x225882[_0x8bd6d4]):{},_0x5de959=VisuMZ['ConvertParams']({},_0x422b3c);break;case _0x100d3c(0x217):_0xa16a4c=_0x225882[_0x8bd6d4]!==''?JSON[_0x100d3c(0x18b)](_0x225882[_0x8bd6d4]):[],_0x5de959=_0xa16a4c[_0x100d3c(0x221)](_0x16f248=>VisuMZ['ConvertParams']({},JSON[_0x100d3c(0x18b)](_0x16f248)));break;default:continue;}_0x504e7b[_0x5e50b4]=_0x5de959;}}return _0x504e7b;},(_0x25bd34=>{const _0x66479e=_0x465090,_0x459025=_0x25bd34['name'];for(const _0x221d2e of dependencies){if(!Imported[_0x221d2e]){alert(_0x66479e(0x1f6)['format'](_0x459025,_0x221d2e)),SceneManager['exit']();break;}}const _0x53bd0a=_0x25bd34[_0x66479e(0x191)];if(_0x53bd0a['match'](/\[Version[ ](.*?)\]/i)){const _0x3f4fe9=Number(RegExp['$1']);_0x3f4fe9!==VisuMZ[label][_0x66479e(0x215)]&&(alert(_0x66479e(0x1e7)['format'](_0x459025,_0x3f4fe9)),SceneManager[_0x66479e(0x157)]());}if(_0x53bd0a['match'](/\[Tier[ ](\d+)\]/i)){const _0x1727f4=Number(RegExp['$1']);_0x1727f4<tier?(alert(_0x66479e(0x164)[_0x66479e(0x19d)](_0x459025,_0x1727f4,tier)),SceneManager[_0x66479e(0x157)]()):tier=Math[_0x66479e(0x229)](_0x1727f4,tier);}VisuMZ[_0x66479e(0x166)](VisuMZ[label]['Settings'],_0x25bd34[_0x66479e(0x14b)]);})(pluginData),VisuMZ[_0x465090(0x180)]['Game_BattlerBase_initMembers']=Game_BattlerBase['prototype'][_0x465090(0x1d7)],Game_BattlerBase[_0x465090(0x208)]['initMembers']=function(){const _0x3cfd55=_0x465090;this[_0x3cfd55(0x140)]={},VisuMZ[_0x3cfd55(0x180)][_0x3cfd55(0x15d)]['call'](this);},VisuMZ['VisualStateEffects'][_0x465090(0x1ac)]=Game_BattlerBase['prototype'][_0x465090(0x228)],Game_BattlerBase[_0x465090(0x208)][_0x465090(0x228)]=function(){const _0x480fc4=_0x465090;this[_0x480fc4(0x140)]={},VisuMZ['VisualStateEffects'][_0x480fc4(0x1ac)][_0x480fc4(0x1ea)](this);},Game_BattlerBase[_0x465090(0x208)]['checkCacheKey']=function(_0x4f5c72){const _0x256796=_0x465090;return this[_0x256796(0x140)]=this['_cache']||{},this['_cache'][_0x4f5c72]!==undefined;},VisuMZ['VisualStateEffects'][_0x465090(0x197)]=Game_BattlerBase['prototype'][_0x465090(0x1a7)],Game_BattlerBase[_0x465090(0x208)][_0x465090(0x1a7)]=function(_0x38ad89){const _0x19d253=_0x465090;VisuMZ[_0x19d253(0x180)][_0x19d253(0x197)]['call'](this,_0x38ad89),this['setupVisualBuffDebuffEffect'](_0x38ad89,!![]);},VisuMZ[_0x465090(0x180)][_0x465090(0x218)]=Game_BattlerBase[_0x465090(0x208)][_0x465090(0x1c5)],Game_BattlerBase[_0x465090(0x208)]['decreaseBuff']=function(_0x25c2cb){const _0x15327c=_0x465090;VisuMZ[_0x15327c(0x180)][_0x15327c(0x218)]['call'](this,_0x25c2cb),this[_0x15327c(0x1a1)](_0x25c2cb,![]);},Game_BattlerBase[_0x465090(0x208)][_0x465090(0x1a1)]=function(_0x11ec3b,_0x456da2){const _0x183eac=_0x465090;if(!SceneManager['isSceneBattle']())return;if(!this[_0x183eac(0x21b)]())return;const _0x1d603d=VisuMZ[_0x183eac(0x180)][_0x183eac(0x16c)][_0x183eac(0x14e)],_0x339790=_0x456da2?'Buff':_0x183eac(0x219);_0x1d603d['ShowPopups']&&this[_0x183eac(0x21b)]()['setupBuffDebuffPopup'](_0x11ec3b,_0x456da2);if(_0x1d603d['ShowAnimations']){const _0x18d832=[this],_0x30ba47=_0x1d603d[_0x183eac(0x144)['format'](_0x339790,_0x11ec3b)]||0x0,_0x38652d=_0x1d603d['AnimationMirror'],_0x2ce9b0=_0x1d603d[_0x183eac(0x13b)];$gameTemp['requestFauxAnimation'](_0x18d832,_0x30ba47,_0x38652d,_0x2ce9b0);}},Game_BattlerBase[_0x465090(0x208)][_0x465090(0x15c)]=function(_0x5da6ba,_0x32add3){const _0x47ed5b=_0x465090;if(!SceneManager[_0x47ed5b(0x1a2)]())return;if(_0x5da6ba===this[_0x47ed5b(0x1f4)]())return;if(_0x32add3&&!this[_0x47ed5b(0x1c6)](_0x5da6ba))return;if(!_0x32add3&&this[_0x47ed5b(0x1c6)](_0x5da6ba))return;if(!this[_0x47ed5b(0x21b)]())return;const _0x152734=VisuMZ[_0x47ed5b(0x180)][_0x47ed5b(0x16c)]['State'],_0x15c79e=$dataStates[_0x5da6ba];if(!_0x15c79e)return;_0x152734[_0x47ed5b(0x1ef)]&&!_0x15c79e[_0x47ed5b(0x175)][_0x47ed5b(0x150)](/<HIDE STATE POPUP>/i)&&this[_0x47ed5b(0x21b)]()[_0x47ed5b(0x15a)](_0x5da6ba,_0x32add3),VisuMZ[_0x47ed5b(0x180)][_0x47ed5b(0x189)](this,_0x15c79e,_0x32add3);},VisuMZ['VisualStateEffects'][_0x465090(0x189)]=function(_0x4f3177,_0x66a309,_0x4ebae0){const _0x545aa3=_0x465090,_0x4bd126=VisuMZ[_0x545aa3(0x180)][_0x545aa3(0x16c)][_0x545aa3(0x18f)],_0x4e6b82=_0x4bd126[_0x545aa3(0x154)],_0x2174bf=_0x4bd126[_0x545aa3(0x13b)],_0x1a952f=_0x66a309[_0x545aa3(0x175)];if(_0x4ebae0&&_0x1a952f[_0x545aa3(0x150)](/(?:ADD|APPLY) ANIMATION:[ ](\d+)/i)){const _0x1552cb=Number(RegExp['$1']);$gameTemp[_0x545aa3(0x198)]([_0x4f3177],_0x1552cb,_0x4e6b82,_0x2174bf);}if(!_0x4ebae0&&_0x1a952f[_0x545aa3(0x150)](/(?:ERASE|REMOVE) ANIMATION:[ ](\d+)/i)){const _0x3e7735=Number(RegExp['$1']);$gameTemp[_0x545aa3(0x198)]([_0x4f3177],_0x3e7735,_0x4e6b82,_0x2174bf);}},Game_BattlerBase[_0x465090(0x208)][_0x465090(0x1fd)]=function(){const _0x5a6e45=_0x465090,_0x2a2837='visualRepeatingStateAnimation';if(this[_0x5a6e45(0x17a)](_0x2a2837))return this[_0x5a6e45(0x140)][_0x2a2837];return this['_cache'][_0x2a2837]=this[_0x5a6e45(0x211)](),this[_0x5a6e45(0x140)][_0x2a2837];},Game_BattlerBase[_0x465090(0x208)][_0x465090(0x211)]=function(){const _0x8ffccc=_0x465090;let _0x92761e=[];for(const _0x36c8a0 of this[_0x8ffccc(0x1dc)]()){if(!_0x36c8a0)continue;_0x36c8a0[_0x8ffccc(0x175)][_0x8ffccc(0x150)](/<(?:REPEAT|REPEATING|CYCLE|STATE) ANIMATION:[ ](\d+)>/i)&&_0x92761e['push'](Number(RegExp['$1'])||0x0);}return _0x92761e;},Game_BattlerBase[_0x465090(0x208)][_0x465090(0x1d8)]=function(){const _0x11f3f6=_0x465090,_0x1d38ea=_0x11f3f6(0x22f);if(this[_0x11f3f6(0x17a)](_0x1d38ea))return this['_cache'][_0x1d38ea];return this['_cache'][_0x1d38ea]=this[_0x11f3f6(0x21f)](),this[_0x11f3f6(0x140)][_0x1d38ea];},Game_BattlerBase[_0x465090(0x208)][_0x465090(0x21f)]=function(){const _0x89d5ee=_0x465090;let _0x258724=[];for(const _0x3fd83b of this[_0x89d5ee(0x1dc)]()){if(!_0x3fd83b)continue;_0x3fd83b[_0x89d5ee(0x175)]['match'](/<(?:REPEAT|REPEATING|CYCLE|STATE) ANIMATION CYCLE:[ ](\d+)>/i)?_0x258724[_0x89d5ee(0x1ee)](Number(RegExp['$1'])||0x0):_0x258724[_0x89d5ee(0x1ee)](VisuMZ[_0x89d5ee(0x180)]['Settings'][_0x89d5ee(0x18f)][_0x89d5ee(0x1ab)]);}return _0x258724;},Game_BattlerBase['prototype'][_0x465090(0x21e)]=function(){const _0x302250=_0x465090,_0x5f07dc='stateMotionIndex';if(this['checkCacheKey'](_0x5f07dc))return this[_0x302250(0x140)][_0x5f07dc];return this['_cache'][_0x5f07dc]=this[_0x302250(0x1c9)](),this[_0x302250(0x140)][_0x5f07dc];},Game_BattlerBase[_0x465090(0x208)]['getStateMotionIndex']=function(){const _0x4c849a=_0x465090,_0x483cfd=this['states']();for(const _0x3a1019 of _0x483cfd){if(!_0x3a1019)continue;if(_0x3a1019[_0x4c849a(0x175)][_0x4c849a(0x150)](/<STATE MOTION:[ ](.*)>/i))return this[_0x4c849a(0x18e)]=String(RegExp['$1'])['toLowerCase']()[_0x4c849a(0x147)](),0x4;else{if(_0x3a1019['motion']!==0x0)return _0x3a1019[_0x4c849a(0x142)];}}return 0x0;},Game_BattlerBase[_0x465090(0x208)][_0x465090(0x15b)]=function(){const _0x5bfe62=_0x465090,_0x484ce7='stateMotionLock';if(this[_0x5bfe62(0x17a)](_0x484ce7))return this[_0x5bfe62(0x140)][_0x484ce7];return this[_0x5bfe62(0x140)][_0x484ce7]=this['getStateMotionLock'](),this[_0x5bfe62(0x140)][_0x484ce7];},Game_BattlerBase['prototype'][_0x465090(0x1d3)]=function(){const _0x274e9e=_0x465090,_0x5eb978=this['states']();for(const _0x55c581 of _0x5eb978){if(!_0x55c581)continue;if(_0x55c581[_0x274e9e(0x175)][_0x274e9e(0x150)](/<STATE MOTION (?:LOCK|LOCKED)>/i))return!![];}return![];},Game_BattlerBase[_0x465090(0x208)][_0x465090(0x19c)]=function(){const _0x124ad0=_0x465090,_0x19a1b9='stateOverlayIndex';if(this[_0x124ad0(0x17a)](_0x19a1b9))return this[_0x124ad0(0x140)][_0x19a1b9];return this[_0x124ad0(0x140)][_0x19a1b9]=this[_0x124ad0(0x190)](),this[_0x124ad0(0x140)][_0x19a1b9];},Game_BattlerBase['prototype'][_0x465090(0x190)]=function(){const _0x2ff4a1=_0x465090,_0x3ae8c6=this[_0x2ff4a1(0x1dc)]();for(const _0x4c023d of _0x3ae8c6){if(!_0x4c023d)continue;if(_0x4c023d[_0x2ff4a1(0x175)][_0x2ff4a1(0x150)](/<CUSTOM OVERLAY:[ ](.*)>/i))return String(RegExp['$1']);if(_0x4c023d[_0x2ff4a1(0x178)]!==0x0)return _0x4c023d[_0x2ff4a1(0x178)];}return 0x0;},Game_BattlerBase[_0x465090(0x208)][_0x465090(0x14c)]=function(){const _0x5249b2=_0x465090,_0x2f4649=_0x5249b2(0x231);if(this[_0x5249b2(0x17a)](_0x2f4649))return this[_0x5249b2(0x140)][_0x2f4649];return this[_0x5249b2(0x140)][_0x2f4649]=this[_0x5249b2(0x187)](),this[_0x5249b2(0x140)][_0x2f4649];},Game_BattlerBase[_0x465090(0x208)][_0x465090(0x187)]=function(){const _0xb31aa3=_0x465090;for(const _0x3dfb9c of this['states']()){if(!_0x3dfb9c)continue;if(_0x3dfb9c['note'][_0xb31aa3(0x150)](/<STATE TONE:[ ](.*)>/i)){let _0xc6ec82=String(RegExp['$1'])[_0xb31aa3(0x147)]()[_0xb31aa3(0x165)](',')[_0xb31aa3(0x221)](_0x3893f6=>Number(_0x3893f6)||0x0);while(_0xc6ec82['length']<0x4)_0xc6ec82['push'](0x0);return _0xc6ec82[0x0]=_0xc6ec82[0x0][_0xb31aa3(0x148)](-0xff,0xff),_0xc6ec82[0x1]=_0xc6ec82[0x1][_0xb31aa3(0x148)](-0xff,0xff),_0xc6ec82[0x2]=_0xc6ec82[0x2][_0xb31aa3(0x148)](-0xff,0xff),_0xc6ec82[0x3]=_0xc6ec82[0x3]['clamp'](0x0,0xff),_0xc6ec82;}}return[0x0,0x0,0x0,0x0];},Game_BattlerBase['prototype'][_0x465090(0x153)]=function(){const _0x230792=_0x465090,_0x28b093=_0x230792(0x153);if(this[_0x230792(0x17a)](_0x28b093))return this[_0x230792(0x140)][_0x28b093];return this[_0x230792(0x140)][_0x28b093]=this['createVisualHoveringData'](),this[_0x230792(0x140)][_0x28b093];},Game_BattlerBase['prototype'][_0x465090(0x170)]=function(){const _0x10275a=_0x465090,_0x247866=/<VISUAL (?:HOVER|FLOAT) EFFECT>\s*([\s\S]*)\s*<\/VISUAL (?:HOVER|FLOAT) EFFECT>/i,_0x45ca68={'hover':![],'base':0x64,'speed':0x14,'rate':0x5,'deathHover':![]};for(const _0x3b3b16 of this[_0x10275a(0x1d1)]()){if(!_0x3b3b16)continue;if(_0x3b3b16[_0x10275a(0x175)][_0x10275a(0x150)](_0x247866)){_0x45ca68['hover']=!![];const _0x1b3c6a=String(RegExp['$1']);_0x1b3c6a[_0x10275a(0x150)](/BASE:[ ](.*)/i)&&(_0x45ca68['base']=Number(RegExp['$1'])||0x0);_0x1b3c6a[_0x10275a(0x150)](/SPEED:[ ](.*)/i)&&(_0x45ca68[_0x10275a(0x13e)]=Number(RegExp['$1'])||0x0);_0x1b3c6a[_0x10275a(0x150)](/RATE:[ ](.*)/i)&&(_0x45ca68[_0x10275a(0x1e6)]=Number(RegExp['$1'])||0x0);if(_0x1b3c6a[_0x10275a(0x150)](/DEATH: HOVER/i))_0x45ca68[_0x10275a(0x1c0)]=!![];else _0x1b3c6a[_0x10275a(0x150)](/DEATH: FLOOR/i)&&(_0x45ca68[_0x10275a(0x1c0)]=![]);break;}}return _0x45ca68;},Game_BattlerBase[_0x465090(0x208)][_0x465090(0x1be)]=function(){const _0x4f494a=_0x465090,_0xf0c0de=_0x4f494a(0x1be);if(this[_0x4f494a(0x17a)](_0xf0c0de))return this[_0x4f494a(0x140)][_0xf0c0de];const _0xb462b7=this['traitObjects']();return this['_cache'][_0xf0c0de]=_0xb462b7[_0x4f494a(0x159)](_0x2f0f67=>_0x2f0f67&&_0x2f0f67[_0x4f494a(0x175)][_0x4f494a(0x150)](/<NO (?:BREATH|BREATHING)>/i)),this['_cache'][_0xf0c0de];},Game_BattlerBase[_0x465090(0x208)][_0x465090(0x1f7)]=function(){const _0x145535=_0x465090,_0x4770a8=_0x145535(0x1f7);if(this['checkCacheKey'](_0x4770a8))return this['_cache'][_0x4770a8];return this[_0x145535(0x140)][_0x4770a8]=this[_0x145535(0x1b7)](),this[_0x145535(0x140)][_0x4770a8];},Game_BattlerBase[_0x465090(0x208)][_0x465090(0x1b7)]=function(){const _0xb74299=_0x465090,_0x3ed819=/<VISUAL (?:BREATH|BREATHING) EFFECT>\s*([\s\S]*)\s*<\/VISUAL (?:BREATH|BREATHING) EFFECT>/i,_0x4f2226={'breathing':![],'speedX':0xa,'speedY':0xa,'rateX':0x0,'rateY':0.02,'hpLinked':![]};for(const _0xc2f9b5 of this[_0xb74299(0x1d1)]()){if(!_0xc2f9b5)continue;if(_0xc2f9b5['note'][_0xb74299(0x150)](_0x3ed819)){_0x4f2226[_0xb74299(0x1de)]=!![];const _0x12e9f8=String(RegExp['$1']);_0x12e9f8[_0xb74299(0x150)](/SPEED:[ ](.*)/i)&&(_0x4f2226[_0xb74299(0x1e9)]=Number(RegExp['$1'])||0x0,_0x4f2226['speedY']=Number(RegExp['$1'])||0x0);_0x12e9f8['match'](/(?:SPEEDX|SPEED X):[ ](.*)/i)&&(_0x4f2226['speedX']=Number(RegExp['$1'])||0x0);_0x12e9f8['match'](/(?:SPEEDY|SPEED Y):[ ](.*)/i)&&(_0x4f2226['speedY']=Number(RegExp['$1'])||0x0);_0x12e9f8[_0xb74299(0x150)](/RATE:[ ](.*)/i)&&(_0x4f2226[_0xb74299(0x1a3)]=Number(RegExp['$1'])||0x0,_0x4f2226[_0xb74299(0x16e)]=Number(RegExp['$1'])||0x0);_0x12e9f8[_0xb74299(0x150)](/(?:RATEX|RATE X):[ ](.*)/i)&&(_0x4f2226[_0xb74299(0x1a3)]=Number(RegExp['$1'])||0x0);_0x12e9f8[_0xb74299(0x150)](/(?:RATEY|RATE Y):[ ](.*)/i)&&(_0x4f2226[_0xb74299(0x16e)]=Number(RegExp['$1'])||0x0);if(_0x12e9f8[_0xb74299(0x150)](/(?:HPLINK|HP LINK|HPLINKED|HP LINKED): ON/i))_0x4f2226[_0xb74299(0x1ad)]=!![];else _0x12e9f8['match'](/(?:HPLINK|HP LINK|HPLINKED|HP LINKED): OFF/i)&&(_0x4f2226[_0xb74299(0x1ad)]=![]);break;}}return _0x4f2226;},VisuMZ[_0x465090(0x180)][_0x465090(0x167)]=Game_Battler['prototype'][_0x465090(0x20a)],Game_Battler[_0x465090(0x208)][_0x465090(0x20a)]=function(_0x3491e0){const _0x2c4f08=_0x465090;VisuMZ[_0x2c4f08(0x180)]['Game_Battler_onAddState'][_0x2c4f08(0x1ea)](this,_0x3491e0),this[_0x2c4f08(0x15c)](_0x3491e0,!![]);},VisuMZ[_0x465090(0x180)][_0x465090(0x174)]=Game_BattlerBase[_0x465090(0x208)]['die'],Game_BattlerBase[_0x465090(0x208)]['die']=function(){const _0x4adcc5=_0x465090;this[_0x4adcc5(0x19e)]=!![],VisuMZ['VisualStateEffects'][_0x4adcc5(0x174)]['call'](this),this[_0x4adcc5(0x19e)]=undefined;},VisuMZ[_0x465090(0x180)]['Game_Battler_onRemoveState']=Game_Battler[_0x465090(0x208)]['onRemoveState'],Game_Battler[_0x465090(0x208)][_0x465090(0x22b)]=function(_0x8222c8){const _0x2fc791=_0x465090;if(!this[_0x2fc791(0x19e)])this[_0x2fc791(0x15c)](_0x8222c8,![]);VisuMZ[_0x2fc791(0x180)][_0x2fc791(0x1df)]['call'](this,_0x8222c8);},VisuMZ[_0x465090(0x180)][_0x465090(0x233)]=Sprite_Battler['prototype'][_0x465090(0x1d7)],Sprite_Battler[_0x465090(0x208)][_0x465090(0x1d7)]=function(){const _0x502dce=_0x465090;VisuMZ['VisualStateEffects'][_0x502dce(0x233)]['call'](this),this[_0x502dce(0x1da)](),this['initVisualHoverEffect']();},Sprite_Battler[_0x465090(0x208)][_0x465090(0x1da)]=function(){const _0x4ae4cd=_0x465090;this[_0x4ae4cd(0x1d5)]=0x0,this['_visualStateAnimationIndex']=0x0;},Sprite_Battler[_0x465090(0x208)]['setupBuffDebuffPopup']=function(_0x221515,_0x353f34){const _0x169f96=_0x465090,_0x336cb6=VisuMZ[_0x169f96(0x180)][_0x169f96(0x16c)][_0x169f96(0x14e)],_0x1f48c8=_0x353f34?'Buff':_0x169f96(0x219),_0x5ba085=_0x353f34?Game_BattlerBase[_0x169f96(0x20d)]:Game_BattlerBase[_0x169f96(0x1bc)],_0x1fcd88=_0x5ba085+_0x221515,_0x4bcb45=TextManager[_0x169f96(0x16f)](_0x221515),_0x1eb601=_0x336cb6['%1PopupFmt'[_0x169f96(0x19d)](_0x1f48c8)];if(_0x1eb601['length']<=0x0)return;let _0x25e226=_0x1eb601[_0x169f96(0x19d)](_0x4bcb45);const _0x54cd44={'textColor':_0x336cb6[_0x169f96(0x17f)[_0x169f96(0x19d)](_0x1f48c8)]||0x0,'flashColor':_0x336cb6[_0x169f96(0x230)[_0x169f96(0x19d)](_0x1f48c8)]||[0x0,0x0,0x0,0x0],'flashDuration':_0x336cb6[_0x169f96(0x196)['format'](_0x1f48c8)]||0x0},_0x3c2e13=ImageManager[_0x169f96(0x141)](_0x169f96(0x1b5));_0x3c2e13[_0x169f96(0x161)](this['setupIconTextPopup']['bind'](this,_0x1fcd88,_0x25e226,_0x54cd44));},Sprite_Battler[_0x465090(0x208)][_0x465090(0x15a)]=function(_0x30e2eb,_0x3789a4){const _0x166758=_0x465090,_0x494183=VisuMZ[_0x166758(0x180)][_0x166758(0x16c)][_0x166758(0x18f)],_0x36f220=$dataStates[_0x30e2eb];if(!_0x36f220)return;const _0x53536c=_0x3789a4?_0x166758(0x169):_0x166758(0x17c),_0x22ecc3=_0x36f220['iconIndex'];if(_0x22ecc3<=0x0)return;const _0x36e3b1=_0x494183[_0x166758(0x1ca)['format'](_0x53536c)];if(_0x36e3b1[_0x166758(0x202)]<=0x0)return;let _0x102b4b=_0x36e3b1['format'](_0x36f220[_0x166758(0x13c)]);const _0x455e73={'textColor':_0x494183['TextColor']||0x0,'flashColor':_0x494183['FlashColor']||[0x0,0x0,0x0,0x0],'flashDuration':_0x494183[_0x166758(0x184)]||0x0};_0x494183[_0x166758(0x1e8)]&&(_0x455e73[_0x166758(0x1b3)]=ColorManager[_0x166758(0x188)](_0x36f220));VisuMZ['VisualStateEffects'][_0x166758(0x1e1)](_0x36f220,_0x455e73);const _0x5b33af=ImageManager[_0x166758(0x141)](_0x166758(0x1b5));_0x5b33af['addLoadListener'](this['setupIconTextPopup'][_0x166758(0x168)](this,_0x22ecc3,_0x102b4b,_0x455e73));},VisuMZ['VisualStateEffects'][_0x465090(0x1e1)]=function(_0x32a30f,_0x54f9dc){const _0x22fe23=_0x465090,_0x44a4ac=_0x32a30f[_0x22fe23(0x175)];if(_0x44a4ac[_0x22fe23(0x150)](/<STATE POPUP>\s*([\s\S]*)\s*<\/STATE POPUP>/i)){const _0x2a46d1=String(RegExp['$1'])['trim']()['split'](/[\r\n]+/);for(const _0x128949 of _0x2a46d1){_0x128949[_0x22fe23(0x150)](/(?:TEXT COLOR|TEXTCOLOR):[ ](.*)/i)&&(_0x54f9dc[_0x22fe23(0x1b3)]=String(RegExp['$1'])[_0x22fe23(0x147)]());if(_0x128949[_0x22fe23(0x150)](/(?:FLASH COLOR|FLASHCOLOR):[ ](.*)/i)){_0x54f9dc['flashColor']=String(RegExp['$1'])[_0x22fe23(0x147)]()['split'](',')[_0x22fe23(0x221)](_0x10b9c1=>Number(_0x10b9c1));while(_0x54f9dc['flashColor'][_0x22fe23(0x202)]<=0x4){_0x54f9dc[_0x22fe23(0x194)][_0x22fe23(0x1ee)](0x0);};_0x54f9dc[_0x22fe23(0x1c4)]=_0x54f9dc[_0x22fe23(0x1c4)]||0x1;}_0x128949[_0x22fe23(0x150)](/(?:FLASH DURATION|FLASHDURATION):[ ](\d+)/i)&&(_0x54f9dc[_0x22fe23(0x1c4)]=Number(RegExp['$1']));}}},Sprite_Battler[_0x465090(0x208)][_0x465090(0x155)]=function(){const _0x3f0e8a=_0x465090;if(!this[_0x3f0e8a(0x15f)]())return;if(this[_0x3f0e8a(0x1d5)]>0x0){this[_0x3f0e8a(0x1d5)]--;return;}const _0x3b3cf8=this[_0x3f0e8a(0x1b6)][_0x3f0e8a(0x1fd)](),_0x59cd3a=this['_battler']['getVisualRepeatingStateAnimationCycle']();if(_0x3b3cf8[_0x3f0e8a(0x202)]<=0x0)return;this[_0x3f0e8a(0x1a8)]>=_0x3b3cf8[_0x3f0e8a(0x202)]&&(this[_0x3f0e8a(0x1a8)]=0x0);const _0x5bbda5=_0x3b3cf8[this[_0x3f0e8a(0x1a8)]],_0xc4602f=VisuMZ[_0x3f0e8a(0x180)][_0x3f0e8a(0x16c)][_0x3f0e8a(0x18f)],_0x4bac36=[this[_0x3f0e8a(0x1b6)]],_0x2b1c6e=_0xc4602f[_0x3f0e8a(0x1d4)],_0x5a9702=_0xc4602f[_0x3f0e8a(0x1ce)];$gameTemp[_0x3f0e8a(0x198)](_0x4bac36,_0x5bbda5,_0x2b1c6e,_0x5a9702);const _0x2ad6d7=_0x59cd3a[this[_0x3f0e8a(0x1a8)]]||_0xc4602f['CycleTime'];this[_0x3f0e8a(0x1d5)]=_0x2ad6d7,this[_0x3f0e8a(0x1a8)]++;},Sprite_Battler['prototype'][_0x465090(0x15f)]=function(){const _0x220530=_0x465090;if(!this['_battler'])return![];if(!this[_0x220530(0x1b6)]['isSpriteVisible']())return![];if(!this[_0x220530(0x1b6)][_0x220530(0x1e0)]())return![];if(!this[_0x220530(0x1b6)][_0x220530(0x18d)]())return![];if(this[_0x220530(0x1cd)]['name']===_0x220530(0x1b9))return![];if(this[_0x220530(0x1f8)]<=0x0)return![];return!![];},Sprite_Battler[_0x465090(0x208)][_0x465090(0x209)]=function(){const _0x483144=_0x465090;this['_stateIconSprite']&&this['updateVisualStateEffectsIcons'](),this[_0x483144(0x203)]&&this['updateVisualStateEffectsOverlay'](),this[_0x483144(0x155)](),this['updateVisualStateTone'](),this[_0x483144(0x22d)]();},Sprite_Battler[_0x465090(0x208)]['updateVisualStateEffectsIcons']=function(){const _0x1cd8ec=_0x465090;if(!this[_0x1cd8ec(0x1b6)])return;const _0x5f026d=VisuMZ[_0x1cd8ec(0x180)]['Settings'][_0x1cd8ec(0x149)],_0x387d00=this[_0x1cd8ec(0x179)];_0x387d00[_0x1cd8ec(0x1b1)]=this['_battler'][_0x1cd8ec(0x16b)]()?_0x5f026d['ActorStateIcon']:_0x5f026d[_0x1cd8ec(0x222)],this['_battler'][_0x1cd8ec(0x16b)]()&&(_0x387d00['x']=0x0,this[_0x1cd8ec(0x1b6)]['battleUIOffsetX']&&(_0x387d00['x']+=this['_battler'][_0x1cd8ec(0x1a6)]()),_0x387d00['y']=-Math[_0x1cd8ec(0x20f)]((this[_0x1cd8ec(0x14d)]+0x28)*0.9),_0x387d00['y']<0x14-this['y']&&(_0x387d00['y']=0x14-this['y']),this[_0x1cd8ec(0x1b6)][_0x1cd8ec(0x1c7)]&&(_0x387d00['y']+=this['_battler']['battleUIOffsetY']()-0x4));},Sprite_Battler[_0x465090(0x208)][_0x465090(0x226)]=function(){const _0x2a4f3a=_0x465090;if(!this['_battler'])return;const _0x38a1e7=VisuMZ[_0x2a4f3a(0x180)][_0x2a4f3a(0x16c)]['General'],_0x66a907=this[_0x2a4f3a(0x203)];_0x66a907[_0x2a4f3a(0x1b1)]=this[_0x2a4f3a(0x1b6)][_0x2a4f3a(0x16b)]()?_0x38a1e7['ActorOverlay']:_0x38a1e7[_0x2a4f3a(0x1b0)];this[_0x2a4f3a(0x16d)]&&(this[_0x2a4f3a(0x16d)]['_stateSprite'][_0x2a4f3a(0x1b1)]=![]);this[_0x2a4f3a(0x1b6)][_0x2a4f3a(0x1aa)]()&&!this['_battler'][_0x2a4f3a(0x1a4)]()&&(this[_0x2a4f3a(0x179)]?_0x66a907['y']=this['_stateIconSprite']['y']+_0x66a907['height']:_0x66a907['y']=-this[_0x2a4f3a(0x14d)]+_0x66a907[_0x2a4f3a(0x14d)]);;},Sprite_Battler[_0x465090(0x208)][_0x465090(0x163)]=function(){const _0x42293e=_0x465090;if(!this['_battler'])return;const _0x43525d=this['visualStateToneTargetSprite'](),_0x3a7984=this[_0x42293e(0x1b6)][_0x42293e(0x14c)]();_0x43525d&&_0x43525d[_0x42293e(0x1ed)](_0x3a7984),this['_dragonbonesSpriteContainer']&&this[_0x42293e(0x162)][_0x42293e(0x1ed)](_0x3a7984);},Sprite_Battler[_0x465090(0x208)][_0x465090(0x199)]=function(){const _0x26535d=_0x465090;return this[_0x26535d(0x1bf)]||this;},VisuMZ[_0x465090(0x180)][_0x465090(0x152)]=Sprite_Battler['prototype'][_0x465090(0x143)],Sprite_Battler[_0x465090(0x208)][_0x465090(0x143)]=function(){const _0x910b02=_0x465090;if(!this[_0x910b02(0x1e2)])return;this[_0x910b02(0x1b6)][_0x910b02(0x15b)]()?this['_dragonbones']['animation']['timeScale']=0x0:VisuMZ[_0x910b02(0x180)][_0x910b02(0x152)][_0x910b02(0x1ea)](this);},Sprite_Battler['prototype']['initVisualHoverEffect']=function(){const _0x14d510=_0x465090;this[_0x14d510(0x206)]=-0x1;},VisuMZ[_0x465090(0x180)][_0x465090(0x14a)]=Sprite_Battler['prototype'][_0x465090(0x227)],Sprite_Battler['prototype'][_0x465090(0x227)]=function(){const _0x18ac3d=_0x465090;let _0x57ba18=VisuMZ['VisualStateEffects'][_0x18ac3d(0x14a)][_0x18ac3d(0x1ea)](this);return _0x57ba18-=Math[_0x18ac3d(0x17b)](this[_0x18ac3d(0x158)]()),_0x57ba18;},Sprite_Battler[_0x465090(0x208)]['hoverHeight']=function(){const _0x1d2b0e=_0x465090;if(this[_0x1d2b0e(0x1cd)]===Sprite_SvEnemy)return 0x0;if(!this['_battler'])return 0x0;if(this[_0x1d2b0e(0x1b6)][_0x1d2b0e(0x1ae)]&&this['_battler'][_0x1d2b0e(0x1ae)]())return 0x0;const _0x579b59=this[_0x1d2b0e(0x1b6)][_0x1d2b0e(0x153)]();let _0x3802a0=0x0;this['_hoverRand']=this[_0x1d2b0e(0x177)]||Math['floor'](Math['random']()*0x2710);const _0x2ccd9b=Graphics[_0x1d2b0e(0x22c)]+this['_hoverRand'],_0x36aaea=_0x579b59['speed'],_0x1c9b86=_0x579b59[_0x1d2b0e(0x1e6)];let _0x2ed1e3=_0x579b59[_0x1d2b0e(0x183)];if(_0x2ed1e3&&this[_0x1d2b0e(0x1b6)][_0x1d2b0e(0x146)]())_0x2ed1e3=_0x579b59[_0x1d2b0e(0x1c0)];if(_0x2ed1e3){_0x3802a0+=Math['cos'](_0x2ccd9b/(_0x36aaea||0x1))*_0x1c9b86,_0x3802a0+=_0x579b59['base'];if(this[_0x1d2b0e(0x206)]<0x0)this['_hoverMinimum']=_0x3802a0;const _0x112fb0=this[_0x1d2b0e(0x206)]+_0x36aaea/Math[_0x1d2b0e(0x229)](0x1,_0x1c9b86**1.5);this[_0x1d2b0e(0x206)]=Math[_0x1d2b0e(0x19f)](_0x112fb0,_0x3802a0);}else{const _0x5675c2=this['_hoverMinimum']-_0x36aaea/Math[_0x1d2b0e(0x229)](0x1,_0x1c9b86/0x2);this[_0x1d2b0e(0x206)]=Math[_0x1d2b0e(0x229)](_0x5675c2,0x0);}return Math[_0x1d2b0e(0x229)](0x0,this[_0x1d2b0e(0x206)]);},VisuMZ[_0x465090(0x180)][_0x465090(0x212)]=Sprite_Battler[_0x465090(0x208)][_0x465090(0x224)],Sprite_Battler[_0x465090(0x208)][_0x465090(0x224)]=function(){const _0xff0f01=_0x465090;VisuMZ['VisualStateEffects'][_0xff0f01(0x212)][_0xff0f01(0x1ea)](this),this[_0xff0f01(0x1bb)]();},Sprite_Battler['prototype']['updateDistortionOpacity']=function(){const _0x3751cd=_0x465090;if(!this[_0x3751cd(0x1f2)])return;if(!this[_0x3751cd(0x1b6)])return;if(this['constructor']===Sprite_SvEnemy)return;const _0xd96cbc=this[_0x3751cd(0x1b6)]['visualBattlerOpacity']();if(this['_distortionSprite'][_0x3751cd(0x1f8)]!==_0xd96cbc){const _0x35c0d0=0x8;this[_0x3751cd(0x1f2)][_0x3751cd(0x1f8)]>_0xd96cbc?this[_0x3751cd(0x1f2)]['opacity']=Math[_0x3751cd(0x229)](this['_distortionSprite'][_0x3751cd(0x1f8)]-_0x35c0d0,_0xd96cbc):this['_distortionSprite'][_0x3751cd(0x1f8)]=Math['min'](this[_0x3751cd(0x1f2)][_0x3751cd(0x1f8)]+_0x35c0d0,_0xd96cbc);}},Game_BattlerBase[_0x465090(0x208)][_0x465090(0x16a)]=function(){const _0x42e121=_0x465090,_0x429fa7=_0x42e121(0x16a);if(this['checkCacheKey'](_0x429fa7))return this[_0x42e121(0x140)][_0x429fa7];return this[_0x42e121(0x140)][_0x429fa7]=this[_0x42e121(0x207)](),this[_0x42e121(0x140)][_0x429fa7];},Game_BattlerBase['prototype'][_0x465090(0x207)]=function(){const _0x455d50=_0x465090;for(const _0x1efcf4 of this[_0x455d50(0x1dc)]()){if(!_0x1efcf4)continue;if(_0x1efcf4[_0x455d50(0x175)][_0x455d50(0x150)](/<VISUAL OPACITY:[ ](\d+)([%％])>/i)){const _0x40ca3d=Number(RegExp['$1'])*0.01;return Math[_0x455d50(0x20f)](_0x40ca3d*0xff)['clamp'](0x0,0xff);}if(_0x1efcf4[_0x455d50(0x175)]['match'](/<VISUAL OPACITY:[ ](\d+)>/i))return Number(RegExp['$1'])['clamp'](0x0,0xff);}return 0xff;},Sprite_Battler[_0x465090(0x208)]['updateVisualStateRainbow']=function(){const _0x57d4ac=_0x465090;if(!this[_0x57d4ac(0x1b6)])return;const _0x3ce661=this[_0x57d4ac(0x1b6)]['visualStateRainbow']();if(_0x3ce661===0x0&&this[_0x57d4ac(0x1f2)][_0x57d4ac(0x1bd)]!==0x0)this[_0x57d4ac(0x1f2)][_0x57d4ac(0x1d2)](0x0);else{let _0x3a7620=this['_distortionSprite'][_0x57d4ac(0x1bd)]+_0x3ce661;_0x3a7620%=0x168,this[_0x57d4ac(0x1f2)][_0x57d4ac(0x1d2)](_0x3a7620);}},Game_BattlerBase[_0x465090(0x208)]['visualStateRainbow']=function(){const _0x1d90d7=_0x465090,_0x2f341c=_0x1d90d7(0x20b);if(this[_0x1d90d7(0x17a)](_0x2f341c))return this[_0x1d90d7(0x140)][_0x2f341c];return this[_0x1d90d7(0x140)][_0x2f341c]=this[_0x1d90d7(0x1b2)](),this[_0x1d90d7(0x140)][_0x2f341c];},Game_BattlerBase[_0x465090(0x208)][_0x465090(0x1b2)]=function(){const _0x1d9495=_0x465090;for(const _0x170aef of this[_0x1d9495(0x1dc)]()){if(!_0x170aef)continue;if(_0x170aef[_0x1d9495(0x175)]['match'](/<VISUAL RAINBOW:[ ]([\+\-]\d+)>/i))return Number(RegExp['$1']);}return 0x0;},VisuMZ[_0x465090(0x180)][_0x465090(0x1a0)]=Sprite_Battler['prototype']['mainSpriteScaleX'],Sprite_Battler[_0x465090(0x208)]['mainSpriteScaleX']=function(){const _0x5a2dc4=_0x465090;let _0x5d4573=VisuMZ[_0x5a2dc4(0x180)]['Sprite_Battler_mainSpriteScaleX'][_0x5a2dc4(0x1ea)](this);return _0x5d4573+=this[_0x5a2dc4(0x1e5)](),_0x5d4573;},VisuMZ[_0x465090(0x180)][_0x465090(0x13f)]=Sprite_Battler[_0x465090(0x208)][_0x465090(0x15e)],Sprite_Battler[_0x465090(0x208)][_0x465090(0x15e)]=function(){const _0x3e03a5=_0x465090;let _0xaa518f=VisuMZ['VisualStateEffects'][_0x3e03a5(0x13f)][_0x3e03a5(0x1ea)](this);return _0xaa518f+=this[_0x3e03a5(0x20e)](),_0xaa518f;},Sprite_Battler['prototype'][_0x465090(0x1e5)]=function(){const _0x582f78=_0x465090;if(!this[_0x582f78(0x1b6)])return 0x0;if(this[_0x582f78(0x1b6)][_0x582f78(0x1be)]())return 0x0;const _0x68052f=this[_0x582f78(0x1b6)][_0x582f78(0x1f7)]();if(!_0x68052f)return 0x0;if(!_0x68052f[_0x582f78(0x1de)])return 0x0;let _0x1e4853=this[_0x582f78(0x171)](_0x68052f,_0x68052f[_0x582f78(0x1e9)],_0x68052f[_0x582f78(0x1a3)]);const _0x4f8e2d=this[_0x582f78(0x1f2)][_0x582f78(0x13d)]['x']>0x0?0x1:-0x1;return _0x1e4853*_0x4f8e2d;},Sprite_Battler[_0x465090(0x208)][_0x465090(0x20e)]=function(){const _0x37a74a=_0x465090;if(!this[_0x37a74a(0x1b6)])return 0x0;if(this['_battler'][_0x37a74a(0x1be)]())return 0x0;const _0x5c62d6=this[_0x37a74a(0x1b6)][_0x37a74a(0x1f7)]();if(!_0x5c62d6)return 0x0;if(!_0x5c62d6[_0x37a74a(0x1de)])return 0x0;let _0x2e4111=this[_0x37a74a(0x171)](_0x5c62d6,_0x5c62d6[_0x37a74a(0x214)],_0x5c62d6[_0x37a74a(0x16e)]);return _0x2e4111;},Sprite_Battler['prototype']['applyBreathingCalculations']=function(_0x227a78,_0x365371,_0x3dfde9){const _0x514917=_0x465090;this[_0x514917(0x1cc)]=this[_0x514917(0x1cc)]??Math[_0x514917(0x232)](0x2710);let _0x4fc100=Graphics[_0x514917(0x22c)]+this[_0x514917(0x1cc)];return _0x227a78[_0x514917(0x1ad)]&&(_0x365371/=this[_0x514917(0x1b6)][_0x514917(0x1f5)]()),Math[_0x514917(0x213)](_0x4fc100/_0x365371)*_0x3dfde9;},VisuMZ[_0x465090(0x180)][_0x465090(0x220)]=Sprite_Actor[_0x465090(0x208)][_0x465090(0x17d)],Sprite_Actor[_0x465090(0x208)][_0x465090(0x17d)]=function(){const _0x2f4335=_0x465090;VisuMZ['VisualStateEffects'][_0x2f4335(0x220)][_0x2f4335(0x1ea)](this),this['createStateIconSprite']();},Sprite_Actor[_0x465090(0x208)]['createStateIconSprite']=function(){const _0x50a7a2=_0x465090;if(this[_0x50a7a2(0x1cd)]!==Sprite_Actor)return;this[_0x50a7a2(0x179)]=new Sprite_StateIcon(),this[_0x50a7a2(0x156)](this[_0x50a7a2(0x179)]),this[_0x50a7a2(0x179)][_0x50a7a2(0x176)][_0x50a7a2(0x1fb)]=![];},VisuMZ['VisualStateEffects'][_0x465090(0x201)]=Sprite_Actor['prototype']['refreshMotion'],Sprite_Actor[_0x465090(0x208)]['refreshMotion']=function(){const _0x38649d=_0x465090,_0x118876=this[_0x38649d(0x204)];if(!_0x118876)return;const _0x1812d3=_0x118876[_0x38649d(0x21e)]();if(_0x1812d3>=0x4){if(!_0x118876[_0x38649d(0x1b4)]()&&!_0x118876[_0x38649d(0x181)]())return this[_0x38649d(0x1f0)](_0x118876['_customStateMotion']);}VisuMZ[_0x38649d(0x180)][_0x38649d(0x201)][_0x38649d(0x1ea)](this);},VisuMZ[_0x465090(0x180)]['Sprite_SvEnemy_refreshMotion']=Sprite_SvEnemy['prototype'][_0x465090(0x1af)],Sprite_SvEnemy[_0x465090(0x208)][_0x465090(0x1af)]=function(){const _0x29cb80=_0x465090,_0x55f130=this[_0x29cb80(0x204)];if(!_0x55f130)return;if(Imported[_0x29cb80(0x210)]&&_0x55f130[_0x29cb80(0x1f3)]())return;const _0x276695=_0x55f130[_0x29cb80(0x21e)]();if(_0x276695>=0x4){if(!_0x55f130[_0x29cb80(0x1b4)]()&&!_0x55f130[_0x29cb80(0x181)]())return this['startMotion'](_0x55f130[_0x29cb80(0x18e)]);}VisuMZ[_0x29cb80(0x180)][_0x29cb80(0x1d6)][_0x29cb80(0x1ea)](this);},VisuMZ[_0x465090(0x180)][_0x465090(0x18c)]=Sprite_Battler[_0x465090(0x208)]['playDragonbonesMotion'],Sprite_Battler['prototype'][_0x465090(0x19b)]=function(_0x48c83f){const _0x39e20f=_0x465090;if(this['_dragonbones']&&_0x48c83f===_0x39e20f(0x22a)){const _0x1dd26f=this[_0x39e20f(0x1b6)][_0x39e20f(0x21e)]();_0x1dd26f>=0x4&&(_0x48c83f=this['_battler'][_0x39e20f(0x18e)]||_0x48c83f);}VisuMZ['VisualStateEffects'][_0x39e20f(0x18c)][_0x39e20f(0x1ea)](this,_0x48c83f);},VisuMZ[_0x465090(0x180)][_0x465090(0x1f1)]=Sprite_Actor[_0x465090(0x208)]['setBattler'],Sprite_Actor[_0x465090(0x208)][_0x465090(0x145)]=function(_0x5a6783){const _0x4f3e8c=_0x465090;VisuMZ['VisualStateEffects'][_0x4f3e8c(0x1f1)][_0x4f3e8c(0x1ea)](this,_0x5a6783);if(this[_0x4f3e8c(0x179)])this[_0x4f3e8c(0x179)][_0x4f3e8c(0x1c8)](_0x5a6783);},VisuMZ[_0x465090(0x180)][_0x465090(0x1ba)]=Sprite_Actor['prototype'][_0x465090(0x1c3)],Sprite_Actor[_0x465090(0x208)]['update']=function(){const _0x37b83a=_0x465090;VisuMZ[_0x37b83a(0x180)][_0x37b83a(0x1ba)][_0x37b83a(0x1ea)](this),this[_0x37b83a(0x209)]();},VisuMZ[_0x465090(0x180)][_0x465090(0x1c1)]=Sprite_Actor[_0x465090(0x208)][_0x465090(0x172)],Sprite_Actor[_0x465090(0x208)][_0x465090(0x172)]=function(){const _0x2d16ee=_0x465090;if(this[_0x2d16ee(0x1b6)][_0x2d16ee(0x15b)]()&&this[_0x2d16ee(0x1bf)]&&this[_0x2d16ee(0x1bf)][_0x2d16ee(0x176)]){if(this[_0x2d16ee(0x186)])return;this['_stateMotionLocked']=this[_0x2d16ee(0x1bf)]['_frame']['width']>0x0;}else this[_0x2d16ee(0x186)]=![];VisuMZ[_0x2d16ee(0x180)][_0x2d16ee(0x1c1)][_0x2d16ee(0x1ea)](this);},VisuMZ['VisualStateEffects'][_0x465090(0x21d)]=Sprite_Enemy[_0x465090(0x208)][_0x465090(0x1cb)],Sprite_Enemy[_0x465090(0x208)][_0x465090(0x1cb)]=function(){const _0x3df793=_0x465090;this[_0x3df793(0x17d)](),VisuMZ[_0x3df793(0x180)][_0x3df793(0x21d)][_0x3df793(0x1ea)](this);},Sprite_Enemy[_0x465090(0x208)][_0x465090(0x17d)]=function(){const _0x4ea67d=_0x465090;this['_stateSprite']=new Sprite_StateOverlay(),this['addChild'](this[_0x4ea67d(0x203)]);},VisuMZ[_0x465090(0x180)][_0x465090(0x182)]=Sprite_Enemy[_0x465090(0x208)][_0x465090(0x145)],Sprite_Enemy[_0x465090(0x208)][_0x465090(0x145)]=function(_0x3941e5){const _0x2617c2=_0x465090;VisuMZ[_0x2617c2(0x180)]['Sprite_Enemy_setBattler'][_0x2617c2(0x1ea)](this,_0x3941e5);if(this['_stateSprite'])this[_0x2617c2(0x203)]['setup'](_0x3941e5);},VisuMZ[_0x465090(0x180)][_0x465090(0x1db)]=Sprite_Enemy[_0x465090(0x208)][_0x465090(0x1c3)],Sprite_Enemy[_0x465090(0x208)][_0x465090(0x1c3)]=function(){const _0x17bb4f=_0x465090;VisuMZ[_0x17bb4f(0x180)]['Sprite_Enemy_update'][_0x17bb4f(0x1ea)](this),this['updateVisualStateEffects']();},VisuMZ[_0x465090(0x180)][_0x465090(0x1fe)]=Sprite_StateOverlay[_0x465090(0x208)]['loadBitmap'],Sprite_StateOverlay[_0x465090(0x208)][_0x465090(0x192)]=function(){const _0x2508ae=_0x465090;VisuMZ['VisualStateEffects'][_0x2508ae(0x1fe)][_0x2508ae(0x1ea)](this),this[_0x2508ae(0x19a)]=_0x2508ae(0x223);},VisuMZ[_0x465090(0x180)][_0x465090(0x1c2)]=Sprite_StateOverlay[_0x465090(0x208)][_0x465090(0x172)],Sprite_StateOverlay[_0x465090(0x208)]['updateFrame']=function(){const _0x50bb72=_0x465090;if(typeof this[_0x50bb72(0x205)]==='string')return this['updateCustomOverlayFrame']();else{if(this[_0x50bb72(0x19a)]!==_0x50bb72(0x223)){this[_0x50bb72(0x1dd)]=!![];const _0x32a2af=ImageManager[_0x50bb72(0x141)](_0x50bb72(0x223));_0x32a2af[_0x50bb72(0x161)](this[_0x50bb72(0x195)][_0x50bb72(0x168)](this,_0x32a2af));}else this[_0x50bb72(0x19a)]===_0x50bb72(0x223)&&VisuMZ[_0x50bb72(0x180)][_0x50bb72(0x1c2)][_0x50bb72(0x1ea)](this);}},Sprite_StateOverlay[_0x465090(0x208)]['onLoadDefaultOverlayBitmap']=function(_0x5c7015){const _0x24ec9c=_0x465090;this[_0x24ec9c(0x176)]=_0x5c7015,this['_loadingCustomOverlay']=![],this[_0x24ec9c(0x19a)]=_0x24ec9c(0x223),VisuMZ[_0x24ec9c(0x180)][_0x24ec9c(0x1c2)][_0x24ec9c(0x1ea)](this);},Sprite_StateOverlay[_0x465090(0x208)][_0x465090(0x193)]=function(){const _0x5113df=_0x465090;if(!this[_0x5113df(0x1dd)]&&this[_0x5113df(0x19a)]!==this[_0x5113df(0x205)]){this[_0x5113df(0x1dd)]=!![];const _0x32c40b=ImageManager[_0x5113df(0x141)](this['_overlayIndex']);_0x32c40b[_0x5113df(0x161)](this[_0x5113df(0x1e4)][_0x5113df(0x168)](this,_0x32c40b));}if(this['_bitmapName']===this['_overlayIndex']){const _0x4c479d=0x60,_0xd65835=0x60,_0x4ae906=this[_0x5113df(0x1e3)]*_0x4c479d,_0x598c11=0x0;this[_0x5113df(0x14f)](_0x4ae906,_0x598c11,_0x4c479d,_0xd65835);}},Sprite_StateOverlay[_0x465090(0x208)][_0x465090(0x1e4)]=function(_0x1608c7){const _0x2b6a29=_0x465090;this[_0x2b6a29(0x176)]=_0x1608c7,this['_loadingCustomOverlay']=![],this[_0x2b6a29(0x19a)]=this[_0x2b6a29(0x205)],this[_0x2b6a29(0x193)]();};