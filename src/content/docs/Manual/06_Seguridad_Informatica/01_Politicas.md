---
title: Políticas de seguridad acceso físico y lógico.
description: Manual de Organización de Centros de Cómputo
---

Un sistema de control de acceso físico (PAC) permite a las organizaciones controlar quién entra en un espacio físico. Las puertas y cerraduras tradicionales son la forma más básica de un sistema de control de acceso físico, pero los sistemas de control de acceso físico de nivel empresarial van mucho más allá. Se implementan varias medidas de seguridad para reducir el riesgo de que usuarios no autorizados accedan a datos y otros recursos del centro de datos.

- *Seguridad perimetral:* los centros de datos de Microsoft son edificios no delimitados con barrera perimetral y iluminación exterior las 24 horas. Las cercas altas de acero y hormigón abarcan cada pulgada del perímetro y toda la entrada al campus del centro de datos debe pasar por un punto de acceso bien definido. Las puertas de entrada se encuentran vigiladas por cámaras y las patrullas de seguridad garantizan que la entrada y salida queden restringidas a las áreas designadas. Los bolardos y otras medidas protegen el exterior del centro de datos frente a posibles amenazas, incluido el acceso no autorizado.

- *Entrada al centro de datos:* la entrada del centro de datos está atendida por oficiales de seguridad profesionales que se han sometido a rigurosas comprobaciones de formación y antecedentes. Los agentes de seguridad patrullan habitualmente el centro de datos y las fuentes de vídeo de las cámaras dentro del centro de datos siempre se supervisan.

- *Dentro del centro de datos:* al entrar en el edificio, se requiere la autenticación en dos fases con biometría para continuar avanzando por el centro de datos. Una vez autenticado, el acceso se concede a la parte autorizada del centro de datos y solo durante el tiempo aprobado. Dentro del centro de datos, las áreas designadas como altamente confidenciales requieren autenticación adicional en dos fases.

- *Planta del centro de datos:* solo se puede acceder a la planta del centro de datos con aprobación previa y después de un cribado de detección de metal corporal completo en el momento de la entrada. Para reducir el riesgo de que los datos no autorizados entren o salgan del centro de datos, solo los dispositivos aprobados pueden acceder al centro de datos. Además, las cámaras de vídeo supervisan el frente y la parte posterior de cada bastidor del servidor. Al salir de la planta del centro de datos, todas las personas están sujetas a una detección de metal corporal completa adicional.

- *Salir del centro de datos:* para salir de la instalación del centro de datos, cada persona debe pasar por un punto de control de seguridad final y todos los visitantes deben entregar sus distintivos temporales. Después de la recopilación, todos los distintivos de visitante tienen sus niveles de acceso eliminados antes de que se reutilicen para futuras visitas.

[acceso_fisico](https://manualcc.eloychavez.dev/acceso_fisico.jpg)


### Acceso Lógico

Es la restricción de acceso a los datos. Esto se logra mediante técnicas de ciberseguridad como identificación, autenticación y autorización. En su forma más sencilla, el control de acceso implica la identificación de un usuario en función de sus credenciales y, después, la autorización del nivel de acceso adecuado una vez autenticado.

Contraseñas, PIN, tokens de seguridad (e incluso escaneos biométricos) son credenciales que se utilizan comúnmente para identificar y autenticar a un usuario. La autenticación multifactor (MFA) agrega otra capa de seguridad al requerir que los usuarios sean verificados mediante más de un solo método de verificación. Una vez que se ha autenticado la identidad de un usuario, las directivas de control de acceso otorgan permisos específicos y permiten al usuario proceder como desea. Hay cuatro tipos principales de control de acceso y cada uno administra el acceso a la información confidencial de manera única.

- *Control de acceso discrecional (DAC):* En los modelos DAC, todo objeto de un sistema protegido tiene un propietario, y los propietarios conceden acceso a los usuarios a su discreción. DAC proporciona control caso por caso sobre los recursos.

- *Control de acceso obligatorio (MAC):* En los modelos MAC, a los usuarios se les concede acceso en forma de autorización. Una autoridad central regula los derechos de acceso y los organiza en niveles que se expanden de manera uniforme dentro del ámbito. Este modelo es muy habitual en contextos gubernamentales y militares.

- *Control de acceso basado en roles (RBAC):* En los modelos RBAC, los derechos de acceso se conceden de acuerdo con funciones empresariales definidas, en lugar de basarse en la identidad o antigüedad de las personas. El objetivo es proporcionar a los usuarios únicamente los datos que necesitan para realizar su trabajo y nada más.

- *Control de acceso basado en atributos (ABAC):* En los modelos ABAC, el acceso se concede de manera flexible, a partir de una combinación de atributos y condiciones del entorno, como la hora y la ubicación. ABAC es el modelo de control de acceso más granular y ayuda a reducir el número de asignaciones de roles.

[acceso_logico](https://manualcc.eloychavez.dev/acceso_logico.jpg)