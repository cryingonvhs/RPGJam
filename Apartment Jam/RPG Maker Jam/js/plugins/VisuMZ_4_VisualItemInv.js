//=============================================================================
// VisuStella MZ - Visual Item Inventory
// VisuMZ_4_VisualItemInv.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_4_VisualItemInv = true;

var VisuMZ = VisuMZ || {};
VisuMZ.VisualItemInv = VisuMZ.VisualItemInv || {};
VisuMZ.VisualItemInv.version = 1.05;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 4] [Version 1.05] [VisualItemInv]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Visual_Item_Inventory_VisuStella_MZ
 * @orderAfter VisuMZ_0_CoreEngine
 * @orderAfter VisuMZ_1_ItemsEquipsCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * This plugin changes the item list displayed in-game to become more visual
 * and show bigger images, either as icons or pictures. The enlarged item,
 * weapon, and armor images will show their item quantities next to them while
 * a tooltip window appears above their selected cell to show the item's name.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Changes the item inventory windows to become more visual.
 * * Enlarged item images can be either icons or picture images.
 * * Alter how large you want the images to appear with the Plugin Parameters.
 * * Add different color backgrounds for different items.
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
 * Window Columns and Spacing
 * 
 * It should come off as no surprise that these windows will have their usual
 * column counts changed to adjust for the item images shown. The columns will
 * be based on how many of the item icons can fit inside of the window.
 *
 * ---
 * 
 * Item Quantity Positioning
 * 
 * The item quantity will now be positioned to show in the lower right of any
 * window cell with an enlarged icon. Due to this being a much smaller area
 * than what is usually provided, some plugins may have incredibly squished
 * appearances when it comes to displaying item quantity in some areas.
 * 
 * This needs to be adjusted in those plugins individually.
 * 
 * ---
 * 
 * Items and Equips Core
 * 
 * For the Equip Menu, the remove item entry has been changed to show only the
 * enlarged icon. This is to keep consistency with the rest of the plugin.
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
 * === Picture-Related Notetags ===
 * 
 * ---
 * 
 * <Visual Item Picture: filename>
 * <Picture: filename>
 * 
 * - Used for: Item, Weapon, Armor Notetags
 * - Uses a picture from your project's /img/pictures/ folder instead of the
 *   item's icon inside the item windows instead.
 * - Replace 'filename' with the filename of the image.
 *   - Do not include the file extension.
 * - Scaling will not apply to the picture.
 * - Use the <Picture: filename> version for any other plugins that may be
 *   using this as an image outside of this plugin, too.
 * - The size used for the image will vary based on the icon size settings.
 * 
 * ---
 * 
 * === Background Colors-Related Notetags ===
 * 
 * ---
 *
 * <Visual Item BG Color 1: x>
 * <Visual Item BG Color 2: x>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the background color(s) for the item to text color 'x'.
 * - Replace 'x' with a number from 0 to 31 to represent a text color.
 *
 * ---
 *
 * <Visual Item BG Color 1: #rrggbb>
 * <Visual Item BG Color 2: #rrggbb>
 *
 * - Used for: Item, Weapon, Armor Notetags
 * - Changes the background color(s) for the item to a hex color.
 * - Use #rrggbb for custom colors.
 * - You can find out what hex codes belong to which color from this website:
 *   https://htmlcolorcodes.com/
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Visual Item Inventory Settings
 * ============================================================================
 *
 * These settings allow you to adjust how the Visual Item Inventory windows
 * appear and which ones they appear in.
 *
 * ---
 *
 * General
 * 
 *   Applied Windows:
 *   - Insert the name of their constructors here to apply them.
 *   - Only works with windows made from Window_ItemList.
 * 
 *   Icon Size:
 *   - The icon size used for the Visual Item windows.
 * 
 *   Icon Smoothing?:
 *   - Do you wish to smooth out the icons or pixelate them?
 *
 * ---
 *
 * Item Quantity Outline
 * 
 *   Outline Color:
 *   - Colors with a bit of alpha settings.
 *   - Format rgba(0-255, 0-255, 0-255, 0-1)
 * 
 *   Outline Size:
 *   - How thick are the outlines for the item quantity?
 *
 * ---
 *
 * Tooltip Window
 * 
 *   Show Tooltip Window?:
 *   - Show the tooltip window?
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   Buffer Width:
 *   - How much to buffer this window's width by?
 * 
 *   Font Size:
 *   - What should this window's font size be?
 * 
 *   Offset X:
 *   Offset Y:
 *   - How much to offset this window's X/Y position by?
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
 * Version 1.05: March 14, 2024
 * * Compatibility Update!
 * ** Added better compatibility with VisuMZ_3_ItemAmplifySkills! The confirm
 *    icon should now be displayed properly. Update made by Irina.
 * 
 * Version 1.04: July 13, 2023
 * * Compatibility Update!
 * ** Added compatibility with Quest Journal System's newest Quest Label update
 *    in order for the Quest Label to show up in the visual inventory. Update
 *    made by Irina.
 * 
 * Version 1.03: August 25, 2022
 * * Feature Update!
 * ** Updated the boundaries for visual item name display positions to always
 *    fit within the verticality of the game screen. Fix made by Irina.
 * 
 * Version 1.02: July 16, 2021
 * * Bug Fixes!
 * ** Visual glitch fixed that would make item quantity not appear. Fix made
 *    by Arisu.
 * 
 * Version 1.01: February 19, 2021
 * * Feature Update!
 * ** No longer requires VisuStella MZ Items and Equips Core dependency.
 *
 * Version 1.00 Official Release Date: February 26, 2021
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
 * @param VisualItemInv
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 * 
 * @param General
 *
 * @param Constructors:arraystr
 * @text Applied Windows
 * @parent General
 * @type string[]
 * @desc Insert the name of their constructors here to apply them.
 * Only works with windows made from Window_ItemList.
 * @default ["Window_ItemList","Window_EquipItem","Window_ShopSell","Window_EventItem","Window_BattleItem"]
 *
 * @param IconSize:num
 * @text Icon Size
 * @parent General
 * @desc The icon size used for the Visual Item windows.
 * @default 64
 *
 * @param IconSmoothing:eval
 * @text Icon Smoothing?
 * @parent General
 * @type boolean
 * @on Smooth
 * @off Pixelate
 * @desc Do you wish to smooth out the icons or pixelate them?
 * @default false
 * 
 * @param Outline
 * @text Item Quantity Outline
 *
 * @param OutlineColor:num
 * @text Outline Color
 * @parent Outline
 * @desc Colors with a bit of alpha settings.
 * Format rgba(0-255, 0-255, 0-255, 0-1)
 * @default rgba(0, 0, 0, 1.0)
 *
 * @param OutlineSize:num
 * @text Outline Size
 * @parent Outline
 * @desc How thick are the outlines for the item quantity?
 * @default 4
 * 
 * @param Tooltip
 * @text Tooltip Window
 *
 * @param ShowTooltip:eval
 * @text Show Tooltip Window?
 * @parent Tooltip
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show the tooltip window?
 * @default true
 *
 * @param TooltipBgType:num
 * @text Background Type
 * @parent Tooltip
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param TooltipBufferWidth:num
 * @text Buffer Width
 * @parent Tooltip
 * @desc How much to buffer this window's width by?
 * @default 16
 *
 * @param TooltipFontSize:num
 * @text Font Size
 * @parent Tooltip
 * @desc What should this window's font size be?
 * @default 22
 *
 * @param TooltipOffsetX:num
 * @text Offset X
 * @parent Tooltip
 * @desc How much to offset this window's X position by?
 * @default 0
 *
 * @param TooltipOffsetY:num
 * @text Offset Y
 * @parent Tooltip
 * @desc How much to offset this window's Y position by?
 * @default 8
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

