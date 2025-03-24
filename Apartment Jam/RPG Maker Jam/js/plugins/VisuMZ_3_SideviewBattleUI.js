//=============================================================================
// VisuStella MZ - Sideview Battle UI
// VisuMZ_3_SideviewBattleUI.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_SideviewBattleUI = true;

var VisuMZ = VisuMZ || {};
VisuMZ.SideviewBattleUI = VisuMZ.SideviewBattleUI || {};
VisuMZ.SideviewBattleUI.version = 1.07;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.07] [SideviewBattleUI]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Sideview_Battle_UI_VisuStella_MZ
 * @base VisuMZ_0_CoreEngine
 * @base VisuMZ_1_BattleCore
 * @orderAfter VisuMZ_1_BattleCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin changes the RPG Maker MZ Battle UI for Sideview Battle Systems
 * into something more minimalistic. The menus are placed towards the player's
 * party to let the player focus their attention to the center of the screen
 * instead of to the lower ledges of the screen. The input command windows show
 * up near the inputting actor to give the player a clear understanding of who
 * is performing what action.
 * 
 * *NOTE* To use this battle layout, you will need the updated version of
 * VisuStella's Battle Core. Go into its Plugin Parameters and change the
 * Battle Layout Settings > Battle Layout Style > plugin parameter to this
 * value: "Sideview Battle UI" or "sideview_ui".
 *
 * Features include all (but not limited to) the following:
 * 
 * * This plugin changes the UI for the RPG Maker MZ Sideview Battle System.
 * * Status windows appear on the side of the screen for each actor in battle.
 * * The appearance is more compact for both the status windows and input
 *   command windows.
 * * More of the battlefield can be seen with this kind of layout.
 * * Lots of customization options to adjust the status windows.
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
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Sideview Only
 * 
 * This plugin only works for the sideview battle system. If this layout is
 * selected in the Battle Core, the battle system will automatically shift to
 * sideview regardless of the settings.
 * 
 * *NOTE* To use this battle layout, you will need the updated version of
 * VisuStella's Battle Core. Go into its Plugin Parameters and change the
 * Battle Layout Settings > Battle Layout Style > plugin parameter to this
 * value: "Sideview Battle UI" or "sideview_ui".
 *
 * ---
 * 
 * Window Properties
 * 
 * With how the battle layout works, many of the command windows used in the
 * battle system will have preset and hardcoded properties to them in order to
 * maintain a specific aesthetic. These include columns, padding, and scaling
 * types to name a few.
 * 
 * Therefore, any plugins that may alter these effects may not have any effect
 * at all provided that this plugin is in a higher tier than those modifying
 * it. This is an intended change to maintain the aesthetic and is not a bug.
 * 
 * ---
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
 * VisuMZ_2_AggroControlSystem
 * VisuMZ_2_BattleSystemBTB
 * VisuMZ_3_BoostAction
 * VisuMZ_3_StateTooltips
 * VisuMZ_4_BreakShields
 *
 * There are features provided in this plugin for the above plugins. Their UI
 * elements can be shown with this plugin's status windows.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Battler Offset Settings
 * ============================================================================
 *
 * Settings for battler sprite offsets when using the Sideview Battle UI.
 * Since there's more room on the screen, placing them lower will help adjust
 * for the player's visual comfort.
 *
 * ---
 *
 * Settings
 * 
 *   Perform Offset?:
 *   - Offsets the battler sprite positions when using Sideview Battle UI.
 * 
 *   Offset X:
 *   - How much to offset the sprite positions by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the sprite positions by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Window Settings
 * ============================================================================
 *
 * Settings for general windows when using the Sideview Battle UI. These
 * settings are made for the windows that aren't the status windows but are
 * affected by this plugin.
 *
 * ---
 *
 * Global
 * 
 *   UI Scale:
 *   - What is the scaling rate for battle windows?
 *   - Use a number between 0 and 1 for the best results.
 *
 * ---
 *
 * Help Window
 * 
 *   Fade BG Style?:
 *   - Fade the Help Window background with this UI?
 *
 * ---
 *
 * Actor Command Window
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for the actor command window with
 *     this UI?
 *
 * ---
 *
 * Party Command Window
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for the party command window with
 *     this UI?
 *
 * ---
 *
 * Item Window
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for the item window with this UI?
 * 
 *   Width:
 *   - What is the width item window with this UI?
 *   - This is the width BEFORE scaling.
 * 
 *   Offset X:
 *   - How much to offset the window X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the window Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Skill Window
 * 
 *   Max Rows:
 *   - What is the maximum number of rows for the skill window with this UI?
 * 
 *   Width:
 *   - What is the width skill window with this UI?
 *   - This is the width BEFORE scaling.
 * 
 *   Offset X:
 *   - How much to offset the window X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the window Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Status Window Settings
 * ============================================================================
 *
 * Settings for the status window when using the Sideview Battle UI. Each of
 * these plugin parameters allow you to adjust many of the various elements
 * found inside of this window.
 *
 * ---
 *
 * Dimensions
 * 
 *   Width Base:
 *   - How width is each actor's status window?
 *   - This is the width AFTER scaling.
 * 
 *   Height Base:
 *   - How tall do you want the status window to be?
 *   - 'auto' for automatic calculations.
 *   - This is the height BEFORE scaling.
 * 
 *     Height Buffer:
 *     - How much space do you want there to be vertically from window
 *       to window?
 *     - This is the height BEFORE scaling.
 * 
 *   Move Distance:
 *   - How far will the status window move when the actor is selected
 *     or active?
 * 
 *     Move Speed:
 *     - How many pixels with the status window move per frame?
 *
 * ---
 * 
 * Standard UI > BG
 * 
 *   Background Dim?:
 *   - Show the dimmed background?
 * 
 * ---
 *
 * Standard UI > Name
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Sprite?:
 *   - Use a sprite or bitmap to draw this element?
 *   - This is added for font sizes that do not work well with name sprites.
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > States
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Ignore Scale?:
 *   - Ignore scaling to show icons at their real size?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > TPB/ATB Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > HP Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > MP Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Standard UI > TP Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > Aggro Gauge
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_2_AggroControlSystem!
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > Boost Points
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_3_BoostAction!
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > Brave Points
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_2_BattleSystemBTB!
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > Break Shield
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_4_BreakShields!
 * 
 *   Ignore Scale?:
 *   - Ignore scaling to show icons at their real size?
 * 
 *   Offset X:
 *   - How much to offset the UI X position by?
 *   - Negative goes left. Positive goes right.
 * 
 *   Offset Y:
 *   - How much to offset the UI Y position by?
 *   - Negative goes up. Positive goes down.
 *
 * ---
 *
 * Compatibility UI > State Tooltips
 * 
 *   Show?:
 *   - Show this UI element?
 *   - Requires VisuMZ_3_StateTooltips!
 *
 * ---
 * 
 * JS
 * 
 *   JS: Custom UI:
 *   - JavaScript used to add custom elements to each status window.
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
 * Version 1.07: April 13, 2023
 * * Bug Fixes!
 * ** If the UI scale is over 1.0, the UI will automatically scale back any
 *    windows that extend past screen boundaries. Update made by Olivia.
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Feature!
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Status Window > Standard UI > Name > Sprite?
 * **** Use a sprite or bitmap to draw this element?
 * **** This is added for font sizes that do not work well with name sprites.
 * 
 * Version 1.06: January 20, 2023
 * * Bug Fixes!
 * ** Skill and Item Windows should no longer disappear completely when used
 *    together with the Battle Core's "Middle Layout" for skill and item
 *    windows. Instead the intended setting will be set with the Sideview UI
 *    layout as if it's "false". Fix made by Arisu.
 * * Compatibility Update!
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.05: June 9, 2022
 * * Bug Fixes!
 * ** Fixed a bug that caused some windows to not appear correctly when cancel
 *    is pressed upon certain conditions. Fix made by Olivia.
 * 
 * Version 1.04: February 10, 2022
 * * Documentation Update!
 * ** Help file updated for new features.
 * * New Features!
 * ** New Plugin Parameter added by Olivia:
 * *** Plugin Parameters > Status Window Settings > Background Dim?
 * **** Show the dimmed background?
 * 
 * Version 1.03: July 30, 2021
 * * Bug Fixes!
 * ** Plugin Parameters for adjusting row quantity should now work properly.
 *    Fix made by Olivia.
 * 
 * Version 1.02: June 18, 2021
 * * Optimization Update!
 * ** Plugin should run more optimized.
 * 
 * Version 1.01: April 23, 2021
 * * Bug Fixes!
 * ** Item window during battle should now align properly. Fix made by Olivia.
 *
 * Version 1.00 Official Release Date: May 12, 2021
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
 * @param SideviewBattleUI
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param Battler:struct
 * @text Battler Offset Settings
 * @type struct<Battler>
 * @desc Settings for battler sprite offsets when using the Sideview Battle UI.
 * @default {"Enable:eval":"true","OffsetX:num":"+0","OffsetY:num":"+128"}
 *
 * @param GeneralWindow:struct
 * @text General Window Settings
 * @type struct<GeneralWindow>
 * @desc Settings for general windows when using the Sideview Battle UI.
 * @default {"Global":"","UiScale:num":"0.80","HelpWindow":"","HelpFadeStyle:eval":"true","ActorCommandWindow":"","ActorCommandWindowMaxRows:num":"8","PartyCommandWindow":"","PartyCommandWindowMaxRows:num":"8","ItemWindow":"","ItemWindowMaxRows:num":"8","ItemWindowWidth:num":"400","ItemWindowOffsetX:num":"+16","ItemWindowOffsetY:num":"+16","SkillWindow":"","SkillWindowMaxRows:num":"8","SkillWindowWidth:num":"400","SkillWindowOffsetX:num":"+16","SkillWindowOffsetY:num":"+16"}
 *
 * @param StatusWindow:struct
 * @text Status Window Settings
 * @type struct<StatusWindow>
 * @desc Settings for the status window when using the Sideview Battle UI.
 * @default {"Dimensions":"","WidthBase:num":"200","HeightBase:str":"auto","HeightBuffer:num":"4","MoveDistance:num":"48","MoveSpeed:num":"4","Standard":"","Name":"","NameShow:eval":"true","NameOffsetX:num":"+48","NameOffsetY:num":"+0","States":"","StatesShow:eval":"true","StatesIgnoreScale:eval":"true","StatesOffsetX:num":"+20","StatesOffsetY:num":"+20","Tpb":"","TpbShow:eval":"true","TpbOffsetX:num":"+44","TpbOffsetY:num":"+0","Hp":"","HpShow:eval":"true","HpOffsetX:num":"+60","HpOffsetY:num":"+0","Mp":"","MpShow:eval":"true","MpOffsetX:num":"+68","MpOffsetY:num":"+0","Tp":"","TpShow:eval":"true","TpOffsetX:num":"+74","TpOffsetY:num":"+0","Compatibility":"","Aggro":"","AggroShow:eval":"true","AggroOffsetX:num":"+44","AggroOffsetY:num":"+0","Boost":"","BoostShow:eval":"true","BoostOffsetX:num":"+52","BoostOffsetY:num":"+2","Brave":"","BraveShow:eval":"true","BraveOffsetX:num":"+52","BraveOffsetY:num":"-6","BreakShield":"","BreakShieldShow:eval":"true","BreakShieldIgnoreScale:eval":"true","BreakShieldOffsetX:num":"+20","BreakShieldOffsetY:num":"+20","StateTooltips":"","StateTooltipsShow:eval":"true","JS":"","CustomUi:func":"\"// Declare Variables\\nconst actor = arguments[0];\\nlet x = 0;\\nlet y = 0;\\nlet width = this.innerWidth;\\nlet height = this.innerHeight;\\n\\n// Draw Custom Elements\\n// Put in code you want here used for windows classes\""}
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
 * Battler Offset Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Battler:
 *
 * @param Enable:eval
 * @text Perform Offset?
 * @type boolean
 * @on Do Offset
 * @off Don't Offset
 * @desc Offsets the battler sprite positions when using Sideview Battle UI.
 * @default true
 *
 * @param OffsetX:num
 * @text Offset X
 * @desc How much to offset the sprite positions by?
 * Negative goes left. Positive goes right.
 * @default +0
 *
 * @param OffsetY:num
 * @text Offset Y
 * @desc How much to offset the sprite positions by?
 * Negative goes up. Positive goes down.
 * @default +128
 *
 */
