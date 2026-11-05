@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion
cd /d "%~dp0"

for %%f in (*AV*.jpg) do (
    set "nome=%%f"
    REM Substitui padroes como AV01 por AV.01, AV02 por AV.02, etc.
    for /L %%i in (0,1,9) do (
        for /L %%j in (0,1,9) do (
            set "nome=!nome:AV%%i%%j=AV.%%i%%j!"
        )
    )
    if not "%%f"=="!nome!" (
        ren "%%f" "!nome!"
    )
)

echo Renomeacao em massa concluida com sucesso!
pause