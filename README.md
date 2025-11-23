# **WorkSafe --- Sistema Integrado de Monitoramento Ergonômico e Saúde Ocupacional**


## **1. Introdução**

O **WorkSafe** é uma solução corporativa avançada desenvolvida para o
monitoramento contínuo de ergonomia, hábitos de trabalho e indicadores
de bem-estar de colaboradores em ambientes híbridos ou remotos.\
A plataforma integra **aplicativo mobile**, **serviços backend**,
**processamento de métricas em tempo real** e **funcionalidades de
prevenção ergonômica**, garantindo conformidade com boas práticas de
saúde ocupacional e alinhamento às diretrizes de produtividade e
segurança do trabalho.

------------------------------------------------------------------------

## **2. Objetivo Geral**

Oferecer aos colaboradores e setores de RH/SSO uma ferramenta robusta
para:

-   Monitorar riscos ergonômicos;
-   Registrar posturas inadequadas e tempo sentado prolongado;
-   Incentivar pausas e exercícios corretivos;
-   Consolidar métricas diárias, semanais e mensais;
-   Auxiliar na tomada de decisão estratégica relacionada à saúde
    ocupacional.

------------------------------------------------------------------------

## **3. Estrutura Geral do Aplicativo**

O WorkSafe é segmentado em quatro áreas principais, organizadas na barra
inferior de navegação:

------------------------------------------------------------------------

### **3.1. Dashboard (Métricas em Tempo Real)**

Tela dedicada ao acompanhamento imediato dos indicadores ergonômicos.

**Métricas exibidas:**

-   Tempo sentado acumulado\
-   Número total de pausas realizadas\
-   Alertas enviados durante o dia\
-   Alertas atendidos vs. ignorados\
-   Nível ergonômico diário\
-   Pontuação geral de bem-estar\
-   Histórico semanal e mensal

------------------------------------------------------------------------

### **3.2. Lembretes --- Sistema Inteligente de Alertas**

Os usuários podem configurar lembretes personalizados:

-   Pausas programadas\
-   Correção de postura\
-   Hidratação\
-   Intervalos visuais

------------------------------------------------------------------------

### **3.3. Métricas**

Os usuários podem configurar métricas personalizadas para conclusões futuras.

------------------------------------------------------------------------

### **3.4. Exercícios --- Educação Ergonômica**

O módulo de exercícios funciona como guia preventivo. Cada exercício
possui:

-   Descrição detalhada\
-   Tempo recomendado\
-   Ilustração ou instrução textual\
-   Status de conclusão\
-   Registro automático da métrica *"Exercícios concluídos"*

------------------------------------------------------------------------

### **3.5. Perfil --- Gestão de Identidade e Preferências**

O módulo de perfil abrange:

-   Informações pessoais\
-   Foto de usuário\
-   Preferências de ergonomia\
-   Metas diárias\
-   Gráficos evolutivos\
-   Histórico de alertas e exercícios

------------------------------------------------------------------------

## **4. Métricas Monitoradas (KPIs Internos)**

### **4.1. Métricas Ergonômicas**

-   Tempo sentado total\
-   Posturas incorretas registradas\
-   Alertas de postura enviados\
-   Taxa de resposta

### **4.2. Métricas de Saúde**

-   Exercícios realizados\
-   Pausas concluídas\
-   Tempo médio entre pausas

### **4.3. Métricas de Sistema**

-   CRUD\
-   Última sincronização\
-   Atualizações recentes

------------------------------------------------------------------------

## **5. CRUD da Aplicação**

O WorkSafe implementa operações completas:

-   **Create**
-   **Read**
-   **Update**
-   **Delete**

Todos através de APIs REST estruturadas.

------------------------------------------------------------------------

## **6. Arquitetura Técnica**

### **Backend**

-   Java / Spring Boot\
-   JPA / Hibernate\
-   Banco relacional\
-   REST

### **Frontend**

-   App mobile / protótipo navegável\
-   Comunicação via JSON


