/*
 * File: app/view/ui/FormPaths.js
 * Date: Wed Apr 11 2012 11:02:26 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.FormPaths', {
    extend: 'Ext.form.Panel',

    border: 0,
    id: 'contactinfo',
    bodyPadding: 10,
    bodyStyle: 'centerBody',
    title: '',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'textfield',
                    name: 'contact',
                    fieldLabel: 'istSOS lib',
                    anchor: '100%'
                },
                {
                    xtype: 'textfield',
                    name: 'organization',
                    fieldLabel: 'istSOS config',
                    anchor: '100%'
                }
            ]
        });

        me.callParent(arguments);
    }
});