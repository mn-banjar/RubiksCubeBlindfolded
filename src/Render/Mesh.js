/*
Rubik.js

Copyright (c) 2012 Théophile Wallez

This software is provided 'as-is', without any express or implied
warranty. In no event will the authors be held liable for any damages
arising from the use of this software.

Permission is granted to anyone to use this software for any purpose,
including commercial applications, and to alter it and redistribute it
freely, subject to the following restrictions:

    1. The origin of this software must not be misrepresented; you must not
    claim that you wrote the original software. If you use this software
    in a product, an acknowledgment in the product documentation would be
    appreciated but is not required.

    2. Altered source versions must be plainly marked as such, and must not be
    misrepresented as being the original software.

    3. This notice may not be removed or altered from any source
    distribution.
*/

Rubikjs.Render.Mesh = function() {
    this.transform = mat4.create();
    this.vertexBuffer = new Rubikjs.Render.Buffer();
    this.colorBuffer = new Rubikjs.Render.Buffer();
    this.indexBuffer = new Rubikjs.Render.Buffer();
};

Rubikjs.Render.Mesh.prototype.copy = function() {
    var newMesh = new Rubikjs.Render.Mesh();
    newMesh.transform = mat4.clone(this.transform);
    newMesh.vertexBuffer = this.vertexBuffer.copy();
    newMesh.colorBuffer = this.colorBuffer.copy();
    newMesh.indexBuffer = this.indexBuffer.copy();
    return newMesh;
}