//=============================================================================
// Setup Plugin Parameters
//=============================================================================

var label = 'VisualItemInv';
var tier = tier || 0;
var dependencies = [];
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

//-----------------------------------------------------------------------------
// Scene_Boot
//
// The scene class for initializing the entire game.

VisuMZ.VisualItemInv.RegExp = {
    // Items, Weapons, Armors
    visualPicture: /<(?:VISUAL|VISUAL ITEM) (?:PICTURE|FILENAME):[ ](.*)>/i,
    bigPicture: /<PICTURE:[ ](.*)>/i,

    // BG Color
    bgColorNum1: /<(?:VISUAL|VISUAL ITEM)[ ](?:BG|BACKGROUND)[ ]COLOR[ ]1:[ ](\d+)>/i,
    bgColorNum2: /<(?:VISUAL|VISUAL ITEM)[ ](?:BG|BACKGROUND)[ ]COLOR[ ]2:[ ](\d+)>/i,
    bgColorHex1: /<(?:VISUAL|VISUAL ITEM)[ ](?:BG|BACKGROUND)[ ]COLOR[ ]1:[ ]#(.*)>/i,
    bgColorHex2: /<(?:VISUAL|VISUAL ITEM)[ ](?:BG|BACKGROUND)[ ]COLOR[ ]2:[ ]#(.*)>/i,
};

