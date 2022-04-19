import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  private connection: any

  constructor() {

  }

  private async connect() {
    this.connection.connect();

    const { Pool } = require('pg');

    const pool = new Pool({
      database: 'postgres',
      password: 'postgres',
      port: 5432,
    });

    const client = await pool.connect();
    console.log('connected to db');

    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();

    // guardando para usar o mesmo
    this.connection = pool;
    return pool.connect();

  }

  private async selectCustomers() {
    const client = await this.connect();
    const res = await client.query('SELECT * FROM clientes');
    return res.rows;
  }

  // module.exports = { selectCustomers }
}
