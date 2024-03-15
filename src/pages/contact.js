import React, { useState } from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="Contacto" description="Hello React Page">
        <section>
            <h2 id="contacto">Formulario de contactos</h2>

            <form method='post' action='/'>
                <fieldset>
                    <legend>Informacion personal</legend>
                    <label>Nombre:
                        <input
                            type="text" 
                            name="name"
                            placeholder="Luis Angel Lopez"
                            required>
                        </input>
                    </label>
                    <label>Email:
                        <input 
                            type="email" 
                            name="email"
                            placeholder="ejemplo@email.com"
                            required>
                        </input>
                    </label> 
                </fieldset>

                <fieldset>
                    <legend>Asunto</legend>
                    <label>Asunto:
                        <input  
                        type='text'
                        name="asunto"
                        placeholder="Escriba el asunto" required>
                        </input>
                    </label>
                </fieldset>

                <fieldset>
                    <legend>Informacion adicional</legend>
                    <label>Mensaje:
                        <textarea  
                        name="mensaje"
                        placeholder="Escriba su consulta u opinion." required>
                        </textarea>
                    </label>
                </fieldset>
                    
                <button>Enviar</button>
            </form>

        </section>
    </Layout>
  );
}