//-----------------------------------------------------------------------------
// Window_ItemList
//
// The window for selecting an item on the item screen.

Window_ItemList.VISUAL_ITEM_ICON_SIZE = VisuMZ.VisualItemInv.Settings.IconSize || 64;
Window_ItemList.VISUAL_ITEM_ICON_SMOOTHING = VisuMZ.VisualItemInv.Settings.IconSmoothing || false;

Window_ItemList.VISUAL_ITEM_OUTLINE_COLOR = VisuMZ.VisualItemInv.Settings.OutlineColor || 'rgba(0, 0, 0, 1.0)';
Window_ItemList.VISUAL_ITEM_OUTLINE_SIZE = VisuMZ.VisualItemInv.Settings.OutlineSize || 0;

Window_ItemList.VISUAL_ITEM_CONSTRUCTORS = VisuMZ.VisualItemInv.Settings.Constructors || 0;

//-----------------------------------------------------------------------------
// Base
//-----------------------------------------------------------------------------

Window_ItemList.prototype.usesVisualItemInventory = function() {
    return Window_ItemList.VISUAL_ITEM_CONSTRUCTORS.includes(this.constructor.name);
};

VisuMZ.VisualItemInv.Window_Selectable_itemHeight = Window_Selectable.prototype.itemHeight;
Window_ItemList.prototype.itemHeight = function() {
    if (this.usesVisualItemInventory()) {
        if (this._visualItemHeight !== undefined) return this._visualItemHeight;
        const lines = Math.ceil(Window_ItemList.VISUAL_ITEM_ICON_SIZE / this.lineHeight());
        this._visualItemHeight = Math.round(lines * this.lineHeight()) + 8;
        return this._visualItemHeight;
    } else {
        return VisuMZ.VisualItemInv.Window_Selectable_itemHeight.call(this);
    }
};

VisuMZ.VisualItemInv.Window_ItemList_maxCols = Window_ItemList.prototype.maxCols;
Window_ItemList.prototype.maxCols = function() {
    if (this.usesVisualItemInventory()) {
        return Math.ceil(this.innerWidth / this.itemHeight());
    } else {
        return VisuMZ.VisualItemInv.Window_ItemList_maxCols.call(this);
    }
};

VisuMZ.VisualItemInv.Window_ItemList_colSpacing = Window_ItemList.prototype.colSpacing;
Window_ItemList.prototype.colSpacing = function() {
    if (this.usesVisualItemInventory()) {
        return 0;
    } else {
        return VisuMZ.VisualItemInv.Window_ItemList_colSpacing.call(this);
    }
};

VisuMZ.VisualItemInv.Window_ItemList_rowSpacing = Window_ItemList.prototype.rowSpacing;
Window_ItemList.prototype.rowSpacing = function() {
    if (this.usesVisualItemInventory()) {
        return 0;
    } else {
        return VisuMZ.VisualItemInv.Window_ItemList_rowSpacing.call(this);
    }
};

