export default (favorites) => {
    return `
<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
    <category name="Search" colour="#42556e" css-icon="customIcon2 fa fa-search">
        <label text="Search category! Version 1.21"/>
        <sep gap="32"/>
        <button text="Search for Block" callbackKey="SEARCH"/>
        <label text="Click the search category again if nothing happens."/>
        <sep gap="32"/>
        <!-- CATEGORY_CONTENT_VARIABLE_GOES_HERE_897489712470376894703168263487623 -->
    </category>
    <category name="Favorites" colour="#FFFF00" css-icon="customIcon fa fa-star">
        <label text="Add your favorite blocks here by right clicking them and pressing &quot;Add to favorite!&quot;"/>
        ${favorites === null ? "" : favorites.map((c) => `<block type="${c}"/>`)}
    </category>
    <category name="Custom Blocks" colour="#808080" css-icon="customIcon2 fa fa-gear" hidden="${String(!window.isInS4DDebugMode)}">
        <label text="Custom blocks are currently in testing!"/>
        <label text="If you found any vulnerabilities or bugs, let us know!"/>
        <button text="Create block..." callbackKey="LAUNCHCUSTOMBLOCKBUILDER"/>
        <sep gap="32"/>
        ${window.customBlocks.map(x => `<block type="${x}"/>`).join('\n')}
    </category>
    <sep class="bt"/>
    <category name="Logic" colour="#5b80a5">
        <block type="controls_if"/>
        <block type="logic_compare">
            <field name="OP">EQ</field>
        </block>
        <block type="logic_operation">
            <field name="OP">AND</field>
        </block>
        <block type="logic_negate"/>
        <block type="logic_boolean">
            <field name="BOOL">TRUE</field>
        </block>
        <block type="logic_null"/>
        <block type="logic_ternary"/>
        <block type="jg_logic_is_equal_to_and_is_the_same_type_as"/>
        <block type="s4d_lasercat_switch_switch"/>
        <block type="lasercat_jg_case_default"/>
        <sep gap="32"/>
    </category>
    <category name="Loops" colour="#5ba55b">
        <block type="s4d_forever"/>
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="controls_whileUntil">
            <field name="MODE">WHILE</field>
        </block>
        <block type="controls_for">
            <field name="VAR" id="0D\`BNNIb2nl,{_^LQ.ro">i</field>
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
            <value name="BY">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="controls_forEach">
            <field name="VAR" id="_U%=Z#c;|yP-K;;aC%(K">j</field>
        </block>
        <block type="controls_flow_statements">
            <field name="FLOW">BREAK</field>
        </block>
        <label text="More Options" web-class="boldtext"/>
        <block type="s4d_forever2">
            <value name="LOG">
                <shadow type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                </shadow>
            </value>
        </block>
        <block type="s4d_forever3">
            <value name="LOG">
                <shadow type="logic_boolean">
                    <field name="BOOL">FALSE</field>
                </shadow>
            </value>
            <value name="DELAY">
                <shadow type="math_number">
                    <field name="NUM">50</field>
                </shadow>
            </value>
        </block>
        <sep gap="32"/>
    </category>
    <category name="Math" colour="#5b67a5">
        <block type="math_number">
            <field name="NUM">0</field>
        </block>
        <block type="math_arithmetic">
            <field name="OP">ADD</field>
            <value name="A">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="B">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
        </block>
        <block type="math_single">
            <field name="OP">ROOT</field>
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">9</field>
                </shadow>
            </value>
        </block>
        <block type="math_trig">
            <field name="OP">SIN</field>
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">45</field>
                </shadow>
            </value>
        </block>
        <block type="math_constant">
            <field name="CONSTANT">PI</field>
        </block>
        <block type="math_number_property">
            <mutation divisor_input="false"/>
            <field name="PROPERTY">EVEN</field>
            <value name="NUMBER_TO_CHECK">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="math_round">
            <field name="OP">ROUND</field>
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">3.1</field>
                </shadow>
            </value>
        </block>
        <block type="math_on_list">
            <mutation op="SUM"/>
            <field name="OP">SUM</field>
        </block>
        <block type="math_modulo">
            <value name="DIVIDEND">
                <shadow type="math_number">
                    <field name="NUM">64</field>
                </shadow>
            </value>
            <value name="DIVISOR">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="math_constrain">
            <value name="VALUE">
                <shadow type="math_number">
                    <field name="NUM">50</field>
                </shadow>
            </value>
            <value name="LOW">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="HIGH">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="math_random_int">
            <value name="FROM">
                <shadow type="math_number">
                    <field name="NUM">1</field>
                </shadow>
            </value>
            <value name="TO">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
        </block>
        <block type="math_random_float"/>
        <sep gap="32"/>
    </category>
    <category name="Text" colour="#5ba58c">
        <block type="jg_text_remake_paragraph_quotes"/>
        <block type="text_join">
            <mutation items="2"/>
        </block>
        <block type="jg_text_remake_in_text_replace_with">
            <value name="ORIGIN">
                <shadow type="text">
                    <field name="TEXT">aaa</field>
                </shadow>
            </value>
            <value name="REPLACE">
                <shadow type="text">
                    <field name="TEXT">a</field>
                </shadow>
            </value>
            <value name="WITH">
                <shadow type="text">
                    <field name="TEXT">b</field>
                </shadow>
            </value>
        </block>
        <block type="text_isEmpty"/>
        <block type="text_reverse"/>
        <block type="s4d_newline"/>
        <block type="text_append">
            <field name="VAR" id="X4zy!98/2$-ur;|L{NlX">item</field>
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
        </block>
        <block type="text_length">
            <value name="VALUE">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="s4d_ends_with">
            <value name="STRING">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
            <value name="SUBSTRING">
                <shadow type="text">
                    <field name="TEXT">a</field>
                </shadow>
            </value>
        </block>
        <block type="weird-to-normal"/>
        <block type="s4d_starts_with">
            <value name="STRING">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
            <value name="SUBSTRING">
                <shadow type="text">
                    <field name="TEXT">a</field>
                </shadow>
            </value>
        </block>
        <block type="s4d_includes">
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
            <value name="INCLUDES">
                <shadow type="text">
                    <field name="TEXT">a</field>
                </shadow>
            </value>
        </block>
        <block type="text_isEmpty">
            <value name="VALUE">
                <shadow type="text">
                    <field name="TEXT"/>
                </shadow>
            </value>
        </block>
        <block type="text_indexOf">
            <field name="END">FIRST</field>
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
                </block>
            </value>
            <value name="FIND">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_charAt">
            <mutation at="true"/>
            <field name="WHERE">FROM_START</field>
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
                </block>
            </value>
        </block>
        <block type="text_getSubstring">
            <mutation at1="true" at2="true"/>
            <field name="WHERE1">FROM_START</field>
            <field name="WHERE2">FROM_START</field>
            <value name="STRING">
                <block type="variables_get">
                    <field name="VAR" id="W.?wog^z?.i1DLln3w#V">text</field>
                </block>
            </value>
        </block>
        <block type="text_changeCase">
            <field name="CASE">UPPERCASE</field>
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_trim">
            <field name="MODE">BOTH</field>
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="text_count"/>
        <block type="jg_text_isboolean">
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">true</field>
                </shadow>
            </value>
        </block>
        <block type="jg_text_booleanfrom">
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">true</field>
                </shadow>
            </value>
        </block>
        <block type="jg_text_hasnumber">
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc123</field>
                </shadow>
            </value>
        </block>
        <block type="jg_text_for_each_letter_in_text_do">
            <value name="TEXT">
                <shadow type="text">
                    <field name="TEXT">abc</field>
                </shadow>
            </value>
        </block>
        <block type="jg_text_for_each_letter_in_text_do_letter"/>
        <block type="jg_text_regex_create_new_regex_of"/>
        <sep gap="32"/>
    </category>
    <category name="Lists" colour="#745ba5">
        <block type="lists_create_with">
            <mutation items="0"/>
        </block>
        <block type="lists_create_with">
            <mutation items="3"/>
        </block>
        <block type="lists_repeat">
            <value name="NUM">
                <shadow type="math_number">
                    <field name="NUM">5</field>
                </shadow>
            </value>
        </block>
        <block type="lists_length"/>
        <block type="lists_isEmpty"/>
        <block type="list_contains"/>
        <block type="lists_sort"/>
        <block type="lists_reverse"/>
        <block type="lists_indexOf">
            <field name="END">FIRST</field>
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                </block>
            </value>
        </block>
        <block type="lists_getIndex">
            <mutation statement="false" at="true"/>
            <field name="MODE">GET</field>
            <field name="WHERE">FROM_START</field>
            <value name="VALUE">
                <block type="variables_get">
                    <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                </block>
            </value>
        </block>
        <block type="lists_setIndex">
            <mutation at="true"/>
            <field name="MODE">SET</field>
            <field name="WHERE">FROM_START</field>
            <value name="LIST">
                <block type="variables_get">
                    <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                </block>
            </value>
        </block>
        <block type="lists_getSublist">
            <mutation at1="true" at2="true"/>
            <field name="WHERE1">FROM_START</field>
            <field name="WHERE2">FROM_START</field>
            <value name="LIST">
                <block type="variables_get">
                    <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                </block>
            </value>
        </block>
        <block type="push_to_list">
            <value name="LIST">
                <block type="variables_get">
                    <field name="VAR" id="fztpO]@!)|*c81-vAZ)P">list</field>
                </block>
            </value>
        </block>
        <block type="lists_split">
            <mutation mode="SPLIT"/>
            <field name="MODE">SPLIT</field>
            <value name="DELIM">
                <shadow type="text">
                    <field name="TEXT">,</field>
                </shadow>
            </value>
        </block>
        <block type="jg_lists_regex_list_of_matches_from_regex_on_text"/>
        <sep gap="32"/>
    </category>
    <category name="Colors" colour="#a5745b">
        <block type="colour_picker">
            <field name="COLOUR">#ff0000</field>
        </block>
        <block type="colour_random"/>
        <block type="fz_color"/>
        <block type="colour_rgb">
            <value name="RED">
                <shadow type="math_number">
                    <field name="NUM">100</field>
                </shadow>
            </value>
            <value name="GREEN">
                <shadow type="math_number">
                    <field name="NUM">50</field>
                </shadow>
            </value>
            <value name="BLUE">
                <shadow type="math_number">
                    <field name="NUM">0</field>
                </shadow>
            </value>
        </block>
        <block type="colour_blend">
            <value name="COLOUR1">
                <shadow type="colour_picker">
                    <field name="COLOUR">#ff0000</field>
                </shadow>
            </value>
            <value name="COLOUR2">
                <shadow type="colour_picker">
                    <field name="COLOUR">#3333ff</field>
                </shadow>
            </value>
            <value name="RATIO">
                <shadow type="math_number">
                    <field name="NUM">0.5</field>
                </shadow>
            </value>
        </block>
        <sep gap="32"/>
    </category>
    <sep class="bt"/>
    <category name="Variables" colour="#a55b80" custom="VARIABLE"/>
    <category name="Expanded Variables" colour="#9F5B93">
        <label text="Make global/local variables for functions and other stuff"/>
        <label text="Compatible with variables category"/>
        <block type="import_all">
            <value name="VAR">
                <shadow type="text">
                    <field name="TEXT"/>hey
                
                </shadow>
            </value>
        </block>
        <block type="express_var">
            <value name="VAR">
                <shadow type="text">
                    <field name="TEXT"/>hey
                
                </shadow>
            </value>
        </block>
        <block type="blank">
            <field name="TEXT"/>
        </block>
    </category>
    <category name="Functions" colour="#995ba5" custom="PROCEDURE"/>
    <category name="Collections" colour="#a354b3">
        <label text="Collections are able to hold data." web-class="boldtext"/>
        <label text="It's like a list, but you attach a key to the data." web-class="boldtext"/>
        <label text="You can then grab the data using the key later." web-class="boldtext"/>
        <block type="collections_create_new_collection"/>
        <block type="collections_set_to_key_in_collection">
            <value name="VALUE">
                <block type="math_number">
                    <field name="NUM">123</field>
                </block>
            </value>
            <value name="KEY">
                <block type="text">
                    <field name="TEXT">abc</field>
                </block>
            </value>
            <value name="MAP">
                <block type="variables_get">
                    <field name="VAR" id="7zZ!xZGl@QYX6kY719u(">collection</field>
                </block>
            </value>
        </block>
        <block type="collections_get_from_collection">
            <value name="KEY">
                <block type="text">
                    <field name="TEXT">abc</field>
                </block>
            </value>
            <value name="MAP">
                <block type="variables_get">
                    <field name="VAR" id="7zZ!xZGl@QYX6kY719u(">collection</field>
                </block>
            </value>
        </block>
        <block type="collections_remove_key_in_collection">
            <value name="KEY">
                <block type="text">
                    <field name="TEXT">abc</field>
                </block>
            </value>
            <value name="MAP">
                <block type="variables_get">
                    <field name="VAR" id="7zZ!xZGl@QYX6kY719u(">collection</field>
                </block>
            </value>
        </block>
        <block type="collections_clear_collection">
            <value name="MAP">
                <block type="variables_get">
                    <field name="VAR" id="7zZ!xZGl@QYX6kY719u(">collection</field>
                </block>
            </value>
        </block>
        <block type="collections_collection_has_key">
            <value name="KEY">
                <block type="text">
                    <field name="TEXT">abc</field>
                </block>
            </value>
            <value name="MAP">
                <block type="variables_get">
                    <field name="VAR" id="7zZ!xZGl@QYX6kY719u(">collection</field>
                </block>
            </value>
        </block>
        <block type="collections_size_of_collection">
            <value name="MAP">
                <block type="variables_get">
                    <field name="VAR" id="7zZ!xZGl@QYX6kY719u(">collection</field>
                </block>
            </value>
        </block>
        <label text="When storing a collection to a database, it gets converted." web-class="boldtext"/>
        <label text="This block can be used to bring it back to a usable collection." web-class="boldtext"/>
        <block type="jg_collections_convert_database_collection_to_collection">
            <value name="DBCOLLECT">
                <block type="s4d_get_data">
                    <value name="KEY">
                        <shadow type="text">
                            <field name="TEXT">collection</field>
                        </shadow>
                    </value>
                </block>
            </value>
        </block>
    </category>
    <category name="Buffers" colour="#AE4FA7">
        <label text="creating a buffer" web-class="boldtext"/>
        <block type="gsa_buffer_from_string">
            <value name="string">
                <block type="text">
                    <field name="TEXT">Hey!</field>
                </block>
            </value>
        </block>
        <block type="gsa_buffer_empty">
            <value name="number">
                <block type="math_number">
                    <field name="NUM">5</field>
                </block>
            </value>
            <value name="fill">
                <block type="math_number">
                    <field name="NUM">255</field>
                </block>
            </value>
        </block>
        <label text="interacting with a buffer" web-class="boldtext"/>
        <block type="gsa_string_from_buffer">
            <value name="string">
                <block type="variables_get" id="{b=P+v5fS/$g}b+*p|(Q">
                    <field name="VAR" id="/Z^RT(;uS$ADtFZ[?W]-">buffer</field>
                </block>
            </value>
        </block>
        <block type="gsa_buffer_index_of_string_number_or_buffer">
            <value name="buffer">
                <block type="variables_get" id="{b=P+v5fS/$g}b+*p|(Q">
                    <field name="VAR" id="/Z^RT(;uS$ADtFZ[?W]-">buffer</field>
                </block>
            </value>
            <value name="index">
                <block type="math_number">
                    <field name="NUM">255</field>
                </block>
            </value>
        </block>
        <block type="gsa_buffer_includes_string_or_buffer">
            <value name="buffer">
                <block type="variables_get" id="{b=P+v5fS/$g}b+*p|(Q">
                    <field name="VAR" id="/Z^RT(;uS$ADtFZ[?W]-">buffer</field>
                </block>
            </value>
            <value name="index">
                <block type="math_number">
                    <field name="NUM">255</field>
                </block>
            </value>
        </block>
        <block type="gsa_buffer_get_length">
            <value name="buffer">
                <block type="variables_get" id="{b=P+v5fS/$g}b+*p|(Q">
                    <field name="VAR" id="/Z^RT(;uS$ADtFZ[?W]-">buffer</field>
                </block>
            </value>
        </block>
        <block type="gsa_buffer_get_from_index">
            <value name="buffer">
                <block type="variables_get" id="{b=P+v5fS/$g}b+*p|(Q">
                    <field name="VAR" id="/Z^RT(;uS$ADtFZ[?W]-">buffer</field>
                </block>
            </value>
            <value name="index">
                <block type="math_number">
                    <field name="NUM">255</field>
                </block>
            </value>
        </block>
        <block type="gsa_buffer_set_from_index">
            <value name="buffer">
                <block type="variables_get" id="{b=P+v5fS/$g}b+*p|(Q">
                    <field name="VAR" id="/Z^RT(;uS$ADtFZ[?W]-">buffer</field>
                </block>
            </value>
            <value name="index">
                <block type="math_number">
                    <field name="NUM">1</field>
                </block>
            </value>
            <value name="value">
                <block type="math_number">
                    <field name="NUM">255</field>
                </block>
            </value>
        </block>
    </category>
    <category name="Objects" colour="#BA4A9A">
        <label text="Objects are similar to collections, but have more functionality." web-class="boldtext"/>
        <label text="They also don't get converted when saving into a database!" web-class="boldtext"/>
        <sep gap="32"/>
        <label text="Object creation" web-class="boldtext"/>
        <block type="gsa_new_object_creator_empty_search_moment_searchMoment"/>
        <block type="gsa_new_object_item_creator_empty_search_moment_searchMoment"/>
        <sep gap="32"/>
        <block type="jg_objects_create_new"/>
        <label text="Object stuff" web-class="boldtext"/>
        <block type="jg_objects_set_key_to_value_in_object">
            <value name="KEY">
                <shadow type="text">
                    <field name="TEXT">key</field>
                </shadow>
            </value>
            <value name="OBJECT">
                <block type="variables_get">
                    <field name="VAR" id="dtQDaO*89)ec9f]Aph7C">object</field>
                </block>
            </value>
        </block>
        <block type="jg_object_getvalue">
            <value name="value">
                <shadow type="text">
                    <field name="TEXT">key</field>
                </shadow>
            </value>
            <value name="object">
                <block type="variables_get">
                    <field name="VAR" id="dtQDaO*89)ec9f]Aph7C">object</field>
                </block>
            </value>
        </block>
        <block type="gsa_object_has_value_search_moment">
            <value name="value">
                <shadow type="text">
                    <field name="TEXT">key</field>
                </shadow>
            </value>
            <value name="object">
                <block type="variables_get">
                    <field name="VAR" id="dtQDaO*89)ec9f]Aph7C">object</field>
                </block>
            </value>
        </block>
        <block type="gsa_delete_object_search_moment_searchMoment">
            <value name="value">
                <shadow type="text">
                    <field name="TEXT">key</field>
                </shadow>
            </value>
            <value name="object">
                <block type="variables_get">
                    <field name="VAR" id="dtQDaO*89)ec9f]Aph7C">object</field>
                </block>
            </value>
        </block>
        <label text="For something like getting the amount of keys in an object..." web-class="boldtext"/>
        <block type="jg_objects_get_objects_key_names_in_list">
            <value name="OBJECT">
                <block type="variables_get">
                    <field name="VAR" id="dtQDaO*89)ec9f]Aph7C">object</field>
                </block>
            </value>
        </block>
        <label text="for working with json" web-class="boldtext"/>
        <block type="frost_json_to_string">
            <value name="STRING">
                <block type="variables_get">
                    <field name="VAR" id="dtQDaO*89)ec9f]Aph7C">object</field>
                </block>
            </value>
        </block>
        <block type="gsa_convert_parse_json_so_it_becomes_list_or_object">
            <value name="message">
                <shadow type="text">
                    <field name="TEXT">{ "example": "🐔" }</field>
                </shadow>
            </value>
        </block>
    </category>
    <category name="Others" colour="#D14081">
        <block type="s4d_print">
            <value name="PRINT">
                <block type="frost_other_err"/>
            </value>
        </block>
        <block type="s4d_clearconsole"/>
        <block type="s4d_run_save_output"/>
        <block type="s4d_wait_seconds">
            <value name="TIME">
                <shadow type="math_number">
                    <field name="NUM">2</field>
                </shadow>
            </value>
        </block>
        <block type="gsa_function_item_creator_empty_search_moment_searchMoment"/>
        <block type="gsa_function_item_runer">
            <mutation xmlns="http://www.w3.org/1999/xhtml" inputs="null" return="false"/>
        </block>
        <block type="blank_code">
            <field name="TEXT"/>
        </block>
        <block type="blank_code_output">
            <field name="TEXT"/>
        </block>
        <block type="blank_code_float">
            <field name="TEXT"/>
        </block>
        <block type="s4d_eval"/>
        <block type="s4d_eval2"/>
        <block type="s4d_exec"/>
        <block type="jg_other_try_catch_finally">
            <mutation xmlns="http://www.w3.org/1999/xhtml" iferror="true"/>
            <statement name="IFERROR">
                <block type="s4d_print">
                    <value name="PRINT">
                        <block type="frost_other_err"/>
                    </value>
                </block>
            </statement>
        </block>
        <block type="jg_s4d_other_throw_custom_error">
            <value name="ERROR">
                <block type="text"/>
            </value>
        </block>
        <block type="frost_other_err"/>
        <block type="s4d_return"/>
        <block type="jg_s4d_other_run_code_inside_file"/>
        <block type="is_a_number_or_string"/>
        <block type="s4d_string_to_number"/>
        <block type="frost_current"/>
        <block type="unix_to_date"/>
        <block type="get_in_date"/>
        <block type="date_to_unix"/>
        <block type="create_qr_then"/>
        <block type="qr"/>
        <block type="gsa_bypass_type"/>
        <block type="gsa_typeof"/>
        <block type="gsa_format_time"/>
    </category>
    <sep class="bt"/>
    <category name="javascript!">
        <label text="Please leave me alone" web-class="boldtext"/>
        <block type="s4g_consolelog">
        <value name="NAME">
                <shadow type="text">
                    <field name="TEXT">I like fire trucks and moster trucks</field>
                </shadow>
            </value></block>
            <block type="s4g_consoleerror">
        <value name="NAME">
                <shadow type="text">
                    <field name="TEXT">I like fire trucks and moster trucks</field>
                </shadow>
            </value></block>
            <block type="s4g_consolewarn">
        <value name="NAME">
                <shadow type="text">
                    <field name="TEXT">I like fire trucks and moster trucks</field>
                </shadow>
            </value></block>
        <sep gap="32"/>
    </category>
</xml>
`
}
