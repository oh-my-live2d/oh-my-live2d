import {
  __commonJS,
  __export,
  __toESM
} from "./chunk-ZS7NZCD4.js";

// node_modules/.pnpm/eventemitter3@3.1.2/node_modules/eventemitter3/index.js
var require_eventemitter3 = __commonJS({
  "node_modules/.pnpm/eventemitter3@3.1.2/node_modules/eventemitter3/index.js"(exports, module) {
    "use strict";
    var has = Object.prototype.hasOwnProperty;
    var prefix = "~";
    function Events() {
    }
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__)
        prefix = false;
    }
    function EE(fn, context2, once) {
      this.fn = fn;
      this.context = context2;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context2, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context2 || emitter, once), evt = prefix ? prefix + event : event;
      if (!emitter._events[evt])
        emitter._events[evt] = listener, emitter._eventsCount++;
      else if (!emitter._events[evt].fn)
        emitter._events[evt].push(listener);
      else
        emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0)
        emitter._events = new Events();
      else
        delete emitter._events[evt];
    }
    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      var names = [], events, name;
      if (this._eventsCount === 0)
        return names;
      for (name in events = this._events) {
        if (has.call(events, name))
          names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }
      return names;
    };
    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event, handlers = this._events[evt];
      if (!handlers)
        return [];
      if (handlers.fn)
        return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event, listeners = this._events[evt];
      if (!listeners)
        return 0;
      if (listeners.fn)
        return 1;
      return listeners.length;
    };
    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return false;
      var listeners = this._events[evt], len = arguments.length, args, i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;
          case 2:
            return listeners.fn.call(listeners.context, a1), true;
          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;
          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;
          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length, j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter.prototype.on = function on(event, fn, context2) {
      return addListener(this, event, fn, context2, false);
    };
    EventEmitter.prototype.once = function once(event, fn, context2) {
      return addListener(this, event, fn, context2, true);
    };
    EventEmitter.prototype.removeListener = function removeListener(event, fn, context2, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt])
        return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context2 || listeners.context === context2)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context2 && listeners[i].context !== context2) {
            events.push(listeners[i]);
          }
        }
        if (events.length)
          this._events[evt] = events.length === 1 ? events[0] : events;
        else
          clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt])
          clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prefixed = prefix;
    EventEmitter.EventEmitter = EventEmitter;
    if ("undefined" !== typeof module) {
      module.exports = EventEmitter;
    }
  }
});

// node_modules/.pnpm/earcut@2.2.4/node_modules/earcut/src/earcut.js
var require_earcut = __commonJS({
  "node_modules/.pnpm/earcut@2.2.4/node_modules/earcut/src/earcut.js"(exports, module) {
    "use strict";
    module.exports = earcut;
    module.exports.default = earcut;
    function earcut(data, holeIndices, dim) {
      dim = dim || 2;
      var hasHoles = holeIndices && holeIndices.length, outerLen = hasHoles ? holeIndices[0] * dim : data.length, outerNode = linkedList(data, 0, outerLen, dim, true), triangles = [];
      if (!outerNode || outerNode.next === outerNode.prev)
        return triangles;
      var minX, minY, maxX, maxY, x, y, invSize;
      if (hasHoles)
        outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
      if (data.length > 80 * dim) {
        minX = maxX = data[0];
        minY = maxY = data[1];
        for (var i = dim; i < outerLen; i += dim) {
          x = data[i];
          y = data[i + 1];
          if (x < minX)
            minX = x;
          if (y < minY)
            minY = y;
          if (x > maxX)
            maxX = x;
          if (y > maxY)
            maxY = y;
        }
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 32767 / invSize : 0;
      }
      earcutLinked(outerNode, triangles, dim, minX, minY, invSize, 0);
      return triangles;
    }
    function linkedList(data, start, end, dim, clockwise) {
      var i, last;
      if (clockwise === signedArea(data, start, end, dim) > 0) {
        for (i = start; i < end; i += dim)
          last = insertNode(i, data[i], data[i + 1], last);
      } else {
        for (i = end - dim; i >= start; i -= dim)
          last = insertNode(i, data[i], data[i + 1], last);
      }
      if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
      }
      return last;
    }
    function filterPoints(start, end) {
      if (!start)
        return start;
      if (!end)
        end = start;
      var p = start, again;
      do {
        again = false;
        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
          removeNode(p);
          p = end = p.prev;
          if (p === p.next)
            break;
          again = true;
        } else {
          p = p.next;
        }
      } while (again || p !== end);
      return end;
    }
    function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
      if (!ear)
        return;
      if (!pass && invSize)
        indexCurve(ear, minX, minY, invSize);
      var stop = ear, prev, next;
      while (ear.prev !== ear.next) {
        prev = ear.prev;
        next = ear.next;
        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
          triangles.push(prev.i / dim | 0);
          triangles.push(ear.i / dim | 0);
          triangles.push(next.i / dim | 0);
          removeNode(ear);
          ear = next.next;
          stop = next.next;
          continue;
        }
        ear = next;
        if (ear === stop) {
          if (!pass) {
            earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
          } else if (pass === 1) {
            ear = cureLocalIntersections(filterPoints(ear), triangles, dim);
            earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
          } else if (pass === 2) {
            splitEarcut(ear, triangles, dim, minX, minY, invSize);
          }
          break;
        }
      }
    }
    function isEar(ear) {
      var a = ear.prev, b = ear, c = ear.next;
      if (area(a, b, c) >= 0)
        return false;
      var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;
      var x0 = ax < bx ? ax < cx ? ax : cx : bx < cx ? bx : cx, y0 = ay < by ? ay < cy ? ay : cy : by < cy ? by : cy, x1 = ax > bx ? ax > cx ? ax : cx : bx > cx ? bx : cx, y1 = ay > by ? ay > cy ? ay : cy : by > cy ? by : cy;
      var p = c.next;
      while (p !== a) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0)
          return false;
        p = p.next;
      }
      return true;
    }
    function isEarHashed(ear, minX, minY, invSize) {
      var a = ear.prev, b = ear, c = ear.next;
      if (area(a, b, c) >= 0)
        return false;
      var ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;
      var x0 = ax < bx ? ax < cx ? ax : cx : bx < cx ? bx : cx, y0 = ay < by ? ay < cy ? ay : cy : by < cy ? by : cy, x1 = ax > bx ? ax > cx ? ax : cx : bx > cx ? bx : cx, y1 = ay > by ? ay > cy ? ay : cy : by > cy ? by : cy;
      var minZ = zOrder(x0, y0, minX, minY, invSize), maxZ = zOrder(x1, y1, minX, minY, invSize);
      var p = ear.prevZ, n = ear.nextZ;
      while (p && p.z >= minZ && n && n.z <= maxZ) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0)
          return false;
        p = p.prevZ;
        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c && pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0)
          return false;
        n = n.nextZ;
      }
      while (p && p.z >= minZ) {
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0)
          return false;
        p = p.prevZ;
      }
      while (n && n.z <= maxZ) {
        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c && pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0)
          return false;
        n = n.nextZ;
      }
      return true;
    }
    function cureLocalIntersections(start, triangles, dim) {
      var p = start;
      do {
        var a = p.prev, b = p.next.next;
        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
          triangles.push(a.i / dim | 0);
          triangles.push(p.i / dim | 0);
          triangles.push(b.i / dim | 0);
          removeNode(p);
          removeNode(p.next);
          p = start = b;
        }
        p = p.next;
      } while (p !== start);
      return filterPoints(p);
    }
    function splitEarcut(start, triangles, dim, minX, minY, invSize) {
      var a = start;
      do {
        var b = a.next.next;
        while (b !== a.prev) {
          if (a.i !== b.i && isValidDiagonal(a, b)) {
            var c = splitPolygon(a, b);
            a = filterPoints(a, a.next);
            c = filterPoints(c, c.next);
            earcutLinked(a, triangles, dim, minX, minY, invSize, 0);
            earcutLinked(c, triangles, dim, minX, minY, invSize, 0);
            return;
          }
          b = b.next;
        }
        a = a.next;
      } while (a !== start);
    }
    function eliminateHoles(data, holeIndices, outerNode, dim) {
      var queue = [], i, len, start, end, list;
      for (i = 0, len = holeIndices.length; i < len; i++) {
        start = holeIndices[i] * dim;
        end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        list = linkedList(data, start, end, dim, false);
        if (list === list.next)
          list.steiner = true;
        queue.push(getLeftmost(list));
      }
      queue.sort(compareX);
      for (i = 0; i < queue.length; i++) {
        outerNode = eliminateHole(queue[i], outerNode);
      }
      return outerNode;
    }
    function compareX(a, b) {
      return a.x - b.x;
    }
    function eliminateHole(hole, outerNode) {
      var bridge = findHoleBridge(hole, outerNode);
      if (!bridge) {
        return outerNode;
      }
      var bridgeReverse = splitPolygon(bridge, hole);
      filterPoints(bridgeReverse, bridgeReverse.next);
      return filterPoints(bridge, bridge.next);
    }
    function findHoleBridge(hole, outerNode) {
      var p = outerNode, hx = hole.x, hy = hole.y, qx = -Infinity, m;
      do {
        if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
          var x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
          if (x <= hx && x > qx) {
            qx = x;
            m = p.x < p.next.x ? p : p.next;
            if (x === hx)
              return m;
          }
        }
        p = p.next;
      } while (p !== outerNode);
      if (!m)
        return null;
      var stop = m, mx = m.x, my = m.y, tanMin = Infinity, tan2;
      p = m;
      do {
        if (hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
          tan2 = Math.abs(hy - p.y) / (hx - p.x);
          if (locallyInside(p, hole) && (tan2 < tanMin || tan2 === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
            m = p;
            tanMin = tan2;
          }
        }
        p = p.next;
      } while (p !== stop);
      return m;
    }
    function sectorContainsSector(m, p) {
      return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
    }
    function indexCurve(start, minX, minY, invSize) {
      var p = start;
      do {
        if (p.z === 0)
          p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
      } while (p !== start);
      p.prevZ.nextZ = null;
      p.prevZ = null;
      sortLinked(p);
    }
    function sortLinked(list) {
      var i, p, q, e, tail, numMerges, pSize, qSize, inSize = 1;
      do {
        p = list;
        list = null;
        tail = null;
        numMerges = 0;
        while (p) {
          numMerges++;
          q = p;
          pSize = 0;
          for (i = 0; i < inSize; i++) {
            pSize++;
            q = q.nextZ;
            if (!q)
              break;
          }
          qSize = inSize;
          while (pSize > 0 || qSize > 0 && q) {
            if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
              e = p;
              p = p.nextZ;
              pSize--;
            } else {
              e = q;
              q = q.nextZ;
              qSize--;
            }
            if (tail)
              tail.nextZ = e;
            else
              list = e;
            e.prevZ = tail;
            tail = e;
          }
          p = q;
        }
        tail.nextZ = null;
        inSize *= 2;
      } while (numMerges > 1);
      return list;
    }
    function zOrder(x, y, minX, minY, invSize) {
      x = (x - minX) * invSize | 0;
      y = (y - minY) * invSize | 0;
      x = (x | x << 8) & 16711935;
      x = (x | x << 4) & 252645135;
      x = (x | x << 2) & 858993459;
      x = (x | x << 1) & 1431655765;
      y = (y | y << 8) & 16711935;
      y = (y | y << 4) & 252645135;
      y = (y | y << 2) & 858993459;
      y = (y | y << 1) & 1431655765;
      return x | y << 1;
    }
    function getLeftmost(start) {
      var p = start, leftmost = start;
      do {
        if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y)
          leftmost = p;
        p = p.next;
      } while (p !== start);
      return leftmost;
    }
    function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
      return (cx - px) * (ay - py) >= (ax - px) * (cy - py) && (ax - px) * (by - py) >= (bx - px) * (ay - py) && (bx - px) * (cy - py) >= (cx - px) * (by - py);
    }
    function isValidDiagonal(a, b) {
      return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // dones't intersect other edges
      (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
      (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
      equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0);
    }
    function area(p, q, r) {
      return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
    }
    function equals(p1, p2) {
      return p1.x === p2.x && p1.y === p2.y;
    }
    function intersects(p1, q1, p2, q2) {
      var o1 = sign2(area(p1, q1, p2));
      var o2 = sign2(area(p1, q1, q2));
      var o3 = sign2(area(p2, q2, p1));
      var o4 = sign2(area(p2, q2, q1));
      if (o1 !== o2 && o3 !== o4)
        return true;
      if (o1 === 0 && onSegment(p1, p2, q1))
        return true;
      if (o2 === 0 && onSegment(p1, q2, q1))
        return true;
      if (o3 === 0 && onSegment(p2, p1, q2))
        return true;
      if (o4 === 0 && onSegment(p2, q1, q2))
        return true;
      return false;
    }
    function onSegment(p, q, r) {
      return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
    }
    function sign2(num) {
      return num > 0 ? 1 : num < 0 ? -1 : 0;
    }
    function intersectsPolygon(a, b) {
      var p = a;
      do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b))
          return true;
        p = p.next;
      } while (p !== a);
      return false;
    }
    function locallyInside(a, b) {
      return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
    }
    function middleInside(a, b) {
      var p = a, inside = false, px = (a.x + b.x) / 2, py = (a.y + b.y) / 2;
      do {
        if (p.y > py !== p.next.y > py && p.next.y !== p.y && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x)
          inside = !inside;
        p = p.next;
      } while (p !== a);
      return inside;
    }
    function splitPolygon(a, b) {
      var a2 = new Node(a.i, a.x, a.y), b2 = new Node(b.i, b.x, b.y), an = a.next, bp = b.prev;
      a.next = b;
      b.prev = a;
      a2.next = an;
      an.prev = a2;
      b2.next = a2;
      a2.prev = b2;
      bp.next = b2;
      b2.prev = bp;
      return b2;
    }
    function insertNode(i, x, y, last) {
      var p = new Node(i, x, y);
      if (!last) {
        p.prev = p;
        p.next = p;
      } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
      }
      return p;
    }
    function removeNode(p) {
      p.next.prev = p.prev;
      p.prev.next = p.next;
      if (p.prevZ)
        p.prevZ.nextZ = p.nextZ;
      if (p.nextZ)
        p.nextZ.prevZ = p.prevZ;
    }
    function Node(i, x, y) {
      this.i = i;
      this.x = x;
      this.y = y;
      this.prev = null;
      this.next = null;
      this.z = 0;
      this.prevZ = null;
      this.nextZ = null;
      this.steiner = false;
    }
    earcut.deviation = function(data, holeIndices, dim, triangles) {
      var hasHoles = holeIndices && holeIndices.length;
      var outerLen = hasHoles ? holeIndices[0] * dim : data.length;
      var polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
      if (hasHoles) {
        for (var i = 0, len = holeIndices.length; i < len; i++) {
          var start = holeIndices[i] * dim;
          var end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
          polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
      }
      var trianglesArea = 0;
      for (i = 0; i < triangles.length; i += 3) {
        var a = triangles[i] * dim;
        var b = triangles[i + 1] * dim;
        var c = triangles[i + 2] * dim;
        trianglesArea += Math.abs(
          (data[a] - data[c]) * (data[b + 1] - data[a + 1]) - (data[a] - data[b]) * (data[c + 1] - data[a + 1])
        );
      }
      return polygonArea === 0 && trianglesArea === 0 ? 0 : Math.abs((trianglesArea - polygonArea) / polygonArea);
    };
    function signedArea(data, start, end, dim) {
      var sum = 0;
      for (var i = start, j = end - dim; i < end; i += dim) {
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
      }
      return sum;
    }
    earcut.flatten = function(data) {
      var dim = data[0][0].length, result = { vertices: [], holes: [], dimensions: dim }, holeIndex = 0;
      for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].length; j++) {
          for (var d = 0; d < dim; d++)
            result.vertices.push(data[i][j][d]);
        }
        if (i > 0) {
          holeIndex += data[i - 1].length;
          result.holes.push(holeIndex);
        }
      }
      return result;
    };
  }
});

// node_modules/.pnpm/punycode@1.3.2/node_modules/punycode/punycode.js
var require_punycode = __commonJS({
  "node_modules/.pnpm/punycode@1.3.2/node_modules/punycode/punycode.js"(exports, module) {
    (function(root) {
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = typeof module == "object" && module && !module.nodeType && module;
      var freeGlobal = typeof global == "object" && global;
      if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
        root = freeGlobal;
      }
      var punycode, maxInt = 2147483647, base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = "-", regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, errors = {
        "overflow": "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
      }, baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, key;
      function error(type) {
        throw RangeError(errors[type]);
      }
      function map3(array, fn) {
        var length = array.length;
        var result = [];
        while (length--) {
          result[length] = fn(array[length]);
        }
        return result;
      }
      function mapDomain(string, fn) {
        var parts = string.split("@");
        var result = "";
        if (parts.length > 1) {
          result = parts[0] + "@";
          string = parts[1];
        }
        string = string.replace(regexSeparators, ".");
        var labels = string.split(".");
        var encoded = map3(labels, fn).join(".");
        return result + encoded;
      }
      function ucs2decode(string) {
        var output = [], counter = 0, length = string.length, value, extra;
        while (counter < length) {
          value = string.charCodeAt(counter++);
          if (value >= 55296 && value <= 56319 && counter < length) {
            extra = string.charCodeAt(counter++);
            if ((extra & 64512) == 56320) {
              output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
            } else {
              output.push(value);
              counter--;
            }
          } else {
            output.push(value);
          }
        }
        return output;
      }
      function ucs2encode(array) {
        return map3(array, function(value) {
          var output = "";
          if (value > 65535) {
            value -= 65536;
            output += stringFromCharCode(value >>> 10 & 1023 | 55296);
            value = 56320 | value & 1023;
          }
          output += stringFromCharCode(value);
          return output;
        }).join("");
      }
      function basicToDigit(codePoint) {
        if (codePoint - 48 < 10) {
          return codePoint - 22;
        }
        if (codePoint - 65 < 26) {
          return codePoint - 65;
        }
        if (codePoint - 97 < 26) {
          return codePoint - 97;
        }
        return base;
      }
      function digitToBasic(digit, flag) {
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
      }
      function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for (; delta > baseMinusTMin * tMax >> 1; k += base) {
          delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
      }
      function decode(input) {
        var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index, oldi, w, k, digit, t, baseMinusT;
        basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
          basic = 0;
        }
        for (j = 0; j < basic; ++j) {
          if (input.charCodeAt(j) >= 128) {
            error("not-basic");
          }
          output.push(input.charCodeAt(j));
        }
        for (index = basic > 0 ? basic + 1 : 0; index < inputLength; ) {
          for (oldi = i, w = 1, k = base; ; k += base) {
            if (index >= inputLength) {
              error("invalid-input");
            }
            digit = basicToDigit(input.charCodeAt(index++));
            if (digit >= base || digit > floor((maxInt - i) / w)) {
              error("overflow");
            }
            i += digit * w;
            t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (digit < t) {
              break;
            }
            baseMinusT = base - t;
            if (w > floor(maxInt / baseMinusT)) {
              error("overflow");
            }
            w *= baseMinusT;
          }
          out = output.length + 1;
          bias = adapt(i - oldi, out, oldi == 0);
          if (floor(i / out) > maxInt - n) {
            error("overflow");
          }
          n += floor(i / out);
          i %= out;
          output.splice(i++, 0, n);
        }
        return ucs2encode(output);
      }
      function encode(input) {
        var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], inputLength, handledCPCountPlusOne, baseMinusT, qMinusT;
        input = ucs2decode(input);
        inputLength = input.length;
        n = initialN;
        delta = 0;
        bias = initialBias;
        for (j = 0; j < inputLength; ++j) {
          currentValue = input[j];
          if (currentValue < 128) {
            output.push(stringFromCharCode(currentValue));
          }
        }
        handledCPCount = basicLength = output.length;
        if (basicLength) {
          output.push(delimiter);
        }
        while (handledCPCount < inputLength) {
          for (m = maxInt, j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue >= n && currentValue < m) {
              m = currentValue;
            }
          }
          handledCPCountPlusOne = handledCPCount + 1;
          if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
            error("overflow");
          }
          delta += (m - n) * handledCPCountPlusOne;
          n = m;
          for (j = 0; j < inputLength; ++j) {
            currentValue = input[j];
            if (currentValue < n && ++delta > maxInt) {
              error("overflow");
            }
            if (currentValue == n) {
              for (q = delta, k = base; ; k += base) {
                t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (q < t) {
                  break;
                }
                qMinusT = q - t;
                baseMinusT = base - t;
                output.push(
                  stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
                );
                q = floor(qMinusT / baseMinusT);
              }
              output.push(stringFromCharCode(digitToBasic(q, 0)));
              bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
              delta = 0;
              ++handledCPCount;
            }
          }
          ++delta;
          ++n;
        }
        return output.join("");
      }
      function toUnicode(input) {
        return mapDomain(input, function(string) {
          return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
      }
      function toASCII(input) {
        return mapDomain(input, function(string) {
          return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
        });
      }
      punycode = {
        /**
         * A string representing the current Punycode.js version number.
         * @memberOf punycode
         * @type String
         */
        "version": "1.3.2",
        /**
         * An object of methods to convert from JavaScript's internal character
         * representation (UCS-2) to Unicode code points, and back.
         * @see <https://mathiasbynens.be/notes/javascript-encoding>
         * @memberOf punycode
         * @type Object
         */
        "ucs2": {
          "decode": ucs2decode,
          "encode": ucs2encode
        },
        "decode": decode,
        "encode": encode,
        "toASCII": toASCII,
        "toUnicode": toUnicode
      };
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        define("punycode", function() {
          return punycode;
        });
      } else if (freeExports && freeModule) {
        if (module.exports == freeExports) {
          freeModule.exports = punycode;
        } else {
          for (key in punycode) {
            punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
          }
        }
      } else {
        root.punycode = punycode;
      }
    })(exports);
  }
});

// node_modules/.pnpm/url@0.11.0/node_modules/url/util.js
var require_util = __commonJS({
  "node_modules/.pnpm/url@0.11.0/node_modules/url/util.js"(exports, module) {
    "use strict";
    module.exports = {
      isString: function(arg) {
        return typeof arg === "string";
      },
      isObject: function(arg) {
        return typeof arg === "object" && arg !== null;
      },
      isNull: function(arg) {
        return arg === null;
      },
      isNullOrUndefined: function(arg) {
        return arg == null;
      }
    };
  }
});

// node_modules/.pnpm/querystring@0.2.0/node_modules/querystring/decode.js
var require_decode = __commonJS({
  "node_modules/.pnpm/querystring@0.2.0/node_modules/querystring/decode.js"(exports, module) {
    "use strict";
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }
    module.exports = function(qs, sep, eq, options) {
      sep = sep || "&";
      eq = eq || "=";
      var obj = {};
      if (typeof qs !== "string" || qs.length === 0) {
        return obj;
      }
      var regexp = /\+/g;
      qs = qs.split(sep);
      var maxKeys = 1e3;
      if (options && typeof options.maxKeys === "number") {
        maxKeys = options.maxKeys;
      }
      var len = qs.length;
      if (maxKeys > 0 && len > maxKeys) {
        len = maxKeys;
      }
      for (var i = 0; i < len; ++i) {
        var x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
        if (idx >= 0) {
          kstr = x.substr(0, idx);
          vstr = x.substr(idx + 1);
        } else {
          kstr = x;
          vstr = "";
        }
        k = decodeURIComponent(kstr);
        v = decodeURIComponent(vstr);
        if (!hasOwnProperty(obj, k)) {
          obj[k] = v;
        } else if (Array.isArray(obj[k])) {
          obj[k].push(v);
        } else {
          obj[k] = [obj[k], v];
        }
      }
      return obj;
    };
  }
});

// node_modules/.pnpm/querystring@0.2.0/node_modules/querystring/encode.js
var require_encode = __commonJS({
  "node_modules/.pnpm/querystring@0.2.0/node_modules/querystring/encode.js"(exports, module) {
    "use strict";
    var stringifyPrimitive = function(v) {
      switch (typeof v) {
        case "string":
          return v;
        case "boolean":
          return v ? "true" : "false";
        case "number":
          return isFinite(v) ? v : "";
        default:
          return "";
      }
    };
    module.exports = function(obj, sep, eq, name) {
      sep = sep || "&";
      eq = eq || "=";
      if (obj === null) {
        obj = void 0;
      }
      if (typeof obj === "object") {
        return Object.keys(obj).map(function(k) {
          var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
          if (Array.isArray(obj[k])) {
            return obj[k].map(function(v) {
              return ks + encodeURIComponent(stringifyPrimitive(v));
            }).join(sep);
          } else {
            return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
          }
        }).join(sep);
      }
      if (!name)
        return "";
      return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
    };
  }
});

// node_modules/.pnpm/querystring@0.2.0/node_modules/querystring/index.js
var require_querystring = __commonJS({
  "node_modules/.pnpm/querystring@0.2.0/node_modules/querystring/index.js"(exports) {
    "use strict";
    exports.decode = exports.parse = require_decode();
    exports.encode = exports.stringify = require_encode();
  }
});

// node_modules/.pnpm/url@0.11.0/node_modules/url/url.js
var require_url = __commonJS({
  "node_modules/.pnpm/url@0.11.0/node_modules/url/url.js"(exports) {
    "use strict";
    var punycode = require_punycode();
    var util = require_util();
    exports.parse = urlParse;
    exports.resolve = urlResolve;
    exports.resolveObject = urlResolveObject;
    exports.format = urlFormat;
    exports.Url = Url;
    function Url() {
      this.protocol = null;
      this.slashes = null;
      this.auth = null;
      this.host = null;
      this.port = null;
      this.hostname = null;
      this.hash = null;
      this.search = null;
      this.query = null;
      this.pathname = null;
      this.path = null;
      this.href = null;
    }
    var protocolPattern = /^([a-z0-9.+-]+:)/i;
    var portPattern = /:[0-9]*$/;
    var simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/;
    var delims = ["<", ">", '"', "`", " ", "\r", "\n", "	"];
    var unwise = ["{", "}", "|", "\\", "^", "`"].concat(delims);
    var autoEscape = ["'"].concat(unwise);
    var nonHostChars = ["%", "/", "?", ";", "#"].concat(autoEscape);
    var hostEndingChars = ["/", "?", "#"];
    var hostnameMaxLen = 255;
    var hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/;
    var hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/;
    var unsafeProtocol = {
      "javascript": true,
      "javascript:": true
    };
    var hostlessProtocol = {
      "javascript": true,
      "javascript:": true
    };
    var slashedProtocol = {
      "http": true,
      "https": true,
      "ftp": true,
      "gopher": true,
      "file": true,
      "http:": true,
      "https:": true,
      "ftp:": true,
      "gopher:": true,
      "file:": true
    };
    var querystring = require_querystring();
    function urlParse(url2, parseQueryString, slashesDenoteHost) {
      if (url2 && util.isObject(url2) && url2 instanceof Url)
        return url2;
      var u = new Url();
      u.parse(url2, parseQueryString, slashesDenoteHost);
      return u;
    }
    Url.prototype.parse = function(url2, parseQueryString, slashesDenoteHost) {
      if (!util.isString(url2)) {
        throw new TypeError("Parameter 'url' must be a string, not " + typeof url2);
      }
      var queryIndex = url2.indexOf("?"), splitter = queryIndex !== -1 && queryIndex < url2.indexOf("#") ? "?" : "#", uSplit = url2.split(splitter), slashRegex = /\\/g;
      uSplit[0] = uSplit[0].replace(slashRegex, "/");
      url2 = uSplit.join(splitter);
      var rest = url2;
      rest = rest.trim();
      if (!slashesDenoteHost && url2.split("#").length === 1) {
        var simplePath = simplePathPattern.exec(rest);
        if (simplePath) {
          this.path = rest;
          this.href = rest;
          this.pathname = simplePath[1];
          if (simplePath[2]) {
            this.search = simplePath[2];
            if (parseQueryString) {
              this.query = querystring.parse(this.search.substr(1));
            } else {
              this.query = this.search.substr(1);
            }
          } else if (parseQueryString) {
            this.search = "";
            this.query = {};
          }
          return this;
        }
      }
      var proto = protocolPattern.exec(rest);
      if (proto) {
        proto = proto[0];
        var lowerProto = proto.toLowerCase();
        this.protocol = lowerProto;
        rest = rest.substr(proto.length);
      }
      if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var slashes = rest.substr(0, 2) === "//";
        if (slashes && !(proto && hostlessProtocol[proto])) {
          rest = rest.substr(2);
          this.slashes = true;
        }
      }
      if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {
        var hostEnd = -1;
        for (var i = 0; i < hostEndingChars.length; i++) {
          var hec = rest.indexOf(hostEndingChars[i]);
          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
            hostEnd = hec;
        }
        var auth, atSign;
        if (hostEnd === -1) {
          atSign = rest.lastIndexOf("@");
        } else {
          atSign = rest.lastIndexOf("@", hostEnd);
        }
        if (atSign !== -1) {
          auth = rest.slice(0, atSign);
          rest = rest.slice(atSign + 1);
          this.auth = decodeURIComponent(auth);
        }
        hostEnd = -1;
        for (var i = 0; i < nonHostChars.length; i++) {
          var hec = rest.indexOf(nonHostChars[i]);
          if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
            hostEnd = hec;
        }
        if (hostEnd === -1)
          hostEnd = rest.length;
        this.host = rest.slice(0, hostEnd);
        rest = rest.slice(hostEnd);
        this.parseHost();
        this.hostname = this.hostname || "";
        var ipv6Hostname = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        if (!ipv6Hostname) {
          var hostparts = this.hostname.split(/\./);
          for (var i = 0, l = hostparts.length; i < l; i++) {
            var part = hostparts[i];
            if (!part)
              continue;
            if (!part.match(hostnamePartPattern)) {
              var newpart = "";
              for (var j = 0, k = part.length; j < k; j++) {
                if (part.charCodeAt(j) > 127) {
                  newpart += "x";
                } else {
                  newpart += part[j];
                }
              }
              if (!newpart.match(hostnamePartPattern)) {
                var validParts = hostparts.slice(0, i);
                var notHost = hostparts.slice(i + 1);
                var bit = part.match(hostnamePartStart);
                if (bit) {
                  validParts.push(bit[1]);
                  notHost.unshift(bit[2]);
                }
                if (notHost.length) {
                  rest = "/" + notHost.join(".") + rest;
                }
                this.hostname = validParts.join(".");
                break;
              }
            }
          }
        }
        if (this.hostname.length > hostnameMaxLen) {
          this.hostname = "";
        } else {
          this.hostname = this.hostname.toLowerCase();
        }
        if (!ipv6Hostname) {
          this.hostname = punycode.toASCII(this.hostname);
        }
        var p = this.port ? ":" + this.port : "";
        var h = this.hostname || "";
        this.host = h + p;
        this.href += this.host;
        if (ipv6Hostname) {
          this.hostname = this.hostname.substr(1, this.hostname.length - 2);
          if (rest[0] !== "/") {
            rest = "/" + rest;
          }
        }
      }
      if (!unsafeProtocol[lowerProto]) {
        for (var i = 0, l = autoEscape.length; i < l; i++) {
          var ae = autoEscape[i];
          if (rest.indexOf(ae) === -1)
            continue;
          var esc = encodeURIComponent(ae);
          if (esc === ae) {
            esc = escape(ae);
          }
          rest = rest.split(ae).join(esc);
        }
      }
      var hash = rest.indexOf("#");
      if (hash !== -1) {
        this.hash = rest.substr(hash);
        rest = rest.slice(0, hash);
      }
      var qm = rest.indexOf("?");
      if (qm !== -1) {
        this.search = rest.substr(qm);
        this.query = rest.substr(qm + 1);
        if (parseQueryString) {
          this.query = querystring.parse(this.query);
        }
        rest = rest.slice(0, qm);
      } else if (parseQueryString) {
        this.search = "";
        this.query = {};
      }
      if (rest)
        this.pathname = rest;
      if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
        this.pathname = "/";
      }
      if (this.pathname || this.search) {
        var p = this.pathname || "";
        var s = this.search || "";
        this.path = p + s;
      }
      this.href = this.format();
      return this;
    };
    function urlFormat(obj) {
      if (util.isString(obj))
        obj = urlParse(obj);
      if (!(obj instanceof Url))
        return Url.prototype.format.call(obj);
      return obj.format();
    }
    Url.prototype.format = function() {
      var auth = this.auth || "";
      if (auth) {
        auth = encodeURIComponent(auth);
        auth = auth.replace(/%3A/i, ":");
        auth += "@";
      }
      var protocol = this.protocol || "", pathname = this.pathname || "", hash = this.hash || "", host = false, query = "";
      if (this.host) {
        host = auth + this.host;
      } else if (this.hostname) {
        host = auth + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]");
        if (this.port) {
          host += ":" + this.port;
        }
      }
      if (this.query && util.isObject(this.query) && Object.keys(this.query).length) {
        query = querystring.stringify(this.query);
      }
      var search = this.search || query && "?" + query || "";
      if (protocol && protocol.substr(-1) !== ":")
        protocol += ":";
      if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname.charAt(0) !== "/")
          pathname = "/" + pathname;
      } else if (!host) {
        host = "";
      }
      if (hash && hash.charAt(0) !== "#")
        hash = "#" + hash;
      if (search && search.charAt(0) !== "?")
        search = "?" + search;
      pathname = pathname.replace(/[?#]/g, function(match) {
        return encodeURIComponent(match);
      });
      search = search.replace("#", "%23");
      return protocol + host + pathname + search + hash;
    };
    function urlResolve(source, relative) {
      return urlParse(source, false, true).resolve(relative);
    }
    Url.prototype.resolve = function(relative) {
      return this.resolveObject(urlParse(relative, false, true)).format();
    };
    function urlResolveObject(source, relative) {
      if (!source)
        return relative;
      return urlParse(source, false, true).resolveObject(relative);
    }
    Url.prototype.resolveObject = function(relative) {
      if (util.isString(relative)) {
        var rel = new Url();
        rel.parse(relative, false, true);
        relative = rel;
      }
      var result = new Url();
      var tkeys = Object.keys(this);
      for (var tk = 0; tk < tkeys.length; tk++) {
        var tkey = tkeys[tk];
        result[tkey] = this[tkey];
      }
      result.hash = relative.hash;
      if (relative.href === "") {
        result.href = result.format();
        return result;
      }
      if (relative.slashes && !relative.protocol) {
        var rkeys = Object.keys(relative);
        for (var rk = 0; rk < rkeys.length; rk++) {
          var rkey = rkeys[rk];
          if (rkey !== "protocol")
            result[rkey] = relative[rkey];
        }
        if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
          result.path = result.pathname = "/";
        }
        result.href = result.format();
        return result;
      }
      if (relative.protocol && relative.protocol !== result.protocol) {
        if (!slashedProtocol[relative.protocol]) {
          var keys = Object.keys(relative);
          for (var v = 0; v < keys.length; v++) {
            var k = keys[v];
            result[k] = relative[k];
          }
          result.href = result.format();
          return result;
        }
        result.protocol = relative.protocol;
        if (!relative.host && !hostlessProtocol[relative.protocol]) {
          var relPath = (relative.pathname || "").split("/");
          while (relPath.length && !(relative.host = relPath.shift()))
            ;
          if (!relative.host)
            relative.host = "";
          if (!relative.hostname)
            relative.hostname = "";
          if (relPath[0] !== "")
            relPath.unshift("");
          if (relPath.length < 2)
            relPath.unshift("");
          result.pathname = relPath.join("/");
        } else {
          result.pathname = relative.pathname;
        }
        result.search = relative.search;
        result.query = relative.query;
        result.host = relative.host || "";
        result.auth = relative.auth;
        result.hostname = relative.hostname || relative.host;
        result.port = relative.port;
        if (result.pathname || result.search) {
          var p = result.pathname || "";
          var s = result.search || "";
          result.path = p + s;
        }
        result.slashes = result.slashes || relative.slashes;
        result.href = result.format();
        return result;
      }
      var isSourceAbs = result.pathname && result.pathname.charAt(0) === "/", isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === "/", mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname, removeAllDots = mustEndAbs, srcPath = result.pathname && result.pathname.split("/") || [], relPath = relative.pathname && relative.pathname.split("/") || [], psychotic = result.protocol && !slashedProtocol[result.protocol];
      if (psychotic) {
        result.hostname = "";
        result.port = null;
        if (result.host) {
          if (srcPath[0] === "")
            srcPath[0] = result.host;
          else
            srcPath.unshift(result.host);
        }
        result.host = "";
        if (relative.protocol) {
          relative.hostname = null;
          relative.port = null;
          if (relative.host) {
            if (relPath[0] === "")
              relPath[0] = relative.host;
            else
              relPath.unshift(relative.host);
          }
          relative.host = null;
        }
        mustEndAbs = mustEndAbs && (relPath[0] === "" || srcPath[0] === "");
      }
      if (isRelAbs) {
        result.host = relative.host || relative.host === "" ? relative.host : result.host;
        result.hostname = relative.hostname || relative.hostname === "" ? relative.hostname : result.hostname;
        result.search = relative.search;
        result.query = relative.query;
        srcPath = relPath;
      } else if (relPath.length) {
        if (!srcPath)
          srcPath = [];
        srcPath.pop();
        srcPath = srcPath.concat(relPath);
        result.search = relative.search;
        result.query = relative.query;
      } else if (!util.isNullOrUndefined(relative.search)) {
        if (psychotic) {
          result.hostname = result.host = srcPath.shift();
          var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
          if (authInHost) {
            result.auth = authInHost.shift();
            result.host = result.hostname = authInHost.shift();
          }
        }
        result.search = relative.search;
        result.query = relative.query;
        if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
          result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
        }
        result.href = result.format();
        return result;
      }
      if (!srcPath.length) {
        result.pathname = null;
        if (result.search) {
          result.path = "/" + result.search;
        } else {
          result.path = null;
        }
        result.href = result.format();
        return result;
      }
      var last = srcPath.slice(-1)[0];
      var hasTrailingSlash = (result.host || relative.host || srcPath.length > 1) && (last === "." || last === "..") || last === "";
      var up = 0;
      for (var i = srcPath.length; i >= 0; i--) {
        last = srcPath[i];
        if (last === ".") {
          srcPath.splice(i, 1);
        } else if (last === "..") {
          srcPath.splice(i, 1);
          up++;
        } else if (up) {
          srcPath.splice(i, 1);
          up--;
        }
      }
      if (!mustEndAbs && !removeAllDots) {
        for (; up--; up) {
          srcPath.unshift("..");
        }
      }
      if (mustEndAbs && srcPath[0] !== "" && (!srcPath[0] || srcPath[0].charAt(0) !== "/")) {
        srcPath.unshift("");
      }
      if (hasTrailingSlash && srcPath.join("/").substr(-1) !== "/") {
        srcPath.push("");
      }
      var isAbsolute = srcPath[0] === "" || srcPath[0] && srcPath[0].charAt(0) === "/";
      if (psychotic) {
        result.hostname = result.host = isAbsolute ? "" : srcPath.length ? srcPath.shift() : "";
        var authInHost = result.host && result.host.indexOf("@") > 0 ? result.host.split("@") : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      mustEndAbs = mustEndAbs || result.host && srcPath.length;
      if (mustEndAbs && !isAbsolute) {
        srcPath.unshift("");
      }
      if (!srcPath.length) {
        result.pathname = null;
        result.path = null;
      } else {
        result.pathname = srcPath.join("/");
      }
      if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : "") + (result.search ? result.search : "");
      }
      result.auth = relative.auth || result.auth;
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    };
    Url.prototype.parseHost = function() {
      var host = this.host;
      var port = portPattern.exec(host);
      if (port) {
        port = port[0];
        if (port !== ":") {
          this.port = port.substr(1);
        }
        host = host.substr(0, host.length - port.length);
      }
      if (host)
        this.hostname = host;
    };
  }
});

// node_modules/.pnpm/@pixi+settings@6.5.2/node_modules/@pixi/settings/dist/esm/settings.mjs
var ENV;
(function(ENV4) {
  ENV4[ENV4["WEBGL_LEGACY"] = 0] = "WEBGL_LEGACY";
  ENV4[ENV4["WEBGL"] = 1] = "WEBGL";
  ENV4[ENV4["WEBGL2"] = 2] = "WEBGL2";
})(ENV || (ENV = {}));
var RENDERER_TYPE;
(function(RENDERER_TYPE4) {
  RENDERER_TYPE4[RENDERER_TYPE4["UNKNOWN"] = 0] = "UNKNOWN";
  RENDERER_TYPE4[RENDERER_TYPE4["WEBGL"] = 1] = "WEBGL";
  RENDERER_TYPE4[RENDERER_TYPE4["CANVAS"] = 2] = "CANVAS";
})(RENDERER_TYPE || (RENDERER_TYPE = {}));
var BUFFER_BITS;
(function(BUFFER_BITS4) {
  BUFFER_BITS4[BUFFER_BITS4["COLOR"] = 16384] = "COLOR";
  BUFFER_BITS4[BUFFER_BITS4["DEPTH"] = 256] = "DEPTH";
  BUFFER_BITS4[BUFFER_BITS4["STENCIL"] = 1024] = "STENCIL";
})(BUFFER_BITS || (BUFFER_BITS = {}));
var BLEND_MODES;
(function(BLEND_MODES4) {
  BLEND_MODES4[BLEND_MODES4["NORMAL"] = 0] = "NORMAL";
  BLEND_MODES4[BLEND_MODES4["ADD"] = 1] = "ADD";
  BLEND_MODES4[BLEND_MODES4["MULTIPLY"] = 2] = "MULTIPLY";
  BLEND_MODES4[BLEND_MODES4["SCREEN"] = 3] = "SCREEN";
  BLEND_MODES4[BLEND_MODES4["OVERLAY"] = 4] = "OVERLAY";
  BLEND_MODES4[BLEND_MODES4["DARKEN"] = 5] = "DARKEN";
  BLEND_MODES4[BLEND_MODES4["LIGHTEN"] = 6] = "LIGHTEN";
  BLEND_MODES4[BLEND_MODES4["COLOR_DODGE"] = 7] = "COLOR_DODGE";
  BLEND_MODES4[BLEND_MODES4["COLOR_BURN"] = 8] = "COLOR_BURN";
  BLEND_MODES4[BLEND_MODES4["HARD_LIGHT"] = 9] = "HARD_LIGHT";
  BLEND_MODES4[BLEND_MODES4["SOFT_LIGHT"] = 10] = "SOFT_LIGHT";
  BLEND_MODES4[BLEND_MODES4["DIFFERENCE"] = 11] = "DIFFERENCE";
  BLEND_MODES4[BLEND_MODES4["EXCLUSION"] = 12] = "EXCLUSION";
  BLEND_MODES4[BLEND_MODES4["HUE"] = 13] = "HUE";
  BLEND_MODES4[BLEND_MODES4["SATURATION"] = 14] = "SATURATION";
  BLEND_MODES4[BLEND_MODES4["COLOR"] = 15] = "COLOR";
  BLEND_MODES4[BLEND_MODES4["LUMINOSITY"] = 16] = "LUMINOSITY";
  BLEND_MODES4[BLEND_MODES4["NORMAL_NPM"] = 17] = "NORMAL_NPM";
  BLEND_MODES4[BLEND_MODES4["ADD_NPM"] = 18] = "ADD_NPM";
  BLEND_MODES4[BLEND_MODES4["SCREEN_NPM"] = 19] = "SCREEN_NPM";
  BLEND_MODES4[BLEND_MODES4["NONE"] = 20] = "NONE";
  BLEND_MODES4[BLEND_MODES4["SRC_OVER"] = 0] = "SRC_OVER";
  BLEND_MODES4[BLEND_MODES4["SRC_IN"] = 21] = "SRC_IN";
  BLEND_MODES4[BLEND_MODES4["SRC_OUT"] = 22] = "SRC_OUT";
  BLEND_MODES4[BLEND_MODES4["SRC_ATOP"] = 23] = "SRC_ATOP";
  BLEND_MODES4[BLEND_MODES4["DST_OVER"] = 24] = "DST_OVER";
  BLEND_MODES4[BLEND_MODES4["DST_IN"] = 25] = "DST_IN";
  BLEND_MODES4[BLEND_MODES4["DST_OUT"] = 26] = "DST_OUT";
  BLEND_MODES4[BLEND_MODES4["DST_ATOP"] = 27] = "DST_ATOP";
  BLEND_MODES4[BLEND_MODES4["ERASE"] = 26] = "ERASE";
  BLEND_MODES4[BLEND_MODES4["SUBTRACT"] = 28] = "SUBTRACT";
  BLEND_MODES4[BLEND_MODES4["XOR"] = 29] = "XOR";
})(BLEND_MODES || (BLEND_MODES = {}));
var DRAW_MODES;
(function(DRAW_MODES4) {
  DRAW_MODES4[DRAW_MODES4["POINTS"] = 0] = "POINTS";
  DRAW_MODES4[DRAW_MODES4["LINES"] = 1] = "LINES";
  DRAW_MODES4[DRAW_MODES4["LINE_LOOP"] = 2] = "LINE_LOOP";
  DRAW_MODES4[DRAW_MODES4["LINE_STRIP"] = 3] = "LINE_STRIP";
  DRAW_MODES4[DRAW_MODES4["TRIANGLES"] = 4] = "TRIANGLES";
  DRAW_MODES4[DRAW_MODES4["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
  DRAW_MODES4[DRAW_MODES4["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
})(DRAW_MODES || (DRAW_MODES = {}));
var FORMATS;
(function(FORMATS4) {
  FORMATS4[FORMATS4["RGBA"] = 6408] = "RGBA";
  FORMATS4[FORMATS4["RGB"] = 6407] = "RGB";
  FORMATS4[FORMATS4["RG"] = 33319] = "RG";
  FORMATS4[FORMATS4["RED"] = 6403] = "RED";
  FORMATS4[FORMATS4["RGBA_INTEGER"] = 36249] = "RGBA_INTEGER";
  FORMATS4[FORMATS4["RGB_INTEGER"] = 36248] = "RGB_INTEGER";
  FORMATS4[FORMATS4["RG_INTEGER"] = 33320] = "RG_INTEGER";
  FORMATS4[FORMATS4["RED_INTEGER"] = 36244] = "RED_INTEGER";
  FORMATS4[FORMATS4["ALPHA"] = 6406] = "ALPHA";
  FORMATS4[FORMATS4["LUMINANCE"] = 6409] = "LUMINANCE";
  FORMATS4[FORMATS4["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
  FORMATS4[FORMATS4["DEPTH_COMPONENT"] = 6402] = "DEPTH_COMPONENT";
  FORMATS4[FORMATS4["DEPTH_STENCIL"] = 34041] = "DEPTH_STENCIL";
})(FORMATS || (FORMATS = {}));
var TARGETS;
(function(TARGETS4) {
  TARGETS4[TARGETS4["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP"] = 34067] = "TEXTURE_CUBE_MAP";
  TARGETS4[TARGETS4["TEXTURE_2D_ARRAY"] = 35866] = "TEXTURE_2D_ARRAY";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_POSITIVE_X"] = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_NEGATIVE_X"] = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_POSITIVE_Y"] = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_NEGATIVE_Y"] = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_POSITIVE_Z"] = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_NEGATIVE_Z"] = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
})(TARGETS || (TARGETS = {}));
var TYPES;
(function(TYPES4) {
  TYPES4[TYPES4["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
  TYPES4[TYPES4["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
  TYPES4[TYPES4["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
  TYPES4[TYPES4["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
  TYPES4[TYPES4["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
  TYPES4[TYPES4["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
  TYPES4[TYPES4["UNSIGNED_INT_10F_11F_11F_REV"] = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
  TYPES4[TYPES4["UNSIGNED_INT_2_10_10_10_REV"] = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
  TYPES4[TYPES4["UNSIGNED_INT_24_8"] = 34042] = "UNSIGNED_INT_24_8";
  TYPES4[TYPES4["UNSIGNED_INT_5_9_9_9_REV"] = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
  TYPES4[TYPES4["BYTE"] = 5120] = "BYTE";
  TYPES4[TYPES4["SHORT"] = 5122] = "SHORT";
  TYPES4[TYPES4["INT"] = 5124] = "INT";
  TYPES4[TYPES4["FLOAT"] = 5126] = "FLOAT";
  TYPES4[TYPES4["FLOAT_32_UNSIGNED_INT_24_8_REV"] = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
  TYPES4[TYPES4["HALF_FLOAT"] = 36193] = "HALF_FLOAT";
})(TYPES || (TYPES = {}));
var SAMPLER_TYPES;
(function(SAMPLER_TYPES4) {
  SAMPLER_TYPES4[SAMPLER_TYPES4["FLOAT"] = 0] = "FLOAT";
  SAMPLER_TYPES4[SAMPLER_TYPES4["INT"] = 1] = "INT";
  SAMPLER_TYPES4[SAMPLER_TYPES4["UINT"] = 2] = "UINT";
})(SAMPLER_TYPES || (SAMPLER_TYPES = {}));
var SCALE_MODES;
(function(SCALE_MODES4) {
  SCALE_MODES4[SCALE_MODES4["NEAREST"] = 0] = "NEAREST";
  SCALE_MODES4[SCALE_MODES4["LINEAR"] = 1] = "LINEAR";
})(SCALE_MODES || (SCALE_MODES = {}));
var WRAP_MODES;
(function(WRAP_MODES4) {
  WRAP_MODES4[WRAP_MODES4["CLAMP"] = 33071] = "CLAMP";
  WRAP_MODES4[WRAP_MODES4["REPEAT"] = 10497] = "REPEAT";
  WRAP_MODES4[WRAP_MODES4["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
})(WRAP_MODES || (WRAP_MODES = {}));
var MIPMAP_MODES;
(function(MIPMAP_MODES4) {
  MIPMAP_MODES4[MIPMAP_MODES4["OFF"] = 0] = "OFF";
  MIPMAP_MODES4[MIPMAP_MODES4["POW2"] = 1] = "POW2";
  MIPMAP_MODES4[MIPMAP_MODES4["ON"] = 2] = "ON";
  MIPMAP_MODES4[MIPMAP_MODES4["ON_MANUAL"] = 3] = "ON_MANUAL";
})(MIPMAP_MODES || (MIPMAP_MODES = {}));
var ALPHA_MODES;
(function(ALPHA_MODES4) {
  ALPHA_MODES4[ALPHA_MODES4["NPM"] = 0] = "NPM";
  ALPHA_MODES4[ALPHA_MODES4["UNPACK"] = 1] = "UNPACK";
  ALPHA_MODES4[ALPHA_MODES4["PMA"] = 2] = "PMA";
  ALPHA_MODES4[ALPHA_MODES4["NO_PREMULTIPLIED_ALPHA"] = 0] = "NO_PREMULTIPLIED_ALPHA";
  ALPHA_MODES4[ALPHA_MODES4["PREMULTIPLY_ON_UPLOAD"] = 1] = "PREMULTIPLY_ON_UPLOAD";
  ALPHA_MODES4[ALPHA_MODES4["PREMULTIPLY_ALPHA"] = 2] = "PREMULTIPLY_ALPHA";
  ALPHA_MODES4[ALPHA_MODES4["PREMULTIPLIED_ALPHA"] = 2] = "PREMULTIPLIED_ALPHA";
})(ALPHA_MODES || (ALPHA_MODES = {}));
var CLEAR_MODES;
(function(CLEAR_MODES4) {
  CLEAR_MODES4[CLEAR_MODES4["NO"] = 0] = "NO";
  CLEAR_MODES4[CLEAR_MODES4["YES"] = 1] = "YES";
  CLEAR_MODES4[CLEAR_MODES4["AUTO"] = 2] = "AUTO";
  CLEAR_MODES4[CLEAR_MODES4["BLEND"] = 0] = "BLEND";
  CLEAR_MODES4[CLEAR_MODES4["CLEAR"] = 1] = "CLEAR";
  CLEAR_MODES4[CLEAR_MODES4["BLIT"] = 2] = "BLIT";
})(CLEAR_MODES || (CLEAR_MODES = {}));
var GC_MODES;
(function(GC_MODES4) {
  GC_MODES4[GC_MODES4["AUTO"] = 0] = "AUTO";
  GC_MODES4[GC_MODES4["MANUAL"] = 1] = "MANUAL";
})(GC_MODES || (GC_MODES = {}));
var PRECISION;
(function(PRECISION4) {
  PRECISION4["LOW"] = "lowp";
  PRECISION4["MEDIUM"] = "mediump";
  PRECISION4["HIGH"] = "highp";
})(PRECISION || (PRECISION = {}));
var MASK_TYPES;
(function(MASK_TYPES4) {
  MASK_TYPES4[MASK_TYPES4["NONE"] = 0] = "NONE";
  MASK_TYPES4[MASK_TYPES4["SCISSOR"] = 1] = "SCISSOR";
  MASK_TYPES4[MASK_TYPES4["STENCIL"] = 2] = "STENCIL";
  MASK_TYPES4[MASK_TYPES4["SPRITE"] = 3] = "SPRITE";
  MASK_TYPES4[MASK_TYPES4["COLOR"] = 4] = "COLOR";
})(MASK_TYPES || (MASK_TYPES = {}));
var COLOR_MASK_BITS;
(function(COLOR_MASK_BITS4) {
  COLOR_MASK_BITS4[COLOR_MASK_BITS4["RED"] = 1] = "RED";
  COLOR_MASK_BITS4[COLOR_MASK_BITS4["GREEN"] = 2] = "GREEN";
  COLOR_MASK_BITS4[COLOR_MASK_BITS4["BLUE"] = 4] = "BLUE";
  COLOR_MASK_BITS4[COLOR_MASK_BITS4["ALPHA"] = 8] = "ALPHA";
})(COLOR_MASK_BITS || (COLOR_MASK_BITS = {}));
var MSAA_QUALITY;
(function(MSAA_QUALITY4) {
  MSAA_QUALITY4[MSAA_QUALITY4["NONE"] = 0] = "NONE";
  MSAA_QUALITY4[MSAA_QUALITY4["LOW"] = 2] = "LOW";
  MSAA_QUALITY4[MSAA_QUALITY4["MEDIUM"] = 4] = "MEDIUM";
  MSAA_QUALITY4[MSAA_QUALITY4["HIGH"] = 8] = "HIGH";
})(MSAA_QUALITY || (MSAA_QUALITY = {}));
var BUFFER_TYPE;
(function(BUFFER_TYPE4) {
  BUFFER_TYPE4[BUFFER_TYPE4["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
  BUFFER_TYPE4[BUFFER_TYPE4["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
  BUFFER_TYPE4[BUFFER_TYPE4["UNIFORM_BUFFER"] = 35345] = "UNIFORM_BUFFER";
})(BUFFER_TYPE || (BUFFER_TYPE = {}));
var BrowserAdapter = {
  /**
   * Creates a canvas element of the given size.
   * This canvas is created using the browser's native canvas element.
   * @param width - width of the canvas
   * @param height - height of the canvas
   */
  createCanvas: function(width, height) {
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
  },
  getWebGLRenderingContext: function() {
    return WebGLRenderingContext;
  },
  getNavigator: function() {
    return navigator;
  },
  getBaseUrl: function() {
    var _a;
    return (_a = document.baseURI) !== null && _a !== void 0 ? _a : window.location.href;
  },
  fetch: function(url2, options) {
    return fetch(url2, options);
  }
};
var appleIphone = /iPhone/i;
var appleIpod = /iPod/i;
var appleTablet = /iPad/i;
var appleUniversal = /\biOS-universal(?:.+)Mac\b/i;
var androidPhone = /\bAndroid(?:.+)Mobile\b/i;
var androidTablet = /Android/i;
var amazonPhone = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;
var amazonTablet = /Silk/i;
var windowsPhone = /Windows Phone/i;
var windowsTablet = /\bWindows(?:.+)ARM\b/i;
var otherBlackBerry = /BlackBerry/i;
var otherBlackBerry10 = /BB10/i;
var otherOpera = /Opera Mini/i;
var otherChrome = /\b(CriOS|Chrome)(?:.+)Mobile/i;
var otherFirefox = /Mobile(?:.+)Firefox\b/i;
var isAppleTabletOnIos13 = function(navigator2) {
  return typeof navigator2 !== "undefined" && navigator2.platform === "MacIntel" && typeof navigator2.maxTouchPoints === "number" && navigator2.maxTouchPoints > 1 && typeof MSStream === "undefined";
};
function createMatch(userAgent) {
  return function(regex) {
    return regex.test(userAgent);
  };
}
function isMobile$1(param) {
  var nav = {
    userAgent: "",
    platform: "",
    maxTouchPoints: 0
  };
  if (!param && typeof navigator !== "undefined") {
    nav = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      maxTouchPoints: navigator.maxTouchPoints || 0
    };
  } else if (typeof param === "string") {
    nav.userAgent = param;
  } else if (param && param.userAgent) {
    nav = {
      userAgent: param.userAgent,
      platform: param.platform,
      maxTouchPoints: param.maxTouchPoints || 0
    };
  }
  var userAgent = nav.userAgent;
  var tmp = userAgent.split("[FBAN");
  if (typeof tmp[1] !== "undefined") {
    userAgent = tmp[0];
  }
  tmp = userAgent.split("Twitter");
  if (typeof tmp[1] !== "undefined") {
    userAgent = tmp[0];
  }
  var match = createMatch(userAgent);
  var result = {
    apple: {
      phone: match(appleIphone) && !match(windowsPhone),
      ipod: match(appleIpod),
      tablet: !match(appleIphone) && (match(appleTablet) || isAppleTabletOnIos13(nav)) && !match(windowsPhone),
      universal: match(appleUniversal),
      device: (match(appleIphone) || match(appleIpod) || match(appleTablet) || match(appleUniversal) || isAppleTabletOnIos13(nav)) && !match(windowsPhone)
    },
    amazon: {
      phone: match(amazonPhone),
      tablet: !match(amazonPhone) && match(amazonTablet),
      device: match(amazonPhone) || match(amazonTablet)
    },
    android: {
      phone: !match(windowsPhone) && match(amazonPhone) || !match(windowsPhone) && match(androidPhone),
      tablet: !match(windowsPhone) && !match(amazonPhone) && !match(androidPhone) && (match(amazonTablet) || match(androidTablet)),
      device: !match(windowsPhone) && (match(amazonPhone) || match(amazonTablet) || match(androidPhone) || match(androidTablet)) || match(/\bokhttp\b/i)
    },
    windows: {
      phone: match(windowsPhone),
      tablet: match(windowsTablet),
      device: match(windowsPhone) || match(windowsTablet)
    },
    other: {
      blackberry: match(otherBlackBerry),
      blackberry10: match(otherBlackBerry10),
      opera: match(otherOpera),
      firefox: match(otherFirefox),
      chrome: match(otherChrome),
      device: match(otherBlackBerry) || match(otherBlackBerry10) || match(otherOpera) || match(otherFirefox) || match(otherChrome)
    },
    any: false,
    phone: false,
    tablet: false
  };
  result.any = result.apple.device || result.android.device || result.windows.device || result.other.device;
  result.phone = result.apple.phone || result.android.phone || result.windows.phone;
  result.tablet = result.apple.tablet || result.android.tablet || result.windows.tablet;
  return result;
}
var isMobile = isMobile$1(globalThis.navigator);
function canUploadSameBuffer() {
  return !isMobile.apple.device;
}
function maxRecommendedTextures(max) {
  var allowMax = true;
  if (isMobile.tablet || isMobile.phone) {
    if (isMobile.apple.device) {
      var match = navigator.userAgent.match(/OS (\d+)_(\d+)?/);
      if (match) {
        var majorVersion = parseInt(match[1], 10);
        if (majorVersion < 11) {
          allowMax = false;
        }
      }
    }
    if (isMobile.android.device) {
      var match = navigator.userAgent.match(/Android\s([0-9.]*)/);
      if (match) {
        var majorVersion = parseInt(match[1], 10);
        if (majorVersion < 7) {
          allowMax = false;
        }
      }
    }
  }
  return allowMax ? max : 4;
}
var settings = {
  /**
   * This adapter is used to call methods that are platform dependent.
   * For example `document.createElement` only runs on the web but fails in node environments.
   * This allows us to support more platforms by abstracting away specific implementations per platform.
   *
   * By default the adapter is set to work in the browser. However you can create your own
   * by implementing the `IAdapter` interface. See `IAdapter` for more information.
   * @name ADAPTER
   * @memberof PIXI.settings
   * @type {PIXI.IAdapter}
   * @default PIXI.BrowserAdapter
   */
  ADAPTER: BrowserAdapter,
  /**
   * If set to true WebGL will attempt make textures mimpaped by default.
   * Mipmapping will only succeed if the base texture uploaded has power of two dimensions.
   * @static
   * @name MIPMAP_TEXTURES
   * @memberof PIXI.settings
   * @type {PIXI.MIPMAP_MODES}
   * @default PIXI.MIPMAP_MODES.POW2
   */
  MIPMAP_TEXTURES: MIPMAP_MODES.POW2,
  /**
   * Default anisotropic filtering level of textures.
   * Usually from 0 to 16
   * @static
   * @name ANISOTROPIC_LEVEL
   * @memberof PIXI.settings
   * @type {number}
   * @default 0
   */
  ANISOTROPIC_LEVEL: 0,
  /**
   * Default resolution / device pixel ratio of the renderer.
   * @static
   * @name RESOLUTION
   * @memberof PIXI.settings
   * @type {number}
   * @default 1
   */
  RESOLUTION: 1,
  /**
   * Default filter resolution.
   * @static
   * @name FILTER_RESOLUTION
   * @memberof PIXI.settings
   * @type {number}
   * @default 1
   */
  FILTER_RESOLUTION: 1,
  /**
   * Default filter samples.
   * @static
   * @name FILTER_MULTISAMPLE
   * @memberof PIXI.settings
   * @type {PIXI.MSAA_QUALITY}
   * @default PIXI.MSAA_QUALITY.NONE
   */
  FILTER_MULTISAMPLE: MSAA_QUALITY.NONE,
  /**
   * The maximum textures that this device supports.
   * @static
   * @name SPRITE_MAX_TEXTURES
   * @memberof PIXI.settings
   * @type {number}
   * @default 32
   */
  SPRITE_MAX_TEXTURES: maxRecommendedTextures(32),
  // TODO: maybe change to SPRITE.BATCH_SIZE: 2000
  // TODO: maybe add PARTICLE.BATCH_SIZE: 15000
  /**
   * The default sprite batch size.
   *
   * The default aims to balance desktop and mobile devices.
   * @static
   * @name SPRITE_BATCH_SIZE
   * @memberof PIXI.settings
   * @type {number}
   * @default 4096
   */
  SPRITE_BATCH_SIZE: 4096,
  /**
   * The default render options if none are supplied to {@link PIXI.Renderer}
   * or {@link PIXI.CanvasRenderer}.
   * @static
   * @name RENDER_OPTIONS
   * @memberof PIXI.settings
   * @type {object}
   * @property {HTMLCanvasElement} [view=null] -
   * @property {boolean} [antialias=false] -
   * @property {boolean} [autoDensity=false] -
   * @property {boolean} [useContextAlpha=true]  -
   * @property {number} [backgroundColor=0x000000] -
   * @property {number} [backgroundAlpha=1] -
   * @property {boolean} [clearBeforeRender=true] -
   * @property {boolean} [preserveDrawingBuffer=false] -
   * @property {number} [width=800] -
   * @property {number} [height=600] -
   * @property {boolean} [legacy=false] -
   */
  RENDER_OPTIONS: {
    view: null,
    antialias: false,
    autoDensity: false,
    backgroundColor: 0,
    backgroundAlpha: 1,
    useContextAlpha: true,
    clearBeforeRender: true,
    preserveDrawingBuffer: false,
    width: 800,
    height: 600,
    legacy: false
  },
  /**
   * Default Garbage Collection mode.
   * @static
   * @name GC_MODE
   * @memberof PIXI.settings
   * @type {PIXI.GC_MODES}
   * @default PIXI.GC_MODES.AUTO
   */
  GC_MODE: GC_MODES.AUTO,
  /**
   * Default Garbage Collection max idle.
   * @static
   * @name GC_MAX_IDLE
   * @memberof PIXI.settings
   * @type {number}
   * @default 3600
   */
  GC_MAX_IDLE: 60 * 60,
  /**
   * Default Garbage Collection maximum check count.
   * @static
   * @name GC_MAX_CHECK_COUNT
   * @memberof PIXI.settings
   * @type {number}
   * @default 600
   */
  GC_MAX_CHECK_COUNT: 60 * 10,
  /**
   * Default wrap modes that are supported by pixi.
   * @static
   * @name WRAP_MODE
   * @memberof PIXI.settings
   * @type {PIXI.WRAP_MODES}
   * @default PIXI.WRAP_MODES.CLAMP
   */
  WRAP_MODE: WRAP_MODES.CLAMP,
  /**
   * Default scale mode for textures.
   * @static
   * @name SCALE_MODE
   * @memberof PIXI.settings
   * @type {PIXI.SCALE_MODES}
   * @default PIXI.SCALE_MODES.LINEAR
   */
  SCALE_MODE: SCALE_MODES.LINEAR,
  /**
   * Default specify float precision in vertex shader.
   * @static
   * @name PRECISION_VERTEX
   * @memberof PIXI.settings
   * @type {PIXI.PRECISION}
   * @default PIXI.PRECISION.HIGH
   */
  PRECISION_VERTEX: PRECISION.HIGH,
  /**
   * Default specify float precision in fragment shader.
   * iOS is best set at highp due to https://github.com/pixijs/pixi.js/issues/3742
   * @static
   * @name PRECISION_FRAGMENT
   * @memberof PIXI.settings
   * @type {PIXI.PRECISION}
   * @default PIXI.PRECISION.MEDIUM
   */
  PRECISION_FRAGMENT: isMobile.apple.device ? PRECISION.HIGH : PRECISION.MEDIUM,
  /**
   * Can we upload the same buffer in a single frame?
   * @static
   * @name CAN_UPLOAD_SAME_BUFFER
   * @memberof PIXI.settings
   * @type {boolean}
   */
  CAN_UPLOAD_SAME_BUFFER: canUploadSameBuffer(),
  /**
   * Enables bitmap creation before image load. This feature is experimental.
   * @static
   * @name CREATE_IMAGE_BITMAP
   * @memberof PIXI.settings
   * @type {boolean}
   * @default false
   */
  CREATE_IMAGE_BITMAP: false,
  /**
   * If true PixiJS will Math.floor() x/y values when rendering, stopping pixel interpolation.
   * Advantages can include sharper image quality (like text) and faster rendering on canvas.
   * The main disadvantage is movement of objects may appear less smooth.
   * @static
   * @constant
   * @memberof PIXI.settings
   * @type {boolean}
   * @default false
   */
  ROUND_PIXELS: false
};

// node_modules/.pnpm/@pixi+constants@6.5.2/node_modules/@pixi/constants/dist/esm/constants.mjs
var ENV2;
(function(ENV4) {
  ENV4[ENV4["WEBGL_LEGACY"] = 0] = "WEBGL_LEGACY";
  ENV4[ENV4["WEBGL"] = 1] = "WEBGL";
  ENV4[ENV4["WEBGL2"] = 2] = "WEBGL2";
})(ENV2 || (ENV2 = {}));
var RENDERER_TYPE2;
(function(RENDERER_TYPE4) {
  RENDERER_TYPE4[RENDERER_TYPE4["UNKNOWN"] = 0] = "UNKNOWN";
  RENDERER_TYPE4[RENDERER_TYPE4["WEBGL"] = 1] = "WEBGL";
  RENDERER_TYPE4[RENDERER_TYPE4["CANVAS"] = 2] = "CANVAS";
})(RENDERER_TYPE2 || (RENDERER_TYPE2 = {}));
var BUFFER_BITS2;
(function(BUFFER_BITS4) {
  BUFFER_BITS4[BUFFER_BITS4["COLOR"] = 16384] = "COLOR";
  BUFFER_BITS4[BUFFER_BITS4["DEPTH"] = 256] = "DEPTH";
  BUFFER_BITS4[BUFFER_BITS4["STENCIL"] = 1024] = "STENCIL";
})(BUFFER_BITS2 || (BUFFER_BITS2 = {}));
var BLEND_MODES2;
(function(BLEND_MODES4) {
  BLEND_MODES4[BLEND_MODES4["NORMAL"] = 0] = "NORMAL";
  BLEND_MODES4[BLEND_MODES4["ADD"] = 1] = "ADD";
  BLEND_MODES4[BLEND_MODES4["MULTIPLY"] = 2] = "MULTIPLY";
  BLEND_MODES4[BLEND_MODES4["SCREEN"] = 3] = "SCREEN";
  BLEND_MODES4[BLEND_MODES4["OVERLAY"] = 4] = "OVERLAY";
  BLEND_MODES4[BLEND_MODES4["DARKEN"] = 5] = "DARKEN";
  BLEND_MODES4[BLEND_MODES4["LIGHTEN"] = 6] = "LIGHTEN";
  BLEND_MODES4[BLEND_MODES4["COLOR_DODGE"] = 7] = "COLOR_DODGE";
  BLEND_MODES4[BLEND_MODES4["COLOR_BURN"] = 8] = "COLOR_BURN";
  BLEND_MODES4[BLEND_MODES4["HARD_LIGHT"] = 9] = "HARD_LIGHT";
  BLEND_MODES4[BLEND_MODES4["SOFT_LIGHT"] = 10] = "SOFT_LIGHT";
  BLEND_MODES4[BLEND_MODES4["DIFFERENCE"] = 11] = "DIFFERENCE";
  BLEND_MODES4[BLEND_MODES4["EXCLUSION"] = 12] = "EXCLUSION";
  BLEND_MODES4[BLEND_MODES4["HUE"] = 13] = "HUE";
  BLEND_MODES4[BLEND_MODES4["SATURATION"] = 14] = "SATURATION";
  BLEND_MODES4[BLEND_MODES4["COLOR"] = 15] = "COLOR";
  BLEND_MODES4[BLEND_MODES4["LUMINOSITY"] = 16] = "LUMINOSITY";
  BLEND_MODES4[BLEND_MODES4["NORMAL_NPM"] = 17] = "NORMAL_NPM";
  BLEND_MODES4[BLEND_MODES4["ADD_NPM"] = 18] = "ADD_NPM";
  BLEND_MODES4[BLEND_MODES4["SCREEN_NPM"] = 19] = "SCREEN_NPM";
  BLEND_MODES4[BLEND_MODES4["NONE"] = 20] = "NONE";
  BLEND_MODES4[BLEND_MODES4["SRC_OVER"] = 0] = "SRC_OVER";
  BLEND_MODES4[BLEND_MODES4["SRC_IN"] = 21] = "SRC_IN";
  BLEND_MODES4[BLEND_MODES4["SRC_OUT"] = 22] = "SRC_OUT";
  BLEND_MODES4[BLEND_MODES4["SRC_ATOP"] = 23] = "SRC_ATOP";
  BLEND_MODES4[BLEND_MODES4["DST_OVER"] = 24] = "DST_OVER";
  BLEND_MODES4[BLEND_MODES4["DST_IN"] = 25] = "DST_IN";
  BLEND_MODES4[BLEND_MODES4["DST_OUT"] = 26] = "DST_OUT";
  BLEND_MODES4[BLEND_MODES4["DST_ATOP"] = 27] = "DST_ATOP";
  BLEND_MODES4[BLEND_MODES4["ERASE"] = 26] = "ERASE";
  BLEND_MODES4[BLEND_MODES4["SUBTRACT"] = 28] = "SUBTRACT";
  BLEND_MODES4[BLEND_MODES4["XOR"] = 29] = "XOR";
})(BLEND_MODES2 || (BLEND_MODES2 = {}));
var DRAW_MODES2;
(function(DRAW_MODES4) {
  DRAW_MODES4[DRAW_MODES4["POINTS"] = 0] = "POINTS";
  DRAW_MODES4[DRAW_MODES4["LINES"] = 1] = "LINES";
  DRAW_MODES4[DRAW_MODES4["LINE_LOOP"] = 2] = "LINE_LOOP";
  DRAW_MODES4[DRAW_MODES4["LINE_STRIP"] = 3] = "LINE_STRIP";
  DRAW_MODES4[DRAW_MODES4["TRIANGLES"] = 4] = "TRIANGLES";
  DRAW_MODES4[DRAW_MODES4["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
  DRAW_MODES4[DRAW_MODES4["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
})(DRAW_MODES2 || (DRAW_MODES2 = {}));
var FORMATS2;
(function(FORMATS4) {
  FORMATS4[FORMATS4["RGBA"] = 6408] = "RGBA";
  FORMATS4[FORMATS4["RGB"] = 6407] = "RGB";
  FORMATS4[FORMATS4["RG"] = 33319] = "RG";
  FORMATS4[FORMATS4["RED"] = 6403] = "RED";
  FORMATS4[FORMATS4["RGBA_INTEGER"] = 36249] = "RGBA_INTEGER";
  FORMATS4[FORMATS4["RGB_INTEGER"] = 36248] = "RGB_INTEGER";
  FORMATS4[FORMATS4["RG_INTEGER"] = 33320] = "RG_INTEGER";
  FORMATS4[FORMATS4["RED_INTEGER"] = 36244] = "RED_INTEGER";
  FORMATS4[FORMATS4["ALPHA"] = 6406] = "ALPHA";
  FORMATS4[FORMATS4["LUMINANCE"] = 6409] = "LUMINANCE";
  FORMATS4[FORMATS4["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
  FORMATS4[FORMATS4["DEPTH_COMPONENT"] = 6402] = "DEPTH_COMPONENT";
  FORMATS4[FORMATS4["DEPTH_STENCIL"] = 34041] = "DEPTH_STENCIL";
})(FORMATS2 || (FORMATS2 = {}));
var TARGETS2;
(function(TARGETS4) {
  TARGETS4[TARGETS4["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP"] = 34067] = "TEXTURE_CUBE_MAP";
  TARGETS4[TARGETS4["TEXTURE_2D_ARRAY"] = 35866] = "TEXTURE_2D_ARRAY";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_POSITIVE_X"] = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_NEGATIVE_X"] = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_POSITIVE_Y"] = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_NEGATIVE_Y"] = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_POSITIVE_Z"] = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_NEGATIVE_Z"] = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
})(TARGETS2 || (TARGETS2 = {}));
var TYPES2;
(function(TYPES4) {
  TYPES4[TYPES4["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
  TYPES4[TYPES4["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
  TYPES4[TYPES4["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
  TYPES4[TYPES4["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
  TYPES4[TYPES4["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
  TYPES4[TYPES4["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
  TYPES4[TYPES4["UNSIGNED_INT_10F_11F_11F_REV"] = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
  TYPES4[TYPES4["UNSIGNED_INT_2_10_10_10_REV"] = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
  TYPES4[TYPES4["UNSIGNED_INT_24_8"] = 34042] = "UNSIGNED_INT_24_8";
  TYPES4[TYPES4["UNSIGNED_INT_5_9_9_9_REV"] = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
  TYPES4[TYPES4["BYTE"] = 5120] = "BYTE";
  TYPES4[TYPES4["SHORT"] = 5122] = "SHORT";
  TYPES4[TYPES4["INT"] = 5124] = "INT";
  TYPES4[TYPES4["FLOAT"] = 5126] = "FLOAT";
  TYPES4[TYPES4["FLOAT_32_UNSIGNED_INT_24_8_REV"] = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
  TYPES4[TYPES4["HALF_FLOAT"] = 36193] = "HALF_FLOAT";
})(TYPES2 || (TYPES2 = {}));
var SAMPLER_TYPES2;
(function(SAMPLER_TYPES4) {
  SAMPLER_TYPES4[SAMPLER_TYPES4["FLOAT"] = 0] = "FLOAT";
  SAMPLER_TYPES4[SAMPLER_TYPES4["INT"] = 1] = "INT";
  SAMPLER_TYPES4[SAMPLER_TYPES4["UINT"] = 2] = "UINT";
})(SAMPLER_TYPES2 || (SAMPLER_TYPES2 = {}));
var SCALE_MODES2;
(function(SCALE_MODES4) {
  SCALE_MODES4[SCALE_MODES4["NEAREST"] = 0] = "NEAREST";
  SCALE_MODES4[SCALE_MODES4["LINEAR"] = 1] = "LINEAR";
})(SCALE_MODES2 || (SCALE_MODES2 = {}));
var WRAP_MODES2;
(function(WRAP_MODES4) {
  WRAP_MODES4[WRAP_MODES4["CLAMP"] = 33071] = "CLAMP";
  WRAP_MODES4[WRAP_MODES4["REPEAT"] = 10497] = "REPEAT";
  WRAP_MODES4[WRAP_MODES4["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
})(WRAP_MODES2 || (WRAP_MODES2 = {}));
var MIPMAP_MODES2;
(function(MIPMAP_MODES4) {
  MIPMAP_MODES4[MIPMAP_MODES4["OFF"] = 0] = "OFF";
  MIPMAP_MODES4[MIPMAP_MODES4["POW2"] = 1] = "POW2";
  MIPMAP_MODES4[MIPMAP_MODES4["ON"] = 2] = "ON";
  MIPMAP_MODES4[MIPMAP_MODES4["ON_MANUAL"] = 3] = "ON_MANUAL";
})(MIPMAP_MODES2 || (MIPMAP_MODES2 = {}));
var ALPHA_MODES2;
(function(ALPHA_MODES4) {
  ALPHA_MODES4[ALPHA_MODES4["NPM"] = 0] = "NPM";
  ALPHA_MODES4[ALPHA_MODES4["UNPACK"] = 1] = "UNPACK";
  ALPHA_MODES4[ALPHA_MODES4["PMA"] = 2] = "PMA";
  ALPHA_MODES4[ALPHA_MODES4["NO_PREMULTIPLIED_ALPHA"] = 0] = "NO_PREMULTIPLIED_ALPHA";
  ALPHA_MODES4[ALPHA_MODES4["PREMULTIPLY_ON_UPLOAD"] = 1] = "PREMULTIPLY_ON_UPLOAD";
  ALPHA_MODES4[ALPHA_MODES4["PREMULTIPLY_ALPHA"] = 2] = "PREMULTIPLY_ALPHA";
  ALPHA_MODES4[ALPHA_MODES4["PREMULTIPLIED_ALPHA"] = 2] = "PREMULTIPLIED_ALPHA";
})(ALPHA_MODES2 || (ALPHA_MODES2 = {}));
var CLEAR_MODES2;
(function(CLEAR_MODES4) {
  CLEAR_MODES4[CLEAR_MODES4["NO"] = 0] = "NO";
  CLEAR_MODES4[CLEAR_MODES4["YES"] = 1] = "YES";
  CLEAR_MODES4[CLEAR_MODES4["AUTO"] = 2] = "AUTO";
  CLEAR_MODES4[CLEAR_MODES4["BLEND"] = 0] = "BLEND";
  CLEAR_MODES4[CLEAR_MODES4["CLEAR"] = 1] = "CLEAR";
  CLEAR_MODES4[CLEAR_MODES4["BLIT"] = 2] = "BLIT";
})(CLEAR_MODES2 || (CLEAR_MODES2 = {}));
var GC_MODES2;
(function(GC_MODES4) {
  GC_MODES4[GC_MODES4["AUTO"] = 0] = "AUTO";
  GC_MODES4[GC_MODES4["MANUAL"] = 1] = "MANUAL";
})(GC_MODES2 || (GC_MODES2 = {}));
var PRECISION2;
(function(PRECISION4) {
  PRECISION4["LOW"] = "lowp";
  PRECISION4["MEDIUM"] = "mediump";
  PRECISION4["HIGH"] = "highp";
})(PRECISION2 || (PRECISION2 = {}));
var MASK_TYPES2;
(function(MASK_TYPES4) {
  MASK_TYPES4[MASK_TYPES4["NONE"] = 0] = "NONE";
  MASK_TYPES4[MASK_TYPES4["SCISSOR"] = 1] = "SCISSOR";
  MASK_TYPES4[MASK_TYPES4["STENCIL"] = 2] = "STENCIL";
  MASK_TYPES4[MASK_TYPES4["SPRITE"] = 3] = "SPRITE";
  MASK_TYPES4[MASK_TYPES4["COLOR"] = 4] = "COLOR";
})(MASK_TYPES2 || (MASK_TYPES2 = {}));
var COLOR_MASK_BITS2;
(function(COLOR_MASK_BITS4) {
  COLOR_MASK_BITS4[COLOR_MASK_BITS4["RED"] = 1] = "RED";
  COLOR_MASK_BITS4[COLOR_MASK_BITS4["GREEN"] = 2] = "GREEN";
  COLOR_MASK_BITS4[COLOR_MASK_BITS4["BLUE"] = 4] = "BLUE";
  COLOR_MASK_BITS4[COLOR_MASK_BITS4["ALPHA"] = 8] = "ALPHA";
})(COLOR_MASK_BITS2 || (COLOR_MASK_BITS2 = {}));
var MSAA_QUALITY2;
(function(MSAA_QUALITY4) {
  MSAA_QUALITY4[MSAA_QUALITY4["NONE"] = 0] = "NONE";
  MSAA_QUALITY4[MSAA_QUALITY4["LOW"] = 2] = "LOW";
  MSAA_QUALITY4[MSAA_QUALITY4["MEDIUM"] = 4] = "MEDIUM";
  MSAA_QUALITY4[MSAA_QUALITY4["HIGH"] = 8] = "HIGH";
})(MSAA_QUALITY2 || (MSAA_QUALITY2 = {}));
var BUFFER_TYPE2;
(function(BUFFER_TYPE4) {
  BUFFER_TYPE4[BUFFER_TYPE4["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
  BUFFER_TYPE4[BUFFER_TYPE4["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
  BUFFER_TYPE4[BUFFER_TYPE4["UNIFORM_BUFFER"] = 35345] = "UNIFORM_BUFFER";
})(BUFFER_TYPE2 || (BUFFER_TYPE2 = {}));

// node_modules/.pnpm/@pixi+utils@6.5.2_@pixi+constants@6.5.2_@pixi+settings@6.5.2/node_modules/@pixi/utils/dist/esm/utils.mjs
var utils_exports = {};
__export(utils_exports, {
  BaseTextureCache: () => BaseTextureCache,
  CanvasRenderTarget: () => CanvasRenderTarget,
  DATA_URI: () => DATA_URI,
  EventEmitter: () => import_eventemitter3.default,
  ProgramCache: () => ProgramCache,
  TextureCache: () => TextureCache,
  clearTextureCache: () => clearTextureCache,
  correctBlendMode: () => correctBlendMode,
  createIndicesForQuads: () => createIndicesForQuads,
  decomposeDataUri: () => decomposeDataUri,
  deprecation: () => deprecation,
  destroyTextureCache: () => destroyTextureCache,
  determineCrossOrigin: () => determineCrossOrigin,
  earcut: () => import_earcut.default,
  getBufferType: () => getBufferType,
  getResolutionOfUrl: () => getResolutionOfUrl,
  hex2rgb: () => hex2rgb,
  hex2string: () => hex2string,
  interleaveTypedArrays: () => interleaveTypedArrays,
  isMobile: () => isMobile,
  isPow2: () => isPow2,
  isWebGLSupported: () => isWebGLSupported,
  log2: () => log2,
  nextPow2: () => nextPow2,
  path: () => path,
  premultiplyBlendMode: () => premultiplyBlendMode,
  premultiplyRgba: () => premultiplyRgba,
  premultiplyTint: () => premultiplyTint,
  premultiplyTintToRgba: () => premultiplyTintToRgba,
  removeItems: () => removeItems,
  rgb2hex: () => rgb2hex,
  sayHello: () => sayHello,
  sign: () => sign,
  skipHello: () => skipHello,
  string2hex: () => string2hex,
  trimCanvas: () => trimCanvas,
  uid: () => uid,
  url: () => url
});
var import_eventemitter3 = __toESM(require_eventemitter3(), 1);
var import_earcut = __toESM(require_earcut(), 1);
var import_url = __toESM(require_url(), 1);
var url = {
  parse: import_url.parse,
  format: import_url.format,
  resolve: import_url.resolve
};
function assertPath(path2) {
  if (typeof path2 !== "string") {
    throw new TypeError("Path must be a string. Received " + JSON.stringify(path2));
  }
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
}
function normalizeStringPosix(path2, allowAboveRoot) {
  var res = "";
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path2.length; ++i) {
    if (i < path2.length) {
      code = path2.charCodeAt(i);
    } else if (code === 47) {
      break;
    } else {
      code = 47;
    }
    if (code === 47) {
      if (lastSlash === i - 1 || dots === 1)
        ;
      else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = "";
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0) {
            res += "/..";
          } else {
            res = "..";
          }
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += "/" + path2.slice(lastSlash + 1, i);
        } else {
          res = path2.slice(lastSlash + 1, i);
        }
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
var path = {
  /**
   * Converts a path to posix format.
   * @param path - The path to convert to posix
   */
  toPosix: function(path2) {
    return replaceAll(path2, "\\", "/");
  },
  /**
   * Checks if the path is a URL
   * @param path - The path to check
   */
  isUrl: function(path2) {
    return /^https?:/.test(this.toPosix(path2));
  },
  /**
   * Checks if the path is a data URL
   * @param path - The path to check
   */
  isDataUrl: function(path2) {
    return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(path2);
  },
  /**
   * Checks if the path has a protocol e.g. http://
   * This will return true for windows file paths
   * @param path - The path to check
   */
  hasProtocol: function(path2) {
    return /^[^/:]+:\//.test(this.toPosix(path2));
  },
  /**
   * Returns the protocol of the path e.g. http://, C:/, file:///
   * @param path - The path to get the protocol from
   */
  getProtocol: function(path2) {
    assertPath(path2);
    path2 = this.toPosix(path2);
    var protocol = "";
    var isFile = /^file:\/\/\//.exec(path2);
    var isHttp = /^[^/:]+:\/\//.exec(path2);
    var isWindows = /^[^/:]+:\//.exec(path2);
    if (isFile || isHttp || isWindows) {
      var arr = (isFile === null || isFile === void 0 ? void 0 : isFile[0]) || (isHttp === null || isHttp === void 0 ? void 0 : isHttp[0]) || (isWindows === null || isWindows === void 0 ? void 0 : isWindows[0]);
      protocol = arr;
      path2 = path2.slice(arr.length);
    }
    return protocol;
  },
  /**
   * Converts URL to an absolute path.
   * When loading from a Web Worker, we must use absolute paths.
   * If the URL is already absolute we return it as is
   * If it's not, we convert it
   * @param url - The URL to test
   * @param customBaseUrl - The base URL to use
   * @param customRootUrl - The root URL to use
   */
  toAbsolute: function(url2, customBaseUrl, customRootUrl) {
    if (this.isDataUrl(url2)) {
      return url2;
    }
    var baseUrl = this.toPosix(customBaseUrl !== null && customBaseUrl !== void 0 ? customBaseUrl : settings.ADAPTER.getBaseUrl());
    var rootUrl = this.toPosix(customRootUrl !== null && customRootUrl !== void 0 ? customRootUrl : this.rootname(baseUrl));
    assertPath(url2);
    url2 = this.toPosix(url2);
    if (url2.startsWith("/")) {
      return path.join(rootUrl, url2.slice(1));
    }
    var absolutePath = this.isAbsolute(url2) ? url2 : this.join(baseUrl, url2);
    return absolutePath;
  },
  /**
   * Normalizes the given path, resolving '..' and '.' segments
   * @param path - The path to normalize
   */
  normalize: function(path2) {
    path2 = this.toPosix(path2);
    assertPath(path2);
    if (path2.length === 0) {
      return ".";
    }
    var protocol = "";
    var isAbsolute = path2.startsWith("/");
    if (this.hasProtocol(path2)) {
      protocol = this.rootname(path2);
      path2 = path2.slice(protocol.length);
    }
    var trailingSeparator = path2.endsWith("/");
    path2 = normalizeStringPosix(path2, false);
    if (path2.length > 0 && trailingSeparator) {
      path2 += "/";
    }
    if (isAbsolute) {
      return "/" + path2;
    }
    return protocol + path2;
  },
  /**
   * Determines if path is an absolute path.
   * Absolute paths can be urls, data urls, or paths on disk
   * @param path - The path to test
   */
  isAbsolute: function(path2) {
    assertPath(path2);
    path2 = this.toPosix(path2);
    if (this.hasProtocol(path2)) {
      return true;
    }
    return path2.startsWith("/");
  },
  /**
   * Joins all given path segments together using the platform-specific separator as a delimiter,
   * then normalizes the resulting path
   * @param segments - The segments of the path to join
   */
  join: function() {
    var arguments$1 = arguments;
    var segments = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      segments[_i] = arguments$1[_i];
    }
    if (segments.length === 0) {
      return ".";
    }
    var joined;
    for (var i = 0; i < segments.length; ++i) {
      var arg = segments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === void 0) {
          joined = arg;
        } else {
          joined += "/" + arg;
        }
      }
    }
    if (joined === void 0) {
      return ".";
    }
    return this.normalize(joined);
  },
  /**
   * Returns the directory name of a path
   * @param path - The path to parse
   */
  dirname: function(path2) {
    assertPath(path2);
    if (path2.length === 0) {
      return ".";
    }
    path2 = this.toPosix(path2);
    var code = path2.charCodeAt(0);
    var hasRoot = code === 47;
    var end = -1;
    var matchedSlash = true;
    var proto = this.getProtocol(path2);
    var origpath = path2;
    path2 = path2.slice(proto.length);
    for (var i = path2.length - 1; i >= 1; --i) {
      code = path2.charCodeAt(i);
      if (code === 47) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        matchedSlash = false;
      }
    }
    if (end === -1) {
      return hasRoot ? "/" : this.isUrl(origpath) ? proto + path2 : proto;
    }
    if (hasRoot && end === 1) {
      return "//";
    }
    return proto + path2.slice(0, end);
  },
  /**
   * Returns the root of the path e.g. /, C:/, file:///, http://domain.com/
   * @param path - The path to parse
   */
  rootname: function(path2) {
    assertPath(path2);
    path2 = this.toPosix(path2);
    var root = "";
    if (path2.startsWith("/")) {
      root = "/";
    } else {
      root = this.getProtocol(path2);
    }
    if (this.isUrl(path2)) {
      var index = path2.indexOf("/", root.length);
      if (index !== -1) {
        root = path2.slice(0, index);
      } else {
        root = path2;
      }
      if (!root.endsWith("/")) {
        root += "/";
      }
    }
    return root;
  },
  /**
   * Returns the last portion of a path
   * @param path - The path to test
   * @param ext - Optional extension to remove
   */
  basename: function(path2, ext) {
    assertPath(path2);
    if (ext) {
      assertPath(ext);
    }
    path2 = this.toPosix(path2);
    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;
    if (ext !== void 0 && ext.length > 0 && ext.length <= path2.length) {
      if (ext.length === path2.length && ext === path2) {
        return "";
      }
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path2.length - 1; i >= 0; --i) {
        var code = path2.charCodeAt(i);
        if (code === 47) {
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                end = i;
              }
            } else {
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }
      if (start === end) {
        end = firstNonSlashEnd;
      } else if (end === -1) {
        end = path2.length;
      }
      return path2.slice(start, end);
    }
    for (i = path2.length - 1; i >= 0; --i) {
      if (path2.charCodeAt(i) === 47) {
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
    }
    if (end === -1) {
      return "";
    }
    return path2.slice(start, end);
  },
  /**
   * Returns the extension of the path, from the last occurrence of the . (period) character to end of string in the last
   * portion of the path. If there is no . in the last portion of the path, or if there are no . characters other than
   * the first character of the basename of path, an empty string is returned.
   * @param path - The path to parse
   */
  extname: function(path2) {
    assertPath(path2);
    path2 = this.toPosix(path2);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var preDotState = 0;
    for (var i = path2.length - 1; i >= 0; --i) {
      var code = path2.charCodeAt(i);
      if (code === 47) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46) {
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return "";
    }
    return path2.slice(startDot, end);
  },
  /**
   * Parses a path into an object containing the 'root', `dir`, `base`, `ext`, and `name` properties.
   * @param path - The path to parse
   */
  parse: function(path2) {
    assertPath(path2);
    var ret = { root: "", dir: "", base: "", ext: "", name: "" };
    if (path2.length === 0) {
      return ret;
    }
    path2 = this.toPosix(path2);
    var code = path2.charCodeAt(0);
    var isAbsolute = this.isAbsolute(path2);
    var start;
    ret.root = this.rootname(path2);
    if (isAbsolute || this.hasProtocol(path2)) {
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path2.length - 1;
    var preDotState = 0;
    for (; i >= start; --i) {
      code = path2.charCodeAt(i);
      if (code === 47) {
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46) {
        if (startDot === -1) {
          startDot = i;
        } else if (preDotState !== 1) {
          preDotState = 1;
        }
      } else if (startDot !== -1) {
        preDotState = -1;
      }
    }
    if (startDot === -1 || end === -1 || preDotState === 0 || preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) {
          ret.base = ret.name = path2.slice(1, end);
        } else {
          ret.base = ret.name = path2.slice(startPart, end);
        }
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path2.slice(1, startDot);
        ret.base = path2.slice(1, end);
      } else {
        ret.name = path2.slice(startPart, startDot);
        ret.base = path2.slice(startPart, end);
      }
      ret.ext = path2.slice(startDot, end);
    }
    ret.dir = this.dirname(path2);
    return ret;
  },
  sep: "/",
  delimiter: ":"
};
settings.RETINA_PREFIX = /@([0-9\.]+)x/;
settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false;
var saidHello = false;
var VERSION = "6.5.2";
function skipHello() {
  saidHello = true;
}
function sayHello(type) {
  var _a;
  if (saidHello) {
    return;
  }
  if (settings.ADAPTER.getNavigator().userAgent.toLowerCase().indexOf("chrome") > -1) {
    var args = [
      "\n %c %c %c PixiJS " + VERSION + " - ✰ " + type + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n",
      "background: #ff66a5; padding:5px 0;",
      "background: #ff66a5; padding:5px 0;",
      "color: #ff66a5; background: #030307; padding:5px 0;",
      "background: #ff66a5; padding:5px 0;",
      "background: #ffc3dc; padding:5px 0;",
      "background: #ff66a5; padding:5px 0;",
      "color: #ff2424; background: #fff; padding:5px 0;",
      "color: #ff2424; background: #fff; padding:5px 0;",
      "color: #ff2424; background: #fff; padding:5px 0;"
    ];
    (_a = globalThis.console).log.apply(_a, args);
  } else if (globalThis.console) {
    globalThis.console.log("PixiJS " + VERSION + " - " + type + " - http://www.pixijs.com/");
  }
  saidHello = true;
}
var supported;
function isWebGLSupported() {
  if (typeof supported === "undefined") {
    supported = function supported2() {
      var contextOptions = {
        stencil: true,
        failIfMajorPerformanceCaveat: settings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
      };
      try {
        if (!settings.ADAPTER.getWebGLRenderingContext()) {
          return false;
        }
        var canvas = settings.ADAPTER.createCanvas();
        var gl = canvas.getContext("webgl", contextOptions) || canvas.getContext("experimental-webgl", contextOptions);
        var success = !!(gl && gl.getContextAttributes().stencil);
        if (gl) {
          var loseContext = gl.getExtension("WEBGL_lose_context");
          if (loseContext) {
            loseContext.loseContext();
          }
        }
        gl = null;
        return success;
      } catch (e) {
        return false;
      }
    }();
  }
  return supported;
}
var aliceblue = "#f0f8ff";
var antiquewhite = "#faebd7";
var aqua = "#00ffff";
var aquamarine = "#7fffd4";
var azure = "#f0ffff";
var beige = "#f5f5dc";
var bisque = "#ffe4c4";
var black = "#000000";
var blanchedalmond = "#ffebcd";
var blue = "#0000ff";
var blueviolet = "#8a2be2";
var brown = "#a52a2a";
var burlywood = "#deb887";
var cadetblue = "#5f9ea0";
var chartreuse = "#7fff00";
var chocolate = "#d2691e";
var coral = "#ff7f50";
var cornflowerblue = "#6495ed";
var cornsilk = "#fff8dc";
var crimson = "#dc143c";
var cyan = "#00ffff";
var darkblue = "#00008b";
var darkcyan = "#008b8b";
var darkgoldenrod = "#b8860b";
var darkgray = "#a9a9a9";
var darkgreen = "#006400";
var darkgrey = "#a9a9a9";
var darkkhaki = "#bdb76b";
var darkmagenta = "#8b008b";
var darkolivegreen = "#556b2f";
var darkorange = "#ff8c00";
var darkorchid = "#9932cc";
var darkred = "#8b0000";
var darksalmon = "#e9967a";
var darkseagreen = "#8fbc8f";
var darkslateblue = "#483d8b";
var darkslategray = "#2f4f4f";
var darkslategrey = "#2f4f4f";
var darkturquoise = "#00ced1";
var darkviolet = "#9400d3";
var deeppink = "#ff1493";
var deepskyblue = "#00bfff";
var dimgray = "#696969";
var dimgrey = "#696969";
var dodgerblue = "#1e90ff";
var firebrick = "#b22222";
var floralwhite = "#fffaf0";
var forestgreen = "#228b22";
var fuchsia = "#ff00ff";
var gainsboro = "#dcdcdc";
var ghostwhite = "#f8f8ff";
var goldenrod = "#daa520";
var gold = "#ffd700";
var gray = "#808080";
var green = "#008000";
var greenyellow = "#adff2f";
var grey = "#808080";
var honeydew = "#f0fff0";
var hotpink = "#ff69b4";
var indianred = "#cd5c5c";
var indigo = "#4b0082";
var ivory = "#fffff0";
var khaki = "#f0e68c";
var lavenderblush = "#fff0f5";
var lavender = "#e6e6fa";
var lawngreen = "#7cfc00";
var lemonchiffon = "#fffacd";
var lightblue = "#add8e6";
var lightcoral = "#f08080";
var lightcyan = "#e0ffff";
var lightgoldenrodyellow = "#fafad2";
var lightgray = "#d3d3d3";
var lightgreen = "#90ee90";
var lightgrey = "#d3d3d3";
var lightpink = "#ffb6c1";
var lightsalmon = "#ffa07a";
var lightseagreen = "#20b2aa";
var lightskyblue = "#87cefa";
var lightslategray = "#778899";
var lightslategrey = "#778899";
var lightsteelblue = "#b0c4de";
var lightyellow = "#ffffe0";
var lime = "#00ff00";
var limegreen = "#32cd32";
var linen = "#faf0e6";
var magenta = "#ff00ff";
var maroon = "#800000";
var mediumaquamarine = "#66cdaa";
var mediumblue = "#0000cd";
var mediumorchid = "#ba55d3";
var mediumpurple = "#9370db";
var mediumseagreen = "#3cb371";
var mediumslateblue = "#7b68ee";
var mediumspringgreen = "#00fa9a";
var mediumturquoise = "#48d1cc";
var mediumvioletred = "#c71585";
var midnightblue = "#191970";
var mintcream = "#f5fffa";
var mistyrose = "#ffe4e1";
var moccasin = "#ffe4b5";
var navajowhite = "#ffdead";
var navy = "#000080";
var oldlace = "#fdf5e6";
var olive = "#808000";
var olivedrab = "#6b8e23";
var orange = "#ffa500";
var orangered = "#ff4500";
var orchid = "#da70d6";
var palegoldenrod = "#eee8aa";
var palegreen = "#98fb98";
var paleturquoise = "#afeeee";
var palevioletred = "#db7093";
var papayawhip = "#ffefd5";
var peachpuff = "#ffdab9";
var peru = "#cd853f";
var pink = "#ffc0cb";
var plum = "#dda0dd";
var powderblue = "#b0e0e6";
var purple = "#800080";
var rebeccapurple = "#663399";
var red = "#ff0000";
var rosybrown = "#bc8f8f";
var royalblue = "#4169e1";
var saddlebrown = "#8b4513";
var salmon = "#fa8072";
var sandybrown = "#f4a460";
var seagreen = "#2e8b57";
var seashell = "#fff5ee";
var sienna = "#a0522d";
var silver = "#c0c0c0";
var skyblue = "#87ceeb";
var slateblue = "#6a5acd";
var slategray = "#708090";
var slategrey = "#708090";
var snow = "#fffafa";
var springgreen = "#00ff7f";
var steelblue = "#4682b4";
var tan = "#d2b48c";
var teal = "#008080";
var thistle = "#d8bfd8";
var tomato = "#ff6347";
var turquoise = "#40e0d0";
var violet = "#ee82ee";
var wheat = "#f5deb3";
var white = "#ffffff";
var whitesmoke = "#f5f5f5";
var yellow = "#ffff00";
var yellowgreen = "#9acd32";
var cssColorNames = {
  aliceblue,
  antiquewhite,
  aqua,
  aquamarine,
  azure,
  beige,
  bisque,
  black,
  blanchedalmond,
  blue,
  blueviolet,
  brown,
  burlywood,
  cadetblue,
  chartreuse,
  chocolate,
  coral,
  cornflowerblue,
  cornsilk,
  crimson,
  cyan,
  darkblue,
  darkcyan,
  darkgoldenrod,
  darkgray,
  darkgreen,
  darkgrey,
  darkkhaki,
  darkmagenta,
  darkolivegreen,
  darkorange,
  darkorchid,
  darkred,
  darksalmon,
  darkseagreen,
  darkslateblue,
  darkslategray,
  darkslategrey,
  darkturquoise,
  darkviolet,
  deeppink,
  deepskyblue,
  dimgray,
  dimgrey,
  dodgerblue,
  firebrick,
  floralwhite,
  forestgreen,
  fuchsia,
  gainsboro,
  ghostwhite,
  goldenrod,
  gold,
  gray,
  green,
  greenyellow,
  grey,
  honeydew,
  hotpink,
  indianred,
  indigo,
  ivory,
  khaki,
  lavenderblush,
  lavender,
  lawngreen,
  lemonchiffon,
  lightblue,
  lightcoral,
  lightcyan,
  lightgoldenrodyellow,
  lightgray,
  lightgreen,
  lightgrey,
  lightpink,
  lightsalmon,
  lightseagreen,
  lightskyblue,
  lightslategray,
  lightslategrey,
  lightsteelblue,
  lightyellow,
  lime,
  limegreen,
  linen,
  magenta,
  maroon,
  mediumaquamarine,
  mediumblue,
  mediumorchid,
  mediumpurple,
  mediumseagreen,
  mediumslateblue,
  mediumspringgreen,
  mediumturquoise,
  mediumvioletred,
  midnightblue,
  mintcream,
  mistyrose,
  moccasin,
  navajowhite,
  navy,
  oldlace,
  olive,
  olivedrab,
  orange,
  orangered,
  orchid,
  palegoldenrod,
  palegreen,
  paleturquoise,
  palevioletred,
  papayawhip,
  peachpuff,
  peru,
  pink,
  plum,
  powderblue,
  purple,
  rebeccapurple,
  red,
  rosybrown,
  royalblue,
  saddlebrown,
  salmon,
  sandybrown,
  seagreen,
  seashell,
  sienna,
  silver,
  skyblue,
  slateblue,
  slategray,
  slategrey,
  snow,
  springgreen,
  steelblue,
  tan,
  teal,
  thistle,
  tomato,
  turquoise,
  violet,
  wheat,
  white,
  whitesmoke,
  yellow,
  yellowgreen
};
function hex2rgb(hex, out) {
  if (out === void 0) {
    out = [];
  }
  out[0] = (hex >> 16 & 255) / 255;
  out[1] = (hex >> 8 & 255) / 255;
  out[2] = (hex & 255) / 255;
  return out;
}
function hex2string(hex) {
  var hexString = hex.toString(16);
  hexString = "000000".substring(0, 6 - hexString.length) + hexString;
  return "#" + hexString;
}
function string2hex(string) {
  if (typeof string === "string") {
    string = cssColorNames[string.toLowerCase()] || string;
    if (string[0] === "#") {
      string = string.slice(1);
    }
  }
  return parseInt(string, 16);
}
function rgb2hex(rgb) {
  return (rgb[0] * 255 << 16) + (rgb[1] * 255 << 8) + (rgb[2] * 255 | 0);
}
function mapPremultipliedBlendModes() {
  var pm = [];
  var npm = [];
  for (var i = 0; i < 32; i++) {
    pm[i] = i;
    npm[i] = i;
  }
  pm[BLEND_MODES2.NORMAL_NPM] = BLEND_MODES2.NORMAL;
  pm[BLEND_MODES2.ADD_NPM] = BLEND_MODES2.ADD;
  pm[BLEND_MODES2.SCREEN_NPM] = BLEND_MODES2.SCREEN;
  npm[BLEND_MODES2.NORMAL] = BLEND_MODES2.NORMAL_NPM;
  npm[BLEND_MODES2.ADD] = BLEND_MODES2.ADD_NPM;
  npm[BLEND_MODES2.SCREEN] = BLEND_MODES2.SCREEN_NPM;
  var array = [];
  array.push(npm);
  array.push(pm);
  return array;
}
var premultiplyBlendMode = mapPremultipliedBlendModes();
function correctBlendMode(blendMode, premultiplied) {
  return premultiplyBlendMode[premultiplied ? 1 : 0][blendMode];
}
function premultiplyRgba(rgb, alpha, out, premultiply) {
  out = out || new Float32Array(4);
  if (premultiply || premultiply === void 0) {
    out[0] = rgb[0] * alpha;
    out[1] = rgb[1] * alpha;
    out[2] = rgb[2] * alpha;
  } else {
    out[0] = rgb[0];
    out[1] = rgb[1];
    out[2] = rgb[2];
  }
  out[3] = alpha;
  return out;
}
function premultiplyTint(tint, alpha) {
  if (alpha === 1) {
    return (alpha * 255 << 24) + tint;
  }
  if (alpha === 0) {
    return 0;
  }
  var R = tint >> 16 & 255;
  var G = tint >> 8 & 255;
  var B = tint & 255;
  R = R * alpha + 0.5 | 0;
  G = G * alpha + 0.5 | 0;
  B = B * alpha + 0.5 | 0;
  return (alpha * 255 << 24) + (R << 16) + (G << 8) + B;
}
function premultiplyTintToRgba(tint, alpha, out, premultiply) {
  out = out || new Float32Array(4);
  out[0] = (tint >> 16 & 255) / 255;
  out[1] = (tint >> 8 & 255) / 255;
  out[2] = (tint & 255) / 255;
  if (premultiply || premultiply === void 0) {
    out[0] *= alpha;
    out[1] *= alpha;
    out[2] *= alpha;
  }
  out[3] = alpha;
  return out;
}
function createIndicesForQuads(size, outBuffer) {
  if (outBuffer === void 0) {
    outBuffer = null;
  }
  var totalIndices = size * 6;
  outBuffer = outBuffer || new Uint16Array(totalIndices);
  if (outBuffer.length !== totalIndices) {
    throw new Error("Out buffer length is incorrect, got " + outBuffer.length + " and expected " + totalIndices);
  }
  for (var i = 0, j = 0; i < totalIndices; i += 6, j += 4) {
    outBuffer[i + 0] = j + 0;
    outBuffer[i + 1] = j + 1;
    outBuffer[i + 2] = j + 2;
    outBuffer[i + 3] = j + 0;
    outBuffer[i + 4] = j + 2;
    outBuffer[i + 5] = j + 3;
  }
  return outBuffer;
}
function getBufferType(array) {
  if (array.BYTES_PER_ELEMENT === 4) {
    if (array instanceof Float32Array) {
      return "Float32Array";
    } else if (array instanceof Uint32Array) {
      return "Uint32Array";
    }
    return "Int32Array";
  } else if (array.BYTES_PER_ELEMENT === 2) {
    if (array instanceof Uint16Array) {
      return "Uint16Array";
    }
  } else if (array.BYTES_PER_ELEMENT === 1) {
    if (array instanceof Uint8Array) {
      return "Uint8Array";
    }
  }
  return null;
}
var map = { Float32Array, Uint32Array, Int32Array, Uint8Array };
function interleaveTypedArrays(arrays, sizes) {
  var outSize = 0;
  var stride = 0;
  var views = {};
  for (var i = 0; i < arrays.length; i++) {
    stride += sizes[i];
    outSize += arrays[i].length;
  }
  var buffer = new ArrayBuffer(outSize * 4);
  var out = null;
  var littleOffset = 0;
  for (var i = 0; i < arrays.length; i++) {
    var size = sizes[i];
    var array = arrays[i];
    var type = getBufferType(array);
    if (!views[type]) {
      views[type] = new map[type](buffer);
    }
    out = views[type];
    for (var j = 0; j < array.length; j++) {
      var indexStart = (j / size | 0) * stride + littleOffset;
      var index = j % size;
      out[indexStart + index] = array[j];
    }
    littleOffset += size;
  }
  return new Float32Array(buffer);
}
function nextPow2(v) {
  v += v === 0 ? 1 : 0;
  --v;
  v |= v >>> 1;
  v |= v >>> 2;
  v |= v >>> 4;
  v |= v >>> 8;
  v |= v >>> 16;
  return v + 1;
}
function isPow2(v) {
  return !(v & v - 1) && !!v;
}
function log2(v) {
  var r = (v > 65535 ? 1 : 0) << 4;
  v >>>= r;
  var shift = (v > 255 ? 1 : 0) << 3;
  v >>>= shift;
  r |= shift;
  shift = (v > 15 ? 1 : 0) << 2;
  v >>>= shift;
  r |= shift;
  shift = (v > 3 ? 1 : 0) << 1;
  v >>>= shift;
  r |= shift;
  return r | v >> 1;
}
function removeItems(arr, startIdx, removeCount) {
  var length = arr.length;
  var i;
  if (startIdx >= length || removeCount === 0) {
    return;
  }
  removeCount = startIdx + removeCount > length ? length - startIdx : removeCount;
  var len = length - removeCount;
  for (i = startIdx; i < len; ++i) {
    arr[i] = arr[i + removeCount];
  }
  arr.length = len;
}
function sign(n) {
  if (n === 0) {
    return 0;
  }
  return n < 0 ? -1 : 1;
}
var nextUid = 0;
function uid() {
  return ++nextUid;
}
var warnings = {};
function deprecation(version, message, ignoreDepth) {
  if (ignoreDepth === void 0) {
    ignoreDepth = 3;
  }
  if (warnings[message]) {
    return;
  }
  var stack = new Error().stack;
  if (typeof stack === "undefined") {
    console.warn("PixiJS Deprecation Warning: ", message + "\nDeprecated since v" + version);
  } else {
    stack = stack.split("\n").splice(ignoreDepth).join("\n");
    if (console.groupCollapsed) {
      console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", message + "\nDeprecated since v" + version);
      console.warn(stack);
      console.groupEnd();
    } else {
      console.warn("PixiJS Deprecation Warning: ", message + "\nDeprecated since v" + version);
      console.warn(stack);
    }
  }
  warnings[message] = true;
}
var ProgramCache = {};
var TextureCache = /* @__PURE__ */ Object.create(null);
var BaseTextureCache = /* @__PURE__ */ Object.create(null);
function destroyTextureCache() {
  var key;
  for (key in TextureCache) {
    TextureCache[key].destroy();
  }
  for (key in BaseTextureCache) {
    BaseTextureCache[key].destroy();
  }
}
function clearTextureCache() {
  var key;
  for (key in TextureCache) {
    delete TextureCache[key];
  }
  for (key in BaseTextureCache) {
    delete BaseTextureCache[key];
  }
}
var CanvasRenderTarget = (
  /** @class */
  function() {
    function CanvasRenderTarget2(width, height, resolution) {
      this.canvas = settings.ADAPTER.createCanvas();
      this.context = this.canvas.getContext("2d");
      this.resolution = resolution || settings.RESOLUTION;
      this.resize(width, height);
    }
    CanvasRenderTarget2.prototype.clear = function() {
      this.context.setTransform(1, 0, 0, 1, 0, 0);
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    CanvasRenderTarget2.prototype.resize = function(desiredWidth, desiredHeight) {
      this.canvas.width = Math.round(desiredWidth * this.resolution);
      this.canvas.height = Math.round(desiredHeight * this.resolution);
    };
    CanvasRenderTarget2.prototype.destroy = function() {
      this.context = null;
      this.canvas = null;
    };
    Object.defineProperty(CanvasRenderTarget2.prototype, "width", {
      /**
       * The width of the canvas buffer in pixels.
       * @member {number}
       */
      get: function() {
        return this.canvas.width;
      },
      set: function(val) {
        this.canvas.width = Math.round(val);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(CanvasRenderTarget2.prototype, "height", {
      /**
       * The height of the canvas buffer in pixels.
       * @member {number}
       */
      get: function() {
        return this.canvas.height;
      },
      set: function(val) {
        this.canvas.height = Math.round(val);
      },
      enumerable: false,
      configurable: true
    });
    return CanvasRenderTarget2;
  }()
);
function trimCanvas(canvas) {
  var width = canvas.width;
  var height = canvas.height;
  var context2 = canvas.getContext("2d");
  var imageData = context2.getImageData(0, 0, width, height);
  var pixels = imageData.data;
  var len = pixels.length;
  var bound = {
    top: null,
    left: null,
    right: null,
    bottom: null
  };
  var data = null;
  var i;
  var x;
  var y;
  for (i = 0; i < len; i += 4) {
    if (pixels[i + 3] !== 0) {
      x = i / 4 % width;
      y = ~~(i / 4 / width);
      if (bound.top === null) {
        bound.top = y;
      }
      if (bound.left === null) {
        bound.left = x;
      } else if (x < bound.left) {
        bound.left = x;
      }
      if (bound.right === null) {
        bound.right = x + 1;
      } else if (bound.right < x) {
        bound.right = x + 1;
      }
      if (bound.bottom === null) {
        bound.bottom = y;
      } else if (bound.bottom < y) {
        bound.bottom = y;
      }
    }
  }
  if (bound.top !== null) {
    width = bound.right - bound.left;
    height = bound.bottom - bound.top + 1;
    data = context2.getImageData(bound.left, bound.top, width, height);
  }
  return {
    height,
    width,
    data
  };
}
var DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
function decomposeDataUri(dataUri) {
  var dataUriMatch = DATA_URI.exec(dataUri);
  if (dataUriMatch) {
    return {
      mediaType: dataUriMatch[1] ? dataUriMatch[1].toLowerCase() : void 0,
      subType: dataUriMatch[2] ? dataUriMatch[2].toLowerCase() : void 0,
      charset: dataUriMatch[3] ? dataUriMatch[3].toLowerCase() : void 0,
      encoding: dataUriMatch[4] ? dataUriMatch[4].toLowerCase() : void 0,
      data: dataUriMatch[5]
    };
  }
  return void 0;
}
var tempAnchor;
function determineCrossOrigin(url$1, loc) {
  if (loc === void 0) {
    loc = globalThis.location;
  }
  if (url$1.indexOf("data:") === 0) {
    return "";
  }
  loc = loc || globalThis.location;
  if (!tempAnchor) {
    tempAnchor = document.createElement("a");
  }
  tempAnchor.href = url$1;
  var parsedUrl = url.parse(tempAnchor.href);
  var samePort = !parsedUrl.port && loc.port === "" || parsedUrl.port === loc.port;
  if (parsedUrl.hostname !== loc.hostname || !samePort || parsedUrl.protocol !== loc.protocol) {
    return "anonymous";
  }
  return "";
}
function getResolutionOfUrl(url2, defaultValue2) {
  var resolution = settings.RETINA_PREFIX.exec(url2);
  if (resolution) {
    return parseFloat(resolution[1]);
  }
  return defaultValue2 !== void 0 ? defaultValue2 : 1;
}

// node_modules/.pnpm/@pixi+math@6.5.2/node_modules/@pixi/math/dist/esm/math.mjs
var PI_2 = Math.PI * 2;
var RAD_TO_DEG = 180 / Math.PI;
var DEG_TO_RAD = Math.PI / 180;
var SHAPES;
(function(SHAPES2) {
  SHAPES2[SHAPES2["POLY"] = 0] = "POLY";
  SHAPES2[SHAPES2["RECT"] = 1] = "RECT";
  SHAPES2[SHAPES2["CIRC"] = 2] = "CIRC";
  SHAPES2[SHAPES2["ELIP"] = 3] = "ELIP";
  SHAPES2[SHAPES2["RREC"] = 4] = "RREC";
})(SHAPES || (SHAPES = {}));
var Point = (
  /** @class */
  function() {
    function Point2(x, y) {
      if (x === void 0) {
        x = 0;
      }
      if (y === void 0) {
        y = 0;
      }
      this.x = 0;
      this.y = 0;
      this.x = x;
      this.y = y;
    }
    Point2.prototype.clone = function() {
      return new Point2(this.x, this.y);
    };
    Point2.prototype.copyFrom = function(p) {
      this.set(p.x, p.y);
      return this;
    };
    Point2.prototype.copyTo = function(p) {
      p.set(this.x, this.y);
      return p;
    };
    Point2.prototype.equals = function(p) {
      return p.x === this.x && p.y === this.y;
    };
    Point2.prototype.set = function(x, y) {
      if (x === void 0) {
        x = 0;
      }
      if (y === void 0) {
        y = x;
      }
      this.x = x;
      this.y = y;
      return this;
    };
    Point2.prototype.toString = function() {
      return "[@pixi/math:Point x=" + this.x + " y=" + this.y + "]";
    };
    return Point2;
  }()
);
var tempPoints = [new Point(), new Point(), new Point(), new Point()];
var Rectangle = (
  /** @class */
  function() {
    function Rectangle2(x, y, width, height) {
      if (x === void 0) {
        x = 0;
      }
      if (y === void 0) {
        y = 0;
      }
      if (width === void 0) {
        width = 0;
      }
      if (height === void 0) {
        height = 0;
      }
      this.x = Number(x);
      this.y = Number(y);
      this.width = Number(width);
      this.height = Number(height);
      this.type = SHAPES.RECT;
    }
    Object.defineProperty(Rectangle2.prototype, "left", {
      /** Returns the left edge of the rectangle. */
      get: function() {
        return this.x;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Rectangle2.prototype, "right", {
      /** Returns the right edge of the rectangle. */
      get: function() {
        return this.x + this.width;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Rectangle2.prototype, "top", {
      /** Returns the top edge of the rectangle. */
      get: function() {
        return this.y;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Rectangle2.prototype, "bottom", {
      /** Returns the bottom edge of the rectangle. */
      get: function() {
        return this.y + this.height;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Rectangle2, "EMPTY", {
      /** A constant empty rectangle. */
      get: function() {
        return new Rectangle2(0, 0, 0, 0);
      },
      enumerable: false,
      configurable: true
    });
    Rectangle2.prototype.clone = function() {
      return new Rectangle2(this.x, this.y, this.width, this.height);
    };
    Rectangle2.prototype.copyFrom = function(rectangle) {
      this.x = rectangle.x;
      this.y = rectangle.y;
      this.width = rectangle.width;
      this.height = rectangle.height;
      return this;
    };
    Rectangle2.prototype.copyTo = function(rectangle) {
      rectangle.x = this.x;
      rectangle.y = this.y;
      rectangle.width = this.width;
      rectangle.height = this.height;
      return rectangle;
    };
    Rectangle2.prototype.contains = function(x, y) {
      if (this.width <= 0 || this.height <= 0) {
        return false;
      }
      if (x >= this.x && x < this.x + this.width) {
        if (y >= this.y && y < this.y + this.height) {
          return true;
        }
      }
      return false;
    };
    Rectangle2.prototype.intersects = function(other, transform) {
      if (!transform) {
        var x0_1 = this.x < other.x ? other.x : this.x;
        var x1_1 = this.right > other.right ? other.right : this.right;
        if (x1_1 <= x0_1) {
          return false;
        }
        var y0_1 = this.y < other.y ? other.y : this.y;
        var y1_1 = this.bottom > other.bottom ? other.bottom : this.bottom;
        return y1_1 > y0_1;
      }
      var x0 = this.left;
      var x1 = this.right;
      var y0 = this.top;
      var y1 = this.bottom;
      if (x1 <= x0 || y1 <= y0) {
        return false;
      }
      var lt = tempPoints[0].set(other.left, other.top);
      var lb = tempPoints[1].set(other.left, other.bottom);
      var rt = tempPoints[2].set(other.right, other.top);
      var rb = tempPoints[3].set(other.right, other.bottom);
      if (rt.x <= lt.x || lb.y <= lt.y) {
        return false;
      }
      var s = Math.sign(transform.a * transform.d - transform.b * transform.c);
      if (s === 0) {
        return false;
      }
      transform.apply(lt, lt);
      transform.apply(lb, lb);
      transform.apply(rt, rt);
      transform.apply(rb, rb);
      if (Math.max(lt.x, lb.x, rt.x, rb.x) <= x0 || Math.min(lt.x, lb.x, rt.x, rb.x) >= x1 || Math.max(lt.y, lb.y, rt.y, rb.y) <= y0 || Math.min(lt.y, lb.y, rt.y, rb.y) >= y1) {
        return false;
      }
      var nx = s * (lb.y - lt.y);
      var ny = s * (lt.x - lb.x);
      var n00 = nx * x0 + ny * y0;
      var n10 = nx * x1 + ny * y0;
      var n01 = nx * x0 + ny * y1;
      var n11 = nx * x1 + ny * y1;
      if (Math.max(n00, n10, n01, n11) <= nx * lt.x + ny * lt.y || Math.min(n00, n10, n01, n11) >= nx * rb.x + ny * rb.y) {
        return false;
      }
      var mx = s * (lt.y - rt.y);
      var my = s * (rt.x - lt.x);
      var m00 = mx * x0 + my * y0;
      var m10 = mx * x1 + my * y0;
      var m01 = mx * x0 + my * y1;
      var m11 = mx * x1 + my * y1;
      if (Math.max(m00, m10, m01, m11) <= mx * lt.x + my * lt.y || Math.min(m00, m10, m01, m11) >= mx * rb.x + my * rb.y) {
        return false;
      }
      return true;
    };
    Rectangle2.prototype.pad = function(paddingX, paddingY) {
      if (paddingX === void 0) {
        paddingX = 0;
      }
      if (paddingY === void 0) {
        paddingY = paddingX;
      }
      this.x -= paddingX;
      this.y -= paddingY;
      this.width += paddingX * 2;
      this.height += paddingY * 2;
      return this;
    };
    Rectangle2.prototype.fit = function(rectangle) {
      var x1 = Math.max(this.x, rectangle.x);
      var x2 = Math.min(this.x + this.width, rectangle.x + rectangle.width);
      var y1 = Math.max(this.y, rectangle.y);
      var y2 = Math.min(this.y + this.height, rectangle.y + rectangle.height);
      this.x = x1;
      this.width = Math.max(x2 - x1, 0);
      this.y = y1;
      this.height = Math.max(y2 - y1, 0);
      return this;
    };
    Rectangle2.prototype.ceil = function(resolution, eps) {
      if (resolution === void 0) {
        resolution = 1;
      }
      if (eps === void 0) {
        eps = 1e-3;
      }
      var x2 = Math.ceil((this.x + this.width - eps) * resolution) / resolution;
      var y2 = Math.ceil((this.y + this.height - eps) * resolution) / resolution;
      this.x = Math.floor((this.x + eps) * resolution) / resolution;
      this.y = Math.floor((this.y + eps) * resolution) / resolution;
      this.width = x2 - this.x;
      this.height = y2 - this.y;
      return this;
    };
    Rectangle2.prototype.enlarge = function(rectangle) {
      var x1 = Math.min(this.x, rectangle.x);
      var x2 = Math.max(this.x + this.width, rectangle.x + rectangle.width);
      var y1 = Math.min(this.y, rectangle.y);
      var y2 = Math.max(this.y + this.height, rectangle.y + rectangle.height);
      this.x = x1;
      this.width = x2 - x1;
      this.y = y1;
      this.height = y2 - y1;
      return this;
    };
    Rectangle2.prototype.toString = function() {
      return "[@pixi/math:Rectangle x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]";
    };
    return Rectangle2;
  }()
);
var Circle = (
  /** @class */
  function() {
    function Circle2(x, y, radius) {
      if (x === void 0) {
        x = 0;
      }
      if (y === void 0) {
        y = 0;
      }
      if (radius === void 0) {
        radius = 0;
      }
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.type = SHAPES.CIRC;
    }
    Circle2.prototype.clone = function() {
      return new Circle2(this.x, this.y, this.radius);
    };
    Circle2.prototype.contains = function(x, y) {
      if (this.radius <= 0) {
        return false;
      }
      var r2 = this.radius * this.radius;
      var dx = this.x - x;
      var dy = this.y - y;
      dx *= dx;
      dy *= dy;
      return dx + dy <= r2;
    };
    Circle2.prototype.getBounds = function() {
      return new Rectangle(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
    };
    Circle2.prototype.toString = function() {
      return "[@pixi/math:Circle x=" + this.x + " y=" + this.y + " radius=" + this.radius + "]";
    };
    return Circle2;
  }()
);
var Ellipse = (
  /** @class */
  function() {
    function Ellipse2(x, y, halfWidth, halfHeight) {
      if (x === void 0) {
        x = 0;
      }
      if (y === void 0) {
        y = 0;
      }
      if (halfWidth === void 0) {
        halfWidth = 0;
      }
      if (halfHeight === void 0) {
        halfHeight = 0;
      }
      this.x = x;
      this.y = y;
      this.width = halfWidth;
      this.height = halfHeight;
      this.type = SHAPES.ELIP;
    }
    Ellipse2.prototype.clone = function() {
      return new Ellipse2(this.x, this.y, this.width, this.height);
    };
    Ellipse2.prototype.contains = function(x, y) {
      if (this.width <= 0 || this.height <= 0) {
        return false;
      }
      var normx = (x - this.x) / this.width;
      var normy = (y - this.y) / this.height;
      normx *= normx;
      normy *= normy;
      return normx + normy <= 1;
    };
    Ellipse2.prototype.getBounds = function() {
      return new Rectangle(this.x - this.width, this.y - this.height, this.width, this.height);
    };
    Ellipse2.prototype.toString = function() {
      return "[@pixi/math:Ellipse x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]";
    };
    return Ellipse2;
  }()
);
var Polygon = (
  /** @class */
  function() {
    function Polygon2() {
      var arguments$1 = arguments;
      var points = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        points[_i] = arguments$1[_i];
      }
      var flat = Array.isArray(points[0]) ? points[0] : points;
      if (typeof flat[0] !== "number") {
        var p = [];
        for (var i = 0, il = flat.length; i < il; i++) {
          p.push(flat[i].x, flat[i].y);
        }
        flat = p;
      }
      this.points = flat;
      this.type = SHAPES.POLY;
      this.closeStroke = true;
    }
    Polygon2.prototype.clone = function() {
      var points = this.points.slice();
      var polygon = new Polygon2(points);
      polygon.closeStroke = this.closeStroke;
      return polygon;
    };
    Polygon2.prototype.contains = function(x, y) {
      var inside = false;
      var length = this.points.length / 2;
      for (var i = 0, j = length - 1; i < length; j = i++) {
        var xi = this.points[i * 2];
        var yi = this.points[i * 2 + 1];
        var xj = this.points[j * 2];
        var yj = this.points[j * 2 + 1];
        var intersect = yi > y !== yj > y && x < (xj - xi) * ((y - yi) / (yj - yi)) + xi;
        if (intersect) {
          inside = !inside;
        }
      }
      return inside;
    };
    Polygon2.prototype.toString = function() {
      return "[@pixi/math:Polygon" + ("closeStroke=" + this.closeStroke) + ("points=" + this.points.reduce(function(pointsDesc, currentPoint) {
        return pointsDesc + ", " + currentPoint;
      }, "") + "]");
    };
    return Polygon2;
  }()
);
var RoundedRectangle = (
  /** @class */
  function() {
    function RoundedRectangle2(x, y, width, height, radius) {
      if (x === void 0) {
        x = 0;
      }
      if (y === void 0) {
        y = 0;
      }
      if (width === void 0) {
        width = 0;
      }
      if (height === void 0) {
        height = 0;
      }
      if (radius === void 0) {
        radius = 20;
      }
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.radius = radius;
      this.type = SHAPES.RREC;
    }
    RoundedRectangle2.prototype.clone = function() {
      return new RoundedRectangle2(this.x, this.y, this.width, this.height, this.radius);
    };
    RoundedRectangle2.prototype.contains = function(x, y) {
      if (this.width <= 0 || this.height <= 0) {
        return false;
      }
      if (x >= this.x && x <= this.x + this.width) {
        if (y >= this.y && y <= this.y + this.height) {
          var radius = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
          if (y >= this.y + radius && y <= this.y + this.height - radius || x >= this.x + radius && x <= this.x + this.width - radius) {
            return true;
          }
          var dx = x - (this.x + radius);
          var dy = y - (this.y + radius);
          var radius2 = radius * radius;
          if (dx * dx + dy * dy <= radius2) {
            return true;
          }
          dx = x - (this.x + this.width - radius);
          if (dx * dx + dy * dy <= radius2) {
            return true;
          }
          dy = y - (this.y + this.height - radius);
          if (dx * dx + dy * dy <= radius2) {
            return true;
          }
          dx = x - (this.x + radius);
          if (dx * dx + dy * dy <= radius2) {
            return true;
          }
        }
      }
      return false;
    };
    RoundedRectangle2.prototype.toString = function() {
      return "[@pixi/math:RoundedRectangle x=" + this.x + " y=" + this.y + ("width=" + this.width + " height=" + this.height + " radius=" + this.radius + "]");
    };
    return RoundedRectangle2;
  }()
);
var ObservablePoint = (
  /** @class */
  function() {
    function ObservablePoint2(cb, scope, x, y) {
      if (x === void 0) {
        x = 0;
      }
      if (y === void 0) {
        y = 0;
      }
      this._x = x;
      this._y = y;
      this.cb = cb;
      this.scope = scope;
    }
    ObservablePoint2.prototype.clone = function(cb, scope) {
      if (cb === void 0) {
        cb = this.cb;
      }
      if (scope === void 0) {
        scope = this.scope;
      }
      return new ObservablePoint2(cb, scope, this._x, this._y);
    };
    ObservablePoint2.prototype.set = function(x, y) {
      if (x === void 0) {
        x = 0;
      }
      if (y === void 0) {
        y = x;
      }
      if (this._x !== x || this._y !== y) {
        this._x = x;
        this._y = y;
        this.cb.call(this.scope);
      }
      return this;
    };
    ObservablePoint2.prototype.copyFrom = function(p) {
      if (this._x !== p.x || this._y !== p.y) {
        this._x = p.x;
        this._y = p.y;
        this.cb.call(this.scope);
      }
      return this;
    };
    ObservablePoint2.prototype.copyTo = function(p) {
      p.set(this._x, this._y);
      return p;
    };
    ObservablePoint2.prototype.equals = function(p) {
      return p.x === this._x && p.y === this._y;
    };
    ObservablePoint2.prototype.toString = function() {
      return "[@pixi/math:ObservablePoint x=0 y=0 scope=" + this.scope + "]";
    };
    Object.defineProperty(ObservablePoint2.prototype, "x", {
      /** Position of the observable point on the x axis. */
      get: function() {
        return this._x;
      },
      set: function(value) {
        if (this._x !== value) {
          this._x = value;
          this.cb.call(this.scope);
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ObservablePoint2.prototype, "y", {
      /** Position of the observable point on the y axis. */
      get: function() {
        return this._y;
      },
      set: function(value) {
        if (this._y !== value) {
          this._y = value;
          this.cb.call(this.scope);
        }
      },
      enumerable: false,
      configurable: true
    });
    return ObservablePoint2;
  }()
);
var Matrix = (
  /** @class */
  function() {
    function Matrix2(a, b, c, d, tx, ty) {
      if (a === void 0) {
        a = 1;
      }
      if (b === void 0) {
        b = 0;
      }
      if (c === void 0) {
        c = 0;
      }
      if (d === void 0) {
        d = 1;
      }
      if (tx === void 0) {
        tx = 0;
      }
      if (ty === void 0) {
        ty = 0;
      }
      this.array = null;
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.tx = tx;
      this.ty = ty;
    }
    Matrix2.prototype.fromArray = function(array) {
      this.a = array[0];
      this.b = array[1];
      this.c = array[3];
      this.d = array[4];
      this.tx = array[2];
      this.ty = array[5];
    };
    Matrix2.prototype.set = function(a, b, c, d, tx, ty) {
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.tx = tx;
      this.ty = ty;
      return this;
    };
    Matrix2.prototype.toArray = function(transpose, out) {
      if (!this.array) {
        this.array = new Float32Array(9);
      }
      var array = out || this.array;
      if (transpose) {
        array[0] = this.a;
        array[1] = this.b;
        array[2] = 0;
        array[3] = this.c;
        array[4] = this.d;
        array[5] = 0;
        array[6] = this.tx;
        array[7] = this.ty;
        array[8] = 1;
      } else {
        array[0] = this.a;
        array[1] = this.c;
        array[2] = this.tx;
        array[3] = this.b;
        array[4] = this.d;
        array[5] = this.ty;
        array[6] = 0;
        array[7] = 0;
        array[8] = 1;
      }
      return array;
    };
    Matrix2.prototype.apply = function(pos, newPos) {
      newPos = newPos || new Point();
      var x = pos.x;
      var y = pos.y;
      newPos.x = this.a * x + this.c * y + this.tx;
      newPos.y = this.b * x + this.d * y + this.ty;
      return newPos;
    };
    Matrix2.prototype.applyInverse = function(pos, newPos) {
      newPos = newPos || new Point();
      var id = 1 / (this.a * this.d + this.c * -this.b);
      var x = pos.x;
      var y = pos.y;
      newPos.x = this.d * id * x + -this.c * id * y + (this.ty * this.c - this.tx * this.d) * id;
      newPos.y = this.a * id * y + -this.b * id * x + (-this.ty * this.a + this.tx * this.b) * id;
      return newPos;
    };
    Matrix2.prototype.translate = function(x, y) {
      this.tx += x;
      this.ty += y;
      return this;
    };
    Matrix2.prototype.scale = function(x, y) {
      this.a *= x;
      this.d *= y;
      this.c *= x;
      this.b *= y;
      this.tx *= x;
      this.ty *= y;
      return this;
    };
    Matrix2.prototype.rotate = function(angle) {
      var cos = Math.cos(angle);
      var sin = Math.sin(angle);
      var a1 = this.a;
      var c1 = this.c;
      var tx1 = this.tx;
      this.a = a1 * cos - this.b * sin;
      this.b = a1 * sin + this.b * cos;
      this.c = c1 * cos - this.d * sin;
      this.d = c1 * sin + this.d * cos;
      this.tx = tx1 * cos - this.ty * sin;
      this.ty = tx1 * sin + this.ty * cos;
      return this;
    };
    Matrix2.prototype.append = function(matrix) {
      var a1 = this.a;
      var b1 = this.b;
      var c1 = this.c;
      var d1 = this.d;
      this.a = matrix.a * a1 + matrix.b * c1;
      this.b = matrix.a * b1 + matrix.b * d1;
      this.c = matrix.c * a1 + matrix.d * c1;
      this.d = matrix.c * b1 + matrix.d * d1;
      this.tx = matrix.tx * a1 + matrix.ty * c1 + this.tx;
      this.ty = matrix.tx * b1 + matrix.ty * d1 + this.ty;
      return this;
    };
    Matrix2.prototype.setTransform = function(x, y, pivotX, pivotY, scaleX, scaleY, rotation, skewX, skewY) {
      this.a = Math.cos(rotation + skewY) * scaleX;
      this.b = Math.sin(rotation + skewY) * scaleX;
      this.c = -Math.sin(rotation - skewX) * scaleY;
      this.d = Math.cos(rotation - skewX) * scaleY;
      this.tx = x - (pivotX * this.a + pivotY * this.c);
      this.ty = y - (pivotX * this.b + pivotY * this.d);
      return this;
    };
    Matrix2.prototype.prepend = function(matrix) {
      var tx1 = this.tx;
      if (matrix.a !== 1 || matrix.b !== 0 || matrix.c !== 0 || matrix.d !== 1) {
        var a1 = this.a;
        var c1 = this.c;
        this.a = a1 * matrix.a + this.b * matrix.c;
        this.b = a1 * matrix.b + this.b * matrix.d;
        this.c = c1 * matrix.a + this.d * matrix.c;
        this.d = c1 * matrix.b + this.d * matrix.d;
      }
      this.tx = tx1 * matrix.a + this.ty * matrix.c + matrix.tx;
      this.ty = tx1 * matrix.b + this.ty * matrix.d + matrix.ty;
      return this;
    };
    Matrix2.prototype.decompose = function(transform) {
      var a = this.a;
      var b = this.b;
      var c = this.c;
      var d = this.d;
      var pivot = transform.pivot;
      var skewX = -Math.atan2(-c, d);
      var skewY = Math.atan2(b, a);
      var delta = Math.abs(skewX + skewY);
      if (delta < 1e-5 || Math.abs(PI_2 - delta) < 1e-5) {
        transform.rotation = skewY;
        transform.skew.x = transform.skew.y = 0;
      } else {
        transform.rotation = 0;
        transform.skew.x = skewX;
        transform.skew.y = skewY;
      }
      transform.scale.x = Math.sqrt(a * a + b * b);
      transform.scale.y = Math.sqrt(c * c + d * d);
      transform.position.x = this.tx + (pivot.x * a + pivot.y * c);
      transform.position.y = this.ty + (pivot.x * b + pivot.y * d);
      return transform;
    };
    Matrix2.prototype.invert = function() {
      var a1 = this.a;
      var b1 = this.b;
      var c1 = this.c;
      var d1 = this.d;
      var tx1 = this.tx;
      var n = a1 * d1 - b1 * c1;
      this.a = d1 / n;
      this.b = -b1 / n;
      this.c = -c1 / n;
      this.d = a1 / n;
      this.tx = (c1 * this.ty - d1 * tx1) / n;
      this.ty = -(a1 * this.ty - b1 * tx1) / n;
      return this;
    };
    Matrix2.prototype.identity = function() {
      this.a = 1;
      this.b = 0;
      this.c = 0;
      this.d = 1;
      this.tx = 0;
      this.ty = 0;
      return this;
    };
    Matrix2.prototype.clone = function() {
      var matrix = new Matrix2();
      matrix.a = this.a;
      matrix.b = this.b;
      matrix.c = this.c;
      matrix.d = this.d;
      matrix.tx = this.tx;
      matrix.ty = this.ty;
      return matrix;
    };
    Matrix2.prototype.copyTo = function(matrix) {
      matrix.a = this.a;
      matrix.b = this.b;
      matrix.c = this.c;
      matrix.d = this.d;
      matrix.tx = this.tx;
      matrix.ty = this.ty;
      return matrix;
    };
    Matrix2.prototype.copyFrom = function(matrix) {
      this.a = matrix.a;
      this.b = matrix.b;
      this.c = matrix.c;
      this.d = matrix.d;
      this.tx = matrix.tx;
      this.ty = matrix.ty;
      return this;
    };
    Matrix2.prototype.toString = function() {
      return "[@pixi/math:Matrix a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + "]";
    };
    Object.defineProperty(Matrix2, "IDENTITY", {
      /**
       * A default (identity) matrix
       * @readonly
       */
      get: function() {
        return new Matrix2();
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Matrix2, "TEMP_MATRIX", {
      /**
       * A temp matrix
       * @readonly
       */
      get: function() {
        return new Matrix2();
      },
      enumerable: false,
      configurable: true
    });
    return Matrix2;
  }()
);
var ux = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1];
var uy = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1];
var vx = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1];
var vy = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1];
var rotationCayley = [];
var rotationMatrices = [];
var signum = Math.sign;
function init() {
  for (var i = 0; i < 16; i++) {
    var row = [];
    rotationCayley.push(row);
    for (var j = 0; j < 16; j++) {
      var _ux = signum(ux[i] * ux[j] + vx[i] * uy[j]);
      var _uy = signum(uy[i] * ux[j] + vy[i] * uy[j]);
      var _vx = signum(ux[i] * vx[j] + vx[i] * vy[j]);
      var _vy = signum(uy[i] * vx[j] + vy[i] * vy[j]);
      for (var k = 0; k < 16; k++) {
        if (ux[k] === _ux && uy[k] === _uy && vx[k] === _vx && vy[k] === _vy) {
          row.push(k);
          break;
        }
      }
    }
  }
  for (var i = 0; i < 16; i++) {
    var mat = new Matrix();
    mat.set(ux[i], uy[i], vx[i], vy[i], 0, 0);
    rotationMatrices.push(mat);
  }
}
init();
var groupD8 = {
  /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 0°       | East      |
   * @memberof PIXI.groupD8
   * @constant {PIXI.GD8Symmetry}
   */
  E: 0,
  /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 45°↻     | Southeast |
   * @memberof PIXI.groupD8
   * @constant {PIXI.GD8Symmetry}
   */
  SE: 1,
  /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 90°↻     | South     |
   * @memberof PIXI.groupD8
   * @constant {PIXI.GD8Symmetry}
   */
  S: 2,
  /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 135°↻    | Southwest |
   * @memberof PIXI.groupD8
   * @constant {PIXI.GD8Symmetry}
   */
  SW: 3,
  /**
   * | Rotation | Direction |
   * |----------|-----------|
   * | 180°     | West      |
   * @memberof PIXI.groupD8
   * @constant {PIXI.GD8Symmetry}
   */
  W: 4,
  /**
   * | Rotation    | Direction    |
   * |-------------|--------------|
   * | -135°/225°↻ | Northwest    |
   * @memberof PIXI.groupD8
   * @constant {PIXI.GD8Symmetry}
   */
  NW: 5,
  /**
   * | Rotation    | Direction    |
   * |-------------|--------------|
   * | -90°/270°↻  | North        |
   * @memberof PIXI.groupD8
   * @constant {PIXI.GD8Symmetry}
   */
  N: 6,
  /**
   * | Rotation    | Direction    |
   * |-------------|--------------|
   * | -45°/315°↻  | Northeast    |
   * @memberof PIXI.groupD8
   * @constant {PIXI.GD8Symmetry}
   */
  NE: 7,
  /**
   * Reflection about Y-axis.
   * @memberof PIXI.groupD8
   * @constant {PIXI.GD8Symmetry}
   */
  MIRROR_VERTICAL: 8,
  /**
   * Reflection about the main diagonal.
   * @memberof PIXI.groupD8
   * @constant {PIXI.GD8Symmetry}
   */
  MAIN_DIAGONAL: 10,
  /**
   * Reflection about X-axis.
   * @memberof PIXI.groupD8
   * @constant {PIXI.GD8Symmetry}
   */
  MIRROR_HORIZONTAL: 12,
  /**
   * Reflection about reverse diagonal.
   * @memberof PIXI.groupD8
   * @constant {PIXI.GD8Symmetry}
   */
  REVERSE_DIAGONAL: 14,
  /**
   * @memberof PIXI.groupD8
   * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
   * @returns {PIXI.GD8Symmetry} The X-component of the U-axis
   *    after rotating the axes.
   */
  uX: function(ind) {
    return ux[ind];
  },
  /**
   * @memberof PIXI.groupD8
   * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
   * @returns {PIXI.GD8Symmetry} The Y-component of the U-axis
   *    after rotating the axes.
   */
  uY: function(ind) {
    return uy[ind];
  },
  /**
   * @memberof PIXI.groupD8
   * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
   * @returns {PIXI.GD8Symmetry} The X-component of the V-axis
   *    after rotating the axes.
   */
  vX: function(ind) {
    return vx[ind];
  },
  /**
   * @memberof PIXI.groupD8
   * @param {PIXI.GD8Symmetry} ind - sprite rotation angle.
   * @returns {PIXI.GD8Symmetry} The Y-component of the V-axis
   *    after rotating the axes.
   */
  vY: function(ind) {
    return vy[ind];
  },
  /**
   * @memberof PIXI.groupD8
   * @param {PIXI.GD8Symmetry} rotation - symmetry whose opposite
   *   is needed. Only rotations have opposite symmetries while
   *   reflections don't.
   * @returns {PIXI.GD8Symmetry} The opposite symmetry of `rotation`
   */
  inv: function(rotation) {
    if (rotation & 8) {
      return rotation & 15;
    }
    return -rotation & 7;
  },
  /**
   * Composes the two D8 operations.
   *
   * Taking `^` as reflection:
   *
   * |       | E=0 | S=2 | W=4 | N=6 | E^=8 | S^=10 | W^=12 | N^=14 |
   * |-------|-----|-----|-----|-----|------|-------|-------|-------|
   * | E=0   | E   | S   | W   | N   | E^   | S^    | W^    | N^    |
   * | S=2   | S   | W   | N   | E   | S^   | W^    | N^    | E^    |
   * | W=4   | W   | N   | E   | S   | W^   | N^    | E^    | S^    |
   * | N=6   | N   | E   | S   | W   | N^   | E^    | S^    | W^    |
   * | E^=8  | E^  | N^  | W^  | S^  | E    | N     | W     | S     |
   * | S^=10 | S^  | E^  | N^  | W^  | S    | E     | N     | W     |
   * | W^=12 | W^  | S^  | E^  | N^  | W    | S     | E     | N     |
   * | N^=14 | N^  | W^  | S^  | E^  | N    | W     | S     | E     |
   *
   * [This is a Cayley table]{@link https://en.wikipedia.org/wiki/Cayley_table}
   * @memberof PIXI.groupD8
   * @param {PIXI.GD8Symmetry} rotationSecond - Second operation, which
   *   is the row in the above cayley table.
   * @param {PIXI.GD8Symmetry} rotationFirst - First operation, which
   *   is the column in the above cayley table.
   * @returns {PIXI.GD8Symmetry} Composed operation
   */
  add: function(rotationSecond, rotationFirst) {
    return rotationCayley[rotationSecond][rotationFirst];
  },
  /**
   * Reverse of `add`.
   * @memberof PIXI.groupD8
   * @param {PIXI.GD8Symmetry} rotationSecond - Second operation
   * @param {PIXI.GD8Symmetry} rotationFirst - First operation
   * @returns {PIXI.GD8Symmetry} Result
   */
  sub: function(rotationSecond, rotationFirst) {
    return rotationCayley[rotationSecond][groupD8.inv(rotationFirst)];
  },
  /**
   * Adds 180 degrees to rotation, which is a commutative
   * operation.
   * @memberof PIXI.groupD8
   * @param {number} rotation - The number to rotate.
   * @returns {number} Rotated number
   */
  rotate180: function(rotation) {
    return rotation ^ 4;
  },
  /**
   * Checks if the rotation angle is vertical, i.e. south
   * or north. It doesn't work for reflections.
   * @memberof PIXI.groupD8
   * @param {PIXI.GD8Symmetry} rotation - The number to check.
   * @returns {boolean} Whether or not the direction is vertical
   */
  isVertical: function(rotation) {
    return (rotation & 3) === 2;
  },
  /**
   * Approximates the vector `V(dx,dy)` into one of the
   * eight directions provided by `groupD8`.
   * @memberof PIXI.groupD8
   * @param {number} dx - X-component of the vector
   * @param {number} dy - Y-component of the vector
   * @returns {PIXI.GD8Symmetry} Approximation of the vector into
   *  one of the eight symmetries.
   */
  byDirection: function(dx, dy) {
    if (Math.abs(dx) * 2 <= Math.abs(dy)) {
      if (dy >= 0) {
        return groupD8.S;
      }
      return groupD8.N;
    } else if (Math.abs(dy) * 2 <= Math.abs(dx)) {
      if (dx > 0) {
        return groupD8.E;
      }
      return groupD8.W;
    } else if (dy > 0) {
      if (dx > 0) {
        return groupD8.SE;
      }
      return groupD8.SW;
    } else if (dx > 0) {
      return groupD8.NE;
    }
    return groupD8.NW;
  },
  /**
   * Helps sprite to compensate texture packer rotation.
   * @memberof PIXI.groupD8
   * @param {PIXI.Matrix} matrix - sprite world matrix
   * @param {PIXI.GD8Symmetry} rotation - The rotation factor to use.
   * @param {number} tx - sprite anchoring
   * @param {number} ty - sprite anchoring
   */
  matrixAppendRotationInv: function(matrix, rotation, tx, ty) {
    if (tx === void 0) {
      tx = 0;
    }
    if (ty === void 0) {
      ty = 0;
    }
    var mat = rotationMatrices[groupD8.inv(rotation)];
    mat.tx = tx;
    mat.ty = ty;
    matrix.append(mat);
  }
};
var Transform = (
  /** @class */
  function() {
    function Transform2() {
      this.worldTransform = new Matrix();
      this.localTransform = new Matrix();
      this.position = new ObservablePoint(this.onChange, this, 0, 0);
      this.scale = new ObservablePoint(this.onChange, this, 1, 1);
      this.pivot = new ObservablePoint(this.onChange, this, 0, 0);
      this.skew = new ObservablePoint(this.updateSkew, this, 0, 0);
      this._rotation = 0;
      this._cx = 1;
      this._sx = 0;
      this._cy = 0;
      this._sy = 1;
      this._localID = 0;
      this._currentLocalID = 0;
      this._worldID = 0;
      this._parentID = 0;
    }
    Transform2.prototype.onChange = function() {
      this._localID++;
    };
    Transform2.prototype.updateSkew = function() {
      this._cx = Math.cos(this._rotation + this.skew.y);
      this._sx = Math.sin(this._rotation + this.skew.y);
      this._cy = -Math.sin(this._rotation - this.skew.x);
      this._sy = Math.cos(this._rotation - this.skew.x);
      this._localID++;
    };
    Transform2.prototype.toString = function() {
      return "[@pixi/math:Transform " + ("position=(" + this.position.x + ", " + this.position.y + ") ") + ("rotation=" + this.rotation + " ") + ("scale=(" + this.scale.x + ", " + this.scale.y + ") ") + ("skew=(" + this.skew.x + ", " + this.skew.y + ") ") + "]";
    };
    Transform2.prototype.updateLocalTransform = function() {
      var lt = this.localTransform;
      if (this._localID !== this._currentLocalID) {
        lt.a = this._cx * this.scale.x;
        lt.b = this._sx * this.scale.x;
        lt.c = this._cy * this.scale.y;
        lt.d = this._sy * this.scale.y;
        lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
        lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);
        this._currentLocalID = this._localID;
        this._parentID = -1;
      }
    };
    Transform2.prototype.updateTransform = function(parentTransform) {
      var lt = this.localTransform;
      if (this._localID !== this._currentLocalID) {
        lt.a = this._cx * this.scale.x;
        lt.b = this._sx * this.scale.x;
        lt.c = this._cy * this.scale.y;
        lt.d = this._sy * this.scale.y;
        lt.tx = this.position.x - (this.pivot.x * lt.a + this.pivot.y * lt.c);
        lt.ty = this.position.y - (this.pivot.x * lt.b + this.pivot.y * lt.d);
        this._currentLocalID = this._localID;
        this._parentID = -1;
      }
      if (this._parentID !== parentTransform._worldID) {
        var pt = parentTransform.worldTransform;
        var wt = this.worldTransform;
        wt.a = lt.a * pt.a + lt.b * pt.c;
        wt.b = lt.a * pt.b + lt.b * pt.d;
        wt.c = lt.c * pt.a + lt.d * pt.c;
        wt.d = lt.c * pt.b + lt.d * pt.d;
        wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
        wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;
        this._parentID = parentTransform._worldID;
        this._worldID++;
      }
    };
    Transform2.prototype.setFromMatrix = function(matrix) {
      matrix.decompose(this);
      this._localID++;
    };
    Object.defineProperty(Transform2.prototype, "rotation", {
      /** The rotation of the object in radians. */
      get: function() {
        return this._rotation;
      },
      set: function(value) {
        if (this._rotation !== value) {
          this._rotation = value;
          this.updateSkew();
        }
      },
      enumerable: false,
      configurable: true
    });
    Transform2.IDENTITY = new Transform2();
    return Transform2;
  }()
);

// node_modules/.pnpm/@pixi+extensions@6.5.2/node_modules/@pixi/extensions/dist/esm/extensions.mjs
var __assign = function() {
  __assign = Object.assign || function __assign3(t) {
    var arguments$1 = arguments;
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments$1[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) {
          t[p] = s[p];
        }
      }
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var ExtensionType;
(function(ExtensionType2) {
  ExtensionType2["Application"] = "application";
  ExtensionType2["RendererPlugin"] = "renderer-webgl-plugin";
  ExtensionType2["CanvasRendererPlugin"] = "renderer-canvas-plugin";
  ExtensionType2["Loader"] = "loader";
  ExtensionType2["LoadParser"] = "load-parser";
  ExtensionType2["ResolveParser"] = "resolve-parser";
  ExtensionType2["CacheParser"] = "cache-parser";
  ExtensionType2["DetectionParser"] = "detection-parser";
})(ExtensionType || (ExtensionType = {}));
var normalizeExtension = function(ext) {
  if (typeof ext === "function" || typeof ext === "object" && ext.extension) {
    if (!ext.extension) {
      throw new Error("Extension class must have an extension object");
    }
    var metadata = typeof ext.extension !== "object" ? { type: ext.extension } : ext.extension;
    ext = __assign(__assign({}, metadata), { ref: ext });
  }
  if (typeof ext === "object") {
    ext = __assign({}, ext);
  } else {
    throw new Error("Invalid extension type");
  }
  if (typeof ext.type === "string") {
    ext.type = [ext.type];
  }
  return ext;
};
var extensions = {
  /** @ignore */
  _addHandlers: null,
  /** @ignore */
  _removeHandlers: null,
  /** @ignore */
  _queue: {},
  /**
   * Remove extensions from PixiJS.
   * @param extensions - Extensions to be removed.
   * @returns {PIXI.extensions} For chaining.
   */
  remove: function() {
    var arguments$1 = arguments;
    var _this = this;
    var extensions2 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      extensions2[_i] = arguments$1[_i];
    }
    extensions2.map(normalizeExtension).forEach(function(ext) {
      ext.type.forEach(function(type) {
        var _a, _b;
        return (_b = (_a = _this._removeHandlers)[type]) === null || _b === void 0 ? void 0 : _b.call(_a, ext);
      });
    });
    return this;
  },
  /**
   * Register new extensions with PixiJS.
   * @param extensions - The spread of extensions to add to PixiJS.
   * @returns {PIXI.extensions} For chaining.
   */
  add: function() {
    var arguments$1 = arguments;
    var _this = this;
    var extensions2 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      extensions2[_i] = arguments$1[_i];
    }
    extensions2.map(normalizeExtension).forEach(function(ext) {
      ext.type.forEach(function(type) {
        var handlers = _this._addHandlers;
        var queue = _this._queue;
        if (!handlers[type]) {
          queue[type] = queue[type] || [];
          queue[type].push(ext);
        } else {
          handlers[type](ext);
        }
      });
    });
    return this;
  },
  /**
   * Internal method to handle extensions by name.
   * @param type - The extension type.
   * @param onAdd  - Function for handling when extensions are added/registered passes {@link PIXI.ExtensionFormat}.
   * @param onRemove  - Function for handling when extensions are removed/unregistered passes {@link PIXI.ExtensionFormat}.
   * @returns {PIXI.extensions} For chaining.
   */
  handle: function(type, onAdd, onRemove) {
    var addHandlers = this._addHandlers = this._addHandlers || {};
    var removeHandlers = this._removeHandlers = this._removeHandlers || {};
    if (addHandlers[type] || removeHandlers[type]) {
      throw new Error("Extension type " + type + " already has a handler");
    }
    addHandlers[type] = onAdd;
    removeHandlers[type] = onRemove;
    var queue = this._queue;
    if (queue[type]) {
      queue[type].forEach(function(ext) {
        return onAdd(ext);
      });
      delete queue[type];
    }
    return this;
  },
  /**
   * Handle a type, but using a map by `name` property.
   * @param type - Type of extension to handle.
   * @param map - The object map of named extensions.
   * @returns {PIXI.extensions} For chaining.
   */
  handleByMap: function(type, map3) {
    return this.handle(type, function(extension) {
      map3[extension.name] = extension.ref;
    }, function(extension) {
      delete map3[extension.name];
    });
  },
  /**
   * Handle a type, but using a list of extensions.
   * @param type - Type of extension to handle.
   * @param list - The list of extensions.
   * @returns {PIXI.extensions} For chaining.
   */
  handleByList: function(type, list) {
    return this.handle(type, function(extension) {
      var _a, _b;
      list.push(extension.ref);
      if (type === ExtensionType.Loader) {
        (_b = (_a = extension.ref).add) === null || _b === void 0 ? void 0 : _b.call(_a);
      }
    }, function(extension) {
      var index = list.indexOf(extension.ref);
      if (index !== -1) {
        list.splice(index, 1);
      }
    });
  }
};

// node_modules/.pnpm/@pixi+runner@6.5.2/node_modules/@pixi/runner/dist/esm/runner.mjs
var Runner = (
  /** @class */
  function() {
    function Runner2(name) {
      this.items = [];
      this._name = name;
      this._aliasCount = 0;
    }
    Runner2.prototype.emit = function(a0, a1, a2, a3, a4, a5, a6, a7) {
      if (arguments.length > 8) {
        throw new Error("max arguments reached");
      }
      var _a = this, name = _a.name, items = _a.items;
      this._aliasCount++;
      for (var i = 0, len = items.length; i < len; i++) {
        items[i][name](a0, a1, a2, a3, a4, a5, a6, a7);
      }
      if (items === this.items) {
        this._aliasCount--;
      }
      return this;
    };
    Runner2.prototype.ensureNonAliasedItems = function() {
      if (this._aliasCount > 0 && this.items.length > 1) {
        this._aliasCount = 0;
        this.items = this.items.slice(0);
      }
    };
    Runner2.prototype.add = function(item) {
      if (item[this._name]) {
        this.ensureNonAliasedItems();
        this.remove(item);
        this.items.push(item);
      }
      return this;
    };
    Runner2.prototype.remove = function(item) {
      var index = this.items.indexOf(item);
      if (index !== -1) {
        this.ensureNonAliasedItems();
        this.items.splice(index, 1);
      }
      return this;
    };
    Runner2.prototype.contains = function(item) {
      return this.items.indexOf(item) !== -1;
    };
    Runner2.prototype.removeAll = function() {
      this.ensureNonAliasedItems();
      this.items.length = 0;
      return this;
    };
    Runner2.prototype.destroy = function() {
      this.removeAll();
      this.items = null;
      this._name = null;
    };
    Object.defineProperty(Runner2.prototype, "empty", {
      /**
       * `true` if there are no this Runner contains no listeners
       * @readonly
       */
      get: function() {
        return this.items.length === 0;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Runner2.prototype, "name", {
      /**
       * The name of the runner.
       * @readonly
       */
      get: function() {
        return this._name;
      },
      enumerable: false,
      configurable: true
    });
    return Runner2;
  }()
);
Object.defineProperties(Runner.prototype, {
  /**
   * Alias for `emit`
   * @memberof PIXI.Runner#
   * @method dispatch
   * @see PIXI.Runner#emit
   */
  dispatch: { value: Runner.prototype.emit },
  /**
   * Alias for `emit`
   * @memberof PIXI.Runner#
   * @method run
   * @see PIXI.Runner#emit
   */
  run: { value: Runner.prototype.emit }
});

// node_modules/.pnpm/@pixi+ticker@6.5.2_@pixi+extensions@6.5.2_@pixi+settings@6.5.2/node_modules/@pixi/ticker/dist/esm/ticker.mjs
settings.TARGET_FPMS = 0.06;
var UPDATE_PRIORITY;
(function(UPDATE_PRIORITY2) {
  UPDATE_PRIORITY2[UPDATE_PRIORITY2["INTERACTION"] = 50] = "INTERACTION";
  UPDATE_PRIORITY2[UPDATE_PRIORITY2["HIGH"] = 25] = "HIGH";
  UPDATE_PRIORITY2[UPDATE_PRIORITY2["NORMAL"] = 0] = "NORMAL";
  UPDATE_PRIORITY2[UPDATE_PRIORITY2["LOW"] = -25] = "LOW";
  UPDATE_PRIORITY2[UPDATE_PRIORITY2["UTILITY"] = -50] = "UTILITY";
})(UPDATE_PRIORITY || (UPDATE_PRIORITY = {}));
var TickerListener = (
  /** @class */
  function() {
    function TickerListener2(fn, context2, priority, once) {
      if (context2 === void 0) {
        context2 = null;
      }
      if (priority === void 0) {
        priority = 0;
      }
      if (once === void 0) {
        once = false;
      }
      this.next = null;
      this.previous = null;
      this._destroyed = false;
      this.fn = fn;
      this.context = context2;
      this.priority = priority;
      this.once = once;
    }
    TickerListener2.prototype.match = function(fn, context2) {
      if (context2 === void 0) {
        context2 = null;
      }
      return this.fn === fn && this.context === context2;
    };
    TickerListener2.prototype.emit = function(deltaTime) {
      if (this.fn) {
        if (this.context) {
          this.fn.call(this.context, deltaTime);
        } else {
          this.fn(deltaTime);
        }
      }
      var redirect = this.next;
      if (this.once) {
        this.destroy(true);
      }
      if (this._destroyed) {
        this.next = null;
      }
      return redirect;
    };
    TickerListener2.prototype.connect = function(previous) {
      this.previous = previous;
      if (previous.next) {
        previous.next.previous = this;
      }
      this.next = previous.next;
      previous.next = this;
    };
    TickerListener2.prototype.destroy = function(hard) {
      if (hard === void 0) {
        hard = false;
      }
      this._destroyed = true;
      this.fn = null;
      this.context = null;
      if (this.previous) {
        this.previous.next = this.next;
      }
      if (this.next) {
        this.next.previous = this.previous;
      }
      var redirect = this.next;
      this.next = hard ? null : redirect;
      this.previous = null;
      return redirect;
    };
    return TickerListener2;
  }()
);
var Ticker = (
  /** @class */
  function() {
    function Ticker2() {
      var _this = this;
      this.autoStart = false;
      this.deltaTime = 1;
      this.lastTime = -1;
      this.speed = 1;
      this.started = false;
      this._requestId = null;
      this._maxElapsedMS = 100;
      this._minElapsedMS = 0;
      this._protected = false;
      this._lastFrame = -1;
      this._head = new TickerListener(null, null, Infinity);
      this.deltaMS = 1 / settings.TARGET_FPMS;
      this.elapsedMS = 1 / settings.TARGET_FPMS;
      this._tick = function(time) {
        _this._requestId = null;
        if (_this.started) {
          _this.update(time);
          if (_this.started && _this._requestId === null && _this._head.next) {
            _this._requestId = requestAnimationFrame(_this._tick);
          }
        }
      };
    }
    Ticker2.prototype._requestIfNeeded = function() {
      if (this._requestId === null && this._head.next) {
        this.lastTime = performance.now();
        this._lastFrame = this.lastTime;
        this._requestId = requestAnimationFrame(this._tick);
      }
    };
    Ticker2.prototype._cancelIfNeeded = function() {
      if (this._requestId !== null) {
        cancelAnimationFrame(this._requestId);
        this._requestId = null;
      }
    };
    Ticker2.prototype._startIfPossible = function() {
      if (this.started) {
        this._requestIfNeeded();
      } else if (this.autoStart) {
        this.start();
      }
    };
    Ticker2.prototype.add = function(fn, context2, priority) {
      if (priority === void 0) {
        priority = UPDATE_PRIORITY.NORMAL;
      }
      return this._addListener(new TickerListener(fn, context2, priority));
    };
    Ticker2.prototype.addOnce = function(fn, context2, priority) {
      if (priority === void 0) {
        priority = UPDATE_PRIORITY.NORMAL;
      }
      return this._addListener(new TickerListener(fn, context2, priority, true));
    };
    Ticker2.prototype._addListener = function(listener) {
      var current = this._head.next;
      var previous = this._head;
      if (!current) {
        listener.connect(previous);
      } else {
        while (current) {
          if (listener.priority > current.priority) {
            listener.connect(previous);
            break;
          }
          previous = current;
          current = current.next;
        }
        if (!listener.previous) {
          listener.connect(previous);
        }
      }
      this._startIfPossible();
      return this;
    };
    Ticker2.prototype.remove = function(fn, context2) {
      var listener = this._head.next;
      while (listener) {
        if (listener.match(fn, context2)) {
          listener = listener.destroy();
        } else {
          listener = listener.next;
        }
      }
      if (!this._head.next) {
        this._cancelIfNeeded();
      }
      return this;
    };
    Object.defineProperty(Ticker2.prototype, "count", {
      /**
       * The number of listeners on this ticker, calculated by walking through linked list
       * @readonly
       * @member {number}
       */
      get: function() {
        if (!this._head) {
          return 0;
        }
        var count = 0;
        var current = this._head;
        while (current = current.next) {
          count++;
        }
        return count;
      },
      enumerable: false,
      configurable: true
    });
    Ticker2.prototype.start = function() {
      if (!this.started) {
        this.started = true;
        this._requestIfNeeded();
      }
    };
    Ticker2.prototype.stop = function() {
      if (this.started) {
        this.started = false;
        this._cancelIfNeeded();
      }
    };
    Ticker2.prototype.destroy = function() {
      if (!this._protected) {
        this.stop();
        var listener = this._head.next;
        while (listener) {
          listener = listener.destroy(true);
        }
        this._head.destroy();
        this._head = null;
      }
    };
    Ticker2.prototype.update = function(currentTime) {
      if (currentTime === void 0) {
        currentTime = performance.now();
      }
      var elapsedMS;
      if (currentTime > this.lastTime) {
        elapsedMS = this.elapsedMS = currentTime - this.lastTime;
        if (elapsedMS > this._maxElapsedMS) {
          elapsedMS = this._maxElapsedMS;
        }
        elapsedMS *= this.speed;
        if (this._minElapsedMS) {
          var delta = currentTime - this._lastFrame | 0;
          if (delta < this._minElapsedMS) {
            return;
          }
          this._lastFrame = currentTime - delta % this._minElapsedMS;
        }
        this.deltaMS = elapsedMS;
        this.deltaTime = this.deltaMS * settings.TARGET_FPMS;
        var head = this._head;
        var listener = head.next;
        while (listener) {
          listener = listener.emit(this.deltaTime);
        }
        if (!head.next) {
          this._cancelIfNeeded();
        }
      } else {
        this.deltaTime = this.deltaMS = this.elapsedMS = 0;
      }
      this.lastTime = currentTime;
    };
    Object.defineProperty(Ticker2.prototype, "FPS", {
      /**
       * The frames per second at which this ticker is running.
       * The default is approximately 60 in most modern browsers.
       * **Note:** This does not factor in the value of
       * {@link PIXI.Ticker#speed}, which is specific
       * to scaling {@link PIXI.Ticker#deltaTime}.
       * @member {number}
       * @readonly
       */
      get: function() {
        return 1e3 / this.elapsedMS;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Ticker2.prototype, "minFPS", {
      /**
       * Manages the maximum amount of milliseconds allowed to
       * elapse between invoking {@link PIXI.Ticker#update}.
       * This value is used to cap {@link PIXI.Ticker#deltaTime},
       * but does not effect the measured value of {@link PIXI.Ticker#FPS}.
       * When setting this property it is clamped to a value between
       * `0` and `PIXI.settings.TARGET_FPMS * 1000`.
       * @member {number}
       * @default 10
       */
      get: function() {
        return 1e3 / this._maxElapsedMS;
      },
      set: function(fps) {
        var minFPS = Math.min(this.maxFPS, fps);
        var minFPMS = Math.min(Math.max(0, minFPS) / 1e3, settings.TARGET_FPMS);
        this._maxElapsedMS = 1 / minFPMS;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Ticker2.prototype, "maxFPS", {
      /**
       * Manages the minimum amount of milliseconds required to
       * elapse between invoking {@link PIXI.Ticker#update}.
       * This will effect the measured value of {@link PIXI.Ticker#FPS}.
       * If it is set to `0`, then there is no limit; PixiJS will render as many frames as it can.
       * Otherwise it will be at least `minFPS`
       * @member {number}
       * @default 0
       */
      get: function() {
        if (this._minElapsedMS) {
          return Math.round(1e3 / this._minElapsedMS);
        }
        return 0;
      },
      set: function(fps) {
        if (fps === 0) {
          this._minElapsedMS = 0;
        } else {
          var maxFPS = Math.max(this.minFPS, fps);
          this._minElapsedMS = 1 / (maxFPS / 1e3);
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Ticker2, "shared", {
      /**
       * The shared ticker instance used by {@link PIXI.AnimatedSprite} and by
       * {@link PIXI.VideoResource} to update animation frames / video textures.
       *
       * It may also be used by {@link PIXI.Application} if created with the `sharedTicker` option property set to true.
       *
       * The property {@link PIXI.Ticker#autoStart} is set to `true` for this instance.
       * Please follow the examples for usage, including how to opt-out of auto-starting the shared ticker.
       * @example
       * let ticker = PIXI.Ticker.shared;
       * // Set this to prevent starting this ticker when listeners are added.
       * // By default this is true only for the PIXI.Ticker.shared instance.
       * ticker.autoStart = false;
       * // FYI, call this to ensure the ticker is stopped. It should be stopped
       * // if you have not attempted to render anything yet.
       * ticker.stop();
       * // Call this when you are ready for a running shared ticker.
       * ticker.start();
       * @example
       * // You may use the shared ticker to render...
       * let renderer = PIXI.autoDetectRenderer();
       * let stage = new PIXI.Container();
       * document.body.appendChild(renderer.view);
       * ticker.add(function (time) {
       *     renderer.render(stage);
       * });
       * @example
       * // Or you can just update it manually.
       * ticker.autoStart = false;
       * ticker.stop();
       * function animate(time) {
       *     ticker.update(time);
       *     renderer.render(stage);
       *     requestAnimationFrame(animate);
       * }
       * animate(performance.now());
       * @member {PIXI.Ticker}
       * @static
       */
      get: function() {
        if (!Ticker2._shared) {
          var shared = Ticker2._shared = new Ticker2();
          shared.autoStart = true;
          shared._protected = true;
        }
        return Ticker2._shared;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Ticker2, "system", {
      /**
       * The system ticker instance used by {@link PIXI.InteractionManager} and by
       * {@link PIXI.BasePrepare} for core timing functionality that shouldn't usually need to be paused,
       * unlike the `shared` ticker which drives visual animations and rendering which may want to be paused.
       *
       * The property {@link PIXI.Ticker#autoStart} is set to `true` for this instance.
       * @member {PIXI.Ticker}
       * @static
       */
      get: function() {
        if (!Ticker2._system) {
          var system = Ticker2._system = new Ticker2();
          system.autoStart = true;
          system._protected = true;
        }
        return Ticker2._system;
      },
      enumerable: false,
      configurable: true
    });
    return Ticker2;
  }()
);
var TickerPlugin = (
  /** @class */
  function() {
    function TickerPlugin2() {
    }
    TickerPlugin2.init = function(options) {
      var _this = this;
      options = Object.assign({
        autoStart: true,
        sharedTicker: false
      }, options);
      Object.defineProperty(this, "ticker", {
        set: function(ticker) {
          if (this._ticker) {
            this._ticker.remove(this.render, this);
          }
          this._ticker = ticker;
          if (ticker) {
            ticker.add(this.render, this, UPDATE_PRIORITY.LOW);
          }
        },
        get: function() {
          return this._ticker;
        }
      });
      this.stop = function() {
        _this._ticker.stop();
      };
      this.start = function() {
        _this._ticker.start();
      };
      this._ticker = null;
      this.ticker = options.sharedTicker ? Ticker.shared : new Ticker();
      if (options.autoStart) {
        this.start();
      }
    };
    TickerPlugin2.destroy = function() {
      if (this._ticker) {
        var oldTicker = this._ticker;
        this.ticker = null;
        oldTicker.destroy();
      }
    };
    TickerPlugin2.extension = ExtensionType.Application;
    return TickerPlugin2;
  }()
);

// node_modules/.pnpm/@pixi+core@6.5.2_@pixi+constants@6.5.2_@pixi+extensions@6.5.2_@pixi+math@6.5.2_@pixi+runner@6_qdrgnjocmiplwadpsxppidp6nq/node_modules/@pixi/core/dist/esm/core.mjs
settings.PREFER_ENV = isMobile.any ? ENV2.WEBGL : ENV2.WEBGL2;
settings.STRICT_TEXTURE_CACHE = false;
var INSTALLED = [];
function autoDetectResource(source, options) {
  if (!source) {
    return null;
  }
  var extension = "";
  if (typeof source === "string") {
    var result = /\.(\w{3,4})(?:$|\?|#)/i.exec(source);
    if (result) {
      extension = result[1].toLowerCase();
    }
  }
  for (var i = INSTALLED.length - 1; i >= 0; --i) {
    var ResourcePlugin = INSTALLED[i];
    if (ResourcePlugin.test && ResourcePlugin.test(source, extension)) {
      return new ResourcePlugin(source, options);
    }
  }
  throw new Error("Unrecognized source type to auto-detect Resource");
}
var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics(d, b);
};
function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign2 = function() {
  __assign2 = Object.assign || function __assign3(t) {
    var arguments$1 = arguments;
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments$1[i];
      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) {
          t[p] = s[p];
        }
      }
    }
    return t;
  };
  return __assign2.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) {
      t[p] = s[p];
    }
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function") {
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) {
        t[p[i]] = s[p[i]];
      }
    }
  }
  return t;
}
var Resource = (
  /** @class */
  function() {
    function Resource2(width, height) {
      if (width === void 0) {
        width = 0;
      }
      if (height === void 0) {
        height = 0;
      }
      this._width = width;
      this._height = height;
      this.destroyed = false;
      this.internal = false;
      this.onResize = new Runner("setRealSize");
      this.onUpdate = new Runner("update");
      this.onError = new Runner("onError");
    }
    Resource2.prototype.bind = function(baseTexture) {
      this.onResize.add(baseTexture);
      this.onUpdate.add(baseTexture);
      this.onError.add(baseTexture);
      if (this._width || this._height) {
        this.onResize.emit(this._width, this._height);
      }
    };
    Resource2.prototype.unbind = function(baseTexture) {
      this.onResize.remove(baseTexture);
      this.onUpdate.remove(baseTexture);
      this.onError.remove(baseTexture);
    };
    Resource2.prototype.resize = function(width, height) {
      if (width !== this._width || height !== this._height) {
        this._width = width;
        this._height = height;
        this.onResize.emit(width, height);
      }
    };
    Object.defineProperty(Resource2.prototype, "valid", {
      /**
       * Has been validated
       * @readonly
       */
      get: function() {
        return !!this._width && !!this._height;
      },
      enumerable: false,
      configurable: true
    });
    Resource2.prototype.update = function() {
      if (!this.destroyed) {
        this.onUpdate.emit();
      }
    };
    Resource2.prototype.load = function() {
      return Promise.resolve(this);
    };
    Object.defineProperty(Resource2.prototype, "width", {
      /**
       * The width of the resource.
       * @readonly
       */
      get: function() {
        return this._width;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Resource2.prototype, "height", {
      /**
       * The height of the resource.
       * @readonly
       */
      get: function() {
        return this._height;
      },
      enumerable: false,
      configurable: true
    });
    Resource2.prototype.style = function(_renderer, _baseTexture, _glTexture) {
      return false;
    };
    Resource2.prototype.dispose = function() {
    };
    Resource2.prototype.destroy = function() {
      if (!this.destroyed) {
        this.destroyed = true;
        this.dispose();
        this.onError.removeAll();
        this.onError = null;
        this.onResize.removeAll();
        this.onResize = null;
        this.onUpdate.removeAll();
        this.onUpdate = null;
      }
    };
    Resource2.test = function(_source, _extension) {
      return false;
    };
    return Resource2;
  }()
);
var BufferResource = (
  /** @class */
  function(_super) {
    __extends(BufferResource2, _super);
    function BufferResource2(source, options) {
      var _this = this;
      var _a = options || {}, width = _a.width, height = _a.height;
      if (!width || !height) {
        throw new Error("BufferResource width or height invalid");
      }
      _this = _super.call(this, width, height) || this;
      _this.data = source;
      return _this;
    }
    BufferResource2.prototype.upload = function(renderer, baseTexture, glTexture) {
      var gl = renderer.gl;
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.alphaMode === ALPHA_MODES2.UNPACK);
      var width = baseTexture.realWidth;
      var height = baseTexture.realHeight;
      if (glTexture.width === width && glTexture.height === height) {
        gl.texSubImage2D(baseTexture.target, 0, 0, 0, width, height, baseTexture.format, glTexture.type, this.data);
      } else {
        glTexture.width = width;
        glTexture.height = height;
        gl.texImage2D(baseTexture.target, 0, glTexture.internalFormat, width, height, 0, baseTexture.format, glTexture.type, this.data);
      }
      return true;
    };
    BufferResource2.prototype.dispose = function() {
      this.data = null;
    };
    BufferResource2.test = function(source) {
      return source instanceof Float32Array || source instanceof Uint8Array || source instanceof Uint32Array;
    };
    return BufferResource2;
  }(Resource)
);
var defaultBufferOptions = {
  scaleMode: SCALE_MODES2.NEAREST,
  format: FORMATS2.RGBA,
  alphaMode: ALPHA_MODES2.NPM
};
var BaseTexture = (
  /** @class */
  function(_super) {
    __extends(BaseTexture2, _super);
    function BaseTexture2(resource, options) {
      if (resource === void 0) {
        resource = null;
      }
      if (options === void 0) {
        options = null;
      }
      var _this = _super.call(this) || this;
      options = options || {};
      var alphaMode = options.alphaMode, mipmap = options.mipmap, anisotropicLevel = options.anisotropicLevel, scaleMode = options.scaleMode, width = options.width, height = options.height, wrapMode = options.wrapMode, format2 = options.format, type = options.type, target = options.target, resolution = options.resolution, resourceOptions = options.resourceOptions;
      if (resource && !(resource instanceof Resource)) {
        resource = autoDetectResource(resource, resourceOptions);
        resource.internal = true;
      }
      _this.resolution = resolution || settings.RESOLUTION;
      _this.width = Math.round((width || 0) * _this.resolution) / _this.resolution;
      _this.height = Math.round((height || 0) * _this.resolution) / _this.resolution;
      _this._mipmap = mipmap !== void 0 ? mipmap : settings.MIPMAP_TEXTURES;
      _this.anisotropicLevel = anisotropicLevel !== void 0 ? anisotropicLevel : settings.ANISOTROPIC_LEVEL;
      _this._wrapMode = wrapMode || settings.WRAP_MODE;
      _this._scaleMode = scaleMode !== void 0 ? scaleMode : settings.SCALE_MODE;
      _this.format = format2 || FORMATS2.RGBA;
      _this.type = type || TYPES2.UNSIGNED_BYTE;
      _this.target = target || TARGETS2.TEXTURE_2D;
      _this.alphaMode = alphaMode !== void 0 ? alphaMode : ALPHA_MODES2.UNPACK;
      _this.uid = uid();
      _this.touched = 0;
      _this.isPowerOfTwo = false;
      _this._refreshPOT();
      _this._glTextures = {};
      _this.dirtyId = 0;
      _this.dirtyStyleId = 0;
      _this.cacheId = null;
      _this.valid = width > 0 && height > 0;
      _this.textureCacheIds = [];
      _this.destroyed = false;
      _this.resource = null;
      _this._batchEnabled = 0;
      _this._batchLocation = 0;
      _this.parentTextureArray = null;
      _this.setResource(resource);
      return _this;
    }
    Object.defineProperty(BaseTexture2.prototype, "realWidth", {
      /**
       * Pixel width of the source of this texture
       * @readonly
       */
      get: function() {
        return Math.round(this.width * this.resolution);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseTexture2.prototype, "realHeight", {
      /**
       * Pixel height of the source of this texture
       * @readonly
       */
      get: function() {
        return Math.round(this.height * this.resolution);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseTexture2.prototype, "mipmap", {
      /**
       * Mipmap mode of the texture, affects downscaled images
       * @default PIXI.settings.MIPMAP_TEXTURES
       */
      get: function() {
        return this._mipmap;
      },
      set: function(value) {
        if (this._mipmap !== value) {
          this._mipmap = value;
          this.dirtyStyleId++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseTexture2.prototype, "scaleMode", {
      /**
       * The scale mode to apply when scaling this texture
       * @default PIXI.settings.SCALE_MODE
       */
      get: function() {
        return this._scaleMode;
      },
      set: function(value) {
        if (this._scaleMode !== value) {
          this._scaleMode = value;
          this.dirtyStyleId++;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BaseTexture2.prototype, "wrapMode", {
      /**
       * How the texture wraps
       * @default PIXI.settings.WRAP_MODE
       */
      get: function() {
        return this._wrapMode;
      },
      set: function(value) {
        if (this._wrapMode !== value) {
          this._wrapMode = value;
          this.dirtyStyleId++;
        }
      },
      enumerable: false,
      configurable: true
    });
    BaseTexture2.prototype.setStyle = function(scaleMode, mipmap) {
      var dirty;
      if (scaleMode !== void 0 && scaleMode !== this.scaleMode) {
        this.scaleMode = scaleMode;
        dirty = true;
      }
      if (mipmap !== void 0 && mipmap !== this.mipmap) {
        this.mipmap = mipmap;
        dirty = true;
      }
      if (dirty) {
        this.dirtyStyleId++;
      }
      return this;
    };
    BaseTexture2.prototype.setSize = function(desiredWidth, desiredHeight, resolution) {
      resolution = resolution || this.resolution;
      return this.setRealSize(desiredWidth * resolution, desiredHeight * resolution, resolution);
    };
    BaseTexture2.prototype.setRealSize = function(realWidth, realHeight, resolution) {
      this.resolution = resolution || this.resolution;
      this.width = Math.round(realWidth) / this.resolution;
      this.height = Math.round(realHeight) / this.resolution;
      this._refreshPOT();
      this.update();
      return this;
    };
    BaseTexture2.prototype._refreshPOT = function() {
      this.isPowerOfTwo = isPow2(this.realWidth) && isPow2(this.realHeight);
    };
    BaseTexture2.prototype.setResolution = function(resolution) {
      var oldResolution = this.resolution;
      if (oldResolution === resolution) {
        return this;
      }
      this.resolution = resolution;
      if (this.valid) {
        this.width = Math.round(this.width * oldResolution) / resolution;
        this.height = Math.round(this.height * oldResolution) / resolution;
        this.emit("update", this);
      }
      this._refreshPOT();
      return this;
    };
    BaseTexture2.prototype.setResource = function(resource) {
      if (this.resource === resource) {
        return this;
      }
      if (this.resource) {
        throw new Error("Resource can be set only once");
      }
      resource.bind(this);
      this.resource = resource;
      return this;
    };
    BaseTexture2.prototype.update = function() {
      if (!this.valid) {
        if (this.width > 0 && this.height > 0) {
          this.valid = true;
          this.emit("loaded", this);
          this.emit("update", this);
        }
      } else {
        this.dirtyId++;
        this.dirtyStyleId++;
        this.emit("update", this);
      }
    };
    BaseTexture2.prototype.onError = function(event) {
      this.emit("error", this, event);
    };
    BaseTexture2.prototype.destroy = function() {
      if (this.resource) {
        this.resource.unbind(this);
        if (this.resource.internal) {
          this.resource.destroy();
        }
        this.resource = null;
      }
      if (this.cacheId) {
        delete BaseTextureCache[this.cacheId];
        delete TextureCache[this.cacheId];
        this.cacheId = null;
      }
      this.dispose();
      BaseTexture2.removeFromCache(this);
      this.textureCacheIds = null;
      this.destroyed = true;
    };
    BaseTexture2.prototype.dispose = function() {
      this.emit("dispose", this);
    };
    BaseTexture2.prototype.castToBaseTexture = function() {
      return this;
    };
    BaseTexture2.from = function(source, options, strict) {
      if (strict === void 0) {
        strict = settings.STRICT_TEXTURE_CACHE;
      }
      var isFrame = typeof source === "string";
      var cacheId = null;
      if (isFrame) {
        cacheId = source;
      } else {
        if (!source._pixiId) {
          var prefix = options && options.pixiIdPrefix || "pixiid";
          source._pixiId = prefix + "_" + uid();
        }
        cacheId = source._pixiId;
      }
      var baseTexture = BaseTextureCache[cacheId];
      if (isFrame && strict && !baseTexture) {
        throw new Error('The cacheId "' + cacheId + '" does not exist in BaseTextureCache.');
      }
      if (!baseTexture) {
        baseTexture = new BaseTexture2(source, options);
        baseTexture.cacheId = cacheId;
        BaseTexture2.addToCache(baseTexture, cacheId);
      }
      return baseTexture;
    };
    BaseTexture2.fromBuffer = function(buffer, width, height, options) {
      buffer = buffer || new Float32Array(width * height * 4);
      var resource = new BufferResource(buffer, { width, height });
      var type = buffer instanceof Float32Array ? TYPES2.FLOAT : TYPES2.UNSIGNED_BYTE;
      return new BaseTexture2(resource, Object.assign(defaultBufferOptions, options || { width, height, type }));
    };
    BaseTexture2.addToCache = function(baseTexture, id) {
      if (id) {
        if (baseTexture.textureCacheIds.indexOf(id) === -1) {
          baseTexture.textureCacheIds.push(id);
        }
        if (BaseTextureCache[id]) {
          console.warn("BaseTexture added to the cache with an id [" + id + "] that already had an entry");
        }
        BaseTextureCache[id] = baseTexture;
      }
    };
    BaseTexture2.removeFromCache = function(baseTexture) {
      if (typeof baseTexture === "string") {
        var baseTextureFromCache = BaseTextureCache[baseTexture];
        if (baseTextureFromCache) {
          var index = baseTextureFromCache.textureCacheIds.indexOf(baseTexture);
          if (index > -1) {
            baseTextureFromCache.textureCacheIds.splice(index, 1);
          }
          delete BaseTextureCache[baseTexture];
          return baseTextureFromCache;
        }
      } else if (baseTexture && baseTexture.textureCacheIds) {
        for (var i = 0; i < baseTexture.textureCacheIds.length; ++i) {
          delete BaseTextureCache[baseTexture.textureCacheIds[i]];
        }
        baseTexture.textureCacheIds.length = 0;
        return baseTexture;
      }
      return null;
    };
    BaseTexture2._globalBatch = 0;
    return BaseTexture2;
  }(import_eventemitter3.default)
);
var AbstractMultiResource = (
  /** @class */
  function(_super) {
    __extends(AbstractMultiResource2, _super);
    function AbstractMultiResource2(length, options) {
      var _this = this;
      var _a = options || {}, width = _a.width, height = _a.height;
      _this = _super.call(this, width, height) || this;
      _this.items = [];
      _this.itemDirtyIds = [];
      for (var i = 0; i < length; i++) {
        var partTexture = new BaseTexture();
        _this.items.push(partTexture);
        _this.itemDirtyIds.push(-2);
      }
      _this.length = length;
      _this._load = null;
      _this.baseTexture = null;
      return _this;
    }
    AbstractMultiResource2.prototype.initFromArray = function(resources2, options) {
      for (var i = 0; i < this.length; i++) {
        if (!resources2[i]) {
          continue;
        }
        if (resources2[i].castToBaseTexture) {
          this.addBaseTextureAt(resources2[i].castToBaseTexture(), i);
        } else if (resources2[i] instanceof Resource) {
          this.addResourceAt(resources2[i], i);
        } else {
          this.addResourceAt(autoDetectResource(resources2[i], options), i);
        }
      }
    };
    AbstractMultiResource2.prototype.dispose = function() {
      for (var i = 0, len = this.length; i < len; i++) {
        this.items[i].destroy();
      }
      this.items = null;
      this.itemDirtyIds = null;
      this._load = null;
    };
    AbstractMultiResource2.prototype.addResourceAt = function(resource, index) {
      if (!this.items[index]) {
        throw new Error("Index " + index + " is out of bounds");
      }
      if (resource.valid && !this.valid) {
        this.resize(resource.width, resource.height);
      }
      this.items[index].setResource(resource);
      return this;
    };
    AbstractMultiResource2.prototype.bind = function(baseTexture) {
      if (this.baseTexture !== null) {
        throw new Error("Only one base texture per TextureArray is allowed");
      }
      _super.prototype.bind.call(this, baseTexture);
      for (var i = 0; i < this.length; i++) {
        this.items[i].parentTextureArray = baseTexture;
        this.items[i].on("update", baseTexture.update, baseTexture);
      }
    };
    AbstractMultiResource2.prototype.unbind = function(baseTexture) {
      _super.prototype.unbind.call(this, baseTexture);
      for (var i = 0; i < this.length; i++) {
        this.items[i].parentTextureArray = null;
        this.items[i].off("update", baseTexture.update, baseTexture);
      }
    };
    AbstractMultiResource2.prototype.load = function() {
      var _this = this;
      if (this._load) {
        return this._load;
      }
      var resources2 = this.items.map(function(item) {
        return item.resource;
      }).filter(function(item) {
        return item;
      });
      var promises = resources2.map(function(item) {
        return item.load();
      });
      this._load = Promise.all(promises).then(function() {
        var _a = _this.items[0], realWidth = _a.realWidth, realHeight = _a.realHeight;
        _this.resize(realWidth, realHeight);
        return Promise.resolve(_this);
      });
      return this._load;
    };
    return AbstractMultiResource2;
  }(Resource)
);
var ArrayResource = (
  /** @class */
  function(_super) {
    __extends(ArrayResource2, _super);
    function ArrayResource2(source, options) {
      var _this = this;
      var _a = options || {}, width = _a.width, height = _a.height;
      var urls;
      var length;
      if (Array.isArray(source)) {
        urls = source;
        length = source.length;
      } else {
        length = source;
      }
      _this = _super.call(this, length, { width, height }) || this;
      if (urls) {
        _this.initFromArray(urls, options);
      }
      return _this;
    }
    ArrayResource2.prototype.addBaseTextureAt = function(baseTexture, index) {
      if (baseTexture.resource) {
        this.addResourceAt(baseTexture.resource, index);
      } else {
        throw new Error("ArrayResource does not support RenderTexture");
      }
      return this;
    };
    ArrayResource2.prototype.bind = function(baseTexture) {
      _super.prototype.bind.call(this, baseTexture);
      baseTexture.target = TARGETS2.TEXTURE_2D_ARRAY;
    };
    ArrayResource2.prototype.upload = function(renderer, texture, glTexture) {
      var _a = this, length = _a.length, itemDirtyIds = _a.itemDirtyIds, items = _a.items;
      var gl = renderer.gl;
      if (glTexture.dirtyId < 0) {
        gl.texImage3D(gl.TEXTURE_2D_ARRAY, 0, glTexture.internalFormat, this._width, this._height, length, 0, texture.format, glTexture.type, null);
      }
      for (var i = 0; i < length; i++) {
        var item = items[i];
        if (itemDirtyIds[i] < item.dirtyId) {
          itemDirtyIds[i] = item.dirtyId;
          if (item.valid) {
            gl.texSubImage3D(
              gl.TEXTURE_2D_ARRAY,
              0,
              0,
              // xoffset
              0,
              // yoffset
              i,
              // zoffset
              item.resource.width,
              item.resource.height,
              1,
              texture.format,
              glTexture.type,
              item.resource.source
            );
          }
        }
      }
      return true;
    };
    return ArrayResource2;
  }(AbstractMultiResource)
);
var BaseImageResource = (
  /** @class */
  function(_super) {
    __extends(BaseImageResource2, _super);
    function BaseImageResource2(source) {
      var _this = this;
      var sourceAny = source;
      var width = sourceAny.naturalWidth || sourceAny.videoWidth || sourceAny.width;
      var height = sourceAny.naturalHeight || sourceAny.videoHeight || sourceAny.height;
      _this = _super.call(this, width, height) || this;
      _this.source = source;
      _this.noSubImage = false;
      return _this;
    }
    BaseImageResource2.crossOrigin = function(element, url2, crossorigin) {
      if (crossorigin === void 0 && url2.indexOf("data:") !== 0) {
        element.crossOrigin = determineCrossOrigin(url2);
      } else if (crossorigin !== false) {
        element.crossOrigin = typeof crossorigin === "string" ? crossorigin : "anonymous";
      }
    };
    BaseImageResource2.prototype.upload = function(renderer, baseTexture, glTexture, source) {
      var gl = renderer.gl;
      var width = baseTexture.realWidth;
      var height = baseTexture.realHeight;
      source = source || this.source;
      if (source instanceof HTMLImageElement) {
        if (!source.complete || source.naturalWidth === 0) {
          return false;
        }
      } else if (source instanceof HTMLVideoElement) {
        if (source.readyState <= 1) {
          return false;
        }
      }
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.alphaMode === ALPHA_MODES2.UNPACK);
      if (!this.noSubImage && baseTexture.target === gl.TEXTURE_2D && glTexture.width === width && glTexture.height === height) {
        gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, baseTexture.format, glTexture.type, source);
      } else {
        glTexture.width = width;
        glTexture.height = height;
        gl.texImage2D(baseTexture.target, 0, glTexture.internalFormat, baseTexture.format, glTexture.type, source);
      }
      return true;
    };
    BaseImageResource2.prototype.update = function() {
      if (this.destroyed) {
        return;
      }
      var source = this.source;
      var width = source.naturalWidth || source.videoWidth || source.width;
      var height = source.naturalHeight || source.videoHeight || source.height;
      this.resize(width, height);
      _super.prototype.update.call(this);
    };
    BaseImageResource2.prototype.dispose = function() {
      this.source = null;
    };
    return BaseImageResource2;
  }(Resource)
);
var CanvasResource = (
  /** @class */
  function(_super) {
    __extends(CanvasResource2, _super);
    function CanvasResource2(source) {
      return _super.call(this, source) || this;
    }
    CanvasResource2.test = function(source) {
      var OffscreenCanvas = globalThis.OffscreenCanvas;
      if (OffscreenCanvas && source instanceof OffscreenCanvas) {
        return true;
      }
      return globalThis.HTMLCanvasElement && source instanceof HTMLCanvasElement;
    };
    return CanvasResource2;
  }(BaseImageResource)
);
var CubeResource = (
  /** @class */
  function(_super) {
    __extends(CubeResource2, _super);
    function CubeResource2(source, options) {
      var _this = this;
      var _a = options || {}, width = _a.width, height = _a.height, autoLoad = _a.autoLoad, linkBaseTexture = _a.linkBaseTexture;
      if (source && source.length !== CubeResource2.SIDES) {
        throw new Error("Invalid length. Got " + source.length + ", expected 6");
      }
      _this = _super.call(this, 6, { width, height }) || this;
      for (var i = 0; i < CubeResource2.SIDES; i++) {
        _this.items[i].target = TARGETS2.TEXTURE_CUBE_MAP_POSITIVE_X + i;
      }
      _this.linkBaseTexture = linkBaseTexture !== false;
      if (source) {
        _this.initFromArray(source, options);
      }
      if (autoLoad !== false) {
        _this.load();
      }
      return _this;
    }
    CubeResource2.prototype.bind = function(baseTexture) {
      _super.prototype.bind.call(this, baseTexture);
      baseTexture.target = TARGETS2.TEXTURE_CUBE_MAP;
    };
    CubeResource2.prototype.addBaseTextureAt = function(baseTexture, index, linkBaseTexture) {
      if (!this.items[index]) {
        throw new Error("Index " + index + " is out of bounds");
      }
      if (!this.linkBaseTexture || baseTexture.parentTextureArray || Object.keys(baseTexture._glTextures).length > 0) {
        if (baseTexture.resource) {
          this.addResourceAt(baseTexture.resource, index);
        } else {
          throw new Error("CubeResource does not support copying of renderTexture.");
        }
      } else {
        baseTexture.target = TARGETS2.TEXTURE_CUBE_MAP_POSITIVE_X + index;
        baseTexture.parentTextureArray = this.baseTexture;
        this.items[index] = baseTexture;
      }
      if (baseTexture.valid && !this.valid) {
        this.resize(baseTexture.realWidth, baseTexture.realHeight);
      }
      this.items[index] = baseTexture;
      return this;
    };
    CubeResource2.prototype.upload = function(renderer, _baseTexture, glTexture) {
      var dirty = this.itemDirtyIds;
      for (var i = 0; i < CubeResource2.SIDES; i++) {
        var side = this.items[i];
        if (dirty[i] < side.dirtyId || glTexture.dirtyId < _baseTexture.dirtyId) {
          if (side.valid && side.resource) {
            side.resource.upload(renderer, side, glTexture);
            dirty[i] = side.dirtyId;
          } else if (dirty[i] < -1) {
            renderer.gl.texImage2D(side.target, 0, glTexture.internalFormat, _baseTexture.realWidth, _baseTexture.realHeight, 0, _baseTexture.format, glTexture.type, null);
            dirty[i] = -1;
          }
        }
      }
      return true;
    };
    CubeResource2.test = function(source) {
      return Array.isArray(source) && source.length === CubeResource2.SIDES;
    };
    CubeResource2.SIDES = 6;
    return CubeResource2;
  }(AbstractMultiResource)
);
var ImageResource = (
  /** @class */
  function(_super) {
    __extends(ImageResource2, _super);
    function ImageResource2(source, options) {
      var _this = this;
      options = options || {};
      if (!(source instanceof HTMLImageElement)) {
        var imageElement = new Image();
        BaseImageResource.crossOrigin(imageElement, source, options.crossorigin);
        imageElement.src = source;
        source = imageElement;
      }
      _this = _super.call(this, source) || this;
      if (!source.complete && !!_this._width && !!_this._height) {
        _this._width = 0;
        _this._height = 0;
      }
      _this.url = source.src;
      _this._process = null;
      _this.preserveBitmap = false;
      _this.createBitmap = (options.createBitmap !== void 0 ? options.createBitmap : settings.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap;
      _this.alphaMode = typeof options.alphaMode === "number" ? options.alphaMode : null;
      _this.bitmap = null;
      _this._load = null;
      if (options.autoLoad !== false) {
        _this.load();
      }
      return _this;
    }
    ImageResource2.prototype.load = function(createBitmap) {
      var _this = this;
      if (this._load) {
        return this._load;
      }
      if (createBitmap !== void 0) {
        this.createBitmap = createBitmap;
      }
      this._load = new Promise(function(resolve2, reject) {
        var source = _this.source;
        _this.url = source.src;
        var completed = function() {
          if (_this.destroyed) {
            return;
          }
          source.onload = null;
          source.onerror = null;
          _this.resize(source.width, source.height);
          _this._load = null;
          if (_this.createBitmap) {
            resolve2(_this.process());
          } else {
            resolve2(_this);
          }
        };
        if (source.complete && source.src) {
          completed();
        } else {
          source.onload = completed;
          source.onerror = function(event) {
            reject(event);
            _this.onError.emit(event);
          };
        }
      });
      return this._load;
    };
    ImageResource2.prototype.process = function() {
      var _this = this;
      var source = this.source;
      if (this._process !== null) {
        return this._process;
      }
      if (this.bitmap !== null || !globalThis.createImageBitmap) {
        return Promise.resolve(this);
      }
      var createImageBitmap = globalThis.createImageBitmap;
      var cors = !source.crossOrigin || source.crossOrigin === "anonymous";
      this._process = fetch(source.src, {
        mode: cors ? "cors" : "no-cors"
      }).then(function(r) {
        return r.blob();
      }).then(function(blob) {
        return createImageBitmap(blob, 0, 0, source.width, source.height, {
          premultiplyAlpha: _this.alphaMode === ALPHA_MODES2.UNPACK ? "premultiply" : "none"
        });
      }).then(function(bitmap) {
        if (_this.destroyed) {
          return Promise.reject();
        }
        _this.bitmap = bitmap;
        _this.update();
        _this._process = null;
        return Promise.resolve(_this);
      });
      return this._process;
    };
    ImageResource2.prototype.upload = function(renderer, baseTexture, glTexture) {
      if (typeof this.alphaMode === "number") {
        baseTexture.alphaMode = this.alphaMode;
      }
      if (!this.createBitmap) {
        return _super.prototype.upload.call(this, renderer, baseTexture, glTexture);
      }
      if (!this.bitmap) {
        this.process();
        if (!this.bitmap) {
          return false;
        }
      }
      _super.prototype.upload.call(this, renderer, baseTexture, glTexture, this.bitmap);
      if (!this.preserveBitmap) {
        var flag = true;
        var glTextures = baseTexture._glTextures;
        for (var key in glTextures) {
          var otherTex = glTextures[key];
          if (otherTex !== glTexture && otherTex.dirtyId !== baseTexture.dirtyId) {
            flag = false;
            break;
          }
        }
        if (flag) {
          if (this.bitmap.close) {
            this.bitmap.close();
          }
          this.bitmap = null;
        }
      }
      return true;
    };
    ImageResource2.prototype.dispose = function() {
      this.source.onload = null;
      this.source.onerror = null;
      _super.prototype.dispose.call(this);
      if (this.bitmap) {
        this.bitmap.close();
        this.bitmap = null;
      }
      this._process = null;
      this._load = null;
    };
    ImageResource2.test = function(source) {
      return typeof source === "string" || source instanceof HTMLImageElement;
    };
    return ImageResource2;
  }(BaseImageResource)
);
var SVGResource = (
  /** @class */
  function(_super) {
    __extends(SVGResource2, _super);
    function SVGResource2(sourceBase64, options) {
      var _this = this;
      options = options || {};
      _this = _super.call(this, settings.ADAPTER.createCanvas()) || this;
      _this._width = 0;
      _this._height = 0;
      _this.svg = sourceBase64;
      _this.scale = options.scale || 1;
      _this._overrideWidth = options.width;
      _this._overrideHeight = options.height;
      _this._resolve = null;
      _this._crossorigin = options.crossorigin;
      _this._load = null;
      if (options.autoLoad !== false) {
        _this.load();
      }
      return _this;
    }
    SVGResource2.prototype.load = function() {
      var _this = this;
      if (this._load) {
        return this._load;
      }
      this._load = new Promise(function(resolve2) {
        _this._resolve = function() {
          _this.resize(_this.source.width, _this.source.height);
          resolve2(_this);
        };
        if (SVGResource2.SVG_XML.test(_this.svg.trim())) {
          if (!btoa) {
            throw new Error("Your browser doesn't support base64 conversions.");
          }
          _this.svg = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(_this.svg)));
        }
        _this._loadSvg();
      });
      return this._load;
    };
    SVGResource2.prototype._loadSvg = function() {
      var _this = this;
      var tempImage = new Image();
      BaseImageResource.crossOrigin(tempImage, this.svg, this._crossorigin);
      tempImage.src = this.svg;
      tempImage.onerror = function(event) {
        if (!_this._resolve) {
          return;
        }
        tempImage.onerror = null;
        _this.onError.emit(event);
      };
      tempImage.onload = function() {
        if (!_this._resolve) {
          return;
        }
        var svgWidth = tempImage.width;
        var svgHeight = tempImage.height;
        if (!svgWidth || !svgHeight) {
          throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
        }
        var width = svgWidth * _this.scale;
        var height = svgHeight * _this.scale;
        if (_this._overrideWidth || _this._overrideHeight) {
          width = _this._overrideWidth || _this._overrideHeight / svgHeight * svgWidth;
          height = _this._overrideHeight || _this._overrideWidth / svgWidth * svgHeight;
        }
        width = Math.round(width);
        height = Math.round(height);
        var canvas = _this.source;
        canvas.width = width;
        canvas.height = height;
        canvas._pixiId = "canvas_" + uid();
        canvas.getContext("2d").drawImage(tempImage, 0, 0, svgWidth, svgHeight, 0, 0, width, height);
        _this._resolve();
        _this._resolve = null;
      };
    };
    SVGResource2.getSize = function(svgString) {
      var sizeMatch = SVGResource2.SVG_SIZE.exec(svgString);
      var size = {};
      if (sizeMatch) {
        size[sizeMatch[1]] = Math.round(parseFloat(sizeMatch[3]));
        size[sizeMatch[5]] = Math.round(parseFloat(sizeMatch[7]));
      }
      return size;
    };
    SVGResource2.prototype.dispose = function() {
      _super.prototype.dispose.call(this);
      this._resolve = null;
      this._crossorigin = null;
    };
    SVGResource2.test = function(source, extension) {
      return extension === "svg" || typeof source === "string" && /^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(source) || typeof source === "string" && SVGResource2.SVG_XML.test(source);
    };
    SVGResource2.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m;
    SVGResource2.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
    return SVGResource2;
  }(BaseImageResource)
);
var VideoResource = (
  /** @class */
  function(_super) {
    __extends(VideoResource2, _super);
    function VideoResource2(source, options) {
      var _this = this;
      options = options || {};
      if (!(source instanceof HTMLVideoElement)) {
        var videoElement = document.createElement("video");
        videoElement.setAttribute("preload", "auto");
        videoElement.setAttribute("webkit-playsinline", "");
        videoElement.setAttribute("playsinline", "");
        if (typeof source === "string") {
          source = [source];
        }
        var firstSrc = source[0].src || source[0];
        BaseImageResource.crossOrigin(videoElement, firstSrc, options.crossorigin);
        for (var i = 0; i < source.length; ++i) {
          var sourceElement = document.createElement("source");
          var _a = source[i], src = _a.src, mime = _a.mime;
          src = src || source[i];
          var baseSrc = src.split("?").shift().toLowerCase();
          var ext = baseSrc.slice(baseSrc.lastIndexOf(".") + 1);
          mime = mime || VideoResource2.MIME_TYPES[ext] || "video/" + ext;
          sourceElement.src = src;
          sourceElement.type = mime;
          videoElement.appendChild(sourceElement);
        }
        source = videoElement;
      }
      _this = _super.call(this, source) || this;
      _this.noSubImage = true;
      _this._autoUpdate = true;
      _this._isConnectedToTicker = false;
      _this._updateFPS = options.updateFPS || 0;
      _this._msToNextUpdate = 0;
      _this.autoPlay = options.autoPlay !== false;
      _this._load = null;
      _this._resolve = null;
      _this._onCanPlay = _this._onCanPlay.bind(_this);
      _this._onError = _this._onError.bind(_this);
      if (options.autoLoad !== false) {
        _this.load();
      }
      return _this;
    }
    VideoResource2.prototype.update = function(_deltaTime) {
      if (!this.destroyed) {
        var elapsedMS = Ticker.shared.elapsedMS * this.source.playbackRate;
        this._msToNextUpdate = Math.floor(this._msToNextUpdate - elapsedMS);
        if (!this._updateFPS || this._msToNextUpdate <= 0) {
          _super.prototype.update.call(this);
          this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0;
        }
      }
    };
    VideoResource2.prototype.load = function() {
      var _this = this;
      if (this._load) {
        return this._load;
      }
      var source = this.source;
      if ((source.readyState === source.HAVE_ENOUGH_DATA || source.readyState === source.HAVE_FUTURE_DATA) && source.width && source.height) {
        source.complete = true;
      }
      source.addEventListener("play", this._onPlayStart.bind(this));
      source.addEventListener("pause", this._onPlayStop.bind(this));
      if (!this._isSourceReady()) {
        source.addEventListener("canplay", this._onCanPlay);
        source.addEventListener("canplaythrough", this._onCanPlay);
        source.addEventListener("error", this._onError, true);
      } else {
        this._onCanPlay();
      }
      this._load = new Promise(function(resolve2) {
        if (_this.valid) {
          resolve2(_this);
        } else {
          _this._resolve = resolve2;
          source.load();
        }
      });
      return this._load;
    };
    VideoResource2.prototype._onError = function(event) {
      this.source.removeEventListener("error", this._onError, true);
      this.onError.emit(event);
    };
    VideoResource2.prototype._isSourcePlaying = function() {
      var source = this.source;
      return source.currentTime > 0 && source.paused === false && source.ended === false && source.readyState > 2;
    };
    VideoResource2.prototype._isSourceReady = function() {
      var source = this.source;
      return source.readyState === 3 || source.readyState === 4;
    };
    VideoResource2.prototype._onPlayStart = function() {
      if (!this.valid) {
        this._onCanPlay();
      }
      if (this.autoUpdate && !this._isConnectedToTicker) {
        Ticker.shared.add(this.update, this);
        this._isConnectedToTicker = true;
      }
    };
    VideoResource2.prototype._onPlayStop = function() {
      if (this._isConnectedToTicker) {
        Ticker.shared.remove(this.update, this);
        this._isConnectedToTicker = false;
      }
    };
    VideoResource2.prototype._onCanPlay = function() {
      var source = this.source;
      source.removeEventListener("canplay", this._onCanPlay);
      source.removeEventListener("canplaythrough", this._onCanPlay);
      var valid = this.valid;
      this.resize(source.videoWidth, source.videoHeight);
      if (!valid && this._resolve) {
        this._resolve(this);
        this._resolve = null;
      }
      if (this._isSourcePlaying()) {
        this._onPlayStart();
      } else if (this.autoPlay) {
        source.play();
      }
    };
    VideoResource2.prototype.dispose = function() {
      if (this._isConnectedToTicker) {
        Ticker.shared.remove(this.update, this);
        this._isConnectedToTicker = false;
      }
      var source = this.source;
      if (source) {
        source.removeEventListener("error", this._onError, true);
        source.pause();
        source.src = "";
        source.load();
      }
      _super.prototype.dispose.call(this);
    };
    Object.defineProperty(VideoResource2.prototype, "autoUpdate", {
      /** Should the base texture automatically update itself, set to true by default. */
      get: function() {
        return this._autoUpdate;
      },
      set: function(value) {
        if (value !== this._autoUpdate) {
          this._autoUpdate = value;
          if (!this._autoUpdate && this._isConnectedToTicker) {
            Ticker.shared.remove(this.update, this);
            this._isConnectedToTicker = false;
          } else if (this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying()) {
            Ticker.shared.add(this.update, this);
            this._isConnectedToTicker = true;
          }
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(VideoResource2.prototype, "updateFPS", {
      /**
       * How many times a second to update the texture from the video. Leave at 0 to update at every render.
       * A lower fps can help performance, as updating the texture at 60fps on a 30ps video may not be efficient.
       */
      get: function() {
        return this._updateFPS;
      },
      set: function(value) {
        if (value !== this._updateFPS) {
          this._updateFPS = value;
        }
      },
      enumerable: false,
      configurable: true
    });
    VideoResource2.test = function(source, extension) {
      return globalThis.HTMLVideoElement && source instanceof HTMLVideoElement || VideoResource2.TYPES.indexOf(extension) > -1;
    };
    VideoResource2.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"];
    VideoResource2.MIME_TYPES = {
      ogv: "video/ogg",
      mov: "video/quicktime",
      m4v: "video/mp4"
    };
    return VideoResource2;
  }(BaseImageResource)
);
var ImageBitmapResource = (
  /** @class */
  function(_super) {
    __extends(ImageBitmapResource2, _super);
    function ImageBitmapResource2(source) {
      return _super.call(this, source) || this;
    }
    ImageBitmapResource2.test = function(source) {
      return !!globalThis.createImageBitmap && typeof ImageBitmap !== "undefined" && source instanceof ImageBitmap;
    };
    return ImageBitmapResource2;
  }(BaseImageResource)
);
INSTALLED.push(ImageResource, ImageBitmapResource, CanvasResource, VideoResource, SVGResource, BufferResource, CubeResource, ArrayResource);
var _resources = {
  __proto__: null,
  Resource,
  BaseImageResource,
  INSTALLED,
  autoDetectResource,
  AbstractMultiResource,
  ArrayResource,
  BufferResource,
  CanvasResource,
  CubeResource,
  ImageResource,
  SVGResource,
  VideoResource,
  ImageBitmapResource
};
var DepthResource = (
  /** @class */
  function(_super) {
    __extends(DepthResource2, _super);
    function DepthResource2() {
      return _super !== null && _super.apply(this, arguments) || this;
    }
    DepthResource2.prototype.upload = function(renderer, baseTexture, glTexture) {
      var gl = renderer.gl;
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, baseTexture.alphaMode === ALPHA_MODES2.UNPACK);
      var width = baseTexture.realWidth;
      var height = baseTexture.realHeight;
      if (glTexture.width === width && glTexture.height === height) {
        gl.texSubImage2D(baseTexture.target, 0, 0, 0, width, height, baseTexture.format, glTexture.type, this.data);
      } else {
        glTexture.width = width;
        glTexture.height = height;
        gl.texImage2D(baseTexture.target, 0, glTexture.internalFormat, width, height, 0, baseTexture.format, glTexture.type, this.data);
      }
      return true;
    };
    return DepthResource2;
  }(BufferResource)
);
var Framebuffer = (
  /** @class */
  function() {
    function Framebuffer2(width, height) {
      this.width = Math.round(width || 100);
      this.height = Math.round(height || 100);
      this.stencil = false;
      this.depth = false;
      this.dirtyId = 0;
      this.dirtyFormat = 0;
      this.dirtySize = 0;
      this.depthTexture = null;
      this.colorTextures = [];
      this.glFramebuffers = {};
      this.disposeRunner = new Runner("disposeFramebuffer");
      this.multisample = MSAA_QUALITY2.NONE;
    }
    Object.defineProperty(Framebuffer2.prototype, "colorTexture", {
      /**
       * Reference to the colorTexture.
       * @readonly
       */
      get: function() {
        return this.colorTextures[0];
      },
      enumerable: false,
      configurable: true
    });
    Framebuffer2.prototype.addColorTexture = function(index, texture) {
      if (index === void 0) {
        index = 0;
      }
      this.colorTextures[index] = texture || new BaseTexture(null, {
        scaleMode: SCALE_MODES2.NEAREST,
        resolution: 1,
        mipmap: MIPMAP_MODES2.OFF,
        width: this.width,
        height: this.height
      });
      this.dirtyId++;
      this.dirtyFormat++;
      return this;
    };
    Framebuffer2.prototype.addDepthTexture = function(texture) {
      this.depthTexture = texture || new BaseTexture(new DepthResource(null, { width: this.width, height: this.height }), {
        scaleMode: SCALE_MODES2.NEAREST,
        resolution: 1,
        width: this.width,
        height: this.height,
        mipmap: MIPMAP_MODES2.OFF,
        format: FORMATS2.DEPTH_COMPONENT,
        type: TYPES2.UNSIGNED_SHORT
      });
      this.dirtyId++;
      this.dirtyFormat++;
      return this;
    };
    Framebuffer2.prototype.enableDepth = function() {
      this.depth = true;
      this.dirtyId++;
      this.dirtyFormat++;
      return this;
    };
    Framebuffer2.prototype.enableStencil = function() {
      this.stencil = true;
      this.dirtyId++;
      this.dirtyFormat++;
      return this;
    };
    Framebuffer2.prototype.resize = function(width, height) {
      width = Math.round(width);
      height = Math.round(height);
      if (width === this.width && height === this.height) {
        return;
      }
      this.width = width;
      this.height = height;
      this.dirtyId++;
      this.dirtySize++;
      for (var i = 0; i < this.colorTextures.length; i++) {
        var texture = this.colorTextures[i];
        var resolution = texture.resolution;
        texture.setSize(width / resolution, height / resolution);
      }
      if (this.depthTexture) {
        var resolution = this.depthTexture.resolution;
        this.depthTexture.setSize(width / resolution, height / resolution);
      }
    };
    Framebuffer2.prototype.dispose = function() {
      this.disposeRunner.emit(this, false);
    };
    Framebuffer2.prototype.destroyDepthTexture = function() {
      if (this.depthTexture) {
        this.depthTexture.destroy();
        this.depthTexture = null;
        ++this.dirtyId;
        ++this.dirtyFormat;
      }
    };
    return Framebuffer2;
  }()
);
var BaseRenderTexture = (
  /** @class */
  function(_super) {
    __extends(BaseRenderTexture2, _super);
    function BaseRenderTexture2(options) {
      if (options === void 0) {
        options = {};
      }
      var _this = this;
      if (typeof options === "number") {
        var width = arguments[0];
        var height = arguments[1];
        var scaleMode = arguments[2];
        var resolution = arguments[3];
        options = { width, height, scaleMode, resolution };
      }
      options.width = options.width || 100;
      options.height = options.height || 100;
      options.multisample = options.multisample !== void 0 ? options.multisample : MSAA_QUALITY2.NONE;
      _this = _super.call(this, null, options) || this;
      _this.mipmap = MIPMAP_MODES2.OFF;
      _this.valid = true;
      _this.clearColor = [0, 0, 0, 0];
      _this.framebuffer = new Framebuffer(_this.realWidth, _this.realHeight).addColorTexture(0, _this);
      _this.framebuffer.multisample = options.multisample;
      _this.maskStack = [];
      _this.filterStack = [{}];
      return _this;
    }
    BaseRenderTexture2.prototype.resize = function(desiredWidth, desiredHeight) {
      this.framebuffer.resize(desiredWidth * this.resolution, desiredHeight * this.resolution);
      this.setRealSize(this.framebuffer.width, this.framebuffer.height);
    };
    BaseRenderTexture2.prototype.dispose = function() {
      this.framebuffer.dispose();
      _super.prototype.dispose.call(this);
    };
    BaseRenderTexture2.prototype.destroy = function() {
      _super.prototype.destroy.call(this);
      this.framebuffer.destroyDepthTexture();
      this.framebuffer = null;
    };
    return BaseRenderTexture2;
  }(BaseTexture)
);
var TextureUvs = (
  /** @class */
  function() {
    function TextureUvs2() {
      this.x0 = 0;
      this.y0 = 0;
      this.x1 = 1;
      this.y1 = 0;
      this.x2 = 1;
      this.y2 = 1;
      this.x3 = 0;
      this.y3 = 1;
      this.uvsFloat32 = new Float32Array(8);
    }
    TextureUvs2.prototype.set = function(frame, baseFrame, rotate) {
      var tw = baseFrame.width;
      var th = baseFrame.height;
      if (rotate) {
        var w2 = frame.width / 2 / tw;
        var h2 = frame.height / 2 / th;
        var cX = frame.x / tw + w2;
        var cY = frame.y / th + h2;
        rotate = groupD8.add(rotate, groupD8.NW);
        this.x0 = cX + w2 * groupD8.uX(rotate);
        this.y0 = cY + h2 * groupD8.uY(rotate);
        rotate = groupD8.add(rotate, 2);
        this.x1 = cX + w2 * groupD8.uX(rotate);
        this.y1 = cY + h2 * groupD8.uY(rotate);
        rotate = groupD8.add(rotate, 2);
        this.x2 = cX + w2 * groupD8.uX(rotate);
        this.y2 = cY + h2 * groupD8.uY(rotate);
        rotate = groupD8.add(rotate, 2);
        this.x3 = cX + w2 * groupD8.uX(rotate);
        this.y3 = cY + h2 * groupD8.uY(rotate);
      } else {
        this.x0 = frame.x / tw;
        this.y0 = frame.y / th;
        this.x1 = (frame.x + frame.width) / tw;
        this.y1 = frame.y / th;
        this.x2 = (frame.x + frame.width) / tw;
        this.y2 = (frame.y + frame.height) / th;
        this.x3 = frame.x / tw;
        this.y3 = (frame.y + frame.height) / th;
      }
      this.uvsFloat32[0] = this.x0;
      this.uvsFloat32[1] = this.y0;
      this.uvsFloat32[2] = this.x1;
      this.uvsFloat32[3] = this.y1;
      this.uvsFloat32[4] = this.x2;
      this.uvsFloat32[5] = this.y2;
      this.uvsFloat32[6] = this.x3;
      this.uvsFloat32[7] = this.y3;
    };
    TextureUvs2.prototype.toString = function() {
      return "[@pixi/core:TextureUvs " + ("x0=" + this.x0 + " y0=" + this.y0 + " ") + ("x1=" + this.x1 + " y1=" + this.y1 + " x2=" + this.x2 + " ") + ("y2=" + this.y2 + " x3=" + this.x3 + " y3=" + this.y3) + "]";
    };
    return TextureUvs2;
  }()
);
var DEFAULT_UVS = new TextureUvs();
function removeAllHandlers(tex) {
  tex.destroy = function _emptyDestroy() {
  };
  tex.on = function _emptyOn() {
  };
  tex.once = function _emptyOnce() {
  };
  tex.emit = function _emptyEmit() {
  };
}
var Texture = (
  /** @class */
  function(_super) {
    __extends(Texture2, _super);
    function Texture2(baseTexture, frame, orig, trim, rotate, anchor) {
      var _this = _super.call(this) || this;
      _this.noFrame = false;
      if (!frame) {
        _this.noFrame = true;
        frame = new Rectangle(0, 0, 1, 1);
      }
      if (baseTexture instanceof Texture2) {
        baseTexture = baseTexture.baseTexture;
      }
      _this.baseTexture = baseTexture;
      _this._frame = frame;
      _this.trim = trim;
      _this.valid = false;
      _this._uvs = DEFAULT_UVS;
      _this.uvMatrix = null;
      _this.orig = orig || frame;
      _this._rotate = Number(rotate || 0);
      if (rotate === true) {
        _this._rotate = 2;
      } else if (_this._rotate % 2 !== 0) {
        throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
      }
      _this.defaultAnchor = anchor ? new Point(anchor.x, anchor.y) : new Point(0, 0);
      _this._updateID = 0;
      _this.textureCacheIds = [];
      if (!baseTexture.valid) {
        baseTexture.once("loaded", _this.onBaseTextureUpdated, _this);
      } else if (_this.noFrame) {
        if (baseTexture.valid) {
          _this.onBaseTextureUpdated(baseTexture);
        }
      } else {
        _this.frame = frame;
      }
      if (_this.noFrame) {
        baseTexture.on("update", _this.onBaseTextureUpdated, _this);
      }
      return _this;
    }
    Texture2.prototype.update = function() {
      if (this.baseTexture.resource) {
        this.baseTexture.resource.update();
      }
    };
    Texture2.prototype.onBaseTextureUpdated = function(baseTexture) {
      if (this.noFrame) {
        if (!this.baseTexture.valid) {
          return;
        }
        this._frame.width = baseTexture.width;
        this._frame.height = baseTexture.height;
        this.valid = true;
        this.updateUvs();
      } else {
        this.frame = this._frame;
      }
      this.emit("update", this);
    };
    Texture2.prototype.destroy = function(destroyBase) {
      if (this.baseTexture) {
        if (destroyBase) {
          var resource = this.baseTexture.resource;
          if (resource && resource.url && TextureCache[resource.url]) {
            Texture2.removeFromCache(resource.url);
          }
          this.baseTexture.destroy();
        }
        this.baseTexture.off("loaded", this.onBaseTextureUpdated, this);
        this.baseTexture.off("update", this.onBaseTextureUpdated, this);
        this.baseTexture = null;
      }
      this._frame = null;
      this._uvs = null;
      this.trim = null;
      this.orig = null;
      this.valid = false;
      Texture2.removeFromCache(this);
      this.textureCacheIds = null;
    };
    Texture2.prototype.clone = function() {
      var clonedFrame = this._frame.clone();
      var clonedOrig = this._frame === this.orig ? clonedFrame : this.orig.clone();
      var clonedTexture = new Texture2(this.baseTexture, !this.noFrame && clonedFrame, clonedOrig, this.trim && this.trim.clone(), this.rotate, this.defaultAnchor);
      if (this.noFrame) {
        clonedTexture._frame = clonedFrame;
      }
      return clonedTexture;
    };
    Texture2.prototype.updateUvs = function() {
      if (this._uvs === DEFAULT_UVS) {
        this._uvs = new TextureUvs();
      }
      this._uvs.set(this._frame, this.baseTexture, this.rotate);
      this._updateID++;
    };
    Texture2.from = function(source, options, strict) {
      if (options === void 0) {
        options = {};
      }
      if (strict === void 0) {
        strict = settings.STRICT_TEXTURE_CACHE;
      }
      var isFrame = typeof source === "string";
      var cacheId = null;
      if (isFrame) {
        cacheId = source;
      } else if (source instanceof BaseTexture) {
        if (!source.cacheId) {
          var prefix = options && options.pixiIdPrefix || "pixiid";
          source.cacheId = prefix + "-" + uid();
          BaseTexture.addToCache(source, source.cacheId);
        }
        cacheId = source.cacheId;
      } else {
        if (!source._pixiId) {
          var prefix = options && options.pixiIdPrefix || "pixiid";
          source._pixiId = prefix + "_" + uid();
        }
        cacheId = source._pixiId;
      }
      var texture = TextureCache[cacheId];
      if (isFrame && strict && !texture) {
        throw new Error('The cacheId "' + cacheId + '" does not exist in TextureCache.');
      }
      if (!texture && !(source instanceof BaseTexture)) {
        if (!options.resolution) {
          options.resolution = getResolutionOfUrl(source);
        }
        texture = new Texture2(new BaseTexture(source, options));
        texture.baseTexture.cacheId = cacheId;
        BaseTexture.addToCache(texture.baseTexture, cacheId);
        Texture2.addToCache(texture, cacheId);
      } else if (!texture && source instanceof BaseTexture) {
        texture = new Texture2(source);
        Texture2.addToCache(texture, cacheId);
      }
      return texture;
    };
    Texture2.fromURL = function(url2, options) {
      var resourceOptions = Object.assign({ autoLoad: false }, options === null || options === void 0 ? void 0 : options.resourceOptions);
      var texture = Texture2.from(url2, Object.assign({ resourceOptions }, options), false);
      var resource = texture.baseTexture.resource;
      if (texture.baseTexture.valid) {
        return Promise.resolve(texture);
      }
      return resource.load().then(function() {
        return Promise.resolve(texture);
      });
    };
    Texture2.fromBuffer = function(buffer, width, height, options) {
      return new Texture2(BaseTexture.fromBuffer(buffer, width, height, options));
    };
    Texture2.fromLoader = function(source, imageUrl, name, options) {
      var baseTexture = new BaseTexture(source, Object.assign({
        scaleMode: settings.SCALE_MODE,
        resolution: getResolutionOfUrl(imageUrl)
      }, options));
      var resource = baseTexture.resource;
      if (resource instanceof ImageResource) {
        resource.url = imageUrl;
      }
      var texture = new Texture2(baseTexture);
      if (!name) {
        name = imageUrl;
      }
      BaseTexture.addToCache(texture.baseTexture, name);
      Texture2.addToCache(texture, name);
      if (name !== imageUrl) {
        BaseTexture.addToCache(texture.baseTexture, imageUrl);
        Texture2.addToCache(texture, imageUrl);
      }
      if (texture.baseTexture.valid) {
        return Promise.resolve(texture);
      }
      return new Promise(function(resolve2) {
        texture.baseTexture.once("loaded", function() {
          return resolve2(texture);
        });
      });
    };
    Texture2.addToCache = function(texture, id) {
      if (id) {
        if (texture.textureCacheIds.indexOf(id) === -1) {
          texture.textureCacheIds.push(id);
        }
        if (TextureCache[id]) {
          console.warn("Texture added to the cache with an id [" + id + "] that already had an entry");
        }
        TextureCache[id] = texture;
      }
    };
    Texture2.removeFromCache = function(texture) {
      if (typeof texture === "string") {
        var textureFromCache = TextureCache[texture];
        if (textureFromCache) {
          var index = textureFromCache.textureCacheIds.indexOf(texture);
          if (index > -1) {
            textureFromCache.textureCacheIds.splice(index, 1);
          }
          delete TextureCache[texture];
          return textureFromCache;
        }
      } else if (texture && texture.textureCacheIds) {
        for (var i = 0; i < texture.textureCacheIds.length; ++i) {
          if (TextureCache[texture.textureCacheIds[i]] === texture) {
            delete TextureCache[texture.textureCacheIds[i]];
          }
        }
        texture.textureCacheIds.length = 0;
        return texture;
      }
      return null;
    };
    Object.defineProperty(Texture2.prototype, "resolution", {
      /**
       * Returns resolution of baseTexture
       * @readonly
       */
      get: function() {
        return this.baseTexture.resolution;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Texture2.prototype, "frame", {
      /**
       * The frame specifies the region of the base texture that this texture uses.
       * Please call `updateUvs()` after you change coordinates of `frame` manually.
       */
      get: function() {
        return this._frame;
      },
      set: function(frame) {
        this._frame = frame;
        this.noFrame = false;
        var x = frame.x, y = frame.y, width = frame.width, height = frame.height;
        var xNotFit = x + width > this.baseTexture.width;
        var yNotFit = y + height > this.baseTexture.height;
        if (xNotFit || yNotFit) {
          var relationship = xNotFit && yNotFit ? "and" : "or";
          var errorX = "X: " + x + " + " + width + " = " + (x + width) + " > " + this.baseTexture.width;
          var errorY = "Y: " + y + " + " + height + " = " + (y + height) + " > " + this.baseTexture.height;
          throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + (errorX + " " + relationship + " " + errorY));
        }
        this.valid = width && height && this.baseTexture.valid;
        if (!this.trim && !this.rotate) {
          this.orig = frame;
        }
        if (this.valid) {
          this.updateUvs();
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Texture2.prototype, "rotate", {
      /**
       * Indicates whether the texture is rotated inside the atlas
       * set to 2 to compensate for texture packer rotation
       * set to 6 to compensate for spine packer rotation
       * can be used to rotate or mirror sprites
       * See {@link PIXI.groupD8} for explanation
       */
      get: function() {
        return this._rotate;
      },
      set: function(rotate) {
        this._rotate = rotate;
        if (this.valid) {
          this.updateUvs();
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Texture2.prototype, "width", {
      /** The width of the Texture in pixels. */
      get: function() {
        return this.orig.width;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Texture2.prototype, "height", {
      /** The height of the Texture in pixels. */
      get: function() {
        return this.orig.height;
      },
      enumerable: false,
      configurable: true
    });
    Texture2.prototype.castToBaseTexture = function() {
      return this.baseTexture;
    };
    Object.defineProperty(Texture2, "EMPTY", {
      /** An empty texture, used often to not have to create multiple empty textures. Can not be destroyed. */
      get: function() {
        if (!Texture2._EMPTY) {
          Texture2._EMPTY = new Texture2(new BaseTexture());
          removeAllHandlers(Texture2._EMPTY);
          removeAllHandlers(Texture2._EMPTY.baseTexture);
        }
        return Texture2._EMPTY;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Texture2, "WHITE", {
      /** A white texture of 16x16 size, used for graphics and other things Can not be destroyed. */
      get: function() {
        if (!Texture2._WHITE) {
          var canvas = settings.ADAPTER.createCanvas(16, 16);
          var context2 = canvas.getContext("2d");
          canvas.width = 16;
          canvas.height = 16;
          context2.fillStyle = "white";
          context2.fillRect(0, 0, 16, 16);
          Texture2._WHITE = new Texture2(BaseTexture.from(canvas));
          removeAllHandlers(Texture2._WHITE);
          removeAllHandlers(Texture2._WHITE.baseTexture);
        }
        return Texture2._WHITE;
      },
      enumerable: false,
      configurable: true
    });
    return Texture2;
  }(import_eventemitter3.default)
);
var RenderTexture = (
  /** @class */
  function(_super) {
    __extends(RenderTexture2, _super);
    function RenderTexture2(baseRenderTexture, frame) {
      var _this = _super.call(this, baseRenderTexture, frame) || this;
      _this.valid = true;
      _this.filterFrame = null;
      _this.filterPoolKey = null;
      _this.updateUvs();
      return _this;
    }
    Object.defineProperty(RenderTexture2.prototype, "framebuffer", {
      /**
       * Shortcut to `this.baseTexture.framebuffer`, saves baseTexture cast.
       * @readonly
       */
      get: function() {
        return this.baseTexture.framebuffer;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(RenderTexture2.prototype, "multisample", {
      /**
       * Shortcut to `this.framebuffer.multisample`.
       * @default PIXI.MSAA_QUALITY.NONE
       */
      get: function() {
        return this.framebuffer.multisample;
      },
      set: function(value) {
        this.framebuffer.multisample = value;
      },
      enumerable: false,
      configurable: true
    });
    RenderTexture2.prototype.resize = function(desiredWidth, desiredHeight, resizeBaseTexture) {
      if (resizeBaseTexture === void 0) {
        resizeBaseTexture = true;
      }
      var resolution = this.baseTexture.resolution;
      var width = Math.round(desiredWidth * resolution) / resolution;
      var height = Math.round(desiredHeight * resolution) / resolution;
      this.valid = width > 0 && height > 0;
      this._frame.width = this.orig.width = width;
      this._frame.height = this.orig.height = height;
      if (resizeBaseTexture) {
        this.baseTexture.resize(width, height);
      }
      this.updateUvs();
    };
    RenderTexture2.prototype.setResolution = function(resolution) {
      var baseTexture = this.baseTexture;
      if (baseTexture.resolution === resolution) {
        return;
      }
      baseTexture.setResolution(resolution);
      this.resize(baseTexture.width, baseTexture.height, false);
    };
    RenderTexture2.create = function(options) {
      var arguments$1 = arguments;
      var rest = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments$1[_i];
      }
      if (typeof options === "number") {
        deprecation("6.0.0", "Arguments (width, height, scaleMode, resolution) have been deprecated.");
        options = {
          width: options,
          height: rest[0],
          scaleMode: rest[1],
          resolution: rest[2]
        };
      }
      return new RenderTexture2(new BaseRenderTexture(options));
    };
    return RenderTexture2;
  }(Texture)
);
var RenderTexturePool = (
  /** @class */
  function() {
    function RenderTexturePool2(textureOptions) {
      this.texturePool = {};
      this.textureOptions = textureOptions || {};
      this.enableFullScreen = false;
      this._pixelsWidth = 0;
      this._pixelsHeight = 0;
    }
    RenderTexturePool2.prototype.createTexture = function(realWidth, realHeight, multisample) {
      if (multisample === void 0) {
        multisample = MSAA_QUALITY2.NONE;
      }
      var baseRenderTexture = new BaseRenderTexture(Object.assign({
        width: realWidth,
        height: realHeight,
        resolution: 1,
        multisample
      }, this.textureOptions));
      return new RenderTexture(baseRenderTexture);
    };
    RenderTexturePool2.prototype.getOptimalTexture = function(minWidth, minHeight, resolution, multisample) {
      if (resolution === void 0) {
        resolution = 1;
      }
      if (multisample === void 0) {
        multisample = MSAA_QUALITY2.NONE;
      }
      var key;
      minWidth = Math.ceil(minWidth * resolution - 1e-6);
      minHeight = Math.ceil(minHeight * resolution - 1e-6);
      if (!this.enableFullScreen || minWidth !== this._pixelsWidth || minHeight !== this._pixelsHeight) {
        minWidth = nextPow2(minWidth);
        minHeight = nextPow2(minHeight);
        key = ((minWidth & 65535) << 16 | minHeight & 65535) >>> 0;
        if (multisample > 1) {
          key += multisample * 4294967296;
        }
      } else {
        key = multisample > 1 ? -multisample : -1;
      }
      if (!this.texturePool[key]) {
        this.texturePool[key] = [];
      }
      var renderTexture = this.texturePool[key].pop();
      if (!renderTexture) {
        renderTexture = this.createTexture(minWidth, minHeight, multisample);
      }
      renderTexture.filterPoolKey = key;
      renderTexture.setResolution(resolution);
      return renderTexture;
    };
    RenderTexturePool2.prototype.getFilterTexture = function(input, resolution, multisample) {
      var filterTexture = this.getOptimalTexture(input.width, input.height, resolution || input.resolution, multisample || MSAA_QUALITY2.NONE);
      filterTexture.filterFrame = input.filterFrame;
      return filterTexture;
    };
    RenderTexturePool2.prototype.returnTexture = function(renderTexture) {
      var key = renderTexture.filterPoolKey;
      renderTexture.filterFrame = null;
      this.texturePool[key].push(renderTexture);
    };
    RenderTexturePool2.prototype.returnFilterTexture = function(renderTexture) {
      this.returnTexture(renderTexture);
    };
    RenderTexturePool2.prototype.clear = function(destroyTextures) {
      destroyTextures = destroyTextures !== false;
      if (destroyTextures) {
        for (var i in this.texturePool) {
          var textures = this.texturePool[i];
          if (textures) {
            for (var j = 0; j < textures.length; j++) {
              textures[j].destroy(true);
            }
          }
        }
      }
      this.texturePool = {};
    };
    RenderTexturePool2.prototype.setScreenSize = function(size) {
      if (size.width === this._pixelsWidth && size.height === this._pixelsHeight) {
        return;
      }
      this.enableFullScreen = size.width > 0 && size.height > 0;
      for (var i in this.texturePool) {
        if (!(Number(i) < 0)) {
          continue;
        }
        var textures = this.texturePool[i];
        if (textures) {
          for (var j = 0; j < textures.length; j++) {
            textures[j].destroy(true);
          }
        }
        this.texturePool[i] = [];
      }
      this._pixelsWidth = size.width;
      this._pixelsHeight = size.height;
    };
    RenderTexturePool2.SCREEN_KEY = -1;
    return RenderTexturePool2;
  }()
);
var Attribute = (
  /** @class */
  function() {
    function Attribute2(buffer, size, normalized, type, stride, start, instance) {
      if (size === void 0) {
        size = 0;
      }
      if (normalized === void 0) {
        normalized = false;
      }
      if (type === void 0) {
        type = TYPES2.FLOAT;
      }
      this.buffer = buffer;
      this.size = size;
      this.normalized = normalized;
      this.type = type;
      this.stride = stride;
      this.start = start;
      this.instance = instance;
    }
    Attribute2.prototype.destroy = function() {
      this.buffer = null;
    };
    Attribute2.from = function(buffer, size, normalized, type, stride) {
      return new Attribute2(buffer, size, normalized, type, stride);
    };
    return Attribute2;
  }()
);
var UID$4 = 0;
var Buffer = (
  /** @class */
  function() {
    function Buffer2(data, _static, index) {
      if (_static === void 0) {
        _static = true;
      }
      if (index === void 0) {
        index = false;
      }
      this.data = data || new Float32Array(1);
      this._glBuffers = {};
      this._updateID = 0;
      this.index = index;
      this.static = _static;
      this.id = UID$4++;
      this.disposeRunner = new Runner("disposeBuffer");
    }
    Buffer2.prototype.update = function(data) {
      if (data instanceof Array) {
        data = new Float32Array(data);
      }
      this.data = data || this.data;
      this._updateID++;
    };
    Buffer2.prototype.dispose = function() {
      this.disposeRunner.emit(this, false);
    };
    Buffer2.prototype.destroy = function() {
      this.dispose();
      this.data = null;
    };
    Object.defineProperty(Buffer2.prototype, "index", {
      get: function() {
        return this.type === BUFFER_TYPE2.ELEMENT_ARRAY_BUFFER;
      },
      /**
       * Flags whether this is an index buffer.
       *
       * Index buffers are of type `ELEMENT_ARRAY_BUFFER`. Note that setting this property to false will make
       * the buffer of type `ARRAY_BUFFER`.
       *
       * For backwards compatibility.
       */
      set: function(value) {
        this.type = value ? BUFFER_TYPE2.ELEMENT_ARRAY_BUFFER : BUFFER_TYPE2.ARRAY_BUFFER;
      },
      enumerable: false,
      configurable: true
    });
    Buffer2.from = function(data) {
      if (data instanceof Array) {
        data = new Float32Array(data);
      }
      return new Buffer2(data);
    };
    return Buffer2;
  }()
);
var map$1 = {
  Float32Array,
  Uint32Array,
  Int32Array,
  Uint8Array
};
function interleaveTypedArrays2(arrays, sizes) {
  var outSize = 0;
  var stride = 0;
  var views = {};
  for (var i = 0; i < arrays.length; i++) {
    stride += sizes[i];
    outSize += arrays[i].length;
  }
  var buffer = new ArrayBuffer(outSize * 4);
  var out = null;
  var littleOffset = 0;
  for (var i = 0; i < arrays.length; i++) {
    var size = sizes[i];
    var array = arrays[i];
    var type = getBufferType(array);
    if (!views[type]) {
      views[type] = new map$1[type](buffer);
    }
    out = views[type];
    for (var j = 0; j < array.length; j++) {
      var indexStart = (j / size | 0) * stride + littleOffset;
      var index = j % size;
      out[indexStart + index] = array[j];
    }
    littleOffset += size;
  }
  return new Float32Array(buffer);
}
var byteSizeMap$1 = { 5126: 4, 5123: 2, 5121: 1 };
var UID$3 = 0;
var map2 = {
  Float32Array,
  Uint32Array,
  Int32Array,
  Uint8Array,
  Uint16Array
};
var Geometry = (
  /** @class */
  function() {
    function Geometry2(buffers, attributes) {
      if (buffers === void 0) {
        buffers = [];
      }
      if (attributes === void 0) {
        attributes = {};
      }
      this.buffers = buffers;
      this.indexBuffer = null;
      this.attributes = attributes;
      this.glVertexArrayObjects = {};
      this.id = UID$3++;
      this.instanced = false;
      this.instanceCount = 1;
      this.disposeRunner = new Runner("disposeGeometry");
      this.refCount = 0;
    }
    Geometry2.prototype.addAttribute = function(id, buffer, size, normalized, type, stride, start, instance) {
      if (size === void 0) {
        size = 0;
      }
      if (normalized === void 0) {
        normalized = false;
      }
      if (instance === void 0) {
        instance = false;
      }
      if (!buffer) {
        throw new Error("You must pass a buffer when creating an attribute");
      }
      if (!(buffer instanceof Buffer)) {
        if (buffer instanceof Array) {
          buffer = new Float32Array(buffer);
        }
        buffer = new Buffer(buffer);
      }
      var ids = id.split("|");
      if (ids.length > 1) {
        for (var i = 0; i < ids.length; i++) {
          this.addAttribute(ids[i], buffer, size, normalized, type);
        }
        return this;
      }
      var bufferIndex = this.buffers.indexOf(buffer);
      if (bufferIndex === -1) {
        this.buffers.push(buffer);
        bufferIndex = this.buffers.length - 1;
      }
      this.attributes[id] = new Attribute(bufferIndex, size, normalized, type, stride, start, instance);
      this.instanced = this.instanced || instance;
      return this;
    };
    Geometry2.prototype.getAttribute = function(id) {
      return this.attributes[id];
    };
    Geometry2.prototype.getBuffer = function(id) {
      return this.buffers[this.getAttribute(id).buffer];
    };
    Geometry2.prototype.addIndex = function(buffer) {
      if (!(buffer instanceof Buffer)) {
        if (buffer instanceof Array) {
          buffer = new Uint16Array(buffer);
        }
        buffer = new Buffer(buffer);
      }
      buffer.type = BUFFER_TYPE2.ELEMENT_ARRAY_BUFFER;
      this.indexBuffer = buffer;
      if (this.buffers.indexOf(buffer) === -1) {
        this.buffers.push(buffer);
      }
      return this;
    };
    Geometry2.prototype.getIndex = function() {
      return this.indexBuffer;
    };
    Geometry2.prototype.interleave = function() {
      if (this.buffers.length === 1 || this.buffers.length === 2 && this.indexBuffer) {
        return this;
      }
      var arrays = [];
      var sizes = [];
      var interleavedBuffer = new Buffer();
      var i;
      for (i in this.attributes) {
        var attribute = this.attributes[i];
        var buffer = this.buffers[attribute.buffer];
        arrays.push(buffer.data);
        sizes.push(attribute.size * byteSizeMap$1[attribute.type] / 4);
        attribute.buffer = 0;
      }
      interleavedBuffer.data = interleaveTypedArrays2(arrays, sizes);
      for (i = 0; i < this.buffers.length; i++) {
        if (this.buffers[i] !== this.indexBuffer) {
          this.buffers[i].destroy();
        }
      }
      this.buffers = [interleavedBuffer];
      if (this.indexBuffer) {
        this.buffers.push(this.indexBuffer);
      }
      return this;
    };
    Geometry2.prototype.getSize = function() {
      for (var i in this.attributes) {
        var attribute = this.attributes[i];
        var buffer = this.buffers[attribute.buffer];
        return buffer.data.length / (attribute.stride / 4 || attribute.size);
      }
      return 0;
    };
    Geometry2.prototype.dispose = function() {
      this.disposeRunner.emit(this, false);
    };
    Geometry2.prototype.destroy = function() {
      this.dispose();
      this.buffers = null;
      this.indexBuffer = null;
      this.attributes = null;
    };
    Geometry2.prototype.clone = function() {
      var geometry = new Geometry2();
      for (var i = 0; i < this.buffers.length; i++) {
        geometry.buffers[i] = new Buffer(this.buffers[i].data.slice(0));
      }
      for (var i in this.attributes) {
        var attrib = this.attributes[i];
        geometry.attributes[i] = new Attribute(attrib.buffer, attrib.size, attrib.normalized, attrib.type, attrib.stride, attrib.start, attrib.instance);
      }
      if (this.indexBuffer) {
        geometry.indexBuffer = geometry.buffers[this.buffers.indexOf(this.indexBuffer)];
        geometry.indexBuffer.type = BUFFER_TYPE2.ELEMENT_ARRAY_BUFFER;
      }
      return geometry;
    };
    Geometry2.merge = function(geometries) {
      var geometryOut = new Geometry2();
      var arrays = [];
      var sizes = [];
      var offsets = [];
      var geometry;
      for (var i = 0; i < geometries.length; i++) {
        geometry = geometries[i];
        for (var j = 0; j < geometry.buffers.length; j++) {
          sizes[j] = sizes[j] || 0;
          sizes[j] += geometry.buffers[j].data.length;
          offsets[j] = 0;
        }
      }
      for (var i = 0; i < geometry.buffers.length; i++) {
        arrays[i] = new map2[getBufferType(geometry.buffers[i].data)](sizes[i]);
        geometryOut.buffers[i] = new Buffer(arrays[i]);
      }
      for (var i = 0; i < geometries.length; i++) {
        geometry = geometries[i];
        for (var j = 0; j < geometry.buffers.length; j++) {
          arrays[j].set(geometry.buffers[j].data, offsets[j]);
          offsets[j] += geometry.buffers[j].data.length;
        }
      }
      geometryOut.attributes = geometry.attributes;
      if (geometry.indexBuffer) {
        geometryOut.indexBuffer = geometryOut.buffers[geometry.buffers.indexOf(geometry.indexBuffer)];
        geometryOut.indexBuffer.type = BUFFER_TYPE2.ELEMENT_ARRAY_BUFFER;
        var offset = 0;
        var stride = 0;
        var offset2 = 0;
        var bufferIndexToCount = 0;
        for (var i = 0; i < geometry.buffers.length; i++) {
          if (geometry.buffers[i] !== geometry.indexBuffer) {
            bufferIndexToCount = i;
            break;
          }
        }
        for (var i in geometry.attributes) {
          var attribute = geometry.attributes[i];
          if ((attribute.buffer | 0) === bufferIndexToCount) {
            stride += attribute.size * byteSizeMap$1[attribute.type] / 4;
          }
        }
        for (var i = 0; i < geometries.length; i++) {
          var indexBufferData = geometries[i].indexBuffer.data;
          for (var j = 0; j < indexBufferData.length; j++) {
            geometryOut.indexBuffer.data[j + offset2] += offset;
          }
          offset += geometries[i].buffers[bufferIndexToCount].data.length / stride;
          offset2 += indexBufferData.length;
        }
      }
      return geometryOut;
    };
    return Geometry2;
  }()
);
var Quad = (
  /** @class */
  function(_super) {
    __extends(Quad2, _super);
    function Quad2() {
      var _this = _super.call(this) || this;
      _this.addAttribute("aVertexPosition", new Float32Array([
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1
      ])).addIndex([0, 1, 3, 2]);
      return _this;
    }
    return Quad2;
  }(Geometry)
);
var QuadUv = (
  /** @class */
  function(_super) {
    __extends(QuadUv2, _super);
    function QuadUv2() {
      var _this = _super.call(this) || this;
      _this.vertices = new Float32Array([
        -1,
        -1,
        1,
        -1,
        1,
        1,
        -1,
        1
      ]);
      _this.uvs = new Float32Array([
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1
      ]);
      _this.vertexBuffer = new Buffer(_this.vertices);
      _this.uvBuffer = new Buffer(_this.uvs);
      _this.addAttribute("aVertexPosition", _this.vertexBuffer).addAttribute("aTextureCoord", _this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3]);
      return _this;
    }
    QuadUv2.prototype.map = function(targetTextureFrame, destinationFrame) {
      var x = 0;
      var y = 0;
      this.uvs[0] = x;
      this.uvs[1] = y;
      this.uvs[2] = x + destinationFrame.width / targetTextureFrame.width;
      this.uvs[3] = y;
      this.uvs[4] = x + destinationFrame.width / targetTextureFrame.width;
      this.uvs[5] = y + destinationFrame.height / targetTextureFrame.height;
      this.uvs[6] = x;
      this.uvs[7] = y + destinationFrame.height / targetTextureFrame.height;
      x = destinationFrame.x;
      y = destinationFrame.y;
      this.vertices[0] = x;
      this.vertices[1] = y;
      this.vertices[2] = x + destinationFrame.width;
      this.vertices[3] = y;
      this.vertices[4] = x + destinationFrame.width;
      this.vertices[5] = y + destinationFrame.height;
      this.vertices[6] = x;
      this.vertices[7] = y + destinationFrame.height;
      this.invalidate();
      return this;
    };
    QuadUv2.prototype.invalidate = function() {
      this.vertexBuffer._updateID++;
      this.uvBuffer._updateID++;
      return this;
    };
    return QuadUv2;
  }(Geometry)
);
var UID$2 = 0;
var UniformGroup = (
  /** @class */
  function() {
    function UniformGroup2(uniforms, isStatic, isUbo) {
      this.group = true;
      this.syncUniforms = {};
      this.dirtyId = 0;
      this.id = UID$2++;
      this.static = !!isStatic;
      this.ubo = !!isUbo;
      if (uniforms instanceof Buffer) {
        this.buffer = uniforms;
        this.buffer.type = BUFFER_TYPE2.UNIFORM_BUFFER;
        this.autoManage = false;
        this.ubo = true;
      } else {
        this.uniforms = uniforms;
        if (this.ubo) {
          this.buffer = new Buffer(new Float32Array(1));
          this.buffer.type = BUFFER_TYPE2.UNIFORM_BUFFER;
          this.autoManage = true;
        }
      }
    }
    UniformGroup2.prototype.update = function() {
      this.dirtyId++;
      if (!this.autoManage && this.buffer) {
        this.buffer.update();
      }
    };
    UniformGroup2.prototype.add = function(name, uniforms, _static) {
      if (!this.ubo) {
        this.uniforms[name] = new UniformGroup2(uniforms, _static);
      } else {
        throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them");
      }
    };
    UniformGroup2.from = function(uniforms, _static, _ubo) {
      return new UniformGroup2(uniforms, _static, _ubo);
    };
    UniformGroup2.uboFrom = function(uniforms, _static) {
      return new UniformGroup2(uniforms, _static !== null && _static !== void 0 ? _static : true, true);
    };
    return UniformGroup2;
  }()
);
var FilterState = (
  /** @class */
  function() {
    function FilterState2() {
      this.renderTexture = null;
      this.target = null;
      this.legacy = false;
      this.resolution = 1;
      this.multisample = MSAA_QUALITY2.NONE;
      this.sourceFrame = new Rectangle();
      this.destinationFrame = new Rectangle();
      this.bindingSourceFrame = new Rectangle();
      this.bindingDestinationFrame = new Rectangle();
      this.filters = [];
      this.transform = null;
    }
    FilterState2.prototype.clear = function() {
      this.target = null;
      this.filters = null;
      this.renderTexture = null;
    };
    return FilterState2;
  }()
);
var tempPoints2 = [new Point(), new Point(), new Point(), new Point()];
var tempMatrix$2 = new Matrix();
var FilterSystem = (
  /** @class */
  function() {
    function FilterSystem2(renderer) {
      this.renderer = renderer;
      this.defaultFilterStack = [{}];
      this.texturePool = new RenderTexturePool();
      this.texturePool.setScreenSize(renderer.view);
      this.statePool = [];
      this.quad = new Quad();
      this.quadUv = new QuadUv();
      this.tempRect = new Rectangle();
      this.activeState = {};
      this.globalUniforms = new UniformGroup({
        outputFrame: new Rectangle(),
        inputSize: new Float32Array(4),
        inputPixel: new Float32Array(4),
        inputClamp: new Float32Array(4),
        resolution: 1,
        // legacy variables
        filterArea: new Float32Array(4),
        filterClamp: new Float32Array(4)
      }, true);
      this.forceClear = false;
      this.useMaxPadding = false;
    }
    FilterSystem2.prototype.push = function(target, filters) {
      var _a, _b;
      var renderer = this.renderer;
      var filterStack = this.defaultFilterStack;
      var state = this.statePool.pop() || new FilterState();
      var renderTextureSystem = this.renderer.renderTexture;
      var resolution = filters[0].resolution;
      var multisample = filters[0].multisample;
      var padding = filters[0].padding;
      var autoFit = filters[0].autoFit;
      var legacy = (_a = filters[0].legacy) !== null && _a !== void 0 ? _a : true;
      for (var i = 1; i < filters.length; i++) {
        var filter = filters[i];
        resolution = Math.min(resolution, filter.resolution);
        multisample = Math.min(multisample, filter.multisample);
        padding = this.useMaxPadding ? Math.max(padding, filter.padding) : padding + filter.padding;
        autoFit = autoFit && filter.autoFit;
        legacy = legacy || ((_b = filter.legacy) !== null && _b !== void 0 ? _b : true);
      }
      if (filterStack.length === 1) {
        this.defaultFilterStack[0].renderTexture = renderTextureSystem.current;
      }
      filterStack.push(state);
      state.resolution = resolution;
      state.multisample = multisample;
      state.legacy = legacy;
      state.target = target;
      state.sourceFrame.copyFrom(target.filterArea || target.getBounds(true));
      state.sourceFrame.pad(padding);
      var sourceFrameProjected = this.tempRect.copyFrom(renderTextureSystem.sourceFrame);
      if (renderer.projection.transform) {
        this.transformAABB(tempMatrix$2.copyFrom(renderer.projection.transform).invert(), sourceFrameProjected);
      }
      if (autoFit) {
        state.sourceFrame.fit(sourceFrameProjected);
        if (state.sourceFrame.width <= 0 || state.sourceFrame.height <= 0) {
          state.sourceFrame.width = 0;
          state.sourceFrame.height = 0;
        }
      } else if (!state.sourceFrame.intersects(sourceFrameProjected)) {
        state.sourceFrame.width = 0;
        state.sourceFrame.height = 0;
      }
      this.roundFrame(state.sourceFrame, renderTextureSystem.current ? renderTextureSystem.current.resolution : renderer.resolution, renderTextureSystem.sourceFrame, renderTextureSystem.destinationFrame, renderer.projection.transform);
      state.renderTexture = this.getOptimalFilterTexture(state.sourceFrame.width, state.sourceFrame.height, resolution, multisample);
      state.filters = filters;
      state.destinationFrame.width = state.renderTexture.width;
      state.destinationFrame.height = state.renderTexture.height;
      var destinationFrame = this.tempRect;
      destinationFrame.x = 0;
      destinationFrame.y = 0;
      destinationFrame.width = state.sourceFrame.width;
      destinationFrame.height = state.sourceFrame.height;
      state.renderTexture.filterFrame = state.sourceFrame;
      state.bindingSourceFrame.copyFrom(renderTextureSystem.sourceFrame);
      state.bindingDestinationFrame.copyFrom(renderTextureSystem.destinationFrame);
      state.transform = renderer.projection.transform;
      renderer.projection.transform = null;
      renderTextureSystem.bind(state.renderTexture, state.sourceFrame, destinationFrame);
      renderer.framebuffer.clear(0, 0, 0, 0);
    };
    FilterSystem2.prototype.pop = function() {
      var filterStack = this.defaultFilterStack;
      var state = filterStack.pop();
      var filters = state.filters;
      this.activeState = state;
      var globalUniforms = this.globalUniforms.uniforms;
      globalUniforms.outputFrame = state.sourceFrame;
      globalUniforms.resolution = state.resolution;
      var inputSize = globalUniforms.inputSize;
      var inputPixel = globalUniforms.inputPixel;
      var inputClamp = globalUniforms.inputClamp;
      inputSize[0] = state.destinationFrame.width;
      inputSize[1] = state.destinationFrame.height;
      inputSize[2] = 1 / inputSize[0];
      inputSize[3] = 1 / inputSize[1];
      inputPixel[0] = Math.round(inputSize[0] * state.resolution);
      inputPixel[1] = Math.round(inputSize[1] * state.resolution);
      inputPixel[2] = 1 / inputPixel[0];
      inputPixel[3] = 1 / inputPixel[1];
      inputClamp[0] = 0.5 * inputPixel[2];
      inputClamp[1] = 0.5 * inputPixel[3];
      inputClamp[2] = state.sourceFrame.width * inputSize[2] - 0.5 * inputPixel[2];
      inputClamp[3] = state.sourceFrame.height * inputSize[3] - 0.5 * inputPixel[3];
      if (state.legacy) {
        var filterArea = globalUniforms.filterArea;
        filterArea[0] = state.destinationFrame.width;
        filterArea[1] = state.destinationFrame.height;
        filterArea[2] = state.sourceFrame.x;
        filterArea[3] = state.sourceFrame.y;
        globalUniforms.filterClamp = globalUniforms.inputClamp;
      }
      this.globalUniforms.update();
      var lastState = filterStack[filterStack.length - 1];
      this.renderer.framebuffer.blit();
      if (filters.length === 1) {
        filters[0].apply(this, state.renderTexture, lastState.renderTexture, CLEAR_MODES2.BLEND, state);
        this.returnFilterTexture(state.renderTexture);
      } else {
        var flip = state.renderTexture;
        var flop = this.getOptimalFilterTexture(flip.width, flip.height, state.resolution);
        flop.filterFrame = flip.filterFrame;
        var i = 0;
        for (i = 0; i < filters.length - 1; ++i) {
          if (i === 1 && state.multisample > 1) {
            flop = this.getOptimalFilterTexture(flip.width, flip.height, state.resolution);
            flop.filterFrame = flip.filterFrame;
          }
          filters[i].apply(this, flip, flop, CLEAR_MODES2.CLEAR, state);
          var t = flip;
          flip = flop;
          flop = t;
        }
        filters[i].apply(this, flip, lastState.renderTexture, CLEAR_MODES2.BLEND, state);
        if (i > 1 && state.multisample > 1) {
          this.returnFilterTexture(state.renderTexture);
        }
        this.returnFilterTexture(flip);
        this.returnFilterTexture(flop);
      }
      state.clear();
      this.statePool.push(state);
    };
    FilterSystem2.prototype.bindAndClear = function(filterTexture, clearMode) {
      if (clearMode === void 0) {
        clearMode = CLEAR_MODES2.CLEAR;
      }
      var _a = this.renderer, renderTextureSystem = _a.renderTexture, stateSystem = _a.state;
      if (filterTexture === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture) {
        this.renderer.projection.transform = this.activeState.transform;
      } else {
        this.renderer.projection.transform = null;
      }
      if (filterTexture && filterTexture.filterFrame) {
        var destinationFrame = this.tempRect;
        destinationFrame.x = 0;
        destinationFrame.y = 0;
        destinationFrame.width = filterTexture.filterFrame.width;
        destinationFrame.height = filterTexture.filterFrame.height;
        renderTextureSystem.bind(filterTexture, filterTexture.filterFrame, destinationFrame);
      } else if (filterTexture !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture) {
        renderTextureSystem.bind(filterTexture);
      } else {
        this.renderer.renderTexture.bind(filterTexture, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
      }
      var autoClear = stateSystem.stateId & 1 || this.forceClear;
      if (clearMode === CLEAR_MODES2.CLEAR || clearMode === CLEAR_MODES2.BLIT && autoClear) {
        this.renderer.framebuffer.clear(0, 0, 0, 0);
      }
    };
    FilterSystem2.prototype.applyFilter = function(filter, input, output, clearMode) {
      var renderer = this.renderer;
      renderer.state.set(filter.state);
      this.bindAndClear(output, clearMode);
      filter.uniforms.uSampler = input;
      filter.uniforms.filterGlobals = this.globalUniforms;
      renderer.shader.bind(filter);
      filter.legacy = !!filter.program.attributeData.aTextureCoord;
      if (filter.legacy) {
        this.quadUv.map(input._frame, input.filterFrame);
        renderer.geometry.bind(this.quadUv);
        renderer.geometry.draw(DRAW_MODES2.TRIANGLES);
      } else {
        renderer.geometry.bind(this.quad);
        renderer.geometry.draw(DRAW_MODES2.TRIANGLE_STRIP);
      }
    };
    FilterSystem2.prototype.calculateSpriteMatrix = function(outputMatrix, sprite) {
      var _a = this.activeState, sourceFrame = _a.sourceFrame, destinationFrame = _a.destinationFrame;
      var orig = sprite._texture.orig;
      var mappedMatrix = outputMatrix.set(destinationFrame.width, 0, 0, destinationFrame.height, sourceFrame.x, sourceFrame.y);
      var worldTransform = sprite.worldTransform.copyTo(Matrix.TEMP_MATRIX);
      worldTransform.invert();
      mappedMatrix.prepend(worldTransform);
      mappedMatrix.scale(1 / orig.width, 1 / orig.height);
      mappedMatrix.translate(sprite.anchor.x, sprite.anchor.y);
      return mappedMatrix;
    };
    FilterSystem2.prototype.destroy = function() {
      this.renderer = null;
      this.texturePool.clear(false);
    };
    FilterSystem2.prototype.getOptimalFilterTexture = function(minWidth, minHeight, resolution, multisample) {
      if (resolution === void 0) {
        resolution = 1;
      }
      if (multisample === void 0) {
        multisample = MSAA_QUALITY2.NONE;
      }
      return this.texturePool.getOptimalTexture(minWidth, minHeight, resolution, multisample);
    };
    FilterSystem2.prototype.getFilterTexture = function(input, resolution, multisample) {
      if (typeof input === "number") {
        var swap = input;
        input = resolution;
        resolution = swap;
      }
      input = input || this.activeState.renderTexture;
      var filterTexture = this.texturePool.getOptimalTexture(input.width, input.height, resolution || input.resolution, multisample || MSAA_QUALITY2.NONE);
      filterTexture.filterFrame = input.filterFrame;
      return filterTexture;
    };
    FilterSystem2.prototype.returnFilterTexture = function(renderTexture) {
      this.texturePool.returnTexture(renderTexture);
    };
    FilterSystem2.prototype.emptyPool = function() {
      this.texturePool.clear(true);
    };
    FilterSystem2.prototype.resize = function() {
      this.texturePool.setScreenSize(this.renderer.view);
    };
    FilterSystem2.prototype.transformAABB = function(matrix, rect) {
      var lt = tempPoints2[0];
      var lb = tempPoints2[1];
      var rt = tempPoints2[2];
      var rb = tempPoints2[3];
      lt.set(rect.left, rect.top);
      lb.set(rect.left, rect.bottom);
      rt.set(rect.right, rect.top);
      rb.set(rect.right, rect.bottom);
      matrix.apply(lt, lt);
      matrix.apply(lb, lb);
      matrix.apply(rt, rt);
      matrix.apply(rb, rb);
      var x0 = Math.min(lt.x, lb.x, rt.x, rb.x);
      var y0 = Math.min(lt.y, lb.y, rt.y, rb.y);
      var x1 = Math.max(lt.x, lb.x, rt.x, rb.x);
      var y1 = Math.max(lt.y, lb.y, rt.y, rb.y);
      rect.x = x0;
      rect.y = y0;
      rect.width = x1 - x0;
      rect.height = y1 - y0;
    };
    FilterSystem2.prototype.roundFrame = function(frame, resolution, bindingSourceFrame, bindingDestinationFrame, transform) {
      if (frame.width <= 0 || frame.height <= 0 || bindingSourceFrame.width <= 0 || bindingSourceFrame.height <= 0) {
        return;
      }
      if (transform) {
        var a = transform.a, b = transform.b, c = transform.c, d = transform.d;
        if ((Math.abs(b) > 1e-4 || Math.abs(c) > 1e-4) && (Math.abs(a) > 1e-4 || Math.abs(d) > 1e-4)) {
          return;
        }
      }
      transform = transform ? tempMatrix$2.copyFrom(transform) : tempMatrix$2.identity();
      transform.translate(-bindingSourceFrame.x, -bindingSourceFrame.y).scale(bindingDestinationFrame.width / bindingSourceFrame.width, bindingDestinationFrame.height / bindingSourceFrame.height).translate(bindingDestinationFrame.x, bindingDestinationFrame.y);
      this.transformAABB(transform, frame);
      frame.ceil(resolution);
      this.transformAABB(transform.invert(), frame);
    };
    return FilterSystem2;
  }()
);
var ObjectRenderer = (
  /** @class */
  function() {
    function ObjectRenderer2(renderer) {
      this.renderer = renderer;
    }
    ObjectRenderer2.prototype.flush = function() {
    };
    ObjectRenderer2.prototype.destroy = function() {
      this.renderer = null;
    };
    ObjectRenderer2.prototype.start = function() {
    };
    ObjectRenderer2.prototype.stop = function() {
      this.flush();
    };
    ObjectRenderer2.prototype.render = function(_object) {
    };
    return ObjectRenderer2;
  }()
);
var BatchSystem = (
  /** @class */
  function() {
    function BatchSystem2(renderer) {
      this.renderer = renderer;
      this.emptyRenderer = new ObjectRenderer(renderer);
      this.currentRenderer = this.emptyRenderer;
    }
    BatchSystem2.prototype.setObjectRenderer = function(objectRenderer) {
      if (this.currentRenderer === objectRenderer) {
        return;
      }
      this.currentRenderer.stop();
      this.currentRenderer = objectRenderer;
      this.currentRenderer.start();
    };
    BatchSystem2.prototype.flush = function() {
      this.setObjectRenderer(this.emptyRenderer);
    };
    BatchSystem2.prototype.reset = function() {
      this.setObjectRenderer(this.emptyRenderer);
    };
    BatchSystem2.prototype.copyBoundTextures = function(arr, maxTextures) {
      var boundTextures = this.renderer.texture.boundTextures;
      for (var i = maxTextures - 1; i >= 0; --i) {
        arr[i] = boundTextures[i] || null;
        if (arr[i]) {
          arr[i]._batchLocation = i;
        }
      }
    };
    BatchSystem2.prototype.boundArray = function(texArray, boundTextures, batchId, maxTextures) {
      var elements = texArray.elements, ids = texArray.ids, count = texArray.count;
      var j = 0;
      for (var i = 0; i < count; i++) {
        var tex = elements[i];
        var loc = tex._batchLocation;
        if (loc >= 0 && loc < maxTextures && boundTextures[loc] === tex) {
          ids[i] = loc;
          continue;
        }
        while (j < maxTextures) {
          var bound = boundTextures[j];
          if (bound && bound._batchEnabled === batchId && bound._batchLocation === j) {
            j++;
            continue;
          }
          ids[i] = j;
          tex._batchLocation = j;
          boundTextures[j] = tex;
          break;
        }
      }
    };
    BatchSystem2.prototype.destroy = function() {
      this.renderer = null;
    };
    return BatchSystem2;
  }()
);
var CONTEXT_UID_COUNTER = 0;
var ContextSystem = (
  /** @class */
  function() {
    function ContextSystem2(renderer) {
      this.renderer = renderer;
      this.webGLVersion = 1;
      this.extensions = {};
      this.supports = {
        uint32Indices: false
      };
      this.handleContextLost = this.handleContextLost.bind(this);
      this.handleContextRestored = this.handleContextRestored.bind(this);
      renderer.view.addEventListener("webglcontextlost", this.handleContextLost, false);
      renderer.view.addEventListener("webglcontextrestored", this.handleContextRestored, false);
    }
    Object.defineProperty(ContextSystem2.prototype, "isLost", {
      /**
       * `true` if the context is lost
       * @readonly
       */
      get: function() {
        return !this.gl || this.gl.isContextLost();
      },
      enumerable: false,
      configurable: true
    });
    ContextSystem2.prototype.contextChange = function(gl) {
      this.gl = gl;
      this.renderer.gl = gl;
      this.renderer.CONTEXT_UID = CONTEXT_UID_COUNTER++;
      if (gl.isContextLost() && gl.getExtension("WEBGL_lose_context")) {
        gl.getExtension("WEBGL_lose_context").restoreContext();
      }
    };
    ContextSystem2.prototype.initFromContext = function(gl) {
      this.gl = gl;
      this.validateContext(gl);
      this.renderer.gl = gl;
      this.renderer.CONTEXT_UID = CONTEXT_UID_COUNTER++;
      this.renderer.runners.contextChange.emit(gl);
    };
    ContextSystem2.prototype.initFromOptions = function(options) {
      var gl = this.createContext(this.renderer.view, options);
      this.initFromContext(gl);
    };
    ContextSystem2.prototype.createContext = function(canvas, options) {
      var gl;
      if (settings.PREFER_ENV >= ENV2.WEBGL2) {
        gl = canvas.getContext("webgl2", options);
      }
      if (gl) {
        this.webGLVersion = 2;
      } else {
        this.webGLVersion = 1;
        gl = canvas.getContext("webgl", options) || canvas.getContext("experimental-webgl", options);
        if (!gl) {
          throw new Error("This browser does not support WebGL. Try using the canvas renderer");
        }
      }
      this.gl = gl;
      this.getExtensions();
      return this.gl;
    };
    ContextSystem2.prototype.getExtensions = function() {
      var gl = this.gl;
      var common = {
        anisotropicFiltering: gl.getExtension("EXT_texture_filter_anisotropic"),
        floatTextureLinear: gl.getExtension("OES_texture_float_linear"),
        s3tc: gl.getExtension("WEBGL_compressed_texture_s3tc"),
        s3tc_sRGB: gl.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
        etc: gl.getExtension("WEBGL_compressed_texture_etc"),
        etc1: gl.getExtension("WEBGL_compressed_texture_etc1"),
        pvrtc: gl.getExtension("WEBGL_compressed_texture_pvrtc") || gl.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
        atc: gl.getExtension("WEBGL_compressed_texture_atc"),
        astc: gl.getExtension("WEBGL_compressed_texture_astc")
      };
      if (this.webGLVersion === 1) {
        Object.assign(this.extensions, common, {
          drawBuffers: gl.getExtension("WEBGL_draw_buffers"),
          depthTexture: gl.getExtension("WEBGL_depth_texture"),
          loseContext: gl.getExtension("WEBGL_lose_context"),
          vertexArrayObject: gl.getExtension("OES_vertex_array_object") || gl.getExtension("MOZ_OES_vertex_array_object") || gl.getExtension("WEBKIT_OES_vertex_array_object"),
          uint32ElementIndex: gl.getExtension("OES_element_index_uint"),
          // Floats and half-floats
          floatTexture: gl.getExtension("OES_texture_float"),
          floatTextureLinear: gl.getExtension("OES_texture_float_linear"),
          textureHalfFloat: gl.getExtension("OES_texture_half_float"),
          textureHalfFloatLinear: gl.getExtension("OES_texture_half_float_linear")
        });
      } else if (this.webGLVersion === 2) {
        Object.assign(this.extensions, common, {
          // Floats and half-floats
          colorBufferFloat: gl.getExtension("EXT_color_buffer_float")
        });
      }
    };
    ContextSystem2.prototype.handleContextLost = function(event) {
      event.preventDefault();
    };
    ContextSystem2.prototype.handleContextRestored = function() {
      this.renderer.runners.contextChange.emit(this.gl);
    };
    ContextSystem2.prototype.destroy = function() {
      var view = this.renderer.view;
      this.renderer = null;
      view.removeEventListener("webglcontextlost", this.handleContextLost);
      view.removeEventListener("webglcontextrestored", this.handleContextRestored);
      this.gl.useProgram(null);
      if (this.extensions.loseContext) {
        this.extensions.loseContext.loseContext();
      }
    };
    ContextSystem2.prototype.postrender = function() {
      if (this.renderer.renderingToScreen) {
        this.gl.flush();
      }
    };
    ContextSystem2.prototype.validateContext = function(gl) {
      var attributes = gl.getContextAttributes();
      var isWebGl2 = "WebGL2RenderingContext" in globalThis && gl instanceof globalThis.WebGL2RenderingContext;
      if (isWebGl2) {
        this.webGLVersion = 2;
      }
      if (attributes && !attributes.stencil) {
        console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
      }
      var hasuint32 = isWebGl2 || !!gl.getExtension("OES_element_index_uint");
      this.supports.uint32Indices = hasuint32;
      if (!hasuint32) {
        console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly");
      }
    };
    return ContextSystem2;
  }()
);
var GLFramebuffer = (
  /** @class */
  /* @__PURE__ */ function() {
    function GLFramebuffer2(framebuffer) {
      this.framebuffer = framebuffer;
      this.stencil = null;
      this.dirtyId = -1;
      this.dirtyFormat = -1;
      this.dirtySize = -1;
      this.multisample = MSAA_QUALITY2.NONE;
      this.msaaBuffer = null;
      this.blitFramebuffer = null;
      this.mipLevel = 0;
    }
    return GLFramebuffer2;
  }()
);
var tempRectangle = new Rectangle();
var FramebufferSystem = (
  /** @class */
  function() {
    function FramebufferSystem2(renderer) {
      this.renderer = renderer;
      this.managedFramebuffers = [];
      this.unknownFramebuffer = new Framebuffer(10, 10);
      this.msaaSamples = null;
    }
    FramebufferSystem2.prototype.contextChange = function() {
      var gl = this.gl = this.renderer.gl;
      this.CONTEXT_UID = this.renderer.CONTEXT_UID;
      this.current = this.unknownFramebuffer;
      this.viewport = new Rectangle();
      this.hasMRT = true;
      this.writeDepthTexture = true;
      this.disposeAll(true);
      if (this.renderer.context.webGLVersion === 1) {
        var nativeDrawBuffersExtension_1 = this.renderer.context.extensions.drawBuffers;
        var nativeDepthTextureExtension = this.renderer.context.extensions.depthTexture;
        if (settings.PREFER_ENV === ENV2.WEBGL_LEGACY) {
          nativeDrawBuffersExtension_1 = null;
          nativeDepthTextureExtension = null;
        }
        if (nativeDrawBuffersExtension_1) {
          gl.drawBuffers = function(activeTextures) {
            return nativeDrawBuffersExtension_1.drawBuffersWEBGL(activeTextures);
          };
        } else {
          this.hasMRT = false;
          gl.drawBuffers = function() {
          };
        }
        if (!nativeDepthTextureExtension) {
          this.writeDepthTexture = false;
        }
      } else {
        this.msaaSamples = gl.getInternalformatParameter(gl.RENDERBUFFER, gl.RGBA8, gl.SAMPLES);
      }
    };
    FramebufferSystem2.prototype.bind = function(framebuffer, frame, mipLevel) {
      if (mipLevel === void 0) {
        mipLevel = 0;
      }
      var gl = this.gl;
      if (framebuffer) {
        var fbo = framebuffer.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(framebuffer);
        if (this.current !== framebuffer) {
          this.current = framebuffer;
          gl.bindFramebuffer(gl.FRAMEBUFFER, fbo.framebuffer);
        }
        if (fbo.mipLevel !== mipLevel) {
          framebuffer.dirtyId++;
          framebuffer.dirtyFormat++;
          fbo.mipLevel = mipLevel;
        }
        if (fbo.dirtyId !== framebuffer.dirtyId) {
          fbo.dirtyId = framebuffer.dirtyId;
          if (fbo.dirtyFormat !== framebuffer.dirtyFormat) {
            fbo.dirtyFormat = framebuffer.dirtyFormat;
            fbo.dirtySize = framebuffer.dirtySize;
            this.updateFramebuffer(framebuffer, mipLevel);
          } else if (fbo.dirtySize !== framebuffer.dirtySize) {
            fbo.dirtySize = framebuffer.dirtySize;
            this.resizeFramebuffer(framebuffer);
          }
        }
        for (var i = 0; i < framebuffer.colorTextures.length; i++) {
          var tex = framebuffer.colorTextures[i];
          this.renderer.texture.unbind(tex.parentTextureArray || tex);
        }
        if (framebuffer.depthTexture) {
          this.renderer.texture.unbind(framebuffer.depthTexture);
        }
        if (frame) {
          var mipWidth = frame.width >> mipLevel;
          var mipHeight = frame.height >> mipLevel;
          var scale = mipWidth / frame.width;
          this.setViewport(frame.x * scale, frame.y * scale, mipWidth, mipHeight);
        } else {
          var mipWidth = framebuffer.width >> mipLevel;
          var mipHeight = framebuffer.height >> mipLevel;
          this.setViewport(0, 0, mipWidth, mipHeight);
        }
      } else {
        if (this.current) {
          this.current = null;
          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        }
        if (frame) {
          this.setViewport(frame.x, frame.y, frame.width, frame.height);
        } else {
          this.setViewport(0, 0, this.renderer.width, this.renderer.height);
        }
      }
    };
    FramebufferSystem2.prototype.setViewport = function(x, y, width, height) {
      var v = this.viewport;
      x = Math.round(x);
      y = Math.round(y);
      width = Math.round(width);
      height = Math.round(height);
      if (v.width !== width || v.height !== height || v.x !== x || v.y !== y) {
        v.x = x;
        v.y = y;
        v.width = width;
        v.height = height;
        this.gl.viewport(x, y, width, height);
      }
    };
    Object.defineProperty(FramebufferSystem2.prototype, "size", {
      /**
       * Get the size of the current width and height. Returns object with `width` and `height` values.
       * @readonly
       */
      get: function() {
        if (this.current) {
          return { x: 0, y: 0, width: this.current.width, height: this.current.height };
        }
        return { x: 0, y: 0, width: this.renderer.width, height: this.renderer.height };
      },
      enumerable: false,
      configurable: true
    });
    FramebufferSystem2.prototype.clear = function(r, g, b, a, mask) {
      if (mask === void 0) {
        mask = BUFFER_BITS2.COLOR | BUFFER_BITS2.DEPTH;
      }
      var gl = this.gl;
      gl.clearColor(r, g, b, a);
      gl.clear(mask);
    };
    FramebufferSystem2.prototype.initFramebuffer = function(framebuffer) {
      var gl = this.gl;
      var fbo = new GLFramebuffer(gl.createFramebuffer());
      fbo.multisample = this.detectSamples(framebuffer.multisample);
      framebuffer.glFramebuffers[this.CONTEXT_UID] = fbo;
      this.managedFramebuffers.push(framebuffer);
      framebuffer.disposeRunner.add(this);
      return fbo;
    };
    FramebufferSystem2.prototype.resizeFramebuffer = function(framebuffer) {
      var gl = this.gl;
      var fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
      if (fbo.msaaBuffer) {
        gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.msaaBuffer);
        gl.renderbufferStorageMultisample(gl.RENDERBUFFER, fbo.multisample, gl.RGBA8, framebuffer.width, framebuffer.height);
      }
      if (fbo.stencil) {
        gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.stencil);
        if (fbo.msaaBuffer) {
          gl.renderbufferStorageMultisample(gl.RENDERBUFFER, fbo.multisample, gl.DEPTH24_STENCIL8, framebuffer.width, framebuffer.height);
        } else {
          gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, framebuffer.width, framebuffer.height);
        }
      }
      var colorTextures = framebuffer.colorTextures;
      var count = colorTextures.length;
      if (!gl.drawBuffers) {
        count = Math.min(count, 1);
      }
      for (var i = 0; i < count; i++) {
        var texture = colorTextures[i];
        var parentTexture = texture.parentTextureArray || texture;
        this.renderer.texture.bind(parentTexture, 0);
      }
      if (framebuffer.depthTexture && this.writeDepthTexture) {
        this.renderer.texture.bind(framebuffer.depthTexture, 0);
      }
    };
    FramebufferSystem2.prototype.updateFramebuffer = function(framebuffer, mipLevel) {
      var gl = this.gl;
      var fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
      var colorTextures = framebuffer.colorTextures;
      var count = colorTextures.length;
      if (!gl.drawBuffers) {
        count = Math.min(count, 1);
      }
      if (fbo.multisample > 1 && this.canMultisampleFramebuffer(framebuffer)) {
        fbo.msaaBuffer = fbo.msaaBuffer || gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.msaaBuffer);
        gl.renderbufferStorageMultisample(gl.RENDERBUFFER, fbo.multisample, gl.RGBA8, framebuffer.width, framebuffer.height);
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.RENDERBUFFER, fbo.msaaBuffer);
      } else if (fbo.msaaBuffer) {
        gl.deleteRenderbuffer(fbo.msaaBuffer);
        fbo.msaaBuffer = null;
        if (fbo.blitFramebuffer) {
          fbo.blitFramebuffer.dispose();
          fbo.blitFramebuffer = null;
        }
      }
      var activeTextures = [];
      for (var i = 0; i < count; i++) {
        var texture = colorTextures[i];
        var parentTexture = texture.parentTextureArray || texture;
        this.renderer.texture.bind(parentTexture, 0);
        if (i === 0 && fbo.msaaBuffer) {
          continue;
        }
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, texture.target, parentTexture._glTextures[this.CONTEXT_UID].texture, mipLevel);
        activeTextures.push(gl.COLOR_ATTACHMENT0 + i);
      }
      if (activeTextures.length > 1) {
        gl.drawBuffers(activeTextures);
      }
      if (framebuffer.depthTexture) {
        var writeDepthTexture = this.writeDepthTexture;
        if (writeDepthTexture) {
          var depthTexture = framebuffer.depthTexture;
          this.renderer.texture.bind(depthTexture, 0);
          gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, depthTexture._glTextures[this.CONTEXT_UID].texture, mipLevel);
        }
      }
      if ((framebuffer.stencil || framebuffer.depth) && !(framebuffer.depthTexture && this.writeDepthTexture)) {
        fbo.stencil = fbo.stencil || gl.createRenderbuffer();
        gl.bindRenderbuffer(gl.RENDERBUFFER, fbo.stencil);
        if (fbo.msaaBuffer) {
          gl.renderbufferStorageMultisample(gl.RENDERBUFFER, fbo.multisample, gl.DEPTH24_STENCIL8, framebuffer.width, framebuffer.height);
        } else {
          gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, framebuffer.width, framebuffer.height);
        }
        gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, fbo.stencil);
      } else if (fbo.stencil) {
        gl.deleteRenderbuffer(fbo.stencil);
        fbo.stencil = null;
      }
    };
    FramebufferSystem2.prototype.canMultisampleFramebuffer = function(framebuffer) {
      return this.renderer.context.webGLVersion !== 1 && framebuffer.colorTextures.length <= 1 && !framebuffer.depthTexture;
    };
    FramebufferSystem2.prototype.detectSamples = function(samples) {
      var msaaSamples = this.msaaSamples;
      var res = MSAA_QUALITY2.NONE;
      if (samples <= 1 || msaaSamples === null) {
        return res;
      }
      for (var i = 0; i < msaaSamples.length; i++) {
        if (msaaSamples[i] <= samples) {
          res = msaaSamples[i];
          break;
        }
      }
      if (res === 1) {
        res = MSAA_QUALITY2.NONE;
      }
      return res;
    };
    FramebufferSystem2.prototype.blit = function(framebuffer, sourcePixels, destPixels) {
      var _a = this, current = _a.current, renderer = _a.renderer, gl = _a.gl, CONTEXT_UID = _a.CONTEXT_UID;
      if (renderer.context.webGLVersion !== 2) {
        return;
      }
      if (!current) {
        return;
      }
      var fbo = current.glFramebuffers[CONTEXT_UID];
      if (!fbo) {
        return;
      }
      if (!framebuffer) {
        if (!fbo.msaaBuffer) {
          return;
        }
        var colorTexture = current.colorTextures[0];
        if (!colorTexture) {
          return;
        }
        if (!fbo.blitFramebuffer) {
          fbo.blitFramebuffer = new Framebuffer(current.width, current.height);
          fbo.blitFramebuffer.addColorTexture(0, colorTexture);
        }
        framebuffer = fbo.blitFramebuffer;
        if (framebuffer.colorTextures[0] !== colorTexture) {
          framebuffer.colorTextures[0] = colorTexture;
          framebuffer.dirtyId++;
          framebuffer.dirtyFormat++;
        }
        if (framebuffer.width !== current.width || framebuffer.height !== current.height) {
          framebuffer.width = current.width;
          framebuffer.height = current.height;
          framebuffer.dirtyId++;
          framebuffer.dirtySize++;
        }
      }
      if (!sourcePixels) {
        sourcePixels = tempRectangle;
        sourcePixels.width = current.width;
        sourcePixels.height = current.height;
      }
      if (!destPixels) {
        destPixels = sourcePixels;
      }
      var sameSize = sourcePixels.width === destPixels.width && sourcePixels.height === destPixels.height;
      this.bind(framebuffer);
      gl.bindFramebuffer(gl.READ_FRAMEBUFFER, fbo.framebuffer);
      gl.blitFramebuffer(sourcePixels.left, sourcePixels.top, sourcePixels.right, sourcePixels.bottom, destPixels.left, destPixels.top, destPixels.right, destPixels.bottom, gl.COLOR_BUFFER_BIT, sameSize ? gl.NEAREST : gl.LINEAR);
    };
    FramebufferSystem2.prototype.disposeFramebuffer = function(framebuffer, contextLost) {
      var fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
      var gl = this.gl;
      if (!fbo) {
        return;
      }
      delete framebuffer.glFramebuffers[this.CONTEXT_UID];
      var index = this.managedFramebuffers.indexOf(framebuffer);
      if (index >= 0) {
        this.managedFramebuffers.splice(index, 1);
      }
      framebuffer.disposeRunner.remove(this);
      if (!contextLost) {
        gl.deleteFramebuffer(fbo.framebuffer);
        if (fbo.msaaBuffer) {
          gl.deleteRenderbuffer(fbo.msaaBuffer);
        }
        if (fbo.stencil) {
          gl.deleteRenderbuffer(fbo.stencil);
        }
      }
      if (fbo.blitFramebuffer) {
        fbo.blitFramebuffer.dispose();
      }
    };
    FramebufferSystem2.prototype.disposeAll = function(contextLost) {
      var list = this.managedFramebuffers;
      this.managedFramebuffers = [];
      for (var i = 0; i < list.length; i++) {
        this.disposeFramebuffer(list[i], contextLost);
      }
    };
    FramebufferSystem2.prototype.forceStencil = function() {
      var framebuffer = this.current;
      if (!framebuffer) {
        return;
      }
      var fbo = framebuffer.glFramebuffers[this.CONTEXT_UID];
      if (!fbo || fbo.stencil) {
        return;
      }
      framebuffer.stencil = true;
      var w = framebuffer.width;
      var h = framebuffer.height;
      var gl = this.gl;
      var stencil = gl.createRenderbuffer();
      gl.bindRenderbuffer(gl.RENDERBUFFER, stencil);
      if (fbo.msaaBuffer) {
        gl.renderbufferStorageMultisample(gl.RENDERBUFFER, fbo.multisample, gl.DEPTH24_STENCIL8, w, h);
      } else {
        gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, w, h);
      }
      fbo.stencil = stencil;
      gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, stencil);
    };
    FramebufferSystem2.prototype.reset = function() {
      this.current = this.unknownFramebuffer;
      this.viewport = new Rectangle();
    };
    FramebufferSystem2.prototype.destroy = function() {
      this.renderer = null;
    };
    return FramebufferSystem2;
  }()
);
var byteSizeMap = { 5126: 4, 5123: 2, 5121: 1 };
var GeometrySystem = (
  /** @class */
  function() {
    function GeometrySystem2(renderer) {
      this.renderer = renderer;
      this._activeGeometry = null;
      this._activeVao = null;
      this.hasVao = true;
      this.hasInstance = true;
      this.canUseUInt32ElementIndex = false;
      this.managedGeometries = {};
    }
    GeometrySystem2.prototype.contextChange = function() {
      this.disposeAll(true);
      var gl = this.gl = this.renderer.gl;
      var context2 = this.renderer.context;
      this.CONTEXT_UID = this.renderer.CONTEXT_UID;
      if (context2.webGLVersion !== 2) {
        var nativeVaoExtension_1 = this.renderer.context.extensions.vertexArrayObject;
        if (settings.PREFER_ENV === ENV2.WEBGL_LEGACY) {
          nativeVaoExtension_1 = null;
        }
        if (nativeVaoExtension_1) {
          gl.createVertexArray = function() {
            return nativeVaoExtension_1.createVertexArrayOES();
          };
          gl.bindVertexArray = function(vao) {
            return nativeVaoExtension_1.bindVertexArrayOES(vao);
          };
          gl.deleteVertexArray = function(vao) {
            return nativeVaoExtension_1.deleteVertexArrayOES(vao);
          };
        } else {
          this.hasVao = false;
          gl.createVertexArray = function() {
            return null;
          };
          gl.bindVertexArray = function() {
            return null;
          };
          gl.deleteVertexArray = function() {
            return null;
          };
        }
      }
      if (context2.webGLVersion !== 2) {
        var instanceExt_1 = gl.getExtension("ANGLE_instanced_arrays");
        if (instanceExt_1) {
          gl.vertexAttribDivisor = function(a, b) {
            return instanceExt_1.vertexAttribDivisorANGLE(a, b);
          };
          gl.drawElementsInstanced = function(a, b, c, d, e) {
            return instanceExt_1.drawElementsInstancedANGLE(a, b, c, d, e);
          };
          gl.drawArraysInstanced = function(a, b, c, d) {
            return instanceExt_1.drawArraysInstancedANGLE(a, b, c, d);
          };
        } else {
          this.hasInstance = false;
        }
      }
      this.canUseUInt32ElementIndex = context2.webGLVersion === 2 || !!context2.extensions.uint32ElementIndex;
    };
    GeometrySystem2.prototype.bind = function(geometry, shader) {
      shader = shader || this.renderer.shader.shader;
      var gl = this.gl;
      var vaos = geometry.glVertexArrayObjects[this.CONTEXT_UID];
      var incRefCount = false;
      if (!vaos) {
        this.managedGeometries[geometry.id] = geometry;
        geometry.disposeRunner.add(this);
        geometry.glVertexArrayObjects[this.CONTEXT_UID] = vaos = {};
        incRefCount = true;
      }
      var vao = vaos[shader.program.id] || this.initGeometryVao(geometry, shader, incRefCount);
      this._activeGeometry = geometry;
      if (this._activeVao !== vao) {
        this._activeVao = vao;
        if (this.hasVao) {
          gl.bindVertexArray(vao);
        } else {
          this.activateVao(geometry, shader.program);
        }
      }
      this.updateBuffers();
    };
    GeometrySystem2.prototype.reset = function() {
      this.unbind();
    };
    GeometrySystem2.prototype.updateBuffers = function() {
      var geometry = this._activeGeometry;
      var bufferSystem = this.renderer.buffer;
      for (var i = 0; i < geometry.buffers.length; i++) {
        var buffer = geometry.buffers[i];
        bufferSystem.update(buffer);
      }
    };
    GeometrySystem2.prototype.checkCompatibility = function(geometry, program) {
      var geometryAttributes = geometry.attributes;
      var shaderAttributes = program.attributeData;
      for (var j in shaderAttributes) {
        if (!geometryAttributes[j]) {
          throw new Error('shader and geometry incompatible, geometry missing the "' + j + '" attribute');
        }
      }
    };
    GeometrySystem2.prototype.getSignature = function(geometry, program) {
      var attribs = geometry.attributes;
      var shaderAttributes = program.attributeData;
      var strings = ["g", geometry.id];
      for (var i in attribs) {
        if (shaderAttributes[i]) {
          strings.push(i, shaderAttributes[i].location);
        }
      }
      return strings.join("-");
    };
    GeometrySystem2.prototype.initGeometryVao = function(geometry, shader, incRefCount) {
      if (incRefCount === void 0) {
        incRefCount = true;
      }
      var gl = this.gl;
      var CONTEXT_UID = this.CONTEXT_UID;
      var bufferSystem = this.renderer.buffer;
      var program = shader.program;
      if (!program.glPrograms[CONTEXT_UID]) {
        this.renderer.shader.generateProgram(shader);
      }
      this.checkCompatibility(geometry, program);
      var signature = this.getSignature(geometry, program);
      var vaoObjectHash = geometry.glVertexArrayObjects[this.CONTEXT_UID];
      var vao = vaoObjectHash[signature];
      if (vao) {
        vaoObjectHash[program.id] = vao;
        return vao;
      }
      var buffers = geometry.buffers;
      var attributes = geometry.attributes;
      var tempStride = {};
      var tempStart = {};
      for (var j in buffers) {
        tempStride[j] = 0;
        tempStart[j] = 0;
      }
      for (var j in attributes) {
        if (!attributes[j].size && program.attributeData[j]) {
          attributes[j].size = program.attributeData[j].size;
        } else if (!attributes[j].size) {
          console.warn("PIXI Geometry attribute '" + j + "' size cannot be determined (likely the bound shader does not have the attribute)");
        }
        tempStride[attributes[j].buffer] += attributes[j].size * byteSizeMap[attributes[j].type];
      }
      for (var j in attributes) {
        var attribute = attributes[j];
        var attribSize = attribute.size;
        if (attribute.stride === void 0) {
          if (tempStride[attribute.buffer] === attribSize * byteSizeMap[attribute.type]) {
            attribute.stride = 0;
          } else {
            attribute.stride = tempStride[attribute.buffer];
          }
        }
        if (attribute.start === void 0) {
          attribute.start = tempStart[attribute.buffer];
          tempStart[attribute.buffer] += attribSize * byteSizeMap[attribute.type];
        }
      }
      vao = gl.createVertexArray();
      gl.bindVertexArray(vao);
      for (var i = 0; i < buffers.length; i++) {
        var buffer = buffers[i];
        bufferSystem.bind(buffer);
        if (incRefCount) {
          buffer._glBuffers[CONTEXT_UID].refCount++;
        }
      }
      this.activateVao(geometry, program);
      this._activeVao = vao;
      vaoObjectHash[program.id] = vao;
      vaoObjectHash[signature] = vao;
      return vao;
    };
    GeometrySystem2.prototype.disposeGeometry = function(geometry, contextLost) {
      var _a;
      if (!this.managedGeometries[geometry.id]) {
        return;
      }
      delete this.managedGeometries[geometry.id];
      var vaos = geometry.glVertexArrayObjects[this.CONTEXT_UID];
      var gl = this.gl;
      var buffers = geometry.buffers;
      var bufferSystem = (_a = this.renderer) === null || _a === void 0 ? void 0 : _a.buffer;
      geometry.disposeRunner.remove(this);
      if (!vaos) {
        return;
      }
      if (bufferSystem) {
        for (var i = 0; i < buffers.length; i++) {
          var buf = buffers[i]._glBuffers[this.CONTEXT_UID];
          if (buf) {
            buf.refCount--;
            if (buf.refCount === 0 && !contextLost) {
              bufferSystem.dispose(buffers[i], contextLost);
            }
          }
        }
      }
      if (!contextLost) {
        for (var vaoId in vaos) {
          if (vaoId[0] === "g") {
            var vao = vaos[vaoId];
            if (this._activeVao === vao) {
              this.unbind();
            }
            gl.deleteVertexArray(vao);
          }
        }
      }
      delete geometry.glVertexArrayObjects[this.CONTEXT_UID];
    };
    GeometrySystem2.prototype.disposeAll = function(contextLost) {
      var all = Object.keys(this.managedGeometries);
      for (var i = 0; i < all.length; i++) {
        this.disposeGeometry(this.managedGeometries[all[i]], contextLost);
      }
    };
    GeometrySystem2.prototype.activateVao = function(geometry, program) {
      var gl = this.gl;
      var CONTEXT_UID = this.CONTEXT_UID;
      var bufferSystem = this.renderer.buffer;
      var buffers = geometry.buffers;
      var attributes = geometry.attributes;
      if (geometry.indexBuffer) {
        bufferSystem.bind(geometry.indexBuffer);
      }
      var lastBuffer = null;
      for (var j in attributes) {
        var attribute = attributes[j];
        var buffer = buffers[attribute.buffer];
        var glBuffer = buffer._glBuffers[CONTEXT_UID];
        if (program.attributeData[j]) {
          if (lastBuffer !== glBuffer) {
            bufferSystem.bind(buffer);
            lastBuffer = glBuffer;
          }
          var location = program.attributeData[j].location;
          gl.enableVertexAttribArray(location);
          gl.vertexAttribPointer(location, attribute.size, attribute.type || gl.FLOAT, attribute.normalized, attribute.stride, attribute.start);
          if (attribute.instance) {
            if (this.hasInstance) {
              gl.vertexAttribDivisor(location, 1);
            } else {
              throw new Error("geometry error, GPU Instancing is not supported on this device");
            }
          }
        }
      }
    };
    GeometrySystem2.prototype.draw = function(type, size, start, instanceCount) {
      var gl = this.gl;
      var geometry = this._activeGeometry;
      if (geometry.indexBuffer) {
        var byteSize = geometry.indexBuffer.data.BYTES_PER_ELEMENT;
        var glType = byteSize === 2 ? gl.UNSIGNED_SHORT : gl.UNSIGNED_INT;
        if (byteSize === 2 || byteSize === 4 && this.canUseUInt32ElementIndex) {
          if (geometry.instanced) {
            gl.drawElementsInstanced(type, size || geometry.indexBuffer.data.length, glType, (start || 0) * byteSize, instanceCount || 1);
          } else {
            gl.drawElements(type, size || geometry.indexBuffer.data.length, glType, (start || 0) * byteSize);
          }
        } else {
          console.warn("unsupported index buffer type: uint32");
        }
      } else if (geometry.instanced) {
        gl.drawArraysInstanced(type, start, size || geometry.getSize(), instanceCount || 1);
      } else {
        gl.drawArrays(type, start, size || geometry.getSize());
      }
      return this;
    };
    GeometrySystem2.prototype.unbind = function() {
      this.gl.bindVertexArray(null);
      this._activeVao = null;
      this._activeGeometry = null;
    };
    GeometrySystem2.prototype.destroy = function() {
      this.renderer = null;
    };
    return GeometrySystem2;
  }()
);
var MaskData = (
  /** @class */
  function() {
    function MaskData2(maskObject) {
      if (maskObject === void 0) {
        maskObject = null;
      }
      this.type = MASK_TYPES2.NONE;
      this.autoDetect = true;
      this.maskObject = maskObject || null;
      this.pooled = false;
      this.isMaskData = true;
      this.resolution = null;
      this.multisample = settings.FILTER_MULTISAMPLE;
      this.enabled = true;
      this.colorMask = 15;
      this._filters = null;
      this._stencilCounter = 0;
      this._scissorCounter = 0;
      this._scissorRect = null;
      this._scissorRectLocal = null;
      this._colorMask = 15;
      this._target = null;
    }
    Object.defineProperty(MaskData2.prototype, "filter", {
      /**
       * The sprite mask filter.
       * If set to `null`, the default sprite mask filter is used.
       * @default null
       */
      get: function() {
        return this._filters ? this._filters[0] : null;
      },
      set: function(value) {
        if (value) {
          if (this._filters) {
            this._filters[0] = value;
          } else {
            this._filters = [value];
          }
        } else {
          this._filters = null;
        }
      },
      enumerable: false,
      configurable: true
    });
    MaskData2.prototype.reset = function() {
      if (this.pooled) {
        this.maskObject = null;
        this.type = MASK_TYPES2.NONE;
        this.autoDetect = true;
      }
      this._target = null;
      this._scissorRectLocal = null;
    };
    MaskData2.prototype.copyCountersOrReset = function(maskAbove) {
      if (maskAbove) {
        this._stencilCounter = maskAbove._stencilCounter;
        this._scissorCounter = maskAbove._scissorCounter;
        this._scissorRect = maskAbove._scissorRect;
      } else {
        this._stencilCounter = 0;
        this._scissorCounter = 0;
        this._scissorRect = null;
      }
    };
    return MaskData2;
  }()
);
function compileShader(gl, type, src) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  return shader;
}
function logPrettyShaderError(gl, shader) {
  var shaderSrc = gl.getShaderSource(shader).split("\n").map(function(line, index) {
    return index + ": " + line;
  });
  var shaderLog = gl.getShaderInfoLog(shader);
  var splitShader = shaderLog.split("\n");
  var dedupe = {};
  var lineNumbers = splitShader.map(function(line) {
    return parseFloat(line.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"));
  }).filter(function(n) {
    if (n && !dedupe[n]) {
      dedupe[n] = true;
      return true;
    }
    return false;
  });
  var logArgs = [""];
  lineNumbers.forEach(function(number) {
    shaderSrc[number - 1] = "%c" + shaderSrc[number - 1] + "%c";
    logArgs.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px");
  });
  var fragmentSourceToLog = shaderSrc.join("\n");
  logArgs[0] = fragmentSourceToLog;
  console.error(shaderLog);
  console.groupCollapsed("click to view full shader code");
  console.warn.apply(console, logArgs);
  console.groupEnd();
}
function logProgramError(gl, program, vertexShader, fragmentShader) {
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
      logPrettyShaderError(gl, vertexShader);
    }
    if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
      logPrettyShaderError(gl, fragmentShader);
    }
    console.error("PixiJS Error: Could not initialize shader.");
    if (gl.getProgramInfoLog(program) !== "") {
      console.warn("PixiJS Warning: gl.getProgramInfoLog()", gl.getProgramInfoLog(program));
    }
  }
}
function booleanArray(size) {
  var array = new Array(size);
  for (var i = 0; i < array.length; i++) {
    array[i] = false;
  }
  return array;
}
function defaultValue(type, size) {
  switch (type) {
    case "float":
      return 0;
    case "vec2":
      return new Float32Array(2 * size);
    case "vec3":
      return new Float32Array(3 * size);
    case "vec4":
      return new Float32Array(4 * size);
    case "int":
    case "uint":
    case "sampler2D":
    case "sampler2DArray":
      return 0;
    case "ivec2":
      return new Int32Array(2 * size);
    case "ivec3":
      return new Int32Array(3 * size);
    case "ivec4":
      return new Int32Array(4 * size);
    case "uvec2":
      return new Uint32Array(2 * size);
    case "uvec3":
      return new Uint32Array(3 * size);
    case "uvec4":
      return new Uint32Array(4 * size);
    case "bool":
      return false;
    case "bvec2":
      return booleanArray(2 * size);
    case "bvec3":
      return booleanArray(3 * size);
    case "bvec4":
      return booleanArray(4 * size);
    case "mat2":
      return new Float32Array([
        1,
        0,
        0,
        1
      ]);
    case "mat3":
      return new Float32Array([
        1,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        1
      ]);
    case "mat4":
      return new Float32Array([
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1
      ]);
  }
  return null;
}
var unknownContext = {};
var context = unknownContext;
function getTestContext() {
  if (context === unknownContext || context && context.isContextLost()) {
    var canvas = settings.ADAPTER.createCanvas();
    var gl = void 0;
    if (settings.PREFER_ENV >= ENV2.WEBGL2) {
      gl = canvas.getContext("webgl2", {});
    }
    if (!gl) {
      gl = canvas.getContext("webgl", {}) || canvas.getContext("experimental-webgl", {});
      if (!gl) {
        gl = null;
      } else {
        gl.getExtension("WEBGL_draw_buffers");
      }
    }
    context = gl;
  }
  return context;
}
var maxFragmentPrecision;
function getMaxFragmentPrecision() {
  if (!maxFragmentPrecision) {
    maxFragmentPrecision = PRECISION2.MEDIUM;
    var gl = getTestContext();
    if (gl) {
      if (gl.getShaderPrecisionFormat) {
        var shaderFragment = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
        maxFragmentPrecision = shaderFragment.precision ? PRECISION2.HIGH : PRECISION2.MEDIUM;
      }
    }
  }
  return maxFragmentPrecision;
}
function setPrecision(src, requestedPrecision, maxSupportedPrecision) {
  if (src.substring(0, 9) !== "precision") {
    var precision = requestedPrecision;
    if (requestedPrecision === PRECISION2.HIGH && maxSupportedPrecision !== PRECISION2.HIGH) {
      precision = PRECISION2.MEDIUM;
    }
    return "precision " + precision + " float;\n" + src;
  } else if (maxSupportedPrecision !== PRECISION2.HIGH && src.substring(0, 15) === "precision highp") {
    return src.replace("precision highp", "precision mediump");
  }
  return src;
}
var GLSL_TO_SIZE = {
  float: 1,
  vec2: 2,
  vec3: 3,
  vec4: 4,
  int: 1,
  ivec2: 2,
  ivec3: 3,
  ivec4: 4,
  uint: 1,
  uvec2: 2,
  uvec3: 3,
  uvec4: 4,
  bool: 1,
  bvec2: 2,
  bvec3: 3,
  bvec4: 4,
  mat2: 4,
  mat3: 9,
  mat4: 16,
  sampler2D: 1
};
function mapSize(type) {
  return GLSL_TO_SIZE[type];
}
var GL_TABLE = null;
var GL_TO_GLSL_TYPES = {
  FLOAT: "float",
  FLOAT_VEC2: "vec2",
  FLOAT_VEC3: "vec3",
  FLOAT_VEC4: "vec4",
  INT: "int",
  INT_VEC2: "ivec2",
  INT_VEC3: "ivec3",
  INT_VEC4: "ivec4",
  UNSIGNED_INT: "uint",
  UNSIGNED_INT_VEC2: "uvec2",
  UNSIGNED_INT_VEC3: "uvec3",
  UNSIGNED_INT_VEC4: "uvec4",
  BOOL: "bool",
  BOOL_VEC2: "bvec2",
  BOOL_VEC3: "bvec3",
  BOOL_VEC4: "bvec4",
  FLOAT_MAT2: "mat2",
  FLOAT_MAT3: "mat3",
  FLOAT_MAT4: "mat4",
  SAMPLER_2D: "sampler2D",
  INT_SAMPLER_2D: "sampler2D",
  UNSIGNED_INT_SAMPLER_2D: "sampler2D",
  SAMPLER_CUBE: "samplerCube",
  INT_SAMPLER_CUBE: "samplerCube",
  UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
  SAMPLER_2D_ARRAY: "sampler2DArray",
  INT_SAMPLER_2D_ARRAY: "sampler2DArray",
  UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
};
function mapType(gl, type) {
  if (!GL_TABLE) {
    var typeNames = Object.keys(GL_TO_GLSL_TYPES);
    GL_TABLE = {};
    for (var i = 0; i < typeNames.length; ++i) {
      var tn = typeNames[i];
      GL_TABLE[gl[tn]] = GL_TO_GLSL_TYPES[tn];
    }
  }
  return GL_TABLE[type];
}
var uniformParsers = [
  // a float cache layer
  {
    test: function(data) {
      return data.type === "float" && data.size === 1;
    },
    code: function(name) {
      return '\n            if(uv["' + name + '"] !== ud["' + name + '"].value)\n            {\n                ud["' + name + '"].value = uv["' + name + '"]\n                gl.uniform1f(ud["' + name + '"].location, uv["' + name + '"])\n            }\n            ';
    }
  },
  // handling samplers
  {
    test: function(data) {
      return (data.type === "sampler2D" || data.type === "samplerCube" || data.type === "sampler2DArray") && data.size === 1 && !data.isArray;
    },
    code: function(name) {
      return 't = syncData.textureCount++;\n\n            renderer.texture.bind(uv["' + name + '"], t);\n\n            if(ud["' + name + '"].value !== t)\n            {\n                ud["' + name + '"].value = t;\n                gl.uniform1i(ud["' + name + '"].location, t);\n; // eslint-disable-line max-len\n            }';
    }
  },
  // uploading pixi matrix object to mat3
  {
    test: function(data, uniform) {
      return data.type === "mat3" && data.size === 1 && uniform.a !== void 0;
    },
    code: function(name) {
      return '\n            gl.uniformMatrix3fv(ud["' + name + '"].location, false, uv["' + name + '"].toArray(true));\n            ';
    },
    codeUbo: function(name) {
      return "\n                var " + name + "_matrix = uv." + name + ".toArray(true);\n\n                data[offset] = " + name + "_matrix[0];\n                data[offset+1] = " + name + "_matrix[1];\n                data[offset+2] = " + name + "_matrix[2];\n        \n                data[offset + 4] = " + name + "_matrix[3];\n                data[offset + 5] = " + name + "_matrix[4];\n                data[offset + 6] = " + name + "_matrix[5];\n        \n                data[offset + 8] = " + name + "_matrix[6];\n                data[offset + 9] = " + name + "_matrix[7];\n                data[offset + 10] = " + name + "_matrix[8];\n            ";
    }
  },
  // uploading a pixi point as a vec2 with caching layer
  {
    test: function(data, uniform) {
      return data.type === "vec2" && data.size === 1 && uniform.x !== void 0;
    },
    code: function(name) {
      return '\n                cv = ud["' + name + '"].value;\n                v = uv["' + name + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    gl.uniform2f(ud["' + name + '"].location, v.x, v.y);\n                }';
    },
    codeUbo: function(name) {
      return "\n                v = uv." + name + ";\n\n                data[offset] = v.x;\n                data[offset+1] = v.y;\n            ";
    }
  },
  // caching layer for a vec2
  {
    test: function(data) {
      return data.type === "vec2" && data.size === 1;
    },
    code: function(name) {
      return '\n                cv = ud["' + name + '"].value;\n                v = uv["' + name + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    gl.uniform2f(ud["' + name + '"].location, v[0], v[1]);\n                }\n            ';
    }
  },
  // upload a pixi rectangle as a vec4 with caching layer
  {
    test: function(data, uniform) {
      return data.type === "vec4" && data.size === 1 && uniform.width !== void 0;
    },
    code: function(name) {
      return '\n                cv = ud["' + name + '"].value;\n                v = uv["' + name + '"];\n\n                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)\n                {\n                    cv[0] = v.x;\n                    cv[1] = v.y;\n                    cv[2] = v.width;\n                    cv[3] = v.height;\n                    gl.uniform4f(ud["' + name + '"].location, v.x, v.y, v.width, v.height)\n                }';
    },
    codeUbo: function(name) {
      return "\n                    v = uv." + name + ";\n\n                    data[offset] = v.x;\n                    data[offset+1] = v.y;\n                    data[offset+2] = v.width;\n                    data[offset+3] = v.height;\n                ";
    }
  },
  // a caching layer for vec4 uploading
  {
    test: function(data) {
      return data.type === "vec4" && data.size === 1;
    },
    code: function(name) {
      return '\n                cv = ud["' + name + '"].value;\n                v = uv["' + name + '"];\n\n                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n                {\n                    cv[0] = v[0];\n                    cv[1] = v[1];\n                    cv[2] = v[2];\n                    cv[3] = v[3];\n\n                    gl.uniform4f(ud["' + name + '"].location, v[0], v[1], v[2], v[3])\n                }';
    }
  }
];
var GLSL_TO_SINGLE_SETTERS_CACHED = {
  float: "\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1f(location, v);\n    }",
  vec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2f(location, v[0], v[1])\n    }",
  vec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3f(location, v[0], v[1], v[2])\n    }",
  vec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4f(location, v[0], v[1], v[2], v[3]);\n    }",
  int: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1i(location, v);\n    }",
  ivec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }",
  ivec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }",
  ivec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }",
  uint: "\n    if (cv !== v)\n    {\n        cu.value = v;\n\n        gl.uniform1ui(location, v);\n    }",
  uvec2: "\n    if (cv[0] !== v[0] || cv[1] !== v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2ui(location, v[0], v[1]);\n    }",
  uvec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3ui(location, v[0], v[1], v[2]);\n    }",
  uvec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);\n    }",
  bool: "\n    if (cv !== v)\n    {\n        cu.value = v;\n        gl.uniform1i(location, v);\n    }",
  bvec2: "\n    if (cv[0] != v[0] || cv[1] != v[1])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n\n        gl.uniform2i(location, v[0], v[1]);\n    }",
  bvec3: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n\n        gl.uniform3i(location, v[0], v[1], v[2]);\n    }",
  bvec4: "\n    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])\n    {\n        cv[0] = v[0];\n        cv[1] = v[1];\n        cv[2] = v[2];\n        cv[3] = v[3];\n\n        gl.uniform4i(location, v[0], v[1], v[2], v[3]);\n    }",
  mat2: "gl.uniformMatrix2fv(location, false, v)",
  mat3: "gl.uniformMatrix3fv(location, false, v)",
  mat4: "gl.uniformMatrix4fv(location, false, v)",
  sampler2D: "gl.uniform1i(location, v)",
  samplerCube: "gl.uniform1i(location, v)",
  sampler2DArray: "gl.uniform1i(location, v)"
};
var GLSL_TO_ARRAY_SETTERS = {
  float: "gl.uniform1fv(location, v)",
  vec2: "gl.uniform2fv(location, v)",
  vec3: "gl.uniform3fv(location, v)",
  vec4: "gl.uniform4fv(location, v)",
  mat4: "gl.uniformMatrix4fv(location, false, v)",
  mat3: "gl.uniformMatrix3fv(location, false, v)",
  mat2: "gl.uniformMatrix2fv(location, false, v)",
  int: "gl.uniform1iv(location, v)",
  ivec2: "gl.uniform2iv(location, v)",
  ivec3: "gl.uniform3iv(location, v)",
  ivec4: "gl.uniform4iv(location, v)",
  uint: "gl.uniform1uiv(location, v)",
  uvec2: "gl.uniform2uiv(location, v)",
  uvec3: "gl.uniform3uiv(location, v)",
  uvec4: "gl.uniform4uiv(location, v)",
  bool: "gl.uniform1iv(location, v)",
  bvec2: "gl.uniform2iv(location, v)",
  bvec3: "gl.uniform3iv(location, v)",
  bvec4: "gl.uniform4iv(location, v)",
  sampler2D: "gl.uniform1iv(location, v)",
  samplerCube: "gl.uniform1iv(location, v)",
  sampler2DArray: "gl.uniform1iv(location, v)"
};
function generateUniformsSync(group, uniformData) {
  var _a;
  var funcFragments = ["\n        var v = null;\n        var cv = null;\n        var cu = null;\n        var t = 0;\n        var gl = renderer.gl;\n    "];
  for (var i in group.uniforms) {
    var data = uniformData[i];
    if (!data) {
      if ((_a = group.uniforms[i]) === null || _a === void 0 ? void 0 : _a.group) {
        if (group.uniforms[i].ubo) {
          funcFragments.push("\n                        renderer.shader.syncUniformBufferGroup(uv." + i + ", '" + i + "');\n                    ");
        } else {
          funcFragments.push("\n                        renderer.shader.syncUniformGroup(uv." + i + ", syncData);\n                    ");
        }
      }
      continue;
    }
    var uniform = group.uniforms[i];
    var parsed = false;
    for (var j = 0; j < uniformParsers.length; j++) {
      if (uniformParsers[j].test(data, uniform)) {
        funcFragments.push(uniformParsers[j].code(i, uniform));
        parsed = true;
        break;
      }
    }
    if (!parsed) {
      var templateType = data.size === 1 ? GLSL_TO_SINGLE_SETTERS_CACHED : GLSL_TO_ARRAY_SETTERS;
      var template = templateType[data.type].replace("location", 'ud["' + i + '"].location');
      funcFragments.push('\n            cu = ud["' + i + '"];\n            cv = cu.value;\n            v = uv["' + i + '"];\n            ' + template + ";");
    }
  }
  return new Function("ud", "uv", "renderer", "syncData", funcFragments.join("\n"));
}
var fragTemplate = [
  "precision mediump float;",
  "void main(void){",
  "float test = 0.1;",
  "%forloop%",
  "gl_FragColor = vec4(0.0);",
  "}"
].join("\n");
function generateIfTestSrc(maxIfs) {
  var src = "";
  for (var i = 0; i < maxIfs; ++i) {
    if (i > 0) {
      src += "\nelse ";
    }
    if (i < maxIfs - 1) {
      src += "if(test == " + i + ".0){}";
    }
  }
  return src;
}
function checkMaxIfStatementsInShader(maxIfs, gl) {
  if (maxIfs === 0) {
    throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
  }
  var shader = gl.createShader(gl.FRAGMENT_SHADER);
  while (true) {
    var fragmentSrc = fragTemplate.replace(/%forloop%/gi, generateIfTestSrc(maxIfs));
    gl.shaderSource(shader, fragmentSrc);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      maxIfs = maxIfs / 2 | 0;
    } else {
      break;
    }
  }
  return maxIfs;
}
var unsafeEval;
function unsafeEvalSupported() {
  if (typeof unsafeEval === "boolean") {
    return unsafeEval;
  }
  try {
    var func = new Function("param1", "param2", "param3", "return param1[param2] === param3;");
    unsafeEval = func({ a: "b" }, "a", "b") === true;
  } catch (e) {
    unsafeEval = false;
  }
  return unsafeEval;
}
var defaultFragment$2 = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor *= texture2D(uSampler, vTextureCoord);\n}";
var defaultVertex$3 = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void){\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n}\n";
var UID$1 = 0;
var nameCache = {};
var Program = (
  /** @class */
  function() {
    function Program2(vertexSrc, fragmentSrc, name) {
      if (name === void 0) {
        name = "pixi-shader";
      }
      this.id = UID$1++;
      this.vertexSrc = vertexSrc || Program2.defaultVertexSrc;
      this.fragmentSrc = fragmentSrc || Program2.defaultFragmentSrc;
      this.vertexSrc = this.vertexSrc.trim();
      this.fragmentSrc = this.fragmentSrc.trim();
      if (this.vertexSrc.substring(0, 8) !== "#version") {
        name = name.replace(/\s+/g, "-");
        if (nameCache[name]) {
          nameCache[name]++;
          name += "-" + nameCache[name];
        } else {
          nameCache[name] = 1;
        }
        this.vertexSrc = "#define SHADER_NAME " + name + "\n" + this.vertexSrc;
        this.fragmentSrc = "#define SHADER_NAME " + name + "\n" + this.fragmentSrc;
        this.vertexSrc = setPrecision(this.vertexSrc, settings.PRECISION_VERTEX, PRECISION2.HIGH);
        this.fragmentSrc = setPrecision(this.fragmentSrc, settings.PRECISION_FRAGMENT, getMaxFragmentPrecision());
      }
      this.glPrograms = {};
      this.syncUniforms = null;
    }
    Object.defineProperty(Program2, "defaultVertexSrc", {
      /**
       * The default vertex shader source.
       * @constant
       */
      get: function() {
        return defaultVertex$3;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Program2, "defaultFragmentSrc", {
      /**
       * The default fragment shader source.
       * @constant
       */
      get: function() {
        return defaultFragment$2;
      },
      enumerable: false,
      configurable: true
    });
    Program2.from = function(vertexSrc, fragmentSrc, name) {
      var key = vertexSrc + fragmentSrc;
      var program = ProgramCache[key];
      if (!program) {
        ProgramCache[key] = program = new Program2(vertexSrc, fragmentSrc, name);
      }
      return program;
    };
    return Program2;
  }()
);
var Shader = (
  /** @class */
  function() {
    function Shader2(program, uniforms) {
      this.uniformBindCount = 0;
      this.program = program;
      if (uniforms) {
        if (uniforms instanceof UniformGroup) {
          this.uniformGroup = uniforms;
        } else {
          this.uniformGroup = new UniformGroup(uniforms);
        }
      } else {
        this.uniformGroup = new UniformGroup({});
      }
    }
    Shader2.prototype.checkUniformExists = function(name, group) {
      if (group.uniforms[name]) {
        return true;
      }
      for (var i in group.uniforms) {
        var uniform = group.uniforms[i];
        if (uniform.group) {
          if (this.checkUniformExists(name, uniform)) {
            return true;
          }
        }
      }
      return false;
    };
    Shader2.prototype.destroy = function() {
      this.uniformGroup = null;
    };
    Object.defineProperty(Shader2.prototype, "uniforms", {
      /**
       * Shader uniform values, shortcut for `uniformGroup.uniforms`.
       * @readonly
       */
      get: function() {
        return this.uniformGroup.uniforms;
      },
      enumerable: false,
      configurable: true
    });
    Shader2.from = function(vertexSrc, fragmentSrc, uniforms) {
      var program = Program.from(vertexSrc, fragmentSrc);
      return new Shader2(program, uniforms);
    };
    return Shader2;
  }()
);
var BLEND$1 = 0;
var OFFSET$1 = 1;
var CULLING$1 = 2;
var DEPTH_TEST$1 = 3;
var WINDING$1 = 4;
var DEPTH_MASK$1 = 5;
var State = (
  /** @class */
  function() {
    function State2() {
      this.data = 0;
      this.blendMode = BLEND_MODES2.NORMAL;
      this.polygonOffset = 0;
      this.blend = true;
      this.depthMask = true;
    }
    Object.defineProperty(State2.prototype, "blend", {
      /**
       * Activates blending of the computed fragment color values.
       * @default true
       */
      get: function() {
        return !!(this.data & 1 << BLEND$1);
      },
      set: function(value) {
        if (!!(this.data & 1 << BLEND$1) !== value) {
          this.data ^= 1 << BLEND$1;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(State2.prototype, "offsets", {
      /**
       * Activates adding an offset to depth values of polygon's fragments
       * @default false
       */
      get: function() {
        return !!(this.data & 1 << OFFSET$1);
      },
      set: function(value) {
        if (!!(this.data & 1 << OFFSET$1) !== value) {
          this.data ^= 1 << OFFSET$1;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(State2.prototype, "culling", {
      /**
       * Activates culling of polygons.
       * @default false
       */
      get: function() {
        return !!(this.data & 1 << CULLING$1);
      },
      set: function(value) {
        if (!!(this.data & 1 << CULLING$1) !== value) {
          this.data ^= 1 << CULLING$1;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(State2.prototype, "depthTest", {
      /**
       * Activates depth comparisons and updates to the depth buffer.
       * @default false
       */
      get: function() {
        return !!(this.data & 1 << DEPTH_TEST$1);
      },
      set: function(value) {
        if (!!(this.data & 1 << DEPTH_TEST$1) !== value) {
          this.data ^= 1 << DEPTH_TEST$1;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(State2.prototype, "depthMask", {
      /**
       * Enables or disables writing to the depth buffer.
       * @default true
       */
      get: function() {
        return !!(this.data & 1 << DEPTH_MASK$1);
      },
      set: function(value) {
        if (!!(this.data & 1 << DEPTH_MASK$1) !== value) {
          this.data ^= 1 << DEPTH_MASK$1;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(State2.prototype, "clockwiseFrontFace", {
      /**
       * Specifies whether or not front or back-facing polygons can be culled.
       * @default false
       */
      get: function() {
        return !!(this.data & 1 << WINDING$1);
      },
      set: function(value) {
        if (!!(this.data & 1 << WINDING$1) !== value) {
          this.data ^= 1 << WINDING$1;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(State2.prototype, "blendMode", {
      /**
       * The blend mode to be applied when this state is set. Apply a value of `PIXI.BLEND_MODES.NORMAL` to reset the blend mode.
       * Setting this mode to anything other than NO_BLEND will automatically switch blending on.
       * @default PIXI.BLEND_MODES.NORMAL
       */
      get: function() {
        return this._blendMode;
      },
      set: function(value) {
        this.blend = value !== BLEND_MODES2.NONE;
        this._blendMode = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(State2.prototype, "polygonOffset", {
      /**
       * The polygon offset. Setting this property to anything other than 0 will automatically enable polygon offset fill.
       * @default 0
       */
      get: function() {
        return this._polygonOffset;
      },
      set: function(value) {
        this.offsets = !!value;
        this._polygonOffset = value;
      },
      enumerable: false,
      configurable: true
    });
    State2.prototype.toString = function() {
      return "[@pixi/core:State " + ("blendMode=" + this.blendMode + " ") + ("clockwiseFrontFace=" + this.clockwiseFrontFace + " ") + ("culling=" + this.culling + " ") + ("depthMask=" + this.depthMask + " ") + ("polygonOffset=" + this.polygonOffset) + "]";
    };
    State2.for2d = function() {
      var state = new State2();
      state.depthTest = false;
      state.blend = true;
      return state;
    };
    return State2;
  }()
);
var defaultFragment$1 = "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void){\n   gl_FragColor = texture2D(uSampler, vTextureCoord);\n}\n";
var defaultVertex$2 = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
var Filter = (
  /** @class */
  function(_super) {
    __extends(Filter2, _super);
    function Filter2(vertexSrc, fragmentSrc, uniforms) {
      var _this = this;
      var program = Program.from(vertexSrc || Filter2.defaultVertexSrc, fragmentSrc || Filter2.defaultFragmentSrc);
      _this = _super.call(this, program, uniforms) || this;
      _this.padding = 0;
      _this.resolution = settings.FILTER_RESOLUTION;
      _this.multisample = settings.FILTER_MULTISAMPLE;
      _this.enabled = true;
      _this.autoFit = true;
      _this.state = new State();
      return _this;
    }
    Filter2.prototype.apply = function(filterManager, input, output, clearMode, _currentState) {
      filterManager.applyFilter(this, input, output, clearMode);
    };
    Object.defineProperty(Filter2.prototype, "blendMode", {
      /**
       * Sets the blend mode of the filter.
       * @default PIXI.BLEND_MODES.NORMAL
       */
      get: function() {
        return this.state.blendMode;
      },
      set: function(value) {
        this.state.blendMode = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Filter2.prototype, "resolution", {
      /**
       * The resolution of the filter. Setting this to be lower will lower the quality but
       * increase the performance of the filter.
       */
      get: function() {
        return this._resolution;
      },
      set: function(value) {
        this._resolution = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Filter2, "defaultVertexSrc", {
      /**
       * The default vertex shader source
       * @constant
       */
      get: function() {
        return defaultVertex$2;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Filter2, "defaultFragmentSrc", {
      /**
       * The default fragment shader source
       * @constant
       */
      get: function() {
        return defaultFragment$1;
      },
      enumerable: false,
      configurable: true
    });
    return Filter2;
  }(Shader)
);
var vertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n";
var fragment = "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform float npmAlpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);\n\n    original *= (alphaMul * masky.r * alpha * clip);\n\n    gl_FragColor = original;\n}\n";
var tempMat = new Matrix();
var TextureMatrix = (
  /** @class */
  function() {
    function TextureMatrix2(texture, clampMargin) {
      this._texture = texture;
      this.mapCoord = new Matrix();
      this.uClampFrame = new Float32Array(4);
      this.uClampOffset = new Float32Array(2);
      this._textureID = -1;
      this._updateID = 0;
      this.clampOffset = 0;
      this.clampMargin = typeof clampMargin === "undefined" ? 0.5 : clampMargin;
      this.isSimple = false;
    }
    Object.defineProperty(TextureMatrix2.prototype, "texture", {
      /** Texture property. */
      get: function() {
        return this._texture;
      },
      set: function(value) {
        this._texture = value;
        this._textureID = -1;
      },
      enumerable: false,
      configurable: true
    });
    TextureMatrix2.prototype.multiplyUvs = function(uvs, out) {
      if (out === void 0) {
        out = uvs;
      }
      var mat = this.mapCoord;
      for (var i = 0; i < uvs.length; i += 2) {
        var x = uvs[i];
        var y = uvs[i + 1];
        out[i] = x * mat.a + y * mat.c + mat.tx;
        out[i + 1] = x * mat.b + y * mat.d + mat.ty;
      }
      return out;
    };
    TextureMatrix2.prototype.update = function(forceUpdate) {
      var tex = this._texture;
      if (!tex || !tex.valid) {
        return false;
      }
      if (!forceUpdate && this._textureID === tex._updateID) {
        return false;
      }
      this._textureID = tex._updateID;
      this._updateID++;
      var uvs = tex._uvs;
      this.mapCoord.set(uvs.x1 - uvs.x0, uvs.y1 - uvs.y0, uvs.x3 - uvs.x0, uvs.y3 - uvs.y0, uvs.x0, uvs.y0);
      var orig = tex.orig;
      var trim = tex.trim;
      if (trim) {
        tempMat.set(orig.width / trim.width, 0, 0, orig.height / trim.height, -trim.x / trim.width, -trim.y / trim.height);
        this.mapCoord.append(tempMat);
      }
      var texBase = tex.baseTexture;
      var frame = this.uClampFrame;
      var margin = this.clampMargin / texBase.resolution;
      var offset = this.clampOffset;
      frame[0] = (tex._frame.x + margin + offset) / texBase.width;
      frame[1] = (tex._frame.y + margin + offset) / texBase.height;
      frame[2] = (tex._frame.x + tex._frame.width - margin + offset) / texBase.width;
      frame[3] = (tex._frame.y + tex._frame.height - margin + offset) / texBase.height;
      this.uClampOffset[0] = offset / texBase.realWidth;
      this.uClampOffset[1] = offset / texBase.realHeight;
      this.isSimple = tex._frame.width === texBase.width && tex._frame.height === texBase.height && tex.rotate === 0;
      return true;
    };
    return TextureMatrix2;
  }()
);
var SpriteMaskFilter = (
  /** @class */
  function(_super) {
    __extends(SpriteMaskFilter2, _super);
    function SpriteMaskFilter2(vertexSrc, fragmentSrc, uniforms) {
      var _this = this;
      var sprite = null;
      if (typeof vertexSrc !== "string" && fragmentSrc === void 0 && uniforms === void 0) {
        sprite = vertexSrc;
        vertexSrc = void 0;
        fragmentSrc = void 0;
        uniforms = void 0;
      }
      _this = _super.call(this, vertexSrc || vertex, fragmentSrc || fragment, uniforms) || this;
      _this.maskSprite = sprite;
      _this.maskMatrix = new Matrix();
      return _this;
    }
    Object.defineProperty(SpriteMaskFilter2.prototype, "maskSprite", {
      /**
       * Sprite mask
       * @type {PIXI.DisplayObject}
       */
      get: function() {
        return this._maskSprite;
      },
      set: function(value) {
        this._maskSprite = value;
        if (this._maskSprite) {
          this._maskSprite.renderable = false;
        }
      },
      enumerable: false,
      configurable: true
    });
    SpriteMaskFilter2.prototype.apply = function(filterManager, input, output, clearMode) {
      var maskSprite = this._maskSprite;
      var tex = maskSprite._texture;
      if (!tex.valid) {
        return;
      }
      if (!tex.uvMatrix) {
        tex.uvMatrix = new TextureMatrix(tex, 0);
      }
      tex.uvMatrix.update();
      this.uniforms.npmAlpha = tex.baseTexture.alphaMode ? 0 : 1;
      this.uniforms.mask = tex;
      this.uniforms.otherMatrix = filterManager.calculateSpriteMatrix(this.maskMatrix, maskSprite).prepend(tex.uvMatrix.mapCoord);
      this.uniforms.alpha = maskSprite.worldAlpha;
      this.uniforms.maskClamp = tex.uvMatrix.uClampFrame;
      filterManager.applyFilter(this, input, output, clearMode);
    };
    return SpriteMaskFilter2;
  }(Filter)
);
var MaskSystem = (
  /** @class */
  function() {
    function MaskSystem2(renderer) {
      this.renderer = renderer;
      this.enableScissor = true;
      this.alphaMaskPool = [];
      this.maskDataPool = [];
      this.maskStack = [];
      this.alphaMaskIndex = 0;
    }
    MaskSystem2.prototype.setMaskStack = function(maskStack) {
      this.maskStack = maskStack;
      this.renderer.scissor.setMaskStack(maskStack);
      this.renderer.stencil.setMaskStack(maskStack);
    };
    MaskSystem2.prototype.push = function(target, maskDataOrTarget) {
      var maskData = maskDataOrTarget;
      if (!maskData.isMaskData) {
        var d = this.maskDataPool.pop() || new MaskData();
        d.pooled = true;
        d.maskObject = maskDataOrTarget;
        maskData = d;
      }
      var maskAbove = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
      maskData.copyCountersOrReset(maskAbove);
      maskData._colorMask = maskAbove ? maskAbove._colorMask : 15;
      if (maskData.autoDetect) {
        this.detect(maskData);
      }
      maskData._target = target;
      if (maskData.type !== MASK_TYPES2.SPRITE) {
        this.maskStack.push(maskData);
      }
      if (maskData.enabled) {
        switch (maskData.type) {
          case MASK_TYPES2.SCISSOR:
            this.renderer.scissor.push(maskData);
            break;
          case MASK_TYPES2.STENCIL:
            this.renderer.stencil.push(maskData);
            break;
          case MASK_TYPES2.SPRITE:
            maskData.copyCountersOrReset(null);
            this.pushSpriteMask(maskData);
            break;
          case MASK_TYPES2.COLOR:
            this.pushColorMask(maskData);
            break;
        }
      }
      if (maskData.type === MASK_TYPES2.SPRITE) {
        this.maskStack.push(maskData);
      }
    };
    MaskSystem2.prototype.pop = function(target) {
      var maskData = this.maskStack.pop();
      if (!maskData || maskData._target !== target) {
        return;
      }
      if (maskData.enabled) {
        switch (maskData.type) {
          case MASK_TYPES2.SCISSOR:
            this.renderer.scissor.pop(maskData);
            break;
          case MASK_TYPES2.STENCIL:
            this.renderer.stencil.pop(maskData.maskObject);
            break;
          case MASK_TYPES2.SPRITE:
            this.popSpriteMask(maskData);
            break;
          case MASK_TYPES2.COLOR:
            this.popColorMask(maskData);
            break;
        }
      }
      maskData.reset();
      if (maskData.pooled) {
        this.maskDataPool.push(maskData);
      }
      if (this.maskStack.length !== 0) {
        var maskCurrent = this.maskStack[this.maskStack.length - 1];
        if (maskCurrent.type === MASK_TYPES2.SPRITE && maskCurrent._filters) {
          maskCurrent._filters[0].maskSprite = maskCurrent.maskObject;
        }
      }
    };
    MaskSystem2.prototype.detect = function(maskData) {
      var maskObject = maskData.maskObject;
      if (!maskObject) {
        maskData.type = MASK_TYPES2.COLOR;
      } else if (maskObject.isSprite) {
        maskData.type = MASK_TYPES2.SPRITE;
      } else if (this.enableScissor && this.renderer.scissor.testScissor(maskData)) {
        maskData.type = MASK_TYPES2.SCISSOR;
      } else {
        maskData.type = MASK_TYPES2.STENCIL;
      }
    };
    MaskSystem2.prototype.pushSpriteMask = function(maskData) {
      var _a, _b;
      var maskObject = maskData.maskObject;
      var target = maskData._target;
      var alphaMaskFilter = maskData._filters;
      if (!alphaMaskFilter) {
        alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex];
        if (!alphaMaskFilter) {
          alphaMaskFilter = this.alphaMaskPool[this.alphaMaskIndex] = [new SpriteMaskFilter()];
        }
      }
      var renderer = this.renderer;
      var renderTextureSystem = renderer.renderTexture;
      var resolution;
      var multisample;
      if (renderTextureSystem.current) {
        var renderTexture = renderTextureSystem.current;
        resolution = maskData.resolution || renderTexture.resolution;
        multisample = (_a = maskData.multisample) !== null && _a !== void 0 ? _a : renderTexture.multisample;
      } else {
        resolution = maskData.resolution || renderer.resolution;
        multisample = (_b = maskData.multisample) !== null && _b !== void 0 ? _b : renderer.multisample;
      }
      alphaMaskFilter[0].resolution = resolution;
      alphaMaskFilter[0].multisample = multisample;
      alphaMaskFilter[0].maskSprite = maskObject;
      var stashFilterArea = target.filterArea;
      target.filterArea = maskObject.getBounds(true);
      renderer.filter.push(target, alphaMaskFilter);
      target.filterArea = stashFilterArea;
      if (!maskData._filters) {
        this.alphaMaskIndex++;
      }
    };
    MaskSystem2.prototype.popSpriteMask = function(maskData) {
      this.renderer.filter.pop();
      if (maskData._filters) {
        maskData._filters[0].maskSprite = null;
      } else {
        this.alphaMaskIndex--;
        this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null;
      }
    };
    MaskSystem2.prototype.pushColorMask = function(maskData) {
      var currColorMask = maskData._colorMask;
      var nextColorMask = maskData._colorMask = currColorMask & maskData.colorMask;
      if (nextColorMask !== currColorMask) {
        this.renderer.gl.colorMask((nextColorMask & 1) !== 0, (nextColorMask & 2) !== 0, (nextColorMask & 4) !== 0, (nextColorMask & 8) !== 0);
      }
    };
    MaskSystem2.prototype.popColorMask = function(maskData) {
      var currColorMask = maskData._colorMask;
      var nextColorMask = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;
      if (nextColorMask !== currColorMask) {
        this.renderer.gl.colorMask((nextColorMask & 1) !== 0, (nextColorMask & 2) !== 0, (nextColorMask & 4) !== 0, (nextColorMask & 8) !== 0);
      }
    };
    MaskSystem2.prototype.destroy = function() {
      this.renderer = null;
    };
    return MaskSystem2;
  }()
);
var AbstractMaskSystem = (
  /** @class */
  function() {
    function AbstractMaskSystem2(renderer) {
      this.renderer = renderer;
      this.maskStack = [];
      this.glConst = 0;
    }
    AbstractMaskSystem2.prototype.getStackLength = function() {
      return this.maskStack.length;
    };
    AbstractMaskSystem2.prototype.setMaskStack = function(maskStack) {
      var gl = this.renderer.gl;
      var curStackLen = this.getStackLength();
      this.maskStack = maskStack;
      var newStackLen = this.getStackLength();
      if (newStackLen !== curStackLen) {
        if (newStackLen === 0) {
          gl.disable(this.glConst);
        } else {
          gl.enable(this.glConst);
          this._useCurrent();
        }
      }
    };
    AbstractMaskSystem2.prototype._useCurrent = function() {
    };
    AbstractMaskSystem2.prototype.destroy = function() {
      this.renderer = null;
      this.maskStack = null;
    };
    return AbstractMaskSystem2;
  }()
);
var tempMatrix$1 = new Matrix();
var rectPool = [];
var ScissorSystem = (
  /** @class */
  function(_super) {
    __extends(ScissorSystem2, _super);
    function ScissorSystem2(renderer) {
      var _this = _super.call(this, renderer) || this;
      _this.glConst = settings.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST;
      return _this;
    }
    ScissorSystem2.prototype.getStackLength = function() {
      var maskData = this.maskStack[this.maskStack.length - 1];
      if (maskData) {
        return maskData._scissorCounter;
      }
      return 0;
    };
    ScissorSystem2.prototype.calcScissorRect = function(maskData) {
      var _a;
      if (maskData._scissorRectLocal) {
        return;
      }
      var prevData = maskData._scissorRect;
      var maskObject = maskData.maskObject;
      var renderer = this.renderer;
      var renderTextureSystem = renderer.renderTexture;
      var rect = maskObject.getBounds(true, (_a = rectPool.pop()) !== null && _a !== void 0 ? _a : new Rectangle());
      this.roundFrameToPixels(rect, renderTextureSystem.current ? renderTextureSystem.current.resolution : renderer.resolution, renderTextureSystem.sourceFrame, renderTextureSystem.destinationFrame, renderer.projection.transform);
      if (prevData) {
        rect.fit(prevData);
      }
      maskData._scissorRectLocal = rect;
    };
    ScissorSystem2.isMatrixRotated = function(matrix) {
      if (!matrix) {
        return false;
      }
      var a = matrix.a, b = matrix.b, c = matrix.c, d = matrix.d;
      return (Math.abs(b) > 1e-4 || Math.abs(c) > 1e-4) && (Math.abs(a) > 1e-4 || Math.abs(d) > 1e-4);
    };
    ScissorSystem2.prototype.testScissor = function(maskData) {
      var maskObject = maskData.maskObject;
      if (!maskObject.isFastRect || !maskObject.isFastRect()) {
        return false;
      }
      if (ScissorSystem2.isMatrixRotated(maskObject.worldTransform)) {
        return false;
      }
      if (ScissorSystem2.isMatrixRotated(this.renderer.projection.transform)) {
        return false;
      }
      this.calcScissorRect(maskData);
      var rect = maskData._scissorRectLocal;
      return rect.width > 0 && rect.height > 0;
    };
    ScissorSystem2.prototype.roundFrameToPixels = function(frame, resolution, bindingSourceFrame, bindingDestinationFrame, transform) {
      if (ScissorSystem2.isMatrixRotated(transform)) {
        return;
      }
      transform = transform ? tempMatrix$1.copyFrom(transform) : tempMatrix$1.identity();
      transform.translate(-bindingSourceFrame.x, -bindingSourceFrame.y).scale(bindingDestinationFrame.width / bindingSourceFrame.width, bindingDestinationFrame.height / bindingSourceFrame.height).translate(bindingDestinationFrame.x, bindingDestinationFrame.y);
      this.renderer.filter.transformAABB(transform, frame);
      frame.fit(bindingDestinationFrame);
      frame.x = Math.round(frame.x * resolution);
      frame.y = Math.round(frame.y * resolution);
      frame.width = Math.round(frame.width * resolution);
      frame.height = Math.round(frame.height * resolution);
    };
    ScissorSystem2.prototype.push = function(maskData) {
      if (!maskData._scissorRectLocal) {
        this.calcScissorRect(maskData);
      }
      var gl = this.renderer.gl;
      if (!maskData._scissorRect) {
        gl.enable(gl.SCISSOR_TEST);
      }
      maskData._scissorCounter++;
      maskData._scissorRect = maskData._scissorRectLocal;
      this._useCurrent();
    };
    ScissorSystem2.prototype.pop = function(maskData) {
      var gl = this.renderer.gl;
      if (maskData) {
        rectPool.push(maskData._scissorRectLocal);
      }
      if (this.getStackLength() > 0) {
        this._useCurrent();
      } else {
        gl.disable(gl.SCISSOR_TEST);
      }
    };
    ScissorSystem2.prototype._useCurrent = function() {
      var rect = this.maskStack[this.maskStack.length - 1]._scissorRect;
      var y;
      if (this.renderer.renderTexture.current) {
        y = rect.y;
      } else {
        y = this.renderer.height - rect.height - rect.y;
      }
      this.renderer.gl.scissor(rect.x, y, rect.width, rect.height);
    };
    return ScissorSystem2;
  }(AbstractMaskSystem)
);
var StencilSystem = (
  /** @class */
  function(_super) {
    __extends(StencilSystem2, _super);
    function StencilSystem2(renderer) {
      var _this = _super.call(this, renderer) || this;
      _this.glConst = settings.ADAPTER.getWebGLRenderingContext().STENCIL_TEST;
      return _this;
    }
    StencilSystem2.prototype.getStackLength = function() {
      var maskData = this.maskStack[this.maskStack.length - 1];
      if (maskData) {
        return maskData._stencilCounter;
      }
      return 0;
    };
    StencilSystem2.prototype.push = function(maskData) {
      var maskObject = maskData.maskObject;
      var gl = this.renderer.gl;
      var prevMaskCount = maskData._stencilCounter;
      if (prevMaskCount === 0) {
        this.renderer.framebuffer.forceStencil();
        gl.clearStencil(0);
        gl.clear(gl.STENCIL_BUFFER_BIT);
        gl.enable(gl.STENCIL_TEST);
      }
      maskData._stencilCounter++;
      var colorMask = maskData._colorMask;
      if (colorMask !== 0) {
        maskData._colorMask = 0;
        gl.colorMask(false, false, false, false);
      }
      gl.stencilFunc(gl.EQUAL, prevMaskCount, 4294967295);
      gl.stencilOp(gl.KEEP, gl.KEEP, gl.INCR);
      maskObject.renderable = true;
      maskObject.render(this.renderer);
      this.renderer.batch.flush();
      maskObject.renderable = false;
      if (colorMask !== 0) {
        maskData._colorMask = colorMask;
        gl.colorMask((colorMask & 1) !== 0, (colorMask & 2) !== 0, (colorMask & 4) !== 0, (colorMask & 8) !== 0);
      }
      this._useCurrent();
    };
    StencilSystem2.prototype.pop = function(maskObject) {
      var gl = this.renderer.gl;
      if (this.getStackLength() === 0) {
        gl.disable(gl.STENCIL_TEST);
      } else {
        var maskData = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
        var colorMask = maskData ? maskData._colorMask : 15;
        if (colorMask !== 0) {
          maskData._colorMask = 0;
          gl.colorMask(false, false, false, false);
        }
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.DECR);
        maskObject.renderable = true;
        maskObject.render(this.renderer);
        this.renderer.batch.flush();
        maskObject.renderable = false;
        if (colorMask !== 0) {
          maskData._colorMask = colorMask;
          gl.colorMask((colorMask & 1) !== 0, (colorMask & 2) !== 0, (colorMask & 4) !== 0, (colorMask & 8) !== 0);
        }
        this._useCurrent();
      }
    };
    StencilSystem2.prototype._useCurrent = function() {
      var gl = this.renderer.gl;
      gl.stencilFunc(gl.EQUAL, this.getStackLength(), 4294967295);
      gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
    };
    return StencilSystem2;
  }(AbstractMaskSystem)
);
var ProjectionSystem = (
  /** @class */
  function() {
    function ProjectionSystem2(renderer) {
      this.renderer = renderer;
      this.destinationFrame = null;
      this.sourceFrame = null;
      this.defaultFrame = null;
      this.projectionMatrix = new Matrix();
      this.transform = null;
    }
    ProjectionSystem2.prototype.update = function(destinationFrame, sourceFrame, resolution, root) {
      this.destinationFrame = destinationFrame || this.destinationFrame || this.defaultFrame;
      this.sourceFrame = sourceFrame || this.sourceFrame || destinationFrame;
      this.calculateProjection(this.destinationFrame, this.sourceFrame, resolution, root);
      if (this.transform) {
        this.projectionMatrix.append(this.transform);
      }
      var renderer = this.renderer;
      renderer.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix;
      renderer.globalUniforms.update();
      if (renderer.shader.shader) {
        renderer.shader.syncUniformGroup(renderer.shader.shader.uniforms.globals);
      }
    };
    ProjectionSystem2.prototype.calculateProjection = function(_destinationFrame, sourceFrame, _resolution, root) {
      var pm = this.projectionMatrix;
      var sign2 = !root ? 1 : -1;
      pm.identity();
      pm.a = 1 / sourceFrame.width * 2;
      pm.d = sign2 * (1 / sourceFrame.height * 2);
      pm.tx = -1 - sourceFrame.x * pm.a;
      pm.ty = -sign2 - sourceFrame.y * pm.d;
    };
    ProjectionSystem2.prototype.setTransform = function(_matrix) {
    };
    ProjectionSystem2.prototype.destroy = function() {
      this.renderer = null;
    };
    return ProjectionSystem2;
  }()
);
var tempRect = new Rectangle();
var tempRect2 = new Rectangle();
var RenderTextureSystem = (
  /** @class */
  function() {
    function RenderTextureSystem2(renderer) {
      this.renderer = renderer;
      this.clearColor = renderer._backgroundColorRgba;
      this.defaultMaskStack = [];
      this.current = null;
      this.sourceFrame = new Rectangle();
      this.destinationFrame = new Rectangle();
      this.viewportFrame = new Rectangle();
    }
    RenderTextureSystem2.prototype.bind = function(renderTexture, sourceFrame, destinationFrame) {
      if (renderTexture === void 0) {
        renderTexture = null;
      }
      var renderer = this.renderer;
      this.current = renderTexture;
      var baseTexture;
      var framebuffer;
      var resolution;
      if (renderTexture) {
        baseTexture = renderTexture.baseTexture;
        resolution = baseTexture.resolution;
        if (!sourceFrame) {
          tempRect.width = renderTexture.frame.width;
          tempRect.height = renderTexture.frame.height;
          sourceFrame = tempRect;
        }
        if (!destinationFrame) {
          tempRect2.x = renderTexture.frame.x;
          tempRect2.y = renderTexture.frame.y;
          tempRect2.width = sourceFrame.width;
          tempRect2.height = sourceFrame.height;
          destinationFrame = tempRect2;
        }
        framebuffer = baseTexture.framebuffer;
      } else {
        resolution = renderer.resolution;
        if (!sourceFrame) {
          tempRect.width = renderer.screen.width;
          tempRect.height = renderer.screen.height;
          sourceFrame = tempRect;
        }
        if (!destinationFrame) {
          destinationFrame = tempRect;
          destinationFrame.width = sourceFrame.width;
          destinationFrame.height = sourceFrame.height;
        }
      }
      var viewportFrame = this.viewportFrame;
      viewportFrame.x = destinationFrame.x * resolution;
      viewportFrame.y = destinationFrame.y * resolution;
      viewportFrame.width = destinationFrame.width * resolution;
      viewportFrame.height = destinationFrame.height * resolution;
      if (!renderTexture) {
        viewportFrame.y = renderer.view.height - (viewportFrame.y + viewportFrame.height);
      }
      viewportFrame.ceil();
      this.renderer.framebuffer.bind(framebuffer, viewportFrame);
      this.renderer.projection.update(destinationFrame, sourceFrame, resolution, !framebuffer);
      if (renderTexture) {
        this.renderer.mask.setMaskStack(baseTexture.maskStack);
      } else {
        this.renderer.mask.setMaskStack(this.defaultMaskStack);
      }
      this.sourceFrame.copyFrom(sourceFrame);
      this.destinationFrame.copyFrom(destinationFrame);
    };
    RenderTextureSystem2.prototype.clear = function(clearColor, mask) {
      if (this.current) {
        clearColor = clearColor || this.current.baseTexture.clearColor;
      } else {
        clearColor = clearColor || this.clearColor;
      }
      var destinationFrame = this.destinationFrame;
      var baseFrame = this.current ? this.current.baseTexture : this.renderer.screen;
      var clearMask = destinationFrame.width !== baseFrame.width || destinationFrame.height !== baseFrame.height;
      if (clearMask) {
        var _a = this.viewportFrame, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        x = Math.round(x);
        y = Math.round(y);
        width = Math.round(width);
        height = Math.round(height);
        this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
        this.renderer.gl.scissor(x, y, width, height);
      }
      this.renderer.framebuffer.clear(clearColor[0], clearColor[1], clearColor[2], clearColor[3], mask);
      if (clearMask) {
        this.renderer.scissor.pop();
      }
    };
    RenderTextureSystem2.prototype.resize = function() {
      this.bind(null);
    };
    RenderTextureSystem2.prototype.reset = function() {
      this.bind(null);
    };
    RenderTextureSystem2.prototype.destroy = function() {
      this.renderer = null;
    };
    return RenderTextureSystem2;
  }()
);
function uboUpdate(_ud, _uv, _renderer, _syncData, buffer) {
  _renderer.buffer.update(buffer);
}
var UBO_TO_SINGLE_SETTERS = {
  float: "\n        data[offset] = v;\n    ",
  vec2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n    ",
  vec3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n    ",
  vec4: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n        data[offset+3] = v[3];\n    ",
  mat2: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n\n        data[offset+4] = v[2];\n        data[offset+5] = v[3];\n    ",
  mat3: "\n        data[offset] = v[0];\n        data[offset+1] = v[1];\n        data[offset+2] = v[2];\n\n        data[offset + 4] = v[3];\n        data[offset + 5] = v[4];\n        data[offset + 6] = v[5];\n\n        data[offset + 8] = v[6];\n        data[offset + 9] = v[7];\n        data[offset + 10] = v[8];\n    ",
  mat4: "\n        for(var i = 0; i < 16; i++)\n        {\n            data[offset + i] = v[i];\n        }\n    "
};
var GLSL_TO_STD40_SIZE = {
  float: 4,
  vec2: 8,
  vec3: 12,
  vec4: 16,
  int: 4,
  ivec2: 8,
  ivec3: 12,
  ivec4: 16,
  uint: 4,
  uvec2: 8,
  uvec3: 12,
  uvec4: 16,
  bool: 4,
  bvec2: 8,
  bvec3: 12,
  bvec4: 16,
  mat2: 16 * 2,
  mat3: 16 * 3,
  mat4: 16 * 4
};
function createUBOElements(uniformData) {
  var uboElements = uniformData.map(function(data) {
    return {
      data,
      offset: 0,
      dataLen: 0,
      dirty: 0
    };
  });
  var size = 0;
  var chunkSize = 0;
  var offset = 0;
  for (var i = 0; i < uboElements.length; i++) {
    var uboElement = uboElements[i];
    size = GLSL_TO_STD40_SIZE[uboElement.data.type];
    if (uboElement.data.size > 1) {
      size = Math.max(size, 16) * uboElement.data.size;
    }
    uboElement.dataLen = size;
    if (chunkSize % size !== 0 && chunkSize < 16) {
      var lineUpValue = chunkSize % size % 16;
      chunkSize += lineUpValue;
      offset += lineUpValue;
    }
    if (chunkSize + size > 16) {
      offset = Math.ceil(offset / 16) * 16;
      uboElement.offset = offset;
      offset += size;
      chunkSize = size;
    } else {
      uboElement.offset = offset;
      chunkSize += size;
      offset += size;
    }
  }
  offset = Math.ceil(offset / 16) * 16;
  return { uboElements, size: offset };
}
function getUBOData(uniforms, uniformData) {
  var usedUniformDatas = [];
  for (var i in uniforms) {
    if (uniformData[i]) {
      usedUniformDatas.push(uniformData[i]);
    }
  }
  usedUniformDatas.sort(function(a, b) {
    return a.index - b.index;
  });
  return usedUniformDatas;
}
function generateUniformBufferSync(group, uniformData) {
  if (!group.autoManage) {
    return { size: 0, syncFunc: uboUpdate };
  }
  var usedUniformDatas = getUBOData(group.uniforms, uniformData);
  var _a = createUBOElements(usedUniformDatas), uboElements = _a.uboElements, size = _a.size;
  var funcFragments = ["\n    var v = null;\n    var v2 = null;\n    var cv = null;\n    var t = 0;\n    var gl = renderer.gl\n    var index = 0;\n    var data = buffer.data;\n    "];
  for (var i = 0; i < uboElements.length; i++) {
    var uboElement = uboElements[i];
    var uniform = group.uniforms[uboElement.data.name];
    var name = uboElement.data.name;
    var parsed = false;
    for (var j = 0; j < uniformParsers.length; j++) {
      var uniformParser = uniformParsers[j];
      if (uniformParser.codeUbo && uniformParser.test(uboElement.data, uniform)) {
        funcFragments.push("offset = " + uboElement.offset / 4 + ";", uniformParsers[j].codeUbo(uboElement.data.name, uniform));
        parsed = true;
        break;
      }
    }
    if (!parsed) {
      if (uboElement.data.size > 1) {
        var size_1 = mapSize(uboElement.data.type);
        var rowSize = Math.max(GLSL_TO_STD40_SIZE[uboElement.data.type] / 16, 1);
        var elementSize = size_1 / rowSize;
        var remainder = (4 - elementSize % 4) % 4;
        funcFragments.push("\n                cv = ud." + name + ".value;\n                v = uv." + name + ";\n                offset = " + uboElement.offset / 4 + ";\n\n                t = 0;\n\n                for(var i=0; i < " + uboElement.data.size * rowSize + "; i++)\n                {\n                    for(var j = 0; j < " + elementSize + "; j++)\n                    {\n                        data[offset++] = v[t++];\n                    }\n                    offset += " + remainder + ";\n                }\n\n                ");
      } else {
        var template = UBO_TO_SINGLE_SETTERS[uboElement.data.type];
        funcFragments.push("\n                cv = ud." + name + ".value;\n                v = uv." + name + ";\n                offset = " + uboElement.offset / 4 + ";\n                " + template + ";\n                ");
      }
    }
  }
  funcFragments.push("\n       renderer.buffer.update(buffer);\n    ");
  return {
    size,
    // eslint-disable-next-line no-new-func
    syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", funcFragments.join("\n"))
  };
}
var IGLUniformData = (
  /** @class */
  /* @__PURE__ */ function() {
    function IGLUniformData2() {
    }
    return IGLUniformData2;
  }()
);
var GLProgram = (
  /** @class */
  function() {
    function GLProgram2(program, uniformData) {
      this.program = program;
      this.uniformData = uniformData;
      this.uniformGroups = {};
      this.uniformDirtyGroups = {};
      this.uniformBufferBindings = {};
    }
    GLProgram2.prototype.destroy = function() {
      this.uniformData = null;
      this.uniformGroups = null;
      this.uniformDirtyGroups = null;
      this.uniformBufferBindings = null;
      this.program = null;
    };
    return GLProgram2;
  }()
);
function getAttributeData(program, gl) {
  var attributes = {};
  var totalAttributes = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
  for (var i = 0; i < totalAttributes; i++) {
    var attribData = gl.getActiveAttrib(program, i);
    if (attribData.name.indexOf("gl_") === 0) {
      continue;
    }
    var type = mapType(gl, attribData.type);
    var data = {
      type,
      name: attribData.name,
      size: mapSize(type),
      location: gl.getAttribLocation(program, attribData.name)
    };
    attributes[attribData.name] = data;
  }
  return attributes;
}
function getUniformData(program, gl) {
  var uniforms = {};
  var totalUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  for (var i = 0; i < totalUniforms; i++) {
    var uniformData = gl.getActiveUniform(program, i);
    var name = uniformData.name.replace(/\[.*?\]$/, "");
    var isArray = !!uniformData.name.match(/\[.*?\]$/);
    var type = mapType(gl, uniformData.type);
    uniforms[name] = {
      name,
      index: i,
      type,
      size: uniformData.size,
      isArray,
      value: defaultValue(type, uniformData.size)
    };
  }
  return uniforms;
}
function generateProgram(gl, program) {
  var glVertShader = compileShader(gl, gl.VERTEX_SHADER, program.vertexSrc);
  var glFragShader = compileShader(gl, gl.FRAGMENT_SHADER, program.fragmentSrc);
  var webGLProgram = gl.createProgram();
  gl.attachShader(webGLProgram, glVertShader);
  gl.attachShader(webGLProgram, glFragShader);
  gl.linkProgram(webGLProgram);
  if (!gl.getProgramParameter(webGLProgram, gl.LINK_STATUS)) {
    logProgramError(gl, webGLProgram, glVertShader, glFragShader);
  }
  program.attributeData = getAttributeData(webGLProgram, gl);
  program.uniformData = getUniformData(webGLProgram, gl);
  if (!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(program.vertexSrc)) {
    var keys = Object.keys(program.attributeData);
    keys.sort(function(a, b) {
      return a > b ? 1 : -1;
    });
    for (var i = 0; i < keys.length; i++) {
      program.attributeData[keys[i]].location = i;
      gl.bindAttribLocation(webGLProgram, i, keys[i]);
    }
    gl.linkProgram(webGLProgram);
  }
  gl.deleteShader(glVertShader);
  gl.deleteShader(glFragShader);
  var uniformData = {};
  for (var i in program.uniformData) {
    var data = program.uniformData[i];
    uniformData[i] = {
      location: gl.getUniformLocation(webGLProgram, i),
      value: defaultValue(data.type, data.size)
    };
  }
  var glProgram = new GLProgram(webGLProgram, uniformData);
  return glProgram;
}
var UID = 0;
var defaultSyncData = { textureCount: 0, uboCount: 0 };
var ShaderSystem = (
  /** @class */
  function() {
    function ShaderSystem2(renderer) {
      this.destroyed = false;
      this.renderer = renderer;
      this.systemCheck();
      this.gl = null;
      this.shader = null;
      this.program = null;
      this.cache = {};
      this._uboCache = {};
      this.id = UID++;
    }
    ShaderSystem2.prototype.systemCheck = function() {
      if (!unsafeEvalSupported()) {
        throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.");
      }
    };
    ShaderSystem2.prototype.contextChange = function(gl) {
      this.gl = gl;
      this.reset();
    };
    ShaderSystem2.prototype.bind = function(shader, dontSync) {
      shader.uniforms.globals = this.renderer.globalUniforms;
      var program = shader.program;
      var glProgram = program.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(shader);
      this.shader = shader;
      if (this.program !== program) {
        this.program = program;
        this.gl.useProgram(glProgram.program);
      }
      if (!dontSync) {
        defaultSyncData.textureCount = 0;
        defaultSyncData.uboCount = 0;
        this.syncUniformGroup(shader.uniformGroup, defaultSyncData);
      }
      return glProgram;
    };
    ShaderSystem2.prototype.setUniforms = function(uniforms) {
      var shader = this.shader.program;
      var glProgram = shader.glPrograms[this.renderer.CONTEXT_UID];
      shader.syncUniforms(glProgram.uniformData, uniforms, this.renderer);
    };
    ShaderSystem2.prototype.syncUniformGroup = function(group, syncData) {
      var glProgram = this.getGlProgram();
      if (!group.static || group.dirtyId !== glProgram.uniformDirtyGroups[group.id]) {
        glProgram.uniformDirtyGroups[group.id] = group.dirtyId;
        this.syncUniforms(group, glProgram, syncData);
      }
    };
    ShaderSystem2.prototype.syncUniforms = function(group, glProgram, syncData) {
      var syncFunc = group.syncUniforms[this.shader.program.id] || this.createSyncGroups(group);
      syncFunc(glProgram.uniformData, group.uniforms, this.renderer, syncData);
    };
    ShaderSystem2.prototype.createSyncGroups = function(group) {
      var id = this.getSignature(group, this.shader.program.uniformData, "u");
      if (!this.cache[id]) {
        this.cache[id] = generateUniformsSync(group, this.shader.program.uniformData);
      }
      group.syncUniforms[this.shader.program.id] = this.cache[id];
      return group.syncUniforms[this.shader.program.id];
    };
    ShaderSystem2.prototype.syncUniformBufferGroup = function(group, name) {
      var glProgram = this.getGlProgram();
      if (!group.static || group.dirtyId !== 0 || !glProgram.uniformGroups[group.id]) {
        group.dirtyId = 0;
        var syncFunc = glProgram.uniformGroups[group.id] || this.createSyncBufferGroup(group, glProgram, name);
        group.buffer.update();
        syncFunc(glProgram.uniformData, group.uniforms, this.renderer, defaultSyncData, group.buffer);
      }
      this.renderer.buffer.bindBufferBase(group.buffer, glProgram.uniformBufferBindings[name]);
    };
    ShaderSystem2.prototype.createSyncBufferGroup = function(group, glProgram, name) {
      var gl = this.renderer.gl;
      this.renderer.buffer.bind(group.buffer);
      var uniformBlockIndex = this.gl.getUniformBlockIndex(glProgram.program, name);
      glProgram.uniformBufferBindings[name] = this.shader.uniformBindCount;
      gl.uniformBlockBinding(glProgram.program, uniformBlockIndex, this.shader.uniformBindCount);
      this.shader.uniformBindCount++;
      var id = this.getSignature(group, this.shader.program.uniformData, "ubo");
      var uboData = this._uboCache[id];
      if (!uboData) {
        uboData = this._uboCache[id] = generateUniformBufferSync(group, this.shader.program.uniformData);
      }
      if (group.autoManage) {
        var data = new Float32Array(uboData.size / 4);
        group.buffer.update(data);
      }
      glProgram.uniformGroups[group.id] = uboData.syncFunc;
      return glProgram.uniformGroups[group.id];
    };
    ShaderSystem2.prototype.getSignature = function(group, uniformData, preFix) {
      var uniforms = group.uniforms;
      var strings = [preFix + "-"];
      for (var i in uniforms) {
        strings.push(i);
        if (uniformData[i]) {
          strings.push(uniformData[i].type);
        }
      }
      return strings.join("-");
    };
    ShaderSystem2.prototype.getGlProgram = function() {
      if (this.shader) {
        return this.shader.program.glPrograms[this.renderer.CONTEXT_UID];
      }
      return null;
    };
    ShaderSystem2.prototype.generateProgram = function(shader) {
      var gl = this.gl;
      var program = shader.program;
      var glProgram = generateProgram(gl, program);
      program.glPrograms[this.renderer.CONTEXT_UID] = glProgram;
      return glProgram;
    };
    ShaderSystem2.prototype.reset = function() {
      this.program = null;
      this.shader = null;
    };
    ShaderSystem2.prototype.destroy = function() {
      this.renderer = null;
      this.destroyed = true;
    };
    return ShaderSystem2;
  }()
);
function mapWebGLBlendModesToPixi(gl, array) {
  if (array === void 0) {
    array = [];
  }
  array[BLEND_MODES2.NORMAL] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.ADD] = [gl.ONE, gl.ONE];
  array[BLEND_MODES2.MULTIPLY] = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.SCREEN] = [gl.ONE, gl.ONE_MINUS_SRC_COLOR, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.OVERLAY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.DARKEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.LIGHTEN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.COLOR_DODGE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.COLOR_BURN] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.HARD_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.SOFT_LIGHT] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.DIFFERENCE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.EXCLUSION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.HUE] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.SATURATION] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.COLOR] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.LUMINOSITY] = [gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.NONE] = [0, 0];
  array[BLEND_MODES2.NORMAL_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.ADD_NPM] = [gl.SRC_ALPHA, gl.ONE, gl.ONE, gl.ONE];
  array[BLEND_MODES2.SCREEN_NPM] = [gl.SRC_ALPHA, gl.ONE_MINUS_SRC_COLOR, gl.ONE, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.SRC_IN] = [gl.DST_ALPHA, gl.ZERO];
  array[BLEND_MODES2.SRC_OUT] = [gl.ONE_MINUS_DST_ALPHA, gl.ZERO];
  array[BLEND_MODES2.SRC_ATOP] = [gl.DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.DST_OVER] = [gl.ONE_MINUS_DST_ALPHA, gl.ONE];
  array[BLEND_MODES2.DST_IN] = [gl.ZERO, gl.SRC_ALPHA];
  array[BLEND_MODES2.DST_OUT] = [gl.ZERO, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.DST_ATOP] = [gl.ONE_MINUS_DST_ALPHA, gl.SRC_ALPHA];
  array[BLEND_MODES2.XOR] = [gl.ONE_MINUS_DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA];
  array[BLEND_MODES2.SUBTRACT] = [gl.ONE, gl.ONE, gl.ONE, gl.ONE, gl.FUNC_REVERSE_SUBTRACT, gl.FUNC_ADD];
  return array;
}
var BLEND = 0;
var OFFSET = 1;
var CULLING = 2;
var DEPTH_TEST = 3;
var WINDING = 4;
var DEPTH_MASK = 5;
var StateSystem = (
  /** @class */
  function() {
    function StateSystem2() {
      this.gl = null;
      this.stateId = 0;
      this.polygonOffset = 0;
      this.blendMode = BLEND_MODES2.NONE;
      this._blendEq = false;
      this.map = [];
      this.map[BLEND] = this.setBlend;
      this.map[OFFSET] = this.setOffset;
      this.map[CULLING] = this.setCullFace;
      this.map[DEPTH_TEST] = this.setDepthTest;
      this.map[WINDING] = this.setFrontFace;
      this.map[DEPTH_MASK] = this.setDepthMask;
      this.checks = [];
      this.defaultState = new State();
      this.defaultState.blend = true;
    }
    StateSystem2.prototype.contextChange = function(gl) {
      this.gl = gl;
      this.blendModes = mapWebGLBlendModesToPixi(gl);
      this.set(this.defaultState);
      this.reset();
    };
    StateSystem2.prototype.set = function(state) {
      state = state || this.defaultState;
      if (this.stateId !== state.data) {
        var diff = this.stateId ^ state.data;
        var i = 0;
        while (diff) {
          if (diff & 1) {
            this.map[i].call(this, !!(state.data & 1 << i));
          }
          diff = diff >> 1;
          i++;
        }
        this.stateId = state.data;
      }
      for (var i = 0; i < this.checks.length; i++) {
        this.checks[i](this, state);
      }
    };
    StateSystem2.prototype.forceState = function(state) {
      state = state || this.defaultState;
      for (var i = 0; i < this.map.length; i++) {
        this.map[i].call(this, !!(state.data & 1 << i));
      }
      for (var i = 0; i < this.checks.length; i++) {
        this.checks[i](this, state);
      }
      this.stateId = state.data;
    };
    StateSystem2.prototype.setBlend = function(value) {
      this.updateCheck(StateSystem2.checkBlendMode, value);
      this.gl[value ? "enable" : "disable"](this.gl.BLEND);
    };
    StateSystem2.prototype.setOffset = function(value) {
      this.updateCheck(StateSystem2.checkPolygonOffset, value);
      this.gl[value ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL);
    };
    StateSystem2.prototype.setDepthTest = function(value) {
      this.gl[value ? "enable" : "disable"](this.gl.DEPTH_TEST);
    };
    StateSystem2.prototype.setDepthMask = function(value) {
      this.gl.depthMask(value);
    };
    StateSystem2.prototype.setCullFace = function(value) {
      this.gl[value ? "enable" : "disable"](this.gl.CULL_FACE);
    };
    StateSystem2.prototype.setFrontFace = function(value) {
      this.gl.frontFace(this.gl[value ? "CW" : "CCW"]);
    };
    StateSystem2.prototype.setBlendMode = function(value) {
      if (value === this.blendMode) {
        return;
      }
      this.blendMode = value;
      var mode = this.blendModes[value];
      var gl = this.gl;
      if (mode.length === 2) {
        gl.blendFunc(mode[0], mode[1]);
      } else {
        gl.blendFuncSeparate(mode[0], mode[1], mode[2], mode[3]);
      }
      if (mode.length === 6) {
        this._blendEq = true;
        gl.blendEquationSeparate(mode[4], mode[5]);
      } else if (this._blendEq) {
        this._blendEq = false;
        gl.blendEquationSeparate(gl.FUNC_ADD, gl.FUNC_ADD);
      }
    };
    StateSystem2.prototype.setPolygonOffset = function(value, scale) {
      this.gl.polygonOffset(value, scale);
    };
    StateSystem2.prototype.reset = function() {
      this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, false);
      this.forceState(this.defaultState);
      this._blendEq = true;
      this.blendMode = -1;
      this.setBlendMode(0);
    };
    StateSystem2.prototype.updateCheck = function(func, value) {
      var index = this.checks.indexOf(func);
      if (value && index === -1) {
        this.checks.push(func);
      } else if (!value && index !== -1) {
        this.checks.splice(index, 1);
      }
    };
    StateSystem2.checkBlendMode = function(system, state) {
      system.setBlendMode(state.blendMode);
    };
    StateSystem2.checkPolygonOffset = function(system, state) {
      system.setPolygonOffset(1, state.polygonOffset);
    };
    StateSystem2.prototype.destroy = function() {
      this.gl = null;
    };
    return StateSystem2;
  }()
);
var TextureGCSystem = (
  /** @class */
  function() {
    function TextureGCSystem2(renderer) {
      this.renderer = renderer;
      this.count = 0;
      this.checkCount = 0;
      this.maxIdle = settings.GC_MAX_IDLE;
      this.checkCountMax = settings.GC_MAX_CHECK_COUNT;
      this.mode = settings.GC_MODE;
    }
    TextureGCSystem2.prototype.postrender = function() {
      if (!this.renderer.renderingToScreen) {
        return;
      }
      this.count++;
      if (this.mode === GC_MODES2.MANUAL) {
        return;
      }
      this.checkCount++;
      if (this.checkCount > this.checkCountMax) {
        this.checkCount = 0;
        this.run();
      }
    };
    TextureGCSystem2.prototype.run = function() {
      var tm = this.renderer.texture;
      var managedTextures = tm.managedTextures;
      var wasRemoved = false;
      for (var i = 0; i < managedTextures.length; i++) {
        var texture = managedTextures[i];
        if (!texture.framebuffer && this.count - texture.touched > this.maxIdle) {
          tm.destroyTexture(texture, true);
          managedTextures[i] = null;
          wasRemoved = true;
        }
      }
      if (wasRemoved) {
        var j = 0;
        for (var i = 0; i < managedTextures.length; i++) {
          if (managedTextures[i] !== null) {
            managedTextures[j++] = managedTextures[i];
          }
        }
        managedTextures.length = j;
      }
    };
    TextureGCSystem2.prototype.unload = function(displayObject) {
      var tm = this.renderer.texture;
      var texture = displayObject._texture;
      if (texture && !texture.framebuffer) {
        tm.destroyTexture(texture);
      }
      for (var i = displayObject.children.length - 1; i >= 0; i--) {
        this.unload(displayObject.children[i]);
      }
    };
    TextureGCSystem2.prototype.destroy = function() {
      this.renderer = null;
    };
    return TextureGCSystem2;
  }()
);
function mapTypeAndFormatToInternalFormat(gl) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
  var table;
  if ("WebGL2RenderingContext" in globalThis && gl instanceof globalThis.WebGL2RenderingContext) {
    table = (_a = {}, _a[TYPES2.UNSIGNED_BYTE] = (_b = {}, _b[FORMATS2.RGBA] = gl.RGBA8, _b[FORMATS2.RGB] = gl.RGB8, _b[FORMATS2.RG] = gl.RG8, _b[FORMATS2.RED] = gl.R8, _b[FORMATS2.RGBA_INTEGER] = gl.RGBA8UI, _b[FORMATS2.RGB_INTEGER] = gl.RGB8UI, _b[FORMATS2.RG_INTEGER] = gl.RG8UI, _b[FORMATS2.RED_INTEGER] = gl.R8UI, _b[FORMATS2.ALPHA] = gl.ALPHA, _b[FORMATS2.LUMINANCE] = gl.LUMINANCE, _b[FORMATS2.LUMINANCE_ALPHA] = gl.LUMINANCE_ALPHA, _b), _a[TYPES2.BYTE] = (_c = {}, _c[FORMATS2.RGBA] = gl.RGBA8_SNORM, _c[FORMATS2.RGB] = gl.RGB8_SNORM, _c[FORMATS2.RG] = gl.RG8_SNORM, _c[FORMATS2.RED] = gl.R8_SNORM, _c[FORMATS2.RGBA_INTEGER] = gl.RGBA8I, _c[FORMATS2.RGB_INTEGER] = gl.RGB8I, _c[FORMATS2.RG_INTEGER] = gl.RG8I, _c[FORMATS2.RED_INTEGER] = gl.R8I, _c), _a[TYPES2.UNSIGNED_SHORT] = (_d = {}, _d[FORMATS2.RGBA_INTEGER] = gl.RGBA16UI, _d[FORMATS2.RGB_INTEGER] = gl.RGB16UI, _d[FORMATS2.RG_INTEGER] = gl.RG16UI, _d[FORMATS2.RED_INTEGER] = gl.R16UI, _d[FORMATS2.DEPTH_COMPONENT] = gl.DEPTH_COMPONENT16, _d), _a[TYPES2.SHORT] = (_e = {}, _e[FORMATS2.RGBA_INTEGER] = gl.RGBA16I, _e[FORMATS2.RGB_INTEGER] = gl.RGB16I, _e[FORMATS2.RG_INTEGER] = gl.RG16I, _e[FORMATS2.RED_INTEGER] = gl.R16I, _e), _a[TYPES2.UNSIGNED_INT] = (_f = {}, _f[FORMATS2.RGBA_INTEGER] = gl.RGBA32UI, _f[FORMATS2.RGB_INTEGER] = gl.RGB32UI, _f[FORMATS2.RG_INTEGER] = gl.RG32UI, _f[FORMATS2.RED_INTEGER] = gl.R32UI, _f[FORMATS2.DEPTH_COMPONENT] = gl.DEPTH_COMPONENT24, _f), _a[TYPES2.INT] = (_g = {}, _g[FORMATS2.RGBA_INTEGER] = gl.RGBA32I, _g[FORMATS2.RGB_INTEGER] = gl.RGB32I, _g[FORMATS2.RG_INTEGER] = gl.RG32I, _g[FORMATS2.RED_INTEGER] = gl.R32I, _g), _a[TYPES2.FLOAT] = (_h = {}, _h[FORMATS2.RGBA] = gl.RGBA32F, _h[FORMATS2.RGB] = gl.RGB32F, _h[FORMATS2.RG] = gl.RG32F, _h[FORMATS2.RED] = gl.R32F, _h[FORMATS2.DEPTH_COMPONENT] = gl.DEPTH_COMPONENT32F, _h), _a[TYPES2.HALF_FLOAT] = (_j = {}, _j[FORMATS2.RGBA] = gl.RGBA16F, _j[FORMATS2.RGB] = gl.RGB16F, _j[FORMATS2.RG] = gl.RG16F, _j[FORMATS2.RED] = gl.R16F, _j), _a[TYPES2.UNSIGNED_SHORT_5_6_5] = (_k = {}, _k[FORMATS2.RGB] = gl.RGB565, _k), _a[TYPES2.UNSIGNED_SHORT_4_4_4_4] = (_l = {}, _l[FORMATS2.RGBA] = gl.RGBA4, _l), _a[TYPES2.UNSIGNED_SHORT_5_5_5_1] = (_m = {}, _m[FORMATS2.RGBA] = gl.RGB5_A1, _m), _a[TYPES2.UNSIGNED_INT_2_10_10_10_REV] = (_o = {}, _o[FORMATS2.RGBA] = gl.RGB10_A2, _o[FORMATS2.RGBA_INTEGER] = gl.RGB10_A2UI, _o), _a[TYPES2.UNSIGNED_INT_10F_11F_11F_REV] = (_p = {}, _p[FORMATS2.RGB] = gl.R11F_G11F_B10F, _p), _a[TYPES2.UNSIGNED_INT_5_9_9_9_REV] = (_q = {}, _q[FORMATS2.RGB] = gl.RGB9_E5, _q), _a[TYPES2.UNSIGNED_INT_24_8] = (_r = {}, _r[FORMATS2.DEPTH_STENCIL] = gl.DEPTH24_STENCIL8, _r), _a[TYPES2.FLOAT_32_UNSIGNED_INT_24_8_REV] = (_s = {}, _s[FORMATS2.DEPTH_STENCIL] = gl.DEPTH32F_STENCIL8, _s), _a);
  } else {
    table = (_t = {}, _t[TYPES2.UNSIGNED_BYTE] = (_u = {}, _u[FORMATS2.RGBA] = gl.RGBA, _u[FORMATS2.RGB] = gl.RGB, _u[FORMATS2.ALPHA] = gl.ALPHA, _u[FORMATS2.LUMINANCE] = gl.LUMINANCE, _u[FORMATS2.LUMINANCE_ALPHA] = gl.LUMINANCE_ALPHA, _u), _t[TYPES2.UNSIGNED_SHORT_5_6_5] = (_v = {}, _v[FORMATS2.RGB] = gl.RGB, _v), _t[TYPES2.UNSIGNED_SHORT_4_4_4_4] = (_w = {}, _w[FORMATS2.RGBA] = gl.RGBA, _w), _t[TYPES2.UNSIGNED_SHORT_5_5_5_1] = (_x = {}, _x[FORMATS2.RGBA] = gl.RGBA, _x), _t);
  }
  return table;
}
var GLTexture = (
  /** @class */
  /* @__PURE__ */ function() {
    function GLTexture2(texture) {
      this.texture = texture;
      this.width = -1;
      this.height = -1;
      this.dirtyId = -1;
      this.dirtyStyleId = -1;
      this.mipmap = false;
      this.wrapMode = 33071;
      this.type = TYPES2.UNSIGNED_BYTE;
      this.internalFormat = FORMATS2.RGBA;
      this.samplerType = 0;
    }
    return GLTexture2;
  }()
);
var TextureSystem = (
  /** @class */
  function() {
    function TextureSystem2(renderer) {
      this.renderer = renderer;
      this.boundTextures = [];
      this.currentLocation = -1;
      this.managedTextures = [];
      this._unknownBoundTextures = false;
      this.unknownTexture = new BaseTexture();
      this.hasIntegerTextures = false;
    }
    TextureSystem2.prototype.contextChange = function() {
      var gl = this.gl = this.renderer.gl;
      this.CONTEXT_UID = this.renderer.CONTEXT_UID;
      this.webGLVersion = this.renderer.context.webGLVersion;
      this.internalFormats = mapTypeAndFormatToInternalFormat(gl);
      var maxTextures = gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS);
      this.boundTextures.length = maxTextures;
      for (var i = 0; i < maxTextures; i++) {
        this.boundTextures[i] = null;
      }
      this.emptyTextures = {};
      var emptyTexture2D = new GLTexture(gl.createTexture());
      gl.bindTexture(gl.TEXTURE_2D, emptyTexture2D.texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array(4));
      this.emptyTextures[gl.TEXTURE_2D] = emptyTexture2D;
      this.emptyTextures[gl.TEXTURE_CUBE_MAP] = new GLTexture(gl.createTexture());
      gl.bindTexture(gl.TEXTURE_CUBE_MAP, this.emptyTextures[gl.TEXTURE_CUBE_MAP].texture);
      for (var i = 0; i < 6; i++) {
        gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      }
      gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_CUBE_MAP, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      for (var i = 0; i < this.boundTextures.length; i++) {
        this.bind(null, i);
      }
    };
    TextureSystem2.prototype.bind = function(texture, location) {
      if (location === void 0) {
        location = 0;
      }
      var gl = this.gl;
      texture = texture === null || texture === void 0 ? void 0 : texture.castToBaseTexture();
      if (texture && texture.valid && !texture.parentTextureArray) {
        texture.touched = this.renderer.textureGC.count;
        var glTexture = texture._glTextures[this.CONTEXT_UID] || this.initTexture(texture);
        if (this.boundTextures[location] !== texture) {
          if (this.currentLocation !== location) {
            this.currentLocation = location;
            gl.activeTexture(gl.TEXTURE0 + location);
          }
          gl.bindTexture(texture.target, glTexture.texture);
        }
        if (glTexture.dirtyId !== texture.dirtyId) {
          if (this.currentLocation !== location) {
            this.currentLocation = location;
            gl.activeTexture(gl.TEXTURE0 + location);
          }
          this.updateTexture(texture);
        }
        this.boundTextures[location] = texture;
      } else {
        if (this.currentLocation !== location) {
          this.currentLocation = location;
          gl.activeTexture(gl.TEXTURE0 + location);
        }
        gl.bindTexture(gl.TEXTURE_2D, this.emptyTextures[gl.TEXTURE_2D].texture);
        this.boundTextures[location] = null;
      }
    };
    TextureSystem2.prototype.reset = function() {
      this._unknownBoundTextures = true;
      this.hasIntegerTextures = false;
      this.currentLocation = -1;
      for (var i = 0; i < this.boundTextures.length; i++) {
        this.boundTextures[i] = this.unknownTexture;
      }
    };
    TextureSystem2.prototype.unbind = function(texture) {
      var _a = this, gl = _a.gl, boundTextures = _a.boundTextures;
      if (this._unknownBoundTextures) {
        this._unknownBoundTextures = false;
        for (var i = 0; i < boundTextures.length; i++) {
          if (boundTextures[i] === this.unknownTexture) {
            this.bind(null, i);
          }
        }
      }
      for (var i = 0; i < boundTextures.length; i++) {
        if (boundTextures[i] === texture) {
          if (this.currentLocation !== i) {
            gl.activeTexture(gl.TEXTURE0 + i);
            this.currentLocation = i;
          }
          gl.bindTexture(texture.target, this.emptyTextures[texture.target].texture);
          boundTextures[i] = null;
        }
      }
    };
    TextureSystem2.prototype.ensureSamplerType = function(maxTextures) {
      var _a = this, boundTextures = _a.boundTextures, hasIntegerTextures = _a.hasIntegerTextures, CONTEXT_UID = _a.CONTEXT_UID;
      if (!hasIntegerTextures) {
        return;
      }
      for (var i = maxTextures - 1; i >= 0; --i) {
        var tex = boundTextures[i];
        if (tex) {
          var glTexture = tex._glTextures[CONTEXT_UID];
          if (glTexture.samplerType !== SAMPLER_TYPES2.FLOAT) {
            this.renderer.texture.unbind(tex);
          }
        }
      }
    };
    TextureSystem2.prototype.initTexture = function(texture) {
      var glTexture = new GLTexture(this.gl.createTexture());
      glTexture.dirtyId = -1;
      texture._glTextures[this.CONTEXT_UID] = glTexture;
      this.managedTextures.push(texture);
      texture.on("dispose", this.destroyTexture, this);
      return glTexture;
    };
    TextureSystem2.prototype.initTextureType = function(texture, glTexture) {
      var _a, _b;
      glTexture.internalFormat = (_b = (_a = this.internalFormats[texture.type]) === null || _a === void 0 ? void 0 : _a[texture.format]) !== null && _b !== void 0 ? _b : texture.format;
      if (this.webGLVersion === 2 && texture.type === TYPES2.HALF_FLOAT) {
        glTexture.type = this.gl.HALF_FLOAT;
      } else {
        glTexture.type = texture.type;
      }
    };
    TextureSystem2.prototype.updateTexture = function(texture) {
      var glTexture = texture._glTextures[this.CONTEXT_UID];
      if (!glTexture) {
        return;
      }
      var renderer = this.renderer;
      this.initTextureType(texture, glTexture);
      if (texture.resource && texture.resource.upload(renderer, texture, glTexture)) {
        if (glTexture.samplerType !== SAMPLER_TYPES2.FLOAT) {
          this.hasIntegerTextures = true;
        }
      } else {
        var width = texture.realWidth;
        var height = texture.realHeight;
        var gl = renderer.gl;
        if (glTexture.width !== width || glTexture.height !== height || glTexture.dirtyId < 0) {
          glTexture.width = width;
          glTexture.height = height;
          gl.texImage2D(texture.target, 0, glTexture.internalFormat, width, height, 0, texture.format, glTexture.type, null);
        }
      }
      if (texture.dirtyStyleId !== glTexture.dirtyStyleId) {
        this.updateTextureStyle(texture);
      }
      glTexture.dirtyId = texture.dirtyId;
    };
    TextureSystem2.prototype.destroyTexture = function(texture, skipRemove) {
      var gl = this.gl;
      texture = texture.castToBaseTexture();
      if (texture._glTextures[this.CONTEXT_UID]) {
        this.unbind(texture);
        gl.deleteTexture(texture._glTextures[this.CONTEXT_UID].texture);
        texture.off("dispose", this.destroyTexture, this);
        delete texture._glTextures[this.CONTEXT_UID];
        if (!skipRemove) {
          var i = this.managedTextures.indexOf(texture);
          if (i !== -1) {
            removeItems(this.managedTextures, i, 1);
          }
        }
      }
    };
    TextureSystem2.prototype.updateTextureStyle = function(texture) {
      var glTexture = texture._glTextures[this.CONTEXT_UID];
      if (!glTexture) {
        return;
      }
      if ((texture.mipmap === MIPMAP_MODES2.POW2 || this.webGLVersion !== 2) && !texture.isPowerOfTwo) {
        glTexture.mipmap = false;
      } else {
        glTexture.mipmap = texture.mipmap >= 1;
      }
      if (this.webGLVersion !== 2 && !texture.isPowerOfTwo) {
        glTexture.wrapMode = WRAP_MODES2.CLAMP;
      } else {
        glTexture.wrapMode = texture.wrapMode;
      }
      if (texture.resource && texture.resource.style(this.renderer, texture, glTexture))
        ;
      else {
        this.setStyle(texture, glTexture);
      }
      glTexture.dirtyStyleId = texture.dirtyStyleId;
    };
    TextureSystem2.prototype.setStyle = function(texture, glTexture) {
      var gl = this.gl;
      if (glTexture.mipmap && texture.mipmap !== MIPMAP_MODES2.ON_MANUAL) {
        gl.generateMipmap(texture.target);
      }
      gl.texParameteri(texture.target, gl.TEXTURE_WRAP_S, glTexture.wrapMode);
      gl.texParameteri(texture.target, gl.TEXTURE_WRAP_T, glTexture.wrapMode);
      if (glTexture.mipmap) {
        gl.texParameteri(texture.target, gl.TEXTURE_MIN_FILTER, texture.scaleMode === SCALE_MODES2.LINEAR ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);
        var anisotropicExt = this.renderer.context.extensions.anisotropicFiltering;
        if (anisotropicExt && texture.anisotropicLevel > 0 && texture.scaleMode === SCALE_MODES2.LINEAR) {
          var level = Math.min(texture.anisotropicLevel, gl.getParameter(anisotropicExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
          gl.texParameterf(texture.target, anisotropicExt.TEXTURE_MAX_ANISOTROPY_EXT, level);
        }
      } else {
        gl.texParameteri(texture.target, gl.TEXTURE_MIN_FILTER, texture.scaleMode === SCALE_MODES2.LINEAR ? gl.LINEAR : gl.NEAREST);
      }
      gl.texParameteri(texture.target, gl.TEXTURE_MAG_FILTER, texture.scaleMode === SCALE_MODES2.LINEAR ? gl.LINEAR : gl.NEAREST);
    };
    TextureSystem2.prototype.destroy = function() {
      this.renderer = null;
    };
    return TextureSystem2;
  }()
);
var _systems = {
  __proto__: null,
  FilterSystem,
  BatchSystem,
  ContextSystem,
  FramebufferSystem,
  GeometrySystem,
  MaskSystem,
  ScissorSystem,
  StencilSystem,
  ProjectionSystem,
  RenderTextureSystem,
  ShaderSystem,
  StateSystem,
  TextureGCSystem,
  TextureSystem
};
var tempMatrix = new Matrix();
var AbstractRenderer = (
  /** @class */
  function(_super) {
    __extends(AbstractRenderer2, _super);
    function AbstractRenderer2(type, options) {
      if (type === void 0) {
        type = RENDERER_TYPE2.UNKNOWN;
      }
      var _this = _super.call(this) || this;
      options = Object.assign({}, settings.RENDER_OPTIONS, options);
      _this.options = options;
      _this.type = type;
      _this.screen = new Rectangle(0, 0, options.width, options.height);
      _this.view = options.view || settings.ADAPTER.createCanvas();
      _this.resolution = options.resolution || settings.RESOLUTION;
      _this.useContextAlpha = options.useContextAlpha;
      _this.autoDensity = !!options.autoDensity;
      _this.preserveDrawingBuffer = options.preserveDrawingBuffer;
      _this.clearBeforeRender = options.clearBeforeRender;
      _this._backgroundColor = 0;
      _this._backgroundColorRgba = [0, 0, 0, 1];
      _this._backgroundColorString = "#000000";
      _this.backgroundColor = options.backgroundColor || _this._backgroundColor;
      _this.backgroundAlpha = options.backgroundAlpha;
      if (options.transparent !== void 0) {
        deprecation("6.0.0", "Option transparent is deprecated, please use backgroundAlpha instead.");
        _this.useContextAlpha = options.transparent;
        _this.backgroundAlpha = options.transparent ? 0 : 1;
      }
      _this._lastObjectRendered = null;
      _this.plugins = {};
      return _this;
    }
    AbstractRenderer2.prototype.initPlugins = function(staticMap) {
      for (var o in staticMap) {
        this.plugins[o] = new staticMap[o](this);
      }
    };
    Object.defineProperty(AbstractRenderer2.prototype, "width", {
      /**
       * Same as view.width, actual number of pixels in the canvas by horizontal.
       * @member {number}
       * @readonly
       * @default 800
       */
      get: function() {
        return this.view.width;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(AbstractRenderer2.prototype, "height", {
      /**
       * Same as view.height, actual number of pixels in the canvas by vertical.
       * @member {number}
       * @readonly
       * @default 600
       */
      get: function() {
        return this.view.height;
      },
      enumerable: false,
      configurable: true
    });
    AbstractRenderer2.prototype.resize = function(desiredScreenWidth, desiredScreenHeight) {
      this.view.width = Math.round(desiredScreenWidth * this.resolution);
      this.view.height = Math.round(desiredScreenHeight * this.resolution);
      var screenWidth = this.view.width / this.resolution;
      var screenHeight = this.view.height / this.resolution;
      this.screen.width = screenWidth;
      this.screen.height = screenHeight;
      if (this.autoDensity) {
        this.view.style.width = screenWidth + "px";
        this.view.style.height = screenHeight + "px";
      }
      this.emit("resize", screenWidth, screenHeight);
    };
    AbstractRenderer2.prototype.generateTexture = function(displayObject, options, resolution, region) {
      if (options === void 0) {
        options = {};
      }
      if (typeof options === "number") {
        deprecation("6.1.0", "generateTexture options (scaleMode, resolution, region) are now object options.");
        options = { scaleMode: options, resolution, region };
      }
      var manualRegion = options.region, textureOptions = __rest(options, ["region"]);
      region = manualRegion || displayObject.getLocalBounds(null, true);
      if (region.width === 0) {
        region.width = 1;
      }
      if (region.height === 0) {
        region.height = 1;
      }
      var renderTexture = RenderTexture.create(__assign2({ width: region.width, height: region.height }, textureOptions));
      tempMatrix.tx = -region.x;
      tempMatrix.ty = -region.y;
      this.render(displayObject, {
        renderTexture,
        clear: false,
        transform: tempMatrix,
        skipUpdateTransform: !!displayObject.parent
      });
      return renderTexture;
    };
    AbstractRenderer2.prototype.destroy = function(removeView) {
      for (var o in this.plugins) {
        this.plugins[o].destroy();
        this.plugins[o] = null;
      }
      if (removeView && this.view.parentNode) {
        this.view.parentNode.removeChild(this.view);
      }
      var thisAny = this;
      thisAny.plugins = null;
      thisAny.type = RENDERER_TYPE2.UNKNOWN;
      thisAny.view = null;
      thisAny.screen = null;
      thisAny._tempDisplayObjectParent = null;
      thisAny.options = null;
      this._backgroundColorRgba = null;
      this._backgroundColorString = null;
      this._lastObjectRendered = null;
    };
    Object.defineProperty(AbstractRenderer2.prototype, "backgroundColor", {
      /**
       * The background color to fill if not transparent
       * @member {number}
       */
      get: function() {
        return this._backgroundColor;
      },
      set: function(value) {
        this._backgroundColor = value;
        this._backgroundColorString = hex2string(value);
        hex2rgb(value, this._backgroundColorRgba);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(AbstractRenderer2.prototype, "backgroundAlpha", {
      /**
       * The background color alpha. Setting this to 0 will make the canvas transparent.
       * @member {number}
       */
      get: function() {
        return this._backgroundColorRgba[3];
      },
      set: function(value) {
        this._backgroundColorRgba[3] = value;
      },
      enumerable: false,
      configurable: true
    });
    return AbstractRenderer2;
  }(import_eventemitter3.default)
);
var GLBuffer = (
  /** @class */
  /* @__PURE__ */ function() {
    function GLBuffer2(buffer) {
      this.buffer = buffer || null;
      this.updateID = -1;
      this.byteLength = -1;
      this.refCount = 0;
    }
    return GLBuffer2;
  }()
);
var BufferSystem = (
  /** @class */
  function() {
    function BufferSystem2(renderer) {
      this.renderer = renderer;
      this.managedBuffers = {};
      this.boundBufferBases = {};
    }
    BufferSystem2.prototype.destroy = function() {
      this.renderer = null;
    };
    BufferSystem2.prototype.contextChange = function() {
      this.disposeAll(true);
      this.gl = this.renderer.gl;
      this.CONTEXT_UID = this.renderer.CONTEXT_UID;
    };
    BufferSystem2.prototype.bind = function(buffer) {
      var _a = this, gl = _a.gl, CONTEXT_UID = _a.CONTEXT_UID;
      var glBuffer = buffer._glBuffers[CONTEXT_UID] || this.createGLBuffer(buffer);
      gl.bindBuffer(buffer.type, glBuffer.buffer);
    };
    BufferSystem2.prototype.bindBufferBase = function(buffer, index) {
      var _a = this, gl = _a.gl, CONTEXT_UID = _a.CONTEXT_UID;
      if (this.boundBufferBases[index] !== buffer) {
        var glBuffer = buffer._glBuffers[CONTEXT_UID] || this.createGLBuffer(buffer);
        this.boundBufferBases[index] = buffer;
        gl.bindBufferBase(gl.UNIFORM_BUFFER, index, glBuffer.buffer);
      }
    };
    BufferSystem2.prototype.bindBufferRange = function(buffer, index, offset) {
      var _a = this, gl = _a.gl, CONTEXT_UID = _a.CONTEXT_UID;
      offset = offset || 0;
      var glBuffer = buffer._glBuffers[CONTEXT_UID] || this.createGLBuffer(buffer);
      gl.bindBufferRange(gl.UNIFORM_BUFFER, index || 0, glBuffer.buffer, offset * 256, 256);
    };
    BufferSystem2.prototype.update = function(buffer) {
      var _a = this, gl = _a.gl, CONTEXT_UID = _a.CONTEXT_UID;
      var glBuffer = buffer._glBuffers[CONTEXT_UID];
      if (buffer._updateID === glBuffer.updateID) {
        return;
      }
      glBuffer.updateID = buffer._updateID;
      gl.bindBuffer(buffer.type, glBuffer.buffer);
      if (glBuffer.byteLength >= buffer.data.byteLength) {
        gl.bufferSubData(buffer.type, 0, buffer.data);
      } else {
        var drawType = buffer.static ? gl.STATIC_DRAW : gl.DYNAMIC_DRAW;
        glBuffer.byteLength = buffer.data.byteLength;
        gl.bufferData(buffer.type, buffer.data, drawType);
      }
    };
    BufferSystem2.prototype.dispose = function(buffer, contextLost) {
      if (!this.managedBuffers[buffer.id]) {
        return;
      }
      delete this.managedBuffers[buffer.id];
      var glBuffer = buffer._glBuffers[this.CONTEXT_UID];
      var gl = this.gl;
      buffer.disposeRunner.remove(this);
      if (!glBuffer) {
        return;
      }
      if (!contextLost) {
        gl.deleteBuffer(glBuffer.buffer);
      }
      delete buffer._glBuffers[this.CONTEXT_UID];
    };
    BufferSystem2.prototype.disposeAll = function(contextLost) {
      var all = Object.keys(this.managedBuffers);
      for (var i = 0; i < all.length; i++) {
        this.dispose(this.managedBuffers[all[i]], contextLost);
      }
    };
    BufferSystem2.prototype.createGLBuffer = function(buffer) {
      var _a = this, CONTEXT_UID = _a.CONTEXT_UID, gl = _a.gl;
      buffer._glBuffers[CONTEXT_UID] = new GLBuffer(gl.createBuffer());
      this.managedBuffers[buffer.id] = buffer;
      buffer.disposeRunner.add(this);
      return buffer._glBuffers[CONTEXT_UID];
    };
    return BufferSystem2;
  }()
);
var Renderer = (
  /** @class */
  function(_super) {
    __extends(Renderer2, _super);
    function Renderer2(options) {
      var _this = _super.call(this, RENDERER_TYPE2.WEBGL, options) || this;
      options = _this.options;
      _this.gl = null;
      _this.CONTEXT_UID = 0;
      _this.runners = {
        destroy: new Runner("destroy"),
        contextChange: new Runner("contextChange"),
        reset: new Runner("reset"),
        update: new Runner("update"),
        postrender: new Runner("postrender"),
        prerender: new Runner("prerender"),
        resize: new Runner("resize")
      };
      _this.runners.contextChange.add(_this);
      _this.globalUniforms = new UniformGroup({
        projectionMatrix: new Matrix()
      }, true);
      _this.addSystem(MaskSystem, "mask").addSystem(ContextSystem, "context").addSystem(StateSystem, "state").addSystem(ShaderSystem, "shader").addSystem(TextureSystem, "texture").addSystem(BufferSystem, "buffer").addSystem(GeometrySystem, "geometry").addSystem(FramebufferSystem, "framebuffer").addSystem(ScissorSystem, "scissor").addSystem(StencilSystem, "stencil").addSystem(ProjectionSystem, "projection").addSystem(TextureGCSystem, "textureGC").addSystem(FilterSystem, "filter").addSystem(RenderTextureSystem, "renderTexture").addSystem(BatchSystem, "batch");
      _this.initPlugins(Renderer2.__plugins);
      _this.multisample = void 0;
      if (options.context) {
        _this.context.initFromContext(options.context);
      } else {
        _this.context.initFromOptions({
          alpha: !!_this.useContextAlpha,
          antialias: options.antialias,
          premultipliedAlpha: _this.useContextAlpha && _this.useContextAlpha !== "notMultiplied",
          stencil: true,
          preserveDrawingBuffer: options.preserveDrawingBuffer,
          powerPreference: _this.options.powerPreference
        });
      }
      _this.renderingToScreen = true;
      sayHello(_this.context.webGLVersion === 2 ? "WebGL 2" : "WebGL 1");
      _this.resize(_this.options.width, _this.options.height);
      return _this;
    }
    Renderer2.create = function(options) {
      if (isWebGLSupported()) {
        return new Renderer2(options);
      }
      throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.');
    };
    Renderer2.prototype.contextChange = function() {
      var gl = this.gl;
      var samples;
      if (this.context.webGLVersion === 1) {
        var framebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        samples = gl.getParameter(gl.SAMPLES);
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      } else {
        var framebuffer = gl.getParameter(gl.DRAW_FRAMEBUFFER_BINDING);
        gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, null);
        samples = gl.getParameter(gl.SAMPLES);
        gl.bindFramebuffer(gl.DRAW_FRAMEBUFFER, framebuffer);
      }
      if (samples >= MSAA_QUALITY2.HIGH) {
        this.multisample = MSAA_QUALITY2.HIGH;
      } else if (samples >= MSAA_QUALITY2.MEDIUM) {
        this.multisample = MSAA_QUALITY2.MEDIUM;
      } else if (samples >= MSAA_QUALITY2.LOW) {
        this.multisample = MSAA_QUALITY2.LOW;
      } else {
        this.multisample = MSAA_QUALITY2.NONE;
      }
    };
    Renderer2.prototype.addSystem = function(ClassRef, name) {
      var system = new ClassRef(this);
      if (this[name]) {
        throw new Error('Whoops! The name "' + name + '" is already in use');
      }
      this[name] = system;
      for (var i in this.runners) {
        this.runners[i].add(system);
      }
      return this;
    };
    Renderer2.prototype.render = function(displayObject, options) {
      var renderTexture;
      var clear;
      var transform;
      var skipUpdateTransform;
      if (options) {
        if (options instanceof RenderTexture) {
          deprecation("6.0.0", "Renderer#render arguments changed, use options instead.");
          renderTexture = options;
          clear = arguments[2];
          transform = arguments[3];
          skipUpdateTransform = arguments[4];
        } else {
          renderTexture = options.renderTexture;
          clear = options.clear;
          transform = options.transform;
          skipUpdateTransform = options.skipUpdateTransform;
        }
      }
      this.renderingToScreen = !renderTexture;
      this.runners.prerender.emit();
      this.emit("prerender");
      this.projection.transform = transform;
      if (this.context.isLost) {
        return;
      }
      if (!renderTexture) {
        this._lastObjectRendered = displayObject;
      }
      if (!skipUpdateTransform) {
        var cacheParent = displayObject.enableTempParent();
        displayObject.updateTransform();
        displayObject.disableTempParent(cacheParent);
      }
      this.renderTexture.bind(renderTexture);
      this.batch.currentRenderer.start();
      if (clear !== void 0 ? clear : this.clearBeforeRender) {
        this.renderTexture.clear();
      }
      displayObject.render(this);
      this.batch.currentRenderer.flush();
      if (renderTexture) {
        renderTexture.baseTexture.update();
      }
      this.runners.postrender.emit();
      this.projection.transform = null;
      this.emit("postrender");
    };
    Renderer2.prototype.generateTexture = function(displayObject, options, resolution, region) {
      if (options === void 0) {
        options = {};
      }
      var renderTexture = _super.prototype.generateTexture.call(this, displayObject, options, resolution, region);
      this.framebuffer.blit();
      return renderTexture;
    };
    Renderer2.prototype.resize = function(desiredScreenWidth, desiredScreenHeight) {
      _super.prototype.resize.call(this, desiredScreenWidth, desiredScreenHeight);
      this.runners.resize.emit(this.screen.height, this.screen.width);
    };
    Renderer2.prototype.reset = function() {
      this.runners.reset.emit();
      return this;
    };
    Renderer2.prototype.clear = function() {
      this.renderTexture.bind();
      this.renderTexture.clear();
    };
    Renderer2.prototype.destroy = function(removeView) {
      this.runners.destroy.emit();
      for (var r in this.runners) {
        this.runners[r].destroy();
      }
      _super.prototype.destroy.call(this, removeView);
      this.gl = null;
    };
    Object.defineProperty(Renderer2.prototype, "extract", {
      /**
       * Please use `plugins.extract` instead.
       * @member {PIXI.Extract} extract
       * @deprecated since 6.0.0
       * @readonly
       */
      get: function() {
        deprecation("6.0.0", "Renderer#extract has been deprecated, please use Renderer#plugins.extract instead.");
        return this.plugins.extract;
      },
      enumerable: false,
      configurable: true
    });
    Renderer2.registerPlugin = function(pluginName, ctor) {
      deprecation("6.5.0", "Renderer.registerPlugin() has been deprecated, please use extensions.add() instead.");
      extensions.add({
        name: pluginName,
        type: ExtensionType.RendererPlugin,
        ref: ctor
      });
    };
    Renderer2.__plugins = {};
    return Renderer2;
  }(AbstractRenderer)
);
extensions.handleByMap(ExtensionType.RendererPlugin, Renderer.__plugins);
function autoDetectRenderer(options) {
  return Renderer.create(options);
}
var $defaultVertex = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}";
var $defaultFilterVertex = "attribute vec2 aVertexPosition;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nuniform vec4 inputSize;\nuniform vec4 outputFrame;\n\nvec4 filterVertexPosition( void )\n{\n    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;\n\n    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);\n}\n\nvec2 filterTextureCoord( void )\n{\n    return aVertexPosition * (outputFrame.zw * inputSize.zw);\n}\n\nvoid main(void)\n{\n    gl_Position = filterVertexPosition();\n    vTextureCoord = filterTextureCoord();\n}\n";
var defaultVertex$1 = $defaultVertex;
var defaultFilterVertex = $defaultFilterVertex;
var System = (
  /** @class */
  function() {
    function System2(renderer) {
      deprecation("6.1.0", "System class is deprecated, implemement ISystem interface instead.");
      this.renderer = renderer;
    }
    System2.prototype.destroy = function() {
      this.renderer = null;
    };
    return System2;
  }()
);
var BatchDrawCall = (
  /** @class */
  /* @__PURE__ */ function() {
    function BatchDrawCall2() {
      this.texArray = null;
      this.blend = 0;
      this.type = DRAW_MODES2.TRIANGLES;
      this.start = 0;
      this.size = 0;
      this.data = null;
    }
    return BatchDrawCall2;
  }()
);
var BatchTextureArray = (
  /** @class */
  function() {
    function BatchTextureArray2() {
      this.elements = [];
      this.ids = [];
      this.count = 0;
    }
    BatchTextureArray2.prototype.clear = function() {
      for (var i = 0; i < this.count; i++) {
        this.elements[i] = null;
      }
      this.count = 0;
    };
    return BatchTextureArray2;
  }()
);
var ViewableBuffer = (
  /** @class */
  function() {
    function ViewableBuffer2(sizeOrBuffer) {
      if (typeof sizeOrBuffer === "number") {
        this.rawBinaryData = new ArrayBuffer(sizeOrBuffer);
      } else if (sizeOrBuffer instanceof Uint8Array) {
        this.rawBinaryData = sizeOrBuffer.buffer;
      } else {
        this.rawBinaryData = sizeOrBuffer;
      }
      this.uint32View = new Uint32Array(this.rawBinaryData);
      this.float32View = new Float32Array(this.rawBinaryData);
    }
    Object.defineProperty(ViewableBuffer2.prototype, "int8View", {
      /** View on the raw binary data as a `Int8Array`. */
      get: function() {
        if (!this._int8View) {
          this._int8View = new Int8Array(this.rawBinaryData);
        }
        return this._int8View;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ViewableBuffer2.prototype, "uint8View", {
      /** View on the raw binary data as a `Uint8Array`. */
      get: function() {
        if (!this._uint8View) {
          this._uint8View = new Uint8Array(this.rawBinaryData);
        }
        return this._uint8View;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ViewableBuffer2.prototype, "int16View", {
      /**  View on the raw binary data as a `Int16Array`. */
      get: function() {
        if (!this._int16View) {
          this._int16View = new Int16Array(this.rawBinaryData);
        }
        return this._int16View;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ViewableBuffer2.prototype, "uint16View", {
      /** View on the raw binary data as a `Uint16Array`. */
      get: function() {
        if (!this._uint16View) {
          this._uint16View = new Uint16Array(this.rawBinaryData);
        }
        return this._uint16View;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ViewableBuffer2.prototype, "int32View", {
      /** View on the raw binary data as a `Int32Array`. */
      get: function() {
        if (!this._int32View) {
          this._int32View = new Int32Array(this.rawBinaryData);
        }
        return this._int32View;
      },
      enumerable: false,
      configurable: true
    });
    ViewableBuffer2.prototype.view = function(type) {
      return this[type + "View"];
    };
    ViewableBuffer2.prototype.destroy = function() {
      this.rawBinaryData = null;
      this._int8View = null;
      this._uint8View = null;
      this._int16View = null;
      this._uint16View = null;
      this._int32View = null;
      this.uint32View = null;
      this.float32View = null;
    };
    ViewableBuffer2.sizeOf = function(type) {
      switch (type) {
        case "int8":
        case "uint8":
          return 1;
        case "int16":
        case "uint16":
          return 2;
        case "int32":
        case "uint32":
        case "float32":
          return 4;
        default:
          throw new Error(type + " isn't a valid view type");
      }
    };
    return ViewableBuffer2;
  }()
);
var AbstractBatchRenderer = (
  /** @class */
  function(_super) {
    __extends(AbstractBatchRenderer2, _super);
    function AbstractBatchRenderer2(renderer) {
      var _this = _super.call(this, renderer) || this;
      _this.shaderGenerator = null;
      _this.geometryClass = null;
      _this.vertexSize = null;
      _this.state = State.for2d();
      _this.size = settings.SPRITE_BATCH_SIZE * 4;
      _this._vertexCount = 0;
      _this._indexCount = 0;
      _this._bufferedElements = [];
      _this._bufferedTextures = [];
      _this._bufferSize = 0;
      _this._shader = null;
      _this._packedGeometries = [];
      _this._packedGeometryPoolSize = 2;
      _this._flushId = 0;
      _this._aBuffers = {};
      _this._iBuffers = {};
      _this.MAX_TEXTURES = 1;
      _this.renderer.on("prerender", _this.onPrerender, _this);
      renderer.runners.contextChange.add(_this);
      _this._dcIndex = 0;
      _this._aIndex = 0;
      _this._iIndex = 0;
      _this._attributeBuffer = null;
      _this._indexBuffer = null;
      _this._tempBoundTextures = [];
      return _this;
    }
    AbstractBatchRenderer2.prototype.contextChange = function() {
      var gl = this.renderer.gl;
      if (settings.PREFER_ENV === ENV2.WEBGL_LEGACY) {
        this.MAX_TEXTURES = 1;
      } else {
        this.MAX_TEXTURES = Math.min(gl.getParameter(gl.MAX_TEXTURE_IMAGE_UNITS), settings.SPRITE_MAX_TEXTURES);
        this.MAX_TEXTURES = checkMaxIfStatementsInShader(this.MAX_TEXTURES, gl);
      }
      this._shader = this.shaderGenerator.generateShader(this.MAX_TEXTURES);
      for (var i = 0; i < this._packedGeometryPoolSize; i++) {
        this._packedGeometries[i] = new this.geometryClass();
      }
      this.initFlushBuffers();
    };
    AbstractBatchRenderer2.prototype.initFlushBuffers = function() {
      var _drawCallPool = AbstractBatchRenderer2._drawCallPool, _textureArrayPool = AbstractBatchRenderer2._textureArrayPool;
      var MAX_SPRITES = this.size / 4;
      var MAX_TA = Math.floor(MAX_SPRITES / this.MAX_TEXTURES) + 1;
      while (_drawCallPool.length < MAX_SPRITES) {
        _drawCallPool.push(new BatchDrawCall());
      }
      while (_textureArrayPool.length < MAX_TA) {
        _textureArrayPool.push(new BatchTextureArray());
      }
      for (var i = 0; i < this.MAX_TEXTURES; i++) {
        this._tempBoundTextures[i] = null;
      }
    };
    AbstractBatchRenderer2.prototype.onPrerender = function() {
      this._flushId = 0;
    };
    AbstractBatchRenderer2.prototype.render = function(element) {
      if (!element._texture.valid) {
        return;
      }
      if (this._vertexCount + element.vertexData.length / 2 > this.size) {
        this.flush();
      }
      this._vertexCount += element.vertexData.length / 2;
      this._indexCount += element.indices.length;
      this._bufferedTextures[this._bufferSize] = element._texture.baseTexture;
      this._bufferedElements[this._bufferSize++] = element;
    };
    AbstractBatchRenderer2.prototype.buildTexturesAndDrawCalls = function() {
      var _a = this, textures = _a._bufferedTextures, MAX_TEXTURES = _a.MAX_TEXTURES;
      var textureArrays = AbstractBatchRenderer2._textureArrayPool;
      var batch = this.renderer.batch;
      var boundTextures = this._tempBoundTextures;
      var touch = this.renderer.textureGC.count;
      var TICK = ++BaseTexture._globalBatch;
      var countTexArrays = 0;
      var texArray = textureArrays[0];
      var start = 0;
      batch.copyBoundTextures(boundTextures, MAX_TEXTURES);
      for (var i = 0; i < this._bufferSize; ++i) {
        var tex = textures[i];
        textures[i] = null;
        if (tex._batchEnabled === TICK) {
          continue;
        }
        if (texArray.count >= MAX_TEXTURES) {
          batch.boundArray(texArray, boundTextures, TICK, MAX_TEXTURES);
          this.buildDrawCalls(texArray, start, i);
          start = i;
          texArray = textureArrays[++countTexArrays];
          ++TICK;
        }
        tex._batchEnabled = TICK;
        tex.touched = touch;
        texArray.elements[texArray.count++] = tex;
      }
      if (texArray.count > 0) {
        batch.boundArray(texArray, boundTextures, TICK, MAX_TEXTURES);
        this.buildDrawCalls(texArray, start, this._bufferSize);
        ++countTexArrays;
        ++TICK;
      }
      for (var i = 0; i < boundTextures.length; i++) {
        boundTextures[i] = null;
      }
      BaseTexture._globalBatch = TICK;
    };
    AbstractBatchRenderer2.prototype.buildDrawCalls = function(texArray, start, finish) {
      var _a = this, elements = _a._bufferedElements, _attributeBuffer = _a._attributeBuffer, _indexBuffer = _a._indexBuffer, vertexSize = _a.vertexSize;
      var drawCalls = AbstractBatchRenderer2._drawCallPool;
      var dcIndex = this._dcIndex;
      var aIndex = this._aIndex;
      var iIndex = this._iIndex;
      var drawCall = drawCalls[dcIndex];
      drawCall.start = this._iIndex;
      drawCall.texArray = texArray;
      for (var i = start; i < finish; ++i) {
        var sprite = elements[i];
        var tex = sprite._texture.baseTexture;
        var spriteBlendMode = premultiplyBlendMode[tex.alphaMode ? 1 : 0][sprite.blendMode];
        elements[i] = null;
        if (start < i && drawCall.blend !== spriteBlendMode) {
          drawCall.size = iIndex - drawCall.start;
          start = i;
          drawCall = drawCalls[++dcIndex];
          drawCall.texArray = texArray;
          drawCall.start = iIndex;
        }
        this.packInterleavedGeometry(sprite, _attributeBuffer, _indexBuffer, aIndex, iIndex);
        aIndex += sprite.vertexData.length / 2 * vertexSize;
        iIndex += sprite.indices.length;
        drawCall.blend = spriteBlendMode;
      }
      if (start < finish) {
        drawCall.size = iIndex - drawCall.start;
        ++dcIndex;
      }
      this._dcIndex = dcIndex;
      this._aIndex = aIndex;
      this._iIndex = iIndex;
    };
    AbstractBatchRenderer2.prototype.bindAndClearTexArray = function(texArray) {
      var textureSystem = this.renderer.texture;
      for (var j = 0; j < texArray.count; j++) {
        textureSystem.bind(texArray.elements[j], texArray.ids[j]);
        texArray.elements[j] = null;
      }
      texArray.count = 0;
    };
    AbstractBatchRenderer2.prototype.updateGeometry = function() {
      var _a = this, packedGeometries = _a._packedGeometries, attributeBuffer = _a._attributeBuffer, indexBuffer = _a._indexBuffer;
      if (!settings.CAN_UPLOAD_SAME_BUFFER) {
        if (this._packedGeometryPoolSize <= this._flushId) {
          this._packedGeometryPoolSize++;
          packedGeometries[this._flushId] = new this.geometryClass();
        }
        packedGeometries[this._flushId]._buffer.update(attributeBuffer.rawBinaryData);
        packedGeometries[this._flushId]._indexBuffer.update(indexBuffer);
        this.renderer.geometry.bind(packedGeometries[this._flushId]);
        this.renderer.geometry.updateBuffers();
        this._flushId++;
      } else {
        packedGeometries[this._flushId]._buffer.update(attributeBuffer.rawBinaryData);
        packedGeometries[this._flushId]._indexBuffer.update(indexBuffer);
        this.renderer.geometry.updateBuffers();
      }
    };
    AbstractBatchRenderer2.prototype.drawBatches = function() {
      var dcCount = this._dcIndex;
      var _a = this.renderer, gl = _a.gl, stateSystem = _a.state;
      var drawCalls = AbstractBatchRenderer2._drawCallPool;
      var curTexArray = null;
      for (var i = 0; i < dcCount; i++) {
        var _b = drawCalls[i], texArray = _b.texArray, type = _b.type, size = _b.size, start = _b.start, blend = _b.blend;
        if (curTexArray !== texArray) {
          curTexArray = texArray;
          this.bindAndClearTexArray(texArray);
        }
        this.state.blendMode = blend;
        stateSystem.set(this.state);
        gl.drawElements(type, size, gl.UNSIGNED_SHORT, start * 2);
      }
    };
    AbstractBatchRenderer2.prototype.flush = function() {
      if (this._vertexCount === 0) {
        return;
      }
      this._attributeBuffer = this.getAttributeBuffer(this._vertexCount);
      this._indexBuffer = this.getIndexBuffer(this._indexCount);
      this._aIndex = 0;
      this._iIndex = 0;
      this._dcIndex = 0;
      this.buildTexturesAndDrawCalls();
      this.updateGeometry();
      this.drawBatches();
      this._bufferSize = 0;
      this._vertexCount = 0;
      this._indexCount = 0;
    };
    AbstractBatchRenderer2.prototype.start = function() {
      this.renderer.state.set(this.state);
      this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES);
      this.renderer.shader.bind(this._shader);
      if (settings.CAN_UPLOAD_SAME_BUFFER) {
        this.renderer.geometry.bind(this._packedGeometries[this._flushId]);
      }
    };
    AbstractBatchRenderer2.prototype.stop = function() {
      this.flush();
    };
    AbstractBatchRenderer2.prototype.destroy = function() {
      for (var i = 0; i < this._packedGeometryPoolSize; i++) {
        if (this._packedGeometries[i]) {
          this._packedGeometries[i].destroy();
        }
      }
      this.renderer.off("prerender", this.onPrerender, this);
      this._aBuffers = null;
      this._iBuffers = null;
      this._packedGeometries = null;
      this._attributeBuffer = null;
      this._indexBuffer = null;
      if (this._shader) {
        this._shader.destroy();
        this._shader = null;
      }
      _super.prototype.destroy.call(this);
    };
    AbstractBatchRenderer2.prototype.getAttributeBuffer = function(size) {
      var roundedP2 = nextPow2(Math.ceil(size / 8));
      var roundedSizeIndex = log2(roundedP2);
      var roundedSize = roundedP2 * 8;
      if (this._aBuffers.length <= roundedSizeIndex) {
        this._iBuffers.length = roundedSizeIndex + 1;
      }
      var buffer = this._aBuffers[roundedSize];
      if (!buffer) {
        this._aBuffers[roundedSize] = buffer = new ViewableBuffer(roundedSize * this.vertexSize * 4);
      }
      return buffer;
    };
    AbstractBatchRenderer2.prototype.getIndexBuffer = function(size) {
      var roundedP2 = nextPow2(Math.ceil(size / 12));
      var roundedSizeIndex = log2(roundedP2);
      var roundedSize = roundedP2 * 12;
      if (this._iBuffers.length <= roundedSizeIndex) {
        this._iBuffers.length = roundedSizeIndex + 1;
      }
      var buffer = this._iBuffers[roundedSizeIndex];
      if (!buffer) {
        this._iBuffers[roundedSizeIndex] = buffer = new Uint16Array(roundedSize);
      }
      return buffer;
    };
    AbstractBatchRenderer2.prototype.packInterleavedGeometry = function(element, attributeBuffer, indexBuffer, aIndex, iIndex) {
      var uint32View = attributeBuffer.uint32View, float32View = attributeBuffer.float32View;
      var packedVertices = aIndex / this.vertexSize;
      var uvs = element.uvs;
      var indicies = element.indices;
      var vertexData = element.vertexData;
      var textureId = element._texture.baseTexture._batchLocation;
      var alpha = Math.min(element.worldAlpha, 1);
      var argb = alpha < 1 && element._texture.baseTexture.alphaMode ? premultiplyTint(element._tintRGB, alpha) : element._tintRGB + (alpha * 255 << 24);
      for (var i = 0; i < vertexData.length; i += 2) {
        float32View[aIndex++] = vertexData[i];
        float32View[aIndex++] = vertexData[i + 1];
        float32View[aIndex++] = uvs[i];
        float32View[aIndex++] = uvs[i + 1];
        uint32View[aIndex++] = argb;
        float32View[aIndex++] = textureId;
      }
      for (var i = 0; i < indicies.length; i++) {
        indexBuffer[iIndex++] = packedVertices + indicies[i];
      }
    };
    AbstractBatchRenderer2._drawCallPool = [];
    AbstractBatchRenderer2._textureArrayPool = [];
    return AbstractBatchRenderer2;
  }(ObjectRenderer)
);
var BatchShaderGenerator = (
  /** @class */
  function() {
    function BatchShaderGenerator2(vertexSrc, fragTemplate2) {
      this.vertexSrc = vertexSrc;
      this.fragTemplate = fragTemplate2;
      this.programCache = {};
      this.defaultGroupCache = {};
      if (fragTemplate2.indexOf("%count%") < 0) {
        throw new Error('Fragment template must contain "%count%".');
      }
      if (fragTemplate2.indexOf("%forloop%") < 0) {
        throw new Error('Fragment template must contain "%forloop%".');
      }
    }
    BatchShaderGenerator2.prototype.generateShader = function(maxTextures) {
      if (!this.programCache[maxTextures]) {
        var sampleValues = new Int32Array(maxTextures);
        for (var i = 0; i < maxTextures; i++) {
          sampleValues[i] = i;
        }
        this.defaultGroupCache[maxTextures] = UniformGroup.from({ uSamplers: sampleValues }, true);
        var fragmentSrc = this.fragTemplate;
        fragmentSrc = fragmentSrc.replace(/%count%/gi, "" + maxTextures);
        fragmentSrc = fragmentSrc.replace(/%forloop%/gi, this.generateSampleSrc(maxTextures));
        this.programCache[maxTextures] = new Program(this.vertexSrc, fragmentSrc);
      }
      var uniforms = {
        tint: new Float32Array([1, 1, 1, 1]),
        translationMatrix: new Matrix(),
        default: this.defaultGroupCache[maxTextures]
      };
      return new Shader(this.programCache[maxTextures], uniforms);
    };
    BatchShaderGenerator2.prototype.generateSampleSrc = function(maxTextures) {
      var src = "";
      src += "\n";
      src += "\n";
      for (var i = 0; i < maxTextures; i++) {
        if (i > 0) {
          src += "\nelse ";
        }
        if (i < maxTextures - 1) {
          src += "if(vTextureId < " + i + ".5)";
        }
        src += "\n{";
        src += "\n	color = texture2D(uSamplers[" + i + "], vTextureCoord);";
        src += "\n}";
      }
      src += "\n";
      src += "\n";
      return src;
    };
    return BatchShaderGenerator2;
  }()
);
var BatchGeometry = (
  /** @class */
  function(_super) {
    __extends(BatchGeometry2, _super);
    function BatchGeometry2(_static) {
      if (_static === void 0) {
        _static = false;
      }
      var _this = _super.call(this) || this;
      _this._buffer = new Buffer(null, _static, false);
      _this._indexBuffer = new Buffer(null, _static, true);
      _this.addAttribute("aVertexPosition", _this._buffer, 2, false, TYPES2.FLOAT).addAttribute("aTextureCoord", _this._buffer, 2, false, TYPES2.FLOAT).addAttribute("aColor", _this._buffer, 4, true, TYPES2.UNSIGNED_BYTE).addAttribute("aTextureId", _this._buffer, 1, true, TYPES2.FLOAT).addIndex(_this._indexBuffer);
      return _this;
    }
    return BatchGeometry2;
  }(Geometry)
);
var defaultVertex = "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform vec4 tint;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor * tint;\n}\n";
var defaultFragment = "varying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\nuniform sampler2D uSamplers[%count%];\n\nvoid main(void){\n    vec4 color;\n    %forloop%\n    gl_FragColor = color * vColor;\n}\n";
var BatchPluginFactory = (
  /** @class */
  function() {
    function BatchPluginFactory2() {
    }
    BatchPluginFactory2.create = function(options) {
      var _a = Object.assign({
        vertex: defaultVertex,
        fragment: defaultFragment,
        geometryClass: BatchGeometry,
        vertexSize: 6
      }, options), vertex2 = _a.vertex, fragment2 = _a.fragment, vertexSize = _a.vertexSize, geometryClass = _a.geometryClass;
      return (
        /** @class */
        function(_super) {
          __extends(BatchPlugin, _super);
          function BatchPlugin(renderer) {
            var _this = _super.call(this, renderer) || this;
            _this.shaderGenerator = new BatchShaderGenerator(vertex2, fragment2);
            _this.geometryClass = geometryClass;
            _this.vertexSize = vertexSize;
            return _this;
          }
          return BatchPlugin;
        }(AbstractBatchRenderer)
      );
    };
    Object.defineProperty(BatchPluginFactory2, "defaultVertexSrc", {
      /**
       * The default vertex shader source
       * @readonly
       */
      get: function() {
        return defaultVertex;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(BatchPluginFactory2, "defaultFragmentTemplate", {
      /**
       * The default fragment shader source
       * @readonly
       */
      get: function() {
        return defaultFragment;
      },
      enumerable: false,
      configurable: true
    });
    return BatchPluginFactory2;
  }()
);
var BatchRenderer = BatchPluginFactory.create();
Object.assign(BatchRenderer, {
  extension: {
    name: "batch",
    type: ExtensionType.RendererPlugin
  }
});
var resources = {};
var _loop_1 = function(name) {
  Object.defineProperty(resources, name, {
    get: function() {
      deprecation("6.0.0", "PIXI.systems." + name + " has moved to PIXI." + name);
      return _resources[name];
    }
  });
};
for (name in _resources) {
  _loop_1(name);
}
var name;
var systems = {};
var _loop_2 = function(name) {
  Object.defineProperty(systems, name, {
    get: function() {
      deprecation("6.0.0", "PIXI.resources." + name + " has moved to PIXI." + name);
      return _systems[name];
    }
  });
};
for (name in _systems) {
  _loop_2(name);
}
var name;
var VERSION2 = "6.5.2";

// node_modules/.pnpm/@pixi+display@6.5.2_@pixi+math@6.5.2_@pixi+settings@6.5.2_@pixi+utils@6.5.2/node_modules/@pixi/display/dist/esm/display.mjs
settings.SORTABLE_CHILDREN = false;
var Bounds = (
  /** @class */
  function() {
    function Bounds2() {
      this.minX = Infinity;
      this.minY = Infinity;
      this.maxX = -Infinity;
      this.maxY = -Infinity;
      this.rect = null;
      this.updateID = -1;
    }
    Bounds2.prototype.isEmpty = function() {
      return this.minX > this.maxX || this.minY > this.maxY;
    };
    Bounds2.prototype.clear = function() {
      this.minX = Infinity;
      this.minY = Infinity;
      this.maxX = -Infinity;
      this.maxY = -Infinity;
    };
    Bounds2.prototype.getRectangle = function(rect) {
      if (this.minX > this.maxX || this.minY > this.maxY) {
        return Rectangle.EMPTY;
      }
      rect = rect || new Rectangle(0, 0, 1, 1);
      rect.x = this.minX;
      rect.y = this.minY;
      rect.width = this.maxX - this.minX;
      rect.height = this.maxY - this.minY;
      return rect;
    };
    Bounds2.prototype.addPoint = function(point) {
      this.minX = Math.min(this.minX, point.x);
      this.maxX = Math.max(this.maxX, point.x);
      this.minY = Math.min(this.minY, point.y);
      this.maxY = Math.max(this.maxY, point.y);
    };
    Bounds2.prototype.addPointMatrix = function(matrix, point) {
      var a = matrix.a, b = matrix.b, c = matrix.c, d = matrix.d, tx = matrix.tx, ty = matrix.ty;
      var x = a * point.x + c * point.y + tx;
      var y = b * point.x + d * point.y + ty;
      this.minX = Math.min(this.minX, x);
      this.maxX = Math.max(this.maxX, x);
      this.minY = Math.min(this.minY, y);
      this.maxY = Math.max(this.maxY, y);
    };
    Bounds2.prototype.addQuad = function(vertices) {
      var minX = this.minX;
      var minY = this.minY;
      var maxX = this.maxX;
      var maxY = this.maxY;
      var x = vertices[0];
      var y = vertices[1];
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
      x = vertices[2];
      y = vertices[3];
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
      x = vertices[4];
      y = vertices[5];
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
      x = vertices[6];
      y = vertices[7];
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
      this.minX = minX;
      this.minY = minY;
      this.maxX = maxX;
      this.maxY = maxY;
    };
    Bounds2.prototype.addFrame = function(transform, x0, y0, x1, y1) {
      this.addFrameMatrix(transform.worldTransform, x0, y0, x1, y1);
    };
    Bounds2.prototype.addFrameMatrix = function(matrix, x0, y0, x1, y1) {
      var a = matrix.a;
      var b = matrix.b;
      var c = matrix.c;
      var d = matrix.d;
      var tx = matrix.tx;
      var ty = matrix.ty;
      var minX = this.minX;
      var minY = this.minY;
      var maxX = this.maxX;
      var maxY = this.maxY;
      var x = a * x0 + c * y0 + tx;
      var y = b * x0 + d * y0 + ty;
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
      x = a * x1 + c * y0 + tx;
      y = b * x1 + d * y0 + ty;
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
      x = a * x0 + c * y1 + tx;
      y = b * x0 + d * y1 + ty;
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
      x = a * x1 + c * y1 + tx;
      y = b * x1 + d * y1 + ty;
      minX = x < minX ? x : minX;
      minY = y < minY ? y : minY;
      maxX = x > maxX ? x : maxX;
      maxY = y > maxY ? y : maxY;
      this.minX = minX;
      this.minY = minY;
      this.maxX = maxX;
      this.maxY = maxY;
    };
    Bounds2.prototype.addVertexData = function(vertexData, beginOffset, endOffset) {
      var minX = this.minX;
      var minY = this.minY;
      var maxX = this.maxX;
      var maxY = this.maxY;
      for (var i = beginOffset; i < endOffset; i += 2) {
        var x = vertexData[i];
        var y = vertexData[i + 1];
        minX = x < minX ? x : minX;
        minY = y < minY ? y : minY;
        maxX = x > maxX ? x : maxX;
        maxY = y > maxY ? y : maxY;
      }
      this.minX = minX;
      this.minY = minY;
      this.maxX = maxX;
      this.maxY = maxY;
    };
    Bounds2.prototype.addVertices = function(transform, vertices, beginOffset, endOffset) {
      this.addVerticesMatrix(transform.worldTransform, vertices, beginOffset, endOffset);
    };
    Bounds2.prototype.addVerticesMatrix = function(matrix, vertices, beginOffset, endOffset, padX, padY) {
      if (padX === void 0) {
        padX = 0;
      }
      if (padY === void 0) {
        padY = padX;
      }
      var a = matrix.a;
      var b = matrix.b;
      var c = matrix.c;
      var d = matrix.d;
      var tx = matrix.tx;
      var ty = matrix.ty;
      var minX = this.minX;
      var minY = this.minY;
      var maxX = this.maxX;
      var maxY = this.maxY;
      for (var i = beginOffset; i < endOffset; i += 2) {
        var rawX = vertices[i];
        var rawY = vertices[i + 1];
        var x = a * rawX + c * rawY + tx;
        var y = d * rawY + b * rawX + ty;
        minX = Math.min(minX, x - padX);
        maxX = Math.max(maxX, x + padX);
        minY = Math.min(minY, y - padY);
        maxY = Math.max(maxY, y + padY);
      }
      this.minX = minX;
      this.minY = minY;
      this.maxX = maxX;
      this.maxY = maxY;
    };
    Bounds2.prototype.addBounds = function(bounds) {
      var minX = this.minX;
      var minY = this.minY;
      var maxX = this.maxX;
      var maxY = this.maxY;
      this.minX = bounds.minX < minX ? bounds.minX : minX;
      this.minY = bounds.minY < minY ? bounds.minY : minY;
      this.maxX = bounds.maxX > maxX ? bounds.maxX : maxX;
      this.maxY = bounds.maxY > maxY ? bounds.maxY : maxY;
    };
    Bounds2.prototype.addBoundsMask = function(bounds, mask) {
      var _minX = bounds.minX > mask.minX ? bounds.minX : mask.minX;
      var _minY = bounds.minY > mask.minY ? bounds.minY : mask.minY;
      var _maxX = bounds.maxX < mask.maxX ? bounds.maxX : mask.maxX;
      var _maxY = bounds.maxY < mask.maxY ? bounds.maxY : mask.maxY;
      if (_minX <= _maxX && _minY <= _maxY) {
        var minX = this.minX;
        var minY = this.minY;
        var maxX = this.maxX;
        var maxY = this.maxY;
        this.minX = _minX < minX ? _minX : minX;
        this.minY = _minY < minY ? _minY : minY;
        this.maxX = _maxX > maxX ? _maxX : maxX;
        this.maxY = _maxY > maxY ? _maxY : maxY;
      }
    };
    Bounds2.prototype.addBoundsMatrix = function(bounds, matrix) {
      this.addFrameMatrix(matrix, bounds.minX, bounds.minY, bounds.maxX, bounds.maxY);
    };
    Bounds2.prototype.addBoundsArea = function(bounds, area) {
      var _minX = bounds.minX > area.x ? bounds.minX : area.x;
      var _minY = bounds.minY > area.y ? bounds.minY : area.y;
      var _maxX = bounds.maxX < area.x + area.width ? bounds.maxX : area.x + area.width;
      var _maxY = bounds.maxY < area.y + area.height ? bounds.maxY : area.y + area.height;
      if (_minX <= _maxX && _minY <= _maxY) {
        var minX = this.minX;
        var minY = this.minY;
        var maxX = this.maxX;
        var maxY = this.maxY;
        this.minX = _minX < minX ? _minX : minX;
        this.minY = _minY < minY ? _minY : minY;
        this.maxX = _maxX > maxX ? _maxX : maxX;
        this.maxY = _maxY > maxY ? _maxY : maxY;
      }
    };
    Bounds2.prototype.pad = function(paddingX, paddingY) {
      if (paddingX === void 0) {
        paddingX = 0;
      }
      if (paddingY === void 0) {
        paddingY = paddingX;
      }
      if (!this.isEmpty()) {
        this.minX -= paddingX;
        this.maxX += paddingX;
        this.minY -= paddingY;
        this.maxY += paddingY;
      }
    };
    Bounds2.prototype.addFramePad = function(x0, y0, x1, y1, padX, padY) {
      x0 -= padX;
      y0 -= padY;
      x1 += padX;
      y1 += padY;
      this.minX = this.minX < x0 ? this.minX : x0;
      this.maxX = this.maxX > x1 ? this.maxX : x1;
      this.minY = this.minY < y0 ? this.minY : y0;
      this.maxY = this.maxY > y1 ? this.maxY : y1;
    };
    return Bounds2;
  }()
);
var extendStatics2 = function(d, b) {
  extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
    d2.__proto__ = b2;
  } || function(d2, b2) {
    for (var p in b2) {
      if (b2.hasOwnProperty(p)) {
        d2[p] = b2[p];
      }
    }
  };
  return extendStatics2(d, b);
};
function __extends2(d, b) {
  extendStatics2(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var DisplayObject = (
  /** @class */
  function(_super) {
    __extends2(DisplayObject2, _super);
    function DisplayObject2() {
      var _this = _super.call(this) || this;
      _this.tempDisplayObjectParent = null;
      _this.transform = new Transform();
      _this.alpha = 1;
      _this.visible = true;
      _this.renderable = true;
      _this.cullable = false;
      _this.cullArea = null;
      _this.parent = null;
      _this.worldAlpha = 1;
      _this._lastSortedIndex = 0;
      _this._zIndex = 0;
      _this.filterArea = null;
      _this.filters = null;
      _this._enabledFilters = null;
      _this._bounds = new Bounds();
      _this._localBounds = null;
      _this._boundsID = 0;
      _this._boundsRect = null;
      _this._localBoundsRect = null;
      _this._mask = null;
      _this._maskRefCount = 0;
      _this._destroyed = false;
      _this.isSprite = false;
      _this.isMask = false;
      return _this;
    }
    DisplayObject2.mixin = function(source) {
      var keys = Object.keys(source);
      for (var i = 0; i < keys.length; ++i) {
        var propertyName = keys[i];
        Object.defineProperty(DisplayObject2.prototype, propertyName, Object.getOwnPropertyDescriptor(source, propertyName));
      }
    };
    Object.defineProperty(DisplayObject2.prototype, "destroyed", {
      /**
       * Fired when this DisplayObject is added to a Container.
       * @instance
       * @event added
       * @param {PIXI.Container} container - The container added to.
       */
      /**
       * Fired when this DisplayObject is removed from a Container.
       * @instance
       * @event removed
       * @param {PIXI.Container} container - The container removed from.
       */
      /**
       * Fired when this DisplayObject is destroyed. This event is emitted once
       * destroy is finished.
       * @instance
       * @event destroyed
       */
      /** Readonly flag for destroyed display objects. */
      get: function() {
        return this._destroyed;
      },
      enumerable: false,
      configurable: true
    });
    DisplayObject2.prototype._recursivePostUpdateTransform = function() {
      if (this.parent) {
        this.parent._recursivePostUpdateTransform();
        this.transform.updateTransform(this.parent.transform);
      } else {
        this.transform.updateTransform(this._tempDisplayObjectParent.transform);
      }
    };
    DisplayObject2.prototype.updateTransform = function() {
      this._boundsID++;
      this.transform.updateTransform(this.parent.transform);
      this.worldAlpha = this.alpha * this.parent.worldAlpha;
    };
    DisplayObject2.prototype.getBounds = function(skipUpdate, rect) {
      if (!skipUpdate) {
        if (!this.parent) {
          this.parent = this._tempDisplayObjectParent;
          this.updateTransform();
          this.parent = null;
        } else {
          this._recursivePostUpdateTransform();
          this.updateTransform();
        }
      }
      if (this._bounds.updateID !== this._boundsID) {
        this.calculateBounds();
        this._bounds.updateID = this._boundsID;
      }
      if (!rect) {
        if (!this._boundsRect) {
          this._boundsRect = new Rectangle();
        }
        rect = this._boundsRect;
      }
      return this._bounds.getRectangle(rect);
    };
    DisplayObject2.prototype.getLocalBounds = function(rect) {
      if (!rect) {
        if (!this._localBoundsRect) {
          this._localBoundsRect = new Rectangle();
        }
        rect = this._localBoundsRect;
      }
      if (!this._localBounds) {
        this._localBounds = new Bounds();
      }
      var transformRef = this.transform;
      var parentRef = this.parent;
      this.parent = null;
      this.transform = this._tempDisplayObjectParent.transform;
      var worldBounds = this._bounds;
      var worldBoundsID = this._boundsID;
      this._bounds = this._localBounds;
      var bounds = this.getBounds(false, rect);
      this.parent = parentRef;
      this.transform = transformRef;
      this._bounds = worldBounds;
      this._bounds.updateID += this._boundsID - worldBoundsID;
      return bounds;
    };
    DisplayObject2.prototype.toGlobal = function(position, point, skipUpdate) {
      if (skipUpdate === void 0) {
        skipUpdate = false;
      }
      if (!skipUpdate) {
        this._recursivePostUpdateTransform();
        if (!this.parent) {
          this.parent = this._tempDisplayObjectParent;
          this.displayObjectUpdateTransform();
          this.parent = null;
        } else {
          this.displayObjectUpdateTransform();
        }
      }
      return this.worldTransform.apply(position, point);
    };
    DisplayObject2.prototype.toLocal = function(position, from, point, skipUpdate) {
      if (from) {
        position = from.toGlobal(position, point, skipUpdate);
      }
      if (!skipUpdate) {
        this._recursivePostUpdateTransform();
        if (!this.parent) {
          this.parent = this._tempDisplayObjectParent;
          this.displayObjectUpdateTransform();
          this.parent = null;
        } else {
          this.displayObjectUpdateTransform();
        }
      }
      return this.worldTransform.applyInverse(position, point);
    };
    DisplayObject2.prototype.setParent = function(container) {
      if (!container || !container.addChild) {
        throw new Error("setParent: Argument must be a Container");
      }
      container.addChild(this);
      return container;
    };
    DisplayObject2.prototype.setTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, pivotX, pivotY) {
      if (x === void 0) {
        x = 0;
      }
      if (y === void 0) {
        y = 0;
      }
      if (scaleX === void 0) {
        scaleX = 1;
      }
      if (scaleY === void 0) {
        scaleY = 1;
      }
      if (rotation === void 0) {
        rotation = 0;
      }
      if (skewX === void 0) {
        skewX = 0;
      }
      if (skewY === void 0) {
        skewY = 0;
      }
      if (pivotX === void 0) {
        pivotX = 0;
      }
      if (pivotY === void 0) {
        pivotY = 0;
      }
      this.position.x = x;
      this.position.y = y;
      this.scale.x = !scaleX ? 1 : scaleX;
      this.scale.y = !scaleY ? 1 : scaleY;
      this.rotation = rotation;
      this.skew.x = skewX;
      this.skew.y = skewY;
      this.pivot.x = pivotX;
      this.pivot.y = pivotY;
      return this;
    };
    DisplayObject2.prototype.destroy = function(_options) {
      if (this.parent) {
        this.parent.removeChild(this);
      }
      this._destroyed = true;
      this.transform = null;
      this.parent = null;
      this._bounds = null;
      this.mask = null;
      this.cullArea = null;
      this.filters = null;
      this.filterArea = null;
      this.hitArea = null;
      this.interactive = false;
      this.interactiveChildren = false;
      this.emit("destroyed");
      this.removeAllListeners();
    };
    Object.defineProperty(DisplayObject2.prototype, "_tempDisplayObjectParent", {
      /**
       * @protected
       * @member {PIXI.Container}
       */
      get: function() {
        if (this.tempDisplayObjectParent === null) {
          this.tempDisplayObjectParent = new TemporaryDisplayObject();
        }
        return this.tempDisplayObjectParent;
      },
      enumerable: false,
      configurable: true
    });
    DisplayObject2.prototype.enableTempParent = function() {
      var myParent = this.parent;
      this.parent = this._tempDisplayObjectParent;
      return myParent;
    };
    DisplayObject2.prototype.disableTempParent = function(cacheParent) {
      this.parent = cacheParent;
    };
    Object.defineProperty(DisplayObject2.prototype, "x", {
      /**
       * The position of the displayObject on the x axis relative to the local coordinates of the parent.
       * An alias to position.x
       */
      get: function() {
        return this.position.x;
      },
      set: function(value) {
        this.transform.position.x = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DisplayObject2.prototype, "y", {
      /**
       * The position of the displayObject on the y axis relative to the local coordinates of the parent.
       * An alias to position.y
       */
      get: function() {
        return this.position.y;
      },
      set: function(value) {
        this.transform.position.y = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DisplayObject2.prototype, "worldTransform", {
      /**
       * Current transform of the object based on world (parent) factors.
       * @readonly
       */
      get: function() {
        return this.transform.worldTransform;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DisplayObject2.prototype, "localTransform", {
      /**
       * Current transform of the object based on local factors: position, scale, other stuff.
       * @readonly
       */
      get: function() {
        return this.transform.localTransform;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DisplayObject2.prototype, "position", {
      /**
       * The coordinate of the object relative to the local coordinates of the parent.
       * @since 4.0.0
       */
      get: function() {
        return this.transform.position;
      },
      set: function(value) {
        this.transform.position.copyFrom(value);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DisplayObject2.prototype, "scale", {
      /**
       * The scale factors of this object along the local coordinate axes.
       *
       * The default scale is (1, 1).
       * @since 4.0.0
       */
      get: function() {
        return this.transform.scale;
      },
      set: function(value) {
        this.transform.scale.copyFrom(value);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DisplayObject2.prototype, "pivot", {
      /**
       * The center of rotation, scaling, and skewing for this display object in its local space. The `position`
       * is the projection of `pivot` in the parent's local space.
       *
       * By default, the pivot is the origin (0, 0).
       * @since 4.0.0
       */
      get: function() {
        return this.transform.pivot;
      },
      set: function(value) {
        this.transform.pivot.copyFrom(value);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DisplayObject2.prototype, "skew", {
      /**
       * The skew factor for the object in radians.
       * @since 4.0.0
       */
      get: function() {
        return this.transform.skew;
      },
      set: function(value) {
        this.transform.skew.copyFrom(value);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DisplayObject2.prototype, "rotation", {
      /**
       * The rotation of the object in radians.
       * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
       */
      get: function() {
        return this.transform.rotation;
      },
      set: function(value) {
        this.transform.rotation = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DisplayObject2.prototype, "angle", {
      /**
       * The angle of the object in degrees.
       * 'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.
       */
      get: function() {
        return this.transform.rotation * RAD_TO_DEG;
      },
      set: function(value) {
        this.transform.rotation = value * DEG_TO_RAD;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DisplayObject2.prototype, "zIndex", {
      /**
       * The zIndex of the displayObject.
       *
       * If a container has the sortableChildren property set to true, children will be automatically
       * sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
       * and thus rendered on top of other display objects within the same container.
       * @see PIXI.Container#sortableChildren
       */
      get: function() {
        return this._zIndex;
      },
      set: function(value) {
        this._zIndex = value;
        if (this.parent) {
          this.parent.sortDirty = true;
        }
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DisplayObject2.prototype, "worldVisible", {
      /**
       * Indicates if the object is globally visible.
       * @readonly
       */
      get: function() {
        var item = this;
        do {
          if (!item.visible) {
            return false;
          }
          item = item.parent;
        } while (item);
        return true;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(DisplayObject2.prototype, "mask", {
      /**
       * Sets a mask for the displayObject. A mask is an object that limits the visibility of an
       * object to the shape of the mask applied to it. In PixiJS a regular mask must be a
       * {@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
       * utilities shape clipping. Furthermore, a mask of an object must be in the subtree of its parent.
       * Otherwise, `getLocalBounds` may calculate incorrect bounds, which makes the container's width and height wrong.
       * To remove a mask, set this property to `null`.
       *
       * For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.
       * @example
       * const graphics = new PIXI.Graphics();
       * graphics.beginFill(0xFF3300);
       * graphics.drawRect(50, 250, 100, 100);
       * graphics.endFill();
       *
       * const sprite = new PIXI.Sprite(texture);
       * sprite.mask = graphics;
       * @todo At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.
       */
      get: function() {
        return this._mask;
      },
      set: function(value) {
        if (this._mask === value) {
          return;
        }
        if (this._mask) {
          var maskObject = this._mask.isMaskData ? this._mask.maskObject : this._mask;
          if (maskObject) {
            maskObject._maskRefCount--;
            if (maskObject._maskRefCount === 0) {
              maskObject.renderable = true;
              maskObject.isMask = false;
            }
          }
        }
        this._mask = value;
        if (this._mask) {
          var maskObject = this._mask.isMaskData ? this._mask.maskObject : this._mask;
          if (maskObject) {
            if (maskObject._maskRefCount === 0) {
              maskObject.renderable = false;
              maskObject.isMask = true;
            }
            maskObject._maskRefCount++;
          }
        }
      },
      enumerable: false,
      configurable: true
    });
    return DisplayObject2;
  }(import_eventemitter3.default)
);
var TemporaryDisplayObject = (
  /** @class */
  function(_super) {
    __extends2(TemporaryDisplayObject2, _super);
    function TemporaryDisplayObject2() {
      var _this = _super !== null && _super.apply(this, arguments) || this;
      _this.sortDirty = null;
      return _this;
    }
    return TemporaryDisplayObject2;
  }(DisplayObject)
);
DisplayObject.prototype.displayObjectUpdateTransform = DisplayObject.prototype.updateTransform;
var ENV3;
(function(ENV4) {
  ENV4[ENV4["WEBGL_LEGACY"] = 0] = "WEBGL_LEGACY";
  ENV4[ENV4["WEBGL"] = 1] = "WEBGL";
  ENV4[ENV4["WEBGL2"] = 2] = "WEBGL2";
})(ENV3 || (ENV3 = {}));
var RENDERER_TYPE3;
(function(RENDERER_TYPE4) {
  RENDERER_TYPE4[RENDERER_TYPE4["UNKNOWN"] = 0] = "UNKNOWN";
  RENDERER_TYPE4[RENDERER_TYPE4["WEBGL"] = 1] = "WEBGL";
  RENDERER_TYPE4[RENDERER_TYPE4["CANVAS"] = 2] = "CANVAS";
})(RENDERER_TYPE3 || (RENDERER_TYPE3 = {}));
var BUFFER_BITS3;
(function(BUFFER_BITS4) {
  BUFFER_BITS4[BUFFER_BITS4["COLOR"] = 16384] = "COLOR";
  BUFFER_BITS4[BUFFER_BITS4["DEPTH"] = 256] = "DEPTH";
  BUFFER_BITS4[BUFFER_BITS4["STENCIL"] = 1024] = "STENCIL";
})(BUFFER_BITS3 || (BUFFER_BITS3 = {}));
var BLEND_MODES3;
(function(BLEND_MODES4) {
  BLEND_MODES4[BLEND_MODES4["NORMAL"] = 0] = "NORMAL";
  BLEND_MODES4[BLEND_MODES4["ADD"] = 1] = "ADD";
  BLEND_MODES4[BLEND_MODES4["MULTIPLY"] = 2] = "MULTIPLY";
  BLEND_MODES4[BLEND_MODES4["SCREEN"] = 3] = "SCREEN";
  BLEND_MODES4[BLEND_MODES4["OVERLAY"] = 4] = "OVERLAY";
  BLEND_MODES4[BLEND_MODES4["DARKEN"] = 5] = "DARKEN";
  BLEND_MODES4[BLEND_MODES4["LIGHTEN"] = 6] = "LIGHTEN";
  BLEND_MODES4[BLEND_MODES4["COLOR_DODGE"] = 7] = "COLOR_DODGE";
  BLEND_MODES4[BLEND_MODES4["COLOR_BURN"] = 8] = "COLOR_BURN";
  BLEND_MODES4[BLEND_MODES4["HARD_LIGHT"] = 9] = "HARD_LIGHT";
  BLEND_MODES4[BLEND_MODES4["SOFT_LIGHT"] = 10] = "SOFT_LIGHT";
  BLEND_MODES4[BLEND_MODES4["DIFFERENCE"] = 11] = "DIFFERENCE";
  BLEND_MODES4[BLEND_MODES4["EXCLUSION"] = 12] = "EXCLUSION";
  BLEND_MODES4[BLEND_MODES4["HUE"] = 13] = "HUE";
  BLEND_MODES4[BLEND_MODES4["SATURATION"] = 14] = "SATURATION";
  BLEND_MODES4[BLEND_MODES4["COLOR"] = 15] = "COLOR";
  BLEND_MODES4[BLEND_MODES4["LUMINOSITY"] = 16] = "LUMINOSITY";
  BLEND_MODES4[BLEND_MODES4["NORMAL_NPM"] = 17] = "NORMAL_NPM";
  BLEND_MODES4[BLEND_MODES4["ADD_NPM"] = 18] = "ADD_NPM";
  BLEND_MODES4[BLEND_MODES4["SCREEN_NPM"] = 19] = "SCREEN_NPM";
  BLEND_MODES4[BLEND_MODES4["NONE"] = 20] = "NONE";
  BLEND_MODES4[BLEND_MODES4["SRC_OVER"] = 0] = "SRC_OVER";
  BLEND_MODES4[BLEND_MODES4["SRC_IN"] = 21] = "SRC_IN";
  BLEND_MODES4[BLEND_MODES4["SRC_OUT"] = 22] = "SRC_OUT";
  BLEND_MODES4[BLEND_MODES4["SRC_ATOP"] = 23] = "SRC_ATOP";
  BLEND_MODES4[BLEND_MODES4["DST_OVER"] = 24] = "DST_OVER";
  BLEND_MODES4[BLEND_MODES4["DST_IN"] = 25] = "DST_IN";
  BLEND_MODES4[BLEND_MODES4["DST_OUT"] = 26] = "DST_OUT";
  BLEND_MODES4[BLEND_MODES4["DST_ATOP"] = 27] = "DST_ATOP";
  BLEND_MODES4[BLEND_MODES4["ERASE"] = 26] = "ERASE";
  BLEND_MODES4[BLEND_MODES4["SUBTRACT"] = 28] = "SUBTRACT";
  BLEND_MODES4[BLEND_MODES4["XOR"] = 29] = "XOR";
})(BLEND_MODES3 || (BLEND_MODES3 = {}));
var DRAW_MODES3;
(function(DRAW_MODES4) {
  DRAW_MODES4[DRAW_MODES4["POINTS"] = 0] = "POINTS";
  DRAW_MODES4[DRAW_MODES4["LINES"] = 1] = "LINES";
  DRAW_MODES4[DRAW_MODES4["LINE_LOOP"] = 2] = "LINE_LOOP";
  DRAW_MODES4[DRAW_MODES4["LINE_STRIP"] = 3] = "LINE_STRIP";
  DRAW_MODES4[DRAW_MODES4["TRIANGLES"] = 4] = "TRIANGLES";
  DRAW_MODES4[DRAW_MODES4["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
  DRAW_MODES4[DRAW_MODES4["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
})(DRAW_MODES3 || (DRAW_MODES3 = {}));
var FORMATS3;
(function(FORMATS4) {
  FORMATS4[FORMATS4["RGBA"] = 6408] = "RGBA";
  FORMATS4[FORMATS4["RGB"] = 6407] = "RGB";
  FORMATS4[FORMATS4["RG"] = 33319] = "RG";
  FORMATS4[FORMATS4["RED"] = 6403] = "RED";
  FORMATS4[FORMATS4["RGBA_INTEGER"] = 36249] = "RGBA_INTEGER";
  FORMATS4[FORMATS4["RGB_INTEGER"] = 36248] = "RGB_INTEGER";
  FORMATS4[FORMATS4["RG_INTEGER"] = 33320] = "RG_INTEGER";
  FORMATS4[FORMATS4["RED_INTEGER"] = 36244] = "RED_INTEGER";
  FORMATS4[FORMATS4["ALPHA"] = 6406] = "ALPHA";
  FORMATS4[FORMATS4["LUMINANCE"] = 6409] = "LUMINANCE";
  FORMATS4[FORMATS4["LUMINANCE_ALPHA"] = 6410] = "LUMINANCE_ALPHA";
  FORMATS4[FORMATS4["DEPTH_COMPONENT"] = 6402] = "DEPTH_COMPONENT";
  FORMATS4[FORMATS4["DEPTH_STENCIL"] = 34041] = "DEPTH_STENCIL";
})(FORMATS3 || (FORMATS3 = {}));
var TARGETS3;
(function(TARGETS4) {
  TARGETS4[TARGETS4["TEXTURE_2D"] = 3553] = "TEXTURE_2D";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP"] = 34067] = "TEXTURE_CUBE_MAP";
  TARGETS4[TARGETS4["TEXTURE_2D_ARRAY"] = 35866] = "TEXTURE_2D_ARRAY";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_POSITIVE_X"] = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_NEGATIVE_X"] = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_POSITIVE_Y"] = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_NEGATIVE_Y"] = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_POSITIVE_Z"] = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z";
  TARGETS4[TARGETS4["TEXTURE_CUBE_MAP_NEGATIVE_Z"] = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z";
})(TARGETS3 || (TARGETS3 = {}));
var TYPES3;
(function(TYPES4) {
  TYPES4[TYPES4["UNSIGNED_BYTE"] = 5121] = "UNSIGNED_BYTE";
  TYPES4[TYPES4["UNSIGNED_SHORT"] = 5123] = "UNSIGNED_SHORT";
  TYPES4[TYPES4["UNSIGNED_SHORT_5_6_5"] = 33635] = "UNSIGNED_SHORT_5_6_5";
  TYPES4[TYPES4["UNSIGNED_SHORT_4_4_4_4"] = 32819] = "UNSIGNED_SHORT_4_4_4_4";
  TYPES4[TYPES4["UNSIGNED_SHORT_5_5_5_1"] = 32820] = "UNSIGNED_SHORT_5_5_5_1";
  TYPES4[TYPES4["UNSIGNED_INT"] = 5125] = "UNSIGNED_INT";
  TYPES4[TYPES4["UNSIGNED_INT_10F_11F_11F_REV"] = 35899] = "UNSIGNED_INT_10F_11F_11F_REV";
  TYPES4[TYPES4["UNSIGNED_INT_2_10_10_10_REV"] = 33640] = "UNSIGNED_INT_2_10_10_10_REV";
  TYPES4[TYPES4["UNSIGNED_INT_24_8"] = 34042] = "UNSIGNED_INT_24_8";
  TYPES4[TYPES4["UNSIGNED_INT_5_9_9_9_REV"] = 35902] = "UNSIGNED_INT_5_9_9_9_REV";
  TYPES4[TYPES4["BYTE"] = 5120] = "BYTE";
  TYPES4[TYPES4["SHORT"] = 5122] = "SHORT";
  TYPES4[TYPES4["INT"] = 5124] = "INT";
  TYPES4[TYPES4["FLOAT"] = 5126] = "FLOAT";
  TYPES4[TYPES4["FLOAT_32_UNSIGNED_INT_24_8_REV"] = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV";
  TYPES4[TYPES4["HALF_FLOAT"] = 36193] = "HALF_FLOAT";
})(TYPES3 || (TYPES3 = {}));
var SAMPLER_TYPES3;
(function(SAMPLER_TYPES4) {
  SAMPLER_TYPES4[SAMPLER_TYPES4["FLOAT"] = 0] = "FLOAT";
  SAMPLER_TYPES4[SAMPLER_TYPES4["INT"] = 1] = "INT";
  SAMPLER_TYPES4[SAMPLER_TYPES4["UINT"] = 2] = "UINT";
})(SAMPLER_TYPES3 || (SAMPLER_TYPES3 = {}));
var SCALE_MODES3;
(function(SCALE_MODES4) {
  SCALE_MODES4[SCALE_MODES4["NEAREST"] = 0] = "NEAREST";
  SCALE_MODES4[SCALE_MODES4["LINEAR"] = 1] = "LINEAR";
})(SCALE_MODES3 || (SCALE_MODES3 = {}));
var WRAP_MODES3;
(function(WRAP_MODES4) {
  WRAP_MODES4[WRAP_MODES4["CLAMP"] = 33071] = "CLAMP";
  WRAP_MODES4[WRAP_MODES4["REPEAT"] = 10497] = "REPEAT";
  WRAP_MODES4[WRAP_MODES4["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
})(WRAP_MODES3 || (WRAP_MODES3 = {}));
var MIPMAP_MODES3;
(function(MIPMAP_MODES4) {
  MIPMAP_MODES4[MIPMAP_MODES4["OFF"] = 0] = "OFF";
  MIPMAP_MODES4[MIPMAP_MODES4["POW2"] = 1] = "POW2";
  MIPMAP_MODES4[MIPMAP_MODES4["ON"] = 2] = "ON";
  MIPMAP_MODES4[MIPMAP_MODES4["ON_MANUAL"] = 3] = "ON_MANUAL";
})(MIPMAP_MODES3 || (MIPMAP_MODES3 = {}));
var ALPHA_MODES3;
(function(ALPHA_MODES4) {
  ALPHA_MODES4[ALPHA_MODES4["NPM"] = 0] = "NPM";
  ALPHA_MODES4[ALPHA_MODES4["UNPACK"] = 1] = "UNPACK";
  ALPHA_MODES4[ALPHA_MODES4["PMA"] = 2] = "PMA";
  ALPHA_MODES4[ALPHA_MODES4["NO_PREMULTIPLIED_ALPHA"] = 0] = "NO_PREMULTIPLIED_ALPHA";
  ALPHA_MODES4[ALPHA_MODES4["PREMULTIPLY_ON_UPLOAD"] = 1] = "PREMULTIPLY_ON_UPLOAD";
  ALPHA_MODES4[ALPHA_MODES4["PREMULTIPLY_ALPHA"] = 2] = "PREMULTIPLY_ALPHA";
  ALPHA_MODES4[ALPHA_MODES4["PREMULTIPLIED_ALPHA"] = 2] = "PREMULTIPLIED_ALPHA";
})(ALPHA_MODES3 || (ALPHA_MODES3 = {}));
var CLEAR_MODES3;
(function(CLEAR_MODES4) {
  CLEAR_MODES4[CLEAR_MODES4["NO"] = 0] = "NO";
  CLEAR_MODES4[CLEAR_MODES4["YES"] = 1] = "YES";
  CLEAR_MODES4[CLEAR_MODES4["AUTO"] = 2] = "AUTO";
  CLEAR_MODES4[CLEAR_MODES4["BLEND"] = 0] = "BLEND";
  CLEAR_MODES4[CLEAR_MODES4["CLEAR"] = 1] = "CLEAR";
  CLEAR_MODES4[CLEAR_MODES4["BLIT"] = 2] = "BLIT";
})(CLEAR_MODES3 || (CLEAR_MODES3 = {}));
var GC_MODES3;
(function(GC_MODES4) {
  GC_MODES4[GC_MODES4["AUTO"] = 0] = "AUTO";
  GC_MODES4[GC_MODES4["MANUAL"] = 1] = "MANUAL";
})(GC_MODES3 || (GC_MODES3 = {}));
var PRECISION3;
(function(PRECISION4) {
  PRECISION4["LOW"] = "lowp";
  PRECISION4["MEDIUM"] = "mediump";
  PRECISION4["HIGH"] = "highp";
})(PRECISION3 || (PRECISION3 = {}));
var MASK_TYPES3;
(function(MASK_TYPES4) {
  MASK_TYPES4[MASK_TYPES4["NONE"] = 0] = "NONE";
  MASK_TYPES4[MASK_TYPES4["SCISSOR"] = 1] = "SCISSOR";
  MASK_TYPES4[MASK_TYPES4["STENCIL"] = 2] = "STENCIL";
  MASK_TYPES4[MASK_TYPES4["SPRITE"] = 3] = "SPRITE";
  MASK_TYPES4[MASK_TYPES4["COLOR"] = 4] = "COLOR";
})(MASK_TYPES3 || (MASK_TYPES3 = {}));
var COLOR_MASK_BITS3;
(function(COLOR_MASK_BITS4) {
  COLOR_MASK_BITS4[COLOR_MASK_BITS4["RED"] = 1] = "RED";
  COLOR_MASK_BITS4[COLOR_MASK_BITS4["GREEN"] = 2] = "GREEN";
  COLOR_MASK_BITS4[COLOR_MASK_BITS4["BLUE"] = 4] = "BLUE";
  COLOR_MASK_BITS4[COLOR_MASK_BITS4["ALPHA"] = 8] = "ALPHA";
})(COLOR_MASK_BITS3 || (COLOR_MASK_BITS3 = {}));
var MSAA_QUALITY3;
(function(MSAA_QUALITY4) {
  MSAA_QUALITY4[MSAA_QUALITY4["NONE"] = 0] = "NONE";
  MSAA_QUALITY4[MSAA_QUALITY4["LOW"] = 2] = "LOW";
  MSAA_QUALITY4[MSAA_QUALITY4["MEDIUM"] = 4] = "MEDIUM";
  MSAA_QUALITY4[MSAA_QUALITY4["HIGH"] = 8] = "HIGH";
})(MSAA_QUALITY3 || (MSAA_QUALITY3 = {}));
var BUFFER_TYPE3;
(function(BUFFER_TYPE4) {
  BUFFER_TYPE4[BUFFER_TYPE4["ELEMENT_ARRAY_BUFFER"] = 34963] = "ELEMENT_ARRAY_BUFFER";
  BUFFER_TYPE4[BUFFER_TYPE4["ARRAY_BUFFER"] = 34962] = "ARRAY_BUFFER";
  BUFFER_TYPE4[BUFFER_TYPE4["UNIFORM_BUFFER"] = 35345] = "UNIFORM_BUFFER";
})(BUFFER_TYPE3 || (BUFFER_TYPE3 = {}));
function sortChildren(a, b) {
  if (a.zIndex === b.zIndex) {
    return a._lastSortedIndex - b._lastSortedIndex;
  }
  return a.zIndex - b.zIndex;
}
var Container = (
  /** @class */
  function(_super) {
    __extends2(Container2, _super);
    function Container2() {
      var _this = _super.call(this) || this;
      _this.children = [];
      _this.sortableChildren = settings.SORTABLE_CHILDREN;
      _this.sortDirty = false;
      return _this;
    }
    Container2.prototype.onChildrenChange = function(_length) {
    };
    Container2.prototype.addChild = function() {
      var arguments$1 = arguments;
      var children = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        children[_i] = arguments$1[_i];
      }
      if (children.length > 1) {
        for (var i = 0; i < children.length; i++) {
          this.addChild(children[i]);
        }
      } else {
        var child = children[0];
        if (child.parent) {
          child.parent.removeChild(child);
        }
        child.parent = this;
        this.sortDirty = true;
        child.transform._parentID = -1;
        this.children.push(child);
        this._boundsID++;
        this.onChildrenChange(this.children.length - 1);
        this.emit("childAdded", child, this, this.children.length - 1);
        child.emit("added", this);
      }
      return children[0];
    };
    Container2.prototype.addChildAt = function(child, index) {
      if (index < 0 || index > this.children.length) {
        throw new Error(child + "addChildAt: The index " + index + " supplied is out of bounds " + this.children.length);
      }
      if (child.parent) {
        child.parent.removeChild(child);
      }
      child.parent = this;
      this.sortDirty = true;
      child.transform._parentID = -1;
      this.children.splice(index, 0, child);
      this._boundsID++;
      this.onChildrenChange(index);
      child.emit("added", this);
      this.emit("childAdded", child, this, index);
      return child;
    };
    Container2.prototype.swapChildren = function(child, child2) {
      if (child === child2) {
        return;
      }
      var index1 = this.getChildIndex(child);
      var index2 = this.getChildIndex(child2);
      this.children[index1] = child2;
      this.children[index2] = child;
      this.onChildrenChange(index1 < index2 ? index1 : index2);
    };
    Container2.prototype.getChildIndex = function(child) {
      var index = this.children.indexOf(child);
      if (index === -1) {
        throw new Error("The supplied DisplayObject must be a child of the caller");
      }
      return index;
    };
    Container2.prototype.setChildIndex = function(child, index) {
      if (index < 0 || index >= this.children.length) {
        throw new Error("The index " + index + " supplied is out of bounds " + this.children.length);
      }
      var currentIndex = this.getChildIndex(child);
      removeItems(this.children, currentIndex, 1);
      this.children.splice(index, 0, child);
      this.onChildrenChange(index);
    };
    Container2.prototype.getChildAt = function(index) {
      if (index < 0 || index >= this.children.length) {
        throw new Error("getChildAt: Index (" + index + ") does not exist.");
      }
      return this.children[index];
    };
    Container2.prototype.removeChild = function() {
      var arguments$1 = arguments;
      var children = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        children[_i] = arguments$1[_i];
      }
      if (children.length > 1) {
        for (var i = 0; i < children.length; i++) {
          this.removeChild(children[i]);
        }
      } else {
        var child = children[0];
        var index = this.children.indexOf(child);
        if (index === -1) {
          return null;
        }
        child.parent = null;
        child.transform._parentID = -1;
        removeItems(this.children, index, 1);
        this._boundsID++;
        this.onChildrenChange(index);
        child.emit("removed", this);
        this.emit("childRemoved", child, this, index);
      }
      return children[0];
    };
    Container2.prototype.removeChildAt = function(index) {
      var child = this.getChildAt(index);
      child.parent = null;
      child.transform._parentID = -1;
      removeItems(this.children, index, 1);
      this._boundsID++;
      this.onChildrenChange(index);
      child.emit("removed", this);
      this.emit("childRemoved", child, this, index);
      return child;
    };
    Container2.prototype.removeChildren = function(beginIndex, endIndex) {
      if (beginIndex === void 0) {
        beginIndex = 0;
      }
      if (endIndex === void 0) {
        endIndex = this.children.length;
      }
      var begin = beginIndex;
      var end = endIndex;
      var range = end - begin;
      var removed;
      if (range > 0 && range <= end) {
        removed = this.children.splice(begin, range);
        for (var i = 0; i < removed.length; ++i) {
          removed[i].parent = null;
          if (removed[i].transform) {
            removed[i].transform._parentID = -1;
          }
        }
        this._boundsID++;
        this.onChildrenChange(beginIndex);
        for (var i = 0; i < removed.length; ++i) {
          removed[i].emit("removed", this);
          this.emit("childRemoved", removed[i], this, i);
        }
        return removed;
      } else if (range === 0 && this.children.length === 0) {
        return [];
      }
      throw new RangeError("removeChildren: numeric values are outside the acceptable range.");
    };
    Container2.prototype.sortChildren = function() {
      var sortRequired = false;
      for (var i = 0, j = this.children.length; i < j; ++i) {
        var child = this.children[i];
        child._lastSortedIndex = i;
        if (!sortRequired && child.zIndex !== 0) {
          sortRequired = true;
        }
      }
      if (sortRequired && this.children.length > 1) {
        this.children.sort(sortChildren);
      }
      this.sortDirty = false;
    };
    Container2.prototype.updateTransform = function() {
      if (this.sortableChildren && this.sortDirty) {
        this.sortChildren();
      }
      this._boundsID++;
      this.transform.updateTransform(this.parent.transform);
      this.worldAlpha = this.alpha * this.parent.worldAlpha;
      for (var i = 0, j = this.children.length; i < j; ++i) {
        var child = this.children[i];
        if (child.visible) {
          child.updateTransform();
        }
      }
    };
    Container2.prototype.calculateBounds = function() {
      this._bounds.clear();
      this._calculateBounds();
      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (!child.visible || !child.renderable) {
          continue;
        }
        child.calculateBounds();
        if (child._mask) {
          var maskObject = child._mask.isMaskData ? child._mask.maskObject : child._mask;
          if (maskObject) {
            maskObject.calculateBounds();
            this._bounds.addBoundsMask(child._bounds, maskObject._bounds);
          } else {
            this._bounds.addBounds(child._bounds);
          }
        } else if (child.filterArea) {
          this._bounds.addBoundsArea(child._bounds, child.filterArea);
        } else {
          this._bounds.addBounds(child._bounds);
        }
      }
      this._bounds.updateID = this._boundsID;
    };
    Container2.prototype.getLocalBounds = function(rect, skipChildrenUpdate) {
      if (skipChildrenUpdate === void 0) {
        skipChildrenUpdate = false;
      }
      var result = _super.prototype.getLocalBounds.call(this, rect);
      if (!skipChildrenUpdate) {
        for (var i = 0, j = this.children.length; i < j; ++i) {
          var child = this.children[i];
          if (child.visible) {
            child.updateTransform();
          }
        }
      }
      return result;
    };
    Container2.prototype._calculateBounds = function() {
    };
    Container2.prototype._renderWithCulling = function(renderer) {
      var sourceFrame = renderer.renderTexture.sourceFrame;
      if (!(sourceFrame.width > 0 && sourceFrame.height > 0)) {
        return;
      }
      var bounds;
      var transform;
      if (this.cullArea) {
        bounds = this.cullArea;
        transform = this.worldTransform;
      } else if (this._render !== Container2.prototype._render) {
        bounds = this.getBounds(true);
      }
      if (bounds && sourceFrame.intersects(bounds, transform)) {
        this._render(renderer);
      } else if (this.cullArea) {
        return;
      }
      for (var i = 0, j = this.children.length; i < j; ++i) {
        var child = this.children[i];
        var childCullable = child.cullable;
        child.cullable = childCullable || !this.cullArea;
        child.render(renderer);
        child.cullable = childCullable;
      }
    };
    Container2.prototype.render = function(renderer) {
      if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
        return;
      }
      if (this._mask || this.filters && this.filters.length) {
        this.renderAdvanced(renderer);
      } else if (this.cullable) {
        this._renderWithCulling(renderer);
      } else {
        this._render(renderer);
        for (var i = 0, j = this.children.length; i < j; ++i) {
          this.children[i].render(renderer);
        }
      }
    };
    Container2.prototype.renderAdvanced = function(renderer) {
      var filters = this.filters;
      var mask = this._mask;
      if (filters) {
        if (!this._enabledFilters) {
          this._enabledFilters = [];
        }
        this._enabledFilters.length = 0;
        for (var i = 0; i < filters.length; i++) {
          if (filters[i].enabled) {
            this._enabledFilters.push(filters[i]);
          }
        }
      }
      var flush = filters && this._enabledFilters && this._enabledFilters.length || mask && (!mask.isMaskData || mask.enabled && (mask.autoDetect || mask.type !== MASK_TYPES3.NONE));
      if (flush) {
        renderer.batch.flush();
      }
      if (filters && this._enabledFilters && this._enabledFilters.length) {
        renderer.filter.push(this, this._enabledFilters);
      }
      if (mask) {
        renderer.mask.push(this, this._mask);
      }
      if (this.cullable) {
        this._renderWithCulling(renderer);
      } else {
        this._render(renderer);
        for (var i = 0, j = this.children.length; i < j; ++i) {
          this.children[i].render(renderer);
        }
      }
      if (flush) {
        renderer.batch.flush();
      }
      if (mask) {
        renderer.mask.pop(this);
      }
      if (filters && this._enabledFilters && this._enabledFilters.length) {
        renderer.filter.pop();
      }
    };
    Container2.prototype._render = function(_renderer) {
    };
    Container2.prototype.destroy = function(options) {
      _super.prototype.destroy.call(this);
      this.sortDirty = false;
      var destroyChildren = typeof options === "boolean" ? options : options && options.children;
      var oldChildren = this.removeChildren(0, this.children.length);
      if (destroyChildren) {
        for (var i = 0; i < oldChildren.length; ++i) {
          oldChildren[i].destroy(options);
        }
      }
    };
    Object.defineProperty(Container2.prototype, "width", {
      /** The width of the Container, setting this will actually modify the scale to achieve the value set. */
      get: function() {
        return this.scale.x * this.getLocalBounds().width;
      },
      set: function(value) {
        var width = this.getLocalBounds().width;
        if (width !== 0) {
          this.scale.x = value / width;
        } else {
          this.scale.x = 1;
        }
        this._width = value;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Container2.prototype, "height", {
      /** The height of the Container, setting this will actually modify the scale to achieve the value set. */
      get: function() {
        return this.scale.y * this.getLocalBounds().height;
      },
      set: function(value) {
        var height = this.getLocalBounds().height;
        if (height !== 0) {
          this.scale.y = value / height;
        } else {
          this.scale.y = 1;
        }
        this._height = value;
      },
      enumerable: false,
      configurable: true
    });
    return Container2;
  }(DisplayObject)
);
Container.prototype.containerUpdateTransform = Container.prototype.updateTransform;

export {
  BrowserAdapter,
  isMobile,
  settings,
  ENV2 as ENV,
  RENDERER_TYPE2 as RENDERER_TYPE,
  BUFFER_BITS2 as BUFFER_BITS,
  BLEND_MODES2 as BLEND_MODES,
  DRAW_MODES2 as DRAW_MODES,
  FORMATS2 as FORMATS,
  TARGETS2 as TARGETS,
  TYPES2 as TYPES,
  SAMPLER_TYPES2 as SAMPLER_TYPES,
  SCALE_MODES2 as SCALE_MODES,
  WRAP_MODES2 as WRAP_MODES,
  MIPMAP_MODES2 as MIPMAP_MODES,
  ALPHA_MODES2 as ALPHA_MODES,
  CLEAR_MODES2 as CLEAR_MODES,
  GC_MODES2 as GC_MODES,
  PRECISION2 as PRECISION,
  MASK_TYPES2 as MASK_TYPES,
  COLOR_MASK_BITS2 as COLOR_MASK_BITS,
  MSAA_QUALITY2 as MSAA_QUALITY,
  BUFFER_TYPE2 as BUFFER_TYPE,
  url,
  hex2rgb,
  hex2string,
  string2hex,
  correctBlendMode,
  premultiplyRgba,
  premultiplyTint,
  premultiplyTintToRgba,
  createIndicesForQuads,
  removeItems,
  sign,
  uid,
  deprecation,
  CanvasRenderTarget,
  trimCanvas,
  getResolutionOfUrl,
  utils_exports,
  import_eventemitter3,
  import_earcut,
  PI_2,
  RAD_TO_DEG,
  DEG_TO_RAD,
  SHAPES,
  Point,
  Rectangle,
  Circle,
  Ellipse,
  Polygon,
  RoundedRectangle,
  ObservablePoint,
  Matrix,
  groupD8,
  Transform,
  ExtensionType,
  extensions,
  Runner,
  UPDATE_PRIORITY,
  Ticker,
  TickerPlugin,
  INSTALLED,
  autoDetectResource,
  Resource,
  BufferResource,
  BaseTexture,
  AbstractMultiResource,
  ArrayResource,
  BaseImageResource,
  CanvasResource,
  CubeResource,
  ImageResource,
  SVGResource,
  VideoResource,
  ImageBitmapResource,
  Framebuffer,
  BaseRenderTexture,
  TextureUvs,
  Texture,
  RenderTexture,
  RenderTexturePool,
  Attribute,
  Buffer,
  Geometry,
  Quad,
  QuadUv,
  UniformGroup,
  FilterState,
  FilterSystem,
  ObjectRenderer,
  BatchSystem,
  ContextSystem,
  GLFramebuffer,
  FramebufferSystem,
  GeometrySystem,
  MaskData,
  getTestContext,
  uniformParsers,
  checkMaxIfStatementsInShader,
  Program,
  Shader,
  State,
  Filter,
  TextureMatrix,
  SpriteMaskFilter,
  MaskSystem,
  ScissorSystem,
  StencilSystem,
  ProjectionSystem,
  RenderTextureSystem,
  createUBOElements,
  getUBOData,
  generateUniformBufferSync,
  IGLUniformData,
  GLProgram,
  generateProgram,
  ShaderSystem,
  StateSystem,
  TextureGCSystem,
  GLTexture,
  TextureSystem,
  AbstractRenderer,
  Renderer,
  autoDetectRenderer,
  defaultVertex$1,
  defaultFilterVertex,
  System,
  BatchDrawCall,
  BatchTextureArray,
  ViewableBuffer,
  AbstractBatchRenderer,
  BatchShaderGenerator,
  BatchGeometry,
  BatchPluginFactory,
  BatchRenderer,
  resources,
  systems,
  VERSION2 as VERSION,
  Bounds,
  DisplayObject,
  TemporaryDisplayObject,
  Container
};
/*! Bundled license information:

punycode/punycode.js:
  (*! https://mths.be/punycode v1.3.2 by @mathias *)

@pixi/settings/dist/esm/settings.mjs:
  (*!
   * @pixi/settings - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/settings is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*!
   * @pixi/constants - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/constants is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)

@pixi/constants/dist/esm/constants.mjs:
  (*!
   * @pixi/constants - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/constants is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)

@pixi/utils/dist/esm/utils.mjs:
  (*!
   * @pixi/utils - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/utils is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)

@pixi/math/dist/esm/math.mjs:
  (*!
   * @pixi/math - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/math is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)

@pixi/extensions/dist/esm/extensions.mjs:
  (*!
   * @pixi/extensions - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/extensions is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/runner/dist/esm/runner.mjs:
  (*!
   * @pixi/runner - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/runner is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)

@pixi/ticker/dist/esm/ticker.mjs:
  (*!
   * @pixi/ticker - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/ticker is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)

@pixi/core/dist/esm/core.mjs:
  (*!
   * @pixi/core - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/core is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@pixi/display/dist/esm/display.mjs:
  (*!
   * @pixi/display - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/display is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
  (*!
   * @pixi/constants - v6.5.2
   * Compiled Wed, 24 Aug 2022 13:51:19 UTC
   *
   * @pixi/constants is licensed under the MIT License.
   * http://www.opensource.org/licenses/mit-license
   *)
*/
//# sourceMappingURL=chunk-PW32FG5P.js.map