//-----------------------------------------------------------------------------
// Draw
//-----------------------------------------------------------------------------

VisuMZ.VisualItemInv.Window_ItemList_drawItem = Window_ItemList.prototype.drawItem;
Window_ItemList.prototype.drawItem = function(index) {
    if (this.usesVisualItemInventory()) {
        this.drawItemVisualItemInventory(index);
    } else {
        VisuMZ.VisualItemInv.Window_ItemList_drawItem.call(this, index);
    }
};

Window_ItemList.prototype.drawItemVisualItemInventory = function(index) {
    // Return Check
    const item = this.itemAt(index);

    // Compatibility Target
    // v1.05 added by Irina
    if (this._amplifySkill && item === null) {
        return this.drawItemAmplifyConfirm(index);
    }
    if (!item) return;

    // Declare Variables
    const regexp = VisuMZ.VisualItemInv.RegExp;
    const note = item.note;
    const rect = this.itemRectWithPadding(index);
    
    // Draw Picture or Icon
    if (note.match(regexp.visualPicture) || note.match(regexp.bigPicture)) {
        const filename = String(RegExp.$1).trim();
        const bitmap = ImageManager.loadPicture(filename);
        bitmap.addLoadListener(this.drawBigItemPicture.bind(this, item, bitmap, rect));
    } else {
        this.changePaintOpacity(this.isEnabled(item));
        this.drawBigItemIcon(item, rect);

        this.drawItemNumber(item, rect.x, rect.y + rect.height - this.lineHeight(), rect.width);
        this.resetFontSettings();
        this.changePaintOpacity(true);
    }

    // Compatibility Target
    this.placeItemNewLabel(index);
    this.placeItemQuestLabel(index); // v1.04 added by Arisu
};

Window_ItemList.prototype.drawBigItemPicture = function(item, bitmap, rect) {
    // Before
    this.changePaintOpacity(this.isEnabled(item));
    
    // Declare Variables
    let x = rect.x + 2;
    let y = rect.y + 2;
    let width = rect.width - 4;
    let height = rect.height - 4;

    // Calculate Size
    let size = Math.min(width, height);
    const ratioX = size / bitmap.width;
    const ratioY = size / bitmap.height;
    const scale = Math.min(ratioX, ratioY, 1.0);
    let dw = Math.round(bitmap.width * scale);
    let dh = Math.round(bitmap.height * scale);
    x += Math.round((width - dw) / 2);
    y += Math.round((height - dh) / 2);

    // Draw Image
    const pw = bitmap.width;
    const ph = bitmap.height;
    const smoothing = this.contents._context.imageSmoothingEnabled;
    this.contents._context.imageSmoothingEnabled = true;
    this.contents.blt(bitmap, 0, 0, pw, ph, x, y, dw, dh);
    this.contents._context.imageSmoothingEnabled = smoothing;

    // After
    this.drawItemNumber(item, rect.x, rect.y + rect.height - this.lineHeight(), rect.width);
    this.resetFontSettings();
    this.changePaintOpacity(true);
};

Window_ItemList.prototype.drawBigItemIcon = function(item, rect) {
    // Declare Variables
    const iconIndex = item.iconIndex;
    this.drawBigIcon(iconIndex, rect);
};

Window_ItemList.prototype.drawBigIcon = function(iconIndex, rect) {
    // Declare Variables
    let x = rect.x;
    let y = rect.y;

    // Calculate Size
    let size = Window_ItemList.VISUAL_ITEM_ICON_SIZE;
    x += Math.round((rect.width - size) / 2);
    y += Math.round((rect.height - size) / 2);

    // Draw Icon
    const bitmap = ImageManager.loadSystem('IconSet');
    const pw = ImageManager.iconWidth;
    const ph = ImageManager.iconHeight;
    const sx = (iconIndex % 16) * pw;
    const sy = Math.floor(iconIndex / 16) * ph;
    this.contents._context.imageSmoothingEnabled = Window_ItemList.VISUAL_ITEM_ICON_SMOOTHING;
    this.contents.blt(bitmap, sx, sy, pw, ph, x, y, size, size);
    this.contents._context.imageSmoothingEnabled = true;
};

