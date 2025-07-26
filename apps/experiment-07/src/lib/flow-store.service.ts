import { Injectable } from '@angular/core';
import { Edge, Node } from 'ngx-vflow';
import { TableNode, TableNodeData } from '../components/table-node';

@Injectable()
export class FlowStoreService {
    readonly nodes: Node[] = [
        {
            id: '1',
            type: TableNode,
            point: { x: 800, y: 150 },
            data: {
                label: 'users',
                fields: [
                    { name: 'id', type: 'int', isPrimary: true },
                    { name: 'full_name', type: 'varchar' },
                    { name: 'email', type: 'varchar' },
                    { name: 'gender', type: 'varchar' },
                    { name: 'date_of_birth', type: 'date' },
                    { name: 'country_code', type: 'varchar', isForeign: true },
                    { name: 'created_at', type: 'timestamp' }
                ]
            } satisfies TableNodeData
        },
        {
            id: '2',
            type: TableNode,
            point: { x: 450, y: 183 },
            data: {
                label: 'orders',
                fields: [
                    { name: 'id', type: 'int', isPrimary: true },
                    { name: 'user_id', type: 'int', isForeign: true },
                    { name: 'status', type: 'varchar' },
                    { name: 'total_amount', type: 'decimal' },
                    { name: 'created_at', type: 'timestamp' }
                ]
            }
        },
        {
            id: '3',
            type: TableNode,
            point: { x: 100, y: 150 },
            data: {
                label: 'order_items',
                fields: [
                    { name: 'id', type: 'int', isPrimary: true },
                    { name: 'order_id', type: 'int', isForeign: true },
                    { name: 'product_id', type: 'int', isForeign: true },
                    { name: 'quantity', type: 'int' },
                    { name: 'unit_price', type: 'decimal' }
                ]
            }
        },
        {
            id: '4',
            type: TableNode,
            point: { x: 100, y: 460 },
            data: {
                label: 'products',
                fields: [
                    { name: 'id', type: 'int', isPrimary: true },
                    { name: 'merchant_id', type: 'int', isForeign: true },
                    { name: 'name', type: 'varchar' },
                    { name: 'description', type: 'text' },
                    { name: 'price', type: 'decimal' },
                    { name: 'status', type: 'varchar' },
                    { name: 'created_at', type: 'timestamp' }
                ]
            }
        },
        {
            id: '5',
            type: TableNode,
            point: { x: 450, y: 493 },
            data: {
                label: 'merchants',
                fields: [
                    { name: 'id', type: 'int', isPrimary: true },
                    { name: 'name', type: 'varchar' },
                    { name: 'email', type: 'varchar' },
                    { name: 'country_code', type: 'varchar', isForeign: true },
                    { name: 'created_at', type: 'timestamp' }
                ]
            }
        },
        {
            id: '6',
            point: { x: 800, y: 570 },
            type: TableNode,
            data: {
                label: 'countries',
                fields: [
                    { name: 'code', type: 'varchar', isPrimary: true },
                    { name: 'name', type: 'varchar' },
                    { name: 'continent_name', type: 'varchar' },
                    { name: 'currency', type: 'varchar' }
                ]
            } satisfies TableNodeData
        }
    ];

    readonly edges: Edge[] = [
        // User to Orders (one-to-many): users.id -> orders.user_id
        {
            id: '1 -> 2',
            source: '1',
            target: '2',
            curve: 'smooth-step'
        },
        // Orders to Order Items (one-to-many): orders.id -> order_items.order_id
        {
            id: '2 -> 3',
            source: '2',
            target: '3'
        },
        // Products to Order Items (one-to-many): products.id -> order_items.product_id
        {
            id: '4 -> 3',
            source: '4',
            target: '3'
        },
        // Merchants to Products (one-to-many): merchants.id -> products.merchant_id
        {
            id: '5 -> 4',
            source: '5',
            target: '4'
        },
        // Countries to Users (one-to-many): countries.code -> users.country_code
        {
            id: '6 -> 1',
            source: '6',
            target: '1'
        },
        // Countries to Merchants (one-to-many): countries.code -> merchants.country_code
        {
            id: '6 -> 5',
            source: '6',
            target: '5'
        }
    ];
}