/* ----------------------------------------------------------------------------
 * GeneralWindow Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~GeneralWindow:
 *
 * @param Global
 *
 * @param UiScale:num
 * @text UI Scale
 * @parent Global
 * @desc What is the scaling rate for battle windows?
 * Use a number between 0 and 1 for the best results.
 * @default 0.80
 *
 * @param HelpWindow
 * @text Help Window
 *
 * @param HelpFadeStyle:eval
 * @text Fade BG Style?
 * @parent HelpWindow
 * @type boolean
 * @on Fade Background
 * @off Default Background
 * @desc Fade the Help Window background with this UI?
 * @default true
 *
 * @param ActorCommandWindow
 * @text Actor Command Window
 *
 * @param ActorCommandWindowMaxRows:num
 * @text Max Rows
 * @parent ActorCommandWindow
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for the actor command window with this UI?
 * @default 8
 *
 * @param PartyCommandWindow
 * @text Party Command Window
 *
 * @param PartyCommandWindowMaxRows:num
 * @text Max Rows
 * @parent PartyCommandWindow
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for the party command window with this UI?
 * @default 8
 *
 * @param ItemWindow
 * @text Item Window
 *
 * @param ItemWindowMaxRows:num
 * @text Max Rows
 * @parent ItemWindow
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for the item window with this UI?
 * @default 8
 *
 * @param ItemWindowWidth:num
 * @text Width
 * @parent ItemWindow
 * @type number
 * @min 1
 * @desc What is the width item window with this UI?
 * This is the width BEFORE scaling.
 * @default 400
 *
 * @param ItemWindowOffsetX:num
 * @text Offset X
 * @parent ItemWindow
 * @desc How much to offset the window X position by?
 * Negative goes left. Positive goes right.
 * @default +16
 *
 * @param ItemWindowOffsetY:num
 * @text Offset Y
 * @parent ItemWindow
 * @desc How much to offset the window Y position by?
 * Negative goes up. Positive goes down.
 * @default +16
 *
 * @param SkillWindow
 * @text Skill Window
 *
 * @param SkillWindowMaxRows:num
 * @text Max Rows
 * @parent SkillWindow
 * @type number
 * @min 1
 * @desc What is the maximum number of rows for the skill window with this UI?
 * @default 8
 *
 * @param SkillWindowWidth:num
 * @text Width
 * @parent SkillWindow
 * @type number
 * @min 1
 * @desc What is the width skill window with this UI?
 * This is the width BEFORE scaling.
 * @default 400
 *
 * @param SkillWindowOffsetX:num
 * @text Offset X
 * @parent SkillWindow
 * @desc How much to offset the window X position by?
 * Negative goes left. Positive goes right.
 * @default +16
 *
 * @param SkillWindowOffsetY:num
 * @text Offset Y
 * @parent SkillWindow
 * @desc How much to offset the window Y position by?
 * Negative goes up. Positive goes down.
 * @default +16
 *
 */
/* ----------------------------------------------------------------------------
 * Status Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~StatusWindow:
 *
 * @param Dimensions
 *
 * @param WidthBase:num
 * @text Width Base
 * @parent Dimensions
 * @type number
 * @desc How width is each actor's status window?
 * This is the width AFTER scaling.
 * @default 200
 *
 * @param HeightBase:str
 * @text Height Base
 * @parent Dimensions
 * @type number
 * @desc How tall do you want the status window to be?
 * 'auto' for automatic calculations. Value is BEFORE scaling.
 * @default auto
 *
 * @param HeightBuffer:num
 * @text Height Buffer
 * @parent HeightBase:str
 * @type number
 * @desc How much space do you want there to be vertically from window to window?
 * @default 4
 *
 * @param MoveDistance:num
 * @text Move Distance
 * @parent Dimensions
 * @type number
 * @desc How far will the status window move when
 * the actor is selected or active?
 * @default 48
 *
 * @param MoveSpeed:num
 * @text Move Speed
 * @parent MoveDistance:num
 * @type number
 * @desc How many pixels with the status window move per frame?
 * @default 4
 *
 * @param Standard
 * @text Standard UI
 *
 * @param BgShow:eval
 * @text Background Dim?
 * @parent Standard
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the dimmed background?
 * @default true
 * 
 * @param Name
 * @parent Standard
 *
 * @param NameShow:eval
 * @text Show?
 * @parent Name
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param NameSprite:eval
 * @text Sprite?
 * @parent Name
 * @type boolean
 * @on Sprite
 * @off Bitmap
 * @desc Use a sprite or bitmap to draw this element?
 * @default true
 *
 * @param NameOffsetX:num
 * @text Offset X
 * @parent Name
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +48
 *
 * @param NameOffsetY:num
 * @text Offset Y
 * @parent Name
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param States
 * @parent Standard
 *
 * @param StatesShow:eval
 * @text Show?
 * @parent States
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param StatesIgnoreScale:eval
 * @text Ignore Scale?
 * @parent States
 * @type boolean
 * @on Ignore Scaling
 * @off Use Scaling
 * @desc Ignore scaling to show icons at their real size?
 * @default true
 *
 * @param StatesOffsetX:num
 * @text Offset X
 * @parent States
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +20
 *
 * @param StatesOffsetY:num
 * @text Offset Y
 * @parent States
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +20
 * 
 * @param Tpb
 * @text TPB/ATB Gauge
 * @parent Standard
 *
 * @param TpbShow:eval
 * @text Show?
 * @parent Tpb
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param TpbOffsetX:num
 * @text Offset X
 * @parent Tpb
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +44
 *
 * @param TpbOffsetY:num
 * @text Offset Y
 * @parent Tpb
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param Hp
 * @text HP Gauge
 * @parent Standard
 *
 * @param HpShow:eval
 * @text Show?
 * @parent Hp
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param HpOffsetX:num
 * @text Offset X
 * @parent Hp
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +60
 *
 * @param HpOffsetY:num
 * @text Offset Y
 * @parent Hp
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param Mp
 * @text MP Gauge
 * @parent Standard
 *
 * @param MpShow:eval
 * @text Show?
 * @parent Mp
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param MpOffsetX:num
 * @text Offset X
 * @parent Mp
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +68
 *
 * @param MpOffsetY:num
 * @text Offset Y
 * @parent Mp
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param Tp
 * @text TP Gauge
 * @parent Standard
 *
 * @param TpShow:eval
 * @text Show?
 * @parent Tp
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * @default true
 *
 * @param TpOffsetX:num
 * @text Offset X
 * @parent Tp
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +74
 *
 * @param TpOffsetY:num
 * @text Offset Y
 * @parent Tp
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 *
 * @param Compatibility
 * @text Compatibility UI
 * 
 * @param Aggro
 * @text Aggro Gauge
 * @parent Compatibility
 * @default VisuMZ_2_AggroControlSystem
 *
 * @param AggroShow:eval
 * @text Show?
 * @parent Aggro
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_2_AggroControlSystem!
 * @default true
 *
 * @param AggroOffsetX:num
 * @text Offset X
 * @parent Aggro
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +44
 *
 * @param AggroOffsetY:num
 * @text Offset Y
 * @parent Aggro
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +0
 * 
 * @param Boost
 * @text Boost Points
 * @parent Compatibility
 * @default VisuMZ_3_BoostAction
 *
 * @param BoostShow:eval
 * @text Show?
 * @parent Boost
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_3_BoostAction!
 * @default true
 *
 * @param BoostOffsetX:num
 * @text Offset X
 * @parent Boost
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +52
 *
 * @param BoostOffsetY:num
 * @text Offset Y
 * @parent Boost
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +2
 * 
 * @param Brave
 * @text Brave Points
 * @parent Compatibility
 * @default VisuMZ_2_BattleSystemBTB
 *
 * @param BraveShow:eval
 * @text Show?
 * @parent Brave
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_2_BattleSystemBTB!
 * @default true
 *
 * @param BraveOffsetX:num
 * @text Offset X
 * @parent Brave
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +52
 *
 * @param BraveOffsetY:num
 * @text Offset Y
 * @parent Brave
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default -6
 * 
 * @param BreakShield
 * @text Break Shield
 * @parent Compatibility
 * @default VisuMZ_4_BreakShields
 *
 * @param BreakShieldShow:eval
 * @text Show?
 * @parent BreakShield
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_4_BreakShields!
 * @default true
 *
 * @param BreakShieldIgnoreScale:eval
 * @text Ignore Scale?
 * @parent BreakShield
 * @type boolean
 * @on Ignore Scaling
 * @off Use Scaling
 * @desc Ignore scaling to show icons at their real size?
 * @default true
 *
 * @param BreakShieldOffsetX:num
 * @text Offset X
 * @parent BreakShield
 * @desc How much to offset the UI X position by?
 * Negative goes left. Positive goes right.
 * @default +20
 *
 * @param BreakShieldOffsetY:num
 * @text Offset Y
 * @parent BreakShield
 * @desc How much to offset the UI Y position by?
 * Negative goes up. Positive goes down.
 * @default +20
 * 
 * @param StateTooltips
 * @text State Tooltips
 * @parent Compatibility
 * @default VisuMZ_3_StateTooltips
 *
 * @param StateTooltipsShow:eval
 * @text Show?
 * @parent StateTooltips
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show this UI element?
 * Requires VisuMZ_3_StateTooltips!
 * @default true
 *
 * @param JS
 *
 * @param CustomUi:func
 * @text JS: Custom UI
 * @parent JS
 * @type note
 * @desc JavaScript used to add custom elements to each status window.
 * @default "// Declare Variables\nconst actor = arguments[0];\nlet x = 0;\nlet y = 0;\nlet width = this.innerWidth;\nlet height = this.innerHeight;\n\n// Draw Custom Elements\n// Put in code you want here used for windows classes"
 *
 */
//=============================================================================