// v1.02 updated by Arisu
VisuMZ.VisualItemInv.Window_ItemList_drawItemNumber = Window_ItemList.prototype.drawItemNumber;
Window_ItemList.prototype.drawItemNumber = function(item, x, y, width) {
    if (this.usesVisualItemInventory()) {
        this.setupVisualItemInvFontSettings();
        VisuMZ.VisualItemInv.Window_ItemList_drawItemNumber.call(this, item, x, y, width);
        this.resetFontSettings();
    } else {
        VisuMZ.VisualItemInv.Window_ItemList_drawItemNumber.call(this, item, x, y, width);
    }
};

Window_Base.prototype.setupVisualItemInvFontSettings = function() {
    this.resetFontSettings();
    this.contents.outlineColor = Window_ItemList.VISUAL_ITEM_OUTLINE_COLOR;
    this.contents.outlineWidth = Window_ItemList.VISUAL_ITEM_OUTLINE_SIZE;
};

//-----------------------------------------------------------------------------
// Tooltip Window
//-----------------------------------------------------------------------------

VisuMZ.VisualItemInv.Window_ItemList_initialize = Window_ItemList.prototype.initialize;
Window_ItemList.prototype.initialize = function(rect) {
    VisuMZ.VisualItemInv.Window_ItemList_initialize.call(this, rect);
    this.createVisualItemInventoryTooltipWindow();
};

Window_ItemList.prototype.createVisualItemInventoryTooltipWindow = function() {
    if (!this.usesVisualItemInventory()) return;
    if (!VisuMZ.VisualItemInv.Settings.ShowTooltip) return;
    this._visualItemInventoryTooltipWindow = new Window_VisualItemTooltip(this);
    SceneManager._scene.addChild(this._visualItemInventoryTooltipWindow);
};

VisuMZ.VisualItemInv.Window_ItemList_callUpdateHelp = Window_ItemList.prototype.callUpdateHelp;
Window_ItemList.prototype.callUpdateHelp = function() {
    VisuMZ.VisualItemInv.Window_ItemList_callUpdateHelp.call(this);
    if (this._visualItemInventoryTooltipWindow) {
        this._visualItemInventoryTooltipWindow.setItem(this.item());

        // v1.05 added by Irina
        if (this._amplifySkill) {
            this._visualItemInventoryTooltipWindow.refresh();
        }
    }
};

//-----------------------------------------------------------------------------
// Background Color
//-----------------------------------------------------------------------------

VisuMZ.VisualItemInv.Window_ItemList_drawItemBackground = Window_ItemList.prototype.drawItemBackground;
Window_ItemList.prototype.drawItemBackground = function(index) {
    if (this.usesVisualItemInventory()) {
        this.drawItemBackgroundVisualItemInventory(index);
    } else {
        VisuMZ.VisualItemInv.Window_ItemList_drawItemBackground.call(this, index);
    }

    const rect = this.itemRect(index);
    this.drawBackgroundRect(rect);
};

Window_ItemList.prototype.drawItemBackgroundVisualItemInventory = function(index) {
    // Return Check
    const item = this.itemAt(index);
    if (!item) {
        VisuMZ.VisualItemInv.Window_ItemList_drawItemBackground.call(this, index);
        return;
    }

    // Declare Variables
    const regexp = VisuMZ.VisualItemInv.RegExp;
    const note = item.note;
    let c1 = ColorManager.itemBackColor1();
    let c2 = ColorManager.itemBackColor2();

    // Check Notetags
    if (note.match(regexp.bgColorNum1)) {
        c1 = ColorManager.textColor(Number(RegExp.$1));
    }
    if (note.match(regexp.bgColorNum2)) {
        c2 = ColorManager.textColor(Number(RegExp.$1));
    }
    if (note.match(regexp.bgColorHex1)) {
        c1 = '#' + String(RegExp.$1);
    }
    if (note.match(regexp.bgColorHex2)) {
        c2 = '#' + String(RegExp.$1);
    }

    // Draw Color
    const rect = this.itemRect(index);
    const x = rect.x;
    const y = rect.y;
    const w = rect.width;
    const h = rect.height;
    this.contentsBack.paintOpacity = 255;
    this.contentsBack.gradientFillRect(x, y, w, h, c1, c2, true);
    this.contentsBack.strokeRect(x, y, w, h, c1);
};

