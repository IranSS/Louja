# configurando java e caminho
$Env:JAVA_HOME = "C:\Program Files\Java\jdk-17"
$Env:Path = "$Env:JAVA_HOME\bin;$Env:Path"

# Rodar backend
cd backend\ 
.\mvnw spring-boot:run