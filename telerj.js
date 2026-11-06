window.telerjData = [

="{""id"": """ & L2 & """, ""title"": """ & H2 & """, ""serie"": ""Série " & D2 & """, ""ref"": """ & L2 & """, ""operator"": """ & D$1 & """, ""price"": " & SUBSTITUIR(TEXTO(J2; "0,00"); ","; ".") & ", ""image"": ""fotos/" & MINÚSCULA(D$1) & "/" & L2 & ".jpg""},"

];