VisuMZ.VisualItemInv.ConvertHexToRgba = function(hex) {
    hex = hex.replace('#','');

    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    var r = parseInt(hex.substring(0,2), 16),
        g = parseInt(hex.substring(2,4), 16),
        b = parseInt(hex.substring(4,6), 16);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + '0.5' + ')';
};

//-----------------------------------------------------------------------------
// Items and Equips Core Compatibility
//-----------------------------------------------------------------------------

VisuMZ.VisualItemInv.Window_Base_drawItemNumber = Window_Base.prototype.drawItemNumber;
Window_Base.prototype.drawItemNumber = function(item, x, y, width) {
    if (this.usesVisualItemInventory && this.usesVisualItemInventory()) {
        this.drawItemNumberVisualItemInventory(item, x, y, width);
    } else {
        VisuMZ.VisualItemInv.Window_Base_drawItemNumber.call(this, item, x, y, width); // v1.02 fixed by Arisu
    }
    
};

Window_Base.prototype.drawItemNumberVisualItemInventory = function(item, x, y, width) {
    if (this.isDrawItemNumber(item)) {
        this.setupVisualItemInvFontSettings();
        const settings = VisuMZ.ItemsEquipsCore.Settings.ItemScene;
        const fmt = settings.ItemQuantityFmt;
        const text = fmt.format($gameParty.numItems(item));
        this.contents.fontSize = settings.ItemQuantityFontSize;
        this.drawText(text, x, y, width, "right");
        this.resetFontSettings();
    }
};

//-----------------------------------------------------------------------------
// Compatibility Target
//-----------------------------------------------------------------------------

VisuMZ.VisualItemInv.Window_ItemList_placeItemNewLabel = Window_ItemList.prototype.placeItemNewLabel;
Window_ItemList.prototype.placeItemNewLabel = function(index) {
    if (this.usesVisualItemInventory()) {
        this.placeItemNewLabelVisualItemInventory(index);
    } else {
        VisuMZ.VisualItemInv.Window_ItemList_placeItemNewLabel.call(this, index);
    }
};

Window_ItemList.prototype.placeItemNewLabelVisualItemInventory = function(index) {
    // Return Check
    if (!Imported.VisuMZ_1_ItemsEquipsCore) return;

    // Original
    const item = this.itemAt(index);
    if (!item || !this.isShowNew()) return;
    if (!$gameParty.isNewItem(item)) return;
    const rect = this.itemRectWithPadding(index); // Changed
    const iconX = rect.x;
    const iconY = rect.y;
    const offsetX = VisuMZ.ItemsEquipsCore.Settings.New.OffsetX;
    const offsetY = VisuMZ.ItemsEquipsCore.Settings.New.OffsetY;
    this.placeNewLabel(item, iconX + offsetX, iconY + offsetY);
};

// v1.04 added by Irina
VisuMZ.VisualItemInv.Window_ItemList_placeItemQuestLabel = Window_ItemList.prototype.placeItemQuestLabel;
Window_ItemList.prototype.placeItemQuestLabel = function(index) {
    if (this.usesVisualItemInventory()) {
        this.placeItemQuestLabelVisualItemInventory(index);
    } else {
        VisuMZ.VisualItemInv.Window_ItemList_placeItemQuestLabel.call(this, index);
    }
};