const _0xabf307=_0x5cf8;(function(_0x5dc565,_0x5c3e02){const _0x4b2c57=_0x5cf8,_0x498f29=_0x5dc565();while(!![]){try{const _0x42e8b5=parseInt(_0x4b2c57(0xc0))/0x1*(-parseInt(_0x4b2c57(0x15a))/0x2)+-parseInt(_0x4b2c57(0xe0))/0x3*(parseInt(_0x4b2c57(0x16f))/0x4)+-parseInt(_0x4b2c57(0x1ef))/0x5+-parseInt(_0x4b2c57(0x134))/0x6+parseInt(_0x4b2c57(0xee))/0x7*(-parseInt(_0x4b2c57(0xd7))/0x8)+-parseInt(_0x4b2c57(0x1df))/0x9+parseInt(_0x4b2c57(0x162))/0xa*(parseInt(_0x4b2c57(0x183))/0xb);if(_0x42e8b5===_0x5c3e02)break;else _0x498f29['push'](_0x498f29['shift']());}catch(_0x18d36c){_0x498f29['push'](_0x498f29['shift']());}}}(_0x2ee8,0x3be91));var label=_0xabf307(0x19d),tier=tier||0x0,dependencies=[_0xabf307(0x1c5),_0xabf307(0xfe)],pluginData=$plugins[_0xabf307(0x123)](function(_0x4d612c){return _0x4d612c['status']&&_0x4d612c['description']['includes']('['+label+']');})[0x0];function _0x2ee8(){const _0x15d42e=['_partyIndex','TPB_OFFSET_Y','_enemyWindow','Window_ActorCommand_initialize','parameters','refresh','addWindow','allowBoostAction','BG_SHOW','VisuMZ_1_BattleCore','drawActorName','isActivePosition','placeActorName','clamp','TPB_OFFSET_X','contains','sideviewUiWidth','Scene_Battle_actorWindowRect','max','HP_GAUGE_OFFSET_X','trim','fillRect','SkillWindowMaxRows','createCancelButton','colSpacing','CustomUi','adjustSideviewUiWidth','open','left','_actorCommandWindow','active','sideview_ui','refreshDimmerBitmap','isSkillItemWindowsMiddle','MP_GAUGE_OFFSET_Y','ARRAYEVAL','isWindowMaskingEnabled','activate','Window_Help_initialize','Scene_Battle_updateStatusWindowPosition','TPB_SHOWN','_additionalSprites','SIDEVIEW_BATTLE_UI_FADE_STYLE','SIDEVIEW_BATTLE_UI_BATTLER_OFFSET_Y','bitmap','ARRAYSTRUCT','filter','Window_ActorCommand_makeCommandList','WIDTH_MOVE','visible','Window_ItemList_initialize','Window_SkillList_maxCols','updateBattler','sideviewUiPositionOffsetY','setBackgroundType','toUpperCase','battleLayoutStyle','round','addChildToBack','Window_PartyCommand_makeCommandList','actorWindowRect','createStatusWindow','SIDEVIEW_BATTLE_UI_WINDOW_MAX_ROWS','2030202pbZPJh','_skillWindow','_targetX','HEIGHT_BASE','placeBreakShieldIcon','boxHeight','update','BraveShow','clampSideviewUiPlacementPosition','VisuMZ_2_AggroControlSystem','TP_GAUGE_OFFSET_Y','TpbOffsetX','push','opacity','aliveMembers','setHome','BreakShieldShow','SIDEVIEW_BATTLE_UI_MOVE_BATTLERS','Window_BattleStatus_updateRefresh','STATES_OFFSET_Y','ICON_SIZE_RATE','ItemWindowMaxRows','ConvertParams','STRUCT','sideviewUiPositionOffsetX','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','STATE_TOOLTIPS_SHOWN','BREAK_SHIELD_OFFSET_Y','TpOffsetY','BoostShow','initMembersSideviewUi','BraveOffsetY','HeightBuffer','actor%1-stateIcon','isUsingGridSystem','TpbShow','NAME_OFFSET_X','createWindowRect','4SGvLRG','updatePosition','isAdjustBoostPoints','sideviewUiTargetActor','Scene_Battle_createCancelButton','Window_ItemList_colSpacing','clampSideviewUiScaledDimensions','Scene_Base_isWindowMaskingEnabled','1345810uamhGt','makeCommandList','StateTooltipsShow','format','STR','innerRect','BattleLayout','NameOffsetX','shouldAdjustForSideviewUiLayout','GeneralWindow','_spriteset','BRAVE_OFFSET_X','isSelected','4UiEiXl','AGGRO_OFFSET_Y','show','placeTimeGauge','battleMembers','Window_SkillList_makeItemList','NAME_SPRITE','BoostOffsetY','HEIGHT_BUFFER','createContents','MOVE_SPEED','SkillWindowOffsetY','SIDEVIEW_BATTLE_UI_BATTLER_OFFSET_X','StatesOffsetY','statusWindowRect','padding','Game_System_isSideView','MP_GAUGE_SHOWN','HpOffsetX','isAdjustBravePoints','110ifCIBJ','SIDEVIEW_BATTLE_UI_SCALE','TP_GAUGE_SHOWN','BreakShieldIgnoreScale','BreakShieldOffsetY','_battler','initialize','VisuMZ_4_BreakShields','BRAVE_SHOWN','Aggro','NUM','WidthBase','create','AGGRO_OFFSET_X','dimColor1','name','updateSideviewUiFadeIn','maxBattleMembers','Window_ItemList_makeItemList','updateRefresh','ActorCommandWindowMaxRows','maxSideviewUiRows','applyInverse','drawBasicStatus','battler','gradientFillRect','SideviewBattleUI','dataSideviewUiLength','SIDEVIEW_BATTLE_UI_WINDOW_WIDTH','Scene_Battle_onActorCancel','VisuMZ_3_BoostAction','MoveSpeed','STATES_REVERSE_SCALE','BraveOffsetX','Settings','SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X','_battleField','StatesShow','BOOST_SHOWN','AggroControlSystem','Window_SkillList_colSpacing','aggroGauge','STATES_OFFSET_X','AGGRO_SHOWN','placeAggroGauge','VisuMZ_2_BattleSystemBTB','Scene_Battle_onEnemyCancel','_sideviewUiBattleStatusWindows','_subject','placeGauge','isTpb','_scene','_homeX','NameOffsetY','ItemWindowOffsetY','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','isShowAggro','HP_GAUGE_SHOWN','Scene_Battle_statusWindowRect','drawCustomJS','description','BREAK_SHIELD_REVERSE_SCALE','STATES_SHOWN','AggroShow','adjustSideviewUiHeight','BOOST_OFFSET_X','VisuMZ_0_CoreEngine','BRAVE_OFFSET_Y','updateSideviewUiPosition','worldTransform','TpbOffsetY','HpShow','isStateTooltipTouched','maxCols','boxWidth','BattleCore','scale','TpOffsetX','hide','Sprite_Battler_setHome','Enable','resize','VisuMZ_2_BattleGridSystem','return\x200','onEnemyCancel','MP_GAUGE_OFFSET_X','ARRAYJSON','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','min','actor%1-breakShieldIcon','gaugeLineHeight','map','1194993YkwjOl','ceil','StatusGauge','isShowTpbGauge','iconHeight','SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_Y','isStateTooltipEnabled','BOOST_OFFSET_Y','StatesIgnoreScale','drawActorBravePoints','TpShow','height','returnSideviewCommandWindows','_data','AggroOffsetY','BREAK_SHIELD_SHOWN','152115WMRHqg','isUsingSideviewUiLayout','currentSymbol','MpOffsetX','NameShow','isInputting','NAME_SHOWN','NameSprite','398gOLgqP','updateSideviewBattleUIPositions','gaugeHeight','makeItemList','createSideviewUiDimmerSprite','actorId','call','HpOffsetY','updateSideviewUiFadeOut','ARRAYNUM','_dimmerSprite','Window_Base_open','refreshSideviewUiBattleStatusWindows','fittingHeight','exit','_actorWindow','HP_GAUGE_OFFSET_Y','BoostOffsetX','version','BREAK_SHIELD_OFFSET_X','AggroOffsetX','_activeX','JSON','1208CDTrxT','BgShow','WIDTH_BASE','hideAdditionalSprites','Window_PartyCommand_initialize','Battler','_partyCommandWindow','_itemWindow','match','1221117NMhsyA','dimColor2','Window_ItemList_maxCols','OffsetX','width','Window_SkillList_initialize','_actor','updateRefreshSideviewUi','MoveDistance','isCTB','SkillItemMiddleLayout','MpShow','StatusWindow','skill','8855XWWMtf','TP_GAUGE_OFFSET_X','prototype','HeightBase','NAME_OFFSET_Y','_requestRefresh','parse'];_0x2ee8=function(){return _0x15d42e;};return _0x2ee8();}VisuMZ[label][_0xabf307(0x1a5)]=VisuMZ[label][_0xabf307(0x1a5)]||{},VisuMZ[_0xabf307(0x14a)]=function(_0x510b67,_0x33486c){const _0x321d6a=_0xabf307;for(const _0x600552 in _0x33486c){if(_0x600552[_0x321d6a(0xdf)](/(.*):(.*)/i)){const _0x52ce24=String(RegExp['$1']),_0x52bacf=String(RegExp['$2'])[_0x321d6a(0x12c)]()[_0x321d6a(0x109)]();let _0x3c0500,_0x4e5af9,_0x3bdef5;switch(_0x52bacf){case _0x321d6a(0x18d):_0x3c0500=_0x33486c[_0x600552]!==''?Number(_0x33486c[_0x600552]):0x0;break;case _0x321d6a(0xc9):_0x4e5af9=_0x33486c[_0x600552]!==''?JSON['parse'](_0x33486c[_0x600552]):[],_0x3c0500=_0x4e5af9['map'](_0x4ebd09=>Number(_0x4ebd09));break;case'EVAL':_0x3c0500=_0x33486c[_0x600552]!==''?eval(_0x33486c[_0x600552]):null;break;case _0x321d6a(0x118):_0x4e5af9=_0x33486c[_0x600552]!==''?JSON[_0x321d6a(0xf4)](_0x33486c[_0x600552]):[],_0x3c0500=_0x4e5af9['map'](_0x33334b=>eval(_0x33334b));break;case _0x321d6a(0xd6):_0x3c0500=_0x33486c[_0x600552]!==''?JSON[_0x321d6a(0xf4)](_0x33486c[_0x600552]):'';break;case _0x321d6a(0x1d9):_0x4e5af9=_0x33486c[_0x600552]!==''?JSON['parse'](_0x33486c[_0x600552]):[],_0x3c0500=_0x4e5af9['map'](_0x1874b1=>JSON[_0x321d6a(0xf4)](_0x1874b1));break;case'FUNC':_0x3c0500=_0x33486c[_0x600552]!==''?new Function(JSON[_0x321d6a(0xf4)](_0x33486c[_0x600552])):new Function(_0x321d6a(0x1d6));break;case'ARRAYFUNC':_0x4e5af9=_0x33486c[_0x600552]!==''?JSON[_0x321d6a(0xf4)](_0x33486c[_0x600552]):[],_0x3c0500=_0x4e5af9[_0x321d6a(0x1de)](_0x5c0c7a=>new Function(JSON[_0x321d6a(0xf4)](_0x5c0c7a)));break;case _0x321d6a(0x166):_0x3c0500=_0x33486c[_0x600552]!==''?String(_0x33486c[_0x600552]):'';break;case'ARRAYSTR':_0x4e5af9=_0x33486c[_0x600552]!==''?JSON[_0x321d6a(0xf4)](_0x33486c[_0x600552]):[],_0x3c0500=_0x4e5af9[_0x321d6a(0x1de)](_0x3c322f=>String(_0x3c322f));break;case _0x321d6a(0x14b):_0x3bdef5=_0x33486c[_0x600552]!==''?JSON[_0x321d6a(0xf4)](_0x33486c[_0x600552]):{},_0x3c0500=VisuMZ['ConvertParams']({},_0x3bdef5);break;case _0x321d6a(0x122):_0x4e5af9=_0x33486c[_0x600552]!==''?JSON[_0x321d6a(0xf4)](_0x33486c[_0x600552]):[],_0x3c0500=_0x4e5af9['map'](_0x3283aa=>VisuMZ['ConvertParams']({},JSON[_0x321d6a(0xf4)](_0x3283aa)));break;default:continue;}_0x510b67[_0x52ce24]=_0x3c0500;}}return _0x510b67;},(_0x4bc382=>{const _0x13d128=_0xabf307,_0xe03f64=_0x4bc382[_0x13d128(0x192)];for(const _0x5ef7fe of dependencies){if(!Imported[_0x5ef7fe]){alert(_0x13d128(0x14d)['format'](_0xe03f64,_0x5ef7fe)),SceneManager[_0x13d128(0xce)]();break;}}const _0x188222=_0x4bc382[_0x13d128(0x1bf)];if(_0x188222[_0x13d128(0xdf)](/\[Version[ ](.*?)\]/i)){const _0x5456ad=Number(RegExp['$1']);_0x5456ad!==VisuMZ[label][_0x13d128(0xd2)]&&(alert(_0x13d128(0x1da)[_0x13d128(0x165)](_0xe03f64,_0x5456ad)),SceneManager['exit']());}if(_0x188222['match'](/\[Tier[ ](\d+)\]/i)){const _0x939f34=Number(RegExp['$1']);_0x939f34<tier?(alert(_0x13d128(0x1ba)[_0x13d128(0x165)](_0xe03f64,_0x939f34,tier)),SceneManager[_0x13d128(0xce)]()):tier=Math[_0x13d128(0x107)](_0x939f34,tier);}VisuMZ[_0x13d128(0x14a)](VisuMZ[label][_0x13d128(0x1a5)],_0x4bc382[_0x13d128(0xf9)]);})(pluginData),BattleManager[_0xabf307(0x1f0)]=function(){const _0x1547d3=_0xabf307;return SceneManager['isSceneBattle']()&&SceneManager[_0x1547d3(0x1b6)][_0x1547d3(0x12d)]()===_0x1547d3(0x114);},VisuMZ[_0xabf307(0x19d)][_0xabf307(0x17f)]=Game_System[_0xabf307(0xf0)]['isSideView'],Game_System[_0xabf307(0xf0)]['isSideView']=function(){const _0x2b655c=_0xabf307;if(BattleManager[_0x2b655c(0x1f0)]())return!![];return VisuMZ[_0x2b655c(0x19d)][_0x2b655c(0x17f)]['call'](this);},VisuMZ[_0xabf307(0x19d)][_0xabf307(0x161)]=Scene_Base[_0xabf307(0xf0)][_0xabf307(0x119)],Scene_Base['prototype'][_0xabf307(0x119)]=function(){const _0x1435a1=_0xabf307;return BattleManager['isUsingSideviewUiLayout']()?![]:VisuMZ[_0x1435a1(0x19d)][_0x1435a1(0x161)][_0x1435a1(0xc6)](this);},VisuMZ['SideviewBattleUI'][_0xabf307(0x1bd)]=Scene_Battle[_0xabf307(0xf0)][_0xabf307(0x17d)],Scene_Battle[_0xabf307(0xf0)][_0xabf307(0x17d)]=function(){const _0x24f879=_0xabf307,_0x2035ef=VisuMZ[_0x24f879(0x19d)][_0x24f879(0x1bd)]['call'](this);return BattleManager[_0x24f879(0x1f0)]()&&(_0x2035ef['y']=Graphics['height']*0xa,_0x2035ef[_0x24f879(0x1ea)]=0x0),_0x2035ef;},VisuMZ[_0xabf307(0x19d)][_0xabf307(0x106)]=Scene_Battle[_0xabf307(0xf0)]['actorWindowRect'],Scene_Battle[_0xabf307(0xf0)][_0xabf307(0x131)]=function(){const _0x52b91f=_0xabf307,_0x5c8fd8=VisuMZ[_0x52b91f(0x19d)][_0x52b91f(0x106)][_0x52b91f(0xc6)](this);return BattleManager[_0x52b91f(0x1f0)]()&&(_0x5c8fd8['y']=Graphics[_0x52b91f(0x1ea)]*0xa,_0x5c8fd8[_0x52b91f(0x1ea)]=0x0),_0x5c8fd8;},VisuMZ[_0xabf307(0x19d)][_0xabf307(0x11c)]=Scene_Battle[_0xabf307(0xf0)]['updateStatusWindowPosition'],Scene_Battle[_0xabf307(0xf0)]['updateStatusWindowPosition']=function(){const _0x5af231=_0xabf307;VisuMZ[_0x5af231(0x19d)]['Scene_Battle_updateStatusWindowPosition'][_0x5af231(0xc6)](this),this[_0x5af231(0xc1)]();},Scene_Battle[_0xabf307(0xf0)][_0xabf307(0xc1)]=function(){const _0x32ff2f=_0xabf307;if(!BattleManager[_0x32ff2f(0xbd)]())return;if(!BattleManager[_0x32ff2f(0x1f0)]())return;this[_0x32ff2f(0xdd)][_0x32ff2f(0x113)]&&this[_0x32ff2f(0xdd)]['updateSideviewUiPosition'](),this[_0x32ff2f(0x112)]['active']&&this[_0x32ff2f(0x112)][_0x32ff2f(0x1c7)](),this['_skillWindow'][_0x32ff2f(0x113)]&&(this['_actorCommandWindow'][_0x32ff2f(0x1c7)](),this[_0x32ff2f(0x135)]['updateSideviewUiPosition']()),this[_0x32ff2f(0xde)][_0x32ff2f(0x113)]&&(this[_0x32ff2f(0x112)]['updateSideviewUiPosition'](),this[_0x32ff2f(0xde)][_0x32ff2f(0x1c7)]()),this[_0x32ff2f(0xcf)][_0x32ff2f(0x113)]&&(this[_0x32ff2f(0x112)][_0x32ff2f(0xc8)](),this[_0x32ff2f(0x135)][_0x32ff2f(0xc8)](),this['_itemWindow'][_0x32ff2f(0xc8)]()),this[_0x32ff2f(0xf7)][_0x32ff2f(0x113)]&&(this[_0x32ff2f(0x112)][_0x32ff2f(0xc8)](),this[_0x32ff2f(0x135)]['updateSideviewUiFadeOut'](),this['_itemWindow']['updateSideviewUiFadeOut']());},Scene_Battle['prototype'][_0xabf307(0x116)]=function(){const _0x5665e6=_0xabf307;if(BattleManager[_0x5665e6(0x1f0)]())return![];return VisuMZ[_0x5665e6(0x1ce)]['Settings'][_0x5665e6(0x168)][_0x5665e6(0xea)];},VisuMZ[_0xabf307(0x19d)]['Scene_Battle_createStatusWindow']=Scene_Battle[_0xabf307(0xf0)][_0xabf307(0x132)],Scene_Battle['prototype']['createStatusWindow']=function(){const _0x3eb404=_0xabf307;VisuMZ['SideviewBattleUI']['Scene_Battle_createStatusWindow'][_0x3eb404(0xc6)](this),this['createSideviewUiBattleStatusWindows']();},Scene_Battle[_0xabf307(0xf0)]['createSideviewUiBattleStatusWindows']=function(){const _0x49c830=_0xabf307;if(!BattleManager['isUsingSideviewUiLayout']())return;this['_sideviewUiBattleStatusWindows']=[];const _0x27d3ec=$gameParty[_0x49c830(0x194)]();for(let _0xe54c4f=0x0;_0xe54c4f<_0x27d3ec;_0xe54c4f++){const _0x4179d3=new Window_SideviewUiBattleStatus(_0xe54c4f);this[_0x49c830(0xfb)](_0x4179d3),this['_sideviewUiBattleStatusWindows'][_0x49c830(0x140)](_0x4179d3);}},Scene_Battle[_0xabf307(0xf0)][_0xabf307(0xcc)]=function(){const _0x2de1c6=_0xabf307;if(!this['_sideviewUiBattleStatusWindows'])return;for(const _0x76c5e8 of this[_0x2de1c6(0x1b2)]){if(!_0x76c5e8)continue;_0x76c5e8[_0x2de1c6(0xfa)]();}},VisuMZ[_0xabf307(0x19d)][_0xabf307(0x15e)]=Scene_Battle[_0xabf307(0xf0)][_0xabf307(0x10c)],Scene_Battle['prototype'][_0xabf307(0x10c)]=function(){const _0x3acfd3=_0xabf307;if(BattleManager[_0x3acfd3(0x1f0)]())return;VisuMZ[_0x3acfd3(0x19d)][_0x3acfd3(0x15e)][_0x3acfd3(0xc6)](this);},VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a0)]=Scene_Battle['prototype']['onActorCancel'],Scene_Battle[_0xabf307(0xf0)]['onActorCancel']=function(){const _0x3f30d1=_0xabf307;BattleManager['isUsingSideviewUiLayout']()?(this[_0x3f30d1(0xcf)][_0x3f30d1(0x1d1)](),this[_0x3f30d1(0x1eb)]()):VisuMZ[_0x3f30d1(0x19d)][_0x3f30d1(0x1a0)][_0x3f30d1(0xc6)](this);},VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1b1)]=Scene_Battle[_0xabf307(0xf0)][_0xabf307(0x1d7)],Scene_Battle[_0xabf307(0xf0)]['onEnemyCancel']=function(){const _0x7b2c73=_0xabf307;BattleManager[_0x7b2c73(0x1f0)]()?(this[_0x7b2c73(0xf7)][_0x7b2c73(0x1d1)](),this[_0x7b2c73(0x1eb)]()):VisuMZ[_0x7b2c73(0x19d)]['Scene_Battle_onEnemyCancel'][_0x7b2c73(0xc6)](this);},Scene_Battle[_0xabf307(0xf0)][_0xabf307(0x1eb)]=function(){const _0x1953b7=_0xabf307;this[_0x1953b7(0x112)][_0x1953b7(0x171)]();switch(this[_0x1953b7(0x112)][_0x1953b7(0x1f1)]()){case _0x1953b7(0xed):this[_0x1953b7(0x135)][_0x1953b7(0x171)](),this['_skillWindow'][_0x1953b7(0x11a)]();break;case'item':this[_0x1953b7(0xde)]['show'](),this[_0x1953b7(0xde)][_0x1953b7(0x11a)]();break;}},Sprite_Battler[_0xabf307(0x145)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xdc)][_0xabf307(0x1d3)]??!![],Sprite_Battler[_0xabf307(0x17b)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xdc)][_0xabf307(0xe3)]??0x0,Sprite_Battler[_0xabf307(0x120)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xdc)]['OffsetY']??0x80,VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1d2)]=Sprite_Battler['prototype'][_0xabf307(0x143)],Sprite_Battler[_0xabf307(0xf0)][_0xabf307(0x143)]=function(_0x197fb0,_0x414ca0){const _0x1b7e4c=_0xabf307;this[_0x1b7e4c(0x16a)]()&&(_0x197fb0+=Sprite_Battler[_0x1b7e4c(0x17b)],_0x414ca0+=Sprite_Battler['SIDEVIEW_BATTLE_UI_BATTLER_OFFSET_Y']),VisuMZ['SideviewBattleUI'][_0x1b7e4c(0x1d2)][_0x1b7e4c(0xc6)](this,_0x197fb0,_0x414ca0);},Sprite_Battler[_0xabf307(0xf0)][_0xabf307(0x16a)]=function(){const _0x3c5f1d=_0xabf307;if(!BattleManager[_0x3c5f1d(0x1f0)]())return![];if(Imported[_0x3c5f1d(0x1d5)]&&BattleManager[_0x3c5f1d(0x156)]())return![];return Sprite_Battler[_0x3c5f1d(0x145)];},Window_Base[_0xabf307(0x184)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)]['GeneralWindow']['UiScale']??0.8,Window_Base['SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X']=0x0,Window_Base['SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_Y']=0x0,Window_Base['prototype'][_0xabf307(0x152)]=function(){const _0x269b2a=_0xabf307;if(!this['isUsingSideviewUiLayout']())return;const _0x22754d=Window_Base[_0x269b2a(0x184)];this[_0x269b2a(0x1cf)]['x']=this['scale']['y']=_0x22754d,this['clampSideviewUiScaledDimensions']();},Window_Base[_0xabf307(0xf0)]['isUsingSideviewUiLayout']=function(){const _0x4eba06=_0xabf307;return BattleManager[_0x4eba06(0x1f0)]();},Window_Base[_0xabf307(0xf0)]['clampSideviewUiPlacementPosition']=function(){const _0x5d1bfc=_0xabf307;if(!this[_0x5d1bfc(0x1f0)]())return;const _0x2b87ba=this[_0x5d1bfc(0x1cf)]['x'],_0x1b1396=-(Math['floor'](Graphics['width']-Graphics[_0x5d1bfc(0x1cd)])/0x2),_0xe15c79=_0x1b1396+Graphics[_0x5d1bfc(0xe4)]-Math['ceil'](this[_0x5d1bfc(0xe4)]*_0x2b87ba),_0x18b47b=-(Math['floor'](Graphics[_0x5d1bfc(0x1ea)]-Graphics['boxHeight'])/0x2),_0x8cfd31=_0x18b47b+Graphics[_0x5d1bfc(0x1ea)]-Math[_0x5d1bfc(0x1e0)](this[_0x5d1bfc(0x1ea)]*_0x2b87ba);this['x']=this['x'][_0x5d1bfc(0x102)](_0x1b1396,_0xe15c79),this['y']=this['y'][_0x5d1bfc(0x102)](_0x18b47b,_0x8cfd31);},Window_Base[_0xabf307(0xf0)][_0xabf307(0x160)]=function(){const _0x1c73c6=_0xabf307;let _0x250735=![];this[_0x1c73c6(0xe4)]*this[_0x1c73c6(0x1cf)]['x']>Graphics[_0x1c73c6(0x1cd)]&&(this[_0x1c73c6(0xe4)]=Graphics[_0x1c73c6(0x1cd)]/this[_0x1c73c6(0x1cf)]['x'],_0x250735=!![]),this[_0x1c73c6(0x1ea)]*this[_0x1c73c6(0x1cf)]['y']>Graphics[_0x1c73c6(0x139)]&&(this[_0x1c73c6(0x1ea)]=Graphics[_0x1c73c6(0x139)]/this[_0x1c73c6(0x1cf)]['y'],_0x250735=!![]),_0x250735&&this[_0x1c73c6(0x178)]();},Window_Base[_0xabf307(0xf0)][_0xabf307(0x15d)]=function(){const _0x5bcae3=_0xabf307;return BattleManager['_currentActor']||$gameParty[_0x5bcae3(0x142)]()[0x0];},Window_Base[_0xabf307(0xf0)]['updateSideviewUiPosition']=function(){const _0x1f3c09=_0xabf307;if(!this[_0x1f3c09(0x1f0)]())return;const _0x2a6ed3=this['sideviewUiTargetActor']();if(!_0x2a6ed3)return;const _0x349685=_0x2a6ed3[_0x1f3c09(0x19b)]();this['x']=_0x349685['x']+Math[_0x1f3c09(0x12e)](_0x349685[_0x1f3c09(0xe4)]/0x2),this['x']-=Math[_0x1f3c09(0x12e)]((Graphics[_0x1f3c09(0xe4)]-Graphics[_0x1f3c09(0x1cd)])/0x2),this['x']+=SceneManager['_scene']['_spriteset'][_0x1f3c09(0x1a7)]['x'],this['x']+=this['sideviewUiPositionOffsetX'](),this['y']=_0x349685['y']-_0x349685[_0x1f3c09(0x1ea)],this['y']-=Math['round']((Graphics[_0x1f3c09(0x1ea)]-Graphics[_0x1f3c09(0x139)])/0x2),this['y']+=SceneManager[_0x1f3c09(0x1b6)][_0x1f3c09(0x16c)][_0x1f3c09(0x1a7)]['y'],this['y']+=this[_0x1f3c09(0x12a)](),this[_0x1f3c09(0x13c)](),this[_0x1f3c09(0x193)]();},Window_Base[_0xabf307(0xf0)]['sideviewUiPositionOffsetX']=function(){const _0x5126dd=_0xabf307;return Window_Base[_0x5126dd(0x1a6)];},Window_Base[_0xabf307(0xf0)]['sideviewUiPositionOffsetY']=function(){const _0xafde8a=_0xabf307;return Window_Base[_0xafde8a(0x1e4)];},Window_Base[_0xabf307(0xf0)][_0xabf307(0x10f)]=function(){const _0x5ca885=_0xabf307;if(!this['isUsingSideviewUiLayout']())return;const _0x494e73=this[_0x5ca885(0xe4)];this[_0x5ca885(0xe4)]=this[_0x5ca885(0x105)](),_0x494e73!==this['width']&&this[_0x5ca885(0x178)]();},Window_Base[_0xabf307(0xf0)][_0xabf307(0x105)]=function(){const _0x5ba4d8=_0xabf307;return VisuMZ[_0x5ba4d8(0x1ce)][_0x5ba4d8(0x1a5)][_0x5ba4d8(0x168)]['CommandWidth']||0xc0;},Window_Base[_0xabf307(0xf0)][_0xabf307(0x1c3)]=function(){const _0x56bf56=_0xabf307;if(!this[_0x56bf56(0x1f0)]())return;const _0x447b29=this[_0x56bf56(0x1ea)],_0x171ed2=this[_0x56bf56(0x19e)](),_0x418a69=this[_0x56bf56(0xcd)](_0x171ed2),_0x3f9ed0=this[_0x56bf56(0xcd)](this[_0x56bf56(0x198)]());this['height']=Math['min'](_0x418a69,_0x3f9ed0),this['clampSideviewUiScaledDimensions'](),_0x447b29!==this[_0x56bf56(0x1ea)]&&this['createContents']();},Window_Base[_0xabf307(0xf0)][_0xabf307(0x19e)]=function(){const _0x5c789a=_0xabf307;if(this[_0x5c789a(0x1ec)])return this['_data']['length'];if(this['_list'])return this['_list']['length'];return 0x4;},Window_Base[_0xabf307(0xf0)]['maxSideviewUiRows']=function(){return 0x8;},Window_Base['prototype'][_0xabf307(0x193)]=function(){const _0x464afb=_0xabf307;if(this['activate']&&!this['active'])return;this[_0x464afb(0x126)]=!![];},Window_Base['prototype'][_0xabf307(0xc8)]=function(){const _0xae55cd=_0xabf307;this[_0xae55cd(0x126)]=![];},VisuMZ[_0xabf307(0x19d)]['Window_Base_show']=Window_Base[_0xabf307(0xf0)][_0xabf307(0x171)],Window_Base['prototype'][_0xabf307(0x171)]=function(){const _0x39516b=_0xabf307;this[_0x39516b(0x13c)](),VisuMZ[_0x39516b(0x19d)]['Window_Base_show'][_0x39516b(0xc6)](this);},VisuMZ[_0xabf307(0x19d)]['Window_Base_open']=Window_Base[_0xabf307(0xf0)][_0xabf307(0x110)],Window_Base[_0xabf307(0xf0)]['open']=function(){const _0x25892b=_0xabf307;this[_0x25892b(0x13c)](),VisuMZ[_0x25892b(0x19d)][_0x25892b(0xcb)][_0x25892b(0xc6)](this);},Window_Help[_0xabf307(0x11f)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0x16b)]['HelpFadeStyle']??!![],VisuMZ['SideviewBattleUI']['Window_Help_initialize']=Window_Help[_0xabf307(0xf0)][_0xabf307(0x189)],Window_Help[_0xabf307(0xf0)][_0xabf307(0x189)]=function(_0x1fcb6f){const _0x3eebc4=_0xabf307;VisuMZ[_0x3eebc4(0x19d)][_0x3eebc4(0x11b)][_0x3eebc4(0xc6)](this,_0x1fcb6f),this[_0x3eebc4(0xc4)]();},Window_Help[_0xabf307(0xf0)]['createSideviewUiDimmerSprite']=function(){const _0x58f17c=_0xabf307;if(!this[_0x58f17c(0x1f0)]())return;if(!Window_Help['SIDEVIEW_BATTLE_UI_FADE_STYLE'])return;this[_0x58f17c(0x141)]=0x0;!this['_dimmerSprite']&&(this[_0x58f17c(0xca)]=new Sprite(),this[_0x58f17c(0x12f)](this[_0x58f17c(0xca)]));const _0x57bd94=this[_0x58f17c(0xe4)]-Window_SideviewUiBattleStatus[_0x58f17c(0xd9)],_0x454dce=this['lineHeight']()*0x2;this[_0x58f17c(0xca)][_0x58f17c(0x121)]=new Bitmap(_0x57bd94,_0x454dce),this[_0x58f17c(0xca)]['x']=-0x4,this[_0x58f17c(0xca)]['y']=this[_0x58f17c(0x17e)];const _0x415fac=this['_dimmerSprite'][_0x58f17c(0x121)],_0x2235cb=ColorManager[_0x58f17c(0x191)](),_0x4bc1be=ColorManager['dimColor2']();_0x415fac['fillRect'](0x0,0x0,Math['round'](_0x57bd94/0x2),_0x454dce,_0x2235cb),_0x415fac[_0x58f17c(0x19c)](Math[_0x58f17c(0x12e)](_0x57bd94/0x2),0x0,Math[_0x58f17c(0x12e)](_0x57bd94/0x2),_0x454dce,_0x2235cb,_0x4bc1be);},Window_ItemList[_0xabf307(0x133)]=VisuMZ['SideviewBattleUI'][_0xabf307(0x1a5)][_0xabf307(0x16b)][_0xabf307(0x149)]??0x8,Window_ItemList[_0xabf307(0x19f)]=VisuMZ['SideviewBattleUI']['Settings'][_0xabf307(0x16b)]['ItemWindowWidth']??0x190,Window_ItemList[_0xabf307(0x1a6)]=VisuMZ[_0xabf307(0x19d)]['Settings'][_0xabf307(0x16b)]['ItemWindowOffsetX']??0x10,Window_ItemList[_0xabf307(0x1e4)]=VisuMZ['SideviewBattleUI']['Settings']['GeneralWindow'][_0xabf307(0x1b9)]??0x10,VisuMZ[_0xabf307(0x19d)][_0xabf307(0x127)]=Window_ItemList['prototype'][_0xabf307(0x189)],Window_ItemList[_0xabf307(0xf0)][_0xabf307(0x189)]=function(_0x3f126b){const _0x14cfc2=_0xabf307;VisuMZ['SideviewBattleUI'][_0x14cfc2(0x127)][_0x14cfc2(0xc6)](this,_0x3f126b),this[_0x14cfc2(0x152)]();},VisuMZ['SideviewBattleUI'][_0xabf307(0xe2)]=Window_ItemList[_0xabf307(0xf0)][_0xabf307(0x1cc)],Window_ItemList[_0xabf307(0xf0)]['maxCols']=function(){const _0x39e299=_0xabf307;return this[_0x39e299(0x1f0)]()?0x1:VisuMZ[_0x39e299(0x19d)][_0x39e299(0xe2)][_0x39e299(0xc6)](this);},VisuMZ[_0xabf307(0x19d)][_0xabf307(0x15f)]=Window_ItemList[_0xabf307(0xf0)]['colSpacing'],Window_ItemList[_0xabf307(0xf0)][_0xabf307(0x10d)]=function(){const _0x5b2835=_0xabf307;return this[_0x5b2835(0x1f0)]()?0x0:VisuMZ[_0x5b2835(0x19d)][_0x5b2835(0x15f)][_0x5b2835(0xc6)](this);},VisuMZ[_0xabf307(0x19d)][_0xabf307(0x195)]=Window_ItemList[_0xabf307(0xf0)]['makeItemList'],Window_ItemList[_0xabf307(0xf0)][_0xabf307(0xc3)]=function(){const _0x39e51c=_0xabf307;VisuMZ['SideviewBattleUI']['Window_ItemList_makeItemList']['call'](this),this[_0x39e51c(0x10f)](),this[_0x39e51c(0x1c3)](),this['updateSideviewUiPosition']();},Window_ItemList[_0xabf307(0xf0)][_0xabf307(0x15d)]=function(){const _0x2962ef=_0xabf307;return this[_0x2962ef(0xe6)]||Window_Base[_0x2962ef(0xf0)][_0x2962ef(0x15d)]['call'](this);},Window_ItemList[_0xabf307(0xf0)][_0xabf307(0x105)]=function(){const _0x479db8=_0xabf307;return Window_ItemList[_0x479db8(0x19f)]||0xc0;},Window_ItemList[_0xabf307(0xf0)][_0xabf307(0x14c)]=function(){const _0x2957b6=_0xabf307;let _0x15e4cc=Window_Selectable[_0x2957b6(0xf0)][_0x2957b6(0x14c)][_0x2957b6(0xc6)](this);return _0x15e4cc+Window_ItemList[_0x2957b6(0x1a6)];},Window_ItemList[_0xabf307(0xf0)][_0xabf307(0x12a)]=function(){const _0x29b57a=_0xabf307;let _0x3ff6d3=Window_Selectable[_0x29b57a(0xf0)][_0x29b57a(0x12a)][_0x29b57a(0xc6)](this);return _0x3ff6d3+Window_ItemList[_0x29b57a(0x1e4)];},Window_SkillList[_0xabf307(0x133)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0x16b)][_0xabf307(0x10b)]??0x8,Window_SkillList[_0xabf307(0x19f)]=VisuMZ[_0xabf307(0x19d)]['Settings'][_0xabf307(0x16b)]['SkillWindowWidth']??0x190,Window_SkillList[_0xabf307(0x1a6)]=VisuMZ[_0xabf307(0x19d)]['Settings'][_0xabf307(0x16b)]['SkillWindowOffsetX']??0x10,Window_SkillList[_0xabf307(0x1e4)]=VisuMZ['SideviewBattleUI'][_0xabf307(0x1a5)][_0xabf307(0x16b)][_0xabf307(0x17a)]??0x10,VisuMZ['SideviewBattleUI'][_0xabf307(0xe5)]=Window_SkillList[_0xabf307(0xf0)][_0xabf307(0x189)],Window_SkillList['prototype'][_0xabf307(0x189)]=function(_0x3c05b1){const _0x455b7a=_0xabf307;VisuMZ[_0x455b7a(0x19d)][_0x455b7a(0xe5)][_0x455b7a(0xc6)](this,_0x3c05b1),this[_0x455b7a(0x152)]();},VisuMZ[_0xabf307(0x19d)][_0xabf307(0x128)]=Window_SkillList[_0xabf307(0xf0)][_0xabf307(0x1cc)],Window_SkillList[_0xabf307(0xf0)][_0xabf307(0x1cc)]=function(){const _0x1f85a8=_0xabf307;return this[_0x1f85a8(0x1f0)]()?0x1:VisuMZ[_0x1f85a8(0x19d)][_0x1f85a8(0x128)][_0x1f85a8(0xc6)](this);},VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1ab)]=Window_SkillList[_0xabf307(0xf0)][_0xabf307(0x10d)],Window_SkillList[_0xabf307(0xf0)][_0xabf307(0x10d)]=function(){const _0xc85da5=_0xabf307;return this[_0xc85da5(0x1f0)]()?0x0:VisuMZ[_0xc85da5(0x19d)][_0xc85da5(0x1ab)][_0xc85da5(0xc6)](this);},VisuMZ[_0xabf307(0x19d)][_0xabf307(0x174)]=Window_SkillList[_0xabf307(0xf0)][_0xabf307(0xc3)],Window_SkillList[_0xabf307(0xf0)][_0xabf307(0xc3)]=function(){const _0x1e1606=_0xabf307;VisuMZ[_0x1e1606(0x19d)][_0x1e1606(0x174)][_0x1e1606(0xc6)](this),this[_0x1e1606(0x10f)](),this[_0x1e1606(0x1c3)](),this['updateSideviewUiPosition']();},Window_SkillList[_0xabf307(0xf0)][_0xabf307(0x15d)]=function(){const _0x4ffc6a=_0xabf307;return this[_0x4ffc6a(0xe6)]||Window_Base['prototype'][_0x4ffc6a(0x15d)][_0x4ffc6a(0xc6)](this);},Window_SkillList[_0xabf307(0xf0)][_0xabf307(0x105)]=function(){return Window_SkillList['SIDEVIEW_BATTLE_UI_WINDOW_WIDTH']||0xc0;},Window_SkillList['prototype'][_0xabf307(0x14c)]=function(){const _0x302af2=_0xabf307;let _0x277bb4=Window_Selectable['prototype'][_0x302af2(0x14c)][_0x302af2(0xc6)](this);return _0x277bb4+Window_SkillList['SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_X'];},Window_SkillList[_0xabf307(0xf0)]['sideviewUiPositionOffsetY']=function(){const _0x3c74d9=_0xabf307;let _0x2d320f=Window_Selectable['prototype'][_0x3c74d9(0x12a)][_0x3c74d9(0xc6)](this);return _0x2d320f+Window_SkillList['SIDEVIEW_BATTLE_UI_BATTLER_WINDOW_OFFSET_Y'];},Window_BattleSkill['prototype'][_0xabf307(0x198)]=function(){const _0x6754c7=_0xabf307;return Window_SkillList[_0x6754c7(0x133)];},Window_BattleItem[_0xabf307(0xf0)][_0xabf307(0x198)]=function(){const _0x3491a8=_0xabf307;return Window_ItemList[_0x3491a8(0x133)];},Window_PartyCommand[_0xabf307(0x133)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0x16b)]['PartyCommandWindowMaxRows']??0x8,VisuMZ[_0xabf307(0x19d)][_0xabf307(0xdb)]=Window_PartyCommand['prototype'][_0xabf307(0x189)],Window_PartyCommand['prototype'][_0xabf307(0x189)]=function(_0x4b90b5){const _0x4a9d48=_0xabf307;VisuMZ[_0x4a9d48(0x19d)][_0x4a9d48(0xdb)][_0x4a9d48(0xc6)](this,_0x4b90b5),this['initMembersSideviewUi']();},VisuMZ[_0xabf307(0x19d)][_0xabf307(0x130)]=Window_PartyCommand[_0xabf307(0xf0)]['makeCommandList'],Window_PartyCommand[_0xabf307(0xf0)]['makeCommandList']=function(){const _0x14cce2=_0xabf307;VisuMZ[_0x14cce2(0x19d)][_0x14cce2(0x130)]['call'](this),this[_0x14cce2(0x10f)](),this[_0x14cce2(0x1c3)]();},Window_PartyCommand['prototype']['sideviewUiTargetActor']=function(){const _0x8cb058=_0xabf307;return $gameParty[_0x8cb058(0x142)]()[0x0];},Window_PartyCommand[_0xabf307(0xf0)][_0xabf307(0x198)]=function(){const _0x26fe82=_0xabf307;return Window_PartyCommand[_0x26fe82(0x133)];},Window_ActorCommand[_0xabf307(0x133)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0x16b)][_0xabf307(0x197)]??0x8,VisuMZ['SideviewBattleUI'][_0xabf307(0xf8)]=Window_ActorCommand['prototype'][_0xabf307(0x189)],Window_ActorCommand[_0xabf307(0xf0)][_0xabf307(0x189)]=function(_0x1de935){const _0x1df97b=_0xabf307;VisuMZ[_0x1df97b(0x19d)][_0x1df97b(0xf8)]['call'](this,_0x1de935),this[_0x1df97b(0x152)]();},VisuMZ[_0xabf307(0x19d)][_0xabf307(0x124)]=Window_ActorCommand[_0xabf307(0xf0)]['makeCommandList'],Window_ActorCommand['prototype'][_0xabf307(0x163)]=function(){const _0x141e45=_0xabf307;VisuMZ[_0x141e45(0x19d)][_0x141e45(0x124)][_0x141e45(0xc6)](this),this['adjustSideviewUiWidth'](),this[_0x141e45(0x1c3)](),this[_0x141e45(0x1c7)]();},Window_ActorCommand[_0xabf307(0xf0)][_0xabf307(0x15d)]=function(){const _0x29c4a3=_0xabf307;return this['_actor']||Window_Base['prototype'][_0x29c4a3(0x15d)][_0x29c4a3(0xc6)](this);},Window_ActorCommand[_0xabf307(0xf0)][_0xabf307(0x198)]=function(){const _0x253aa2=_0xabf307;return Window_ActorCommand[_0x253aa2(0x133)];},VisuMZ[_0xabf307(0x19d)][_0xabf307(0x146)]=Window_BattleStatus['prototype']['updateRefresh'],Window_BattleStatus[_0xabf307(0xf0)][_0xabf307(0x196)]=function(){const _0x57b146=_0xabf307;this['isUsingSideviewUiLayout']()?this[_0x57b146(0xe7)]():VisuMZ['SideviewBattleUI']['Window_BattleStatus_updateRefresh']['call'](this);},Window_BattleStatus[_0xabf307(0xf0)][_0xabf307(0xe7)]=function(){const _0x25eff1=_0xabf307;if($gameTemp['isBattleRefreshRequested']())this[_0x25eff1(0xf3)]=![],$gameTemp['clearBattleRefreshRequest'](),SceneManager[_0x25eff1(0x1b6)][_0x25eff1(0xcc)]();else this[_0x25eff1(0xf3)]&&(this[_0x25eff1(0xf3)]=![],SceneManager[_0x25eff1(0x1b6)]['refreshSideviewUiBattleStatusWindows']());};function _0x5cf8(_0x275c35,_0x3fd9a9){const _0x2ee8b1=_0x2ee8();return _0x5cf8=function(_0x5cf804,_0x2d320c){_0x5cf804=_0x5cf804-0xbc;let _0x5e7b3e=_0x2ee8b1[_0x5cf804];return _0x5e7b3e;},_0x5cf8(_0x275c35,_0x3fd9a9);}function Window_SideviewUiBattleStatus(){this['initialize'](...arguments);}Window_SideviewUiBattleStatus[_0xabf307(0xf0)]=Object[_0xabf307(0x18f)](Window_StatusBase[_0xabf307(0xf0)]),Window_SideviewUiBattleStatus[_0xabf307(0xf0)]['constructor']=Window_SideviewUiBattleStatus,Window_SideviewUiBattleStatus['WIDTH_BASE']=VisuMZ[_0xabf307(0x19d)]['Settings'][_0xabf307(0xec)][_0xabf307(0x18e)]??0xc8,Window_SideviewUiBattleStatus[_0xabf307(0x137)]=VisuMZ[_0xabf307(0x19d)]['Settings'][_0xabf307(0xec)][_0xabf307(0xf1)]??'auto',Window_SideviewUiBattleStatus[_0xabf307(0x177)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)]['StatusWindow'][_0xabf307(0x154)]??0x4,Window_SideviewUiBattleStatus[_0xabf307(0x125)]=VisuMZ['SideviewBattleUI'][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0xe8)]??0x30,Window_SideviewUiBattleStatus[_0xabf307(0x179)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)]['StatusWindow'][_0xabf307(0x1a2)]??0x4,Window_SideviewUiBattleStatus[_0xabf307(0xfd)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0xd8)]??!![],Window_SideviewUiBattleStatus[_0xabf307(0xbe)]=VisuMZ['SideviewBattleUI']['Settings'][_0xabf307(0xec)][_0xabf307(0xbc)]??!![],Window_SideviewUiBattleStatus[_0xabf307(0x175)]=VisuMZ['SideviewBattleUI'][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0xbf)]??!![],Window_SideviewUiBattleStatus[_0xabf307(0x158)]=VisuMZ['SideviewBattleUI'][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x169)]??0x30,Window_SideviewUiBattleStatus['NAME_OFFSET_Y']=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x1b8)]??0x0,Window_SideviewUiBattleStatus[_0xabf307(0x1c1)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x1a8)]??!![],Window_SideviewUiBattleStatus[_0xabf307(0x1a3)]=VisuMZ[_0xabf307(0x19d)]['Settings'][_0xabf307(0xec)][_0xabf307(0x1e7)]??!![],Window_SideviewUiBattleStatus[_0xabf307(0x1ad)]=VisuMZ['SideviewBattleUI'][_0xabf307(0x1a5)][_0xabf307(0xec)]['StatesOffsetX']??0x14,Window_SideviewUiBattleStatus[_0xabf307(0x147)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x17c)]??0x14,Window_SideviewUiBattleStatus[_0xabf307(0x11d)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)]['StatusWindow'][_0xabf307(0x157)]??!![],Window_SideviewUiBattleStatus[_0xabf307(0x103)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x13f)]??0x2c,Window_SideviewUiBattleStatus[_0xabf307(0xf6)]=VisuMZ['SideviewBattleUI'][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x1c9)]??0x0,Window_SideviewUiBattleStatus[_0xabf307(0x1bc)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x1ca)]??!![],Window_SideviewUiBattleStatus[_0xabf307(0x108)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x181)]??0x3c,Window_SideviewUiBattleStatus[_0xabf307(0xd0)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0xc7)]??0x0,Window_SideviewUiBattleStatus[_0xabf307(0x180)]=VisuMZ[_0xabf307(0x19d)]['Settings'][_0xabf307(0xec)][_0xabf307(0xeb)]??!![],Window_SideviewUiBattleStatus[_0xabf307(0x1d8)]=VisuMZ[_0xabf307(0x19d)]['Settings'][_0xabf307(0xec)][_0xabf307(0x1f2)]??0x44,Window_SideviewUiBattleStatus[_0xabf307(0x117)]=VisuMZ[_0xabf307(0x19d)]['Settings']['StatusWindow']['MpOffsetY']??0x0,Window_SideviewUiBattleStatus['TP_GAUGE_SHOWN']=VisuMZ[_0xabf307(0x19d)]['Settings']['StatusWindow'][_0xabf307(0x1e9)]??!![],Window_SideviewUiBattleStatus['TP_GAUGE_OFFSET_X']=VisuMZ['SideviewBattleUI']['Settings']['StatusWindow'][_0xabf307(0x1d0)]??0x4a,Window_SideviewUiBattleStatus[_0xabf307(0x13e)]=VisuMZ['SideviewBattleUI'][_0xabf307(0x1a5)]['StatusWindow'][_0xabf307(0x150)]??0x0,Window_SideviewUiBattleStatus['AGGRO_SHOWN']=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x1c2)]??!![],Window_SideviewUiBattleStatus['AGGRO_OFFSET_X']=VisuMZ['SideviewBattleUI']['Settings'][_0xabf307(0xec)][_0xabf307(0xd4)]??0x2c,Window_SideviewUiBattleStatus[_0xabf307(0x170)]=VisuMZ[_0xabf307(0x19d)]['Settings']['StatusWindow'][_0xabf307(0x1ed)]??0x0,Window_SideviewUiBattleStatus[_0xabf307(0x1a9)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x151)]??!![],Window_SideviewUiBattleStatus[_0xabf307(0x1c4)]=VisuMZ['SideviewBattleUI'][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0xd1)]??0x34,Window_SideviewUiBattleStatus[_0xabf307(0x1e6)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x176)]??0x2,Window_SideviewUiBattleStatus[_0xabf307(0x18b)]=VisuMZ[_0xabf307(0x19d)]['Settings'][_0xabf307(0xec)][_0xabf307(0x13b)]??!![],Window_SideviewUiBattleStatus[_0xabf307(0x16d)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x1a4)]??0x34,Window_SideviewUiBattleStatus[_0xabf307(0x1c6)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x153)]??-0x6,Window_SideviewUiBattleStatus[_0xabf307(0x1ee)]=VisuMZ['SideviewBattleUI'][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x144)]??!![],Window_SideviewUiBattleStatus[_0xabf307(0x1c0)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x186)]??!![],Window_SideviewUiBattleStatus[_0xabf307(0xd3)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)]['BreakShieldOffsetX']??0x14,Window_SideviewUiBattleStatus['BREAK_SHIELD_OFFSET_Y']=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x187)]??0x14,Window_SideviewUiBattleStatus[_0xabf307(0x14e)]=VisuMZ[_0xabf307(0x19d)][_0xabf307(0x1a5)][_0xabf307(0xec)][_0xabf307(0x164)]??!![],Window_SideviewUiBattleStatus[_0xabf307(0xf0)]['initialize']=function(_0xd26d42){const _0x9a9e86=_0xabf307;this[_0x9a9e86(0xf5)]=_0xd26d42;const _0x415f87=this[_0x9a9e86(0x159)]();Window_StatusBase[_0x9a9e86(0xf0)][_0x9a9e86(0x189)][_0x9a9e86(0xc6)](this,_0x415f87),this[_0x9a9e86(0x152)](),this['setBackgroundType'](0x2);},Window_SideviewUiBattleStatus[_0xabf307(0xf0)][_0xabf307(0x159)]=function(){const _0x474b73=_0xabf307,_0x2fe751=Window_Base[_0x474b73(0x184)];let _0x4f76c2=Window_SideviewUiBattleStatus[_0x474b73(0xd9)],_0x99c93b=Graphics[_0x474b73(0x1cd)]-_0x4f76c2;_0x99c93b+=Math['ceil']((Graphics[_0x474b73(0xe4)]-Graphics[_0x474b73(0x1cd)])/0x2),_0x4f76c2/=_0x2fe751,_0x4f76c2=Math['ceil'](_0x4f76c2),_0x4f76c2+=Math[_0x474b73(0x1e0)](Window_SideviewUiBattleStatus[_0x474b73(0x125)]*0x4/_0x2fe751);let _0x5eefd8=Window_SideviewUiBattleStatus['HEIGHT_BASE'];_0x5eefd8==='auto'?(_0x5eefd8=Window_SideviewUiBattleStatus[_0x474b73(0x177)]*0x2,_0x5eefd8+=this[_0x474b73(0x1dd)]()*this['autoRowCount'](),_0x5eefd8=Math['ceil'](_0x5eefd8*_0x2fe751),_0x5eefd8/=_0x2fe751):_0x5eefd8=eval(_0x5eefd8)||0x0;let _0x2fdcda=Math[_0x474b73(0x1e0)](_0x5eefd8*_0x2fe751)*this[_0x474b73(0xf5)];return _0x2fdcda-=Math[_0x474b73(0x1e0)]((Graphics[_0x474b73(0x1ea)]-Graphics[_0x474b73(0x139)])/0x2),this[_0x474b73(0x1b7)]=_0x99c93b,this[_0x474b73(0xd5)]=this[_0x474b73(0x1b7)]-Math[_0x474b73(0x1e0)](Window_SideviewUiBattleStatus[_0x474b73(0x125)]/_0x2fe751),this[_0x474b73(0x136)]=this['_homeX'],new Rectangle(_0x99c93b,_0x2fdcda,_0x4f76c2,_0x5eefd8);},Window_SideviewUiBattleStatus[_0xabf307(0xf0)]['autoRowCount']=function(){const _0x532db9=_0xabf307;let _0x12f25e=0x0;if(Window_SideviewUiBattleStatus[_0x532db9(0xbe)])_0x12f25e+=0x1;if(Window_SideviewUiBattleStatus[_0x532db9(0x1bc)])_0x12f25e+=0x1;if(Window_SideviewUiBattleStatus[_0x532db9(0x180)])_0x12f25e+=0x1;if(Window_SideviewUiBattleStatus[_0x532db9(0x185)])_0x12f25e+=0x1;if(this['isAdjustBoostPoints']())_0x12f25e+=0x1;if(this[_0x532db9(0x182)]())_0x12f25e+=0x1;return _0x12f25e||0x1;},Window_SideviewUiBattleStatus['prototype']['updatePadding']=function(){const _0x4abd15=_0xabf307;this[_0x4abd15(0x17e)]=0x0;},Window_SideviewUiBattleStatus[_0xabf307(0xf0)][_0xabf307(0x115)]=function(){const _0x3081f2=_0xabf307;if(!this[_0x3081f2(0xca)])return;if(!Window_SideviewUiBattleStatus[_0x3081f2(0xfd)])return;const _0x42448d=this[_0x3081f2(0xca)]['bitmap'];var _0xdbc3ef=ColorManager['dimColor1'](),_0x3850a2=ColorManager[_0x3081f2(0xe1)](),_0x3662d5=Math[_0x3081f2(0x1e0)](this[_0x3081f2(0xe4)]/0x4),_0x28deed=this[_0x3081f2(0xe4)]-_0x3662d5,_0x3d4f59=this[_0x3081f2(0x1ea)];_0x42448d[_0x3081f2(0x1d4)](this['width'],_0x3d4f59),_0x42448d[_0x3081f2(0x19c)](0x0,0x0,_0x3662d5,_0x3d4f59,_0x3850a2,_0xdbc3ef),_0x42448d[_0x3081f2(0x10a)](_0x3662d5,0x0,_0x28deed,_0x3d4f59,_0xdbc3ef),this[_0x3081f2(0xca)]['setFrame'](0x0,0x0,_0x28deed,_0x3d4f59);},Window_SideviewUiBattleStatus[_0xabf307(0xf0)][_0xabf307(0x13a)]=function(){const _0x53f56d=_0xabf307;Window_StatusBase[_0x53f56d(0xf0)][_0x53f56d(0x13a)][_0x53f56d(0xc6)](this),this[_0x53f56d(0x129)](),this[_0x53f56d(0x15b)]();},Window_SideviewUiBattleStatus[_0xabf307(0xf0)][_0xabf307(0x19b)]=function(){const _0x53c3ca=_0xabf307;return $gameParty[_0x53c3ca(0x173)]()[this[_0x53c3ca(0xf5)]];},Window_SideviewUiBattleStatus[_0xabf307(0xf0)]['updateBattler']=function(){const _0x27448e=_0xabf307;if(this[_0x27448e(0x188)]===this[_0x27448e(0x19b)]())return;this[_0x27448e(0x188)]=this[_0x27448e(0x19b)](),this['refresh'](),this[_0x27448e(0x188)]?this[_0x27448e(0x12b)](0x1):this['setBackgroundType'](0x2);},Window_SideviewUiBattleStatus[_0xabf307(0xf0)][_0xabf307(0x15b)]=function(){const _0x1b24e1=_0xabf307;if(!this[_0x1b24e1(0x188)])return;this[_0x1b24e1(0x136)]=this[_0x1b24e1(0x100)]()?this[_0x1b24e1(0xd5)]:this[_0x1b24e1(0x1b7)];const _0xf0592f=Window_SideviewUiBattleStatus[_0x1b24e1(0x179)];if(this[_0x1b24e1(0x136)]>this['x'])this['x']=Math[_0x1b24e1(0x1db)](this['x']+_0xf0592f,this[_0x1b24e1(0x136)]);else this[_0x1b24e1(0x136)]<this['x']&&(this['x']=Math[_0x1b24e1(0x107)](this['x']-_0xf0592f,this[_0x1b24e1(0x136)]));},Window_SideviewUiBattleStatus[_0xabf307(0xf0)][_0xabf307(0x100)]=function(){const _0x16fbbf=_0xabf307;if(this[_0x16fbbf(0x188)]===BattleManager['actor']())return!![];if(this[_0x16fbbf(0x188)]===BattleManager[_0x16fbbf(0x1b3)])return!![];if(this[_0x16fbbf(0x188)][_0x16fbbf(0x16e)]())return!![];return![];},Window_SideviewUiBattleStatus[_0xabf307(0xf0)][_0xabf307(0x1e5)]=function(){const _0x52b71b=_0xabf307;return Window_SideviewUiBattleStatus[_0x52b71b(0x14e)];},Window_SideviewUiBattleStatus[_0xabf307(0xf0)]['getStateTooltipBattler']=function(){const _0x4c63b3=_0xabf307;return this[_0x4c63b3(0x188)];},Window_SideviewUiBattleStatus[_0xabf307(0xf0)][_0xabf307(0x1cb)]=function(){const _0x111c33=_0xabf307,_0x324961=new Point(TouchInput['x'],TouchInput['y']),_0xc3cd06=this[_0x111c33(0x1c8)][_0x111c33(0x199)](_0x324961);return this[_0x111c33(0x167)][_0x111c33(0x104)](_0xc3cd06['x'],_0xc3cd06['y']);},Window_SideviewUiBattleStatus[_0xabf307(0xf0)]['drawAllItems']=function(){const _0x3a0387=_0xabf307;this[_0x3a0387(0xda)]();if(!this[_0x3a0387(0x188)])return;this[_0x3a0387(0x19a)](),this['drawCustomJS']();},Window_SideviewUiBattleStatus[_0xabf307(0xf0)][_0xabf307(0x19a)]=function(){const _0x59b790=_0xabf307,_0x1d5023=this[_0x59b790(0x188)];let _0x5332b1=0x4,_0x42054d=Window_SideviewUiBattleStatus[_0x59b790(0x177)];if(Imported[_0x59b790(0x18a)]&&Window_SideviewUiBattleStatus[_0x59b790(0x1ee)]){let _0x364e2a=_0x5332b1+Window_SideviewUiBattleStatus['BREAK_SHIELD_OFFSET_X'],_0x5cb3bf=_0x42054d+Window_SideviewUiBattleStatus[_0x59b790(0x14f)];this[_0x59b790(0x138)](_0x1d5023,_0x364e2a,_0x5cb3bf);if(Window_SideviewUiBattleStatus[_0x59b790(0x1a3)]){const _0xbeb554=_0x59b790(0x1dc)['format'](_0x1d5023['actorId']()),_0x3d871b=this[_0x59b790(0x11e)];if(_0x3d871b[_0xbeb554]){const _0xc7c3d0=_0x3d871b[_0xbeb554];_0xc7c3d0[_0x59b790(0x1cf)]['x']=_0xc7c3d0[_0x59b790(0x1cf)]['y']=0x1/this['scale']['y'];};}}if(Window_SideviewUiBattleStatus[_0x59b790(0x1c1)]){let _0x50f49c=_0x5332b1+Window_SideviewUiBattleStatus['STATES_OFFSET_X'],_0x5e0a17=_0x42054d+Window_SideviewUiBattleStatus[_0x59b790(0x147)];Imported[_0x59b790(0x18a)]&&Window_SideviewUiBattleStatus[_0x59b790(0x1ee)]&&(Window_SideviewUiBattleStatus[_0x59b790(0x1c0)]?_0x5e0a17+=Math['ceil'](ImageManager[_0x59b790(0x1e3)]/this['scale']['y']):_0x5e0a17+=ImageManager[_0x59b790(0x1e3)],_0x5e0a17+=0x4);this['placeStateIcon'](_0x1d5023,_0x50f49c,_0x5e0a17);if(Window_SideviewUiBattleStatus[_0x59b790(0x1a3)]){const _0x1b6a29=_0x59b790(0x155)[_0x59b790(0x165)](_0x1d5023[_0x59b790(0xc5)]()),_0x312269=this[_0x59b790(0x11e)];if(_0x312269[_0x1b6a29]){const _0x45555f=_0x312269[_0x1b6a29];_0x45555f[_0x59b790(0x1cf)]['x']=_0x45555f[_0x59b790(0x1cf)]['y']=0x1/this[_0x59b790(0x1cf)]['y'];};}}if(this[_0x59b790(0x1e2)]()){let _0x6e5875=_0x5332b1+Window_SideviewUiBattleStatus[_0x59b790(0x103)],_0x43a324=_0x42054d+Window_SideviewUiBattleStatus[_0x59b790(0xf6)];this[_0x59b790(0x172)](_0x1d5023,_0x6e5875,_0x43a324);}if(this[_0x59b790(0x1bb)]()){let _0x1877f8=_0x5332b1+Window_SideviewUiBattleStatus[_0x59b790(0x190)],_0x3f9c9a=_0x42054d+Window_SideviewUiBattleStatus[_0x59b790(0x170)];this[_0x59b790(0x1e2)]()&&(_0x3f9c9a-=Sprite_Gauge[_0x59b790(0xf0)][_0x59b790(0xc2)]()-0x1),this[_0x59b790(0x1af)](_0x1d5023,_0x1877f8,_0x3f9c9a);}if(Window_SideviewUiBattleStatus[_0x59b790(0xbe)]){let _0x243c06=_0x5332b1+Window_SideviewUiBattleStatus['NAME_OFFSET_X'],_0x46b0b6=_0x42054d+Window_SideviewUiBattleStatus[_0x59b790(0xf2)];Window_SideviewUiBattleStatus[_0x59b790(0x175)]?this[_0x59b790(0x101)](_0x1d5023,_0x243c06,_0x46b0b6):this[_0x59b790(0xff)](_0x1d5023,_0x243c06+0x4,_0x46b0b6-0x6);}(Window_SideviewUiBattleStatus[_0x59b790(0xbe)]||this[_0x59b790(0x1e2)]()||this['isShowAggro']())&&(_0x42054d+=this[_0x59b790(0x1dd)]());if(this['isAdjustBoostPoints']()){const _0x4817f2=Math[_0x59b790(0x1e0)](ImageManager[_0x59b790(0x1e3)]*Sprite_BoostContainer[_0x59b790(0x148)]);let _0x479775=_0x5332b1+Window_SideviewUiBattleStatus[_0x59b790(0x1c4)],_0x46b016=_0x42054d+Window_SideviewUiBattleStatus[_0x59b790(0x1e6)];_0x46b016+=Math[_0x59b790(0x107)](0x0,Math[_0x59b790(0x12e)]((this['gaugeLineHeight']()-_0x4817f2)/0x2)),this['placeBoostPoints'](_0x1d5023,_0x479775,_0x46b016),_0x42054d+=this['gaugeLineHeight']();}if(this[_0x59b790(0x182)]()){let _0x456bba=_0x5332b1+Window_SideviewUiBattleStatus['BRAVE_OFFSET_X'],_0x44fcb1=_0x42054d+Window_SideviewUiBattleStatus[_0x59b790(0x1c6)],_0x209cd5=Math[_0x59b790(0x1e0)](Window_SideviewUiBattleStatus['WIDTH_BASE']/this[_0x59b790(0x1cf)]['x']);this[_0x59b790(0x1e8)](_0x1d5023,_0x456bba,_0x44fcb1,_0x209cd5,_0x59b790(0x111)),_0x42054d+=this['gaugeLineHeight']();}if(Window_SideviewUiBattleStatus['HP_GAUGE_SHOWN']){let _0x3870fe=_0x5332b1+Window_SideviewUiBattleStatus[_0x59b790(0x108)],_0x155f41=_0x42054d+Window_SideviewUiBattleStatus[_0x59b790(0xd0)];this[_0x59b790(0x1b4)](_0x1d5023,'hp',_0x3870fe,_0x155f41),_0x42054d+=this[_0x59b790(0x1dd)]();}if(Window_SideviewUiBattleStatus['MP_GAUGE_SHOWN']){let _0x190593=_0x5332b1+Window_SideviewUiBattleStatus[_0x59b790(0x1d8)],_0x3ab278=_0x42054d+Window_SideviewUiBattleStatus[_0x59b790(0x117)];this['placeGauge'](_0x1d5023,'mp',_0x190593,_0x3ab278),_0x42054d+=this[_0x59b790(0x1dd)]();}if(Window_SideviewUiBattleStatus['TP_GAUGE_SHOWN']){let _0x120d31=_0x5332b1+Window_SideviewUiBattleStatus[_0x59b790(0xef)],_0xf5367e=_0x42054d+Window_SideviewUiBattleStatus[_0x59b790(0x13e)];this['placeGauge'](_0x1d5023,'tp',_0x120d31,_0xf5367e),_0x42054d+=this[_0x59b790(0x1dd)]();}},Window_SideviewUiBattleStatus[_0xabf307(0xf0)][_0xabf307(0x1e2)]=function(){const _0x175b9c=_0xabf307;if(Imported['VisuMZ_2_BattleSystemCTB']&&BattleManager[_0x175b9c(0xe9)]())return![];return BattleManager[_0x175b9c(0x1b5)]()&&Window_SideviewUiBattleStatus[_0x175b9c(0xbe)]&&Window_SideviewUiBattleStatus[_0x175b9c(0x11d)];},Window_SideviewUiBattleStatus[_0xabf307(0xf0)][_0xabf307(0x1bb)]=function(){const _0x33065a=_0xabf307;return Window_SideviewUiBattleStatus[_0x33065a(0xbe)]&&Window_SideviewUiBattleStatus[_0x33065a(0x1ae)]&&Imported[_0x33065a(0x13d)]&&ConfigManager[_0x33065a(0x1ac)]&&VisuMZ[_0x33065a(0x1aa)][_0x33065a(0x1a5)][_0x33065a(0x18c)][_0x33065a(0x1e1)];},Window_SideviewUiBattleStatus['prototype'][_0xabf307(0x15c)]=function(){const _0x146197=_0xabf307;return Imported[_0x146197(0x1a1)]&&Window_SideviewUiBattleStatus[_0x146197(0x1a9)]&&BattleManager[_0x146197(0xfc)]();},Window_SideviewUiBattleStatus[_0xabf307(0xf0)][_0xabf307(0x182)]=function(){const _0x162709=_0xabf307;return Imported[_0x162709(0x1b0)]&&Window_SideviewUiBattleStatus[_0x162709(0x18b)]&&BattleManager['isBTB']();},Window_SideviewUiBattleStatus[_0xabf307(0xf0)][_0xabf307(0x1be)]=function(){const _0x50e7f9=_0xabf307;VisuMZ[_0x50e7f9(0x19d)]['Settings']['StatusWindow'][_0x50e7f9(0x10e)]&&VisuMZ[_0x50e7f9(0x19d)][_0x50e7f9(0x1a5)][_0x50e7f9(0xec)][_0x50e7f9(0x10e)]['call'](this,this[_0x50e7f9(0x188)]);};