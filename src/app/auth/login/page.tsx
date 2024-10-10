"use client";
import { useState } from "react"
import { Eye, EyeOff, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { signIn } from "next-auth/react";

export default function Component() {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => setShowPassword(!showPassword)

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-full max-w-md">
                <CardHeader className="space-y-1">
                    <div className="flex items-center justify-center mb-4">
                        <Lock className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-center">Banca Digital</CardTitle>
                    <CardDescription className="text-center">
                        Inicia sesión en tu cuenta bancaria
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">Nombre de usuario</Label>
                        <Input id="username" placeholder="Ingresa tu nombre de usuario" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Contraseña</Label>
                        <div className="relative">
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Ingresa tu contraseña"
                                required
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-1/2 -translate-y-1/2"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                <span className="sr-only">
                                    {showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                </span>
                            </Button>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-4">
                    <Button className="w-full">Iniciar sesión</Button>
                    <Button onClick={() => signIn("google")}>Iniciar sesión con Google</Button>
                    <div className="text-sm text-center text-gray-500">
                        <a href="#" className="underline text-primary hover:text-primary-dark">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}