Window_ItemList.prototype.placeItemQuestLabelVisualItemInventory = function(index) {
    // Return Check
    if (!Imported.VisuMZ_2_QuestSystem) return;

    // Original
    const item = this.itemAt(index);
    if (!item || !this.isShowQuest()) return;
    if (!$gameParty.isQuestItem(item)) return;
    const rect = this.itemRectWithPadding(index); // Changed
    const iconX = rect.x;
    const iconY = rect.y;
    const offsetX = VisuMZ.QuestSystem.Settings.Label.OffsetX;
    const offsetY = VisuMZ.QuestSystem.Settings.Label.OffsetY;
    this.placeQuestLabel(item, iconX + offsetX, iconY + offsetY);
};

//-----------------------------------------------------------------------------
// Item Amplify Skills Compatibility
//-----------------------------------------------------------------------------

Window_ItemList.prototype.drawItemAmplifyConfirm = function(index) {
    const rect = this.itemRectWithPadding(index);

    this.changePaintOpacity(this.isEnabled(null));
    this.resetFontSettings();

    const iconIndex = Window_BattleItem.ITEM_AMPLIFY_SETTINGS.confirmIcon;
    this.drawBigIcon(iconIndex, rect);
};

//-----------------------------------------------------------------------------
// Window_EquipItem
//
// The window for selecting an equipment item on the equipment screen.

VisuMZ.VisualItemInv.Window_EquipItem_maxCols = Window_EquipItem.prototype.maxCols
Window_EquipItem.prototype.maxCols = function() {
    if (this.usesVisualItemInventory()) {
        return Window_ItemList.prototype.maxCols.call(this);
    } else {
        return VisuMZ.VisualItemInv.Window_EquipItem_maxCols.call(this);
    }
};

VisuMZ.VisualItemInv.Window_EquipItem_colSpacing = Window_EquipItem.prototype.colSpacing;
Window_EquipItem.prototype.colSpacing = function() {
    if (this.usesVisualItemInventory()) {
        return Window_ItemList.prototype.colSpacing.call(this);
    } else {
        return VisuMZ.VisualItemInv.Window_EquipItem_colSpacing.call(this);
    }
};

// Items and Equips Core Compatibility
Window_EquipItem.prototype.drawRemoveItem = function(index) {
    // Declare Variables
    const rect = this.itemRectWithPadding(index);
    const settings = VisuMZ.ItemsEquipsCore.Settings.EquipScene;
    const icon = settings.RemoveEquipIcon;
    
    // Draw Icon
    this.changePaintOpacity(false);
    this.drawBigIcon(icon, rect);
    this.changePaintOpacity(true);
};

//-----------------------------------------------------------------------------
// Window_ShopSell
//
// The window for selecting an item to sell on the shop screen.

VisuMZ.VisualItemInv.Window_ShopSell_maxCols = Window_ShopSell.prototype.maxCols
Window_ShopSell.prototype.maxCols = function() {
    if (this.usesVisualItemInventory()) {
        return Window_ItemList.prototype.maxCols.call(this);
    } else {
        return VisuMZ.VisualItemInv.Window_ShopSell_maxCols.call(this);
    }
};

VisuMZ.VisualItemInv.Window_ShopSell_colSpacing = Window_ShopSell.prototype.colSpacing;
Window_ShopSell.prototype.colSpacing = function() {
    if (this.usesVisualItemInventory()) {
        return Window_ItemList.prototype.colSpacing.call(this);
    } else {
        return VisuMZ.VisualItemInv.Window_ShopSell_colSpacing.call(this);
    }
};

//-----------------------------------------------------------------------------
// Window_VisualItemTooltip
//
// The window for an item window to display the item's name.

function Window_VisualItemTooltip() {
    this.initialize(...arguments);
}

Window_VisualItemTooltip.prototype = Object.create(Window_Base.prototype);
Window_VisualItemTooltip.prototype.constructor = Window_VisualItemTooltip;

Window_VisualItemTooltip.BG_TYPE = VisuMZ.VisualItemInv.Settings.TooltipBgType;

Window_VisualItemTooltip.BUFFER_WIDTH = VisuMZ.VisualItemInv.Settings.TooltipBufferWidth;

