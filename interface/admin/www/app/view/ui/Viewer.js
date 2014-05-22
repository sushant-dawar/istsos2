/*
 * File: app/view/ui/Viewer.js
 * Date: Thu May 22 2014 15:17:28 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.Viewer', {
    extend: 'Ext.container.Viewport',
    requires: [
        'istsos.view.ProcedureChart',
        'istsos.view.ProcedureGrid',
        'istsos.view.ProcedureChooser'
    ],

    border: 0,
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    border: 0,
                    layout: {
                        type: 'border'
                    },
                    title: '',
                    region: 'center',
                    items: [
                        {
                            xtype: 'procedurechart',
                            region: 'center',
                            id: 'chartpanel'
                        },
                        {
                            xtype: 'panel',
                            height: 250,
                            layout: {
                                type: 'fit'
                            },
                            collapsible: true,
                            title: 'Grid',
                            region: 'south',
                            split: true,
                            items: [
                                {
                                    xtype: 'proceduregrid',
                                    id: 'gridpanel'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    border: 0,
                    height: 25,
                    html: '<a style=\'color: white; text-decoration: none;\' href=\'http://www.supsi.ch/ist\' target=\'_BLANK\'>Open Source Software by Institute of Earth Science - SUPSI</a>',
                    id: 'mainFoot',
                    bodyCls: 'mainFooter',
                    bodyPadding: 8,
                    title: '',
                    region: 'south'
                },
                {
                    xtype: 'panel',
                    width: 300,
                    layout: {
                        type: 'fit'
                    },
                    title: '',
                    region: 'west',
                    items: [
                        {
                            xtype: 'procedurechooser',
                            border: 0,
                            id: 'pchoose'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});