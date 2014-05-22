/*
 * File: app/store/serverstatus.js
 * Date: Thu May 22 2014 15:17:28 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.store.serverstatus', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'serverstatus',
            proxy: {
                type: 'ajax',
                reader: {
                    type: 'json',
                    idProperty: 'service',
                    messageProperty: 'message',
                    root: 'data'
                }
            },
            fields: [
                {
                    name: 'getcapabilities',
                    type: 'boolean'
                },
                {
                    name: 'featuresOfInterest',
                    type: 'int'
                },
                {
                    name: 'describesensor',
                    type: 'boolean'
                },
                {
                    name: 'getobservation',
                    type: 'boolean'
                },
                {
                    name: 'service',
                    type: 'string'
                },
                {
                    name: 'database',
                    type: 'string'
                },
                {
                    name: 'availability',
                    type: 'string'
                },
                {
                    name: 'offerings',
                    type: 'int'
                },
                {
                    name: 'getfeatureofinterest',
                    type: 'boolean'
                },
                {
                    name: 'registersensor',
                    type: 'boolean'
                },
                {
                    name: 'procedures',
                    type: 'int'
                },
                {
                    name: 'observedProperties',
                    type: 'int'
                },
                {
                    name: 'insertobservation',
                    type: 'boolean'
                }
            ]
        }, cfg)]);
    }
});