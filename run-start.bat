@ECHO OFF

CD /D %~dp0

::����ϵͳ����

SET "PATH=.\node_modules\.bin;%PATH%"
SET "PATH=%PATH%;D:\Software\PortableGit\bin"

::����Node����

IF EXIST D:\RunTime\node\runtime.bat (
    CALL D:\RunTime\node\runtime set "%~n0"
)

::����Python27����

IF EXIST D:\RunTime\python27\runtime.bat (
    CALL D:\RunTime\python27\runtime set "%~n0"
)

:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

::������Ŀ

CD /D %~dp0

CMD /C "npm install && npm run start"

IF "%1" == "" CMD /K