Window_VisualItemTooltip.FONT_SIZE = VisuMZ.VisualItemInv.Settings.TooltipFontSize;

Window_VisualItemTooltip.OFFSET_X = VisuMZ.VisualItemInv.Settings.TooltipOffsetX;
Window_VisualItemTooltip.OFFSET_Y = VisuMZ.VisualItemInv.Settings.TooltipOffsetY;

Window_VisualItemTooltip.prototype.initialize = function(parentWindow) {
    this._parentWindow = parentWindow;
    const rect = new Rectangle(0,0,0,this.lineHeight());
    Window_Base.prototype.initialize.call(this, rect);
    this.visible = false;
    this.backOpacity = 255;
    this.opacity = 255;
    this._item = null;
};

Window_VisualItemTooltip.prototype.updatePadding = function() {
    this.padding = 0;
};

Window_VisualItemTooltip.prototype.setItem = function(item) {
    if (this._item === item && !this._amplifySkill) return;
    this._item = item;
    this.refresh();
};

// v1.05 added by Irina
Window_VisualItemTooltip.prototype.refreshReturnCheck = function() {
    if (this._parentWindow && this._parentWindow._amplifySkill) {
        if (!this._item) return true;
    }
    return !!this._item;
};

// v1.05 added by Irina
Window_VisualItemTooltip.prototype.getItemName = function() {
    if (this._parentWindow && this._parentWindow._amplifySkill && !this._item) {
        return TextManager.ITEM_AMPLIFY_CONFIRM;
    }
    return this._item ? this._item.name : '';
};

Window_VisualItemTooltip.prototype.refresh = function() {
    this.contents.clear();
    if (!this.refreshReturnCheck()) return; // v1.05 replaced by Irina

    this.resetFontSettings();
    this.contents.fontSize = Window_VisualItemTooltip.FONT_SIZE;

    const text = this.getItemName(); // v1.05 replaced by Irina
    const size = this.textWidth(text) + Window_VisualItemTooltip.BUFFER_WIDTH;
    this.width = Math.ceil(size);
    this.createContents();

    this.contents.fontSize = Window_VisualItemTooltip.FONT_SIZE;
    if (Imported.VisuMZ_1_ItemsEquipsCore) {
        const color = ColorManager.getItemColor(this._item);
        this.changeTextColor(color);
    }
    this.drawText(text, 0, 0, this.innerWidth, 'center');
    this.resetTextColor();

    this.setBackgroundType(Window_VisualItemTooltip.BG_TYPE);
};

Window_VisualItemTooltip.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    this.updateVisibility();
    this.updatePosition();
};

Window_VisualItemTooltip.prototype.updateVisibility = function() {
    const preVisible = this.visible;
    this.visible = this._item && this._parentWindow.active && this._parentWindow.isOpen();
    
    // v1.05 added by Irina
    if (this._parentWindow && this._parentWindow._amplifySkill && !this._item) {
        this.visible = true;
    }

    if (preVisible !== this.visible) {
        SceneManager._scene.addChild(this);
    }
};

Window_VisualItemTooltip.prototype.updatePosition = function() {
    if (!this.visible) return;

    const windowLayer = SceneManager._scene._windowLayer;
    const parent = this._parentWindow;
    let x = parent.x + windowLayer.x;
    let y = parent.y + windowLayer.y;
    const rect = parent._cursorRect;
    const clientArea = parent._clientArea;

    x += rect.x + (rect.width / 2) - (this.width / 2) + clientArea.x;
    y += rect.y - this.height + clientArea.y;
    let top = parent.y + windowLayer.y - this.height + parent.padding;
    top += Window_VisualItemTooltip.OFFSET_Y;

    x += Window_VisualItemTooltip.OFFSET_X;
    y += Window_VisualItemTooltip.OFFSET_Y;

    this.x = Math.round(x).clamp(0, Graphics.width - this.width);
    this.y = Math.round(y).clamp(0, Graphics.height - this.height); // v1.03 updated by Irina
};

//=============================================================================
// End of File
//=============================================================================