<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="1.0">
    
    <xsl:output method="html" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        
        <html>              
            <head>
                <title>Arquivos Sonoros Evo</title>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
            </head>
            
            <body>
                <hr/>
                
                <h1 align="center">
                    <b><font color="#dc3545">Arquivo Sonoro de Ernesto Veiga de Oliveira</font></b>
                </h1>

                
                <hr/>
                <ol>
                    <xsl:apply-templates/>
                </ol>
                <hr/>
            </body>
        </html>
                
        <xsl:apply-templates mode="individual" />
                
                
    </xsl:template>
    
    
    <xsl:template match="doc" mode="individual">
            <html>
                <head>
                    <title>>Arquivo Sonoro: Página Individual</title>
                    <meta charset="UTF-8" />
                </head>
                
                <body>
                    <h1><xsl:value-of select="tit"/></h1>
                    <table>
                        <tr>
                            <th>Provincia: </th> <td><xsl:value-of select="prov"/></td>
                        </tr>
                        <tr>
                            <th>Local: </th> <td><xsl:value-of select="local"/></td>
                        </tr>
                        <tr>
                            <th>Musico: </th> <td><xsl:value-of select="musico"/></td>
                        </tr>
                        <tr>
                            <th>Duração: </th> <td><xsl:value-of select="duracao"/></td>
                        </tr>
                    </table>
                    <hr width="40%"/>
                </body>
            </html>    
    </xsl:template>
    
</xsl:stylesheet>